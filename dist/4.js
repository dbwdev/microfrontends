(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{12:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return c})),e.d(n,"d",(function(){return i}));var o=e(6);function r(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function c(t){const n=t-1;return n*n*n+1}function i(t){return--t*t*t*t*t+1}e.d(n,"c",(function(){return o.l}))},29:function(t,n,e){"use strict";function o(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,o)}return e}function r(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?o(Object(e),!0).forEach((function(n){c(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function c(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(t){if("object"!==i(t))throw new Error("single-spa-svelte requires a configuration object");var n=r({},u,{},t);if(!n.component)throw new Error("single-spa-svelte must be passed opts.component");var e={};return{bootstrap:s.bind(null,n,e),mount:a.bind(null,n,e),unmount:l.bind(null,n,e)}};var u={component:null,domElementGetter:null,props:{}};function s(t){return Promise.resolve()}function a(t,n,e){var o=Object.keys(u),c=Object.keys(t).reduce((function(n,e){return o.includes(e)||(n[e]=t[e]),n}),{});return Promise.resolve().then((function(){var o=function(t,n){return(n=n&&n.customProps?n.customProps:n).domElement?function(){return n.domElement}:n.domElementGetter?n.domElementGetter:t.domElementGetter?t.domElementGetter:function(t){var n=t.appName||t.name;if(!n)throw Error("single-spa-svelte was not given an application name as a prop, so it can't make a unique dom element container for the svelte application");var e="single-spa-application:".concat(n);return function(){var t=document.getElementById(e);return t||((t=document.createElement("div")).id=e,document.body.appendChild(t)),t}}(n)}(t,e)();n.instance=new t.component(r({},c,{target:o,props:Object.assign({},e,t.props)}))}))}function l(t,n){return Promise.resolve().then((function(){n.instance.$destroy?n.instance.$destroy():n.instance.destroy()}))}},30:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var o=e(12),r=e(6);function c(t){var{fallback:n}=t,e=
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function(t,n){var e={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&n.indexOf(o)<0&&(e[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(e[o[r]]=t[o[r]])}return e}(t,["fallback"]);const c=new Map,i=new Map;function u(t,c,i){return(u,s)=>(t.set(s.key,{rect:u.getBoundingClientRect()}),()=>{if(c.has(s.key)){const{rect:t}=c.get(s.key);return c.delete(s.key),function(t,n,c){const{delay:i=0,duration:u=(t=>30*Math.sqrt(t)),easing:s=o.b}=Object(r.d)(Object(r.d)({},e),c),a=n.getBoundingClientRect(),l=t.left-a.left,f=t.top-a.top,d=t.width/a.width,p=t.height/a.height,m=Math.sqrt(l*l+f*f),h=getComputedStyle(n),y="none"===h.transform?"":h.transform,b=+h.opacity;return{delay:i,duration:Object(r.o)(u)?u(m):u,easing:s,css:(t,n)=>`\n\t\t\t\topacity: ${t*b};\n\t\t\t\ttransform-origin: top left;\n\t\t\t\ttransform: ${y} translate(${n*l}px,${n*f}px) scale(${t+(1-t)*d}, ${t+(1-t)*p});\n\t\t\t`}}(t,u,s)}return t.delete(s.key),n&&n(u,s,i)})}return[u(i,c,!1),u(c,i,!0)]}},6:function(t,n,e){"use strict";function o(){}e.d(n,"a",(function(){return st})),e.d(n,"b",(function(){return N})),e.d(n,"c",(function(){return b})),e.d(n,"d",(function(){return c})),e.d(n,"e",(function(){return k})),e.d(n,"f",(function(){return X})),e.d(n,"g",(function(){return nt})),e.d(n,"h",(function(){return et})),e.d(n,"i",(function(){return $})),e.d(n,"j",(function(){return w})),e.d(n,"k",(function(){return W})),e.d(n,"l",(function(){return r})),e.d(n,"m",(function(){return ut})),e.d(n,"n",(function(){return g})),e.d(n,"o",(function(){return a})),e.d(n,"p",(function(){return O})),e.d(n,"q",(function(){return ot})),e.d(n,"r",(function(){return s})),e.d(n,"s",(function(){return l})),e.d(n,"t",(function(){return E})),e.d(n,"u",(function(){return _})),e.d(n,"v",(function(){return v})),e.d(n,"w",(function(){return Y})),e.d(n,"x",(function(){return Z})),e.d(n,"y",(function(){return rt}));const r=t=>t;function c(t,n){for(const e in n)t[e]=n[e];return t}function i(t){return t()}function u(){return Object.create(null)}function s(t){t.forEach(i)}function a(t){return"function"==typeof t}function l(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}const f="undefined"!=typeof window;let d=f?()=>window.performance.now():()=>Date.now(),p=f?t=>requestAnimationFrame(t):o;const m=new Set;function h(t){m.forEach(n=>{n.c(t)||(m.delete(n),n.f())}),0!==m.size&&p(h)}function y(t){let n;return 0===m.size&&p(h),{promise:new Promise(e=>{m.add(n={c:t,f:e})}),abort(){m.delete(n)}}}function b(t,n){t.appendChild(n)}function g(t,n,e){t.insertBefore(n,e||null)}function $(t){t.parentNode.removeChild(t)}function w(t){return document.createElement(t)}function v(t){return document.createTextNode(t)}function _(){return v(" ")}function O(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function k(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function E(t,n){n=""+n,t.data!==n&&(t.data=n)}function j(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}const x=new Set;let P,S=0;function C(t,n,e,o,r,c,i,u=0){const s=16.666/o;let a="{\n";for(let t=0;t<=1;t+=s){const o=n+(e-n)*c(t);a+=100*t+`%{${i(o,1-o)}}\n`}const l=a+`100% {${i(e,1-e)}}\n}`,f=`__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(l)}_${u}`,d=t.ownerDocument;x.add(d);const p=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild(w("style")).sheet),m=d.__svelte_rules||(d.__svelte_rules={});m[f]||(m[f]=!0,p.insertRule(`@keyframes ${f} ${l}`,p.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?h+", ":""}${f} ${o}ms linear ${r}ms 1 both`,S+=1,f}function M(t,n){const e=(t.style.animation||"").split(", "),o=e.filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")),r=e.length-o.length;r&&(t.style.animation=o.join(", "),S-=r,S||p(()=>{S||(x.forEach(t=>{const n=t.__svelte_stylesheet;let e=n.cssRules.length;for(;e--;)n.deleteRule(e);t.__svelte_rules={}}),x.clear())}))}function q(t){P=t}const A=[],D=[],R=[],G=[],T=Promise.resolve();let B=!1;function L(){B||(B=!0,T.then(I))}function N(t){R.push(t)}let z=!1;const H=new Set;function I(){if(!z){z=!0;do{for(let t=0;t<A.length;t+=1){const n=A[t];q(n),J(n.$$)}for(A.length=0;D.length;)D.pop()();for(let t=0;t<R.length;t+=1){const n=R[t];H.has(n)||(H.add(n),n())}R.length=0}while(A.length);for(;G.length;)G.pop()();B=!1,z=!1,H.clear()}}function J(t){if(null!==t.fragment){t.update(),s(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(N)}}let F;function K(){return F||(F=Promise.resolve(),F.then(()=>{F=null})),F}function Q(t,n,e){t.dispatchEvent(j(`${n?"intro":"outro"}${e}`))}const U=new Set;let V;function W(){V={r:0,c:[],p:V}}function X(){V.r||s(V.c),V=V.p}function Y(t,n){t&&t.i&&(U.delete(t),t.i(n))}function Z(t,n,e,o){if(t&&t.o){if(U.has(t))return;U.add(t),V.c.push(()=>{U.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}const tt={duration:0};function nt(t,n,e){let c,i,u=n(t,e),s=!1,l=0;function f(){c&&M(t,c)}function p(){const{delay:n=0,duration:e=300,easing:a=r,tick:p=o,css:m}=u||tt;m&&(c=C(t,0,1,e,n,a,m,l++)),p(0,1);const h=d()+n,b=h+e;i&&i.abort(),s=!0,N(()=>Q(t,!0,"start")),i=y(n=>{if(s){if(n>=b)return p(1,0),Q(t,!0,"end"),f(),s=!1;if(n>=h){const t=a((n-h)/e);p(t,1-t)}}return s})}let m=!1;return{start(){m||(M(t),a(u)?(u=u(),K().then(p)):p())},invalidate(){m=!1},end(){s&&(f(),s=!1)}}}function et(t,n,e){let c,i=n(t,e),u=!0;const l=V;function f(){const{delay:n=0,duration:e=300,easing:a=r,tick:f=o,css:p}=i||tt;p&&(c=C(t,1,0,e,n,a,p));const m=d()+n,h=m+e;N(()=>Q(t,!1,"start")),y(n=>{if(u){if(n>=h)return f(0,1),Q(t,!1,"end"),--l.r||s(l.c),!1;if(n>=m){const t=a((n-m)/e);f(1-t,t)}}return u})}return l.r+=1,a(i)?K().then(()=>{i=i(),f()}):f(),{end(n){n&&i.tick&&i.tick(1,0),u&&(c&&M(t,c),u=!1)}}}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function ot(t,n){Z(t,1,1,()=>{n.delete(t.key)})}function rt(t,n,e,o,r,c,i,u,s,a,l,f){let d=t.length,p=c.length,m=d;const h={};for(;m--;)h[t[m].key]=m;const y=[],b=new Map,g=new Map;for(m=p;m--;){const t=f(r,c,m),u=e(t);let s=i.get(u);s?o&&s.p(t,n):(s=a(u,t),s.c()),b.set(u,y[m]=s),u in h&&g.set(u,Math.abs(m-h[u]))}const $=new Set,w=new Set;function v(t){Y(t,1),t.m(u,l),i.set(t.key,t),l=t.first,p--}for(;d&&p;){const n=y[p-1],e=t[d-1],o=n.key,r=e.key;n===e?(l=n.first,d--,p--):b.has(r)?!i.has(o)||$.has(o)?v(n):w.has(r)?d--:g.get(o)>g.get(r)?(w.add(o),v(n)):($.add(r),d--):(s(e,i),d--)}for(;d--;){const n=t[d];b.has(n.key)||s(n,i)}for(;p;)v(y[p-1]);return y}new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]);let ct;function it(t,n){const e=t.$$;null!==e.fragment&&(s(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ut(t,n,e,r,c,l,f=[-1]){const d=P;q(t);const p=n.props||{},m=t.$$={fragment:null,ctx:null,props:l,update:o,not_equal:c,bound:u(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:u(),dirty:f};let h=!1;if(m.ctx=e?e(t,p,(n,e,...o)=>{const r=o.length?o[0]:e;return m.ctx&&c(m.ctx[n],m.ctx[n]=r)&&(m.bound[n]&&m.bound[n](r),h&&function(t,n){-1===t.$$.dirty[0]&&(A.push(t),L(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}(t,n)),e}):[],m.update(),h=!0,s(m.before_update),m.fragment=!!r&&r(m.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);m.fragment&&m.fragment.l(t),t.forEach($)}else m.fragment&&m.fragment.c();n.intro&&Y(t.$$.fragment),function(t,n,e){const{fragment:o,on_mount:r,on_destroy:c,after_update:u}=t.$$;o&&o.m(n,e),N(()=>{const n=r.map(i).filter(a);c?c.push(...n):s(n),t.$$.on_mount=[]}),u.forEach(N)}(t,n.target,n.anchor),I()}q(d)}"function"==typeof HTMLElement&&(ct=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,n,e){this[t]=e}$destroy(){it(this,1),this.$destroy=o}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}});class st{$destroy(){it(this,1),this.$destroy=o}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}}}]);
//# sourceMappingURL=4.js.map