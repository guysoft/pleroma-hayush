# Pleroma: A lightweight social networking server
# Copyright © 2017-2022 Pleroma Authors <https://pleroma.social/>
# SPDX-License-Identifier: AGPL-3.0-only

defmodule Pleroma.Emoji do
  @moduledoc """
  This GenServer stores in an ETS table the list of the loaded emojis,
  and also allows to reload the list at runtime.
  """
  use GenServer

  alias Pleroma.Emoji.Loader

  require Logger

  @ets __MODULE__.Ets
  @ets_options [
    :ordered_set,
    :protected,
    :named_table,
    {:read_concurrency, true}
  ]

  defstruct [:code, :file, :tags, :safe_code, :safe_file]

  @doc "Build emoji struct"
  def build({code, file, tags}) do
    %__MODULE__{
      code: code,
      file: file,
      tags: tags,
      safe_code: Pleroma.HTML.strip_tags(code),
      safe_file: Pleroma.HTML.strip_tags(file)
    }
  end

  def build({code, file}), do: build({code, file, []})

  @doc false
  def start_link(_) do
    GenServer.start_link(__MODULE__, [], name: __MODULE__)
  end

  @doc "Reloads the emojis from disk."
  @spec reload() :: :ok
  def reload do
    GenServer.call(__MODULE__, :reload)
  end

  @doc "Returns the path of the emoji `name`."
  @spec get(String.t()) :: String.t() | nil
  def get(name) do
    case :ets.lookup(@ets, name) do
      [{_, path}] -> path
      _ -> nil
    end
  end

  @spec exist?(String.t()) :: boolean()
  def exist?(name), do: not is_nil(get(name))

  @doc "Returns all the emojos!!"
  @spec get_all() :: list({String.t(), String.t(), String.t()})
  def get_all do
    :ets.tab2list(@ets)
  end

  @doc "Clear out old emojis"
  def clear_all, do: :ets.delete_all_objects(@ets)

  @doc false
  def init(_) do
    @ets = :ets.new(@ets, @ets_options)
    GenServer.cast(self(), :reload)
    {:ok, nil}
  end

  @doc false
  def handle_cast(:reload, state) do
    update_emojis(Loader.load())
    {:noreply, state}
  end

  @doc false
  def handle_call(:reload, _from, state) do
    update_emojis(Loader.load())
    {:reply, :ok, state}
  end

  @doc false
  def terminate(_, _) do
    :ok
  end

  @doc false
  def code_change(_old_vsn, state, _extra) do
    update_emojis(Loader.load())
    {:ok, state}
  end

  defp update_emojis(emojis) do
    :ets.insert(@ets, emojis)
  end

  @external_resource "lib/pleroma/emoji-test.txt"

  regional_indicators =
    Enum.map(127_462..127_487, fn codepoint ->
      <<codepoint::utf8>>
    end)

  emojis =
    @external_resource
    |> File.read!()
    |> String.split("\n")
    |> Enum.filter(fn line ->
      line != "" and not String.starts_with?(line, "#") and
        String.contains?(line, "fully-qualified")
    end)
    |> Enum.map(fn line ->
      line
      |> String.split(";", parts: 2)
      |> hd()
      |> String.trim()
      |> String.split()
      |> Enum.map(fn codepoint ->
        <<String.to_integer(codepoint, 16)::utf8>>
      end)
      |> Enum.join()
    end)
    |> Enum.uniq()

  emojis = emojis ++ regional_indicators

  for emoji <- emojis do
    def is_unicode_emoji?(unquote(emoji)), do: true
  end

  def is_unicode_emoji?(_), do: false

  # FE0F is the emoji variation sequence. It is used for fully-qualifying
  # emoji, and that includes emoji combinations.
  # This code generates combinations per emoji: for each FE0F, all possible
  # combinations of the character being removed or staying will be generated.
  # This is made as an attempt to find all partially-qualified and unqualified
  # versions of a fully-qualified emoji.
  # I have found *no cases* for which this would be a problem, after browsing
  # the entire emoji list in emoji-test.txt. This is safe, and, sadly, most
  # likely sane too.
  emoji_qualification_map =
    emojis
    |> Enum.filter(&String.contains?(&1, "\uFE0F"))
    |> Enum.map(fn emoji ->
      combinate = fn x, combinate ->
        case x do
          [] ->
            [[]]

          ["\uFE0F" | tail] ->
            combinate.(tail, combinate)
            |> Enum.flat_map(fn x -> [x, ["\uFE0F" | x]] end)

          [codepoint | tail] ->
            combinate.(tail, combinate)
            |> Enum.map(fn x -> [codepoint | x] end)
        end
      end

      unqualified_list =
        emoji
        |> String.codepoints()
        |> combinate.(combinate)
        |> Enum.map(&List.to_string/1)

      {emoji, unqualified_list}
    end)

  for {qualified, unqualified_list} <- emoji_qualification_map do
    for unqualified <- unqualified_list do
      def fully_qualify_emoji(unquote(unqualified)), do: unquote(qualified)
    end
  end

  def fully_qualify_emoji(emoji), do: emoji
end
