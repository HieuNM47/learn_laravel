(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(t,e,o){"use strict";o.r(e);o(274);var r=o(9),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"bb bc-black-050 ps-relative z-nav-fixed"},[o("div",{staticClass:"p-wrapper bar0 d-flex ai-start mx-auto fs-body2 overflow-x-auto",attrs:{id:"product-main-nav"}},[o("a",{staticClass:"s-topbar--logo mr16",attrs:{href:"https://stackoverflow.co",title:"Go to home"}},[o("IconLogoGlyph",{staticClass:"native va-middle"})],1),t._v(" "),o("nav",{staticClass:"flex--item as-center ws-nowrap fl1 s-navigation s-navigation__muted s-navigation__sm"},[o("a",{staticClass:"s-navigation--item fs-body2",class:[t.$route.path.startsWith("/teams")&&"is-selected"],attrs:{href:"https://stackoverflow.co/teams"}},[t._v("\n        Teams\n      ")]),t._v(" "),o("a",{staticClass:"s-navigation--item fs-body2",class:[t.$route.path.startsWith("/talent")&&"is-selected"],attrs:{href:"https://stackoverflow.co/talent"}},[t._v("\n        Talent\n      ")]),t._v(" "),o("a",{staticClass:"s-navigation--item fs-body2",class:[t.$route.path.startsWith("/advertising")&&"is-selected"],attrs:{href:"https://stackoverflow.co/advertising"}},[t._v("\n        Advertising\n      ")]),t._v(" "),o("a",{staticClass:"s-navigation--item fs-body2",class:[t.$route.path.startsWith("/collectives")&&"is-selected"],attrs:{href:"https://stackoverflow.co/collectives"}},[t._v("\n        Collectives\n      ")])]),t._v(" "),o("nav",{staticClass:"as-center md:d-none s-navigation s-navigation__muted s-navigation__sm"},[o("a",{staticClass:"s-navigation--item fs-body2",class:[t.$route.path.startsWith("company")&&"is-selected"],attrs:{href:"https://stackoverflow.co"}},[o("span",[t._v(" About ")])]),t._v(" "),o("a",{staticClass:"s-navigation--item fs-body2",attrs:{href:"https://stackoverflow.blog/"}},[t._v(" Blog ")]),t._v(" "),o("a",{staticClass:"s-navigation--item fs-body2",attrs:{href:"https://stackoverflow.blog/newsletter"}},[t._v(" Newsletter ")]),t._v(" "),o("a",{staticClass:"s-navigation--item fs-body2",attrs:{href:"https://stackoverflow.blog/podcast"}},[t._v(" Podcast ")]),t._v(" "),o("StackLink",{staticClass:"s-navigation--item fs-body2",attrs:{loc:"Homepage"}},[t._v("\n        Go to stackoverflow.com\n        "),o("IconShareSm",{staticClass:"va-middle ml6"})],1)],1)])])}),[],!1,null,"146e9edb",null);e.default=component.exports;installComponents(component,{StackLink:o(227).default})},162:function(t,e,o){"use strict";o(12),o(29),o(32),o(84),o(26),o(100),o(27);e.a=function(t){for(var e=t.app,o=new URLSearchParams(window.location.search),r={},n=0,c=["utm_campaign","utm_source","utm_medium","utm_content","gclid"];n<c.length;n++){var l=c[n],d=o.get(l);d&&(r[l]=d)}r&&Object.keys(r).length&&e.$cookies.set("stackex_provenance",r,{path:"/",maxAge:2592e3,domain:window.location.hostname})}},163:function(t,e,o){"use strict";o(54),o(25),o(60),o(99);e.a=function(t,e){var o=t.env,r=t.route,n=o.baseUrl;e("metaTags",(function(t){var e={title:"",description:"Founded in 2008, Stack Overflow’s public platform is used by nearly everyone who codes to learn, share their knowledge, collaborate, and build their careers.",url:"".concat(n).concat(r.fullPath),type:"website",twitterCard:"summary_large_image",robots:"Index, Follow",imageUrl:"/img/product/og/og-company.png",canonicalUrl:""};return{title:t.title+" - Stack Overflow",meta:[{hid:"description",name:"description",content:t.description||e.description},{hid:"og:description",property:"og:description",content:t.description||e.description},{hid:"twitter:description",name:"twitter:description",content:t.description||e.description},{hid:"twitter:title",name:"twitter:title",content:t.title},{hid:"og:title",property:"og:title",content:t.title},{hid:"og:url",property:"og:url",content:t.url||e.url},{hid:"twitter:url",name:"twitter:url",content:t.url||e.url},{hid:"og:type",property:"og:type",content:t.type||e.type},{hid:"twitter:card",name:"twitter:card",content:t.twitterCard||e.twitterCard},{hid:"twitter:card",name:"twitter:card",content:t.twitterCard||e.twitterCard},{hid:"twitter:image",name:"twitter:image",content:"".concat(t.imageUrl&&!t.imageUrl.startsWith("https://")?n:"").concat(t.imageUrl||e.imageUrl)},{hid:"og:image",property:"og:image",content:"".concat(t.imageUrl&&!t.imageUrl.startsWith("https://")?n:"").concat(t.imageUrl||e.imageUrl)},{hid:"robots",name:"robots",content:t.robots||e.robots}],link:[{rel:"canonical",href:t.canonicalUrl||e.url,id:"canonical"}]}}))}},164:function(t,e,o){"use strict";o(27),o(25),o(31),o(12),o(40),o(28),o(41);var r=o(15),n=o(217),c=o.n(n);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=function(t,e){var o=t.$sanity,r=c()(d(d({},o.config),{},{baseUrl:"https://cdn.stackoverflow.co"}));e("urlFor",(function(source){return r.image(source).auto("format")}))}},165:function(t,e,o){"use strict";e.a=function(t){var e=t.query,o=t.enablePreview;e.preview&&o()}},166:function(t,e,o){"use strict";var r=o(2),n=o(129);e.a=function(t){var e=t.env,o=t.app;r.a.use(n.a,{enabled:!0,config:{id:e.googleAnalytics},params:{send_page_view:!0}},o.router)}},167:function(t,e,o){"use strict";var r=o(129);function n(t){var e=function(t){for(;t;){if("A"===t.nodeName)return t;t=t.parentNode}return null}(t.target);return e&&"getAttribute"in e&&Object(r.b)("click",{link_text:e.innerText,link_classes:e.getAttribute("class"),link_id:e.getAttribute("id"),link_url:e.getAttribute("href")}),!0}var c=!1;e.a=function(){c||(c=!0,window.addEventListener("click",n,{capture:!0,passive:!0}))}},168:function(t,e,o){"use strict";o(26),o(100);e.a=function(t){t.app.router.afterEach((function(){for(var t=document.querySelectorAll(".js-pass-qs"),i=0;i<t.length;++i){var e=t[i].getAttribute("href");t[i].setAttribute("href",e+window.location.search)}}))}},169:function(t,e,o){"use strict";o(54),o(26),o(100),o(12),o(77);function r(t){var img=document.createElement("img");img.src=t,img.width=0,img.height=0,img.style.display="none",img.style.visibility="hidden",document.body.appendChild(img)}e.a=function(){r("https://www.googleadservices.com/pagead/conversion/961466557/?guid=ON&script=0&random=".concat(Math.floor(1e14*Math.random()),"&url=").concat(encodeURI(location.href))),r("https://px.ads.linkedin.com/collect/?pid=19337&fmt=gif"),r("https://analytics.twitter.com/i/adsct?p_id=Twitter&p_user_id=0&txn_id=o3b90&events=%5B%5B%22pageview%22%2Cnull%5D%5D&tw_sale_amount=0&tw_order_quantity=0&type=image&version=1.1.0"),r("https://t.co/i/adsct?p_id=Twitter&p_user_id=0&txn_id=o3b90&events=%5B%5B%22pageview%22%2Cnull%5D%5D&tw_sale_amount=0&tw_order_quantity=0&type=image&version=1.1.0");var t=/[?&]msclkid=([^&]+)/.exec(location.search),e=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)};r("https://bat.bing.com/action/0?ti=17421185&Ver=2&tl=".concat(encodeURIComponent(document.title),"&p=").concat(encodeURIComponent(location.href)).concat(t?"&msclkid="+encodeURIComponent(t[1])+"-1":"","&mid=").concat(e()).concat(e(),"-").concat(e(),"-").concat(e(),"-").concat(e(),"-").concat(e()).concat(e()).concat(e(),"&evt=pageLoad"))}},170:function(t,e,o){"use strict";e.a=function(){var t=!1;var script=document.createElement("script");script.onload=function(){!1===t&&(t=!0,window.Munchkin.init("719-EMH-566"))},script.type="text/javascript",script.async=!0,script.src="https://munchkin.marketo.net/munchkin.js",document.getElementsByTagName("head")[0].appendChild(script)}},203:function(t,e,o){var content=o(275);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(106).default)("7e12f44e",content,!0,{sourceMap:!1})},213:function(t){t.exports=JSON.parse('{"script":[{"hid":"6si_settings","innerHTML":"window._6si = window._6si || []; window._6si.push([\'enableEventTracking\', true]); window._6si.push([\'setToken\', \'7e42ecdcd598d8c96281bc6eb0940428\']); window._6si.push([\'setEndpoint\', \'b.6sc.co\']);"},{"hid":"6si","src":"https://j.6sc.co/6si.min.js","async":true}],"__dangerouslyDisableSanitizersByTagID":{"6si_settings":["innerHTML"]}}')},220:function(t,e,o){"use strict";var r={head:{bodyAttrs:{class:"theme-light body__full-height bg-black-025"}}},n=o(9),component=Object(n.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("main",[e("nuxt")],1)}),[],!1,null,null,null);e.a=component.exports},221:function(t,e,o){"use strict";var r={head:{bodyAttrs:{class:"theme-light p-bg-swoosh"}}},n=o(9),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("main",[o("NavigationCompany"),t._v(" "),o("nuxt"),t._v(" "),o("Footer")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{NavigationCompany:o(325).default,Footer:o(85).default})},222:function(t,e,o){"use strict";var r={head:{bodyAttrs:{class:"theme-light bg-black-025"}}},n=o(9),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("main",[o("NavigationTopBar"),t._v(" "),o("nuxt"),t._v(" "),o("Footer")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{NavigationTopBar:o(101).default,Footer:o(85).default})},223:function(t,e,o){"use strict";var r={head:{bodyAttrs:{class:"theme-light body__full-height bg-black-025"}}},n=o(9),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("main",[o("NavigationTopBar"),t._v(" "),t._t("nav"),t._v(" "),o("nuxt")],2)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{NavigationTopBar:o(101).default})},224:function(t,e,o){"use strict";var r={head:{bodyAttrs:{class:"theme-light bg-black-025"}}},n=o(9),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("main",[o("NavigationTopBar"),t._v(" "),o("NavigationResources"),t._v(" "),o("nuxt",{staticClass:"mb64 sm:mb0"}),t._v(" "),o("Footer")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{NavigationTopBar:o(101).default,NavigationResources:o(324).default,Footer:o(85).default})},225:function(t,e,o){"use strict";o(27),o(25),o(31),o(12),o(40),o(28),o(41);var r=o(15);function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var c={head:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({bodyAttrs:{class:"theme-light bg-black-025"}},o(213))},l=c,d=o(9),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("main",[o("NavigationTopBar"),t._v(" "),o("nuxt"),t._v(" "),o("Footer")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{NavigationTopBar:o(101).default,Footer:o(85).default})},227:function(t,e,o){"use strict";o.r(e);o(54),o(12),o(77),o(29),o(32),o(84);var r="https://stackoverflow.com",n={props:{loc:{type:String,default:"Homepage",required:!0},appendProvenanceCookie:{type:Boolean,default:!0,required:!1}},data:function(){return{locs:{Homepage:r,TeamsCreateFree:"".concat(r,"/teams/create/free"),TeamsCreateBasic:"".concat(r,"/teams/create/basic"),TeamsCreateBusiness:"".concat(r,"/teams/create/business"),TeamsCreateEnterprise:"".concat("https://stackoverflow.co","/explore-teams"),PrivacyPolicy:"".concat(r,"/legal/privacy-policy")},cta:{TeamsCreateFree:"Create a free Team",TeamsCreateBasic:"Get started",TeamsCreateBusiness:"Get started",TeamsCreateEnterprise:"Request a demo",PrivacyPolicy:"PrivacyPolicy"},provenanceCookie:""}},computed:{base:function(){return this.locs[this.loc]},getCta:function(){return this.cta[this.loc]},url:function(){return"".concat(this.base).concat(this.appendProvenanceCookie&&this.provenanceCookie?"?"+this.provenanceCookie:"")}},mounted:function(){this.getProvenanceCookie()},methods:{getProvenanceCookie:function(){this.provenanceCookie=new URLSearchParams(this.$cookies.get("stackex_provenance")).toString()}}},c=o(9),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("a",{attrs:{href:t.url}},[t._t("default",(function(){return[t._v(t._s(t.getCta))]}))],2)}),[],!1,null,null,null);e.default=component.exports},231:function(t,e,o){o(232),t.exports=o(233)},270:function(t,e,o){var content=o(271);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(106).default)("f52d43e0",content,!0,{sourceMap:!1})},271:function(t,e,o){var r=o(105),n=o(272),c=o(273),l=r(!1),d=n(c);l.push([t.i,'html{scroll-behavior:smooth}body{font-family:"Source Sans Pro","Arial",sans-serif}body.body__full-height,body.body__full-height #__layout,body.body__full-height #__layout>main,body.body__full-height #__stackex{min-height:100vh;display:flex;flex-direction:column}address{font-style:normal}.p-ff-source{font-family:"Source Sans Pro";font-weight:400}.p-ff-source-bold{font-family:"Source Sans Pro";font-weight:600}.p-ff-roboto-slab{font-family:"Roboto Slab";font-weight:400}.p-ff-roboto-slab-bold{font-family:"Roboto Slab";font-weight:700}.p-lh-md{line-height:1.5em}.p-bg-purple{background-color:#2b2d6e!important}.p-bg-purple-light{background-color:#f7f6f9!important}.p-fc-purple{color:#2b2d6e!important}.p-bc-purple{border-color:#2b2d6e!important}.p-bg-yellow{background-color:#ffb500}.h\\:p-bg-yellow-tint:hover{background-color:#f1ab00!important}.h\\:p-bg-purple-tint:hover{background-color:#181a47!important}.p-bg-blue{background-color:#075ec3}.p-fc-blue{color:#075ec3}.p-bg-red{background-color:#db4343}.p-fc-red{color:#db4343}.p-bg-blue-pastel{background-color:#f9fbfd}.p-bg-beige-pastel{background-color:#fcfbfa}.p-bg-video-overlay{background:rgba(0,0,0,.7);background:linear-gradient(180deg,transparent,#212121)}body.theme-dark .d\\:p-fc-purple{color:#6649b8!important}body.theme-dark .d\\:p-bg-purple-alt{background-color:#6649b8!important}body.theme-dark .d\\:p-bg-dark-tint{background-color:#282727!important}body.theme-dark .p-fc-blue{color:#0095ff!important}body.theme-dark .p-bg-blue{background-color:#0095ff!important}@media (prefers-color-scheme:dark){body.theme-system .d\\:p-fc-purple{color:#6649b8!important}body.theme-system .d\\:p-bg-purple-alt{background-color:#6649b8!important}body.theme-system .d\\:p-bg-dark-tint{background-color:#282727!important}body.theme-system .p-fc-blue{color:#0095ff!important}body.theme-system .p-bg-blue{background-color:#0095ff!important}}.p-nav-teams>.is-selected{color:#fff!important}body.theme-dark .p-nav-teams>.is-selected{background:var(--black-150)!important;color:var(--black-800)!important}@media (prefers-color-scheme:dark){body.theme-system .p-nav-teams>.is-selected{background:var(--black-150)!important;color:var(--black-800)!important}}.p-bg-swoosh{background-image:url('+d+');background-position:50% 0;background-size:100% auto;background-repeat:no-repeat}.p-bg-swoosh--about{background-position:50% -110px}.p-bs-wrapper{box-shadow:0 12px 11px rgba(0,0,0,.035),0 100px 80px rgba(0,0,0,.07)}.p-player{height:0;padding-bottom:56.25%}body.theme-dark .p-logo{filter:grayscale(1) brightness(0) invert(1);opacity:.8}@media (prefers-color-scheme:dark){body.theme-system .p-logo{filter:grayscale(1) brightness(0) invert(1);opacity:.8}}.p-wrapper{max-width:1450px;padding:0 64px}@media (max-width:640px){.p-wrapper{padding:0 5%}}.p-wrapper:last-of-type{border-radius:0 0 7px 7px}.p-s-header{padding-top:32vh;padding-bottom:8vh;background-size:100% auto}@media (max-width:630px){.p-s-header{padding-top:300px;padding-bottom:32px}}.p-s-header__audience,.p-s-header__talent{background-image:url(/img/product/teams/illo-teams-1-h1.svg);background-repeat:no-repeat;background-position:100% 0;background-size:contain}@media (max-width:){.p-s-header__audience,.p-s-header__talent{background-size:166% auto}}.p-s-header__talent{padding-top:320px;background-image:url(/img/product/talent/illo-tal-1-h1.svg);background-size:110% auto;padding-bottom:0}.p-s-header__audience{background-image:url(/img/product/audience/illo-1-h1.svg)}.p-section-header{background-position:0 0;background-repeat:no-repeat;background-size:auto 30px;padding-top:70px}.p-section-header--teams{background-image:url(/img/product/teams/bg-header.svg)}body.theme-dark .p-section-header--teams{background-image:url(/img/product/teams/bg-header-dark.svg)}@media (prefers-color-scheme:dark){body.theme-system .p-section-header--teams{background-image:url(/img/product/teams/bg-header-dark.svg)}}.p-section-header--audience{background-image:url(/img/product/audience/bg-header.svg);background-size:auto 40px}.p-section-header--talent{background-image:url(/img/product/talent/bg-header.svg)}.p-blockquote:before{display:none}.p-bg-text-gradient{background:var(--black-075);background:linear-gradient(90deg,var(--black-075),var(--white))}.p-bits{position:absolute;display:block;width:32px;height:32px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;z-index:50}@media (max-width:){.p-bits{display:none}}.p-bits:after,.p-bits:before{position:absolute;top:0;left:0;background:currentColor;width:50%;height:50%;content:"";border-radius:13% 13% 0}.p-bits:after{top:50%;left:50%;opacity:.2;border-radius:0 13% 13%}.p-bg-dark-gradient{background:var(--black-700);background:linear-gradient(180deg,var(--black-800),var(--black-600) 130%)}body.theme-dark .p-bg-dark-gradient{background:var(--white);background:linear-gradient(180deg,var(--white),#282727)}@media (prefers-color-scheme:dark){body.theme-system .p-bg-dark-gradient{background:var(--white);background:linear-gradient(180deg,var(--white),#282727)}}.p-speech-bubble--left:after{-webkit-clip-path:polygon(18px 0,32px 0,0 40px,0 38px,0 0,18px 0);clip-path:polygon(18px 0,32px 0,0 40px,0 38px,0 0,18px 0);background:var(--blue-100);width:32px;height:32px;position:absolute;top:99%;left:0;display:block;content:"";border-radius:0 5px 0}.p-tour--target{position:relative}.p-tour--target:after{position:absolute;content:"";bottom:-4px;left:12px;display:block;width:15px;height:15px;border-radius:30px;background:#f48024;border:2px solid #fff;box-shadow:2px 2px 2px rgba(0,0,0,.2)}',""]),t.exports=l},273:function(t,e,o){"use strict";o.r(e),e.default=o.p+"assets/bg-nav.1f19dbe7.svg"},274:function(t,e,o){"use strict";o(203)},275:function(t,e,o){var r=o(105)(!1);r.push([t.i,"#product-main-nav[data-v-146e9edb]{padding-top:9px;padding-bottom:9px}",""]),t.exports=r},324:function(t,e,o){"use strict";o.r(e);var r,n,c=o(160),l=o(5),d=(o(54),o(42),o(80)),f=o(172),v=o.n(f),h=o(173),m=o.n(h),_={directives:{clickOutside:v.a.directive},data:function(){return{products:[],topics:[],navProduct:!1,navTopic:!1,searchQuery:"",searchResults:[],searchShow:!1,searchLoading:!1}},fetch:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$sanity.fetch(Object(d.b)(r||(r=Object(c.a)(['\n      {\n        "products": *[_type == "product"] {\n          name,\n          slug,\n          descriptionShort\n        },\n        "topics": *[_type == "resourceCategory"] | order(title desc) {\n          title,\n          slug\n        }\n      }\n    ']))));case 2:data=e.sent,t.products=data.products,t.topics=data.topics;case 5:case"end":return e.stop()}}),e)})))()},methods:{closeNavProduct:function(){this.navProduct=!1},closeNavTopic:function(){this.navTopic=!1},closeSearch:function(){this.searchShow=!1},resourceUrl:function(t){var e=t.category&&t.category.slug&&t.category.slug.current?"/topic/".concat(t.category.slug.current):"";return t.externalUrl?t.externalUrl:"".concat(e,"/").concat(t.slug.current)},searchSubmit:m()(Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(this.searchQuery.length>2)){t.next=7;break}return this.searchShow=!0,this.searchLoading=!0,t.next=5,this.$sanity.fetch(Object(d.b)(n||(n=Object(c.a)(['\n          *[_type == "resource" && visible == true && !(_id in path("drafts.**"))]\n            | score(\n              pt::text(body) match "','"\n              || boost(pt::text(body) match "','*", 0.5)\n              || boost(title match "','", 1)\n            )\n            | order(score desc)\n            {\n              _id,\n              title,\n              slug,\n              category->{\n                slug\n              },\n          }[0...8]\n        '])),this.searchQuery,this.searchQuery,this.searchQuery));case 5:this.searchResults=t.sent,this.searchLoading=!1;case 7:case"end":return t.stop()}}),t,this)}))))}},k=o(9),component=Object(k.a)(_,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"d-flex p-wrapper py16 fl1 sm:fd-column flex__fl-grow1 fs-body2 mx-auto"},[o("nav",{staticClass:"s-navigation as-start mln16"},[o("NuxtLink",{staticClass:"s-navigation--item",class:["index"===t.$route.name&&"is-selected"],attrs:{to:"/"}},[t._v("Resources")]),t._v(" "),o("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeNavProduct,expression:"closeNavProduct"}],staticClass:"ps-relative"},[o("button",{staticClass:"s-navigation--item s-navigation--item__dropdown",class:{"is-selected":t.navProduct},attrs:{"aria-controls":[t.navProduct&&"popover-product-nav"]},on:{click:function(e){t.navProduct=!t.navProduct}}},[t._v("\n        By product\n      ")]),t._v(" "),t.navProduct?o("div",{staticClass:"s-popover t100 l50 mt12 ws2 p0 is-visible fs-body2",style:{marginLeft:"-105px"},attrs:{id:"popover-product-nav",role:"menu","aria-hidden":"false"}},[o("div",{staticClass:"s-popover--arrow s-popover--arrow__tc"}),t._v(" "),o("ol",{staticClass:"ta-left list-reset s-anchors s-anchors__inherit pb6"},t._l(t.products,(function(e){return o("li",{key:e.name,staticClass:"m6 mb0"},[o("NuxtLink",{staticClass:"bar-sm p6 d-block h:bg-black-050",attrs:{to:"/"+e.slug.current},nativeOn:{click:function(e){t.navProduct=!1}}},[o("span",{staticClass:"d-block"},[t._v("\n                "+t._s(e.name)+"\n              ")]),t._v(" "),o("span",{staticClass:"d-block fc-black-400"},[t._v("\n                "+t._s(e.descriptionShort)+"\n              ")])])],1)})),0)]):t._e()]),t._v(" "),o("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeNavTopic,expression:"closeNavTopic"}],staticClass:"ps-relative"},[o("button",{staticClass:"s-navigation--item s-navigation--item__dropdown",class:{"is-selected":t.navTopic},attrs:{"aria-controls":[t.navTopic&&"popover-topic-nav"]},on:{click:function(e){t.navTopic=!t.navTopic}}},[t._v("\n        By topic\n      ")]),t._v(" "),t.navTopic?o("div",{staticClass:"s-popover t100 l50 mt12 ws2 p0 is-visible fs-body2",style:{marginLeft:"-105px"},attrs:{id:"popover-topic-nav",role:"menu","aria-hidden":"false"}},[o("div",{staticClass:"s-popover--arrow s-popover--arrow__tc"}),t._v(" "),o("ol",{staticClass:"ta-left list-reset s-anchors s-anchors__inherit py6"},t._l(t.topics,(function(e){return o("li",{key:e.slug,staticClass:"mx6"},[o("NuxtLink",{staticClass:"bar-sm p6 d-block lh-sm h:fc-orange-400 h:bg-orange-050",attrs:{to:"/topic/"+e.slug.current},nativeOn:{click:function(e){t.navTopic=!1}}},[t._v("\n              "+t._s(e.title)+"\n            ")])],1)})),0)]):t._e()])],1),t._v(" "),o("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeSearch,expression:"closeSearch"}],staticClass:"flex--item ml-auto ps-relative ml16 w100 wmx3 sm:wmx-initial sm:ml0 sm:d-none print:d-none"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],staticClass:"s-input s-input__search bar-md fs-body2",attrs:{type:"text",placeholder:"Find a resource…",autocomplete:"off",spellcheck:"false"},domProps:{value:t.searchQuery},on:{keyup:t.searchSubmit,focus:t.searchSubmit,input:function(e){e.target.composing||(t.searchQuery=e.target.value)}}}),t._v(" "),o("IconSearch",{staticClass:"s-input-icon s-input-icon__search"}),t._v(" "),t.searchShow?o("div",{staticClass:"s-popover is-visible mt16 fs-body2"},[o("div",{staticClass:"s-popover--arrow s-popover--arrow__tc"}),t._v(" "),o("ul",{staticClass:"list-reset"},[t._l(t.searchResults,(function(e){return o("li",{key:"search_"+e._id},[o("a",{staticClass:"d-block py6 px8 h:fc-blue-500 h:bg-blue-050 bar-md",attrs:{href:t.resourceUrl(e)}},[t._v("\n            "+t._s(e.title)+"\n          ")])])})),t._v(" "),0!=t.searchLoading||t.searchResults.length?t._e():o("li",{staticClass:"ta-center bg-black-025 p12"},[t._v("\n          No results found.\n        ")]),t._v(" "),t.searchLoading?o("li",{staticClass:"s-spinner fc-black-200 mx-auto my8"},[o("div",{staticClass:"v-visible-sr"},[t._v("Loading…")])]):t._e()],2)]):t._e()],1)])}),[],!1,null,null,null);e.default=component.exports},325:function(t,e,o){"use strict";o.r(e);var r=o(9),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("NavigationTopBar"),t._v(" "),o("div",{staticClass:"d-flex p-wrapper py16 fl1 sm:fd-column flex__fl-grow1 ps-static z-nav-fixed t0 fs-body2 mx-auto mb12"},[o("nav",{staticClass:"s-navigation as-start mln16"},[o("NuxtLink",{staticClass:"s-navigation--item",class:["/"==t.$route.path&&"is-selected"],attrs:{to:"/"}},[t._v("\n        About\n      ")]),t._v(" "),o("NuxtLink",{staticClass:"s-navigation--item",class:[t.$route.path.startsWith("/company/leadership")&&"is-selected"],attrs:{to:"/company/leadership/"}},[t._v("\n        Leadership\n      ")]),t._v(" "),o("NuxtLink",{staticClass:"s-navigation--item",class:[t.$route.path.startsWith("/company/careers")&&"is-selected"],attrs:{to:"/company/careers/"}},[t._v("\n        Careers\n      ")]),t._v(" "),o("NuxtLink",{staticClass:"s-navigation--item",class:[t.$route.path.startsWith("/company/work-here")&&"is-selected"],attrs:{to:"/company/work-here/"}},[t._v("\n        Open positions\n      ")]),t._v(" "),o("NuxtLink",{staticClass:"s-navigation--item",class:[t.$route.path.startsWith("/company/press")&&"is-selected"],attrs:{to:"/company/press/"}},[t._v("\n        Press\n      ")]),t._v(" "),o("NuxtLink",{staticClass:"s-navigation--item",class:[t.$route.path.startsWith("/company/research")&&"is-selected"],attrs:{to:"/company/research/"}},[t._v("\n        Research\n      ")]),t._v(" "),o("NuxtLink",{staticClass:"s-navigation--item",class:[t.$route.path.startsWith("/company/contact")&&"is-selected"],attrs:{to:"/company/contact/"}},[t._v("\n        Contact us\n      ")])],1),t._v(" "),t._m(0)])],1)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"jc-end ai-center fl0 d-flex ml-auto sm:w100 as-center sm:bt bc-black-050 sm:mt16 sm:pt16 ws-nowrap"},[t._v("\n      New here?\n      "),o("a",{staticClass:"ml16 ta-center py6 px12 bar-md p-ff-source-bold bg-blue-500 fc-white d:fc-black-900 ws-nowrap",attrs:{href:"https://stackoverflow.com/tour"}},[t._v("\n        Take a tour\n      ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{NavigationTopBar:o(101).default})},61:function(t,e,o){"use strict";var r={layout:"empty",props:{error:{type:Object,required:!0}},head:function(){return{title:404===this.error.statusCode?"Page not found":"Something went wrong"}}},n=o(9),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"h100 ta-center p24 wmx5 d-flex fd-column flex__center m-auto"},[o("SpotAlertXL",{staticClass:"mtn48 sm:d-none"}),t._v(" "),o("SpotAlertLg",{staticClass:"d-none sm:d-inline-block"}),t._v(" "),o("h1",{staticClass:"fs-display4 fc-black-100 mb4 p-ff-roboto-slab-bold"},[t._v("\n    "+t._s(t.error.statusCode)+"\n  ")]),t._v(" "),404===t.error.statusCode?o("h2",{staticClass:"fs-headline1 p-ff-roboto-slab-bold mb8"},[t._v(" Page not found! ")]):o("h2",{staticClass:"fs-headline1 p-ff-roboto-slab-bold mb8"},[t._v(" Oops! Something bad happened! ")]),t._v(" "),404===t.error.statusCode?o("p",{staticClass:"fs-subheading mb32"},[t._v("\n    We're sorry, we couldn't find the page you requested.\n  ")]):o("p",{staticClass:"fs-subheading mb32"},[t._v("\n    We apologize for any inconvenience, but an unexpected error occurred while you were browsing our site.\n  ")]),t._v(" "),o("NuxtLink",{staticClass:"s-btn s-btn__primary s-btn__md mb4",attrs:{to:"/"}},[t._v(" Go to homepage ")]),t._v(" "),o("br"),t._v(" "),o("a",{staticClass:"s-btn s-btn__md s-btn__muted",attrs:{href:"https://stackoverflow.com"}},[o("IconLogoGlyphSm",{staticClass:"mr4"}),t._v("\n    Looking for stackoverflow.com?\n  ")],1)],1)}),[],!1,null,null,null);e.a=component.exports},85:function(t,e,o){"use strict";o.r(e);var r=o(9),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",{staticClass:"bg-black-800 d:p-bg-dark-tint mt-auto"},[o("div",{staticClass:"p-wrapper bar0 mx-auto pt48 pb64 sm:pt32 sm:pb0 fs-body2 overflow-hidden print:d-none"},[o("div",{staticClass:"d-flex sm:fd-column"},[o("div",{staticClass:"flex--item3 sm:mb32"},[o("IconLogoGlyphMd",{staticClass:"native"})],1),t._v(" "),t._m(0),t._v(" "),t._m(1)])])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"d-flex fl1 ff-row-wrap sm:mb32"},[o("div",{staticClass:"flex--item6"},[o("h3",{staticClass:"tt-uppercase fs-body2 fc-black-200"},[t._v("Stack Overflow")]),t._v(" "),o("a",{staticClass:"fc-black-400 h:fc-black-200 py2 d-block",attrs:{href:"https://stackoverflow.co/"}},[t._v("About")]),t._v(" "),o("a",{staticClass:"fc-black-400 h:fc-black-200 py2 d-block",attrs:{href:"https://stackoverflow.co/company/press"}},[t._v("Press")]),t._v(" "),o("a",{staticClass:"fc-black-400 h:fc-black-200 py2 d-block",attrs:{href:"https://stackoverflow.co/company/work-here"}},[t._v("Work Here")]),t._v(" "),o("a",{staticClass:"fc-black-400 h:fc-black-200 py2 d-block",attrs:{href:"https://stackoverflow.co/company/contact"}},[t._v("Contact Us")]),t._v(" "),o("a",{staticClass:"fc-black-400 h:fc-black-200 py2 d-block",attrs:{href:"https://stackoverflow.com/questions"}},[t._v("\n            Questions\n          ")])]),t._v(" "),o("div",{staticClass:"flex--item6"},[o("h3",{staticClass:"tt-uppercase fs-body2 fc-black-200"},[t._v("Products")]),t._v(" "),o("a",{staticClass:"fc-black-400 h:fc-black-200 py2 d-block",attrs:{href:"https://stackoverflow.co/teams"}},[t._v("Teams")]),t._v(" "),o("a",{staticClass:"fc-black-400 h:fc-black-200 py2 d-block",attrs:{href:"https://stackoverflow.co/advertising"}},[t._v("\n            Advertising\n          ")]),t._v(" "),o("a",{staticClass:"fc-black-400 h:fc-black-200 py2 d-block",attrs:{href:"https://stackoverflow.co/collectives"}},[t._v("\n            Collectives\n          ")]),t._v(" "),o("a",{staticClass:"fc-black-400 h:fc-black-200 py2 d-block",attrs:{href:"https://stackoverflow.co/talent"}},[t._v("Talent")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"d-flex fl1 ff-row-wrap sm:mb32"},[o("div",{staticClass:"flex--item6"},[o("h3",{staticClass:"tt-uppercase fs-body2 fc-black-200"},[t._v("Policies")]),t._v(" "),o("a",{staticClass:"fc-black-400 h:fc-black-200 py2 d-block",attrs:{href:"https://stackoverflow.com/legal"}},[t._v("Legal")]),t._v(" "),o("a",{staticClass:"fc-black-400 h:fc-black-200 py2 d-block",attrs:{href:"https://stackoverflow.com/legal/privacy-policy"}},[t._v("\n            Privacy Policy\n          ")]),t._v(" "),o("a",{staticClass:"fc-black-400 h:fc-black-200 py2 d-block",attrs:{href:"https://stackoverflow.com/legal/terms-of-service"}},[t._v("\n            Terms of Service\n          ")]),t._v(" "),o("span",{staticClass:"fc-black-400 h:fc-black-200 py2 d-block c-pointer",attrs:{onclick:"OneTrust.ToggleInfoDisplay()"}},[t._v("\n            Cookie Settings\n          ")]),t._v(" "),o("a",{staticClass:"fc-black-400 h:fc-black-200 py2 d-block",attrs:{href:"https://stackoverflow.com/legal/cookie-policy"}},[t._v("\n            Cookie Policy\n          ")])]),t._v(" "),o("div",{staticClass:"flex--item6"},[o("h3",{staticClass:"tt-uppercase fs-body2 fc-black-200"},[t._v("Channels")]),t._v(" "),o("a",{staticClass:"fc-black-400 h:fc-black-200 py2 d-block",attrs:{href:"https://stackoverflow.blog/"}},[t._v(" Blog ")]),t._v(" "),o("a",{staticClass:"fc-black-400 h:fc-black-200 py2 d-block",attrs:{href:"https://stackoverflow.blog/podcast"}},[t._v("\n            Podcast\n          ")]),t._v(" "),o("a",{staticClass:"fc-black-400 h:fc-black-200 py2 d-block",attrs:{href:"https://stackoverflow.blog/newsletter"}},[t._v("\n            Newsletter\n          ")]),t._v(" "),o("a",{staticClass:"fc-black-400 h:fc-black-200 py2 d-block",attrs:{href:"https://twitter.com/stackoverflow"}},[t._v("Twitter")]),t._v(" "),o("a",{staticClass:"fc-black-400 h:fc-black-200 py2 d-block",attrs:{href:"https://linkedin.com/company/stack-overflow"}},[t._v("\n            LinkedIn\n          ")]),t._v(" "),o("a",{staticClass:"fc-black-400 h:fc-black-200 py2 d-block",attrs:{href:"https://www.instagram.com/thestackoverflow/"}},[t._v("\n            Instagram\n          ")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:o(85).default})}},[[231,620,1,662]]]);