(()=>{var e={177:()=>{const e=()=>{setTimeout((function(){if(document.querySelector("body.learning")){const e=document.querySelector(".podcast-button");if(e){const t=e.querySelector(".value");if(t){e.className="wp-block-button has-size-regular is-style-underline";const n=t.innerText;if(n){const e=document.createElement("a");e.href=n,e.className="wp-block-button__link wp-element-button",e.tabIndex=0,e.innerText="Listen now",t.parentNode.replaceChild(e,t)}}}}}),0)};"complete"===document.readyState?e():document.addEventListener("DOMContentLoaded",e)},628:()=>{const e=()=>{setTimeout((function(){if(document.querySelector(".flex-cards")){const e=document.querySelectorAll(".flex-card");e&&e.forEach((e=>{const t=e.querySelector(".card-title");if(t){const n=t.querySelector("a");if(n){const o=n.getAttribute("href"),s=document.createElement("a");s.href=o,e.parentNode.insertBefore(s,e),s.appendChild(e),t.replaceChild(n.firstChild,n),s.classList.add("card-title-link")}}}))}}),0)};"complete"===document.readyState?e():document.addEventListener("DOMContentLoaded",e)},582:()=>{const e=()=>{setTimeout((function(){if(document.querySelector("body.home")){const e=document.querySelector(".breadcrumb-navigation-container");e&&e.remove();const t=document.querySelectorAll(".get-started-group");t&&t.forEach((e=>{const t=e.querySelector("h3"),n=t.querySelector("a"),o=e.querySelector(".link-label .value");if(n&&o){const e=n.getAttribute("href");for(o.innerHTML=`<a href="${e}" class="wp-block-button__link has-secondary-brand-color has-text-color wp-element-button">${o.innerHTML}</a>`,o.classList.remove("value"),o.classList.add("wp-block-button","has-size-regular","is-style-underline");o.parentNode.classList.length>0;)o.parentNode.classList.remove(o.parentNode.classList.item(0));o.parentNode.classList.add("wp-block-buttons"),t.replaceChild(n.firstChild,n)}}))}}),0)};"complete"===document.readyState?e():document.addEventListener("DOMContentLoaded",e)},403:()=>{const e=()=>{setTimeout((function(){const e=document.querySelector("header .current-menu-item");if(e){let t=e.closest("ul");const n=e.closest("ul").querySelectorAll(".current-menu-ancestor"),o=e.closest("ul").querySelectorAll(".current-menu-item > ul");if(o&&o.forEach((function(e){e.classList.add("current-menu-ancestor")})),t)for(;null!==t&&t.classList.contains("wp-block-navigation__submenu-container");)t.parentNode.classList.add("current-menu-ancestor"),t=t.parentNode.closest("ul");n&&n.forEach((function(e){e.classList.add("current-menu-ancestor")}))}(function(){const e=document.querySelectorAll(".wp-block-navigation__container .wp-block-navigation-item a"),t=[];return e.forEach((e=>{const n=new URL(e.href).pathname.split("/").filter((e=>e));n.length>0&&t.push(n[0])})),t})().forEach((e=>{!function(e){if(function(e){const t=document.querySelectorAll(".aioseo-breadcrumbs .aioseo-breadcrumb a");for(const n of t)if(n.href.includes(e))return!0;return!1}(e)){const t=document.querySelectorAll(`.wp-block-navigation-item a[href*="${e}"]`);if(t&&t.length>0){const e=t[0],n=window.location.href;e.href!==n&&t[t.length-1].classList.add("current-menu-ancestor")}}}(e)}));const t=document.querySelectorAll(".wp-block-navigation__submenu-container .wp-block-navigation__submenu-container ");t&&t.forEach((e=>{const t=e.parentNode,n=document.createElement("li");n.classList.add("headline"),n.textContent=t.firstChild.textContent,e.prepend(n)}))}),0)};"complete"===document.readyState?e():document.addEventListener("DOMContentLoaded",e)},16:()=>{const e=()=>{setTimeout((function(){const e=document.querySelector(".in-page-nav");if(e){const t=Array.from(e.querySelectorAll("a"));let n=!1;if(t){const e=t.map((e=>document.querySelector(e.getAttribute("href"))));if(e){const o=new window.IntersectionObserver((e=>{let o=null;if(e.forEach((e=>{e.isIntersecting&&!o&&(o=e.target)})),o){const e=t.find((e=>e.getAttribute("href")===`#${o.id}`));e&&!n&&(t.forEach((e=>e.parentNode.classList.remove("active"))),e.parentNode.classList.add("active"))}}),{rootMargin:"15% 0% -75% 0%"});e.forEach((e=>{o.observe(e)})),t.forEach((e=>{e.addEventListener("click",(o=>{o.preventDefault(),t.forEach((e=>e.parentNode.classList.remove("active"))),e.parentNode.classList.add("active"),n=!0;const s=document.querySelector(e.getAttribute("href"));s&&(s.scrollIntoView({behavior:"smooth",scrollMarginTop:32}),setTimeout((()=>{s.setAttribute("tabindex","0"),s.focus(),s.removeAttribute("tabindex"),s.style.outline="none"}),1e3)),setTimeout((()=>{n=!1}),1e3)}))}))}t.forEach((e=>e.parentNode.classList.remove("active"))),t[0].parentNode.classList.add("active")}const o=document.querySelector(".sticky");if(o){const e=document.createElement("h2");e.className="mobile-only",e.textContent="On this page",o.insertBefore(e,o.firstChild)}}}),0)};"complete"===document.readyState?e():document.addEventListener("DOMContentLoaded",e)}},t={};function n(o){var s=t[o];if(void 0!==s)return s.exports;var c=t[o]={exports:{}};return e[o](c,c.exports,n),c.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{"use strict";function e(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=document.createElement(e);return Object.entries(t).forEach((e=>{let[t,o]=e;"class"!==t?"dataset"!==t?"text"!==t?"html"!==t?n.setAttribute(t,o):n.innerHTML=o:n.textContent=o:Object.entries(o).forEach((e=>{let[t,o]=e;n.dataset[t]=o})):o.split(" ").forEach((e=>{""!==e&&n.classList.add(e)}))})),n}function t(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;if(!e)throw new Error("A selector argument is required for the qs function");return t.querySelector(e)}function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;if(!e)throw new Error("A selector argument is required for the qsa function");return[...t.querySelectorAll(e)]}function s(e){const t=document.createElement("div");t.classList.add("aioseo-breadcrumbs");const n=c("Home","/");t.appendChild(n);const o=a();for(let n=0;n<e.length;n++){const s=e[n],a=c(s.name,s.url,n===e.length-1);t.appendChild(o.cloneNode(!0)),t.appendChild(a)}return t}function c(e,t,n){const o=document.createElement("span");if(o.classList.add("aioseo-breadcrumb"),t){const n=document.createElement("a");n.href=t,n.title=e,n.dataset.text=e,n.textContent=e,o.appendChild(n)}else o.textContent=e;if(!n){const e=a();o.parentNode&&o.parentNode.insertBefore(e,o.nextSibling)}return o}function a(){const e=document.createElement("span");return e.classList.add("aioseo-breadcrumb-separator"),e.textContent="›",e}n.p;const i=()=>{setTimeout((function(){const e=t("body");if(e.classList.contains("wp-admin"))return;const n=e.classList.contains("home"),o=t(".bcgov-site-header"),s=t(".wp-block-site-logo"),c=t("footer"),a=t(".wp-block-post-content"),i=t("#wp-custom-css");if(null!==i&&(i.innerText=i.innerText.replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&")),o){const e=o.offsetHeight;document.documentElement.style.setProperty("--scroll-padding",e+"px")}let l=null;null!==a&&(l=a.firstElementChild);const r=t(".breadcrumb-nav-section");null!==s&&t("img",s).setAttribute("alt","BCGov Logo");let d,u=null;null!==o&&(d=t(".is-style-takeover-menu",o),u=t("nav",o)),null!==window.site.siteName&&""!==window.site.siteName&&void 0!==window.site.siteName?e.classList.add(window.site.siteName):e.classList.add("bcgov"),null!==window.site.headerEffect&&null!==d?e.classList.add(`header-${window.site.headerEffect}`):e.classList.add("header-scroll"),null!==window.site.customBodyClass&&""!==window.site.customBodyClass&&e.classList.add(`custom-${window.site.customBodyClass}`),null!==l&&l.className.split(" ").some((e=>/.*banner.*/.test(e)))&&!l.className.split(" ").some((e=>/.*in-page.*/.test(e)))&&null!==r&&(l.parentNode.insertBefore(r,l.nextSibling),r.classList.add("alignwide"),n&&r.remove()),o&&d&&(null===u||"fixed"!==window.site.headerEffect&&"hides"!==window.site.headerEffect||(o.style.position="fixed"),null===d||null!==window.site.headerEffect&&"scroll"!==window.site.headerEffect||(o.style.position="absolute",o.style.overflow="hidden",o.style.transform="none"),null===u&&(e.style.paddingTop=0));const p=document.createElement("a");p.setAttribute("class","back-to-top"),p.setAttribute("alt","Back to top"),p.setAttribute("title","Back to top"),p.setAttribute("tabindex","0"),p.setAttribute("aria-label","Click to go back to the top of the page"),p.setAttribute("href","#top"),p.setAttribute("role","button"),null!==c&&c.append(p);const m=document.createElement("img");m.setAttribute("class","back-to-top-icon"),m.setAttribute("alt","back to top icon"),m.setAttribute("src",window.site.templateDir+"/assets/images/back-to-top.png"),p.append(m);let b=0;const h=()=>{const e=window.innerHeight,t=document.body.clientWidth;t>e?(document.body.classList.remove("portrait"),document.body.classList.add("landscape")):(document.body.classList.remove("landscape"),document.body.classList.add("portrait")),t<=782?(document.body.classList.remove("largeScreen"),document.body.classList.remove("tablet"),document.body.classList.add("mobile")):t<=1199?(document.body.classList.remove("mobile"),document.body.classList.add("tablet"),document.body.classList.remove("largeScreen")):(document.body.classList.remove("mobile"),document.body.classList.remove("tablet"),document.body.classList.add("largeScreen"))};window.addEventListener("resize",h),window.addEventListener("scroll",(()=>{const e=t(".back-to-top");if(e&&(window.pageYOffset+window.innerHeight>document.body.offsetHeight-1e3?(e.style.display="block",e.style.opacity="0.75"):(e.style.display="none",e.style.opacity="0")),null!==u&&"hides"===window.site.headerEffect){const e=window.pageYOffset||document.documentElement.scrollTop;e<b?e>100&&(o.style.opacity="1",o.style.transform="translateY(0%)"):e>100&&(o.style.opacity="0",o.style.transform="translateY(-100%)"),b=e<=0?0:e}})),window.addEventListener("load",(()=>{h()}))}),0)};"complete"===document.readyState?i():document.addEventListener("DOMContentLoaded",i);const l=()=>{setTimeout((function(){const e=t("body").firstChild,n=t(".skip-nav-menu");null!==n&&(e.parentNode.insertBefore(n,e),o(".skip-nav",n).forEach((e=>{t("a",e).setAttribute("tabindex",0)})));const s=t("header nav > button"),c=t("header nav button + .hidden-by-default");if(null!==s&&(s.setAttribute("id","main-menu"),null!==c)){const e=o("a",c),t=o("button",c);"true"!==c.getAttribute("aria-hidden")&&(e.forEach((e=>{e.setAttribute("tabindex","-1")})),t.forEach((e=>{e.setAttribute("tabindex","-1")})));const n={attributes:!0},s=n=>{for(const o of n)"attributes"===o.type&&("false"===c.getAttribute("aria-hidden")&&(e.forEach((e=>{e.setAttribute("tabindex","0")})),t.forEach((e=>{"Close menu"===e.getAttribute("aria-label")&&e.setAttribute("tabindex","0")}))),"true"===c.getAttribute("aria-hidden")&&(e.forEach((e=>{e.setAttribute("tabindex","-1")})),t.forEach((e=>{e.setAttribute("tabindex","-1")}))))};new window.MutationObserver(s).observe(c,n)}}),0)};"complete"===document.readyState?l():document.addEventListener("DOMContentLoaded",l);const r=()=>{setTimeout((function(){const n=t("body");let o="1"===window.site.noticeEnabled;const s="1"===window.site.noticeHomepageOnly,c="1"===window.site.noticeLabelBold,a="1"===window.site.noticeLabelBig;let i=window.site.noticeStatus,l=window.site.noticeContent;const r=window.site.noticeButtonLabel;let d="1"===window.site.noticeButtonEnabled;const u=window.site.noticeButtonAriaLabel,p=window.site.noticeButtonLink;let m=window.site.noticeButtonUtmCampaign;const b="1"===window.site.networkBannerEnabledNet,h=window.site.networkBannerType,g=window.site.networkBannerContent,f=window.site.networkBannerUtm;o&&s&&(o=!!n.classList.contains("home"));const w=window.location.href;if(o&&p===w&&(o=!1),b&&!o&&(o=!0,d=!1,l=g,i=h,m=f),o){const t=e("div",{class:`notice notification ${i}`,role:"alert","aria-live":"assertive"}),n=e("div",{class:"inner-container"}),o=e("p",{class:`${c?"bold":""} ${a?"big":""}`,html:`${l}`}),s=e("div",{class:"btn-container"}),b=e("button",{"aria-label":`${u||o+" – "+r}`,class:`${c?"bold":""} ${a?"big":""}`,text:`${r}`,onclick:`location.href="${p}${m?"?utm_campaign="+m:""}"`});document.body.prepend(t),d?(t.prepend(s),n.prepend(b)):n.classList.add("no-btn"),t.prepend(n),n.prepend(o)}}),0)};"complete"===document.readyState?r():document.addEventListener("DOMContentLoaded",r);const d=()=>{setTimeout((function(){const n=t(".wp-block-site-logo img"),s=t(".wp-block-site-title");if(null!==n){const t=n.hasAttribute("data-print"),o=e("div",{class:"print-header"}),c=n.cloneNode(!0);if(o.className="print-header",t){o.classList.add("print-header-black-background");const t=e("img",{class:"black-background",src:window.site.templateDir+"/assets/images/svg/black.svg"});o.append(t)}if(document.body.prepend(o),o.prepend(c),null!==s){const e=s.cloneNode(!0);o.append(e)}}o("img").forEach((e=>{const t=e.closest("figure");!0===e.hasAttribute("data-print")&&null!==t&&t.classList.add("print")}));const c=window.matchMedia("print");function a(e){o("img").forEach((t=>{const n=t.closest("figure");!0===t.hasAttribute("data-print-width")&&(e.matches&&(t.dataset.nonPrintStyle=t.getAttribute("style")),null!==n&&(e.matches?t.setAttribute("style","max-width: "+t.dataset.printWidth+"% !important"):t.dataset.nonPrintStyle&&(t.removeAttribute("style"),t.setAttribute("style",t.dataset.nonPrintStyle))))}))}c.addEventListener("change",a),a(c)}),0)};"complete"===document.readyState?d():document.addEventListener("DOMContentLoaded",d);const u=()=>{if(o(".is-style-takeover-menu").length){t("body").classList.add("has-takeover-menu");const e=t(".wp-block-site-logo").cloneNode(!0);e.id="nav-logo",e.querySelector(".custom-logo-link").setAttribute("tabindex","-1"),document.querySelector(".wp-block-navigation__responsive-container-content").after(e);const n=t(".wp-block-site-title a").cloneNode(!0);n.id="nav-title",n.setAttribute("aria-label","site homepage"),document.querySelector("#nav-logo .custom-logo-link").after(n)}const e=t(".wp-block-navigation__responsive-container-open svg");if(e){const t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.setAttribute("x","0"),t.setAttribute("y","0"),t.setAttribute("viewBox","0 0 24 24"),t.setAttribute("width",24),t.setAttribute("height",24),t.setAttribute("aria-hidden","true"),t.setAttribute("focusable","false"),t.innerHTML='<rect x="1.3" y="10.9" width="22" height="2"/><rect x="1.4" y="20.5" width="22" height="2"/><rect x="1.4" y="1.3" width="22" height="2"/>',e.parentNode.insertBefore(t,e.nextSibling),e.parentNode.removeChild(e)}const n=t(".wp-block-navigation__responsive-container-close svg");if(n){const e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.setAttribute("x","0"),e.setAttribute("y","0"),e.setAttribute("viewBox","0 0 24 24"),e.setAttribute("width",24),e.setAttribute("height",24),e.setAttribute("aria-hidden","true"),e.setAttribute("focusable","false"),e.innerHTML='<path d="M13.5,11.7l9.2-9.5l-1.5-1.5L12,10L2.9,0.8L1.4,2.2l9.1,9.5l-9.8,10l1.5,1.5l9.8-9.9l9.8,9.9l1.5-1.5L13.5,11.7z"/>',n.parentNode.insertBefore(e,n.nextSibling),n.parentNode.removeChild(n)}};"complete"===document.readyState?u():document.addEventListener("DOMContentLoaded",u);const p=()=>{if(o(".is-style-ribbon-menu").length){t("body").classList.add("has-ribbon-menu"),o("li.wp-block-navigation-item").length&&o("li.wp-block-navigation-item").forEach((e=>{e.addEventListener("pointerover",(e=>{let n=e.target;var o;"LI"!==n.tagName&&(n=n.closest("li")),o=n,setTimeout((function(){const e=o,n=t("ul",e);let s=null;const c=e.getBoundingClientRect();null!==n&&(s=n.getBoundingClientRect()),null!==s&&s.right>(window.innerWidth||document.documentElement.clientWidth)&&null!==n&&(n.classList.add("is-offscreen"),n.style.left="calc("+c.width+"px - 185%)",n.style.right="auto",n.style.top="20%",n.style.position="absolute")}),0)}),{capture:!1})}));let n="",s="";if(t(".wp-block-polylang-language-switcher")&&!t(".wp-block-polylang-language-switcher select")){const c=t(".wp-block-navigation__container");c&&(c.classList.add("primary-menu-container"),c.classList.add("ul-main-nav"));const a=o("li",c),i=o(".wp-block-navigation__submenu-container li",c);a.forEach((e=>{e.classList.contains("wp-block-navigation-submenu")&&""===n&&(n=e.classList.toString().replace(/,/g," ").replace("current-menu-item",""))})),i.forEach((e=>{e.classList.contains("wp-block-navigation-item")&&""===s&&(s=e.classList.toString().replace(/,/g," ").replace("current-menu-item",""))})),""===n&&(n=`${s} has-text-color has-background-color has-background has-secondary-brand-background-color wp-block-navigation-item has-child open-on-hover-click wp-block-navigation-submenu`);let l=c;const r=o(".lang-item",t(".wp-block-polylang-language-switcher"));r&&r.forEach((o=>{const c=t("a",o),a=c.getAttribute("href"),i=c.textContent;let r=null;if(r=o.classList.contains("current-lang")?e("li",{class:`language-group ${n}`}):e("li",{class:`language-option ${s}`}),o.classList.contains("current-lang")){const t=e("button",{class:"wp-block-navigation__submenu-icon wp-block-navigation-submenu__toggle language_switcher","aria-label":i+" submenu","aria-expanded":"false"}),n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.setAttribute("xmlns","http://www.w3.org/2000/svg"),n.setAttribute("width","12"),n.setAttribute("height","12"),n.setAttribute("viewBox","0 0 12 12"),n.setAttribute("fill","none"),n.setAttribute("aria-hidden","true"),n.setAttribute("focusable","false");const o=document.createElementNS("http://www.w3.org/2000/svg","path");o.setAttribute("d","M1.50002 4L6.00002 8L10.5 4"),o.setAttribute("stroke-width","1.5"),n.appendChild(o),t.appendChild(n),r.appendChild(t);const s=e("ul",{class:"wp-block-navigation__submenu-container"});l.appendChild(s),l=s}const d=e("a",{class:"wp-block-navigation-item__content",href:a,"aria-current":"page"}),u=e("span",{class:"wp-block-navigation-item__label",text:i});l.appendChild(r),d.appendChild(u),r.appendChild(d);const p=t(".wp-block-navigation-submenu__toggle.language_switcher");if(p&&r.classList.contains("wp-block-navigation-submenu")){r.insertBefore(p,d.nextSibling);const t=e("ul",{class:"wp-block-navigation__submenu-container language_switcher_options ul3"});r.appendChild(t)}const m=t(".wp-block-navigation__submenu-container.language_switcher_options");!o.classList.contains("has-child")&&m&&(l=m)})),t(".language-group.open-on-hover-click")||t(".language-group button").remove(),t(".wp-block-polylang-language-switcher select")||t(".wp-block-polylang-language-switcher").remove()}const c=t(".primary-menu-container"),a=t(".language_switcher_options");if(c&&a){const e=o(".language-option",c);e&&e.forEach((e=>{n.split(" ").forEach((t=>{""!==t&&e.classList.add(t)})),a.appendChild(e)}))}}};"complete"===document.readyState?p():document.addEventListener("DOMContentLoaded",p);const m=()=>{setTimeout((function(){const e=document.querySelectorAll(".case-study-group");if(e&&e.forEach((e=>{const t=e.querySelector(".wp-block-post-title");if(t){const n=function(e,t){let n=e.parentNode;for(;null!==n&&n.nodeType===window.Node.ELEMENT_NODE&&!n.classList.contains("other-studies");)n=n.parentNode;return n}(e),o=document.querySelector("body h1");n&&o&&t.innerText===o.innerText&&e.parentNode.remove();const s=t.querySelector("a");if(s){const n=s.getAttribute("href"),o=document.createElement("a");o.href=n,e.parentNode.insertBefore(o,e),o.appendChild(e),t.replaceChild(s.firstChild,s)}}})),document.querySelector("body.single-case-study")){const e=s([{name:"Learn",url:"/learning/"},{name:"Case studies",url:"/learning/case-studies/"},{name:document.title}]),n=t(".breadcrumb-placeholder");n&&n.appendChild(e)}}),0)};"complete"===document.readyState?m():document.addEventListener("DOMContentLoaded",m);const b=()=>{setTimeout((function(){const e=document.querySelectorAll(".common-component-group");if(e&&e.forEach((e=>{const t=e.querySelector(".taxonomy-common_component_category");if(t){const e=t.querySelectorAll(".wp-block-post-terms__separator");e&&e.forEach((e=>e.remove()));const n=t.querySelectorAll('a[rel="tag"]');n&&n.forEach((e=>{const t=document.createElement("span");t.textContent=e.textContent,t.classList.add("tag"),"Active"===e.textContent?e.remove():e.replaceWith(t)}))}const n=e.querySelector(".wp-block-post-title");if(n){const t=n.querySelector("a");if(t){const o=t.getAttribute("href"),s=document.createElement("a");s.href=o,e.parentNode.insertBefore(s,e),s.appendChild(e),n.replaceChild(t.firstChild,t)}}})),document.querySelector("body.single-common-component")){const e=document.querySelector(".taxonomy-common_component_category"),n=e.querySelectorAll(".wp-block-post-terms__separator");n&&n.forEach((e=>e.remove()));const o=e.querySelectorAll('a[rel="tag"]');o&&o.forEach((e=>{const t=document.createElement("span");t.textContent=e.textContent,t.classList.add("tag"),"Active"===e.textContent?e.remove():e.replaceWith(t)}));const c=document.querySelector(".getting-started-button");if(c){const e=c.querySelector(".value");if(e){c.className="wp-block-button has-size-regular is-style-default";const t=e.innerText;if(t){const n=document.createElement("a");n.href=t,n.className="wp-block-button__link wp-element-button",n.tabIndex=0,n.innerText="Start using now",e.parentNode.replaceChild(n,e)}}}const a=s([{name:"Common components",url:"/common-components/"},{name:document.title}]),i=t(".breadcrumb-placeholder");i&&i.appendChild(a)}}),0)};"complete"===document.readyState?b():document.addEventListener("DOMContentLoaded",b);const h=()=>{setTimeout((function(){const e=document.querySelectorAll(".cop-group");if(e&&e.forEach((e=>{const t=e.querySelector(".wp-block-post-title");if(t){const n=t.querySelector("a");if(n){const o=n.getAttribute("href"),s=document.createElement("a");s.href=o,e.parentNode.insertBefore(s,e),s.appendChild(e),t.replaceChild(n.firstChild,n)}}})),document.querySelector("body.single-cop")){const e=document.querySelectorAll(".cop-name");e&&e.forEach((e=>{const t=e.nextElementSibling;if(t&&t.classList.contains("cop-email")){const n=t.querySelector(".value").textContent.replace("mailto:",""),o=e.querySelector(".value").textContent;if(n&&o){const t=document.createElement("a");t.href=`mailto:${n}`,t.textContent=o,e.querySelector(".value").innerHTML="",e.querySelector(".value").appendChild(t)}t.remove()}}));const n=document.querySelectorAll(".cop-email");n&&n.forEach((e=>{e.remove()}));const o=document.querySelectorAll(".cop-social-link");if(o&&o.forEach((e=>{const t=e.querySelector(".value").textContent;if(t&&""!==t){const n=document.createElement("a");n&&(n.href=t,n.textContent="",e.classList.contains("msteams-link")&&(n.textContent="MS Teams"),e.classList.contains("rocketchat-link")&&(n.textContent="RocketChat"),e.classList.contains("yammer-link")&&(n.textContent="Yammer"),e.classList.contains("website-link")&&(n.textContent="Website")),e.appendChild(n),e.querySelector(".value").remove()}})),0===o.length){const e=document.querySelector(".cop-social-links-group");e&&e.remove()}const c=s([{name:"Communities",url:"/communities/"},{name:document.title}]),a=t(".breadcrumb-placeholder");a&&a.appendChild(c)}}),0)};"complete"===document.readyState?h():document.addEventListener("DOMContentLoaded",h),n(177),n(628),n(582),n(403),n(16);const g=e=>{const t=new window.MouseEvent("click",{bubbles:!0,cancelable:!0,view:window});e.dispatchEvent(t)};function f(){const e=this.getAttribute("data-target");if(void 0===e)return;const t=document.querySelectorAll(`${e} .collapse-header button`),n=document.querySelectorAll(`${e} .collapse`);this.classList.contains("collapse-expand-all")&&(t.forEach((e=>{e.classList.remove("collapsed"),e.setAttribute("aria-expanded",!0)})),n.forEach((e=>{e.classList.remove("collapse"),e.classList.add("collapsing"),e.classList.remove("hide"),e.classList.add("show"),setTimeout((function(){e.classList.add("collapse"),e.classList.remove("collapsing")}),300)}))),this.classList.contains("collapse-collapse-all")&&(t.forEach((e=>{e.classList.add("collapsed"),e.setAttribute("aria-expanded",!1)})),n.forEach((e=>{e.classList.remove("collapse"),e.classList.add("collapsing"),e.classList.remove("show"),e.classList.add("hide"),setTimeout((function(){e.classList.add("collapse"),e.classList.remove("collapsing")}),300)})))}function w(){if(void 0===this.getAttribute("data-target"))return;const e=this,t=e.closest(".wp-block-bcgov-block-theme-collapse-item").querySelector(".collapse-container");t.classList.remove("collapse"),t.classList.add("collapsing"),e.setAttribute("aria-expanded","true"===e.getAttribute("aria-expanded")?"false":"true"),"true"===e.getAttribute("aria-expanded")?(e.classList.remove("collapsed"),t.classList.remove("hide"),t.classList.add("show")):(e.classList.add("collapsed"),t.classList.add("hide"),t.classList.remove("show")),setTimeout((function(){t.classList.add("collapse"),t.classList.remove("collapsing")}),300)}function v(){const e=this.getAttribute("data-target");if(void 0===e)return;const t=document.querySelector(`.collapse-header button[data-target="${e}"]`);g(t)}const y=()=>{setTimeout((function(){const e=document.querySelectorAll(".collapse-container-nav button"),t=document.querySelectorAll(".collapse-header button"),n=document.querySelectorAll(".collapse-close a"),o=document.querySelector(".collapse-collapse-all");e.length&&(e.forEach((e=>{e.addEventListener("click",f)})),t.forEach((e=>{e.addEventListener("click",w)})),n.forEach((e=>{e.addEventListener("click",v)})),g(o),g(t[0]))}),0)};"complete"===document.readyState?y():document.addEventListener("DOMContentLoaded",y);const L=()=>{("cleanbc"===window.site.siteName||window.site.allSiteStyles.length)&&setTimeout((function(){const e=o("a.icon");e.length&&e.forEach((e=>{null===e.getAttribute("href")&&(e.setAttribute("tabindex","-1"),e.style.pointerEvents="none")}));const n=o(".wp-block-button.is-style-icon");n.length&&n.forEach((e=>{const n=t("a",e);null===n||e.classList.contains("has-size-large")||(n.style.outlineOffset="1rem")})),window.addEventListener("scroll",(()=>{}))}),0)};"complete"===document.readyState?L():document.addEventListener("DOMContentLoaded",L);const E=()=>{function e(){o(".wp-block-bcgov-block-theme-collapse-item").forEach((e=>{e.classList.remove("hidden"),o(".active-group",e).forEach((e=>{const n=t(".wp-block-group.project",e);if(null!==n){const e=o(".wp-block-columns",n),s=n.closest(".wp-block-bcgov-block-theme-collapse-item").qs(".collapse-header .collapse-title"),c=t(".count",s),a=e.length;e.length&&(null!==c&&a&&(c.innerHTML=`${a}`),null===c&&a&&(s.innerHTML=`${s.innerText} <span class="count">${a} </span>`))}const s=t(".no-results",e);if(null!==s){const e=s.closest(".wp-block-bcgov-block-theme-collapse-item"),t=s.closest(".wp-block-bcgov-block-theme-collapse-item").qs(".collapse-title"),n=s.closest(".wp-block-bcgov-block-theme-collapse-item").qs(".collapse-header .count");null!==e&&e.classList.add("hidden"),null!==n?n.innerHTML="0":t.innerHTML=`${t.innerText} <span class="count">0</span>`}}))}))}setTimeout((function(){const n=o(".actions-toggle-buttons .wp-block-button");if(n.length){n.forEach(((n,s)=>{const c=t("a.wp-block-button__link",n),a=t("a.wp-block-button__link",n).innerText.toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,""),i=o(".actions-accordion-header .wp-block-group.query-group");n.newClass=a,t("a.wp-block-button__link",n).classList.add(n.newClass),0===s&&(c.classList.add("active"),i.forEach((e=>{e.classList.add("hidden"),e.classList.remove("active-group"),e.classList.contains(`${a}`)&&(e.classList.toggle("hidden"),e.classList.add("active-group"))}))),c.addEventListener("click",(function(t){t.preventDefault();const n=o(".actions-toggle-buttons .wp-block-button a.wp-block-button__link");if(n.length){n.forEach((e=>{e.classList.remove("active")})),c.classList.toggle("active");const s=t.target.textContent.toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,"");o(".actions-toggle-query-loop .category-actions").forEach((e=>{e.classList.add("hidden"),e.classList.contains(`${s}`)&&e.classList.toggle("hidden")})),i.forEach((e=>{e.classList.add("hidden"),e.classList.remove("active-group"),e.classList.contains(`${s}`)&&(e.classList.toggle("hidden"),e.classList.add("active-group"))})),e()}}))}));const s=t(`.actions-toggle-buttons .wp-block-button__link[href="#${new Proxy(new URLSearchParams(window.location.search),{get:(e,t)=>e.get(t)}).target}"]`);null!==s&&g(s),e(),o(".type-post.category-actions").forEach((e=>{const n=t(".wp-block-post-title",e).innerText,s=t(".attachment-post-thumbnail",e),c=t(".wp-block-post-excerpt__excerpt",e);null!==s&&null!==c&&s.setAttribute("title",c.innerText);const a=t(".wp-block-button__link",e);o(".wp-block-button__link",e).length&&(a.innerText=`${a.innerText} ${n.toLowerCase()}`,a.setAttribute("src",`${window.site.domain}/actions/${n.toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,"")}`),a.addEventListener("click",(e=>{window.location.href=e.target.getAttribute("src")})));const i=n.toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,""),l=t("a.wp-block-button__link.active").innerText.toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,"");e.classList.add(i),e.classList.add("hidden"),e.classList.contains(`${l}`)&&e.classList.toggle("hidden")}))}}),0)};"complete"===document.readyState?E():document.addEventListener("DOMContentLoaded",E);const k=()=>{setTimeout((function(){const e=o(".home-cover-banner"),t=o(".landing-cover-banner");if(e.length||t.length){const e=document.getElementsByTagName("svg")[0],t=document.createElementNS("http://www.w3.org/2000/svg","defs"),n=document.createElementNS("http://www.w3.org/2000/svg","clipPath");n.setAttribute("id","svgPath");const o=document.createElementNS("http://www.w3.org/2000/svg","path");o.setAttribute("d","M0,77.2v-24.7c0,-8.6,6.8,-15.6,15.3,-16l901.5,-36.6c44.3,-1.7,81.5,33.1,83.2,77.5l-1000,-0.2z"),n.setAttribute("transform","scale(1.44)"),e.setAttribute("clipPathUnits","objectBoundingBox"),e.style.visibility="visible",e.appendChild(t),t.appendChild(n),n.appendChild(o)}}),0)};"complete"===document.readyState?k():document.addEventListener("DOMContentLoaded",k);const S=()=>{t(".in-page-sectors-section")&&setTimeout((function(){const e=o(".in-page-sectors-section .wp-block-column"),n=o(".in-page-sectors-section figcaption");n.length&&n.forEach((e=>{e.style.color="var(--wp--preset--color--headline-color)",e.closest(".wp-block-column").setAttribute("data-after-content",e.innerText)})),e.forEach((e=>{t("a",e)&&(e.style.cursor="pointer",e.addEventListener("click",(function(){t("a",this).click()})))}))}),0)};"complete"===document.readyState?S():document.addEventListener("DOMContentLoaded",S);const A=()=>{setTimeout((function(){if(t(".actions-accordion-header")){const e=function(e){const t=[];let n=e.parentNode.firstChild;for(;n;)1===n.nodeType&&n!==e&&t.push(n),n=n.nextSibling;return t};o(".labelInjector").forEach((n=>{const o=e(n),s=n.getAttribute("data-label");o.forEach((e=>{e.classList.contains("wp-block-buttons")&&t(".wp-block-button__link",e).setAttribute("aria-label",s)})),n.remove()}))}}),0)};"complete"===document.readyState?A():document.addEventListener("DOMContentLoaded",A)})()})();