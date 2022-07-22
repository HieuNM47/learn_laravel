(self.webpackChunk=self.webpackChunk||[]).push([[7544,4801],{62001:function(e,t){var n,o,r;!function(i,a){"use strict";o=[],n=function(){function e(e){return"object"==typeof Node?e instanceof Node:e&&"object"==typeof e&&"number"==typeof e.nodeType}function t(e){return"string"==typeof e}function n(){var e=[];return{watch:e.push.bind(e),trigger:function(t,n){for(var o=!0,r={detail:n,preventDefault:function(){o=!1}},i=0;i<e.length;i++)e[i](t,r);return o}}}function o(e){return"none"===window.getComputedStyle(e).display}function r(e){this.elem=e}function i(e,t){return r.make(e("parent")).clazz("pico-overlay").clazz(e("overlayClass","")).stylize({display:"none",position:"fixed",top:"0px",left:"0px",height:"100%",width:"100%",zIndex:1e4}).stylize(e("overlayStyles",{opacity:.5,background:"#000"})).onClick((function(){e("overlayClose",!0)&&t()}))}r.make=function(e,t){"string"==typeof e&&(e=document.querySelector(e));var n=document.createElement(t||"div");return(e||document.body).appendChild(n),new r(n)},r.prototype={child:function(e){return r.make(this.elem,e)},stylize:function(e){for(var t in void 0!==(e=e||{}).opacity&&(e.filter="alpha(opacity="+100*e.opacity+")"),e)e.hasOwnProperty(t)&&(this.elem.style[t]=e[t]);return this},clazz:function(e){return this.elem.className+=" "+e,this},html:function(t){return e(t)?this.elem.appendChild(t):this.elem.innerHTML=t,this},onClick:function(e){return this.elem.addEventListener("click",e),this},destroy:function(){this.elem.parentNode.removeChild(this.elem)},hide:function(){this.elem.style.display="none"},show:function(){this.elem.style.display="block"},attr:function(e,t){return void 0!==t&&this.elem.setAttribute(e,t),this},anyAncestor:function(e){for(var t=this.elem;t;){if(e(new r(t)))return!0;t=t.parentNode}return!1},isVisible:function(){return!o(this.elem)}};var a=1;function c(e,t){var n=e("width","auto");"number"==typeof n&&(n+="px");var o=e("modalId","pico-"+a++);return r.make(e("parent")).clazz("pico-content").clazz(e("modalClass","")).stylize({display:"none",position:"fixed",zIndex:10001,left:"50%",top:"38.1966%",maxHeight:"90%",boxSizing:"border-box",width:n,"-ms-transform":"translate(-50%,-38.1966%)","-moz-transform":"translate(-50%,-38.1966%)","-webkit-transform":"translate(-50%,-38.1966%)","-o-transform":"translate(-50%,-38.1966%)",transform:"translate(-50%,-38.1966%)"}).stylize(e("modalStyles",{overflow:"auto",backgroundColor:"white",padding:"20px",borderRadius:"5px"})).html(e("content")).attr("id",o).attr("role","dialog").attr("aria-labelledby",e("ariaLabelledBy")).attr("aria-describedby",e("ariaDescribedBy",o)).onClick((function(e){var n=new r(e.target).anyAncestor((function(e){return/\bpico-close\b/.test(e.elem.className)}));n&&t()}))}function l(e,t){if(t("closeButton",!0))return e.child("button").html(t("closeHtml","&#xD7;")).clazz("pico-close").clazz(t("closeClass","")).stylize(t("closeStyles",{borderRadius:"2px",border:0,padding:0,cursor:"pointer",height:"15px",width:"15px",position:"absolute",top:"5px",right:"5px",fontSize:"16px",textAlign:"center",lineHeight:"15px",background:"#CCC"})).attr("aria-label",t("close-label","Close"))}function s(e){return function(){return e().elem}}var u=n(),f=n();function d(e,t){function n(e,t){return(e.msMatchesSelector||e.webkitMatchesSelector||e.matches).call(e,t)}function r(e){return!(o(e)||n(e,":disabled")||e.hasAttribute("contenteditable"))&&(e.hasAttribute("tabindex")||n(e,"input,select,textarea,button,a[href],area[href],iframe"))}function i(e){for(var t=e.getElementsByTagName("*"),n=0;n<t.length;n++)if(r(t[n]))return t[n]}function a(e){for(var t=e.getElementsByTagName("*"),n=t.length;n--;)if(r(t[n]))return t[n]}var c;e.beforeShow((function(){c=document.activeElement})),e.afterShow((function(){if(t()){var n=i(e.modalElem());n&&n.focus()}})),e.afterClose((function(){t()&&c&&c.focus(),c=null})),f.watch((function(n){if(t()&&e.isVisible()){var o=i(e.modalElem()),r=a(e.modalElem());(n.shiftKey?o:r)===document.activeElement&&((n.shiftKey?r:o).focus(),n.preventDefault())}}))}function p(e,t){var n,o=new r(document.body);e.beforeShow((function(){n=o.elem.style.overflow,t()&&o.stylize({overflow:"hidden"})})),e.afterClose((function(){o.stylize({overflow:n})}))}return document.documentElement.addEventListener("keydown",(function(e){var t=e.which||e.keyCode;27===t?u.trigger():9===t&&f.trigger(e)})),function(o){(t(o)||e(o))&&(o={content:o});var r=n(),a=n(),f=n(),h=n(),m=n();function y(e,t){var n=o[e];return"function"==typeof n&&(n=n(t)),void 0===n?t:n}var b,v,w=E.bind(window,"modal"),g=E.bind(window,"overlay"),C=E.bind(window,"close");function x(e){g().hide(),w().hide(),m.trigger(b,e)}function z(e){h.trigger(b,e)&&x(e)}function k(e){return function(){return e.apply(this,arguments),b}}function E(e,t){if(!v){var n=c(y,z);v={modal:n,overlay:i(y,z),close:l(n,y)},r.trigger(b,t)}return v[e]}return d(b={modalElem:s(w),closeElem:s(C),overlayElem:s(g),buildDom:k(E.bind(null,null)),isVisible:function(){return!!(v&&w&&w().isVisible())},show:function(e){return a.trigger(b,e)&&(g().show(),C(),w().show(),f.trigger(b,e)),this},close:k(z),forceClose:k(x),destroy:function(){w().destroy(),g().destroy(),g=w=C=void 0},options:function(e){Object.keys(e).map((function(t){o[t]=e[t]}))},afterCreate:k(r.watch),beforeShow:k(a.watch),afterShow:k(f.watch),beforeClose:k(h.watch),afterClose:k(m.watch)},y.bind(null,"focus",!0)),p(b,y.bind(null,"bodyOverflow",!0)),u.watch((function(){y("escCloses",!0)&&b.isVisible()&&b.close()})),b}},void 0===(r="function"==typeof n?n.apply(t,o):n)||(e.exports=r)}()},31655:()=>{"use strict";function e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)e[o]=n[o]}return e}(function t(n,o){function r(t,r,i){if("undefined"!=typeof document){"number"==typeof(i=e({},o,i)).expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var a="";for(var c in i)i[c]&&(a+="; "+c,!0!==i[c]&&(a+="="+i[c].split(";")[0]));return document.cookie=t+"="+n.write(r,t)+a}}return Object.create({set:r,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var t=document.cookie?document.cookie.split("; "):[],o={},r=0;r<t.length;r++){var i=t[r].split("="),a=i.slice(1).join("=");try{var c=decodeURIComponent(i[0]);if(o[c]=n.read(a,c),e===c)break}catch(e){}}return e?o[e]:o}},remove:function(t,n){r(t,"",e({},n,{expires:-1}))},withAttributes:function(n){return t(this.converter,e({},this.attributes,n))},withConverter:function(n){return t(e({},this.converter,n),this.attributes)}},{attributes:{value:Object.freeze(o)},converter:{value:Object.freeze(n)}})})({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}}]);
//# sourceMappingURL=https://talent.stackoverflow.com/sourcemaps/7544.map