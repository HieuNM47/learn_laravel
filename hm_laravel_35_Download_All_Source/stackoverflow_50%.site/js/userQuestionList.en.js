(()=>{var e,t,a,n,r={1539:()=>{StackExchange=window.StackExchange=window.StackExchange||{},StackOverflow=window.StackOverflow=window.StackOverflow||{},window.initTagRenderer=function(e,t,a){window.tagRenderer||(a=a||{tags:[],id:""},window.tagRendererRaw=function(n,r,s,i){r=r||"",s=s||"a";var o="",c=i?"s-tag":"post-tag",l=StackExchange.helpers.encodeHexHtmlEntities(n);r||(e&&$.inArray(l,e)>-1?o=i?"s-tag__required":"required-tag":t&&$.inArray(l,t)>-1&&(o=i?"s-tag__moderator":"moderator-tag"));var d=$("<"+s+">").addClass(c).addClass(o).addClass($.inArray(n,a.tags)>-1?"site"+a.id+" themed channel"+a.id+"-tag":"").text(n);return"a"===s.toLowerCase()&&d.attr({rel:"tag",href:r+"/questions/tagged/"+encodeURIComponent(n),title:__tr(["show questions tagged '$tag$'"], {tag: n}, "en", [])}),d.outerHTML()},window.tagRenderer=function(e,t,a,n){return $(tagRendererRaw(e,t,a,n))},window.tagRenderer.requiredTags=e,window.tagRenderer.moderatorOnlyTags=t,window.tagRenderer.channelOptions=a)}},75556:()=>{StackExchange=window.StackExchange=window.StackExchange||{},StackOverflow=window.StackOverflow=window.StackOverflow||{},StackExchange.stacksValidation=function(){function e(e){this.hideIcons=!1,this.$input=e,this.$container=e.closest(".js-stacks-validation"),this.$container.length?(this.$message=this.$container.find(".js-stacks-validation-message"),this.messages=[]):this.invalid=!0}function t(e){return e.html}function a(e){return e.type}e.prototype={_updateMessages:function(){var e;(this.$message.empty().toggleClass("d-none",!this.messages.length),this.messages.length)&&(e=1===this.messages.length?this.messages[0].html:"<ul><li>"+this.messages.map(t).join("</li><li class='mt8'>")+"</li></ul>",this.$message.html(e).find("a").attr("target","_blank"))},_updateIcon:function(){if(this.$container.find(".js-stacks-validation-icon").remove(),this.messages.length&&!this.hideIcons){var e=this.highestType();Svg[n[e]].With("s-input-icon js-stacks-validation-icon").insertAfter(this.$input)}},_updateClass:function(){this.$container.removeClass("has-error has-warning has-success"),this.messages.length&&this.$container.addClass("has-"+this.highestType())},_update:function(){this._updateMessages(),this._updateIcon(),this._updateClass()},highestType:function(){return this.messages.map(a).reduce((function(e,t){return"error"===e||"error"===t?"error":"warning"===e||"warning"===t?"warning":"success"}))},hasType:function(e){return this.messages.some((function(t){return t.type===e}))},add:function(e,t){this.messages.some((function(a){return a.type===e&&a.html===t}))||(this.messages.push({type:e,html:t}),this._update())},addText:function(e,t){this.add(e,$("<span>").text(t).html())},clear:function(e){this.messages=e?this.messages.filter((function(t){return t.type!==e})):[],this._update()}};var n={error:"AlertCircle",warning:"Alert",success:"Checkmark"};return{handlerFor:function(t){var a=t.data("stacks-validation-handler");return a||(a=new e(t),t.data("stacks-validation-handler",a)),a.invalid?null:a}}}()},10597:()=>{function e(e,t={}){function a(){t.initialFocus=!0}if(void 0===t.initialFocus&&(t.initialFocus=e.is(":focus")),!e.is(":visible")){var n=t.__tryNumber||0,r=$("body").is(":visible");return n<3?(t.__tryNumber=n+(r?1:0),e.bind("focus",a),void setTimeout((function(){e.unbind("focus",a),StackExchange.tagEditor(e,t)}),300)):void($("body.review-task-page").length||StackExchange.debug.log("tag box is invisible, couldn't start tag editor"))}var s=!!t.initialFocus,i=t.columns||3,o=void 0===t.excerpts||t.excerpts,c=void 0===t.learnMore||t.learnMore,l=e.attr("placeholder")||"",d=function(e){return window.tagRenderer(e,null,"span",!!t.useStacksClasses)},u=t.customFilterTags||function(e,a){var n={};return e.map((function(e){return!/^\s*$/.test(e)&&(!0!==n[e]&&(t.operators&&t.operators.test(e)||(n[e]=!0),!0))}))},g=t.customExistingTags||function(e,t){return e},f=t.customSafeTags||function(e){var a=StackExchange.helpers.sanitizeAndSplitTags(e,!1,!!t.operators,t.allowUpperCaseTagNames)||[];return e&&$.trim(e)&&function(e){if(!StackExchange.options.enableLogging)return;console.log("tag editor new: "+e),"string"!=typeof e&&console.log(e)}('safeTags("{0}") => {1}'.formatUnicorn(e,a.toString())),a},p=t.sanitizeSearchTerm||function(e){return f(e)[0]},h=$(),v=e.innerWidth(),m=$("<div class='js-tag-editor tag-editor multi-line' />").insertAfter(e);m.data("target-field",e.get(0)),t.extraTagEditorCssClass&&m.addClass(t.extraTagEditorCssClass),["padding-right","padding-left","box-sizing","margin-top","margin-bottom"].forEach((function(t){m.css(t,e.css(t))}));var b="border-box"===e.css("box-sizing");b&&(v+=parseInt(m.css("border-right-width"),10)+parseInt(m.css("border-left-width"),10));var k=t.suggestionsWidth||v,x=(k-12)/i|0,S=t.responsiveIsh&&x<150;m.css("width",v);var y=e.css("display");e.hide();var w=getComputedStyle(e[0]).width,j=/%$/.test(w);j&&m.css("width",w),"inline"===y&&m.css("display","inline-block");var T="selectionDirection"in e[0],E=d("test").appendTo(m),C=b?m.outerHeight():m.innerHeight(),A=e.innerHeight();E.remove(),b&&(A+=parseInt(m.css("border-top-width"),10)+parseInt(m.css("border-bottom-width"),10));var _=$("<span />").appendTo(m),P=$("<input type='text' autocomplete='off' tabIndex='0'/>").appendTo(m).val(e.val()+" ").attr("placeholder",l),I=$("<span />").appendTo(m),z=e.attr("tabIndex"),O=e.attr("id");if(O){var q=$("label[for='"+O+"']");if(q.length){var M="tageditor-replacing-"+O+"--input";P.attr("id",M),q.attr("for",M)}}z&&P.attr("tabIndex",z),e.hasClass("s-input")&&(m.addClass("s-input").css({paddingTop:0,paddingBottom:0}),P.addClass("s-input")),P.addClass("js-tageditor-replacing");var D,R=!1;function N(){if(!t.ignoreRequired){var e=StackExchange.tagEditor.requiredTags;if(e&&e.length&&/^ ?$/.test(P.val())){var a=function(){if(void 0===D){for(var e=StackExchange.tagEditor.requiredTags,t=[],a=0;a<e.length;a++)t.push(J(e[a]).replace(/[.+]/g,"\\$&"));D=new RegExp("^(?:"+t.join("|")+")$")}return D}();0===_.add(I).children().filter((function(){return a.test($(this).text())})).length&&ye(e,"")}}}function B(){return t.showAllWhenEmptyAndFocused&&W()}var F=s;P.focus((function(t,a=!1){s=!0,N(),F||(a||e.triggerHandler("focus",!0),F=!0),B()&&ve(!0)}));var H=!1;function U(e,a=!1){var n=d(e);if(t.tagMenus&&n.data("tag-menu-tagname",e),!a){if(n.hasClass("s-tag")){var r=$("<a>",{class:"js-delete-tag s-tag--dismiss",title:t.tooltipDeleteTag||__tr(["Remove tag"], undefined, "en", [])});r.append($("<svg class='svg-icon iconClearSm pe-none' width='14' height='14' viewBox='0 0 14 14'><path d='M12 3.41L10.59 2 7 5.59 3.41 2 2 3.41 5.59 7 2 10.59 3.41 12 7 8.41 10.59 12 12 10.59 8.41 7z'></path></svg>")),n.append(r)}else n.append($("<span>",{class:"js-delete-tag delete-tag",title:t.tooltipDeleteTag||__tr(["Remove tag"], undefined, "en", [])}));m.trigger("tagSpanCreated",[n])}return t.tagSpanCreated&&t.tagSpanCreated(n),n}function Q(e){var t=$([]),a=$([]);switch(e){case V.all:t=_.find(".rendered-element"),a=I.find(".rendered-element");break;case V.left:t=_.find(".rendered-element:last");break;case V.right:a=I.find(".rendered-element:first");break;case V.all_left:t=_.find(".rendered-element");break;case V.all_right:a=I.find(".rendered-element")}return{pre:t,post:a}}function K(e=V.all){var t=Q(e),a=t.pre.map((function(e,t){return $(t).text()})).get(),n=a.join(" ");n.length&&(n+=" ");var r=t.post.map((function(e,t){return $(t).text()})).get(),s=r.join(" ");s.length&&P.val().length&&(s=" "+s);var i=P.val();return a=a.concat(r),{text:n+P.val()+s,lengthBeforeInput:n.length,val:i,tags:a}}function L(t){const a=null!=t?t:K();setTimeout((function(){e.trigger("tageditor:renderedchange",[a.tags,a.val])})),le(),function(){if(ae)return void(ae=!1);var e=m.find(".rendered-element").toArray().map((function(e){return $(e).text()}));if(0===te.length)return;e&&e.length>0?se.trigger(e,ie):ie()}()}function W(){var e=P.val();return(""===e||" "===e)&&0===_.add(I).children().filter((function(){return!/^\s*$/.test($(this).text())})).length}function J(e){var a;return t.getTagNameFromData?t.getTagNameFromData(e):null!==(a=e.Name)&&void 0!==a?a:""}let V;function G(e=V.all){var t=P.caret(),a=P[0].selectionDirection,n=Q(e);if(n.pre.add(n.post).length){var r=K(e);P.val(r.text),n.pre.remove(),n.post.remove(),P.caret(t.start+r.lengthBeforeInput,t.end+r.lengthBeforeInput),T&&(P[0].selectionDirection=a),Ee(),L()}}function Z(e){if(t.operators&&t.operators.test(e))return $("<span class='rendered-element'/>").text(e);var a=U(e).addClass("rendered-element");return function(e){return(!t.invalid||!t.invalid[e])&&!(t.isTagValid&&!t.isTagValid(e))}(e)||a.addClass("invalid-tag temp-tag__danger").attr("title",t.tooltipInvalidTag||__tr(["invalid tag"], undefined, "en", [])),a}function X(a){if(R)return;var n;if(-1==(n=a?{start:P.val().length,end:P.val().length}:P.caret()).start&&(n.start=n.end=0),!T&&n.start!==n.end)return G(),void le();var r=P.val(),i=r.substr(0,n.start),o=r.substr(n.end),c=P[0].selectionDirection,d=t.allowSpaces?/[,;]+/:/[,;\s]+/,g="function"==typeof t.customCleanUpSplit?t.customCleanUpSplit:function(e){return e.split(d)},p=g(i+"!");"!"===(p=(i+"!").split(d))[p.length-1]?p[p.length-1]="":p[p.length-1]=p[p.length-1].slice(0,-1);var h=g(o),v=p.pop(),b=v.length;v+=r.substring(n.start,n.end),v+=h.shift(),p=f(p.join(" ")),h=f(h.join(" "));var k,x=!!p.length||!!h.length;for(k=0;k<p.length;k++)Z(p[k]).appendTo(_);for(k=0;k<h.length;k++)Z(h[k]).appendTo(I);v!==P.val()&&P.val(v);var S=m.find(".rendered-element");const y=S.map((function(e,t){return $(t).text()})).get();var w=u(y,_.find(".rendered-element").length);k=0,S.filter((function(){return!w[k++]})).remove();var j=K(),E=$.trim(j.text);if(E!=e.val()){e.val(E).trigger("change");!!StackExchange.MarkdownEditor&&!t.ignoreStyleCode&&styleCode.updateLangdivDelayed.trigger(E.split(/ /g))}x&&L(j),s&&(P.caret(b,b+n.end-n.start),T&&(P[0].selectionDirection=c),ve(),N()),le(),W()?P.attr("placeholder")!==l&&P.attr("placeholder",l):""!==P.attr("placeholder")&&P.attr("placeholder","")}function Y(e,t){if(!Array.isArray(e)||!Array.isArray(t)||e.length!==t.length)return!1;const a=e.concat().sort(),n=t.concat().sort();for(var r=0;r<a.length;r++)if(a[r]!==n[r])return!1;return!0}m.mousedown((function(){H=!0,$(document).one("mouseup",(function(){setTimeout((function(){s||(e.triggerHandler("blur"),F=!1),H=!1}),0)}))})),P.blur((function(t){s=!1,setTimeout((function(){R||(Ee(),X(),H||(e.triggerHandler("blur"),F=!1)),H=!1}),0)})),e.focus((function(e,t){t||P.trigger("focus",!0)})),P.on({keydown:function(e){if(!T&&e.shiftKey&&ge[e.which]||e.ctrlKey&&65===e.which)return G(),!0;var a,n,r=P.caret(),s="forward"===P[0].selectionDirection?r.end:r.start,i=s===P.val().length,o=0===s;switch(e.which){case 37:return!o||(!(a=_.find(".rendered-element:last")).length||(e.shiftKey?G(V.left):oe(a),e.shiftKey));case 39:return!i||(!(n=I.find(".rendered-element:first")).length||(e.shiftKey?G(V.right):oe(n,!0),e.shiftKey));case 8:return!o||(!(a=_.find(".rendered-element:last")).length||(P.val(a.text()+P.val()),P.caret(a.text().length,a.text().length),a.remove(),L(),!1));case 46:return!i||(!(n=I.find(".rendered-element:first")).length||(P.val(P.val()+n.text()),P.caret(s,s),n.remove(),L(),!1));case 38:if(de(-1,e.shiftKey))return!1;case 36:return!(a=_.find(".rendered-element:first")).length||(e.shiftKey?G(V.all_left):oe(a,!0),e.shiftKey);case 40:var c=h.children("div:first");if(c.length)return pe(),c.focus(),!1;if(de(1,e.shiftKey))return!1;case 35:return!(n=I.find(".rendered-element:last")).length||(e.shiftKey?G(V.all_right):oe(n),e.shiftKey);case 9:pe(),t.renderErrorTagIfNoResults&&!he()&&function(){var e=f(P.val())[0];if(!e)return;Te($("<span data-tag-name='"+e+"'/>"))}();break;case 13:if(he())return!1;break;case 32:if(t.allowSpaces)return!0;if(!1===t.spaceSelectsTopSuggestion)return!1;if(t.spaceSelectsTopSuggestion&&he())return Te(h.children("div:first")),!1}return!0},keyup:function(e){if(27===e.which&&h.length>0)return Ee(),e.preventDefault(),e.stopPropagation(),!1;return!0},input:function(){setTimeout(X,0)}}),m.delegate(".rendered-element","click",(function(e){var t=$(this);$(e.target).hasClass("js-delete-tag")&&t.text(""),oe(t),X()})),m.click((function(e){e.target===this&&(oe(""),X())})),m.on("rerender",(function(){G(),X(!0)})),function(e){e[e.left=1]="left",e[e.right=2]="right",e[e.all_left=3]="all_left",e[e.all_right=4]="all_right",e[e.all=5]="all"}(V||(V={}));var ee,te=m.closest(".js-tag-editor-container").find(".js-community-icons"),ae=!te.is(":empty"),ne=[],re=[],se=StackExchange.helpers.DelayedReaction((function(e,t){Y(re,e)?t(ee):(re=e,StackExchange.helpers.addSpinner(m,{position:"absolute",right:10,top:A/2-2}),$.ajax({url:"/collectives/shared/get-communities-by-tags",data:{tags:e},traditional:!0}).done((function(e){ee=e,StackExchange.helpers.removeSpinner(),t(e)})))}),400,{sliding:!0});function ie(e){if(!e||!e.subCommunities||0===e.subCommunities.length)return ne=[],void te.empty();var t=e.subCommunities.map((function(e){return e.slug}));Y(ne,t)||(ne=t,te.html(e.fullHtml))}function oe(e,t=!1,a=!1,n=!1){var r,i;if("string"==typeof e)i=e;else{if(!e.length)return;i=(r=e).text()}for(var o=f(P.val()),c=0;c<o.length;c++)Z(o[c]).appendTo(_);if(P.val(i),r){var l=$($.unique(r.prevAll(".rendered-element").get()));r.nextAll(".rendered-element").prependTo(I),l.appendTo(_),r.remove()}else I.find(".rendered-element").appendTo(_);!s&&a||P.focus(),t&&P.caret(0,0),n||L()}var ce={};function le(){j&&(v=m.innerWidth());var e=function(e){var t="c_"+e.val();if(t in ce)return ce[t];var a=$("<span />").css({"font-family":e.css("font-family"),"font-size":e.css("font-size"),display:"inline-block"});a.text(e.val()),a.insertAfter(e);var n=a.innerWidth();return a.remove(),ce[t]=n,n}(P)+19;_.outerWidth();P.css("width",e);var t=P.position().top;t>0&&t+C<A||(t+m.scrollTop()+C<A?m.scrollTop(0):m.scrollTop(t-(A-C)/2+m.scrollTop()))}function de(e,t){var a;a=e>0?I.find("> *"):_.find("> *");for(var n,r,s=P.position(),i=P.val().length,o=i>0?P.caret().start/i:.5,c=s.left+P.width()*o,l=0;l<a.length;l++){var d=a.eq(e>0?l:a.length-l-1),u=d.position();if(void 0!==r){if(u.top!==r)break}else{if(!(Math.abs(u.top-s.top)>C/2))continue;r=u.top}var g=u.left+d.width()/2;if(e<0&&g<c||e>0&&g>c){n=n||d;break}n=d}if(n){if(t){for(;n.parent().length;)G(e>0?V.right:V.left);P.caret(0,P.val().length)}else oe(n);return!0}return!1}var ue,ge={35:!0,36:!0,37:!0,38:!0,39:!0,40:!0},fe=!1;function pe(){fe=!0,setTimeout((function(){fe=!1}),0)}function he(){return!!h.length&&!h.hasClass("no-results")}function ve(e=!1){var a,n,r,i=p(P.val())||"";(t.allowUpperCaseTagNames&&(i=i.toLocaleLowerCase()),ue!==i||e)&&(ue=i,i.length||B()?(n=function(e){i===ue&&s&&ye(e,i)},r=Se(a=i),!t.disableCaching&&be[r]?n(be[r]):ke.trigger(a,n)):Ee())}var me,be={},ke=StackExchange.helpers.DelayedReaction((function(e,a){StackExchange.helpers.addSpinner(m,{position:"absolute",right:10,top:A/2-2});var n=null;if(t.getDataPromise)n=t.getDataPromise(e);else{var r=xe(),s={q:e,newstyle:!0};n=$.get(r,s,void 0,"json")}n.done((function(t){be[Se(e)]=t,StackExchange.helpers.removeSpinner(),a(t)}))}),400,{sliding:!0});function xe(){return t.tagApiUrl||"/filter/tags"}function Se(e){return xe()+"|"+e}function ye(e,a){var n,r;h.remove(),R=!1;var s=m.height();const o=m.find(".rendered-element").map((function(e,t){return $(t).text()})).get();for(var c=g(o,_.find(".rendered-element").length),l=e.length-1;l>=0;l--)-1!==c.indexOf(J(e[l]))&&e.splice(l,1);var d=e.length;if(0===d)return h=$("<div class='tag-suggestions no-results box-border fs-cation fc-light c-default wmx100'>"+__tr(["No results found"], undefined, "en", [])+"</div>").css({position:"absolute",left:m.position().left,top:m.position().top+s+1+(null!==(n=t.suggestionsTopMargin)&&void 0!==n?n:0),width:k}).insertAfter(m),void(t.noResultsCallback&&t.noResultsCallback(h,a));h=$("<div class='tag-suggestions js-tag-suggestions box-border wmx100' />").css({position:"absolute",left:m.position().left,top:m.position().top+s+1+(null!==(r=t.suggestionsTopMargin)&&void 0!==r?r:0),width:k}).insertAfter(m),t.onCreatingTagSuggestions&&t.onCreatingTagSuggestions(c||[]);var u=t.suggestionTagBoxRenderer||we;for(l=0;l<e.length;l++){var f=u(e[l],a).attr("tabindex",z||0).addClass("js-tag-suggestion").appendTo(h);je(f),l%i!=0||S||f.css("clear","both")}h.on({keydown:Ce,keyup:Ae,click:function(e){$e(e)||(Te($(this)),e.stopPropagation())},focus:function(){fe&&1===d?Te($(this)):R=!0},blur:function(){R=!1}},".js-tag-suggestion")}function we(e,a){var n=J(e),r=$("<div class='f:bs-ring outline-none' />").css("width",S?"auto":x).data("tag-name",(e.Negated?"not ":"")+(e.SynonymOf||n)),s=$("<div class='d-flex ai-center' />"),i=$("<div class='flex--item mr6' />");r.append(s),s.append(i),a&&(a=a.replace(/-/g,"").replace(/\*+/g,"\t").replace(/([^\t])(?=[^\t])/g,"$1-*").replace(/\+/g,"\\+").replace(/\./g,"\\.").replace(/\t/g,".*"));var l=t.operators&&t.operators.test(n),d=l?$('<span class="px4 fs-caption">').text(n):U(n,!0),u=d.html();if(a&&(u=u.replace(new RegExp("("+a+")"),"<span class='match'>$1</span>")),S&&d.addClass("m0"),e.Negated&&s.prepend($('<div class="flex--item mr6 fs-caption">').text("not")),i.append(d.html(u)),!e.Count||S||l||s.append($("<div class='flex--item fs-fine truncate mr6' />").html(""+e.Count)),o&&!S&&!l){var g="";if(e.Excerpt&&(g=e.Excerpt),g.length&&r.append($("<p class='mt6 mb0 v-truncate4 lh-md' />").text(g)),e.Synonyms&&e.Synonyms.length)for(var f=$("<p >"+__tr(["also:"], undefined, "en", [])+"</p>").appendTo(r),p=e.Synonyms.split(/\|/),h=0;h<p.length;h++)g=p[h],a&&(g=g.replace(new RegExp("("+a+")"),"<span class='match'>$1</span>")),h>0&&(g=", "+g),f.append("<span>"+g+"</span>")}if(c&&!S&&!l){var v=e.InfoUrl;v||(v=(e.IsDiverged?StackExchange.options.site.routePrefix:"")+"/tags/"+encodeURIComponent(e.SynonymOf||n)+"/info"),$('<a class="ml-auto flex--item s-btn s-btn__muted p2 js-tag-info-btn" target="_blank" />').attr("href",v).append(Svg.HelpSm).appendTo(s)}return r}function je(e){var t=e.find("p.more-info");void 0===me&&(me=x-5-t.outerWidth()),e.find(".rendered-element:first").outerWidth()>me&&t.find("a").text(__tr(["info"], undefined, "en", []))}function Te(e){P.val(e.data("tag-name")),Ee(),oe(""),X()}function Ee(){h.remove(),h=$(),R=!1,ke.cancel()}function $e(e){return $(e.target).closest("a").length>0}function Ce(e){var a;switch(e.which){case 39:case 40:return $(this).next("div").focus(),!1;case 37:return $(this).prev("div").focus(),!1;case 38:return(a=$(this).prev("div")).length?a.focus():P.focus(),!1;case 13:if($e(e))break;return Te($(this)),!1;case 32:return t.spaceSelectsTopSuggestion&&Te($(this)),!1}}function Ae(e){return 27!==e.which||(Ee(),P.focus(),e.stopPropagation(),!1)}X(!0),StackExchange.tagEditor.ready.resolve();const _e=e[0];_e.func_clear=function(){e.val(""),P.val("").blur(),m.find(".rendered-element").remove()},_e.func_add=function(e){var t=P.val();P.val(e),oe(t,!1,!0),X()},_e.func_finish=function(){oe("")},_e.func_redraw=function(t){var a=e.val();e.val(""),P.val("").blur(),m.find(".rendered-element").remove(),P.val(a),oe("",!1,!0,!t),X()}}StackExchange=window.StackExchange=window.StackExchange||{},StackOverflow=window.StackOverflow=window.StackOverflow||{},e.ready=$.Deferred(),e.requiredTags=[],StackExchange.tagEditor=e},94650:(e,t,a)=>{var n={"./datepicker-af.js":[30480,4414,480],"./datepicker-ar-DZ.js":[88226,4414,8226],"./datepicker-ar.js":[37934,4414,7934],"./datepicker-az.js":[44876,4414,4876],"./datepicker-be.js":[69531,4414,9531],"./datepicker-bg.js":[32130,4414,2130],"./datepicker-bs.js":[3808,4414,3808],"./datepicker-ca.js":[58908,4414,8908],"./datepicker-cs.js":[31224,4414,1224],"./datepicker-cy-GB.js":[90016,4414,16],"./datepicker-da.js":[20487,4414,487],"./datepicker-de-AT.js":[19586,4414,9586],"./datepicker-de.js":[39018,4414,9018],"./datepicker-el.js":[58277,4414,3892],"./datepicker-en-AU.js":[15641,4414,5641],"./datepicker-en-GB.js":[64585,4414,4585],"./datepicker-en-NZ.js":[5623,4414,5623],"./datepicker-eo.js":[20463,4414,463],"./datepicker-es.js":[16227,4414,2298],"./datepicker-et.js":[67623,4414,7623],"./datepicker-eu.js":[40520,4414,520],"./datepicker-fa.js":[27618,4414,7618],"./datepicker-fi.js":[98444,4414,8444],"./datepicker-fo.js":[9383,4414,9383],"./datepicker-fr-CA.js":[82256,4414,2256],"./datepicker-fr-CH.js":[32909,4414,2909],"./datepicker-fr.js":[33283,4414,3283],"./datepicker-gl.js":[19036,4414,9036],"./datepicker-he.js":[35463,4414,5463],"./datepicker-hi.js":[42814,4414,2814],"./datepicker-hr.js":[9443,4414,9443],"./datepicker-hu.js":[77650,4414,7650],"./datepicker-hy.js":[77965,4414,7965],"./datepicker-id.js":[85832,4414,5832],"./datepicker-is.js":[46022,4414,6022],"./datepicker-it-CH.js":[95796,4414,5796],"./datepicker-it.js":[78457,4414,8161],"./datepicker-ja.js":[59970,4414,9970],"./datepicker-ka.js":[13172,4414,3172],"./datepicker-kk.js":[59807,4414,9807],"./datepicker-km.js":[10834,4414,834],"./datepicker-ko.js":[87171,4414,7171],"./datepicker-ky.js":[41391,4414,1391],"./datepicker-lb.js":[19724,4414,9724],"./datepicker-lt.js":[48457,4414,8457],"./datepicker-lv.js":[79681,4414,9681],"./datepicker-mk.js":[89348,4414,9348],"./datepicker-ml.js":[79989,4414,9989],"./datepicker-ms.js":[73726,4414,3726],"./datepicker-nb.js":[73391,4414,3391],"./datepicker-nl-BE.js":[50534,4414,534],"./datepicker-nl.js":[59930,4414,9930],"./datepicker-nn.js":[19796,4414,9796],"./datepicker-no.js":[89187,4414,9187],"./datepicker-pl.js":[49575,4414,9575],"./datepicker-pt-BR.js":[80013,4414,2579],"./datepicker-pt.js":[59021,4414,9021],"./datepicker-rm.js":[80337,4414,337],"./datepicker-ro.js":[66086,4414,6086],"./datepicker-ru.js":[51610,4414,1610],"./datepicker-sk.js":[78578,4414,8578],"./datepicker-sl.js":[20711,4414,13],"./datepicker-sq.js":[10424,4414,424],"./datepicker-sr-SR.js":[24743,4414,4743],"./datepicker-sr.js":[52223,4414,2223],"./datepicker-sv.js":[23717,4414,3717],"./datepicker-ta.js":[51367,4414,1367],"./datepicker-th.js":[94954,4414,4954],"./datepicker-tj.js":[46529,4414,6529],"./datepicker-tr.js":[47554,4414,7554],"./datepicker-uk.js":[8385,4414,8385],"./datepicker-vi.js":[57923,4414,7923],"./datepicker-zh-CN.js":[68837,4414,8837],"./datepicker-zh-HK.js":[3573,4414,3573],"./datepicker-zh-TW.js":[36225,4414,6225]};function r(e){if(!a.o(n,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],r=t[0];return Promise.all(t.slice(1).map(a.e)).then((()=>a.t(r,23)))}r.keys=()=>Object.keys(n),r.id=94650,e.exports=r},65311:e=>{"use strict";e.exports=jQuery}},s={};function i(e){var t=s[e];if(void 0!==t)return t.exports;var a=s[e]={exports:{}};return r[e](a,a.exports,i),a.exports}i.m=r,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(a,n){if(1&n&&(a=this(a)),8&n)return a;if("object"==typeof a&&a){if(4&n&&a.__esModule)return a;if(16&n&&"function"==typeof a.then)return a}var r=Object.create(null);i.r(r);var s={};e=e||[null,t({}),t([]),t(t)];for(var o=2&n&&a;"object"==typeof o&&!~e.indexOf(o);o=t(o))Object.getOwnPropertyNames(o).forEach((e=>s[e]=()=>a[e]));return s.default=()=>a,i.d(r,s),r},i.d=(e,t)=>{for(var a in t)i.o(t,a)&&!i.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,a)=>(i.f[a](e,t),t)),[])),i.u=e=>4414===e?"webpack-chunks/4414.en.js":"webpack-chunks/"+e+"."+{13:"96077458b12076e83cd4",16:"b3297ae7665a702f2b4c",337:"abbd9d6430876899fcd8",424:"a14d6e215d040f761085",463:"59459a787df5ac4c8093",480:"a53a99acf877a0631e01",487:"cf051d8e510f770301a9",520:"492a60f11ed50c227306",534:"13ef4c850de05a2a8635",834:"e49a49f433bee9194f95",1224:"d938ba210cb8564cb628",1367:"fd075c9ceba9bb77b379",1391:"8be1f3bbd8e3e1c28ccb",1610:"71d6b2377b105aa70b87",2130:"33e9c85812495ecd3772",2223:"4210e8346bd4b6f2f120",2256:"b99cb77ced40cb44fea6",2298:"7152dec87fc4b085308e",2579:"a0a5e76f5bc59fea1c74",2814:"83128b962530da991b85",2909:"3a4603499e3cf24cb03d",3172:"9bce4bea0378cff33e18",3283:"34635c14b5ed31254e54",3391:"22659542b9e0293cfd0c",3573:"837971ceef7aa3df46a8",3717:"e8568e1f52a6174e716d",3726:"a3888e93e14933a5162c",3808:"b4112ff924f20e60f69a",3892:"e897a374622b062049d8",4585:"45b0b0a5c6f6b651284f",4743:"493b146f8af6cda088e5",4876:"e2f9f488cf6e4dc9efd4",4954:"06ac76db5fed75e149fd",5463:"112cb011d84130ae87ee",5623:"1953e49861fa82bfb11a",5641:"4cac17c281f766662baa",5796:"343d73a79e8d264289ac",5832:"d8f30c9afa00b39414be",6022:"d8df7d32498de6d34a19",6086:"0192cb456c34c63ff8df",6225:"eacfa7b1b6f3b2a92887",6529:"ada467b7b53e42fb7cb3",7171:"0aa67ae4284ad675453b",7554:"25d339d958ee9e6928ff",7618:"e8627ae26af9901a1bce",7623:"cb7cb871cff80bd63fea",7650:"7fcb8c9d5812952de411",7923:"c56d2692f0fbf3bbf5af",7934:"88aa143897c55f6e609e",7965:"dfa3104f72043fad4058",8161:"633addcfddc25bcb8ec7",8226:"21ab1cf8474272583e77",8385:"bdf5fbb7fed0dc241667",8444:"d84951c110fa97d780dc",8457:"4b3f37f5929312552dc8",8578:"281c96d55c4f610069c1",8837:"2d359844ce416b7415eb",8908:"e73b25bb828c5ab1c222",9018:"25fcbe092061dedc1952",9021:"906880351c9ddfd16fef",9036:"466ab0d99db576b442d2",9187:"0d423a5c62f056721e29",9348:"a543287f1dd89dd468bf",9383:"841160172c806790a137",9443:"63e4eadcf4346b79e19c",9531:"9db32f5f046d26401615",9575:"42bbaf0ecb287c74d201",9586:"2b17ff249b54f29f29fa",9681:"a23460af5ed19b87c5f4",9724:"1b2aa7fb0c653b97af10",9796:"ee168014d02122d9c3ac",9807:"362352ab5e33fb7bfacf",9930:"d2846f1f9023cffd15ca",9970:"71a0159b60175b5cb199",9989:"9b5f0395f130c4a9d7c4"}[e]+".en.js",i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},n="stackoverflow:",i.l=(e,t,r,s)=>{if(a[e])a[e].push(t);else{var o,c;if(void 0!==r)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var u=l[d];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==n+r){o=u;break}}o||(c=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,i.nc&&o.setAttribute("nonce",i.nc),o.setAttribute("data-webpack",n+r),o.src=e),a[e]=[t];var g=(t,n)=>{o.onerror=o.onload=null,clearTimeout(f);var r=a[e];if(delete a[e],o.parentNode&&o.parentNode.removeChild(o),r&&r.forEach((e=>e(n))),t)return t(n)},f=setTimeout(g.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=g.bind(null,o.onerror),o.onload=g.bind(null,o.onload),c&&document.head.appendChild(o)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="",(()=>{var e={8277:0,234:0};i.f.j=(t,a)=>{var n=i.o(e,t)?e[t]:void 0;if(0!==n)if(n)a.push(n[2]);else{var r=new Promise(((a,r)=>n=e[t]=[a,r]));a.push(n[2]=r);var s=i.p+i.u(t),o=new Error;i.l(s,(a=>{if(i.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var r=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.src;o.message="Loading chunk "+t+" failed.\n("+r+": "+s+")",o.name="ChunkLoadError",o.type=r,o.request=s,n[1](o)}}),"chunk-"+t,t)}};var t=(t,a)=>{var n,r,[s,o,c]=a,l=0;if(s.some((t=>0!==e[t]))){for(n in o)i.o(o,n)&&(i.m[n]=o[n]);if(c)c(i)}for(t&&t(a);l<s.length;l++)r=s[l],i.o(e,r)&&e[r]&&e[r][0](),e[s[l]]=0},a=self.webpackChunkstackoverflow=self.webpackChunkstackoverflow||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})(),(()=>{"use strict";i.p=document.getElementById("webpack-public-path").innerText+"Js/"})(),(()=>{"use strict";function e(e){return(...t)=>e()(...t)}e((()=>StackExchange.helpers.addSpinner)),e((()=>StackExchange.helpers.addStacksSpinner)),e((()=>StackExchange.helpers.addLightbox)),e((()=>StackExchange.helpers.getLikelyErrorMessage)),e((()=>StackExchange.helpers.getRejectedMockXhr)),e((()=>StackExchange.helpers.getSpinnerImg)),e((()=>StackExchange.helpers.removeMessages)),e((()=>StackExchange.helpers.removeSpinner)),e((()=>StackExchange.helpers.showErrorMessage)),e((()=>StackExchange.helpers.showInfoMessage)),e((()=>StackExchange.helpers.showMessage)),e((()=>StackExchange.helpers.showSuccessMessage));const t=e((()=>StackExchange.helpers.showModal)),a=(e((()=>StackExchange.helpers.loadModal)),e((()=>StackExchange.helpers.showToast))),n=(e((()=>StackExchange.helpers.hideToasts)),e((()=>StackExchange.helpers.suggestedTransientTimeout)),e((()=>StackExchange.helpers.toggleStacksPopover)),e((()=>StackExchange.helpers.queueStacksPopover)),e((()=>StackExchange.helpers.submitFormOnEnterPress)),e((()=>StackExchange.helpers.updateQueryStringParameter)),e((()=>StackExchange.helpers.DelayedReaction)),e((()=>StackExchange.helpers.closePopups)),e((()=>StackExchange.helpers.showStacksNotice)),e((()=>StackExchange.helpers.removeParameterFromQueryString)),e((()=>StackExchange.helpers.enableSubmitButton)),e((()=>StackExchange.helpers.disableSubmitButton)),e((()=>StackExchange.helpers.loadTicks)),e((()=>StackExchange.helpers.encodeHexHtmlEntities)),e((()=>StackExchange.helpers.bindOnHashChange_HighlightDestination)),e((()=>StackExchange.helpers.noDiacritics)),e((()=>StackExchange.helpers.tagSeparator))),r=e((()=>StackExchange.helpers.sanitizeAndSplitTags)),s=new Promise((e=>{StackExchange.ready((()=>{e()}))}));i(10597);const o=StackExchange.tagEditor;function c(e){const t=function(e){return function(e){const t=e.replace(/\.(t|j)sx?/,"");return $(`script[type="application/json"][data-role="module-args"][data-module-name="${t}"]`)}(e).toArray().map((e=>JSON.parse($(e).text())))}(e);return function(e,t){if(0===e.length)throw`Couldn't find args for module "${t}". Did you forget to call @JavaScriptHelper.Args?`}(t,e),function(e,t){if(e.length>1)throw`Found too many instances of args for module "${t}". Did you call @JavaScriptHelper.Args too many times?`}(t,e),t[0]}const l=c("Shared/options.mod.ts").options;var d=i(65311);i(1539);const u=window.initTagRenderer;i(75556);const g=StackExchange.stacksValidation.handlerFor;var f=/^(?:and|or|not)$/i,p=/^(?:and|or)$/i;function h(e,t){var a=function(t,a){return t.test(e[a])},n=function(e){return a(/^not$/i,e)?3:a(/^and$/i,e)?1:a(/^or$/i,e)?2:0};if(0===t)return["and","or"];var r=[],s=n(t-1);3===s?r.push("and","or","not"):0!==s&&r.push("and","or");for(var i=t-1;i>=0;i--){var o=n(i);if(2===o)break;0===o&&r.push(e[i])}return r}function v(e,t){var a,n=e.map((function(){return!0})),r=function(t,a){return t.test(e[a])},s=function(e){return r(/^not$/i,e)?3:r(/^and$/i,e)?1:r(/^or$/i,e)?2:0},i=function(t,a){for(var r=[],i=[],o=-1,c=t;c<=a;c++)switch(s(c)){case 2:r=[],i=[],o=-1;break;case 1:o=-1;break;case 3:o=c;break;case 0:var l=e[c],d=-1!==o?i:r;-1===d.indexOf(l)?d.push(l):(n[c]=!1,-1!==o&&(n[o]=!1)),o=-1}},o=function(e,t){for(var a=0,r=t,i=t;i>=e;i--)if(n[i]){var o=s(i);if(0!==a){if(3===o){n[i]=!1;continue}if(1===o&&(1===a||2===a)){n[i]=!1;continue}2!==o||1!==a&&2!==a||(n[r]=!1)}a=o,r=i}};for(i(0,t-1),i(t,e.length-1),o(0,t-1),o(t,e.length-1),a=0;a<t&&r(p,a);a++)n[a]=!1;for(a=e.length-1;a>=t&&r(f,a);a--)n[a]=!1;return n}function m(e){for(var t=e.split(n(e)),a=t.length-1;a>=0;a--){var s=t[a];/^-[^-]/.test(s)&&(t.splice(a+1,0,s.substring(1)),t[a]="not")}return r(t.join(" "),!0,!0)||[]}function b(e){var t=m(e);return t.length>1&&"not"===t[0]?"-"+t[1]:t[0]}function k(e){var t=/^-/.test(e);return d.getJSON("/filter/tags",{q:e.replace(/^-/,""),newstyle:!0}).then((a=>{var n=Math.max(a.length,6);return t&&a.forEach((e=>{e.Negated=!0})),["not","or","and"].forEach((t=>{0!==e.length&&-1===t.indexOf(e)||a.unshift({Name:t})})),a.length>n?a.slice(0,n):a}))}function x(e){var t,a=m(e||"");return a.length>0&&(t=v(a,0),a=a.filter((function(e,a){return t[a]}))),a.length>0&&(t=v(a,a.length),a=a.filter((function(e,a){return t[a]}))),a.join(" ")}function S(e){var t="";if("Watched"===e.tagModeId)t="";else t=encodeURIComponent(e.tagQuery);var a=[];e.sortId.length>0&&a.push("sort="+e.sortId),e.filterIds.length>0&&a.push("filters="+e.filterIds),"Specified"!==e.tagModeId&&a.push("tagMode="+e.tagModeId),e.uqlId&&a.push("uqlId="+e.uqlId),a.push("edited=true");var n="Watched"===e.tagModeId?"/questions/tagged":t?"/questions/tagged/"+t:"/questions",r=l.site.routePrefix||"";return window.location.origin+r+n+"?"+a.join("&")}function y(e,t,n,r,s=null){r.prop("disabled",!0),d.ajax({type:"POST",url:e,data:d.extend({},t,{fkey:l.user.fkey,name:n}),dataType:"json",success:function(e){if(e.Success)s?s(e):e.RedirectUrl?location.href=e.RedirectUrl:e.Message&&a(e.Message,{type:"info",transient:!0});else{var t=e.Message||__tr(["An error occurred during save."], undefined, "en", []);if(d(".js-modal-container").hasClass("d-none"))a(t,{type:"danger",transient:!0});else g(d("#uql-name-field")).add("error",t)}},error:function(e,t,n){var r=e.responseText&&e.responseText.length<100?e.responseText:__tr(["An error occurred during save."], undefined, "en", []);d(".js-modal-container").hasClass("d-none")?a(r,{type:"danger",transient:409===e.status}):g(d("#uql-name-field")).add("error",r)},complete:function(){r.prop("disabled",!1)}})}function w(){Stacks.addController("se-uql",{targets:["tagQuery","name","toggleMoreButton","morePopover","toggleFormButton","form","saveButton","saveTemplate","applyButton"],resetForm:function(){this.formTarget.reset();var e=this.tagQueryTarget;if(e.func_clear){var t=x(e.value);e.func_clear(),t.split(/ +/).forEach(e.func_add,e)}},showSaveModal:function(e){e.preventDefault();var a=d(d(this.saveTemplateTarget).text());a.data("passed-data",this.readForm()),t(a,{returnElements:d(e.currentTarget)})},toggleEditor:function(e){d(this.toggleFormButtonTarget).click().focus()},cancelEditor:function(e){this.resetForm(),d(this.formTarget).hasClass("is-expanded")&&d(this.toggleFormButtonTarget).click()},readForm:function(){var e=this.formTarget.elements;function t(t){return d(e[t]).filter(":checked")}var a=t("sortId").val()||"",n=t("filterId").map((function(){return this.value})).get().join(","),r=t("tagModeId").val()||"Specified";return{sortId:a,filterIds:n,tagModeId:r,tagQuery:"Specified"===r?function(e){for(var t=e.split(/[\s|,;]+/).filter((function(e){return e.length>0})),a=(t=x(t.join(" ")).split(" ")).length-2;a>=0;a--)"not"===t[a]&&t.splice(a,2,"-"+t[a+1]);return t.join(" ")}(this.tagQueryTarget.value||""):"",id:d(e.uqlId).val()}},navigate:function(e){e.preventDefault();var t=this.readForm();t.uqlId=this.data.get("id");var n=t.tagQuery.trim();if("true"===this.data.get("sanitize-tag-query")&&n.length>0){var r=d(this.applyButtonTarget);r.addClass("is-loading"),d.ajax({type:"POST",url:"/questions/sanitize-tag-query",data:{fkey:l.user.fkey,tagQuery:n},dataType:"json",success:function(e){t.tagQuery=e.TagQuery,location.href=S(t)},error:function(e){var t=e.responseText&&e.responseText.length<100?e.responseText:__tr(["An error occurred processing the tag query."], undefined, "en", []);a(t,{type:"danger",transient:409===e.status})},complete:function(){r.removeClass("is-loading")}})}else location.href=S(t)},connect:function(){var e=d(this.tagQueryTarget);e.attr("value",m(e.val()).join(" "));var t,a,n=d(this.formTarget.elements.tagModeId).filter("[value=Specified]");a=n,o(t=e,{excerpts:!1,columns:1,operators:f,customFilterTags:v,customSafeTags:m,customExistingTags:h,sanitizeSearchTerm:b,getDataPromise:k,useStacksClasses:!0}),t.next(".tag-editor").on("change",(function(){a.prop("checked",!0)})).on("keypress",(function(e){0!==e.which&&a.prop("checked",!0)})).on("click",".js-delete-tag",(function(){a.prop("checked",!0)}))}})}function j(){Stacks.addController("se-uql-list",{targets:["item"],getParentItem:function(e){return d(this.itemTargets).has(e).get(0)},deleteCurrent:function(e){var t,a,n,r,s=e.currentTarget,i=this.getParentItem(s);t=this.getElementData(i,"id"),a=this.getElementData(i,"name"),n=d(s),r=function(){location.reload()},confirm(__tr(["Are you sure you want to delete \"$name$\"?"], {name: a}, "en", []))&&y("/questions/user-lists/"+t+"/delete",{},null,n,r)},editCurrent:function(e){e.preventDefault(),this.triggerEvent("edit-current-requested")}})}function T(e){w(),Stacks.addController("se-uql-save",{targets:["name","saveButton"],validateName:function(e,t){var a=g(d(this.nameTarget));if(!a)return!0;if(e&&!a.hasType("error"))return!0;a.clear("error");var n=this.nameTarget.value.trim();return t||""!==n||a.add("error",__tr(["Title is missing."], undefined, "en", [])),n.length>32&&a.add("error",__tr(["Title is $count$ character too long.","Title is $count$ characters too long."], {count: n.length - 32}, "en", ["count"])),"en"!==l.locale||/^[ -~]*$/.test(n)||a.add("error",__tr(["Please only include ASCII characters."], undefined, "en", [])),!a.hasType("error")},liveValidate:function(e){this.validateName(!0,!0)},updateExisting:function(e){if(e.preventDefault(),this.validateName()){var t=d(this.element).data("passed-data");y("/questions/user-lists/"+t.id+"/update",t,this.nameTarget.value.trim(),d(this.saveButtonTargets))}},createNew:function(e){e.preventDefault(),this.validateName()&&y("/questions/user-lists/create",d(this.element).data("passed-data"),this.nameTarget.value.trim(),d(this.saveButtonTargets))}}),j(),e&&history.replaceState&&history.replaceState({},document.title,e+location.hash)}s.then((()=>{const e=c("entry-points/questions/userQuestionList.mod.ts");u(e.regularTagsString.split(" "),e.moderatorTagsString.split(" ")),T(e.sharingUrl)}))})()})();