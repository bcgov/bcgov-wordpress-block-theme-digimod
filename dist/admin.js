(()=>{var e={932:()=>{const{registerBlockStyle:e}=wp.blocks;e("core/column",{name:"dropshadow",label:"Drop shadow"})},260:()=>{const{registerBlockStyle:e}=wp.blocks;e("core/columns",{name:"constrained",label:"Constrained"})},276:()=>{const{registerBlockStyle:e}=wp.blocks;[{name:"default",label:"Centre Overlay",description:"This uses a Flex approach to layout and will use variable width and spacing across a maximum of three columns. Menu groups will wrap to the next row and display in a center aligned position.",isDefault:!0},{name:"grid",label:"Justify Overlay",description:"This uses a Grid approach to layout and will use consistant width and spacing across a maximum of three columns. Menu groups will wrap to the next row and position themselves under the first column."}].forEach((t=>{e("core/navigation",t)}))},892:()=>{const{registerBlockStyle:e}=wp.blocks;[{name:"dropshadow",label:"Drop shadow",isDefault:!0},{name:"default",label:"No Shadow"}].forEach((t=>{e("core/query",t)}))},84:(e,t)=>{var l;!function(){"use strict";var a={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var l=arguments[t];l&&(e=r(e,n(l)))}return e}function n(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var l in e)a.call(e,l)&&e[l]&&(t=r(t,l));return t}function r(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0===(l=function(){return o}.apply(t,[]))||(e.exports=l)}()}},t={};function l(a){var o=t[a];if(void 0!==o)return o.exports;var n=t[a]={exports:{}};return e[a](n,n.exports,l),n.exports}l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";function e(e,t=document){if(!e)throw new Error("A selector argument is required for the qs function");return t.querySelector(e)}function t(e,t=document){if(!e)throw new Error("A selector argument is required for the qsa function");return[...t.querySelectorAll(e)]}function a(e,t,l,a){e&&"function"==typeof e.addEventListener?e.addEventListener(t,l,a):console.warn("el is not a valid EventTarget or does not support addEventListener")}const o=()=>{window.requestAnimationFrame((()=>{if(!e("body").classList.contains("wp-customizer"))return;const t=e("#sub-accordion-section-custom_css"),l=e("h3 .customize-action",t);null!==t&&null!==l&&null!==window.site.customBodyClass&&""!==window.site.customBodyClass&&(l.innerHTML=`Custom class: <strong>body.custom-${window.site.customBodyClass}</strong>`)}))};"complete"===document.readyState?o():a(document,"DOMContentLoaded",o()),a(document,"DOMContentLoaded",(function(){t(".bcgov-block-theme-notice").forEach((function(e){e.addEventListener("click",(function(t){if(t.target.classList.contains("notice-dismiss")){const t=e.getAttribute("data-dismiss-url");if(t){const e=new window.XMLHttpRequest;e.open("GET",t),e.send()}}}))}))}));const n=()=>{window.requestAnimationFrame((()=>{const t=e("body");if(t.classList.contains("wp-admin"))return;const l=t.classList.contains("home"),o=e("header"),n=e(".bcgov-header-group"),r=e(".wp-block-site-logo"),s=e("footer"),c=e(".wp-block-post-content"),i=e("#wp-custom-css"),d=e(".bcgov-header-container"),m=e(".bcgov-body-content"),u=e("#wpadminbar"),p=e("#search-field-container");null!==i&&(i.innerText=i.innerText.replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&")),window.requestAnimationFrame((()=>{let e=null,l=null,a=null;o&&n&&(e=window.getComputedStyle(o).getPropertyValue("height"),l=window.getComputedStyle(n).getPropertyValue("height")),u&&(a=window.getComputedStyle(u).getPropertyValue("height")),"0px"===e&&(t.style.paddingTop=l,n.style.paddingTop=a||n.style.paddingTop,document.documentElement.style.scrollPadding=o.clientHeight+"px");let r="0px";s&&(r=window.getComputedStyle(s).getPropertyValue("height")),d&&m&&(m.style.minHeight="calc(100dvh - ("+e+" + "+r+"))")}));let b=null;null!==c&&(b=c.firstElementChild);const g=e(".breadcrumb-nav-section");null!==r&&e("img",r).setAttribute("alt","BCGov Logo");let w,h=null;null!==n&&(w=e(".is-style-takeover-menu",n),h=e("nav",n)),null!==window.site.siteName&&""!==window.site.siteName&&void 0!==window.site.siteName?t.classList.add(window.site.siteName):t.classList.add("bcgov"),null!==window.site.headerEffect&&null!==w?t.classList.add(`header-${window.site.headerEffect}`):t.classList.add("header-scroll"),null!==window.site.customBodyClass&&""!==window.site.customBodyClass&&t.classList.add(`custom-${window.site.customBodyClass}`),null!==window.site.externalLinkIcons&&""!==window.site.externalLinkIcons&&void 0!==window.site.externalLinkIcons&&"1"===window.site.externalLinkIcons&&t.classList.add("external-link-icons"),null!==b&&b.className.split(" ").some((e=>/.*banner.*/.test(e)))&&!b.className.split(" ").some((e=>/.*in-page.*/.test(e)))&&null!==g&&(b.parentNode.insertBefore(g,b.nextSibling),g.classList.add("alignwide"),l&&g.remove()),null===h||"fixed"!==window.site.headerEffect&&"hides"!==window.site.headerEffect||(n.style.position="fixed",p.style.position="fixed"),null===w||null!==window.site.headerEffect&&"scroll"!==window.site.headerEffect||(n.style.position="absolute",n.style.overflow="hidden",n.style.transform="none"),null===h&&(t.style.paddingTop=0);const f=document.createElement("a");f.setAttribute("class","back-to-top"),f.setAttribute("alt","Back to top"),f.setAttribute("title","Back to top"),f.setAttribute("tabindex","0"),f.setAttribute("aria-label","Click to go back to the top of the page"),f.setAttribute("href","#top"),f.setAttribute("role","button"),null!==s&&s.append(f);const v=document.createElement("img");v.setAttribute("class","back-to-top-icon"),v.setAttribute("alt","back to top icon"),v.setAttribute("src",window.site.templateDir+"/assets/images/back-to-top.png"),f.append(v);let k=0;a(document,"scroll",(()=>{const t=e(".back-to-top");if(null!==t&&(window.pageYOffset+window.innerHeight>document.body.offsetHeight-1e3?(t.style.display="block",t.style.opacity="0.75"):(t.style.display="none",t.style.opacity="0")),null!==h&&"hides"===window.site.headerEffect){const e=window.pageYOffset||document.documentElement.scrollTop;e<k?e>100&&(n.style.opacity="1",n.style.transform="translateY(0%)",p&&(p.style.opacity="1",p.style.transform="translateY(0%)")):e>100&&(n.style.opacity="0",n.style.transform="translateY(-100%)",p&&(p.style.opacity="0",p.style.transform="translateY(-100%)")),k=e<=0?0:e}}))}))};"complete"===document.readyState?n():a(document,"DOMContentLoaded",n());const r=()=>{const e=window.innerHeight,t=document.body.clientWidth;t>e?(document.body.classList.remove("portrait"),document.body.classList.add("landscape")):(document.body.classList.remove("landscape"),document.body.classList.add("portrait")),t<=782?(document.body.classList.remove("largeScreen"),document.body.classList.remove("tablet"),document.body.classList.add("mobile")):t<=1199?(document.body.classList.remove("mobile"),document.body.classList.add("tablet"),document.body.classList.remove("largeScreen")):(document.body.classList.remove("mobile"),document.body.classList.remove("tablet"),document.body.classList.add("largeScreen"))};a(window,"resize",r),a(window,"load",(()=>{r(),(()=>{if("1"===window.site.externalLinkIcons){const e=document.querySelectorAll(".post-content a");e&&e.forEach((e=>{const t=e.getAttribute("href");if(null!==t){if(t.startsWith("#")||t.startsWith("/")||t.startsWith("./")||t.startsWith("../")||t.startsWith("?"))return;const l=window.location.hostname;if(t.match(/^(?:https?:)?(?:\/\/)?([^\/\?]+)/i)[1]!==l){e.classList.add("external");const t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.setAttribute("class","external-link-icon"),t.setAttribute("version","1.1"),t.setAttribute("id","Layer_1"),t.setAttribute("xmlns","http://www.w3.org/2000/svg"),t.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),t.setAttribute("x","0px"),t.setAttribute("y","0px"),t.setAttribute("viewBox","0 0 18 18"),t.setAttribute("style","enable-background:new 0 0 18 18;"),t.setAttribute("xml:space","preserve"),t.innerHTML='<path class="st0" d="M9.7,3.9c0-0.1-0.1-0.3-0.2-0.4C9.4,3.4,9.3,3.4,9.2,3.4H1.7c-0.4,0-0.9,0.2-1.2,0.5C0.2,4.2,0,4.6,0,5.1v11.2c0,0.4,0.2,0.9,0.5,1.2C0.8,17.8,1.2,18,1.7,18h11.2c0.4,0,0.9-0.2,1.2-0.5c0.3-0.3,0.5-0.7,0.5-1.2V8.8c0-0.1-0.1-0.3-0.2-0.4 c-0.1-0.1-0.2-0.2-0.4-0.2c-0.1,0-0.3,0.1-0.4,0.2c-0.1,0.1-0.2,0.2-0.2,0.4v7.5c0,0.1-0.1,0.3-0.2,0.4c-0.1,0.1-0.2,0.2-0.4,0.2 H1.7c-0.1,0-0.3-0.1-0.4-0.2c-0.1-0.1-0.2-0.2-0.2-0.4V5.1c0-0.1,0.1-0.3,0.2-0.4c0.1-0.1,0.2-0.2,0.4-0.2h7.5 c0.1,0,0.3-0.1,0.4-0.2C9.7,4.2,9.7,4.1,9.7,3.9z"/><path class="st0" d="M18,0.6c0-0.1-0.1-0.3-0.2-0.4C17.7,0.1,17.6,0,17.4,0h-5.6c-0.1,0-0.3,0.1-0.4,0.2c-0.1,0.1-0.2,0.2-0.2,0.4 s0.1,0.3,0.2,0.4c0.1,0.1,0.2,0.2,0.4,0.2h4.3l-9.2,9.2c-0.1,0.1-0.1,0.1-0.1,0.2c0,0.1,0,0.1,0,0.2s0,0.1,0,0.2c0,0.1,0.1,0.1,0.1,0.2C7,11.1,7,11.2,7.1,11.2c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0,0.2,0s0.1-0.1,0.2-0.1l9.2-9.2v4.3c0,0.1,0.1,0.3,0.2,0.4c0.1,0.1,0.2,0.2,0.4,0.2c0.1,0,0.3-0.1,0.4-0.2C17.9,6.5,18,6.3,18,6.2V0.6z"/>';const l=window.getComputedStyle(e).fontSize;t.style.width=l,t.style.height=l,e.appendChild(t)}}}))}})()}));const s=()=>{window.requestAnimationFrame((()=>{if(void 0!==window.pluginCleanbc&&("optional"===window.pluginCleanbc.siteName||window.site.allSiteStyles)){const l=t("a.icon");l.length&&l.forEach((e=>{null===e.getAttribute("href")&&(e.setAttribute("tabindex","-1"),e.style.pointerEvents="none")}));const a=t(".wp-block-button.is-style-icon");a.length&&a.forEach((t=>{const l=e("a",t);null===l||t.classList.contains("has-size-large")||(l.style.outlineOffset="1rem")}));const o=()=>{};window.addEventListener("scroll",o)}}))};"complete"===document.readyState?s():a(document,"DOMContentLoaded",s());const c=window.React;var i=l(84),d=l.n(i);const{__}=wp.i18n,m=[{label:__("None","bcgov-block-theme"),value:""},{label:__("Default","bcgov-block-theme"),value:"default"},{label:__("Home","bcgov-block-theme"),value:"home"},{label:__("Auto","bcgov-block-theme"),value:"auto"},{label:__("Book","bcgov-block-theme"),value:"book"},{label:__("Calendar","bcgov-block-theme"),value:"calendar"},{label:__("Case","bcgov-block-theme"),value:"case"},{label:__("Changes","bcgov-block-theme"),value:"changes"},{label:__("Federal","bcgov-block-theme"),value:"federal"},{label:__("Gear","bcgov-block-theme"),value:"gear"},{label:__("Group","bcgov-block-theme"),value:"group"},{label:__("Leaf","bcgov-block-theme"),value:"leaf"},{label:__("Map","bcgov-block-theme"),value:"map"},{label:__("Tag","bcgov-block-theme"),value:"tag"}],u=window.lodash,{registerBlockStyle:p,unregisterBlockStyle:b}=wp.blocks,{__:g}=wp.i18n,{addFilter:w}=wp.hooks,{createHigherOrderComponent:h}=wp.compose,{Fragment:f}=wp.element,{InspectorControls:v}=wp.blockEditor,{PanelBody:k,SelectControl:y,TextControl:E}=wp.components;[{name:"fill",label:"BCGov",default:"is-bcgov-fill"},{name:"outline",label:"Outline"},{name:"underline",label:"Underline"}].forEach((e=>p("core/button",e))),("optional"===window.site.siteName||window.site.allSiteStyles.length)&&p("core/button",{name:"icon",label:"Icon"}),wp.domReady((()=>{b("core/button","default")})),w("blocks.registerBlockType","bcgov-block-theme/button-block/add-attributes",(function(e,t){return"core/button"===t?(0,u.assign)({},e,{attributes:(0,u.merge)(e.attributes,{size:{type:"string",default:"regular"},svgIcon:{type:"string",default:""},iconsList:{type:"array",default:m},clickFlag:{type:"boolean",default:!1},label:{type:"string",default:""}})}):e})),w("editor.BlockEdit","bcgov-block-theme/button-block/add-inspector-controls",h((e=>t=>{const{size:l,svgIcon:a,iconsList:o,clickFlag:n,label:r}=t.attributes,{setAttributes:s}=t,{name:i}=t;return"core/button"!==i?(0,c.createElement)(e,{...t}):(0,c.createElement)(f,null,(0,c.createElement)(e,{...t}),(0,c.createElement)(v,null,(0,c.createElement)(k,{title:g("Icon options","bcgov-block-theme"),initialOpen:!1},n?(0,c.createElement)(y,{label:g("Icon","bcgov-block-theme"),value:a,options:o,onChange:e=>{s({svgIcon:e})}}):(0,c.createElement)(f,null,(0,c.createElement)("h3",null,"Instructions (for CleanBC only):"),(0,c.createElement)("p",null,"To change the colour of an icon use the Color ▶ Background setting below."),(0,c.createElement)("p",null,"Note that the"," ",(0,c.createElement)("em",null,"icon color change will only work with the Theme palette")," ","of colours."),(0,c.createElement)("p",null,(0,c.createElement)("strong",null,"Enable the Icon style")," ","button to use list of icon options."),(0,c.createElement)("button",{onClick:()=>{s({clickFlag:!0})}},"Show icons"))),(0,c.createElement)(k,{title:"Size options",initialOpen:!0},(0,c.createElement)(y,{label:"Size",value:l,options:[{label:g("Default","bcgov-block-theme"),value:"regular"},{label:g("Large","bcgov-block-theme"),value:"large"}],onChange:e=>{s({size:e})}})),(0,c.createElement)(k,{title:"Accessibility",initialOpen:!1},(0,c.createElement)(E,{label:"ARIA Label",value:r,onChange:e=>s({label:e})}))))}),"withInspectorControl")),w("editor.BlockListBlock","bcgov-block-theme/button-block/add-classes-to-editor",h((e=>t=>{const{attributes:{size:l,svgIcon:a},className:o,name:n}=t;return"core/button"!==n?(0,c.createElement)(e,{...t}):(0,c.createElement)(e,{...t,className:d()(o,{[l]:l,[a]:a})})}),"addClassesToEditor")),l(260),l(932);const{registerBlockStyle:C}=wp.blocks,{addFilter:x}=wp.hooks,{createHigherOrderComponent:I}=wp.compose,{Fragment:B}=wp.element,{InspectorControls:L}=wp.blockEditor,{PanelBody:A,PanelRow:N,CheckboxControl:S,TextControl:$,RangeControl:_}=wp.components;[{name:"dropshadow",label:"Drop shadow"},{name:"variable-ratio",label:"Variable ratio",description:"Image ratio changes between desktop/tablet and mobile. Image displays at 1:1 ratio on large screens and 2:1 ratio (wider than it is high) on mobile screens."},{name:"abs-img",label:"Positioned",description:"Sets the position of the image to absolute. Requires adding styles to position the image as needed."}].forEach((e=>C("core/image",e))),x("blocks.registerBlockType","bcgov-block-theme/image/add-attributes",(function(e,t){return"core/image"===t?(0,u.assign)({},e,{attributes:(0,u.merge)(e.attributes,{title:{type:"string",default:""},printMode:{type:"boolean",default:!1},printWidth:{type:"number",default:25}})}):e})),x("editor.BlockEdit","bcgov-block-theme/image/add-inspector-controls",I((e=>t=>{const{title:l,printMode:a,printWidth:o}=t.attributes,{setAttributes:n}=t,{name:r}=t;return"core/image"!==r?(0,c.createElement)(e,{...t}):(0,c.createElement)(B,null,(0,c.createElement)(e,{...t}),(0,c.createElement)(L,null,(0,c.createElement)(A,{title:"Other Media Settings",initialOpen:!1},(0,c.createElement)(N,null,(0,c.createElement)($,{label:"Title (hover details)",value:l,onChange:e=>n({title:e})})),(0,c.createElement)(N,null,(0,c.createElement)(S,{label:"Show image when printing",checked:a,onChange:e=>n({printMode:e})})),(0,c.createElement)(N,null,(0,c.createElement)(_,{label:"Max width on printed page (%)",value:o,onChange:e=>n({printWidth:e}),min:10,max:100,separatorType:"fullWidth"})))))}),"withInspectorControl"));const{registerBlockStyle:T}=wp.blocks,{addFilter:O}=wp.hooks,{createHigherOrderComponent:q}=wp.compose,{Fragment:M}=wp.element,{InspectorControls:P}=wp.blockEditor,{PanelBody:F,PanelRow:z,CheckboxControl:D,TextControl:H,RangeControl:R}=wp.components;[{name:"dropshadow",label:"Drop shadow"},{name:"square",label:"Square"},{name:"no-clip",label:"Full Image"}].forEach((e=>{T("core/media-text",e)})),O("blocks.registerBlockType","bcgov-block-theme/media-text/add-attributes",(function(e,t){return"core/media-text"===t?(0,u.assign)({},e,{attributes:(0,u.merge)(e.attributes,{title:{type:"string",default:""},printMode:{type:"boolean",default:!1},printWidth:{type:"number",default:25}})}):e})),O("editor.BlockEdit","bcgov-block-theme/media-text/add-inspector-controls",q((e=>t=>{const{title:l,printMode:a,printWidth:o}=t.attributes,{setAttributes:n}=t,{name:r}=t;return"core/media-text"!==r?(0,c.createElement)(e,{...t}):(0,c.createElement)(M,null,(0,c.createElement)(e,{...t}),(0,c.createElement)(P,null,(0,c.createElement)(F,{title:"Other Media Settings",initialOpen:!1},(0,c.createElement)(z,null,(0,c.createElement)(H,{label:"Title (hover details)",value:l,onChange:e=>n({title:e})})),(0,c.createElement)(z,null,(0,c.createElement)(D,{label:"Show image when printing",checked:a,onChange:e=>n({printMode:e})})),(0,c.createElement)(z,null,(0,c.createElement)(R,{label:"Max width on printed page (%)",value:o,onChange:e=>n({printWidth:e}),min:10,max:100,separatorType:"fullWidth"})))))}),"withInspectorControl")),l(276);const{addFilter:W}=wp.hooks,{createHigherOrderComponent:V}=wp.compose,{Fragment:G}=wp.element,{InspectorControls:j}=wp.blockEditor,{PanelBody:Y,PanelRow:J,CheckboxControl:U}=wp.components;W("blocks.registerBlockType","bcgov-block-theme/site-logo/add-attributes",(function(e,t){return"core/site-logo"===t?(0,u.assign)({},e,{attributes:(0,u.merge)(e.attributes,{inverted:{type:"boolean",default:!1}})}):e})),W("editor.BlockEdit","bcgov-block-theme/site-logo/add-inspector-controls",V((e=>t=>{const{inverted:l}=t.attributes,{setAttributes:a}=t,{name:o}=t;return"core/site-logo"!==o?(0,c.createElement)(e,{...t}):(0,c.createElement)(G,null,(0,c.createElement)(e,{...t}),(0,c.createElement)(j,null,(0,c.createElement)(Y,{title:"Other Media Settings",initialOpen:!1},(0,c.createElement)(J,null,(0,c.createElement)(U,{label:"Set dark background for print",checked:l,onChange:e=>a({inverted:e})})))))}),"withInspectorControl")),l(892);const X=window.wp.i18n,K=window.wp.blocks,Q=window.wp.blockEditor,Z=window.wp.components,ee=window.wp.compose,te={backgroundColor:{type:"string",default:"transparent"},firstBreakColumns:{type:"integer",default:3},cardId:{type:"string",default:""}},le=[{attributes:te,save:e=>{const{attributes:{cardId:t,backgroundColor:l,firstBreakColumns:a,firstBreak:o,secondBreakColumns:n,secondBreak:r},className:s}=e;return(0,c.createElement)("div",null,(0,c.createElement)("style",{jsx:!0},`\n                            #${t} {\n                                background-color: ${l};\n                            }\n                            @media ( min-width: ${r}px ) {\n                                ul#${t} {\n                                    -webkit-flex-direction: row;\n                                    -moz-flex-direction: row;\n                                    -ms-flex-direction: row;\n                                    flex-direction: row;\n                                    -webkit-flex-wrap: wrap;\n                                    -moz-flex-wrap: wrap;\n                                    -ms-flex-wrap: wrap;\n                                    flex-wrap: wrap;\n                                    flex-wrap: wrap;\n                                }\n                                ul#${t} > li {\n                                    width: ${100/n-2}%;\n                                    margin: 1%;\n                                }\n                            }\n                            @media ( min-width: ${o}px ) {\n                                ul#${t} {\n                                    -webkit-flex-direction: row;\n                                    -moz-flex-direction: row;\n                                    -ms-flex-direction: row;\n                                    flex-direction: row;\n                                    -webkit-flex-wrap: wrap;\n                                    -moz-flex-wrap: wrap;\n                                    -ms-flex-wrap: wrap;\n                                    flex-wrap: wrap;\n                                }\n                                ul#${t} > li {\n                                    width: ${100/a-2}%;\n                                    margin: 1%;\n                                }\n                            }\n                        `),(0,c.createElement)("ul",{className:s,id:t},(0,c.createElement)(Q.InnerBlocks.Content,null)))}},{attributes:te,save:e=>{const{attributes:{cardId:t,backgroundColor:l,firstBreakColumns:a,firstBreak:o,secondBreakColumns:n,secondBreak:r},className:s}=e;return(0,c.createElement)("div",{role:"navigation"},(0,c.createElement)("style",{jsx:!0},`\n                            #${t} {\n                                background-color: ${l};\n                            }\n                            @media ( min-width: ${r}px ) {\n                                ul#${t} {\n                                    -webkit-flex-direction: row;\n                                    -moz-flex-direction: row;\n                                    -ms-flex-direction: row;\n                                    flex-direction: row;\n                                    -webkit-flex-wrap: wrap;\n                                    -moz-flex-wrap: wrap;\n                                    -ms-flex-wrap: wrap;\n                                    flex-wrap: wrap;\n                                    flex-wrap: wrap;\n                                }\n                                ul#${t} > li {\n                                    width: ${100/n-2}%;\n                                    margin: 1%;\n                                }\n                            }\n                            @media ( min-width: ${o}px ) {\n                                ul#${t} {\n                                    -webkit-flex-direction: row;\n                                    -moz-flex-direction: row;\n                                    -ms-flex-direction: row;\n                                    flex-direction: row;\n                                    -webkit-flex-wrap: wrap;\n                                    -moz-flex-wrap: wrap;\n                                    -ms-flex-wrap: wrap;\n                                    flex-wrap: wrap;\n                                }\n                                ul#${t} > li {\n                                    width: ${100/a-2}%;\n                                    margin: 1%;\n                                }\n                            }\n                        `),(0,c.createElement)("ul",{className:s,id:t},(0,c.createElement)(Q.InnerBlocks.Content,null)))}},{attributes:te,save:e=>{const{attributes:{cardId:t},className:l}=e;return(0,c.createElement)("ul",{className:l,id:t},(0,c.createElement)(Q.InnerBlocks.Content,null))}}],ae=[{name:"bcgov-background-light",color:"#f2f2f2"},{name:"bcgov-component",color:"#606060"},{name:"bcgov-text",color:"#313132"},{name:"bcgov-white",color:"#fff"},{name:"bcgov-primary",color:"#036"},{name:"bcgov-link",color:"#1a5a96"},{name:"bcgov-background-blue",color:"#38598a"},{name:"bcgov-yellow",color:"#fcba19"},{name:"bcgov-red",color:"#d8292f"},{name:"bcgov-green",color:"#2e8540"}],oe=(e,t)=>(void 0===e&&(e=t),e),ne=e=>{const t=new window.MouseEvent("click",{bubbles:!0,cancelable:!0,view:window});e.dispatchEvent(t)};function re(){const e=this.getAttribute("data-target");if(void 0===e)return;const t=document.querySelectorAll(`${e} .collapse-header button`),l=document.querySelectorAll(`${e} .collapse`);this.classList.contains("collapse-expand-all")&&(t.forEach((e=>{e.classList.remove("collapsed"),e.setAttribute("aria-expanded",!0)})),l.forEach((e=>{e.classList.remove("collapse"),e.classList.add("collapsing"),e.classList.remove("hide"),e.classList.add("show"),setTimeout((function(){e.classList.add("collapse"),e.classList.remove("collapsing")}),300)}))),this.classList.contains("collapse-collapse-all")&&(t.forEach((e=>{e.classList.add("collapsed"),e.setAttribute("aria-expanded",!1)})),l.forEach((e=>{e.classList.remove("collapse"),e.classList.add("collapsing"),e.classList.remove("show"),e.classList.add("hide"),setTimeout((function(){e.classList.add("collapse"),e.classList.remove("collapsing")}),300)})))}function se(){if(void 0===this.getAttribute("data-target"))return;const e=this,t=e.closest(".wp-block-bcgov-block-theme-collapse-item").querySelector(".collapse-container");t.classList.remove("collapse"),t.classList.add("collapsing"),e.setAttribute("aria-expanded","true"===e.getAttribute("aria-expanded")?"false":"true"),"true"===e.getAttribute("aria-expanded")?(e.classList.remove("collapsed"),t.classList.remove("hide"),t.classList.add("show")):(e.classList.add("collapsed"),t.classList.add("hide"),t.classList.remove("show")),setTimeout((function(){t.classList.add("collapse"),t.classList.remove("collapsing")}),300)}function ce(){const e=this.getAttribute("data-target");if(void 0===e)return;const t=document.querySelector(`.collapse-header button[data-target="${e}"]`);ne(t)}(0,K.registerBlockType)("bcgov/card-container",{title:(0,X.__)("Basic Card Container","basic-card-container"),icon:"images-alt",category:"media",attributes:te,getEditWrapperProps:()=>({"data-align":"wide"}),supports:{align:!0},example:{},edit:e=>{const{attributes:{cardId:t,backgroundColor:l,firstBreakColumns:a},className:o,clientId:n}=e;e.setAttributes({cardId:`card-container-${n}`});const r=(0,ee.withState)({column:a})((({column:t,setState:l})=>(0,c.createElement)(Z.RangeControl,{label:(0,X.__)("Columns"),value:t,initialPosition:"3",onChange:a=>{e.setAttributes({firstBreakColumns:a}),l({column:t})},min:1,max:6})));return(0,c.createElement)("ul",{className:o,style:{backgroundColor:l},id:t},(0,c.createElement)(Q.InspectorControls,null,(0,c.createElement)(Z.PanelBody,{title:(0,X.__)("Background Colour")},(0,c.createElement)(Z.ColorPalette,{colors:ae,value:l,onChange:t=>{e.setAttributes({backgroundColor:oe(t,"transparent")})}})),(0,c.createElement)(Z.PanelBody,{title:(0,X.__)("Desktop Columns")},(0,c.createElement)(r,null))),(0,c.createElement)(Q.InnerBlocks,{allowedBlocks:["bcgov/card","bcgov/fancy-button"]}))},deprecated:le,save:e=>{const{attributes:{cardId:t,backgroundColor:l,firstBreakColumns:a},className:o}=e;return(0,c.createElement)("ul",{className:`${o} lg-break-${a}`,id:t,style:{backgroundColor:l}},(0,c.createElement)(Q.InnerBlocks.Content,null))}}),(0,K.registerBlockType)("bcgov/card",{title:(0,X.__)("Basic Card","basic-card"),icon:"format-image",category:"media",attributes:{title:{type:"array",source:"children",selector:".card-block-title"},content:{type:"array",source:"children",selector:".card-block-content"},alignment:{type:"string",default:"none"},color:{type:"string",default:"inherit"},backgroundColor:{type:"string",default:"transparent"}},example:{},edit:e=>{const{attributes:{alignment:t,color:l,backgroundColor:a},className:o}=e;return(0,c.createElement)("li",{className:`align-${t} ${o}`,style:{backgroundColor:a,color:l}},(0,c.createElement)(Q.BlockControls,null,(0,c.createElement)(Q.AlignmentToolbar,{value:t,onChange:t=>{e.setAttributes({alignment:oe(t,"none")})}})),(0,c.createElement)(Q.InspectorControls,null,(0,c.createElement)(Z.PanelBody,{title:(0,X.__)("Colour")},(0,c.createElement)(Z.ColorPalette,{colors:ae,value:l,onChange:t=>{e.setAttributes({color:oe(t,"transparent")})}})),(0,c.createElement)(Z.PanelBody,{title:(0,X.__)("Background Colour")},(0,c.createElement)(Z.ColorPalette,{colors:ae,value:a,onChange:t=>{e.setAttributes({backgroundColor:oe(t,"transparent")})}}))),(0,c.createElement)(Q.InnerBlocks,{allowedBlocks:["core/heading","core/paragraph","core/image","core/html","core/button"]}))},save:e=>{const{attributes:{alignment:t,backgroundColor:l,color:a}}=e;return(0,c.createElement)("li",{className:`align-${t}`,style:{backgroundColor:l,color:a}},(0,c.createElement)(Q.InnerBlocks.Content,null))}});const ie=()=>{setTimeout((function(){const e=document.querySelectorAll(".collapse-container-nav button"),t=document.querySelectorAll(".collapse-header button"),l=document.querySelectorAll(".collapse-close a"),a=document.querySelectorAll(".collapse-collapse-all"),o=document.querySelectorAll(".wp-block-bcgov-block-theme-collapse > div:nth-child(2) button");e.length&&(e.forEach((e=>{e.addEventListener("click",re)})),t.forEach((e=>{e.addEventListener("click",se)})),l.forEach((e=>{e.addEventListener("click",ce)})),a.forEach(ne),o.forEach((e=>{const t=e.closest(".wp-block-bcgov-block-theme-collapse");if(!t)return;const l=t.getAttribute("data-open-first-item");null!==l&&"true"===l&&e.click()})))}),0)};"complete"===document.readyState?ie():document.addEventListener("DOMContentLoaded",ie);const de=[{icon:"admin-page",category:"layout",attributes:{collapseId:{type:"string",default:""}},supports:{align:["wide"]},example:{},edit:e=>{const{attributes:{collapseId:t},className:l,clientId:a}=e;return e.setAttributes({collapseId:`collapse-container-${a}`}),(0,c.createElement)("div",{className:l,id:t},(0,c.createElement)(Q.InnerBlocks,{allowedBlocks:["bcgov-block-theme/collapse-item"]}))},save:e=>{const{attributes:{collapseId:t}}=e;return(0,c.createElement)("div",{id:t},(0,c.createElement)("div",{className:"collapse-container-nav"},(0,c.createElement)("span",null,(0,c.createElement)("button",{"data-target":`#${t}`,className:"collapse-expand-all"},(0,X.__)("Expand all"))),(0,c.createElement)("span",null,(0,c.createElement)("button",{"data-target":`#${t}`,className:"collapse-collapse-all"},(0,X.__)("Collapse all")))),(0,c.createElement)(Q.InnerBlocks.Content,null))}}];[{name:"bcgov",label:"BCGov"}].forEach((e=>(0,K.registerBlockStyle)("bcgov-block-theme/collapse",e))),(0,K.registerBlockType)("bcgov-block-theme/collapse",{title:(0,X.__)("Collapse Container","bcgov-blocks"),icon:"admin-page",category:"layout",attributes:{collapseId:{type:"string",default:""},openFirstItem:{type:"boolean",default:!1}},supports:{align:["wide"]},example:{},edit:e=>{const{attributes:{collapseId:t,openFirstItem:l},className:a,clientId:o}=e;return e.setAttributes({collapseId:`collapse-container-${o}`}),(0,c.createElement)("div",{className:a,id:t},(0,c.createElement)(Q.InspectorControls,null,(0,c.createElement)(Z.PanelBody,{title:(0,X.__)("Collapse Settings")},(0,c.createElement)(Z.ToggleControl,{label:(0,X.__)("Open First Item"),checked:l,onChange:()=>{e.setAttributes({openFirstItem:!l})}}))),(0,c.createElement)(Q.InnerBlocks,{allowedBlocks:["bcgov-block-theme/collapse-item"]}))},deprecated:de,save:e=>{const{attributes:{collapseId:t,openFirstItem:l}}=e;return(0,c.createElement)("div",{id:t,"data-open-first-item":l},(0,c.createElement)("div",{className:"collapse-container-nav"},(0,c.createElement)("span",null,(0,c.createElement)("button",{"data-target":`#${t}`,className:"collapse-expand-all"},(0,X.__)("Expand all"))),(0,c.createElement)("span",null,(0,c.createElement)("button",{"data-target":`#${t}`,className:"collapse-collapse-all"},(0,X.__)("Collapse all")))),(0,c.createElement)(Q.InnerBlocks.Content,null))}});const me={title:{type:"string",selector:".bcgov-collapse-title"},itemId:{type:"string",default:""},headingId:{type:"string",default:""}},ue=[{title:(0,X.__)("Collapse Item","bcgov-blocks"),icon:"welcome-add-page",category:"layout",attributes:me,example:{},edit:e=>{const{attributes:{title:t,itemId:l,headingId:a},className:o,clientId:n}=e;return e.setAttributes({itemId:`collapse-item-${n}`}),e.setAttributes({headingId:`heading-${n}`}),(0,c.createElement)("div",{className:o},(0,c.createElement)("div",{className:"collapse-header",id:a},(0,c.createElement)("h3",null,(0,c.createElement)("button",{"data-toggle":"collapse","data-target":`#${l}`,"aria-expanded":"false","aria-controls":l,className:"collapsed"},(0,c.createElement)(Q.RichText,{tagName:"span",onChange:t=>{e.setAttributes({title:t})},className:"collapse-title",value:t,placeholder:(0,X.__)("…Title")})))),(0,c.createElement)("div",{className:"collapse collapse-container",id:l},(0,c.createElement)("div",{className:"collapse-body"},(0,c.createElement)(Q.InnerBlocks,null))))},save:e=>{const{attributes:{title:t,itemId:l,headingId:a}}=e;return(0,c.createElement)("div",null,(0,c.createElement)("div",{className:"collapse-header",id:a},(0,c.createElement)("h3",null,(0,c.createElement)("button",{"data-toggle":"collapse","data-target":`#${l}`,"aria-expanded":"false","aria-controls":l,className:"collapsed"},(0,c.createElement)(Q.RichText.Content,{tagName:"span",className:"collapse-title",value:t})))),(0,c.createElement)("div",{className:"collapse collapse-container",id:l},(0,c.createElement)("div",{className:"collapse-body"},(0,c.createElement)(Q.InnerBlocks.Content,null),(0,c.createElement)("div",{className:"collapse-close"},(0,c.createElement)("a",{"data-toggle":"collapse","data-target":`#${l}`,href:`#${l}`,role:"button","aria-expanded":"true","aria-controls":l},(0,X.__)("Collapse"))))))}}];(0,K.registerBlockType)("bcgov-block-theme/collapse-item",{title:(0,X.__)("Collapse Item","bcgov-blocks"),icon:"welcome-add-page",category:"layout",attributes:me,example:{},edit:e=>{const{attributes:{title:t,itemId:l,headingId:a},className:o,clientId:n}=e;return e.setAttributes({itemId:`collapse-item-${n}`}),e.setAttributes({headingId:`heading-${n}`}),(0,c.createElement)("div",{className:o},(0,c.createElement)("div",{className:"collapse-header",id:a},(0,c.createElement)("h3",null,(0,c.createElement)("button",{"data-toggle":"collapse","data-target":`#${l}`,"aria-expanded":"false","aria-controls":l,className:"collapsed"},(0,c.createElement)(Q.RichText,{tagName:"span",onChange:t=>{e.setAttributes({title:t})},className:"collapse-title",value:t,placeholder:(0,X.__)("…Title")})))),(0,c.createElement)("div",{className:"collapse collapse-container",id:l},(0,c.createElement)("div",{className:"collapse-body"},(0,c.createElement)(Q.InnerBlocks,null))))},deprecated:ue,save:e=>{const{attributes:{title:t,itemId:l,headingId:a}}=e;return(0,c.createElement)("div",null,(0,c.createElement)("div",{className:"collapse-header",id:a},(0,c.createElement)("h3",null,(0,c.createElement)("button",{"data-toggle":"collapse","data-target":`#${l}`,"aria-expanded":"false","aria-controls":l,className:"collapsed"},(0,c.createElement)(Q.RichText.Content,{tagName:"span",className:"collapse-title",value:t})))),(0,c.createElement)("div",{className:"collapse collapse-container hide",id:l},(0,c.createElement)("div",{className:"collapse-body"},(0,c.createElement)(Q.InnerBlocks.Content,null),(0,c.createElement)("div",{className:"collapse-close"},(0,c.createElement)("a",{"data-toggle":"collapse","data-target":`#${l}`,href:`#${l}`,role:"button","aria-expanded":"true","aria-controls":l},(0,X.__)("Collapse"))))))}})})()})();