(()=>{var t={644:()=>{const{registerBlockStyle:t}=wp.blocks;t("core/column",{name:"dropshadow",label:"Drop shadow"})},455:()=>{const{registerBlockStyle:t}=wp.blocks;t("core/heading",[{name:"default",label:"Default",isDefault:!0},{name:"custom",label:"Custom Sizes"}])},989:()=>{const{registerBlockStyle:t}=wp.blocks;t("core/media-text",{name:"dropshadow",label:"Drop shadow"})},205:()=>{const{registerBlockStyle:t}=wp.blocks;t("core/paragraph",[{name:"default",label:"Default",isDefault:!0},{name:"custom",label:"Custom Sizes"}])},548:()=>{const{registerBlockStyle:t}=wp.blocks;t("core/query",[{name:"dropshadow",label:"Drop shadow",isDefault:!0},{name:"default",label:"No Shadow"}])},961:()=>{const t=()=>{function t(t){let e=!1,r="";if(t.classList.forEach((t=>{t.includes("-background-color")&&(e=!0,r=t)})),e||""===t.style.backgroundColor){const t=r.replace("has-","").replace("-background-color","");document.documentElement.style.setProperty("--landing-cover-banner-bg","var(--"+t+"-rgb)")}else document.documentElement.style.setProperty("--landing-cover-banner-bg",t.style.backgroundColor.replace(/\brgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/g,(function(t,e,r,n){return Number(e)+","+Number(r)+","+Number(n)})))}setTimeout((function(){const e=document.querySelector(".landing-cover-banner").querySelector(".wp-block-cover__background");t(e),new window.MutationObserver((function(){t(e)})).observe(e,{attributeFilter:["class","style"]})}),0)};"complete"===document.readyState?t():document.addEventListener("DOMContentLoaded",t)},184:(t,e)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var l=typeof r;if("string"===l||"number"===l)t.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&t.push(a)}}else if("object"===l)if(r.toString===Object.prototype.toString)for(var c in r)n.call(r,c)&&r[c]&&t.push(c);else t.push(r.toString())}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},819:t=>{"use strict";t.exports=window.lodash}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var l=e[n]={exports:{}};return t[n](l,l.exports,r),l.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(){return t=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},t.apply(this,arguments)}const e=window.wp.element;var n=r(184),o=r.n(n);const{assign:l,merge:a}=r(819),{registerBlockStyle:c,unregisterBlockStyle:s}=wp.blocks,{__}=wp.i18n,{addFilter:i}=wp.hooks,{createHigherOrderComponent:u}=wp.compose,{Fragment:d}=wp.element,{InspectorControls:m}=wp.blockEditor,{PanelBody:b,SelectControl:p}=wp.components;c("core/button",{name:"fill",label:"BCGov Fill",default:"is-bcgov-fill"}),c("core/button",{name:"outline",label:"BCGov Outline"}),wp.domReady((()=>{s("core/button","default")})),i("blocks.registerBlockType","bcgov-block-theme/button-block/add-attributes",(function(t,e){return"core/button"===e?l({},t,{attributes:a(t.attributes,{size:{type:"string",default:"regular"}})}):t})),i("editor.BlockEdit","bcgov-block-theme/button-block/add-inspector-controls",u((t=>r=>{const{attributes:{size:n},setAttributes:o,name:l}=r;return"core/button"!==l?(0,e.createElement)(t,r):(0,e.createElement)(d,null,(0,e.createElement)(t,r),(0,e.createElement)(m,null,(0,e.createElement)(b,{title:__("Size options","bcgov-block-theme"),initialOpen:!0},(0,e.createElement)(p,{label:__("Size","bcgov-block-theme"),value:n,options:[{label:__("Default","bcgov-block-theme"),value:"regular"},{label:__("Large","bcgov-block-theme"),value:"large"}],onChange:t=>{o({size:t})}}))))}),"withInspectorControl")),i("editor.BlockListBlock","bcgov-block-theme/button-block/add-editor-class",u((r=>n=>{const{attributes:{size:l},className:a,name:c}=n;return"core/button"!==c?(0,e.createElement)(r,n):(0,e.createElement)(r,t({},n,{className:o()(a,l?`has-size-${l}`:"")}))}),"withClientIdClassName")),r(644),r(455),r(989),r(205),r(548);const g=window.wp.i18n,w=window.wp.blocks,f=window.wp.blockEditor,k=window.wp.components,v=window.wp.compose,y={backgroundColor:{type:"string",default:"transparent"},firstBreakColumns:{type:"integer",default:3},cardId:{type:"string",default:""}},C=[{attributes:y,save:t=>{const{attributes:{cardId:r,backgroundColor:n,firstBreakColumns:o,firstBreak:l,secondBreakColumns:a,secondBreak:c},className:s}=t;return(0,e.createElement)("div",null,(0,e.createElement)("style",{jsx:!0},`\n\t\t\t\t\t\t\t#${r} {\n\t\t\t\t\t\t\t\tbackground-color: ${n};\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t@media (min-width: ${c}px) {\n\t\t\t\t\t\t\t\tul#${r} {\n\t\t\t\t\t\t\t\t\t-webkit-flex-direction: row;\n\t\t\t\t\t\t\t\t\t-moz-flex-direction: row;\n\t\t\t\t\t\t\t\t\t-ms-flex-direction: row;\n\t\t\t\t\t\t\t\t\tflex-direction: row;\n\t\t\t\t\t\t\t\t\t-webkit-flex-wrap: wrap;\n\t\t\t\t\t\t\t\t\t-moz-flex-wrap: wrap;\n\t\t\t\t\t\t\t\t\t-ms-flex-wrap: wrap;\n\t\t\t\t\t\t\t\t\tflex-wrap: wrap;\n\t\t\t\t\t\t\t\t\tflex-wrap: wrap;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tul#${r} > li {\n\t\t\t\t\t\t\t\t\twidth: ${100/a-2}%;\n\t\t\t\t\t\t\t\t\tmargin: 1%;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t@media (min-width: ${l}px) {\n\t\t\t\t\t\t\t\tul#${r} {\n\t\t\t\t\t\t\t\t\t-webkit-flex-direction: row;\n\t\t\t\t\t\t\t\t\t-moz-flex-direction: row;\n\t\t\t\t\t\t\t\t\t-ms-flex-direction: row;\n\t\t\t\t\t\t\t\t\tflex-direction: row;\n\t\t\t\t\t\t\t\t\t-webkit-flex-wrap: wrap;\n\t\t\t\t\t\t\t\t\t-moz-flex-wrap: wrap;\n\t\t\t\t\t\t\t\t\t-ms-flex-wrap: wrap;\n\t\t\t\t\t\t\t\t\tflex-wrap: wrap;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tul#${r} > li {\n\t\t\t\t\t\t\t\t\twidth: ${100/o-2}%;\n\t\t\t\t\t\t\t\t\tmargin: 1%;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t`),(0,e.createElement)("ul",{className:s,id:r},(0,e.createElement)(f.InnerBlocks.Content,null)))}},{attributes:y,save:t=>{const{attributes:{cardId:r,backgroundColor:n,firstBreakColumns:o,firstBreak:l,secondBreakColumns:a,secondBreak:c},className:s}=t;return(0,e.createElement)("div",{role:"navigation"},(0,e.createElement)("style",{jsx:!0},`\n\t\t\t\t\t\t\t#${r} {\n\t\t\t\t\t\t\t\tbackground-color: ${n};\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t@media (min-width: ${c}px) {\n\t\t\t\t\t\t\t\tul#${r} {\n\t\t\t\t\t\t\t\t\t-webkit-flex-direction: row;\n\t\t\t\t\t\t\t\t\t-moz-flex-direction: row;\n\t\t\t\t\t\t\t\t\t-ms-flex-direction: row;\n\t\t\t\t\t\t\t\t\tflex-direction: row;\n\t\t\t\t\t\t\t\t\t-webkit-flex-wrap: wrap;\n\t\t\t\t\t\t\t\t\t-moz-flex-wrap: wrap;\n\t\t\t\t\t\t\t\t\t-ms-flex-wrap: wrap;\n\t\t\t\t\t\t\t\t\tflex-wrap: wrap;\n\t\t\t\t\t\t\t\t\tflex-wrap: wrap;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tul#${r} > li {\n\t\t\t\t\t\t\t\t\twidth: ${100/a-2}%;\n\t\t\t\t\t\t\t\t\tmargin: 1%;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t@media (min-width: ${l}px) {\n\t\t\t\t\t\t\t\tul#${r} {\n\t\t\t\t\t\t\t\t\t-webkit-flex-direction: row;\n\t\t\t\t\t\t\t\t\t-moz-flex-direction: row;\n\t\t\t\t\t\t\t\t\t-ms-flex-direction: row;\n\t\t\t\t\t\t\t\t\tflex-direction: row;\n\t\t\t\t\t\t\t\t\t-webkit-flex-wrap: wrap;\n\t\t\t\t\t\t\t\t\t-moz-flex-wrap: wrap;\n\t\t\t\t\t\t\t\t\t-ms-flex-wrap: wrap;\n\t\t\t\t\t\t\t\t\tflex-wrap: wrap;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tul#${r} > li {\n\t\t\t\t\t\t\t\t\twidth: ${100/o-2}%;\n\t\t\t\t\t\t\t\t\tmargin: 1%;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t`),(0,e.createElement)("ul",{className:s,id:r},(0,e.createElement)(f.InnerBlocks.Content,null)))}},{attributes:y,save:t=>{const{attributes:{cardId:r},className:n}=t;return(0,e.createElement)("ul",{className:n,id:r},(0,e.createElement)(f.InnerBlocks.Content,null))}}],h=[{name:"bcgov-background-light",color:"#f2f2f2"},{name:"bcgov-component",color:"#606060"},{name:"bcgov-text",color:"#313132"},{name:"bcgov-white",color:"#fff"},{name:"bcgov-primary",color:"#036"},{name:"bcgov-link",color:"#1a5a96"},{name:"bcgov-background-blue",color:"#38598a"},{name:"bcgov-yellow",color:"#fcba19"},{name:"bcgov-red",color:"#d8292f"},{name:"bcgov-green",color:"#2e8540"}],x=(t,e)=>(void 0===t&&(t=e),t);(0,w.registerBlockType)("bcgov/card-container",{title:(0,g.__)("Basic Card Container","basic-card-container"),icon:"images-alt",category:"media",attributes:y,getEditWrapperProps:()=>({"data-align":"wide"}),supports:{align:!0},example:{},edit:t=>{const{attributes:{cardId:r,backgroundColor:n,firstBreakColumns:o},className:l,clientId:a}=t;t.setAttributes({cardId:`card-container-${a}`});const c=(0,v.withState)({column:o})((r=>{let{column:n,setState:o}=r;return(0,e.createElement)(k.RangeControl,{label:(0,g.__)("Columns"),value:n,initialPosition:"3",onChange:e=>{t.setAttributes({firstBreakColumns:e}),o({column:n})},min:1,max:6})}));return(0,e.createElement)("ul",{className:l,style:{backgroundColor:n},id:r},(0,e.createElement)(f.InspectorControls,null,(0,e.createElement)(k.PanelBody,{title:(0,g.__)("Background Colour")},(0,e.createElement)(k.ColorPalette,{colors:h,value:n,onChange:e=>{t.setAttributes({backgroundColor:x(e,"transparent")})}})),(0,e.createElement)(k.PanelBody,{title:(0,g.__)("Desktop Columns")},(0,e.createElement)(c,null))),(0,e.createElement)(f.InnerBlocks,{allowedBlocks:["bcgov/card","bcgov/fancy-button"]}))},deprecated:C,save:t=>{const{attributes:{cardId:r,backgroundColor:n,firstBreakColumns:o},className:l}=t;return(0,e.createElement)("ul",{className:`${l} lg-break-${o}`,id:r,style:{backgroundColor:n}},(0,e.createElement)(f.InnerBlocks.Content,null))}}),(0,w.registerBlockType)("bcgov/card",{title:(0,g.__)("Basic Card","basic-card"),icon:"format-image",category:"media",attributes:{title:{type:"array",source:"children",selector:".card-block-title"},content:{type:"array",source:"children",selector:".card-block-content"},alignment:{type:"string",default:"none"},color:{type:"string",default:"inherit"},backgroundColor:{type:"string",default:"transparent"}},example:{},edit:t=>{const{attributes:{alignment:r,color:n,backgroundColor:o},className:l}=t;return(0,e.createElement)("li",{className:`align-${r} ${l}`,style:{backgroundColor:o,color:n}},(0,e.createElement)(f.BlockControls,null,(0,e.createElement)(f.AlignmentToolbar,{value:r,onChange:e=>{t.setAttributes({alignment:x(e,"none")})}})),(0,e.createElement)(f.InspectorControls,null,(0,e.createElement)(k.PanelBody,{title:(0,g.__)("Colour")},(0,e.createElement)(k.ColorPalette,{colors:h,value:n,onChange:e=>{t.setAttributes({color:x(e,"transparent")})}})),(0,e.createElement)(k.PanelBody,{title:(0,g.__)("Background Colour")},(0,e.createElement)(k.ColorPalette,{colors:h,value:o,onChange:e=>{t.setAttributes({backgroundColor:x(e,"transparent")})}}))),(0,e.createElement)(f.InnerBlocks,{allowedBlocks:["core/heading","core/paragraph","core/image","core/html","core/button"]}))},save:t=>{const{attributes:{alignment:r,backgroundColor:n,color:o}}=t;return(0,e.createElement)("li",{className:`align-${r}`,style:{backgroundColor:n,color:o}},(0,e.createElement)(f.InnerBlocks.Content,null))}}),r(961)})()})();