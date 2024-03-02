/*! Copyright © 2011 - 2022 miHoYo. All Rights Reserved */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.miHoYoBrowserTips=t():e.miHoYoBrowserTips=t()}("undefined"!=typeof self?self:this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(1);var r=n(6),i=n(8),o=a(n(9)),s=a(n(12));function a(e){return e&&e.__esModule?e:{default:e}}var u=function(){return(u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},c=function(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))},l=function(){function e(){this.lang="",this.isSea=!1,this.config=null,this.prefix="",this.onClick=null}return e.init=function(e){void 0===e&&(e={});var t=e.isSea,n=void 0!==t&&t,i=e.show,o=void 0!==i&&i,s=e.prefix,a=void 0===s?"":s,u=e.list,c=void 0===u?["ie","mumu"]:u,l=e.onClick;if(o||c.some((function(e){return r.BROWSER_LIST_CONFIG[e]}))){this.shouldRendered=!1;var f=new this;f.prefix=a||c.filter((function(e){return Object.keys(r.BROWSER_LIST_CONFIG).indexOf(e)>=0})).filter((function(e){return r.BROWSER_LIST_CONFIG[e]}))[0]||"",f.isSea=n,f.lang=f.getLang(),f.onClick=l,f.request((function(e){f.config=f.getPrefixConfig(e),f.render()})),console.error("browser error")}},e.prototype.render=function(){var e=u({list:this.getBrowserList()},this.config),t=document.createElement("div");t.className="mihoyo-browser-tips "+(r.IS_MOB?"mihoyo-browser-tips--mobile":""),t.innerHTML=this.formatInnerHTML(e),this.onClick&&t.addEventListener("click",this.onClick),window.document.body.appendChild(t)},e.prototype.getPrefixConfig=function(e){var t=this,n={};return i.COMMON_CONFIG_KEY_MAPS.forEach((function(i){var o=t.prefix?t.prefix+"_"+i:i,s=e[o];(0,r.isNotExtend)(s)?n[i]="":n[i]=e[o]||e[i]})),n},e.prototype.formatInnerHTML=function(e){var t=e.bg,n=e.slogan,r=e.title_color,i=e.desc_color,o=e.title,s=e.desc,a=e.logo,u=e.btn_color,c=e.text_color,l=e.list,f="";return l.forEach((function(e){f+='\n        <a class="mihoyo-browser-tips__item" href="'+e.link+'" target="_blank">\n          <img class="mihoyo-browser-tips__icon" src="'+e.icon+'" alt="">\n          <div class="mihoyo-browser-tips__btn" style="background: '+u+"; color: "+c+'">\n            <span>'+e.name+"</span>\n          </div>\n        </a>\n      "})),'\n      <div class="mihoyo-browser-tips__main" style="background-image: url(\''+t+'\')">\n        <img class="mihoyo-browser-tips__slogan" src="'+n+'" alt="">\n        <p class="mihoyo-browser-tips__title" style="color: '+r+'">'+o+'</p>\n        <p class="mihoyo-browser-tips__desc" style="color: '+i+'">'+s+'</p>\n        <div class="mihoyo-browser-tips__list">\n          '+f+'\n        </div>\n        <img class="mihoyo-browser-tips__logo" src="'+a+'" alt="">\n      </div>\n    '},e.prototype.getBrowserList=function(){var e=this;return this.config.show_browser?c([],Array(i.BROWSER_ITEM_NUM),!0).map((function(t,n){return{link:e.config["browser"+(n+1)+"_link"],name:e.config["browser"+(n+1)+"_name"],icon:e.config["browser"+(n+1)+"_icon"]}})).filter((function(e){return e.link})):[]},e.prototype.getJsonUrl=function(){return ultraGlobal.host+"/admin/mi18n/"+(this.isSea?"plat_oversea":"plat_cn")+"/m10081518461181/m10081518461181-"+this.lang+".json"},e.prototype.request=function(e){var t=new XMLHttpRequest,n=this.getJsonUrl();if(!t)return new Error("Cannot create an XMLHTTP instance");t.onreadystatechange=function(){if(t.readyState===XMLHttpRequest.DONE){if(200!==t.status)throw new Error("ajax error");var n=JSON.parse(t.responseText);e(n)}},t.open("GET",n,!0),t.send()},e.prototype.getLang=function(){if(!this.isSea)return"zh-cn";var e=o.default.checkLang(r.QS.lang||s.default.get("mi18nLang")||o.default.getGameLang());return i.LANG_MAPS.filter((function(t){return t===e}))[0]||"en-us"},e.shouldRendered=!0,e}();t.default=l},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,i);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,'.mihoyo-browser-tips{position:fixed;z-index:99999;width:100%;height:100%;top:0;left:0;font-size:100px;line-height:1.15}.mihoyo-browser-tips *{-webkit-box-sizing:border-box;box-sizing:border-box}.mihoyo-browser-tips img[src=""],.mihoyo-browser-tips img:not([src]){opacity:0}.mihoyo-browser-tips__main{width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:relative;background-size:cover;background-position:center;padding-bottom:1.8em}.mihoyo-browser-tips__slogan{width:3.8em;height:2.4em}.mihoyo-browser-tips__title{font-size:.3em;font-weight:bold;color:#88b8e8;margin-top:.63em;text-align:center}.mihoyo-browser-tips__desc{font-size:.2em;margin-top:.65em;color:#4d6e8f;text-align:center}.mihoyo-browser-tips__list{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.mihoyo-browser-tips__item{margin-top:.77em;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.mihoyo-browser-tips__icon{width:.8em;height:.8em}.mihoyo-browser-tips__btn{height:.38em;background:#5cadff;margin:.11em .34em 0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border-radius:.19em;padding:0 .15em;color:#fff}.mihoyo-browser-tips__btn span{font-size:.18em}.mihoyo-browser-tips a{text-decoration:none}.mihoyo-browser-tips__logo{position:absolute;bottom:0;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);width:8.6em;height:1.81em;pointer-events:none}.mihoyo-browser-tips--mobile{font-size:60px}',""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),o=r.sources.map((function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"}));return[n].concat(o).concat([i]).join("\n")}var s;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<e.length;i++){var s=e[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){var r,i,o={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),a=function(e,t){return t?t.querySelector(e):document.querySelector(e)},u=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=a.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),c=null,l=0,f=[],d=n(5);function p(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=o[r.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](r.parts[s]);for(;s<r.parts.length;s++)i.parts.push(g(r.parts[s],t))}else{var a=[];for(s=0;s<r.parts.length;s++)a.push(g(r.parts[s],t));o[r.id]={id:r.id,refs:1,parts:a}}}}function h(e,t){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],s=t.base?o[0]+t.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}function b(e,t){var n=u(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=f[f.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),f.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=u(e.insertAt.before,n);n.insertBefore(t,i)}}function y(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=f.indexOf(e);t>=0&&f.splice(t,1)}function v(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return m(t,e.attrs),b(e,t),t}function m(e,t){Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])}))}function g(e,t){var n,r,i,o;if(t.transform&&e.css){if(!(o="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=o}if(t.singleton){var s=l++;n=c||(c=v(t)),r=k.bind(null,n,s,!1),i=k.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",m(t,e.attrs),b(e,t),t}(t),r=O.bind(null,n,t),i=function(){y(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(t),r=x.bind(null,n),i=function(){y(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=s()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=h(e,t);return p(n,t),function(e){for(var r=[],i=0;i<n.length;i++){var s=n[i];(a=o[s.id]).refs--,r.push(a)}e&&p(h(e,t),t);for(i=0;i<r.length;i++){var a;if(0===(a=r[i]).refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete o[a.id]}}}};var w,_=(w=[],function(e,t){return w[e]=t,w.filter(Boolean).join("\n")});function k(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=_(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function x(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function O(e,t,n){var r=n.css,i=n.sourceMap,o=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||o)&&(r=d(r)),i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var s=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var i,o=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?e:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isNotExtend=t.IS_MOB=t.BROWSER_LIST_CONFIG=t.isMumu=t.QS=t.qs=t.isIE=void 0;var r,i=n(7),o=(r=i)&&r.__esModule?r:{default:r};var s=t.isIE=!(!window.ActiveXObject&&!("ActiveXObject"in window)),a=t.qs=function(e){void 0===e&&(e=window.location.href);var t={},n=null,r=/[?&](.*?)=([^&#]*)/g;for(n=r.exec(e);n;){try{t[n[1]]=decodeURIComponent(n[2])}catch(e){try{t[n[1]]=unescape(n[2])}catch(e){t[n[1]]=n[2]}}n=r.exec(e)}return t},u=(t.QS=a(),t.isMumu=o.default.mumu());t.BROWSER_LIST_CONFIG={ie:s,mumu:u},t.IS_MOB="mobile"===o.default.getDeviceType(),t.isNotExtend=function(e){return"-"===e}},function(e,t,n){
/*! Copyright © 2011 - 2021 miHoYo. All Rights Reserved */
"undefined"!=typeof self&&self,e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),r=["pc","mobile","ps4","ps5"],i={queryString:function(e,t){var n=e.replace(/[\[\]]/g,"\\$&"),r=new RegExp("[?&]"+n+"(=([^&#]*)|&|#|$)").exec(t);return r?r[2]?decodeURIComponent(r[2].replace(/\+/g," ")):"":null},formatParams:function(e){var t=e||{};return Object.keys(t).reduce((function(e,n){return e.push(encodeURIComponent(n)+"="+encodeURIComponent(t[n])),e}),[]).join("&")},getType:function(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()},isEmpty:function(e){var t=!0;return e&&"string"==typeof e&&String(e).trim()&&(t=!1),t},dealStr:function(e,t){var n=String(e).trim()||"";return"lower"===t?n.toLowerCase():"upper"===t?n.toUpperCase():n},includes:function(e,t){return-1!==e.indexOf(t)},find:function(e,t){return this.includes(t,e)},findIndex:function(e,t,n){for(var r=0;r<e.length;r++){var i=e[r];if(t.call(n,i,r,e))return r}return-1}},o=function(){function t(e){var n=e.window,r=e.userAgent,i=e.url,o=e.language;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.userAgent=r.toLowerCase(),this.url=i,this.window=n,this.lang=o}return n(t,[{key:"mobile",value:function(){return"ios"===this.platform()||"android"===this.platform()||this.iphone()||this.iwatch()||this.ipod()||this.androidPhone()||this.blackberryPhone()||this.windowsPhone()||this.fxosPhone()||this.meego()||this.samsungPhone()||this.othersMobile()}},{key:"tablet",value:function(){return this.ipad()||this.androidTablet()||this.blackberryTablet()||this.windowsTablet()||this.fxosTablet()||this.samsungTablet()}},{key:"desktop",value:function(){return"pc"===this.platform()||!this.tablet()&&!this.mobile()}},{key:"portrait",value:function(){var e=this.window;return e?screen.orientation&&Object.prototype.hasOwnProperty.call(e,"onorientationchange")?this.includes(screen.orientation.type,"portrait"):this.ios()&&Object.prototype.hasOwnProperty.call(e,"orientation")?90!==Math.abs(e.orientation):e.innerHeight/e.innerWidth>1:"mobile"===this.getDeviceType()}},{key:"landscape",value:function(){var e=this.window;return e?e.screen.orientation&&Object.prototype.hasOwnProperty.call(e,"onorientationchange")?this.includes(e.screen.orientation.type,"landscape"):this.ios()&&Object.prototype.hasOwnProperty.call(e,"orientation")?90===Math.abs(e.orientation):e.innerHeight/e.innerWidth<1:!this.portrait()}},{key:"getOrient",value:function(){return this.portrait()?"portrait":this.landscape()?"landscape":""}},{key:"getDeviceEnd",value:function(){var e=void 0;return this.desktop()?e="desktop":this.tablet()?e="tablet":this.mobile()?e="mobile":console.warn("unknown device end"),e}},{key:"getDeviceType",value:function(){var e=this.desktop()?"pc":this.tablet()||this.mobile()?"mobile":void 0;if(!e){var t=i.dealStr(this.queryString("device_type"));if(!i.isEmpty(t)){var n=i.findIndex(r,(function(e){return-1!==t.search(e)}));e=-1!==n?r[n]:void 0}e||console.warn("unknown device type")}return e}},{key:"platform",value:function(){return i.dealStr(this.queryString("plat_type"),"lower")}},{key:"trident",value:function(){return this.find("trident")}},{key:"presto",value:function(){return this.find("presto")}},{key:"webkit",value:function(){return this.find("applewebKit")}},{key:"gecko",value:function(){return this.find("gecko")&&this.find("khtml")}},{key:"language",value:function(){return this.lang}},{key:"isWindows",value:function(){return this.find("windows")}},{key:"windowsPhone",value:function(){return this.isWindows()&&this.find("phone")}},{key:"windowsTablet",value:function(){return this.isWindows()&&this.find("touch")&&!this.windowsPhone()}},{key:"isNode",value:function(){return"undefined"==typeof window&&void 0!==e}},{key:"iphone",value:function(){return!this.isWindows()&&this.find("iphone")}},{key:"iwatch",value:function(){return this.find("iwatch")}},{key:"ipod",value:function(){return this.find("ipod")}},{key:"ipad",value:function(){return this.find("ipad")||this.window&&"MacIntel"===this.window.navigator.platform&&this.window.navigator.maxTouchPoints>1}},{key:"macos",value:function(){return"mac"===this.platform()||this.find("mac")}},{key:"ios",value:function(){return"ios"===this.platform()||this.iphone()||this.iwatch()||this.ipod()||this.ipad()}},{key:"android",value:function(){return!this.isWindows()&&("android"===this.platform()||this.find("android"))}},{key:"androidPhone",value:function(){return this.android()&&this.find("mobile")}},{key:"androidTablet",value:function(){return this.android()&&!this.find("mobile")}},{key:"blackberry",value:function(){return this.find("blackberry")||this.find("bb10")}},{key:"blackberryPhone",value:function(){return this.blackberry()&&!this.find("tablet")}},{key:"blackberryTablet",value:function(){return this.blackberry()&&this.find("tablet")}},{key:"meego",value:function(){return this.find("meego")}},{key:"fxos",value:function(){return(this.find("(mobile")||this.find("(tablet"))&&this.find(" rv:")}},{key:"fxosPhone",value:function(){return this.fxos()&&this.find("mobile")}},{key:"fxosTablet",value:function(){return this.fxos()&&this.find("tablet")}},{key:"mumu",value:function(){return this.find("mumu")||this.find("build/v417ir;wv")}},{key:"u3d",value:function(){return!!this.userAgent.match(/unity 3d/)}},{key:"ps",value:function(){return this.includes(this.platform(),"ps")||this.find("playstation")}},{key:"wxwork",value:function(){return this.find("wxwork")}},{key:"harmony",value:function(){return this.find("harmonyos")}},{key:"harmonyPhone",value:function(){return this.harmony()&&this.find("mobile")}},{key:"bbs",value:function(){return this.find("mihoyobbs")}},{key:"game",value:function(){return this.find("mihoyo")&&!this.bbs()}},{key:"wx",value:function(){return this.find("micromessenger")}},{key:"weibo",value:function(){return this.find("weibo")}},{key:"safari",value:function(){return this.find("safari")&&!this.find("chrome")}},{key:"edge",value:function(){return this.find("edge")}},{key:"qqb",value:function(){return this.find("mqqbrowser")}},{key:"samsungbrowser",value:function(){return this.find("samsungbrowser")}},{key:"samsungPhone",value:function(){return this.android()&&this.find("sm-")}},{key:"samsungTablet",value:function(){return this.samsungbrowser()&&!this.samsungPhone()}},{key:"othersMobile",value:function(){return!!this.userAgent.match(/mobile|iemobile|mqqbrowser|juc|fennec|wosbrowser|browserng|webos|symbian|huaweibrowser/i)}},{key:"includes",value:function(e,t){return i.includes(e,t)}},{key:"find",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return t?i.includes(t,e):i.find(e,this.userAgent)}},{key:"queryString",value:function(e){return i.queryString(e,this.url)}}]),t}();t.default=o}).call(this,n(1))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";var r;function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){function t(e){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e)var n=e.url,r=e.headers,o=r["user-agent"]||"",s=r["accept-language"],a=/([a-z0-9_-]+)(\s|,|;|$)/i.exec(s),u=(a&&a[1]||"").toLowerCase(),c=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{url:n,userAgent:o,language:u}));else{if("undefined"==typeof window)throw new TypeError('The "req" parameter is required on the server side');c=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{window:window,url:window.location.href,userAgent:window.navigator.userAgent,language:(navigator.browserLanguage||window.navigator.language).toLowerCase()}))}return i(c)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(((r=n(0))&&r.__esModule?r:{default:r}).default);t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,void 0))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(((r=n(2))&&r.__esModule?r:{default:r}).default);t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MhyBrowser=void 0;var r,i=(r=n(3))&&r.__esModule?r:{default:r};t.default=new i.default,t.MhyBrowser=i.default}]).default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))},i=t.BROWSER_ITEM_NUM=5;t.COMMON_CONFIG_KEY_MAPS=r(["bg","slogan","title_color","desc_color","title","desc","logo","btn_color","text_color","show_browser"],r([],Array(i),!0).reduce((function(e,t,n){var i=["browser"+(n+1)+"_link","browser"+(n+1)+"_name","browser"+(n+1)+"_icon"];return r(r([],e,!0),i,!0)}),[]),!0),t.LANG_MAPS=["zh-cn","zh-tw","de-de","en-us","es-es","fr-fr","id-id","it-it","ja-jp","ko-kr","pt-pt","ru-ru","th-th","tr-tr","vi-vn"]},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r,i=n(11),o=(r=i)&&r.__esModule?r:{default:r};var s="undefined"==typeof window&&void 0!==e;t.default={getParameterByName:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location.href,n=e.replace(/[\[\]]/g,"\\$&"),r=new RegExp("[?&]"+n+"(=([^&#]*)|&|#|$)"),i=r.exec(t);return i?i[2]?decodeURIComponent(i[2].replace(/\+/g," ")):"":null},dealStr:function(e){return e?String(e).toLowerCase().trim():""},getBrowserInfo:function(){var e,t={versions:(e=navigator.userAgent,{trident:e.indexOf("Trident")>-1,presto:e.indexOf("Presto")>-1,webKit:e.indexOf("AppleWebKit")>-1,gecko:e.indexOf("Gecko")>-1&&-1===e.indexOf("KHTML"),mobile:!!e.match(/AppleWebKit.*Mobile.*/),ios:!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:e.indexOf("Android")>-1||e.indexOf("Linux")>-1,iPhone:e.indexOf("iPhone")>-1,iPad:e.indexOf("iPad")>-1,webApp:-1===e.indexOf("Safari")}),language:(navigator.browserLanguage||navigator.language).toLowerCase()};return{deviceType:t.versions.mobile||t.versions.ios||t.versions.android||t.versions.iPhone||t.versions.iPad?"mobile":"pc",language:t.language}},getGameLang:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=o.default[this.dealStr(e)];if(s)return t;var n=this.getBrowserInfo(),r=n.language,i=this.getParameterByName("lang"),a=navigator.userAgent.toLowerCase(),u=a.indexOf("mihoyo"),c=r;return t?c=t:i&&(c=o.default[this.dealStr(i)])||(c=this.getDefaultLang(a,u,r)),c},getDefaultLang:function(e,t,n){var r=void 0;if(t>-1)r=e.substr(t).trim().split("/")[3];else{var i=o.default[this.dealStr(n)];r=i||n}return r},checkLang:function(e){return o.default[this.dealStr(e)]||""}}}).call(this,n(10))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={"zh-cn":"zh-cn",zh_cn:"zh-cn",zh:"zh-cn",cn:"zh-cn","zh-tw":"zh-tw",zh_tw:"zh-tw",tw:"zh-tw","zh-glb":"zh-cn",zh_glb:"zh-cn",glb:"zh-cn",zh_sea:"zh-cn","zh-sea":"zh-cn",sea:"zh-cn","zh-sg":"zh-cn","zh-my":"zh-cn","en-us":"en-us",en_us:"en-us","en-gb":"en-us",en_gb:"en-us",en:"en-us","en-id":"en-id",en_id:"en-id","en-en":"en-en",en_en:"en-en","de-de":"de-de",de_de:"de-de",de:"de-de","fr-fr":"fr-fr",fr_fr:"fr-fr","fr-be":"fr-fr","fr-ca":"fr-fr",fr:"fr-fr","ja-jp":"ja-jp",ja_jp:"ja-jp","ja-gb":"ja-jp",jp:"ja-jp",ja:"ja-jp","ko-kr":"ko-kr",ko_kr:"ko-kr",kr:"ko-kr",ko:"ko-kr","th-th":"th-th",th_th:"th-th",th:"th-th","vi-vn":"vi-vn",vi_vn:"vi-vn",vn:"vi-vn",vi:"vi-vn","es-es":"es-es",es_es:"es-es","es-us":"es-es","es-mx":"es-es","es-419":"es-es","es-ar":"es-es","es-cl":"es-es","es-pe":"es-es","es-co":"es-es","es-cr":"es-es",es:"es-es","pt-pt":"pt-pt","pt-br":"pt-pt",pt_pt:"pt-pt",pt:"pt-pt","pt-us":"pt-pt","ru-ru":"ru-ru",ru_ru:"ru-ru",ru:"ru-ru","id-id":"id-id",id_id:"id-id",id:"id-id",it:"it-it","it-ch":"it-it",it_ch:"it-it","it-it":"it-it",it_it:"it-it",ar:"ar-ae","ar-ae":"ar-ae","pl-pl":"pl-pl",pl:"pl-pl","tr-tr":"tr-tr",tr:"tr-tr","hi-in":"hi-in",hi_in:"hi-in",hi:"hi-in"}},function(e,t,n){e.exports=function(){"use strict";function e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}return function t(n,r){function i(t,i,o){if("undefined"!=typeof document){"number"==typeof(o=e({},r,o)).expires&&(o.expires=new Date(Date.now()+864e5*o.expires)),o.expires&&(o.expires=o.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var s="";for(var a in o)o[a]&&(s+="; "+a,!0!==o[a]&&(s+="="+o[a].split(";")[0]));return document.cookie=t+"="+n.write(i,t)+s}}return Object.create({set:i,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var t=document.cookie?document.cookie.split("; "):[],r={},i=0;i<t.length;i++){var o=t[i].split("="),s=o.slice(1).join("=");try{var a=decodeURIComponent(o[0]);if(r[a]=n.read(s,a),e===a)break}catch(e){}}return e?r[e]:r}},remove:function(t,n){i(t,"",e({},n,{expires:-1}))},withAttributes:function(n){return t(this.converter,e({},this.attributes,n))},withConverter:function(n){return t(e({},this.converter,n),this.attributes)}},{attributes:{value:Object.freeze(r)},converter:{value:Object.freeze(n)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}()}]).default}));