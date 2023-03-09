(()=>{var t={644:()=>{const{registerBlockStyle:t}=wp.blocks;t("core/column",{name:"dropshadow",label:"Drop shadow"})},274:()=>{const{registerBlockStyle:t}=wp.blocks;t("core/columns",{name:"constrained",label:"Constrained"})},455:()=>{const{registerBlockStyle:t}=wp.blocks;[{name:"default",label:"Default",isDefault:!0},{name:"custom",label:"Custom Sizes"}].forEach((e=>{t("core/heading",e)}))},680:()=>{const{registerBlockStyle:t}=wp.blocks;[{name:"default",label:"Centre Overlay",description:"This uses a Flex approach to layout and will use variable width and spacing across a maximum of three columns. Menu groups will wrap to the next row and display in a center aligned position.",isDefault:!0},{name:"grid",label:"Justify Overlay",description:"This uses a Grid approach to layout and will use consistant width and spacing across a maximum of three columns. Menu groups will wrap to the next row and position themselves under the first column."}].forEach((e=>{t("core/navigation",e)}))},205:()=>{const{registerBlockStyle:t}=wp.blocks;[{name:"default",label:"Default",isDefault:!0},{name:"custom",label:"Custom Sizes"}].forEach((e=>{t("core/paragraph",e)})),[{name:"default",label:"Default",isDefault:!0},{name:"custom",label:"Custom Sizes"}].forEach((e=>{t("core/list",e)}))},548:()=>{const{registerBlockStyle:t}=wp.blocks;[{name:"dropshadow",label:"Drop shadow",isDefault:!0},{name:"default",label:"No Shadow"}].forEach((e=>{t("core/query",e)}))},184:(t,e)=>{var l;!function(){"use strict";var o={}.hasOwnProperty;function a(){for(var t=[],e=0;e<arguments.length;e++){var l=arguments[e];if(l){var n=typeof l;if("string"===n||"number"===n)t.push(l);else if(Array.isArray(l)){if(l.length){var r=a.apply(null,l);r&&t.push(r)}}else if("object"===n){if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]")){t.push(l.toString());continue}for(var s in l)o.call(l,s)&&l[s]&&t.push(s)}}}return t.join(" ")}t.exports?(a.default=a,t.exports=a):void 0===(l=function(){return a}.apply(e,[]))||(t.exports=l)}()}},e={};function l(o){var a=e[o];if(void 0!==a)return a.exports;var n=e[o]={exports:{}};return t[o](n,n.exports,l),n.exports}l.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return l.d(e,{a:e}),e},l.d=(t,e)=>{for(var o in e)l.o(e,o)&&!l.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},l.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;if(!t)throw new Error("A selector argument is required for the qs function");return e.querySelector(t)}function e(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;if(!t)throw new Error("A selector argument is required for the qsa function");return[...e.querySelectorAll(t)]}const o=()=>{setTimeout((function(){if(!t("body").classList.contains("wp-customizer"))return;const e=t("#sub-accordion-section-custom_css"),l=t("h3 .customize-action",e);null!==e&&null!==l&&null!==window.site.customBodyClass&&""!==window.site.customBodyClass&&(l.innerHTML=`Custom class: <strong>body.custom-${window.site.customBodyClass}</strong>`)}),0)};"complete"===document.readyState?o():document.addEventListener("DOMContentLoaded",o);const a=()=>{setTimeout((function(){const e=t("body");if(e.classList.contains("wp-admin"))return;const l=e.classList.contains("home"),o=t(".bcgov-site-header"),a=t(".wp-block-site-logo"),n=t("footer"),r=t(".wp-block-post-content"),s=t("#wp-custom-css");null!==s&&(s.innerText=s.innerText.replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"));const c=o.offsetHeight;document.documentElement.style.setProperty("--scroll-padding",c+"px");let i=null;null!==r&&(i=r.firstElementChild);const d=t(".breadcrumb-nav-section");null!==a&&t("img",a).setAttribute("alt","BCGov Logo");let u,m=null;null!==o&&(u=t(".is-style-takeover-menu",o),m=t("nav",o)),null!==window.site.siteName&&""!==window.site.siteName&&void 0!==window.site.siteName?e.classList.add(window.site.siteName):e.classList.add("bcgov"),null!==window.site.headerEffect&&null!==u?e.classList.add(`header-${window.site.headerEffect}`):e.classList.add("header-scroll"),null!==window.site.customBodyClass&&""!==window.site.customBodyClass&&e.classList.add(`custom-${window.site.customBodyClass}`),null!==i&&i.className.split(" ").some((t=>/.*banner.*/.test(t)))&&!i.className.split(" ").some((t=>/.*in-page.*/.test(t)))&&null!==d&&(i.parentNode.insertBefore(d,i.nextSibling),d.classList.add("alignwide"),l&&d.remove()),null===m||"fixed"!==window.site.headerEffect&&"hides"!==window.site.headerEffect||(o.style.position="fixed"),null===u||null!==window.site.headerEffect&&"scroll"!==window.site.headerEffect||(o.style.position="absolute",o.style.overflow="hidden",o.style.transform="none"),null===m&&(e.style.paddingTop=0);const p=document.createElement("a");p.setAttribute("class","back-to-top"),p.setAttribute("alt","Back to top"),p.setAttribute("title","Back to top"),p.setAttribute("tabindex","0"),p.setAttribute("aria-label","Click to go back to the top of the page"),p.setAttribute("href","#top"),p.setAttribute("role","button"),null!==n&&n.append(p);const b=document.createElement("img");b.setAttribute("class","back-to-top-icon"),b.setAttribute("alt","back to top icon"),b.setAttribute("src",window.site.templateDir+"/assets/images/back-to-top.png"),p.append(b);let g=0;const w=()=>{const t=window.innerHeight,e=document.body.clientWidth;e>t?(document.body.classList.remove("portrait"),document.body.classList.add("landscape")):(document.body.classList.remove("landscape"),document.body.classList.add("portrait")),e<=782?(document.body.classList.remove("largeScreen"),document.body.classList.remove("tablet"),document.body.classList.add("mobile")):e<=1199?(document.body.classList.remove("mobile"),document.body.classList.add("tablet"),document.body.classList.remove("largeScreen")):(document.body.classList.remove("mobile"),document.body.classList.remove("tablet"),document.body.classList.add("largeScreen"))};window.addEventListener("resize",w),window.addEventListener("scroll",(()=>{const e=t(".back-to-top");if(null!==e&&(window.pageYOffset+window.innerHeight>document.body.offsetHeight-1e3?(e.style.display="block",e.style.opacity="0.75"):(e.style.display="none",e.style.opacity="0")),null!==m&&"hides"===window.site.headerEffect){const t=window.pageYOffset||document.documentElement.scrollTop;t<g?t>100&&(o.style.opacity="1",o.style.transform="translateY(0%)"):t>100&&(o.style.opacity="0",o.style.transform="translateY(-100%)"),g=t<=0?0:t}})),window.addEventListener("load",(()=>{w()}))}),0)};"complete"===document.readyState?a():document.addEventListener("DOMContentLoaded",a);const n=()=>{("cleanbc"===window.site.siteName||window.site.allSiteStyles.length)&&setTimeout((function(){const l=e("a.icon");l.length&&l.forEach((t=>{null===t.getAttribute("href")&&(t.setAttribute("tabindex","-1"),t.style.pointerEvents="none")}));const o=e(".wp-block-button.is-style-icon");o.length&&o.forEach((e=>{const l=t("a",e);null===l||e.classList.contains("has-size-large")||(l.style.outlineOffset="1rem")})),window.addEventListener("scroll",(()=>{}))}),0)};function r(){return r=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var l=arguments[e];for(var o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o])}return t},r.apply(this,arguments)}"complete"===document.readyState?n():document.addEventListener("DOMContentLoaded",n);const s=window.wp.element;var c=l(184),i=l.n(c);const{__}=wp.i18n,d=[{label:__("None","bcgov-block-theme"),value:""},{label:__("Default","bcgov-block-theme"),value:"default"},{label:__("Home","bcgov-block-theme"),value:"home"},{label:__("Auto","bcgov-block-theme"),value:"auto"},{label:__("Book","bcgov-block-theme"),value:"book"},{label:__("Calendar","bcgov-block-theme"),value:"calendar"},{label:__("Case","bcgov-block-theme"),value:"case"},{label:__("Changes","bcgov-block-theme"),value:"changes"},{label:__("Federal","bcgov-block-theme"),value:"federal"},{label:__("Gear","bcgov-block-theme"),value:"gear"},{label:__("Group","bcgov-block-theme"),value:"group"},{label:__("Leaf","bcgov-block-theme"),value:"leaf"},{label:__("Map","bcgov-block-theme"),value:"map"},{label:__("Tag","bcgov-block-theme"),value:"tag"}],u=window.lodash,{registerBlockStyle:m,unregisterBlockStyle:p}=wp.blocks,{__:b}=wp.i18n,{addFilter:g}=wp.hooks,{createHigherOrderComponent:w}=wp.compose,{Fragment:h}=wp.element,{InspectorControls:f}=wp.blockEditor,{PanelBody:v,SelectControl:k,TextControl:E}=wp.components;[{name:"fill",label:"BCGov",default:"is-bcgov-fill"},{name:"outline",label:"Outline"},{name:"underline",label:"Underline"}].forEach((t=>m("core/button",t))),("cleanbc"===window.site.siteName||window.site.allSiteStyles.length)&&m("core/button",{name:"icon",label:"Icon"}),wp.domReady((()=>{p("core/button","default")})),g("blocks.registerBlockType","bcgov-block-theme/button-block/add-attributes",(function(t,e){return"core/button"===e?(0,u.assign)({},t,{attributes:(0,u.merge)(t.attributes,{size:{type:"string",default:"regular"},svgIcon:{type:"string",default:""},iconsList:{type:"array",default:d},clickFlag:{type:"boolean",default:!1},label:{type:"string",default:""}})}):t})),g("editor.BlockEdit","bcgov-block-theme/button-block/add-inspector-controls",w((t=>e=>{const{size:l,svgIcon:o,iconsList:a,clickFlag:n,label:r}=e.attributes,{setAttributes:c}=e,{name:i}=e;return"core/button"!==i?(0,s.createElement)(t,e):(0,s.createElement)(h,null,(0,s.createElement)(t,e),(0,s.createElement)(f,null,(0,s.createElement)(v,{title:b("Icon options","bcgov-block-theme"),initialOpen:!1},n?(0,s.createElement)(k,{label:b("Icon","bcgov-block-theme"),value:o,options:a,onChange:t=>{c({svgIcon:t})}}):(0,s.createElement)(h,null,(0,s.createElement)("h3",null,"Instructions (for CleanBC only):"),(0,s.createElement)("p",null,"To change the colour of an icon use the Color ▶ Background setting below."),(0,s.createElement)("p",null,"Note that the"," ",(0,s.createElement)("em",null,"icon color change will only work with the Theme palette")," ","of colours."),(0,s.createElement)("p",null,(0,s.createElement)("strong",null,"Enable the Icon style")," ","button to use list of icon options."),(0,s.createElement)("button",{onClick:()=>{c({clickFlag:!0})}},"Show icons"))),(0,s.createElement)(v,{title:"Size options",initialOpen:!0},(0,s.createElement)(k,{label:"Size",value:l,options:[{label:b("Default","bcgov-block-theme"),value:"regular"},{label:b("Large","bcgov-block-theme"),value:"large"}],onChange:t=>{c({size:t})}})),(0,s.createElement)(v,{title:"Accessibility",initialOpen:!1},(0,s.createElement)(E,{label:"ARIA Label",value:r,onChange:t=>c({label:t})}))))}),"withInspectorControl")),g("editor.BlockListBlock","bcgov-block-theme/button-block/add-classes-to-editor",w((t=>e=>{const{attributes:{size:l,svgIcon:o},className:a,name:n}=e;return"core/button"!==n?(0,s.createElement)(t,e):(0,s.createElement)(t,r({},e,{className:i()(a,{[l]:l,[o]:o})}))}),"addClassesToEditor")),l(274),l(644),l(455);const{registerBlockStyle:y}=wp.blocks,{addFilter:C}=wp.hooks,{createHigherOrderComponent:x}=wp.compose,{Fragment:B}=wp.element,{InspectorControls:L}=wp.blockEditor,{PanelBody:I,PanelRow:S,CheckboxControl:A,TextControl:N,RangeControl:$}=wp.components;[{name:"dropshadow",label:"Drop shadow"},{name:"variable-ratio",label:"Variable ratio",description:"Image ratio changes between desktop/tablet and mobile. Image displays at 1:1 ratio on large screens and 2:1 ratio (wider than it is high) on mobile screens."},{name:"abs-img",label:"Positioned",description:"Sets the position of the image to absolute. Requires adding styles to position the image as needed."}].forEach((t=>y("core/image",t))),C("blocks.registerBlockType","bcgov-block-theme/image/add-attributes",(function(t,e){return"core/image"===e?(0,u.assign)({},t,{attributes:(0,u.merge)(t.attributes,{title:{type:"string",default:""},printMode:{type:"boolean",default:!1},printWidth:{type:"number",default:25}})}):t})),C("editor.BlockEdit","bcgov-block-theme/image/add-inspector-controls",x((t=>e=>{const{title:l,printMode:o,printWidth:a}=e.attributes,{setAttributes:n}=e,{name:r}=e;return"core/image"!==r?(0,s.createElement)(t,e):(0,s.createElement)(B,null,(0,s.createElement)(t,e),(0,s.createElement)(L,null,(0,s.createElement)(I,{title:"Other Media Settings",initialOpen:!1},(0,s.createElement)(S,null,(0,s.createElement)(N,{label:"Title (hover details)",value:l,onChange:t=>n({title:t})})),(0,s.createElement)(S,null,(0,s.createElement)(A,{label:"Show image when printing",checked:o,onChange:t=>n({printMode:t})})),(0,s.createElement)(S,null,(0,s.createElement)($,{label:"Max width on printed page (%)",value:a,onChange:t=>n({printWidth:t}),min:10,max:100,separatorType:"fullWidth"})))))}),"withInspectorControl"));const{registerBlockStyle:T}=wp.blocks,{addFilter:_}=wp.hooks,{createHigherOrderComponent:O}=wp.compose,{Fragment:P}=wp.element,{InspectorControls:z}=wp.blockEditor,{PanelBody:M,PanelRow:D,CheckboxControl:q,TextControl:F,RangeControl:R}=wp.components;[{name:"dropshadow",label:"Drop shadow"},{name:"square",label:"Square"},{name:"no-clip",label:"Full Image"}].forEach((t=>{T("core/media-text",t)})),_("blocks.registerBlockType","bcgov-block-theme/media-text/add-attributes",(function(t,e){return"core/media-text"===e?(0,u.assign)({},t,{attributes:(0,u.merge)(t.attributes,{title:{type:"string",default:""},printMode:{type:"boolean",default:!1},printWidth:{type:"number",default:25}})}):t})),_("editor.BlockEdit","bcgov-block-theme/media-text/add-inspector-controls",O((t=>e=>{const{title:l,printMode:o,printWidth:a}=e.attributes,{setAttributes:n}=e,{name:r}=e;return"core/media-text"!==r?(0,s.createElement)(t,e):(0,s.createElement)(P,null,(0,s.createElement)(t,e),(0,s.createElement)(z,null,(0,s.createElement)(M,{title:"Other Media Settings",initialOpen:!1},(0,s.createElement)(D,null,(0,s.createElement)(F,{label:"Title (hover details)",value:l,onChange:t=>n({title:t})})),(0,s.createElement)(D,null,(0,s.createElement)(q,{label:"Show image when printing",checked:o,onChange:t=>n({printMode:t})})),(0,s.createElement)(D,null,(0,s.createElement)(R,{label:"Max width on printed page (%)",value:a,onChange:t=>n({printWidth:t}),min:10,max:100,separatorType:"fullWidth"})))))}),"withInspectorControl")),l(680),l(205);const{addFilter:j}=wp.hooks,{createHigherOrderComponent:H}=wp.compose,{Fragment:W}=wp.element,{InspectorControls:G}=wp.blockEditor,{PanelBody:Y,PanelRow:J,CheckboxControl:U}=wp.components;j("blocks.registerBlockType","bcgov-block-theme/site-logo/add-attributes",(function(t,e){return"core/site-logo"===e?(0,u.assign)({},t,{attributes:(0,u.merge)(t.attributes,{inverted:{type:"boolean",default:!1}})}):t})),j("editor.BlockEdit","bcgov-block-theme/site-logo/add-inspector-controls",H((t=>e=>{const{inverted:l}=e.attributes,{setAttributes:o}=e,{name:a}=e;return"core/site-logo"!==a?(0,s.createElement)(t,e):(0,s.createElement)(W,null,(0,s.createElement)(t,e),(0,s.createElement)(G,null,(0,s.createElement)(Y,{title:"Other Media Settings",initialOpen:!1},(0,s.createElement)(J,null,(0,s.createElement)(U,{label:"Set dark background for print",checked:l,onChange:t=>o({inverted:t})})))))}),"withInspectorControl")),l(548);const V=window.wp.i18n,K=window.wp.blocks,Q=window.wp.blockEditor,X=window.wp.components,Z=window.wp.compose,tt={backgroundColor:{type:"string",default:"transparent"},firstBreakColumns:{type:"integer",default:3},cardId:{type:"string",default:""}},et=[{attributes:tt,save:t=>{const{attributes:{cardId:e,backgroundColor:l,firstBreakColumns:o,firstBreak:a,secondBreakColumns:n,secondBreak:r},className:c}=t;return(0,s.createElement)("div",null,(0,s.createElement)("style",{jsx:!0},`\n\t\t\t\t\t\t\t#${e} {\n\t\t\t\t\t\t\t\tbackground-color: ${l};\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t@media ( min-width: ${r}px ) {\n\t\t\t\t\t\t\t\tul#${e} {\n\t\t\t\t\t\t\t\t\t-webkit-flex-direction: row;\n\t\t\t\t\t\t\t\t\t-moz-flex-direction: row;\n\t\t\t\t\t\t\t\t\t-ms-flex-direction: row;\n\t\t\t\t\t\t\t\t\tflex-direction: row;\n\t\t\t\t\t\t\t\t\t-webkit-flex-wrap: wrap;\n\t\t\t\t\t\t\t\t\t-moz-flex-wrap: wrap;\n\t\t\t\t\t\t\t\t\t-ms-flex-wrap: wrap;\n\t\t\t\t\t\t\t\t\tflex-wrap: wrap;\n\t\t\t\t\t\t\t\t\tflex-wrap: wrap;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tul#${e} > li {\n\t\t\t\t\t\t\t\t\twidth: ${100/n-2}%;\n\t\t\t\t\t\t\t\t\tmargin: 1%;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t@media ( min-width: ${a}px ) {\n\t\t\t\t\t\t\t\tul#${e} {\n\t\t\t\t\t\t\t\t\t-webkit-flex-direction: row;\n\t\t\t\t\t\t\t\t\t-moz-flex-direction: row;\n\t\t\t\t\t\t\t\t\t-ms-flex-direction: row;\n\t\t\t\t\t\t\t\t\tflex-direction: row;\n\t\t\t\t\t\t\t\t\t-webkit-flex-wrap: wrap;\n\t\t\t\t\t\t\t\t\t-moz-flex-wrap: wrap;\n\t\t\t\t\t\t\t\t\t-ms-flex-wrap: wrap;\n\t\t\t\t\t\t\t\t\tflex-wrap: wrap;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tul#${e} > li {\n\t\t\t\t\t\t\t\t\twidth: ${100/o-2}%;\n\t\t\t\t\t\t\t\t\tmargin: 1%;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t`),(0,s.createElement)("ul",{className:c,id:e},(0,s.createElement)(Q.InnerBlocks.Content,null)))}},{attributes:tt,save:t=>{const{attributes:{cardId:e,backgroundColor:l,firstBreakColumns:o,firstBreak:a,secondBreakColumns:n,secondBreak:r},className:c}=t;return(0,s.createElement)("div",{role:"navigation"},(0,s.createElement)("style",{jsx:!0},`\n\t\t\t\t\t\t\t#${e} {\n\t\t\t\t\t\t\t\tbackground-color: ${l};\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t@media ( min-width: ${r}px ) {\n\t\t\t\t\t\t\t\tul#${e} {\n\t\t\t\t\t\t\t\t\t-webkit-flex-direction: row;\n\t\t\t\t\t\t\t\t\t-moz-flex-direction: row;\n\t\t\t\t\t\t\t\t\t-ms-flex-direction: row;\n\t\t\t\t\t\t\t\t\tflex-direction: row;\n\t\t\t\t\t\t\t\t\t-webkit-flex-wrap: wrap;\n\t\t\t\t\t\t\t\t\t-moz-flex-wrap: wrap;\n\t\t\t\t\t\t\t\t\t-ms-flex-wrap: wrap;\n\t\t\t\t\t\t\t\t\tflex-wrap: wrap;\n\t\t\t\t\t\t\t\t\tflex-wrap: wrap;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tul#${e} > li {\n\t\t\t\t\t\t\t\t\twidth: ${100/n-2}%;\n\t\t\t\t\t\t\t\t\tmargin: 1%;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t@media ( min-width: ${a}px ) {\n\t\t\t\t\t\t\t\tul#${e} {\n\t\t\t\t\t\t\t\t\t-webkit-flex-direction: row;\n\t\t\t\t\t\t\t\t\t-moz-flex-direction: row;\n\t\t\t\t\t\t\t\t\t-ms-flex-direction: row;\n\t\t\t\t\t\t\t\t\tflex-direction: row;\n\t\t\t\t\t\t\t\t\t-webkit-flex-wrap: wrap;\n\t\t\t\t\t\t\t\t\t-moz-flex-wrap: wrap;\n\t\t\t\t\t\t\t\t\t-ms-flex-wrap: wrap;\n\t\t\t\t\t\t\t\t\tflex-wrap: wrap;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tul#${e} > li {\n\t\t\t\t\t\t\t\t\twidth: ${100/o-2}%;\n\t\t\t\t\t\t\t\t\tmargin: 1%;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t`),(0,s.createElement)("ul",{className:c,id:e},(0,s.createElement)(Q.InnerBlocks.Content,null)))}},{attributes:tt,save:t=>{const{attributes:{cardId:e},className:l}=t;return(0,s.createElement)("ul",{className:l,id:e},(0,s.createElement)(Q.InnerBlocks.Content,null))}}],lt=[{name:"bcgov-background-light",color:"#f2f2f2"},{name:"bcgov-component",color:"#606060"},{name:"bcgov-text",color:"#313132"},{name:"bcgov-white",color:"#fff"},{name:"bcgov-primary",color:"#036"},{name:"bcgov-link",color:"#1a5a96"},{name:"bcgov-background-blue",color:"#38598a"},{name:"bcgov-yellow",color:"#fcba19"},{name:"bcgov-red",color:"#d8292f"},{name:"bcgov-green",color:"#2e8540"}],ot=(t,e)=>(void 0===t&&(t=e),t),at=t=>{const e=new window.MouseEvent("click",{bubbles:!0,cancelable:!0,view:window});t.dispatchEvent(e)};function nt(){const t=this.getAttribute("data-target");if(void 0===t)return;const e=document.querySelectorAll(`${t} .collapse-header button`),l=document.querySelectorAll(`${t} .collapse`);this.classList.contains("collapse-expand-all")&&(e.forEach((t=>{t.classList.remove("collapsed"),t.setAttribute("aria-expanded",!0)})),l.forEach((t=>{t.classList.remove("collapse"),t.classList.add("collapsing"),t.classList.remove("hide"),t.classList.add("show"),setTimeout((function(){t.classList.add("collapse"),t.classList.remove("collapsing")}),300)}))),this.classList.contains("collapse-collapse-all")&&(e.forEach((t=>{t.classList.add("collapsed"),t.setAttribute("aria-expanded",!1)})),l.forEach((t=>{t.classList.remove("collapse"),t.classList.add("collapsing"),t.classList.remove("show"),t.classList.add("hide"),setTimeout((function(){t.classList.add("collapse"),t.classList.remove("collapsing")}),300)})))}function rt(){if(void 0===this.getAttribute("data-target"))return;const t=this,e=t.closest(".wp-block-bcgov-block-theme-collapse-item").querySelector(".collapse-container");e.classList.remove("collapse"),e.classList.add("collapsing"),t.setAttribute("aria-expanded","true"===t.getAttribute("aria-expanded")?"false":"true"),"true"===t.getAttribute("aria-expanded")?(t.classList.remove("collapsed"),e.classList.remove("hide"),e.classList.add("show")):(t.classList.add("collapsed"),e.classList.add("hide"),e.classList.remove("show")),setTimeout((function(){e.classList.add("collapse"),e.classList.remove("collapsing")}),300)}function st(){const t=this.getAttribute("data-target");if(void 0===t)return;const e=document.querySelector(`.collapse-header button[data-target="${t}"]`);at(e)}(0,K.registerBlockType)("bcgov/card-container",{title:(0,V.__)("Basic Card Container","basic-card-container"),icon:"images-alt",category:"media",attributes:tt,getEditWrapperProps:()=>({"data-align":"wide"}),supports:{align:!0},example:{},edit:t=>{const{attributes:{cardId:e,backgroundColor:l,firstBreakColumns:o},className:a,clientId:n}=t;t.setAttributes({cardId:`card-container-${n}`});const r=(0,Z.withState)({column:o})((e=>{let{column:l,setState:o}=e;return(0,s.createElement)(X.RangeControl,{label:(0,V.__)("Columns"),value:l,initialPosition:"3",onChange:e=>{t.setAttributes({firstBreakColumns:e}),o({column:l})},min:1,max:6})}));return(0,s.createElement)("ul",{className:a,style:{backgroundColor:l},id:e},(0,s.createElement)(Q.InspectorControls,null,(0,s.createElement)(X.PanelBody,{title:(0,V.__)("Background Colour")},(0,s.createElement)(X.ColorPalette,{colors:lt,value:l,onChange:e=>{t.setAttributes({backgroundColor:ot(e,"transparent")})}})),(0,s.createElement)(X.PanelBody,{title:(0,V.__)("Desktop Columns")},(0,s.createElement)(r,null))),(0,s.createElement)(Q.InnerBlocks,{allowedBlocks:["bcgov/card","bcgov/fancy-button"]}))},deprecated:et,save:t=>{const{attributes:{cardId:e,backgroundColor:l,firstBreakColumns:o},className:a}=t;return(0,s.createElement)("ul",{className:`${a} lg-break-${o}`,id:e,style:{backgroundColor:l}},(0,s.createElement)(Q.InnerBlocks.Content,null))}}),(0,K.registerBlockType)("bcgov/card",{title:(0,V.__)("Basic Card","basic-card"),icon:"format-image",category:"media",attributes:{title:{type:"array",source:"children",selector:".card-block-title"},content:{type:"array",source:"children",selector:".card-block-content"},alignment:{type:"string",default:"none"},color:{type:"string",default:"inherit"},backgroundColor:{type:"string",default:"transparent"}},example:{},edit:t=>{const{attributes:{alignment:e,color:l,backgroundColor:o},className:a}=t;return(0,s.createElement)("li",{className:`align-${e} ${a}`,style:{backgroundColor:o,color:l}},(0,s.createElement)(Q.BlockControls,null,(0,s.createElement)(Q.AlignmentToolbar,{value:e,onChange:e=>{t.setAttributes({alignment:ot(e,"none")})}})),(0,s.createElement)(Q.InspectorControls,null,(0,s.createElement)(X.PanelBody,{title:(0,V.__)("Colour")},(0,s.createElement)(X.ColorPalette,{colors:lt,value:l,onChange:e=>{t.setAttributes({color:ot(e,"transparent")})}})),(0,s.createElement)(X.PanelBody,{title:(0,V.__)("Background Colour")},(0,s.createElement)(X.ColorPalette,{colors:lt,value:o,onChange:e=>{t.setAttributes({backgroundColor:ot(e,"transparent")})}}))),(0,s.createElement)(Q.InnerBlocks,{allowedBlocks:["core/heading","core/paragraph","core/image","core/html","core/button"]}))},save:t=>{const{attributes:{alignment:e,backgroundColor:l,color:o}}=t;return(0,s.createElement)("li",{className:`align-${e}`,style:{backgroundColor:l,color:o}},(0,s.createElement)(Q.InnerBlocks.Content,null))}});const ct=()=>{setTimeout((function(){const t=document.querySelectorAll(".collapse-container-nav button"),e=document.querySelectorAll(".collapse-header button"),l=document.querySelectorAll(".collapse-close a"),o=document.querySelector(".collapse-collapse-all");t.length&&(t.forEach((t=>{t.addEventListener("click",nt)})),e.forEach((t=>{t.addEventListener("click",rt)})),l.forEach((t=>{t.addEventListener("click",st)})),at(o),at(e[0]))}),0)};"complete"===document.readyState?ct():document.addEventListener("DOMContentLoaded",ct),(0,K.registerBlockType)("bcgov-block-theme/collapse",{title:(0,V.__)("Collapse Container","bcgov-blocks"),icon:"admin-page",category:"layout",attributes:{collapseId:{type:"string",default:""}},supports:{align:["wide"]},example:{},edit:t=>{const{attributes:{collapseId:e},className:l,clientId:o}=t;return t.setAttributes({collapseId:`collapse-container-${o}`}),(0,s.createElement)("div",{className:l,id:e},(0,s.createElement)(Q.InnerBlocks,{allowedBlocks:["bcgov-block-theme/collapse-item"]}))},save:t=>{const{attributes:{collapseId:e}}=t;return(0,s.createElement)("div",{id:e},(0,s.createElement)("div",{className:"collapse-container-nav"},(0,s.createElement)("span",null,(0,s.createElement)("button",{"data-target":`#${e}`,className:"collapse-expand-all"},(0,V.__)("Expand all"))),(0,s.createElement)("span",null,(0,s.createElement)("button",{"data-target":`#${e}`,className:"collapse-collapse-all"},(0,V.__)("Collapse all")))),(0,s.createElement)(Q.InnerBlocks.Content,null))}}),(0,K.registerBlockType)("bcgov-block-theme/collapse-item",{title:(0,V.__)("Collapse Item","bcgov-blocks"),icon:"welcome-add-page",category:"layout",attributes:{title:{type:"string",selector:".bcgov-collapse-title"},itemId:{type:"string",default:""},headingId:{type:"string",default:""}},example:{},edit:t=>{const{attributes:{title:e,itemId:l,headingId:o},className:a,clientId:n}=t;return t.setAttributes({itemId:`collapse-item-${n}`}),t.setAttributes({headingId:`heading-${n}`}),(0,s.createElement)("div",{className:a},(0,s.createElement)("div",{className:"collapse-header",id:o},(0,s.createElement)("h3",null,(0,s.createElement)("button",{"data-toggle":"collapse","data-target":`#${l}`,"aria-expanded":"false","aria-controls":l,className:"collapsed"},(0,s.createElement)(Q.RichText,{tagName:"span",onChange:e=>{t.setAttributes({title:e})},className:"collapse-title",value:e,placeholder:(0,V.__)("…Title")})))),(0,s.createElement)("div",{className:"collapse collapse-container",id:l},(0,s.createElement)("div",{className:"collapse-body"},(0,s.createElement)(Q.InnerBlocks,null))))},save:t=>{const{attributes:{title:e,itemId:l,headingId:o}}=t;return(0,s.createElement)("div",null,(0,s.createElement)("div",{className:"collapse-header",id:o},(0,s.createElement)("h3",null,(0,s.createElement)("button",{"data-toggle":"collapse","data-target":`#${l}`,"aria-expanded":"false","aria-controls":l,className:"collapsed"},(0,s.createElement)(Q.RichText.Content,{tagName:"span",className:"collapse-title",value:e})))),(0,s.createElement)("div",{className:"collapse collapse-container",id:l},(0,s.createElement)("div",{className:"collapse-body"},(0,s.createElement)(Q.InnerBlocks.Content,null),(0,s.createElement)("div",{className:"collapse-close"},(0,s.createElement)("a",{"data-toggle":"collapse","data-target":`#${l}`,href:`#${l}`,role:"button","aria-expanded":"true","aria-controls":l},(0,V.__)("Collapse"))))))}})})()})();