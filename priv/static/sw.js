var serviceWorkerOption = {"assets":["/static/img/nsfw.50fd83c.png","/static/js/manifest.e076977b8e6c6844fb00.js","/static/js/vendor.cc4190750f6ed4d697bd.js","/static/js/app.67f548ecb9e9fd6b25b0.js","/static/css/app.ea00efb3229c8591fcc5249f0241b986.css"]};
        
        !function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){return u.default.getItem("vuex-lz").then(function(e){return e.config.webPushNotifications})}function i(){return clients.matchAll({includeUncontrolled:!0}).then(function(e){return e.filter(function(e){var t=e.type;return"window"===t})})}var a=n(1),u=r(a);self.addEventListener("push",function(e){e.data&&e.waitUntil(o().then(function(t){return t&&i().then(function(t){var n=e.data.json();if(0===t.length)return self.registration.showNotification(n.title,n)})}))}),self.addEventListener("notificationclick",function(e){e.notification.close(),e.waitUntil(i().then(function(e){for(var t=0;t<e.length;t++){var n=e[t];if("/"===n.url&&"focus"in n)return n.focus()}if(clients.openWindow)return clients.openWindow("/")}))})},function(e,t){/*!
	    localForage -- Offline Storage, Improved
	    Version 1.5.6
	    https://localforage.github.io/localForage
	    (c) 2013-2017 Mozilla, Apache License 2.0
	*/
!function(n){if("object"==typeof t&&"undefined"!=typeof e)e.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var r;r="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,r.localforage=n()}}(function(){return function e(t,n,r){function o(a,u){if(!n[a]){if(!t[a]){var c="function"==typeof require&&require;if(!u&&c)return c(a,!0);if(i)return i(a,!0);var f=new Error("Cannot find module '"+a+"'");throw f.code="MODULE_NOT_FOUND",f}var s=n[a]={exports:{}};t[a][0].call(s.exports,function(e){var n=t[a][1][e];return o(n?n:e)},s,s.exports,e,t,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t,n){(function(e){"use strict";function n(){s=!0;for(var e,t,n=l.length;n;){for(t=l,l=[],e=-1;++e<n;)t[e]();n=l.length}s=!1}function r(e){1!==l.push(e)||s||o()}var o,i=e.MutationObserver||e.WebKitMutationObserver;if(i){var a=0,u=new i(n),c=e.document.createTextNode("");u.observe(c,{characterData:!0}),o=function(){c.data=a=++a%2}}else if(e.setImmediate||"undefined"==typeof e.MessageChannel)o="document"in e&&"onreadystatechange"in e.document.createElement("script")?function(){var t=e.document.createElement("script");t.onreadystatechange=function(){n(),t.onreadystatechange=null,t.parentNode.removeChild(t),t=null},e.document.documentElement.appendChild(t)}:function(){setTimeout(n,0)};else{var f=new e.MessageChannel;f.port1.onmessage=n,o=function(){f.port2.postMessage(0)}}var s,l=[];t.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(e,t,n){"use strict";function r(){}function o(e){if("function"!=typeof e)throw new TypeError("resolver must be a function");this.state=g,this.queue=[],this.outcome=void 0,e!==r&&c(this,e)}function i(e,t,n){this.promise=e,"function"==typeof t&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),"function"==typeof n&&(this.onRejected=n,this.callRejected=this.otherCallRejected)}function a(e,t,n){h(function(){var r;try{r=t(n)}catch(t){return y.reject(e,t)}r===e?y.reject(e,new TypeError("Cannot resolve promise with itself")):y.resolve(e,r)})}function u(e){var t=e&&e.then;if(e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof t)return function(){t.apply(e,arguments)}}function c(e,t){function n(t){i||(i=!0,y.reject(e,t))}function r(t){i||(i=!0,y.resolve(e,t))}function o(){t(r,n)}var i=!1,a=f(o);"error"===a.status&&n(a.value)}function f(e,t){var n={};try{n.value=e(t),n.status="success"}catch(e){n.status="error",n.value=e}return n}function s(e){return e instanceof this?e:y.resolve(new this(r),e)}function l(e){var t=new this(r);return y.reject(t,e)}function d(e){function t(e,t){function r(e){a[t]=e,++u!==o||i||(i=!0,y.resolve(f,a))}n.resolve(e).then(r,function(e){i||(i=!0,y.reject(f,e))})}var n=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var o=e.length,i=!1;if(!o)return this.resolve([]);for(var a=new Array(o),u=0,c=-1,f=new this(r);++c<o;)t(e[c],c);return f}function v(e){function t(e){n.resolve(e).then(function(e){i||(i=!0,y.resolve(u,e))},function(e){i||(i=!0,y.reject(u,e))})}var n=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var o=e.length,i=!1;if(!o)return this.resolve([]);for(var a=-1,u=new this(r);++a<o;)t(e[a]);return u}var h=e(1),y={},p=["REJECTED"],b=["FULFILLED"],g=["PENDING"];t.exports=o,o.prototype.catch=function(e){return this.then(null,e)},o.prototype.then=function(e,t){if("function"!=typeof e&&this.state===b||"function"!=typeof t&&this.state===p)return this;var n=new this.constructor(r);if(this.state!==g){var o=this.state===b?e:t;a(n,o,this.outcome)}else this.queue.push(new i(n,e,t));return n},i.prototype.callFulfilled=function(e){y.resolve(this.promise,e)},i.prototype.otherCallFulfilled=function(e){a(this.promise,this.onFulfilled,e)},i.prototype.callRejected=function(e){y.reject(this.promise,e)},i.prototype.otherCallRejected=function(e){a(this.promise,this.onRejected,e)},y.resolve=function(e,t){var n=f(u,t);if("error"===n.status)return y.reject(e,n.value);var r=n.value;if(r)c(e,r);else{e.state=b,e.outcome=t;for(var o=-1,i=e.queue.length;++o<i;)e.queue[o].callFulfilled(t)}return e},y.reject=function(e,t){e.state=p,e.outcome=t;for(var n=-1,r=e.queue.length;++n<r;)e.queue[n].callRejected(t);return e},o.resolve=s,o.reject=l,o.all=d,o.race=v},{1:1}],3:[function(e,t,n){(function(t){"use strict";"function"!=typeof t.Promise&&(t.Promise=e(2))}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{2:2}],4:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){try{if("undefined"!=typeof indexedDB)return indexedDB;if("undefined"!=typeof webkitIndexedDB)return webkitIndexedDB;if("undefined"!=typeof mozIndexedDB)return mozIndexedDB;if("undefined"!=typeof OIndexedDB)return OIndexedDB;if("undefined"!=typeof msIndexedDB)return msIndexedDB}catch(e){return}}function i(){try{if(!le)return!1;var e="undefined"!=typeof openDatabase&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),t="function"==typeof fetch&&fetch.toString().indexOf("[native code")!==-1;return(!e||t)&&"undefined"!=typeof indexedDB&&"undefined"!=typeof IDBKeyRange}catch(e){return!1}}function a(e,t){e=e||[],t=t||{};try{return new Blob(e,t)}catch(i){if("TypeError"!==i.name)throw i;for(var n="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder?MozBlobBuilder:WebKitBlobBuilder,r=new n,o=0;o<e.length;o+=1)r.append(e[o]);return r.getBlob(t.type)}}function u(e,t){t&&e.then(function(e){t(null,e)},function(e){t(e)})}function c(e,t,n){"function"==typeof t&&e.then(t),"function"==typeof n&&e.catch(n)}function f(e){return"string"!=typeof e&&(console.warn(e+" used as a key, but it is not a string."),e=String(e)),e}function s(e){for(var t=e.length,n=new ArrayBuffer(t),r=new Uint8Array(n),o=0;o<t;o++)r[o]=e.charCodeAt(o);return n}function l(e){return new he(function(t){var n=e.transaction(ye,ge),r=a([""]);n.objectStore(ye).put(r,"key"),n.onabort=function(e){e.preventDefault(),e.stopPropagation(),t(!1)},n.oncomplete=function(){var e=navigator.userAgent.match(/Chrome\/(\d+)/),n=navigator.userAgent.match(/Edge\//);t(n||!e||parseInt(e[1],10)>=43)}}).catch(function(){return!1})}function d(e){return"boolean"==typeof de?he.resolve(de):l(e).then(function(e){return de=e})}function v(e){var t=ve[e.name],n={};n.promise=new he(function(e){n.resolve=e}),t.deferredOperations.push(n),t.dbReady?t.dbReady=t.dbReady.then(function(){return n.promise}):t.dbReady=n.promise}function h(e){var t=ve[e.name],n=t.deferredOperations.pop();n&&n.resolve()}function y(e,t){var n=ve[e.name],r=n.deferredOperations.pop();r&&r.reject(t)}function p(e,t){return new he(function(n,r){if(e.db){if(!t)return n(e.db);v(e),e.db.close()}var o=[e.name];t&&o.push(e.version);var i=le.open.apply(le,o);t&&(i.onupgradeneeded=function(t){var n=i.result;try{n.createObjectStore(e.storeName),t.oldVersion<=1&&n.createObjectStore(ye)}catch(n){if("ConstraintError"!==n.name)throw n;console.warn('The database "'+e.name+'" has been upgraded from version '+t.oldVersion+" to version "+t.newVersion+', but the storage "'+e.storeName+'" already exists.')}}),i.onerror=function(e){e.preventDefault(),r(i.error)},i.onsuccess=function(){n(i.result),h(e)}})}function b(e){return p(e,!1)}function g(e){return p(e,!0)}function m(e,t){if(!e.db)return!0;var n=!e.db.objectStoreNames.contains(e.storeName),r=e.version<e.db.version,o=e.version>e.db.version;if(r&&(e.version!==t&&console.warn('The database "'+e.name+"\" can't be downgraded from version "+e.db.version+" to version "+e.version+"."),e.version=e.db.version),o||n){if(n){var i=e.db.version+1;i>e.version&&(e.version=i)}return!0}return!1}function _(e){return new he(function(t,n){var r=new FileReader;r.onerror=n,r.onloadend=function(n){var r=btoa(n.target.result||"");t({__local_forage_encoded_blob:!0,data:r,type:e.type})},r.readAsBinaryString(e)})}function w(e){var t=s(atob(e.data));return a([t],{type:e.type})}function I(e){return e&&e.__local_forage_encoded_blob}function S(e){var t=this,n=t._initReady().then(function(){var e=ve[t._dbInfo.name];if(e&&e.dbReady)return e.dbReady});return c(n,e,e),n}function E(e){v(e);for(var t=ve[e.name],n=t.forages,r=0;r<n.length;r++)n[r]._dbInfo.db&&(n[r]._dbInfo.db.close(),n[r]._dbInfo.db=null);return p(e,!1).then(function(e){for(var t=0;t<n.length;t++)n[t]._dbInfo.db=e}).catch(function(t){throw y(e,t),t})}function j(e,t,n){try{var r=e.db.transaction(e.storeName,t);n(null,r)}catch(r){if(!e.db||"InvalidStateError"===r.name)return E(e).then(function(){var r=e.db.transaction(e.storeName,t);n(null,r)});n(r)}}function x(e){function t(){return he.resolve()}var n=this,r={db:null};if(e)for(var o in e)r[o]=e[o];ve||(ve={});var i=ve[r.name];i||(i={forages:[],db:null,dbReady:null,deferredOperations:[]},ve[r.name]=i),i.forages.push(n),n._initReady||(n._initReady=n.ready,n.ready=S);for(var a=[],u=0;u<i.forages.length;u++){var c=i.forages[u];c!==n&&a.push(c._initReady().catch(t))}var f=i.forages.slice(0);return he.all(a).then(function(){return r.db=i.db,b(r)}).then(function(e){return r.db=e,m(r,n._defaultConfig.version)?g(r):e}).then(function(e){r.db=i.db=e,n._dbInfo=r;for(var t=0;t<f.length;t++){var o=f[t];o!==n&&(o._dbInfo.db=r.db,o._dbInfo.version=r.version)}})}function A(e,t){var n=this;e=f(e);var r=new he(function(t,r){n.ready().then(function(){j(n._dbInfo,be,function(o,i){if(o)return r(o);try{var a=i.objectStore(n._dbInfo.storeName),u=a.get(e);u.onsuccess=function(){var e=u.result;void 0===e&&(e=null),I(e)&&(e=w(e)),t(e)},u.onerror=function(){r(u.error)}}catch(e){r(e)}})}).catch(r)});return u(r,t),r}function R(e,t){var n=this,r=new he(function(t,r){n.ready().then(function(){j(n._dbInfo,be,function(o,i){if(o)return r(o);try{var a=i.objectStore(n._dbInfo.storeName),u=a.openCursor(),c=1;u.onsuccess=function(){var n=u.result;if(n){var r=n.value;I(r)&&(r=w(r));var o=e(r,n.key,c++);void 0!==o?t(o):n.continue()}else t()},u.onerror=function(){r(u.error)}}catch(e){r(e)}})}).catch(r)});return u(r,t),r}function O(e,t,n){var r=this;e=f(e);var o=new he(function(n,o){var i;r.ready().then(function(){return i=r._dbInfo,"[object Blob]"===pe.call(t)?d(i.db).then(function(e){return e?t:_(t)}):t}).then(function(t){j(r._dbInfo,ge,function(i,a){if(i)return o(i);try{var u=a.objectStore(r._dbInfo.storeName);null===t&&(t=void 0);var c=u.put(t,e);a.oncomplete=function(){void 0===t&&(t=null),n(t)},a.onabort=a.onerror=function(){var e=c.error?c.error:c.transaction.error;o(e)}}catch(e){o(e)}})}).catch(o)});return u(o,n),o}function N(e,t){var n=this;e=f(e);var r=new he(function(t,r){n.ready().then(function(){j(n._dbInfo,ge,function(o,i){if(o)return r(o);try{var a=i.objectStore(n._dbInfo.storeName),u=a.delete(e);i.oncomplete=function(){t()},i.onerror=function(){r(u.error)},i.onabort=function(){var e=u.error?u.error:u.transaction.error;r(e)}}catch(e){r(e)}})}).catch(r)});return u(r,t),r}function D(e){var t=this,n=new he(function(e,n){t.ready().then(function(){j(t._dbInfo,ge,function(r,o){if(r)return n(r);try{var i=o.objectStore(t._dbInfo.storeName),a=i.clear();o.oncomplete=function(){e()},o.onabort=o.onerror=function(){var e=a.error?a.error:a.transaction.error;n(e)}}catch(e){n(e)}})}).catch(n)});return u(n,e),n}function B(e){var t=this,n=new he(function(e,n){t.ready().then(function(){j(t._dbInfo,be,function(r,o){if(r)return n(r);try{var i=o.objectStore(t._dbInfo.storeName),a=i.count();a.onsuccess=function(){e(a.result)},a.onerror=function(){n(a.error)}}catch(e){n(e)}})}).catch(n)});return u(n,e),n}function k(e,t){var n=this,r=new he(function(t,r){return e<0?void t(null):void n.ready().then(function(){j(n._dbInfo,be,function(o,i){if(o)return r(o);try{var a=i.objectStore(n._dbInfo.storeName),u=!1,c=a.openCursor();c.onsuccess=function(){var n=c.result;return n?void(0===e?t(n.key):u?t(n.key):(u=!0,n.advance(e))):void t(null)},c.onerror=function(){r(c.error)}}catch(e){r(e)}})}).catch(r)});return u(r,t),r}function C(e){var t=this,n=new he(function(e,n){t.ready().then(function(){j(t._dbInfo,be,function(r,o){if(r)return n(r);try{var i=o.objectStore(t._dbInfo.storeName),a=i.openCursor(),u=[];a.onsuccess=function(){var t=a.result;return t?(u.push(t.key),void t.continue()):void e(u)},a.onerror=function(){n(a.error)}}catch(e){n(e)}})}).catch(n)});return u(n,e),n}function T(){return"function"==typeof openDatabase}function L(e){var t,n,r,o,i,a=.75*e.length,u=e.length,c=0;"="===e[e.length-1]&&(a--,"="===e[e.length-2]&&a--);var f=new ArrayBuffer(a),s=new Uint8Array(f);for(t=0;t<u;t+=4)n=_e.indexOf(e[t]),r=_e.indexOf(e[t+1]),o=_e.indexOf(e[t+2]),i=_e.indexOf(e[t+3]),s[c++]=n<<2|r>>4,s[c++]=(15&r)<<4|o>>2,s[c++]=(3&o)<<6|63&i;return f}function F(e){var t,n=new Uint8Array(e),r="";for(t=0;t<n.length;t+=3)r+=_e[n[t]>>2],r+=_e[(3&n[t])<<4|n[t+1]>>4],r+=_e[(15&n[t+1])<<2|n[t+2]>>6],r+=_e[63&n[t+2]];return n.length%3===2?r=r.substring(0,r.length-1)+"=":n.length%3===1&&(r=r.substring(0,r.length-2)+"=="),r}function z(e,t){var n="";if(e&&(n=Fe.call(e)),e&&("[object ArrayBuffer]"===n||e.buffer&&"[object ArrayBuffer]"===Fe.call(e.buffer))){var r,o=Se;e instanceof ArrayBuffer?(r=e,o+=je):(r=e.buffer,"[object Int8Array]"===n?o+=Ae:"[object Uint8Array]"===n?o+=Re:"[object Uint8ClampedArray]"===n?o+=Oe:"[object Int16Array]"===n?o+=Ne:"[object Uint16Array]"===n?o+=Be:"[object Int32Array]"===n?o+=De:"[object Uint32Array]"===n?o+=ke:"[object Float32Array]"===n?o+=Ce:"[object Float64Array]"===n?o+=Te:t(new Error("Failed to get type for BinaryArray"))),t(o+F(r))}else if("[object Blob]"===n){var i=new FileReader;i.onload=function(){var n=we+e.type+"~"+F(this.result);t(Se+xe+n)},i.readAsArrayBuffer(e)}else try{t(JSON.stringify(e))}catch(n){console.error("Couldn't convert value into a JSON string: ",e),t(null,n)}}function M(e){if(e.substring(0,Ee)!==Se)return JSON.parse(e);var t,n=e.substring(Le),r=e.substring(Ee,Le);if(r===xe&&Ie.test(n)){var o=n.match(Ie);t=o[1],n=n.substring(o[0].length)}var i=L(n);switch(r){case je:return i;case xe:return a([i],{type:t});case Ae:return new Int8Array(i);case Re:return new Uint8Array(i);case Oe:return new Uint8ClampedArray(i);case Ne:return new Int16Array(i);case Be:return new Uint16Array(i);case De:return new Int32Array(i);case ke:return new Uint32Array(i);case Ce:return new Float32Array(i);case Te:return new Float64Array(i);default:throw new Error("Unkown type: "+r)}}function P(e){var t=this,n={db:null};if(e)for(var r in e)n[r]="string"!=typeof e[r]?e[r].toString():e[r];var o=new he(function(e,r){try{n.db=openDatabase(n.name,String(n.version),n.description,n.size)}catch(e){return r(e)}n.db.transaction(function(o){o.executeSql("CREATE TABLE IF NOT EXISTS "+n.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],function(){t._dbInfo=n,e()},function(e,t){r(t)})})});return n.serializer=ze,o}function U(e,t){var n=this;e=f(e);var r=new he(function(t,r){n.ready().then(function(){var o=n._dbInfo;o.db.transaction(function(n){n.executeSql("SELECT * FROM "+o.storeName+" WHERE key = ? LIMIT 1",[e],function(e,n){var r=n.rows.length?n.rows.item(0).value:null;r&&(r=o.serializer.deserialize(r)),t(r)},function(e,t){r(t)})})}).catch(r)});return u(r,t),r}function q(e,t){var n=this,r=new he(function(t,r){n.ready().then(function(){var o=n._dbInfo;o.db.transaction(function(n){n.executeSql("SELECT * FROM "+o.storeName,[],function(n,r){for(var i=r.rows,a=i.length,u=0;u<a;u++){var c=i.item(u),f=c.value;if(f&&(f=o.serializer.deserialize(f)),f=e(f,c.key,u+1),void 0!==f)return void t(f)}t()},function(e,t){r(t)})})}).catch(r)});return u(r,t),r}function W(e,t,n,r){var o=this;e=f(e);var i=new he(function(i,a){o.ready().then(function(){void 0===t&&(t=null);var u=t,c=o._dbInfo;c.serializer.serialize(t,function(t,f){f?a(f):c.db.transaction(function(n){n.executeSql("INSERT OR REPLACE INTO "+c.storeName+" (key, value) VALUES (?, ?)",[e,t],function(){i(u)},function(e,t){a(t)})},function(t){if(t.code===t.QUOTA_ERR){if(r>0)return void i(W.apply(o,[e,u,n,r-1]));a(t)}})})}).catch(a)});return u(i,n),i}function Q(e,t,n){return W.apply(this,[e,t,n,1])}function G(e,t){var n=this;e=f(e);var r=new he(function(t,r){n.ready().then(function(){var o=n._dbInfo;o.db.transaction(function(n){n.executeSql("DELETE FROM "+o.storeName+" WHERE key = ?",[e],function(){t()},function(e,t){r(t)})})}).catch(r)});return u(r,t),r}function H(e){var t=this,n=new he(function(e,n){t.ready().then(function(){var r=t._dbInfo;r.db.transaction(function(t){t.executeSql("DELETE FROM "+r.storeName,[],function(){e()},function(e,t){n(t)})})}).catch(n)});return u(n,e),n}function J(e){var t=this,n=new he(function(e,n){t.ready().then(function(){var r=t._dbInfo;r.db.transaction(function(t){t.executeSql("SELECT COUNT(key) as c FROM "+r.storeName,[],function(t,n){var r=n.rows.item(0).c;e(r)},function(e,t){n(t)})})}).catch(n)});return u(n,e),n}function K(e,t){var n=this,r=new he(function(t,r){n.ready().then(function(){var o=n._dbInfo;o.db.transaction(function(n){n.executeSql("SELECT key FROM "+o.storeName+" WHERE id = ? LIMIT 1",[e+1],function(e,n){var r=n.rows.length?n.rows.item(0).key:null;t(r)},function(e,t){r(t)})})}).catch(r)});return u(r,t),r}function V(e){var t=this,n=new he(function(e,n){t.ready().then(function(){var r=t._dbInfo;r.db.transaction(function(t){t.executeSql("SELECT key FROM "+r.storeName,[],function(t,n){for(var r=[],o=0;o<n.rows.length;o++)r.push(n.rows.item(o).key);e(r)},function(e,t){n(t)})})}).catch(n)});return u(n,e),n}function X(){try{return"undefined"!=typeof localStorage&&"setItem"in localStorage&&"function"==typeof localStorage.setItem}catch(e){return!1}}function Y(){var e="_localforage_support_test";try{return localStorage.setItem(e,!0),localStorage.removeItem(e),!1}catch(e){return!0}}function Z(){return!Y()||localStorage.length>0}function $(e){var t=this,n={};if(e)for(var r in e)n[r]=e[r];return n.keyPrefix=n.name+"/",n.storeName!==t._defaultConfig.storeName&&(n.keyPrefix+=n.storeName+"/"),Z()?(t._dbInfo=n,n.serializer=ze,he.resolve()):he.reject()}function ee(e){var t=this,n=t.ready().then(function(){for(var e=t._dbInfo.keyPrefix,n=localStorage.length-1;n>=0;n--){var r=localStorage.key(n);0===r.indexOf(e)&&localStorage.removeItem(r)}});return u(n,e),n}function te(e,t){var n=this;e=f(e);var r=n.ready().then(function(){var t=n._dbInfo,r=localStorage.getItem(t.keyPrefix+e);return r&&(r=t.serializer.deserialize(r)),r});return u(r,t),r}function ne(e,t){var n=this,r=n.ready().then(function(){for(var t=n._dbInfo,r=t.keyPrefix,o=r.length,i=localStorage.length,a=1,u=0;u<i;u++){var c=localStorage.key(u);if(0===c.indexOf(r)){var f=localStorage.getItem(c);if(f&&(f=t.serializer.deserialize(f)),f=e(f,c.substring(o),a++),void 0!==f)return f}}});return u(r,t),r}function re(e,t){var n=this,r=n.ready().then(function(){var t,r=n._dbInfo;try{t=localStorage.key(e)}catch(e){t=null}return t&&(t=t.substring(r.keyPrefix.length)),t});return u(r,t),r}function oe(e){var t=this,n=t.ready().then(function(){for(var e=t._dbInfo,n=localStorage.length,r=[],o=0;o<n;o++){var i=localStorage.key(o);0===i.indexOf(e.keyPrefix)&&r.push(i.substring(e.keyPrefix.length))}return r});return u(n,e),n}function ie(e){var t=this,n=t.keys().then(function(e){return e.length});return u(n,e),n}function ae(e,t){var n=this;e=f(e);var r=n.ready().then(function(){var t=n._dbInfo;localStorage.removeItem(t.keyPrefix+e)});return u(r,t),r}function ue(e,t,n){var r=this;e=f(e);var o=r.ready().then(function(){void 0===t&&(t=null);var n=t;return new he(function(o,i){var a=r._dbInfo;a.serializer.serialize(t,function(t,r){if(r)i(r);else try{localStorage.setItem(a.keyPrefix+e,t),o(n)}catch(e){"QuotaExceededError"!==e.name&&"NS_ERROR_DOM_QUOTA_REACHED"!==e.name||i(e),i(e)}})})});return u(o,n),o}function ce(e,t){e[t]=function(){var n=arguments;return e.ready().then(function(){return e[t].apply(e,n)})}}function fe(){for(var e=1;e<arguments.length;e++){var t=arguments[e];if(t)for(var n in t)t.hasOwnProperty(n)&&(Ue(t[n])?arguments[0][n]=t[n].slice():arguments[0][n]=t[n])}return arguments[0]}var se="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},le=o();"undefined"==typeof Promise&&e(3);var de,ve,he=Promise,ye="local-forage-detect-blob-support",pe=Object.prototype.toString,be="readonly",ge="readwrite",me={_driver:"asyncStorage",_initStorage:x,_support:i(),iterate:R,getItem:A,setItem:O,removeItem:N,clear:D,length:B,key:k,keys:C},_e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",we="~~local_forage_type~",Ie=/^~~local_forage_type~([^~]+)~/,Se="__lfsc__:",Ee=Se.length,je="arbf",xe="blob",Ae="si08",Re="ui08",Oe="uic8",Ne="si16",De="si32",Be="ur16",ke="ui32",Ce="fl32",Te="fl64",Le=Ee+je.length,Fe=Object.prototype.toString,ze={serialize:z,deserialize:M,stringToBuffer:L,bufferToString:F},Me={_driver:"webSQLStorage",_initStorage:P,_support:T(),iterate:q,getItem:U,setItem:Q,removeItem:G,clear:H,length:J,key:K,keys:V},Pe={_driver:"localStorageWrapper",_initStorage:$,_support:X(),iterate:ne,getItem:te,setItem:ue,removeItem:ae,clear:ee,length:ie,key:re,keys:oe},Ue=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},qe={},We={},Qe={INDEXEDDB:me,WEBSQL:Me,LOCALSTORAGE:Pe},Ge=[Qe.INDEXEDDB._driver,Qe.WEBSQL._driver,Qe.LOCALSTORAGE._driver],He=["clear","getItem","iterate","key","keys","length","removeItem","setItem"],Je={description:"",driver:Ge.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1},Ke=function(){function e(t){r(this,e);for(var n in Qe)if(Qe.hasOwnProperty(n)){var o=Qe[n],i=o._driver;this[n]=i,qe[i]||this.defineDriver(o)}this._defaultConfig=fe({},Je),this._config=fe({},this._defaultConfig,t),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(function(){})}return e.prototype.config=function(e){if("object"===("undefined"==typeof e?"undefined":se(e))){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var t in e){if("storeName"===t&&(e[t]=e[t].replace(/\W/g,"_")),"version"===t&&"number"!=typeof e[t])return new Error("Database version must be a number.");this._config[t]=e[t]}return!("driver"in e&&e.driver)||this.setDriver(this._config.driver)}return"string"==typeof e?this._config[e]:this._config},e.prototype.defineDriver=function(e,t,n){var r=new he(function(t,n){try{var r=e._driver,o=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!e._driver)return void n(o);for(var i=He.concat("_initStorage"),a=0,u=i.length;a<u;a++){var c=i[a];if(!c||!e[c]||"function"!=typeof e[c])return void n(o)}var f=function(n){qe[r]&&console.info("Redefining LocalForage driver: "+r),qe[r]=e,We[r]=n,t()};"_support"in e?e._support&&"function"==typeof e._support?e._support().then(f,n):f(!!e._support):f(!0)}catch(e){n(e)}});return c(r,t,n),r},e.prototype.driver=function(){return this._driver||null},e.prototype.getDriver=function(e,t,n){var r=qe[e]?he.resolve(qe[e]):he.reject(new Error("Driver not found."));return c(r,t,n),r},e.prototype.getSerializer=function(e){var t=he.resolve(ze);return c(t,e),t},e.prototype.ready=function(e){var t=this,n=t._driverSet.then(function(){return null===t._ready&&(t._ready=t._initDriver()),t._ready});return c(n,e,e),n},e.prototype.setDriver=function(e,t,n){function r(){a._config.driver=a.driver()}function o(e){return a._extend(e),r(),a._ready=a._initStorage(a._config),a._ready}function i(e){return function(){function t(){for(;n<e.length;){var i=e[n];return n++,a._dbInfo=null,a._ready=null,a.getDriver(i).then(o).catch(t)}r();var u=new Error("No available storage method found.");return a._driverSet=he.reject(u),a._driverSet}var n=0;return t()}}var a=this;Ue(e)||(e=[e]);var u=this._getSupportedDrivers(e),f=null!==this._driverSet?this._driverSet.catch(function(){return he.resolve()}):he.resolve();return this._driverSet=f.then(function(){var e=u[0];return a._dbInfo=null,a._ready=null,a.getDriver(e).then(function(e){a._driver=e._driver,r(),a._wrapLibraryMethodsWithReady(),a._initDriver=i(u)})}).catch(function(){r();var e=new Error("No available storage method found.");return a._driverSet=he.reject(e),a._driverSet}),c(this._driverSet,t,n),this._driverSet},e.prototype.supports=function(e){return!!We[e]},e.prototype._extend=function(e){fe(this,e)},e.prototype._getSupportedDrivers=function(e){for(var t=[],n=0,r=e.length;n<r;n++){var o=e[n];this.supports(o)&&t.push(o)}return t},e.prototype._wrapLibraryMethodsWithReady=function(){for(var e=0,t=He.length;e<t;e++)ce(this,He[e])},e.prototype.createInstance=function(t){return new e(t)},e}(),Ve=new Ke;t.exports=Ve},{3:3}]},{},[4])(4)})}]);
//# sourceMappingURL=sw.js.map