/*! Powered by kodbox;hash:535fce3e03f83ced3791 [2023/02/22 18:54:01] */
!function(s){function t(t){for(var e,n,i=t[0],o=t[1],r=0,a=[];r<i.length;r++)n=i[r],Object.prototype.hasOwnProperty.call(d,n)&&d[n]&&a.push(d[n][0]),d[n]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(s[e]=o[e]);for(l&&l(t);a.length;)a.shift()()}var n={},d={"1":0};function u(t){var e;return(n[t]||(e=n[t]={"i":t,"l":!1,"exports":{}},s[t].call(e.exports,e,e.exports,u),e.l=!0,e)).exports}u.e=function(i){var o,r,t,a,e,n=[],s=d[i];return 0!==s&&(s?n.push(s[2]):(e=new Promise(function(t,e){s=d[i]=[t,e]}),n.push(s[2]=e),(o=document.createElement("script")).charset="utf-8",o.timeout=120,u.nc&&o.setAttribute("nonce",u.nc),o.src=u.p+""+({"4":"vendor"}[e=i]||e)+".js?v=535fce3e",r=new Error,t=function(t){o.onerror=o.onload=null,clearTimeout(a);var e,n=d[i];0!==n&&(n&&(e=t&&("load"===t.type?"missing":t.type),t=t&&t.target&&t.target.src,r.message="Loading chunk "+i+" failed.\n("+e+": "+t+")",r.name="ChunkLoadError",r.type=e,r.request=t,n[1](r)),d[i]=undefined)},a=setTimeout(function(){t({"type":"timeout","target":o})},12e4),o.onerror=o.onload=t,document.head.appendChild(o))),Promise.all(n)},u.m=s,u.c=n,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{"enumerable":!0,"get":n})},u.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{"value":"Module"}),Object.defineProperty(t,"__esModule",{"value":!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{"enumerable":!0,"value":e}),2&t&&"string"!=typeof e)for(var i in e)u.d(n,i,function(t){return e[t]}.bind(null,i));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var e=(i=window["webpackJsonp"]=window["webpackJsonp"]||[]).push.bind(i);i.push=t;for(var i=i.slice(),o=0;o<i.length;o++)t(i[o]);var l=e;u(u.s=650)}({"24":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{"value":!0}),window.Promise||(window.Promise=Promise);var i="./static/",o=(window.API_HOST&&((o=API_HOST.split("/")).pop(),i=o.join("/")+"/static/"),window.API_URL=function(t,e){var n=window.API_HOST,i="&";return _.isNull(e)||_.isUndefined(e)?n+(t||""):(-1==n.indexOf("?")&&(i="?"),Cookie.accessToken&&(e+="&accessToken="+Cookie.accessToken),n+(t||"")+i+(e||""))},window.API_URL_TRUE=function(t){t=(t=t||window.location.href).replace(API_URL(),"").replace(G.kod.APP_HOST,"").replace("?","&");return G.kod.APP_HOST+"?"+t},window.STATIC_PATH||i),r=(n.p=o+"app/dist/",n.e(4).then(function(t){n(544),n(545),n(546),n(547),n(110),n(116),n(548),n(549),n(550),n(551),n(552),n(553),n(554),n(555),n(556),n(557),n(117),n(558),n(559),n(560),n(561),n(562),n(563),n(564),n(565),n(566),n(567),n(568),n(569),window.Pinyin=n(570)["default"],n(571),n(572),n(573),n(574),n(575),n(576),n(577),n(578),n(579),n(580),n(114),n(115),n(113),n(581),n(582),n(583),n(584),n(585),n(111),n(112),n(586),window.Backbone.$=$,window.Events=Backbone.Events,s()}.bind(null,n))["catch"](n.oe)),a=Date.now(),s=function s(){var n=seajs.use;seajs.use=function(){var t=_.toArray(arguments),i=function i(t){var e=_.get(window,"G.kod.version",""),n=_.get(window,"G.kod.build","");return!(e=1==_.get(window,"G.kod.ENV_DEV")?a:e+"."+n)||_.includes(t,"&v=")||_.includes(t,"?v=")||_.includes(t,"?")?t:(_.endsWith(t,".htm")||_.endsWith(t,".html")||_.endsWith(t,".css")||_.endsWith(t,".json")||_.endsWith(t,".js")||(t+=".js"),t+"?v="+e)},e=t[0];_.isString(e)?t[0]=i(e):_.isArray(e)&&(t[0]=_.map(e,function(t){return i(t)})),n.apply(seajs,t)},window._ktime=dateFormat(!1,"dhi"),window.requireAsync=seajs.use,window.requirePromise=function(t){var e=$.Deferred();return seajs.use(t,e.resolve),e}},d=(function(){var i;"development"==window.lessENV&&(i=XMLHttpRequest.prototype.open,XMLHttpRequest.prototype.open=function(t,e){var n=Array.prototype.slice.call(arguments,0);return e.match(/\.less$/)&&(n[1]=e+"?_t="+a),i.apply(this,n)})}(),function d(){var t=window.STATIC_PATH_ALL||i;requireAsync([t+"style/lib/alifont/iconfont.css",t+"style/lib/font-icon/style.css"])}),u=function u(){var t=API_URL("user/view/plugins","v="+time());return requirePromise(t)},l=function l(){Events.trigger("user.optionLoadBefore");var t=API_URL("user/view/options","v="+time());return requirePromise("text!"+t).then(function(t){var e;(t=t&&JSON.parse(t))&&t.code&&t.data&&(window.G=_.extend(window.G||{},t.data),t=G.kod.staticPath,e=API_URL(),_.startsWith(t,"http")||(t=(t=_.startsWith(t,"/")?$.parseUrl(e).origin+t:e.substr(0,_.lastIndexOf(e,"/"))+"/"+t).replace("/./","/")),window.STATIC_PATH_ALL=window.STATIC_PATH_ALL||G.kod.APP_HOST+"static/",window.STATIC_PATH=t,window.VENDER_PATH=window.STATIC_PATH+"app/vender/",window.API_HOST=G.kod.appApi,$.dialog.defaults.path=window.STATIC_PATH+"app/vender/artDialog-icon/",requireAsync(window.STATIC_PATH+"style/lib/alifont/iconfont.js"),d(),Events.trigger("user.optionLoadAfter"))})},c=function c(){var t=API_URL("user/view/lang","v="+time());return requirePromise("text!"+t).then(function(t){if(t){try{t=JSON.parse(t)}catch(e){return p(t)}t&&t.code&&t.data&&(window.LNG=_.extend(window.LNG||{},_.get(t,"data.list")),window.G.lang=_.get(t,"data.lang"),LNG.find=function(n){var i={};return _.each(LNG,function(t,e){_.includes(t,n)&&(i[e]=t)}),i},LNG.set=function(t){t&&_.isObject(t)&&_.extend(LNG,t)},LNG.make=function(t){var e=_.toArray(arguments),n=LNG[t];if(!n)return t;for(var i=1;i<e.length;i++)n=n.replace(/(%d|%s)/,e[i]);return n},LNG.space='<i class="char-space"></i>',LNG.logo=function(t){var e,n,i=window.G.system.options||{},o="image"==i.systemNameType,r=i.systemLogo,a=STATIC_PATH+"images/common/logo.png",s=(_.includes(["zh-CN","zh-TW"],G.lang)||(a=STATIC_PATH+"images/common/logo-en.png"),G.kod.companyInfo||!1);return s&&"text"==s.logoType&&s.logoText?'<span class="logo-text" title="'+s.logoText+'" title-timeout="200"><i class="font-icon ri-cloud-fill mr-5"></i>'+s.logoText+"</span>":(e=function e(t){return'<img src="'+t+'" onerror="this.src=\''+a+"'\"/>"},n=function n(t){return'<span class="logo-text">'+t+"</span>"},"copyright"==t?(s=LNG["common.copyright.name"],"A"==window.G.kod.versionType&&LNG["common.oemCompany"]!=window.md5(_.get(window,"G.kod.channel",""))&&(r=a,s="kodbox"),o?e(r):n(s)):"login"!=t||o?e(r):n(i.systemName))})}})},p=function p(t){Tips.close("System error!",!1);var e=(e=$.dialog.list["xhrErrorDialog"])||$.dialog({"id":"xhrErrorDialog","padding":0,"width":"55%","height":"60%","fixed":!0,"resize":!0,"title":"System Error","content":""}),t='\n\t\t<div class="ajaxError">\n\t\t<div class="content-preview">\n\t\t<style>\n\t\t.ajaxError{\n\t\t\toverflow:auto;padding:20px 5%;color:#555;font-size:13px;line-height:1.5em;\n\t\t\tfont-family:"Lantinghei SC","Hiragino Sans GB","Microsoft Yahei",Helvetica,arial,sans-serif;\n\t\t}\n\t\t.ajaxError #msgbox{margin:0;}\n\t\t.error-tips{padding:5px 0 10px;border-bottom:1px solid #eee;margin-bottom:10px;font-size: 14px;}\n\t\t.content-preview{\n\t\t\tborder: 1px solid #fff1f0;padding:5px 20px 10px 20px;\n\t\t\tbackground: #fff9f9;border-radius:4px;margin-bottom:50px;\n\t\t}\n\t\t</style>\n\t\t<h3 style="color:#f04134" >System Error!</h3>'+htmlSafe(t)+"\n\t\t</div></div>";$.iframeHtml(e.$main.find(".aui-content"),t)},f=function f(){return r.then(function(){NProgress.isStarted()||NProgress.start(),NProgress.set(.5)}).then(u).then(function(){NProgress.set(.6)}).then(l).then(function(){NProgress.set(.8)}).then(c).then(function(){NProgress.done(),$("body > .loading-body").fadeOut(1e3,function(){$(this).remove()})})},h=function h(){return window.API_HOST?r.then(function(){NProgress.isStarted()||NProgress.start(),NProgress.set(.6)}).then(l).then(function(){NProgress.set(.8)}).then(c).then(function(){NProgress.done()}):r.then()};e.loadMain=f,e.loadApi=h,e.loadOption=l,e.loadLang=c,e.loadPlugin=u},"55":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{"value":!0}),e["default"]=function(){i(),o(),r(),d(),s(),Events.trigger("windowReady");var t=document.createEvent("CustomEvent");t.initCustomEvent("kodReadyView",!0,!0,{"source":window}),document.dispatchEvent(t)};var i=function i(){var t;$.fn.perfectScroll&&(t=function t(){$(".perfectScroll").perfectScroll()},$(window).bind("resize",t),$(window).bind("scoller",t))},o=function o(){var e;$.isWindowTouch()||$.fn.poshytip&&((e=$("[title]")).poshytip({"className":"ptips-skin","liveEvents":!0,"slide":!1,"alignTo":"cursor","alignX":"right","alignY":"bottom","showAniDuration":150,"hideAniDuration":200,"offsetY":10,"offsetX":20,"showTimeout":function(){var t=1500;return t=$(this).attr("title-timeout")?parseInt($(this).attr("title-timeout")):t},"content":function(t){var e,n,i,o,r=$(this);if(!$.isDraging&&!($(this).hasClass("context-menu-active")||$(this).is(":focus")||r.hasClass("disable")||r.hasClass("disable-title")))return i=r.attr("title-skin"),o=r.attr("title-position"),(e=r.parentNode("[title-root-set]"))&&(i=e.attr("title-skin"),o=e.attr("title-position")),t.addClass(i||"yellow"),o&&(e=["center bottom","center top-5"],(n=2!=(n=o.split(",")).length?e:n)[0]||(n[0]=e[0]),n[1]||(n[1]=e[1]),setTimeout(function(){t.position({"my":n[0],"at":n[1],"of":r,"collision":"flipfit flipfit"})},0)),(i=$(this).data("titleCreate"))&&_.isFunction(i)?i($(this)):(o=$(this).data("title.poshytip"),(o=-1==(o=(o=$(this).attr("title-data")?(r=$($(this).attr("title-data"))).is("input")||r.is("textarea")?r.val():r.html():o)||"").indexOf("<")&&-1==o.indexOf(">")?o.replace(/\n/g,"<br/>"):o).replace(/ /g," "))}}),$(document).bind("mousedown mouseup click touchend touchstart",function(t){!$.fn.poshytip||$(t.target).attr("data-require")||($(e).poshytip("clearTimeouts").poshytip("hide"),$(".ptips-skin").remove())}),$("input,textarea").live("focus",function(){!$.fn.poshytip||$(this).attr("data-require")||($(e).poshytip("hide"),$(".ptips-skin").remove())}))},r=function r(){window.API_HOST&&(template.defaults.cache=!0,template.defaults.minimize=!1,template.defaults.compileDebug=!1)},a=function a(){var t;$.isWindowTouch()||(t=[".menuBar .menu-item",".menu-group-submenu .menu-item-sub",".menuBar .menu-dropdown-user > .ripple-item",".setting-menu-left .menu-item-content",".admin-menu-left .menu-item-content"].join(","),$.hoverAnimate({"el":t,"delegate":"body"}))},d=function d(){var s,t="a,button,.ripple-item,.context-menu-item,.kui-btn,.btn,.button,[ripple-item]",e=($.isWindowTouch()&&(t="a,button,.ripple-item,.kui-btn,.btn,.button,[ripple-item]"),loadRipple(t,".disable-ripple,.disabled,.disable,.ztree,.not-selectable"),a(),$(window).bind("resize",function(){Events.trigger("window.resize")}),function e(t){return!!$(t.target).isEdit()||stopPP(t)});$(document).bind("dragover",e).bind("drop",e),$("body").delegate(".password-view","mousedown touchstart",function(t){var e,n,i=$(this),o=i.parent().children('input[type="password"]');1==o.length&&(e=(e=$(o.get(0)).prop("outerHTML")).replace(/type\s*=\s*("|')?password("|')?/i,'type="text"'),n=$(e).insertAfter(o),o.addClass("hidden"),i.addClass("active"),n.val(o.val()),$($("input[type='text']").get(0)),$(window).one("mouseup touchend",function(){o.removeClass("hidden"),i.removeClass("active"),n.remove()}))}),$("body").delegate("img,a","dragstart",function(t){return stopPP(t)}),window.API_HOST&&($("body").delegate("[link-href]","click",function(t){return s(t,"")}),$("body").delegate("a","click",function(t){"#"==$(this).attr("href")&&t.preventDefault()}),$("body").delegate("[link-href]","mouseup",function(t){if(2==t.which)return s(t,"_blank")}),s=function s(t,e){var n,i=$(t.currentTarget),o=i.attr("link-href")||"#",e=e||i.attr("target"),r=_.startsWith(o,"http://")||_.startsWith(o,"https://"),a=o;if(!r){if(o.startsWith("/")||o.startsWith("./"))return 2==t.which||"_blank"==e?window.open(a):void(window.location.href=o);a=$.parseUrl().urlPath+("#"==o?"":"#"+o)}return i.attr("dialog-open")||"dialog"==e?(n=i.find(".font-icon").prop("outerHTML")||"",n=htmlSafe(n+i.text()),core.openDialog(a,"",n)):r?void("_blank"==e?window.open(a):window.location.href=a):2==t.which||"_blank"==e?window.open(a):void Router.go(o)})},s=function s(){$.fn.tabCurrent=function(t){var e,n,i,o,r,a,s=$(this);return s&&0!=s.length&&(e=s.parent(),a=s.outerWidth(),i=s.offset().left-e.offset().left,0!=(n=e.children(".tab-item-bar")).length&&(n.data("initTab")||(n.data("initTab",1),n.addClass("no-animate opacity-hidden"),setTimeout(function(){n.removeClass("opacity-hidden"),e.children(".tab-item").filter(".active").tabCurrent()},10),setTimeout(function(){e.children(".tab-item").filter(".active").tabCurrent(),n.removeClass("no-animate")},300)),a=+s.width(),i+=(s.outerWidth()-a)/2,o=e.offset().top+e.outerHeight(),r=s.offset().top+s.outerHeight(),a={"width":a+"px","left":i+"px","transform":"translate3d(0px,-"+Math.abs(o-r+1)+"px, 0px)"},t&&n.addClass("no-animate"),n.css(a),e.children(".tab-item").removeClass("active"),s.addClass("active"),t&&(n.offset(),n.removeClass("no-animate")),i=e.parent(),0!=(o=(i=e.attr("tab-pan-parent")?e.parents(e.attr("tab-pan-parent")):i).children(".tab-group-pan").children(".tab-content")).length&&(r=s.attr("tab-name").replace(/'/g,"\\'"),a=o.filter(":visible"),t=o.filter("."+r),a.switchTo(t),s.trigger("tab-select")))),this},$(document).delegate(".tab-group-line .tab-item","click touchend",function(){$(this).tabCurrent()});var t=_.debounce(function(){$(".tab-group-line .tab-item.active").each(function(){$(this).tabCurrent(!0)})},50);$(window).bind("resize",t),$.isWindowTouch()&&u()},u=function u(){}},"650":function(t,e,n){t.exports=n(651)},"651":function(t,e,n){"use strict";var i=n(24),n=n(55),o=(n=n)&&n.__esModule?n:{"default":n};(0,i.loadApi)().then(function(){(0,o["default"])()})}});