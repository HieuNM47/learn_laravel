(window.webpackJsonp=window.webpackJsonp||[]).push([[646,342,585,619],{1036:function(t,e,l){"use strict";l.r(e);l(27),l(25),l(31),l(12),l(40),l(28),l(41);var r=l(15);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,l)}return e}var n={layout:"teams",data:function(){return{headerClass:"p-ff-roboto-slab p-fc-purple d:fc-black-900 fs-title mb24 sm:mb8 mx-auto",paragraphClass:"fs-body3 fc-black-750 mb0 wmx4 mx-auto",gridClass:"d-flex flex__allitems6 flex__fl-grow1 ai-center ps-relative py64 lg:fd-column sm:pt24 sm:pb24 mx-auto wmx11"}},head:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},this.$metaTags({title:"GitHub Integration for Stack Overflow for Teams",description:"Stack Overflow for Teams offers a GitHub integration that allows you to access additional context to the code to overcome roadblocks faster."}))}},c=n,d=l(9),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("NavigationTeams"),t._v(" "),l("TeamsIntegrationsHeader",{attrs:{name:"GitHub",headline:"Streamline your workflows with our GitHub integration",intro:"Enable mission-critical teams to access additional context to the code to overcome roadblocks faster.",screenshot:"/img/product/teams/integrations/github.svg",cta:"Contact sales","install-url":"/explore-teams",icon:"IconGitHub"}}),t._v(" "),l("div",{staticClass:"p-wrapper mx-auto pt64 pb16 bg-white ta-center"},[l("div",{class:t.gridClass},[l("div",{staticClass:"flex--item wmx6 order-first sm:mb32"},[l("h2",{class:t.headerClass},[t._v(" Level-up discovery mode ")]),t._v(" "),l("p",{class:t.paragraphClass},[t._v("\n          To build great products, you need great discovery. Sometimes that means looking at old code or projects\n          that never made it out the door to learn and evolve. Being able to find answers to questions on\n          specific PRs, Gists and Commits, you’ll spend less time digging and more time building.\n        ")])]),t._v(" "),l("div",{staticClass:"flex--item wmx6 sm:mb32"},[l("h2",{class:t.headerClass},[t._v(" Ensure key learnings are discoverable ")]),t._v(" "),l("p",{class:t.paragraphClass},[t._v("\n          Post-mortems are inevitable and the best way to ensure that history doesn’t repeat itself is to make\n          the information discoverable. By sharing key learnings with reference to specific code and projects in\n          GitHub, your teams (even in years to come) can avoid the same mistakes.\n        ")])])]),t._v(" "),l("img",{staticClass:"wmx100 w50 h-auto sm:w100",attrs:{src:"/img/product/teams/integrations/github-screenshot1.png",alt:""}}),t._v(" "),l("div",{staticClass:"bar-lg p-bg-blue-pastel d:p-bg-dark-tint mt64 mxn48 sm:ml0 sm:mr0 py96 sm:pl16 sm:pr16 sm:bg-white ta-center"},[l("h2",{staticClass:"fs-headline2 p-ff-roboto-slab p-fc-purple d:fc-black-900 mb16"},[t._v("Talk to one of our experts to learn more")]),t._v(" "),l("p",{staticClass:"fs-subheading fc-black-600 mb24 wmx7 mx-auto"},[t._v("Available with our Business and Enterprise plans.")]),t._v(" "),l("StackLink",{staticClass:"px32 s-btn fs-body2 bar-md p-bg-yellow h:p-bg-yellow-tint fc-black-900 d:fc-white p-ff-source-bold",attrs:{loc:"TeamsCreateEnterprise","append-provenance-cookie":!1}})],1)])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NavigationTeams:l(329).default,TeamsIntegrationsHeader:l(348).default,StackLink:l(227).default})},326:function(t,e,l){var content=l(328);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(106).default)("5f91cbe1",content,!0,{sourceMap:!1})},327:function(t,e,l){"use strict";l(326)},328:function(t,e,l){var r=l(105)(!1);r.push([t.i,".s-navigation--item.is-selected[data-v-d5b48f30]{background-color:#2b2d6e!important;color:var(--white)!important}",""]),t.exports=r},329:function(t,e,l){"use strict";l.r(e);var r=l(172),o={directives:{clickOutside:l.n(r).a.directive},data:function(){return{navWhy:!1,navResources:!1}},methods:{closeNavWhy:function(){this.navWhy=!1},closeNavResources:function(){this.navResources=!1}}},n=(l(327),l(9)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"ps-sticky sm:ps-static d-flex p-wrapper bbr-lg py16 fl1 sm:fd-column flex__fl-grow1 bg-white fs-body2 mx-auto"},[l("nav",{staticClass:"s-navigation s-navigation__muted mln16 p-nav-teams ai-center"},[l("NuxtLink",{staticClass:"s-navigation--item",class:["teams"===t.$route.name&&"is-selected"],attrs:{to:"/teams"}},[t._v("\n      Overview\n    ")]),t._v(" "),l("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeNavWhy,expression:"closeNavWhy"}],staticClass:"ps-relative"},[l("button",{staticClass:"s-navigation--item s-navigation--item__dropdown",class:{"is-selected":t.navWhy},attrs:{"aria-controls":[t.navWhy&&"popover-product-nav"]},on:{click:function(e){t.navWhy=!t.navWhy}}},[t._v("\n        Why Stack Overflow\n      ")]),t._v(" "),t.navWhy?l("div",{staticClass:"s-popover t100 l50 mt12 ws2 p0 pt12 fs-body2 is-visible",style:{marginLeft:"-105px"},attrs:{id:"popover-product-nav",role:"menu","aria-hidden":"false"}},[l("div",{staticClass:"s-popover--arrow s-popover--arrow__tc"}),t._v(" "),l("ol",{staticClass:"ta-left list-reset s-anchors s-anchors__inherit"},[l("li",[l("NuxtLink",{staticClass:"d-block pb6 px16 lh-lg h:fc-orange-400",attrs:{to:"/teams/tour"}},[l("span",{staticClass:"d-block"},[t._v("Take a tour")])])],1),t._v(" "),l("li",[l("NuxtLink",{staticClass:"d-block pb6 px16 lh-lg h:fc-orange-400 ps-relative",attrs:{to:"/teams/articles"}},[l("span",{staticClass:"d-block"},[t._v("Articles")])])],1),t._v(" "),l("li",[l("NuxtLink",{staticClass:"d-block pb6 px16 lh-lg h:fc-orange-400 ps-relative",attrs:{to:"/teams/content-health"}},[l("span",{staticClass:"d-block"},[t._v("Content Health")]),t._v(" "),l("span",{staticClass:"p-ff-source-bold ps-absolute r16 t2 bg-orange-500 fc-white fs-caption px4 bar-sm"},[t._v("\n                NEW\n              ")])])],1),t._v(" "),l("li",[l("NuxtLink",{staticClass:"d-block pb6 px16 lh-lg h:fc-orange-400",attrs:{to:"/teams/integrations"}},[t._v("\n              Integrations\n            ")])],1),t._v(" "),l("li",[l("NuxtLink",{staticClass:"d-block pb6 px16 lh-lg h:fc-orange-400",attrs:{to:"/teams/security"}},[l("span",{staticClass:"d-block"},[t._v("Security")])])],1),t._v(" "),l("li",[l("NuxtLink",{staticClass:"d-block pb6 px16 lh-lg h:fc-orange-400",attrs:{to:"/teams/customer-success"}},[l("span",{staticClass:"d-block"},[t._v("Customer Success")])])],1),t._v(" "),l("li",{staticClass:"bt bc-black-050 mt8"},[l("NuxtLink",{staticClass:"d-block py8 px16 lh-lg h:fc-orange-400",attrs:{to:"/teams/features"}},[t._v("\n              All features\n            ")])],1)])]):t._e()]),t._v(" "),l("NuxtLink",{staticClass:"s-navigation--item",class:["teams-pricing"===t.$route.name&&"is-selected"],attrs:{to:"/teams/pricing"}},[t._v("\n      Pricing\n    ")]),t._v(" "),l("StackLink",{staticClass:"s-navigation--item d-none md:d-block",attrs:{loc:"TeamsCreateEnterprise","append-provenance-cookie":!1}},[t._v("Enterprise")]),t._v(" "),l("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeNavResources,expression:"closeNavResources"}],staticClass:"ps-relative"},[l("button",{staticClass:"s-navigation--item s-navigation--item__dropdown",class:{"is-selected":t.navResources},attrs:{"aria-controls":[t.navResources&&"popover-resource-nav"]},on:{click:function(e){t.navResources=!t.navResources}}},[t._v("\n        Resources\n      ")]),t._v(" "),t.navResources?l("div",{staticClass:"s-popover t100 l50 mt12 ws2 p0 pt12 fs-body2 is-visible",style:{marginLeft:"-105px"},attrs:{id:"popover-resource-nav",role:"menu","aria-hidden":"false"}},[l("div",{staticClass:"s-popover--arrow s-popover--arrow__tc"}),t._v(" "),l("ol",{staticClass:"ta-left list-reset s-anchors s-anchors__inherit"},[l("li",[l("NuxtLink",{staticClass:"d-block pb6 px16 lh-lg h:fc-orange-400",attrs:{to:"/teams/customers"}},[l("span",{staticClass:"d-block"},[t._v("Case studies")])])],1),t._v(" "),l("li",[l("NuxtLink",{staticClass:"d-block pb6 px16 lh-lg h:fc-orange-400",attrs:{to:"/teams/use-cases"}},[l("span",{staticClass:"d-block"},[t._v("Use cases")])])],1),t._v(" "),t._m(0),t._v(" "),l("li",{staticClass:"px16 pt16 my8 bt bc-black-050 fc-black-300 lh-md"},[t._v(" Calculators ")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4)])]):t._e()])],1),t._v(" "),"teams-enterprise"!==t.$route.name?l("div",{staticClass:"ml-auto as-center ta-right d-block sm:w100 md:d-none bg-white bar-lg p4 mtn4 mrn8"},[l("div",{staticClass:"d-inline pl16 d-inline-block ws-nowrap"},[t._v("\n      Built for large organizations\n      "),l("StackLink",{staticClass:"ml8 ta-center py6 px12 bar-md d-inline-block fc-black-900 p-ff-source-bold p-bg-yellow d:p-bg-purple-alt h:p-bg-yellow-tint d:fc-black-900 ws-nowrap sm:d-block sm:mt16",attrs:{loc:"TeamsCreateEnterprise","append-provenance-cookie":!1}},[t._v("\n        Learn more\n      ")])],1)]):t._e()])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("li",[l("a",{staticClass:"d-block pb6 px16 lh-lg h:fc-orange-400",attrs:{href:"https://stackoverflow.help/en/"}},[l("span",{staticClass:"d-block"},[t._v("Help center")])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("li",[l("a",{staticClass:"d-block pb6 px16 lh-lg h:fc-orange-400",attrs:{href:"https://stackoverflowsolutions.com/speed-to-market"}},[l("span",{staticClass:"d-block"},[t._v("Speed to market")])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("li",[l("a",{staticClass:"d-block pb6 px16 lh-lg h:fc-orange-400",attrs:{href:"https://stackoverflowsolutions.com/attract-and-retain-talent"}},[l("span",{staticClass:"d-block"},[t._v("Attract & retain talent")])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("li",[l("a",{staticClass:"d-block pb6 px16 lh-lg h:fc-orange-400",attrs:{href:"https://stackoverflowsolutions.com/reduce-support-tickets"}},[l("span",{staticClass:"d-block"},[t._v("Reduce support tickets")])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("li",{staticClass:"bt bc-black-050 mt8 pt4"},[l("a",{staticClass:"d-block py8 px16 lh-lg h:fc-orange-400",attrs:{href:"https://stackoverflowsolutions.com/teams"}},[t._v("\n              Resource center\n              "),l("span",{staticClass:"fc-black-300 d-block lh-md pb6 pt2"},[t._v(" Take-aways, How-tos, videos and more. ")])])])}],!1,null,"d5b48f30",null);e.default=component.exports;installComponents(component,{StackLink:l(227).default})},331:function(t,e,l){"use strict";l.r(e);var r={props:{video:{type:String,required:!0},width:{type:String,default:null},height:{type:String,default:null},linkClass:{type:String,default:null}},data:function(){return{modalOpen:!1,videos:{CareersMuse:"eOZzhzvBVII",CollectivesBusiness:"j-Zk1CKkCY0",Teams:"HJtJXMKpl2g",Advertising:"6XtwS2Ju76Y",TeamsContentHealth:"sUrL1mbZZJ8",Grandcentrix:"8sRjd0F1iPg",Microsoft:"mhh0aK6yJgA",Expensify:"mFqhoOC9nvg",MicrosoftTeams:"d1pxOA-DBJ8",TeamsVsPublic:"qL-ry_tz6V0"}}}},o=l(9),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"d-inline"},[l("a",{class:t.linkClass,attrs:{href:"https://www.youtube.com/watch?v="+t.videos[t.video]},on:{click:function(e){e.preventDefault(),t.modalOpen=!t.modalOpen}}},[t._t("default")],2),t._v(" "),t.modalOpen?l("aside",{staticClass:"s-modal",attrs:{"aria-hidden":"false",tabindex:"-1",role:"dialog","aria-labelledby":"modal-title","aria-describedby":"modal-description"},on:{click:function(e){e.stopPropagation(),t.modalOpen=!1}}},[l("div",{staticClass:"s-modal--dialog p0 wmx10 w90 overflow-visible bg-transparent",attrs:{role:"document"}},[l("div",{staticClass:"p-player ps-relative w100 h0 bar-lg overflow-hidden"},[l("iframe",{staticClass:"w100 h100 t0 r0 l0 b0 ps-absolute",attrs:{src:"https://www.youtube-nocookie.com/embed/"+t.videos[t.video]+"?modestbranding=1&autoplay=1&rel=0",frameborder:"0",allow:"accelerometer; encrypted-media; gyroscope; picture-in-picture; autoplay",allowfullscreen:""}})]),t._v(" "),l("div",{staticClass:"s-modal--close s-btn bg-orange-400 h:bg-orange-500 fc-white ps-absolute tn48 rn48 sm:mr48 bar-circle",attrs:{"aria-label":"Close"},on:{click:function(e){t.modalOpen=!1}}},[l("IconClearSm")],1)])]):t._e()])}),[],!1,null,null,null);e.default=component.exports},348:function(t,e,l){"use strict";l.r(e);var r={props:{name:{type:String,default:"",required:!0},headline:{type:String,default:"",required:!0},intro:{type:String,default:"",required:!0},installUrl:{type:String,default:"",required:!1},screenshot:{type:String,default:"",required:!0},cta:{type:String,default:"",required:!0},icon:{type:String,default:"",required:!0},iconImage:{type:String,default:"",required:!1},video:{type:String,default:"",required:!1},heroFrame:{type:Boolean,default:!0,required:!1}}},o=l(9),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"p-wrapper mx-auto pb48 bg-white bb bc-black-050"},[l("div",{staticClass:"mx-auto wmx11 pt128 pb96 ta-left bg-powder-025 bar-lg"},[l("div",{staticClass:"d-flex md:fd-column"},[l("div",{staticClass:"flex--item6 md:mb64"},[l(t.icon,{tag:"component",staticClass:"va-middle native w48 h48",attrs:{viewBox:"0,0,18,18"}}),t._v(" "),t.iconImage?l("img",{staticClass:"va-middle native w48 h48",attrs:{src:t.iconImage}}):t._e(),t._v(" "),l("IconPlus",{staticClass:"va-middle mx8"}),t._v(" "),l("IconLogoGlyphMd",{staticClass:"va-middle native w48 h48"}),t._v(" "),l("h1",{staticClass:"mt24 p-ff-roboto-slab fs-headline2 mb24 sm:d-inline-block wmx5"},[t._v("\n          "+t._s(t.headline)+"\n        ")]),t._v(" "),l("p",{staticClass:"sm:wmx100 fs-body3 lh-md fc-black-600 mb32 wmx4"},[t._v("\n          "+t._s(t.intro)+"\n        ")]),t._v(" "),l("a",{staticClass:"fs-body2 s-btn p-bg-purple d:bg-black-500 fc-white lg:mt32 py12 mx-auto px32 ta-center bar-md p-ff-source-bold h:p-bg-purple-tint",attrs:{href:t.installUrl}},[t._v("\n          "+t._s(t.cta)+"\n        ")])],1),t._v(" "),l("div",{staticClass:"flex--item6 ta-center"},[t.video?l("YoutubePlayer",{attrs:{video:t.video,"link-class":"overflow-hidden d-block bar-lg bs-sm h:bs-lg ps-relative"}},[l("img",{staticClass:"d-block wmx100 hauto",attrs:{src:"/img/product/videos/d1pxOA-DBJ8.jpg",alt:"Video thumbnail"}}),t._v(" "),l("span",{staticClass:"pe-none bs-sm s-btn s-btn__icon ps-absolute b32 l32 p-bg-purple fc-white d:fc-black p-ff-source-bold"},[l("IconPlay"),t._v("\n            Play video\n          ")],1)]):t.heroFrame?l("div",{staticClass:"ps-relative ta-left sm:ta-center sm:pb48 mx64 sm:ml0 sm:mr0 mb32",staticStyle:{background:"url(/img/product/teams/integrations/spark.svg) no-repeat 8% 80%"}},[l("img",{staticClass:"wmx100 w50 h-auto bs-md overflow-hidden bar-lg ps-relative z-base mb128",attrs:{src:"/img/product/teams/integrations/base.svg",alt:""}}),t._v(" "),l("img",{staticClass:"wmx100 w70 md:w90 sm:w100 h-auto bs-md overflow-hidden bar-lg ps-absolute b0 r0 z-active",attrs:{src:t.screenshot,alt:"Illustration of the "+t.name+" integration"}})]):l("div",{staticClass:"ps-relative ta-center sm:ta-center sm:pb48 mb32"},[l("img",{staticClass:"wmx100",attrs:{src:"/img/product/teams/slack-integration/slack-hero.png",alt:t.name+" integration screenshot"}})])],1)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{YoutubePlayer:l(331).default})}}]);