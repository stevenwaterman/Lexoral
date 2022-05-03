var app=function(){"use strict";function t(){}!function(){const t={PROJECT_ID:"lexoral-prod",FIREBASE_API_KEY:"AIzaSyBU8Uc2XMlksFDa-WP27u4yL4I5Q1_Ddbg",DEMO:"true"};try{if(process)return process.env=Object.assign({},process.env),void Object.assign(process.env,t)}catch(t){}globalThis.process={env:t}}();const e=t=>t;function n(t){return t()}function r(){return Object.create(null)}function i(t){t.forEach(n)}function s(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}function c(t){let e;return a(t,(t=>e=t))(),e}function l(t,e,n){t.$$.on_destroy.push(a(e,n))}function u(t,e,n,r){return t[1]&&r?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](r(e))):n.ctx}function h(t,e,n,r,i,s,o){const a=function(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(void 0===e.dirty)return i;if("object"==typeof i){const t=[],n=Math.max(e.dirty.length,i.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|i[r];return t}return e.dirty|i}return e.dirty}(e,r,i,s);if(a){const i=u(e,n,r,o);t.p(i,a)}}function d(t){return null==t?"":t}const f="undefined"!=typeof window;let p=f?()=>window.performance.now():()=>Date.now(),g=f?t=>requestAnimationFrame(t):t;const m=new Set;function y(t){m.forEach((e=>{e.c(t)||(m.delete(e),e.f())})),0!==m.size&&g(y)}function v(t){let e;return 0===m.size&&g(y),{promise:new Promise((n=>{m.add(e={c:t,f:n})})),abort(){m.delete(e)}}}let w=!1;function b(t,e,n,r){for(;t<e;){const i=t+(e-t>>1);n(i)<=r?t=i+1:e=i}return t}function S(t,e){w?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const e=t.childNodes,n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let i=0;for(let t=0;t<e.length;t++){const s=b(1,i+1,(t=>e[n[t]].claim_order),e[t].claim_order)-1;r[t]=n[s]+1;const o=s+1;n[o]=t,i=Math.max(o,i)}const s=[],o=[];let a=e.length-1;for(let t=n[i]+1;0!=t;t=r[t-1]){for(s.push(e[t-1]);a>=t;a--)o.push(e[a]);a--}for(;a>=0;a--)o.push(e[a]);s.reverse(),o.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<o.length;e++){for(;n<s.length&&o[e].claim_order>=s[n].claim_order;)n++;const r=n<s.length?s[n]:null;t.insertBefore(o[e],r)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),e!==t.actual_end_child?t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling):e.parentNode!==t&&t.appendChild(e)}function E(t,e,n){w&&!n?S(t,e):(e.parentNode!==t||n&&e.nextSibling!==n)&&t.insertBefore(e,n||null)}function T(t){t.parentNode.removeChild(t)}function _(t){return document.createElement(t)}function I(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function A(t){return document.createTextNode(t)}function N(){return A(" ")}function C(){return A("")}function x(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function k(t){return function(e){return e.preventDefault(),t.call(this,e)}}function $(t){return function(e){e.target===this&&t.call(this,e)}}function D(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function O(t){return""===t?null:+t}function L(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function R(t,e){t.value=null==e?"":e}function P(t,e){for(let n=0;n<t.options.length;n+=1){const r=t.options[n];if(r.__value===e)return void(r.selected=!0)}}function M(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function U(t,e,n){t.classList[n?"add":"remove"](e)}function F(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}const V=new Set;let j,B=0;function q(t,e,n,r,i,s,o,a=0){const c=16.666/r;let l="{\n";for(let t=0;t<=1;t+=c){const r=e+(n-e)*s(t);l+=100*t+`%{${o(r,1-r)}}\n`}const u=l+`100% {${o(n,1-n)}}\n}`,h=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${a}`,d=t.ownerDocument;V.add(d);const f=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild(_("style")).sheet),p=d.__svelte_rules||(d.__svelte_rules={});p[h]||(p[h]=!0,f.insertRule(`@keyframes ${h} ${u}`,f.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${h} ${r}ms linear ${i}ms 1 both`,B+=1,h}function z(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),i=n.length-r.length;i&&(t.style.animation=r.join(", "),B-=i,B||g((()=>{B||(V.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),V.clear())})))}function K(t){j=t}function H(){if(!j)throw new Error("Function called outside component initialization");return j}function W(t){H().$$.on_mount.push(t)}function G(t){H().$$.on_destroy.push(t)}function X(t,e){H().$$.context.set(t,e)}function Q(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const J=[],Y=[],Z=[],tt=[],et=Promise.resolve();let nt=!1;function rt(){nt||(nt=!0,et.then(ct))}function it(){return rt(),et}function st(t){Z.push(t)}let ot=!1;const at=new Set;function ct(){if(!ot){ot=!0;do{for(let t=0;t<J.length;t+=1){const e=J[t];K(e),lt(e.$$)}for(K(null),J.length=0;Y.length;)Y.pop()();for(let t=0;t<Z.length;t+=1){const e=Z[t];at.has(e)||(at.add(e),e())}Z.length=0}while(J.length);for(;tt.length;)tt.pop()();nt=!1,ot=!1,at.clear()}}function lt(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(st)}}let ut;function ht(){return ut||(ut=Promise.resolve(),ut.then((()=>{ut=null}))),ut}function dt(t,e,n){t.dispatchEvent(F(`${e?"intro":"outro"}${n}`))}const ft=new Set;let pt;function gt(){pt={r:0,c:[],p:pt}}function mt(){pt.r||i(pt.c),pt=pt.p}function yt(t,e){t&&t.i&&(ft.delete(t),t.i(e))}function vt(t,e,n,r){if(t&&t.o){if(ft.has(t))return;ft.add(t),pt.c.push((()=>{ft.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}const wt={duration:0};function bt(n,r,o,a){let c=r(n,o),l=a?0:1,u=null,h=null,d=null;function f(){d&&z(n,d)}function g(t,e){const n=t.b-l;return e*=Math.abs(n),{a:l,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function m(r){const{delay:s=0,duration:o=300,easing:a=e,tick:m=t,css:y}=c||wt,w={start:p()+s,b:r};r||(w.group=pt,pt.r+=1),u||h?h=w:(y&&(f(),d=q(n,l,r,o,s,a,y)),r&&m(0,1),u=g(w,o),st((()=>dt(n,r,"start"))),v((t=>{if(h&&t>h.start&&(u=g(h,o),h=null,dt(n,u.b,"start"),y&&(f(),d=q(n,l,u.b,u.duration,0,a,c.css))),u)if(t>=u.end)m(l=u.b,1-l),dt(n,u.b,"end"),h||(u.b?f():--u.group.r||i(u.group.c)),u=null;else if(t>=u.start){const e=t-u.start;l=u.a+u.d*a(e/u.duration),m(l,1-l)}return!(!u&&!h)})))}return{run(t){s(c)?ht().then((()=>{c=c(),m(t)})):m(t)},end(){f(),u=h=null}}}const St="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function Et(t,e){vt(t,1,1,(()=>{e.delete(t.key)}))}function Tt(t,e,n,r,i,s,o,a,c,l,u,h){let d=t.length,f=s.length,p=d;const g={};for(;p--;)g[t[p].key]=p;const m=[],y=new Map,v=new Map;for(p=f;p--;){const t=h(i,s,p),a=n(t);let c=o.get(a);c?r&&c.p(t,e):(c=l(a,t),c.c()),y.set(a,m[p]=c),a in g&&v.set(a,Math.abs(p-g[a]))}const w=new Set,b=new Set;function S(t){yt(t,1),t.m(a,u),o.set(t.key,t),u=t.first,f--}for(;d&&f;){const e=m[f-1],n=t[d-1],r=e.key,i=n.key;e===n?(u=e.first,d--,f--):y.has(i)?!o.has(r)||w.has(r)?S(e):b.has(i)?d--:v.get(r)>v.get(i)?(b.add(r),S(e)):(w.add(i),d--):(c(n,o),d--)}for(;d--;){const e=t[d];y.has(e.key)||c(e,o)}for(;f;)S(m[f-1]);return m}function _t(t){t&&t.c()}function It(t,e,r,o){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=t.$$;a&&a.m(e,r),o||st((()=>{const e=c.map(n).filter(s);l?l.push(...e):i(e),t.$$.on_mount=[]})),u.forEach(st)}function At(t,e){const n=t.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Nt(e,n,s,o,a,c,l=[-1]){const u=j;K(e);const h=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:n.context||[]),callbacks:r(),dirty:l,skip_bound:!1};let d=!1;if(h.ctx=s?s(e,n.props||{},((t,n,...r)=>{const i=r.length?r[0]:n;return h.ctx&&a(h.ctx[t],h.ctx[t]=i)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](i),d&&function(t,e){-1===t.$$.dirty[0]&&(J.push(t),rt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],h.update(),d=!0,i(h.before_update),h.fragment=!!o&&o(h.ctx),n.target){if(n.hydrate){w=!0;const t=function(t){return Array.from(t.childNodes)}(n.target);h.fragment&&h.fragment.l(t),t.forEach(T)}else h.fragment&&h.fragment.c();n.intro&&yt(e.$$.fragment),It(e,n.target,n.anchor,n.customElement),w=!1,ct()}K(u)}class Ct{$destroy(){At(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */var xt=function(t,e){return(xt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)};function kt(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}function $t(t,e,n,r){return new(n||(n=Promise))((function(i,s){function o(t){try{c(r.next(t))}catch(t){s(t)}}function a(t){try{c(r.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}c((r=r.apply(t,e||[])).next())}))}function Dt(t,e){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=e.call(t,o)}catch(t){s=[6,t],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}}function Ot(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Lt(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,s=n.call(t),o=[];try{for(;(void 0===e||e-- >0)&&!(r=s.next()).done;)o.push(r.value)}catch(t){i={error:t}}finally{try{r&&!r.done&&(n=s.return)&&n.call(s)}finally{if(i)throw i.error}}return o}function Rt(t,e,n){if(n||2===arguments.length)for(var r,i=0,s=e.length;i<s;i++)!r&&i in e||(r||(r=Array.prototype.slice.call(e,0,i)),r[i]=e[i]);return t.concat(r||e)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var Pt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<t.length;i+=3){var s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=s>>2,h=(3&s)<<4|a>>4,d=(15&a)<<2|l>>6,f=63&l;c||(f=64,o||(d=64)),r.push(n[u],n[h],n[d],n[f])}return r.join("")},encodeString:function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(function(t){for(var e=[],n=0,r=0;r<t.length;r++){var i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296==(64512&i)&&r+1<t.length&&56320==(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e}(t),e)},decodeString:function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){for(var e=[],n=0,r=0;n<t.length;){var i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){var s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){var o=((7&i)<<18|(63&(s=t[n++]))<<12|(63&(a=t[n++]))<<6|63&t[n++])-65536;e[r++]=String.fromCharCode(55296+(o>>10)),e[r++]=String.fromCharCode(56320+(1023&o))}else{s=t[n++];var a=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&a)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray:function(t,e){this.init_();for(var n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<t.length;){var s=n[t.charAt(i++)],o=i<t.length?n[t.charAt(i)]:0,a=++i<t.length?n[t.charAt(i)]:64,c=++i<t.length?n[t.charAt(i)]:64;if(++i,null==s||null==o||null==a||null==c)throw Error();var l=s<<2|o>>4;if(r.push(l),64!==a){var u=o<<4&240|a>>2;if(r.push(u),64!==c){var h=a<<6&192|c;r.push(h)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Mt=function(){function t(){var t=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,n){t.resolve=e,t.reject=n}))}return t.prototype.wrapCallback=function(t){var e=this;return function(n,r){n?e.reject(n):e.resolve(r),"function"==typeof t&&(e.promise.catch((function(){})),1===t.length?t(n):t(n,r))}},t}();
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Ut(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Ft(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ut())}function Vt(){var t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function jt(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function Bt(){var t=Ut();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
var qt=function(t){function e(n,r,i){var s=t.call(this,r)||this;return s.code=n,s.customData=i,s.name="FirebaseError",Object.setPrototypeOf(s,e.prototype),Error.captureStackTrace&&Error.captureStackTrace(s,zt.prototype.create),s}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}xt(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(e,t),e}(Error),zt=function(){function t(t,e,n){this.service=t,this.serviceName=e,this.errors=n}return t.prototype.create=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=e[0]||{},i=this.service+"/"+t,s=this.errors[t],o=s?Kt(s,r):"Error",a=this.serviceName+": "+o+" ("+i+").",c=new qt(i,a,r);return c},t}();function Kt(t,e){return t.replace(Ht,(function(t,n){var r=e[n];return null!=r?String(r):"<"+n+"?>"}))}var Ht=/\{\$([^}]+)}/g;function Wt(t,e){if(t===e)return!0;for(var n=Object.keys(t),r=Object.keys(e),i=0,s=n;i<s.length;i++){var o=s[i];if(!r.includes(o))return!1;var a=t[o],c=e[o];if(Gt(a)&&Gt(c)){if(!Wt(a,c))return!1}else if(a!==c)return!1}for(var l=0,u=r;l<u.length;l++){o=u[l];if(!n.includes(o))return!1}return!0}function Gt(t){return null!==t&&"object"==typeof t}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Xt(t){for(var e=[],n=function(t,n){Array.isArray(n)?n.forEach((function(n){e.push(encodeURIComponent(t)+"="+encodeURIComponent(n))})):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n))},r=0,i=Object.entries(t);r<i.length;r++){var s=i[r];n(s[0],s[1])}return e.length?"&"+e.join("&"):""}var Qt=function(){function t(t,e){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((function(){t(n)})).catch((function(t){n.error(t)}))}return t.prototype.next=function(t){this.forEachObserver((function(e){e.next(t)}))},t.prototype.error=function(t){this.forEachObserver((function(e){e.error(t)})),this.close(t)},t.prototype.complete=function(){this.forEachObserver((function(t){t.complete()})),this.close()},t.prototype.subscribe=function(t,e,n){var r,i=this;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(t,e){if("object"!=typeof t||null===t)return!1;for(var n=0,r=e;n<r.length;n++){var i=r[n];if(i in t&&"function"==typeof t[i])return!0}return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n}).next&&(r.next=Jt),void 0===r.error&&(r.error=Jt),void 0===r.complete&&(r.complete=Jt);var s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(t){}})),this.observers.push(r),s},t.prototype.unsubscribeOne=function(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},t.prototype.forEachObserver=function(t){if(!this.finalized)for(var e=0;e<this.observers.length;e++)this.sendOne(e,t)},t.prototype.sendOne=function(t,e){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[t])try{e(n.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))},t.prototype.close=function(t){var e=this;this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((function(){e.observers=void 0,e.onNoObservers=void 0})))},t}();function Jt(){}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Yt(t){return t&&t._delegate?t._delegate:t}var Zt=function(){function t(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(t){return this.instantiationMode=t,this},t.prototype.setMultipleInstances=function(t){return this.multipleInstances=t,this},t.prototype.setServiceProps=function(t){return this.serviceProps=t,this},t.prototype.setInstanceCreatedCallback=function(t){return this.onInstanceCreated=t,this},t}(),te="[DEFAULT]",ee=function(){function t(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t.prototype.get=function(t){var e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){var n=new Mt;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:e});r&&n.resolve(r)}catch(t){}}return this.instancesDeferred.get(e).promise},t.prototype.getImmediate=function(t){var e,n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),r=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(r)return null;throw t}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(t){var e,n;if(t.name!==this.name)throw Error("Mismatching Component "+t.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t))try{this.getOrInitializeService({instanceIdentifier:te})}catch(t){}try{for(var r=Ot(this.instancesDeferred.entries()),i=r.next();!i.done;i=r.next()){var s=Lt(i.value,2),o=s[0],a=s[1],c=this.normalizeInstanceIdentifier(o);try{var l=this.getOrInitializeService({instanceIdentifier:c});a.resolve(l)}catch(t){}}}catch(t){e={error:t}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}}},t.prototype.clearInstance=function(t){void 0===t&&(t=te),this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)},t.prototype.delete=function(){return $t(this,void 0,void 0,(function(){var t;return Dt(this,(function(e){switch(e.label){case 0:return t=Array.from(this.instances.values()),[4,Promise.all(Rt(Rt([],Lt(t.filter((function(t){return"INTERNAL"in t})).map((function(t){return t.INTERNAL.delete()})))),Lt(t.filter((function(t){return"_delete"in t})).map((function(t){return t._delete()})))))];case 1:return e.sent(),[2]}}))}))},t.prototype.isComponentSet=function(){return null!=this.component},t.prototype.isInitialized=function(t){return void 0===t&&(t=te),this.instances.has(t)},t.prototype.getOptions=function(t){return void 0===t&&(t=te),this.instancesOptions.get(t)||{}},t.prototype.initialize=function(t){var e,n;void 0===t&&(t={});var r=t.options,i=void 0===r?{}:r,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(this.name+"("+s+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var o=this.getOrInitializeService({instanceIdentifier:s,options:i});try{for(var a=Ot(this.instancesDeferred.entries()),c=a.next();!c.done;c=a.next()){var l=Lt(c.value,2),u=l[0],h=l[1];s===this.normalizeInstanceIdentifier(u)&&h.resolve(o)}}catch(t){e={error:t}}finally{try{c&&!c.done&&(n=a.return)&&n.call(a)}finally{if(e)throw e.error}}return o},t.prototype.onInit=function(t,e){var n,r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);var s=this.instances.get(r);return s&&t(s,r),function(){i.delete(t)}},t.prototype.invokeOnInitCallbacks=function(t,e){var n,r,i=this.onInitCallbacks.get(e);if(i)try{for(var s=Ot(i),o=s.next();!o.done;o=s.next()){var a=o.value;try{a(t,e)}catch(t){}}}catch(t){n={error:t}}finally{try{o&&!o.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}},t.prototype.getOrInitializeService=function(t){var e,n=t.instanceIdentifier,r=t.options,i=void 0===r?{}:r,s=this.instances.get(n);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:(e=n,e===te?void 0:e),options:i}),this.instances.set(n,s),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(s,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,s)}catch(t){}return s||null},t.prototype.normalizeInstanceIdentifier=function(t){return void 0===t&&(t=te),this.component?this.component.multipleInstances?t:te:t},t.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},t}();
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var ne,re,ie=function(){function t(t){this.name=t,this.providers=new Map}return t.prototype.addComponent=function(t){var e=this.getProvider(t.name);if(e.isComponentSet())throw new Error("Component "+t.name+" has already been registered with "+this.name);e.setComponent(t)},t.prototype.addOrOverwriteComponent=function(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)},t.prototype.getProvider=function(t){if(this.providers.has(t))return this.providers.get(t);var e=new ee(t,this);return this.providers.set(t,e),e},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}();
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
    ***************************************************************************** */function se(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),i=0;for(e=0;e<n;e++)for(var s=arguments[e],o=0,a=s.length;o<a;o++,i++)r[i]=s[o];return r}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(re||(re={}));var oe={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},ae=re.INFO,ce=((ne={})[re.DEBUG]="log",ne[re.VERBOSE]="log",ne[re.INFO]="info",ne[re.WARN]="warn",ne[re.ERROR]="error",ne),le=function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!(e<t.logLevel)){var i=(new Date).toISOString(),s=ce[e];if(!s)throw new Error("Attempted to log a message with an invalid logType (value: "+e+")");console[s].apply(console,se(["["+i+"]  "+t.name+":"],n))}},ue=function(){function t(t){this.name=t,this._logLevel=ae,this._logHandler=le,this._userLogHandler=null}return Object.defineProperty(t.prototype,"logLevel",{get:function(){return this._logLevel},set:function(t){if(!(t in re))throw new TypeError('Invalid value "'+t+'" assigned to `logLevel`');this._logLevel=t},enumerable:!1,configurable:!0}),t.prototype.setLogLevel=function(t){this._logLevel="string"==typeof t?oe[t]:t},Object.defineProperty(t.prototype,"logHandler",{get:function(){return this._logHandler},set:function(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(t){this._userLogHandler=t},enumerable:!1,configurable:!0}),t.prototype.debug=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,se([this,re.DEBUG],t)),this._logHandler.apply(this,se([this,re.DEBUG],t))},t.prototype.log=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,se([this,re.VERBOSE],t)),this._logHandler.apply(this,se([this,re.VERBOSE],t))},t.prototype.info=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,se([this,re.INFO],t)),this._logHandler.apply(this,se([this,re.INFO],t))},t.prototype.warn=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,se([this,re.WARN],t)),this._logHandler.apply(this,se([this,re.WARN],t))},t.prototype.error=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,se([this,re.ERROR],t)),this._logHandler.apply(this,se([this,re.ERROR],t))},t}();
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class he{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const de="@firebase/app",fe=new ue("@firebase/app"),pe="[DEFAULT]",ge={[de]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},me=new Map,ye=new Map;function ve(t,e){try{t.container.addComponent(e)}catch(n){fe.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function we(t){const e=t.name;if(ye.has(e))return fe.debug(`There were multiple attempts to register component ${e}.`),!1;ye.set(e,t);for(const e of me.values())ve(e,t);return!0}function be(t,e){return t.container.getProvider(e)}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Se=new zt("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Ee{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Zt("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Se.create("app-deleted",{appName:this._name})}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Te(t,e,n){var r;let i=null!==(r=ge[t])&&void 0!==r?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const t=[`Unable to register library "${i}" with version "${e}":`];return s&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void fe.warn(t.join(" "))}we(new Zt(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var _e;we(new Zt("platform-logger",(t=>new he(t)),"PRIVATE")),Te(de,"0.7.0",_e),Te("fire-js","");function Ie(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
Te("firebase","9.0.2","app");const Ae=Ie,Ne=new zt("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Ce=new ue("@firebase/auth");function xe(t,...e){Ce.logLevel<=re.ERROR&&Ce.error(`Auth (9.0.0): ${t}`,...e)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ke(t,...e){throw De(t,...e)}function $e(t,...e){return De(t,...e)}function De(t,...e){if("string"!=typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ne.create(t,...e)}function Oe(t,e,...n){if(!t)throw De(e,...n)}function Le(t){const e="INTERNAL ASSERTION FAILED: "+t;throw xe(e),new Error(e)}function Re(t,e){t||Le(e)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Pe=new Map;function Me(t){Re(t instanceof Function,"Expected a class definition");let e=Pe.get(t);return e?(Re(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Pe.set(t,e),e)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ue(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Fe(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==Ue()&&"https:"!==Ue()&&!Vt()&&!("connection"in navigator)||navigator.onLine}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Ve{constructor(t,e){this.shortDelay=t,this.longDelay=e,Re(e>t,"Short delay should be less than long delay!"),this.isMobile=Ft()||jt()}get(){return Fe()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class je{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Le("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Le("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Le("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Be={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},qe=new Ve(3e4,6e4);
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function ze(t,e,n,r,i={}){return Ke(t,i,(()=>{let i={},s={};r&&("GET"===e?s=r:i={body:JSON.stringify(r)});const o=Xt(Object.assign({key:t.config.apiKey},s)).slice(1),a=new(je.headers());return a.set("Content-Type","application/json"),a.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&a.set("X-Firebase-Locale",t.languageCode),je.fetch()(He(t,t.config.apiHost,n,o),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},i))}))}async function Ke(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Be),e);try{const e=new We(t),i=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw Ge(t,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const e=i.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Ge(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Ge(t,"email-already-in-use",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw function(t,e,n){const r=Object.assign(Object.assign({},Ae()),{[e]:n});return new zt("auth","Firebase",r).create(e,{appName:t.name})}(t,a,o);ke(t,a)}}catch(e){if(e instanceof qt)throw e;ke(t,"network-request-failed")}}function He(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?function(t,e){Re(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}(t.config,i):`${t.config.apiScheme}://${i}`}class We{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e($e(this.auth,"timeout"))),qe.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ge(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=$e(t,e,r);return i.customData._tokenResponse=n,i}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Xe(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(t){}}function Qe(t){return 1e3*Number(t)}function Je(t){const[e,n,r]=t.split(".");if(void 0===e||void 0===n||void 0===r)return xe("JWT malformed, contained fewer than 3 sections"),null;try{const t=function(t){try{return Pt.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null}(n);return t?JSON.parse(t):(xe("Failed to decode base64 JWT payload"),null)}catch(t){return xe("Caught error parsing JWT payload as JSON",t),null}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function Ye(t,e,n=!1){if(n)return e;try{return await e}catch(e){throw e instanceof qt&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e)&&t.auth.currentUser===t&&await t.auth.signOut(),e}}class Ze{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===t.code&&this.schedule(!0))}this.schedule()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class tn{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xe(this.lastLoginAt),this.creationTime=Xe(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function en(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ye(t,async function(t,e){return ze(t,"POST","/v1/accounts:lookup",e)}(n,{idToken:r}));Oe(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?s.providerUserInfo.map((t=>{var{providerId:e}=t,n=kt(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=t.providerData,l=o,[...c.filter((t=>!l.some((e=>e.providerId===t.providerId)))),...l]);var c,l;const u=t.isAnonymous,h=!(t.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new tn(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class nn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){Oe(t.idToken,"internal-error"),Oe(void 0!==t.idToken,"internal-error"),Oe(void 0!==t.refreshToken,"internal-error");const e="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):function(t){const e=Je(t);return Oe(e,"internal-error"),Oe(void 0!==e.exp,"internal-error"),Oe(void 0!==e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return Oe(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function(t,e){const n=await Ke(t,{},(()=>{const n=Xt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,s=He(t,r,"/v1/token",`key=${i}`);return je.fetch()(s,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,s=new nn;return n&&(Oe("string"==typeof n,"internal-error",{appName:t}),s.refreshToken=n),r&&(Oe("string"==typeof r,"internal-error",{appName:t}),s.accessToken=r),i&&(Oe("number"==typeof i,"internal-error",{appName:t}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new nn,this.toJSON())}_performRefresh(){return Le("not implemented")}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function rn(t,e){Oe("string"==typeof t||void 0===t,"internal-error",{appName:e})}class sn{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=kt(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new Ze(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.metadata=new tn(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await Ye(this,this.stsTokenManager.getToken(this.auth,t));return Oe(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return async function(t,e=!1){const n=Yt(t),r=await n.getIdToken(e),i=Je(r);Oe(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Xe(Qe(i.auth_time)),issuedAtTime:Xe(Qe(i.iat)),expirationTime:Xe(Qe(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const e=Yt(t);await en(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}(this)}_assign(t){this!==t&&(Oe(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new sn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){Oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await en(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Ye(this,async function(t,e){return ze(t,"POST","/v1/accounts:delete",e)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,s,o,a,c,l;const u=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,d=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,g=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(l=e.lastLoginAt)&&void 0!==l?l:void 0,{uid:v,emailVerified:w,isAnonymous:b,providerData:S,stsTokenManager:E}=e;Oe(v&&E,t,"internal-error");const T=nn.fromJSON(this.name,E);Oe("string"==typeof v,t,"internal-error"),rn(u,t.name),rn(h,t.name),Oe("boolean"==typeof w,t,"internal-error"),Oe("boolean"==typeof b,t,"internal-error"),rn(d,t.name),rn(f,t.name),rn(p,t.name),rn(g,t.name),rn(m,t.name),rn(y,t.name);const _=new sn({uid:v,auth:t,email:h,emailVerified:w,displayName:u,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:m,lastLoginAt:y});return S&&Array.isArray(S)&&(_.providerData=S.map((t=>Object.assign({},t)))),g&&(_._redirectEventId=g),_}static async _fromIdTokenResponse(t,e,n=!1){const r=new nn;r.updateFromServerResponse(e);const i=new sn({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await en(i),i}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class on{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}on.type="NONE";const an=on;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function cn(t,e,n){return`firebase:${t}:${e}:${n}`}class ln{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=cn(this.userKey,r.apiKey,i),this.fullPersistenceKey=cn("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?sn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new ln(Me(an),t,n);const r=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let i=r[0]||Me(an);const s=cn(n,t.config.apiKey,t.name);let o=null;for(const n of e)try{const e=await n._get(s);if(e){const r=sn._fromJSON(t,e);n!==i&&(o=r),i=n;break}}catch(t){}const a=r.filter((t=>t._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==i)try{await t._remove(s)}catch(t){}}))),new ln(i,t,n)):new ln(i,t,n)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function un(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dn(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(function(t=Ut()){return/firefox\//i.test(t)}(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(pn(e))return"Blackberry";if(gn(e))return"Webos";if(hn(e))return"Safari";if((e.includes("chrome/")||function(t=Ut()){return/crios\//i.test(t)}(e))&&!e.includes("edge/"))return"Chrome";if(fn(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function hn(t=Ut()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dn(t=Ut()){return/iemobile/i.test(t)}function fn(t=Ut()){return/android/i.test(t)}function pn(t=Ut()){return/blackberry/i.test(t)}function gn(t=Ut()){return/webos/i.test(t)}function mn(t=Ut()){return/iphone|ipad|ipod/i.test(t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function yn(t,e=[]){let n;switch(t){case"Browser":n=un(Ut());break;case"Worker":n=`${un(Ut())}-${t}`;break;default:n=t}return`${n}/JsCore/9.0.0/${e.length?e.join(","):"FirebaseCore-web"}`}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class vn{constructor(t,e){this.app=t,this.config=e,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wn(this),this.idTokenSubscription=new wn(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ne,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=e.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=Me(e)),this._initializationPromise=this.queue((async()=>{var n;this._deleted||(this.persistenceManager=await ln.create(this,t),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(e),this._deleted||(this._isInitialized=!0)))})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t):void 0}async initializeCurrentUser(t){var e;let n=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,i=null==n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(t);r&&r!==i||!(null==s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(Oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(t){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await en(t)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?Yt(t):null;return e&&Oe(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&Oe(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Me(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new zt("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&Me(t)||this._popupRedirectResolver;Oe(e,this,"argument-error"),this.redirectPersistenceManager=await ln.create(this,[Me(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"==typeof e?e:e.next.bind(e),s=this._isInitialized?Promise.resolve():this._initializationPromise;return Oe(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof e?t.addObserver(e,n,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return Oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=yn(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}class wn{constructor(t){var e,n;this.auth=t,this.observer=null,this.addObserver=(n=new Qt((t=>this.observer=t),e)).subscribe.bind(n)}get next(){return Oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}const bn="__sak";
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Sn{constructor(t,e){this.storage=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(bn,"1"),this.storage.removeItem(bn),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class En extends Sn{constructor(){super(window.localStorage,"LOCAL"),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const t=Ut();return hn(t)||mn(t)}()&&function(){try{return!(!window||window===window.top)}catch(t){return!1}}(),this.fallbackToPolling=function(t=Ut()){return mn(t)||fn(t)||gn(t)||pn(t)||/windows phone/i.test(t)||dn(t)}(),this._shouldAllowMigration=!0,this.boundEventHandler=this.onStorageEvent.bind(this)}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);Bt()&&10===document.documentMode&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,10):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}En.type="LOCAL";const Tn=En;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(class extends Sn{constructor(){super(window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}).type="SESSION",new Ve(3e4,6e4),
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
new Ve(2e3,1e4),
/**
     * @license
     * Copyright 2020 Google LLC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
new Ve(3e4,6e4),
/**
     * @license
     * Copyright 2020 Google LLC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
new Ve(5e3,15e3);var _n;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class In{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(t)}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){Oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function An(){return"true"===process.env.DEMO}let Nn;function Cn(){if(void 0!==Nn)return Nn;if(!An)return Nn=!1,!1;try{Nn=window.self!==window.top}catch(t){Nn=!0}return Nn}_n="Browser",we(new Zt("auth",((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),{apiKey:r,authDomain:i}=n.options;return(t=>{Oe(r&&!r.includes(":"),"invalid-api-key",{appName:t.name}),Oe(!(null==i?void 0:i.includes(":")),"argument-error",{appName:t.name});const n={apiKey:r,authDomain:i,clientPlatform:_n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yn(_n)},s=new vn(t,n);return function(t,e){const n=(null==e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Me);(null==e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null==e?void 0:e.popupRedirectResolver)}(s,e),s})(n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{t.getProvider("auth-internal").initialize()}))),we(new Zt("auth-internal",(t=>(t=>new In(t))(function(t){return Yt(t)}(t.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),Te("@firebase/auth","0.17.2",function(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(_n));const xn=[];function kn(e,n=t){let r;const i=[];function s(t){if(o(e,t)&&(e=t,r)){const t=!xn.length;for(let t=0;t<i.length;t+=1){const n=i[t];n[1](),xn.push(n,e)}if(t){for(let t=0;t<xn.length;t+=2)xn[t][0](xn[t+1]);xn.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(o,a=t){const c=[o,a];return i.push(c),1===i.length&&(r=n(s)||t),o(e),()=>{const t=i.indexOf(c);-1!==t&&i.splice(t,1),0===i.length&&(r(),r=null)}}}}function $n(e,n,r){const o=!Array.isArray(e),c=o?[e]:e,l=n.length<2;return{subscribe:kn(r,(e=>{let r=!1;const u=[];let h=0,d=t;const f=()=>{if(h)return;d();const r=n(o?u[0]:u,e);l?e(r):d=s(r)?r:t},p=c.map(((t,e)=>a(t,(t=>{u[e]=t,h&=~(1<<e),r&&f()}),(()=>{h|=1<<e}))));return r=!0,f(),function(){i(p),d()}})).subscribe}}let Dn=0;const On=kn([]),Ln=On;function Rn(t){const e=t-1;return e*e*e+1}function Pn(t,{delay:n=0,duration:r=400,easing:i=e}={}){const s=+getComputedStyle(t).opacity;return{delay:n,duration:r,easing:i,css:t=>"opacity: "+t*s}}function Mn(t,{delay:e=0,duration:n=400,easing:r=Rn}={}){const i=getComputedStyle(t),s=+i.opacity,o=parseFloat(i.height),a=parseFloat(i.paddingTop),c=parseFloat(i.paddingBottom),l=parseFloat(i.marginTop),u=parseFloat(i.marginBottom),h=parseFloat(i.borderTopWidth),d=parseFloat(i.borderBottomWidth);return{delay:e,duration:n,easing:r,css:t=>`overflow: hidden;opacity: ${Math.min(20*t,1)*s};height: ${t*o}px;padding-top: ${t*a}px;padding-bottom: ${t*c}px;margin-top: ${t*l}px;margin-bottom: ${t*u}px;border-top-width: ${t*h}px;border-bottom-width: ${t*d}px;`}}function Un(t,{delay:e=0,duration:n=400,easing:r=Rn,start:i=0,opacity:s=0}={}){const o=getComputedStyle(t),a=+o.opacity,c="none"===o.transform?"":o.transform,l=1-i,u=a*(1-s);return{delay:e,duration:n,easing:r,css:(t,e)=>`\n\t\t\ttransform: ${c} scale(${1-l*e});\n\t\t\topacity: ${a-u*e}\n\t\t`}}function Fn(t){let e,n,r,i;return{c(){e=_("p"),n=A(t[0]),D(e,"class","svelte-vtwz7k")},m(t,r){E(t,e,r),S(e,n),i=!0},p(t,[e]){(!i||1&e)&&L(n,t[0])},i(t){i||(st((()=>{r||(r=bt(e,Mn,{},!0)),r.run(1)})),i=!0)},o(t){r||(r=bt(e,Mn,{},!1)),r.run(0),i=!1},d(t){t&&T(e),t&&r&&r.end()}}}function Vn(t,e,n){let{text:r}=e;return t.$$set=t=>{"text"in t&&n(0,r=t.text)},[r]}class jn extends Ct{constructor(t){super(),Nt(this,t,Vn,Fn,o,{text:0})}}function Bn(t,e,n){const r=t.slice();return r[1]=e[n],r}function qn(t,e){let n,r,i;return r=new jn({props:{text:e[1].text}}),{key:t,first:null,c(){n=C(),_t(r.$$.fragment),this.first=n},m(t,e){E(t,n,e),It(r,t,e),i=!0},p(t,n){e=t;const i={};1&n&&(i.text=e[1].text),r.$set(i)},i(t){i||(yt(r.$$.fragment,t),i=!0)},o(t){vt(r.$$.fragment,t),i=!1},d(t){t&&T(n),At(r,t)}}}function zn(t){let e,n,r=[],i=new Map,s=t[0];const o=t=>t[1].idx;for(let e=0;e<s.length;e+=1){let n=Bn(t,s,e),a=o(n);i.set(a,r[e]=qn(a,n))}return{c(){e=_("div");for(let t=0;t<r.length;t+=1)r[t].c();D(e,"class","toastContainer svelte-13t1gn0")},m(t,i){E(t,e,i);for(let t=0;t<r.length;t+=1)r[t].m(e,null);n=!0},p(t,[n]){1&n&&(s=t[0],gt(),r=Tt(r,n,o,1,t,s,i,e,Et,qn,null,Bn),mt())},i(t){if(!n){for(let t=0;t<s.length;t+=1)yt(r[t]);n=!0}},o(t){for(let t=0;t<r.length;t+=1)vt(r[t]);n=!1},d(t){t&&T(e);for(let t=0;t<r.length;t+=1)r[t].d()}}}function Kn(t,e,n){let r;return l(t,Ln,(t=>n(0,r=t))),[r]}class Hn extends Ct{constructor(t){super(),Nt(this,t,Kn,zn,o,{})}}var Wn={prefix:"fas",iconName:"cog",icon:[512,512,[],"f013","M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"]},Gn={prefix:"fas",iconName:"download",icon:[512,512,[],"f019","M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"]},Xn={prefix:"fas",iconName:"home",icon:[576,512,[],"f015","M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"]},Qn={prefix:"fas",iconName:"play",icon:[448,512,[],"f04b","M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"]},Jn={prefix:"fas",iconName:"redo",icon:[512,512,[],"f01e","M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z"]},Yn={prefix:"fas",iconName:"stop",icon:[448,512,[],"f04d","M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"]},Zn={prefix:"fas",iconName:"thumbtack",icon:[384,512,[],"f08d","M298.028 214.267L285.793 96H328c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v48c0 13.255 10.745 24 24 24h42.207L85.972 214.267C37.465 236.82 0 277.261 0 328c0 13.255 10.745 24 24 24h136v104.007c0 1.242.289 2.467.845 3.578l24 48c2.941 5.882 11.364 5.893 14.311 0l24-48a8.008 8.008 0 0 0 .845-3.578V352h136c13.255 0 24-10.745 24-24-.001-51.183-37.983-91.42-85.973-113.733z"]},tr={prefix:"fas",iconName:"undo",icon:[512,512,[],"f0e2","M212.333 224.333H12c-6.627 0-12-5.373-12-12V12C0 5.373 5.373 0 12 0h48c6.627 0 12 5.373 12 12v78.112C117.773 39.279 184.26 7.47 258.175 8.007c136.906.994 246.448 111.623 246.157 248.532C504.041 393.258 393.12 504 256.333 504c-64.089 0-122.496-24.313-166.51-64.215-5.099-4.622-5.334-12.554-.467-17.42l33.967-33.967c4.474-4.474 11.662-4.717 16.401-.525C170.76 415.336 211.58 432 256.333 432c97.268 0 176-78.716 176-176 0-97.267-78.716-176-176-176-58.496 0-110.28 28.476-142.274 72.333h98.274c6.627 0 12 5.373 12 12v48c0 6.627-5.373 12-12 12z"]},er={prefix:"fas",iconName:"volume-down",icon:[384,512,[],"f027","M215.03 72.04L126.06 161H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V89.02c0-21.47-25.96-31.98-40.97-16.98zm123.2 108.08c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 229.28 336 242.62 336 257c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.87z"]},nr={prefix:"fas",iconName:"volume-mute",icon:[512,512,[],"f6a9","M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM461.64 256l45.64-45.64c6.3-6.3 6.3-16.52 0-22.82l-22.82-22.82c-6.3-6.3-16.52-6.3-22.82 0L416 210.36l-45.64-45.64c-6.3-6.3-16.52-6.3-22.82 0l-22.82 22.82c-6.3 6.3-6.3 16.52 0 22.82L370.36 256l-45.63 45.63c-6.3 6.3-6.3 16.52 0 22.82l22.82 22.82c6.3 6.3 16.52 6.3 22.82 0L416 301.64l45.64 45.64c6.3 6.3 16.52 6.3 22.82 0l22.82-22.82c6.3-6.3 6.3-16.52 0-22.82L461.64 256z"]},rr={prefix:"fas",iconName:"volume-off",icon:[256,512,[],"f026","M215 71l-89 89H24a24 24 0 0 0-24 24v144a24 24 0 0 0 24 24h102.06L215 441c15 15 41 4.47 41-17V88c0-21.47-26-32-41-17z"]},ir={prefix:"fas",iconName:"volume-up",icon:[576,512,[],"f028","M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z"]};const sr=parseFloat;function or(t,e=";"){let n;if(Array.isArray(t))n=t.filter((t=>t));else{n=[];for(const e in t)t[e]&&n.push(`${e}:${t[e]}`)}return n.join(e)}function ar(t){let e,n,r,i,s,o,a;function c(t,e){return"string"==typeof t[7][4]?lr:cr}let l=c(t),u=l(t);return{c(){e=I("svg"),n=I("g"),r=I("g"),u.c(),D(r,"transform",t[10]),D(n,"transform",i=`translate(${t[7][0]/2} ${t[7][1]/2})`),D(n,"transform-origin",s=t[7][0]/4+" 0"),D(e,"id",t[0]),D(e,"class",o=d(t[8])+" svelte-1cj2gr0"),D(e,"style",t[9]),D(e,"viewBox",a=`0 0 ${t[7][0]} ${t[7][1]}`),D(e,"aria-hidden","true"),D(e,"role","img"),D(e,"xmlns","http://www.w3.org/2000/svg")},m(t,i){E(t,e,i),S(e,n),S(n,r),u.m(r,null)},p(t,h){l===(l=c(t))&&u?u.p(t,h):(u.d(1),u=l(t),u&&(u.c(),u.m(r,null))),1024&h&&D(r,"transform",t[10]),128&h&&i!==(i=`translate(${t[7][0]/2} ${t[7][1]/2})`)&&D(n,"transform",i),128&h&&s!==(s=t[7][0]/4+" 0")&&D(n,"transform-origin",s),1&h&&D(e,"id",t[0]),256&h&&o!==(o=d(t[8])+" svelte-1cj2gr0")&&D(e,"class",o),512&h&&D(e,"style",t[9]),128&h&&a!==(a=`0 0 ${t[7][0]} ${t[7][1]}`)&&D(e,"viewBox",a)},d(t){t&&T(e),u.d()}}}function cr(t){let e,n,r,i,s,o,a,c,l,u;return{c(){e=I("path"),o=I("path"),D(e,"d",n=t[7][4][0]),D(e,"fill",r=t[3]||t[1]||"currentColor"),D(e,"fill-opacity",i=0!=t[6]?t[4]:t[5]),D(e,"transform",s=`translate(${t[7][0]/-2} ${t[7][1]/-2})`),D(o,"d",a=t[7][4][1]),D(o,"fill",c=t[2]||t[1]||"currentColor"),D(o,"fill-opacity",l=0!=t[6]?t[5]:t[4]),D(o,"transform",u=`translate(${t[7][0]/-2} ${t[7][1]/-2})`)},m(t,n){E(t,e,n),E(t,o,n)},p(t,h){128&h&&n!==(n=t[7][4][0])&&D(e,"d",n),10&h&&r!==(r=t[3]||t[1]||"currentColor")&&D(e,"fill",r),112&h&&i!==(i=0!=t[6]?t[4]:t[5])&&D(e,"fill-opacity",i),128&h&&s!==(s=`translate(${t[7][0]/-2} ${t[7][1]/-2})`)&&D(e,"transform",s),128&h&&a!==(a=t[7][4][1])&&D(o,"d",a),6&h&&c!==(c=t[2]||t[1]||"currentColor")&&D(o,"fill",c),112&h&&l!==(l=0!=t[6]?t[5]:t[4])&&D(o,"fill-opacity",l),128&h&&u!==(u=`translate(${t[7][0]/-2} ${t[7][1]/-2})`)&&D(o,"transform",u)},d(t){t&&T(e),t&&T(o)}}}function lr(t){let e,n,r,i;return{c(){e=I("path"),D(e,"d",n=t[7][4]),D(e,"fill",r=t[1]||t[2]||"currentColor"),D(e,"transform",i=`translate(${t[7][0]/-2} ${t[7][1]/-2})`)},m(t,n){E(t,e,n)},p(t,s){128&s&&n!==(n=t[7][4])&&D(e,"d",n),6&s&&r!==(r=t[1]||t[2]||"currentColor")&&D(e,"fill",r),128&s&&i!==(i=`translate(${t[7][0]/-2} ${t[7][1]/-2})`)&&D(e,"transform",i)},d(t){t&&T(e)}}}function ur(e){let n,r=e[7][4]&&ar(e);return{c(){r&&r.c(),n=C()},m(t,e){r&&r.m(t,e),E(t,n,e)},p(t,[e]){t[7][4]?r?r.p(t,e):(r=ar(t),r.c(),r.m(n.parentNode,n)):r&&(r.d(1),r=null)},i:t,o:t,d(t){r&&r.d(t),t&&T(n)}}}function hr(t,e,n){let r,i,s,o,{class:a=""}=e,{id:c=""}=e,{style:l=""}=e,{icon:u}=e,{size:h=""}=e,{color:d=""}=e,{fw:f=!1}=e,{pull:p=""}=e,{scale:g=1}=e,{translateX:m=0}=e,{translateY:y=0}=e,{rotate:v=""}=e,{flip:w=!1}=e,{spin:b=!1}=e,{pulse:S=!1}=e,{primaryColor:E=""}=e,{secondaryColor:T=""}=e,{primaryOpacity:_=1}=e,{secondaryOpacity:I=.4}=e,{swapOpacity:A=!1}=e;return t.$$set=t=>{"class"in t&&n(11,a=t.class),"id"in t&&n(0,c=t.id),"style"in t&&n(12,l=t.style),"icon"in t&&n(13,u=t.icon),"size"in t&&n(14,h=t.size),"color"in t&&n(1,d=t.color),"fw"in t&&n(15,f=t.fw),"pull"in t&&n(16,p=t.pull),"scale"in t&&n(17,g=t.scale),"translateX"in t&&n(18,m=t.translateX),"translateY"in t&&n(19,y=t.translateY),"rotate"in t&&n(20,v=t.rotate),"flip"in t&&n(21,w=t.flip),"spin"in t&&n(22,b=t.spin),"pulse"in t&&n(23,S=t.pulse),"primaryColor"in t&&n(2,E=t.primaryColor),"secondaryColor"in t&&n(3,T=t.secondaryColor),"primaryOpacity"in t&&n(4,_=t.primaryOpacity),"secondaryOpacity"in t&&n(5,I=t.secondaryOpacity),"swapOpacity"in t&&n(6,A=t.swapOpacity)},t.$$.update=()=>{8192&t.$$.dirty&&n(7,r=u&&u.icon||[0,0,"",[],""]),12584960&t.$$.dirty&&n(8,i=or([a,"svelte-fa",b&&"spin",S&&"pulse"]," ")),118784&t.$$.dirty&&n(9,s=function(t,e,n,r){let i,s,o,a,c,l="-.125em";return r&&(c="center",s="1.25em"),n&&(i=n),e&&("lg"==e?(a="1.33333em",o=".75em",l="-.225em"):a="xs"==e?".75em":"sm"==e?".875em":e.replace("x","em")),or([or({float:i,width:s,height:"1em","line-height":o,"font-size":a,"text-align":c,"vertical-align":l,"transform-origin":"center",overflow:"visible"}),t])}(l,h,p,f)),4063232&t.$$.dirty&&n(10,o=function(t,e,n,r,i,s=1,o="",a=""){let c=1,l=1;return i&&("horizontal"==i?c=-1:"vertical"==i?l=-1:c=l=-1),or([`translate(${sr(e)*s}${o},${sr(n)*s}${o})`,`scale(${c*sr(t)},${l*sr(t)})`,r&&`rotate(${r}${a})`]," ")}(g,m,y,v,w,512))},[c,d,E,T,_,I,A,r,i,s,o,a,l,u,h,f,p,g,m,y,v,w,b,S]}class dr extends Ct{constructor(t){super(),Nt(this,t,hr,ur,o,{class:11,id:0,style:12,icon:13,size:14,color:1,fw:15,pull:16,scale:17,translateX:18,translateY:19,rotate:20,flip:21,spin:22,pulse:23,primaryColor:2,secondaryColor:3,primaryOpacity:4,secondaryOpacity:5,swapOpacity:6})}}function fr(t,e,n){return Math.min(Math.max(t,e),n)}function pr(t,e){const n=t[e];if(void 0===n)throw new Error(`Idx ${e} did not exist in list ${t}, asserted that it did`);return n}function gr(t,e){const n=t[e];if(void 0===n)throw new Error(`Idx ${e} did not exist in list ${t}, asserted that it did`);return n}function mr(t,e){for(const n in t){const r=parseInt(n);e(r,t[r])}}const yr={};let vr=-1;function wr(t){return gr(yr,t)}function br(){return vr}function Sr(t,e,n=((t,e)=>t!==e)){let r=e;return $n(t,((t,e)=>{n(t,r)&&(r=t,e(t))}),r)}function Er(t){let e;return $n(t,(t=>{const n={last:e,current:t};return e=t,n}))}function Tr(t){let e,n;return $n(t,((t,r)=>{e=t,void 0===n&&(n=it().then((()=>{r(e),e=void 0,n=void 0})))}))}function _r(t){return{subscribe:t.subscribe}}function Ir({subscribe:t},e){let n;t((t=>n=t));return{subscribe:t,set:t=>{n!==t&&e(t)},update:t=>{const r=t(n);e(r)}}}const Ar=kn(!1),Nr=kn(0),Cr=kn(0),xr=[];let kr;function $r(t){if(null===t)return null;if(void 0!==kr&&Dr(t,kr))return kr.idx;const e=xr.findIndex((e=>Dr(t,e)));if(-1===e)return null;const n=pr(xr,e);return kr=Object.assign({idx:e},n),e}function Dr(t,e){return void 0!==e&&(!(e.startTime>t)&&!(e.endTime<t))}const Or=$n([Ar,Nr],(([t,e],n)=>{if(!t)return void n(null);const r=$r(e);null!==r&&n(r)}));Er(Or).subscribe((({last:t,current:e})=>{null!=t&&wr(t).playingStore.set(!1),null!==e&&wr(e).playingStore.set(!0)}));var Lr="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Rr=function(t){var e={exports:{}};return t(e,e.exports),e.exports}((function(t,e){!function(){function e(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}function n(t,e,n){var r=new XMLHttpRequest;r.open("GET",t),r.responseType="blob",r.onload=function(){a(r.response,e,n)},r.onerror=function(){console.error("could not download file")},r.send()}function r(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function i(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(n){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var s="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof Lr&&Lr.global===Lr?Lr:void 0,o=s.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),a=s.saveAs||("object"!=typeof window||window!==s?function(){}:"download"in HTMLAnchorElement.prototype&&!o?function(t,e,o){var a=s.URL||s.webkitURL,c=document.createElement("a");e=e||t.name||"download",c.download=e,c.rel="noopener","string"==typeof t?(c.href=t,c.origin===location.origin?i(c):r(c.href)?n(t,e,o):i(c,c.target="_blank")):(c.href=a.createObjectURL(t),setTimeout((function(){a.revokeObjectURL(c.href)}),4e4),setTimeout((function(){i(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,s,o){if(s=s||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(e(t,o),s);else if(r(t))n(t,s,o);else{var a=document.createElement("a");a.href=t,a.target="_blank",setTimeout((function(){i(a)}))}}:function(t,e,r,i){if((i=i||open("","_blank"))&&(i.document.title=i.document.body.innerText="downloading..."),"string"==typeof t)return n(t,e,r);var a="application/octet-stream"===t.type,c=/constructor/i.test(s.HTMLElement)||s.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||a&&c||o)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var t=u.result;t=l?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=t:location=t,i=null},u.readAsDataURL(t)}else{var h=s.URL||s.webkitURL,d=h.createObjectURL(t);i?i.location=d:location.href=d,i=null,setTimeout((function(){h.revokeObjectURL(d)}),4e4)}});s.saveAs=a.saveAs=a,t.exports=a}()}));function Pr(t){const e=Object.entries(yr).map((([t,e])=>[parseInt(t),e]));e.sort(((t,e)=>t[0]-e[0]));const n=e.map((t=>t[1])),r="txt"===t?function(t){let e="";for(const{displayTextStore:n,endParagraphStore:r}of t){const t=c(n);if(0===t.trim().length)continue;e+=t;e+=c(r)?"\n":" "}return e}(n):function(t){let e,n="";const r=[];for(const{startTimeStore:i,endTimeStore:s,displayTextStore:o,endParagraphStore:a}of t){const t=c(o);0!==t.trim().length&&(void 0===e&&(e=c(i)),n+=" ",n+=t,c(a)&&(r.push({startTime:e,endTime:c(s),text:n.trim()}),e=void 0,n=""))}return r.map(Mr).reduce(((t,e)=>t+e+"\n\n"),"").trim()}(n),i=new Blob([r],{type:"text/plain;charset=utf-8"});Rr.saveAs(i,"lexoralExport."+t)}function Mr({startTime:t,endTime:e,text:n},r){return`\n${r+1}\n${Ur(t)} --\x3e ${Ur(e)}\n${n}\n  `.trim()}function Ur(t){const e=Math.floor(t/3600),n=Math.floor((t-3600*e)/60),r=Math.floor(t%60),i=Math.floor(t%1*1e3);return`${e.toString().padStart(2,"0")}:${n.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")},${i.toString().padStart(2,"0")}`}let Fr;const Vr=kn(Fr);function jr(){if(An())return"demo";if(void 0===Fr)throw new Error("Authenticated API is called before the auth state has updated");return Fr.uid}function Br(){if(An())return"demo";const t=new URLSearchParams(window.location.search).get("id");if(null===t)throw new Error("Missing transcript ID");return t}async function qr(){return An()?async function(){return fetch("/assets/demo.json").then((t=>t.json())).then((t=>({transcript:t,audioUrl:"/assets/demo.mp3"})))}
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */():async function(){return function(){if(void 0===Fr)throw new Error("Authenticated API is called before the auth state has updated");return Fr}().getIdToken().then((t=>fetch(`https://europe-west2-${process.env.PROJECT_ID}.cloudfunctions.net/fetch?transcript=${Br()}`,{method:"get",headers:{Authorization:`Bearer ${t}`}}))).then((t=>{if(t.ok)return t;throw new Error("response was not OK: "+t.status)})).then((t=>t.json()))}()}Vr.subscribe((t=>Fr=t));var zr=function(t,e){return(zr=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)};function Kr(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}var Hr,Wr="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},Gr=Gr||{},Xr=Wr||self;function Qr(){}function Jr(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function Yr(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var Zr="closure_uid_"+(1e9*Math.random()>>>0),ti=0;function ei(t,e,n){return t.call.apply(t.bind,arguments)}function ni(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function ri(t,e,n){return(ri=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ei:ni).apply(null,arguments)}function ii(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function si(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function oi(){this.s=this.s,this.o=this.o}var ai={};oi.prototype.s=!1,oi.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var t=function(t){return Object.prototype.hasOwnProperty.call(t,Zr)&&t[Zr]||(t[Zr]=++ti)}(this);delete ai[t]}},oi.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};var ci=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(var n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},li=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){for(var r=t.length,i="string"==typeof t?t.split(""):t,s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function ui(t){return Array.prototype.concat.apply([],arguments)}function hi(t){var e=t.length;if(0<e){for(var n=Array(e),r=0;r<e;r++)n[r]=t[r];return n}return[]}function di(t){return/^[\s\xa0]*$/.test(t)}var fi,pi=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function gi(t,e){return-1!=t.indexOf(e)}function mi(t,e){return t<e?-1:t>e?1:0}t:{var yi=Xr.navigator;if(yi){var vi=yi.userAgent;if(vi){fi=vi;break t}}fi=""}function wi(t,e,n){for(var r in t)e.call(n,t[r],r,t)}function bi(t){var e={};for(var n in t)e[n]=t[n];return e}var Si="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ei(t,e){for(var n,r,i=1;i<arguments.length;i++){for(n in r=arguments[i])t[n]=r[n];for(var s=0;s<Si.length;s++)n=Si[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ti(t){return Ti[" "](t),t}Ti[" "]=Qr;var _i,Ii,Ai=gi(fi,"Opera"),Ni=gi(fi,"Trident")||gi(fi,"MSIE"),Ci=gi(fi,"Edge"),xi=Ci||Ni,ki=gi(fi,"Gecko")&&!(gi(fi.toLowerCase(),"webkit")&&!gi(fi,"Edge"))&&!(gi(fi,"Trident")||gi(fi,"MSIE"))&&!gi(fi,"Edge"),$i=gi(fi.toLowerCase(),"webkit")&&!gi(fi,"Edge");function Di(){var t=Xr.document;return t?t.documentMode:void 0}t:{var Oi="",Li=(Ii=fi,ki?/rv:([^\);]+)(\)|;)/.exec(Ii):Ci?/Edge\/([\d\.]+)/.exec(Ii):Ni?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Ii):$i?/WebKit\/(\S+)/.exec(Ii):Ai?/(?:Version)[ \/]?(\S+)/.exec(Ii):void 0);if(Li&&(Oi=Li?Li[1]:""),Ni){var Ri=Di();if(null!=Ri&&Ri>parseFloat(Oi)){_i=String(Ri);break t}}_i=Oi}var Pi,Mi={};function Ui(){return function(t){var e=Mi;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){for(var t=0,e=pi(String(_i)).split("."),n=pi("9").split("."),r=Math.max(e.length,n.length),i=0;0==t&&i<r;i++){var s=e[i]||"",o=n[i]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==s[0].length&&0==o[0].length)break;t=mi(0==s[1].length?0:parseInt(s[1],10),0==o[1].length?0:parseInt(o[1],10))||mi(0==s[2].length,0==o[2].length)||mi(s[2],o[2]),s=s[3],o=o[3]}while(0==t)}return 0<=t}))}if(Xr.document&&Ni){var Fi=Di();Pi=Fi||(parseInt(_i,10)||void 0)}else Pi=void 0;var Vi=Pi,ji=function(){if(!Xr.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Xr.addEventListener("test",Qr,e),Xr.removeEventListener("test",Qr,e)}catch(t){}return t}();function Bi(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function qi(t,e){if(Bi.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ki){t:{try{Ti(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:zi[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&qi.Z.h.call(this)}}Bi.prototype.h=function(){this.defaultPrevented=!0},si(qi,Bi);var zi={2:"touch",3:"pen",4:"mouse"};qi.prototype.h=function(){qi.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ki="closure_listenable_"+(1e6*Math.random()|0),Hi=0;function Wi(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++Hi,this.ca=this.fa=!1}function Gi(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Xi(t){this.src=t,this.g={},this.h=0}function Qi(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=ci(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Gi(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function Ji(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}Xi.prototype.add=function(t,e,n,r,i){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=Ji(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):((e=new Wi(e,this.src,s,!!r,i)).fa=n,t.push(e)),e};var Yi="closure_lm_"+(1e6*Math.random()|0),Zi={};function ts(t,e,n,r,i){if(r&&r.once)return ns(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)ts(t,e[s],n,r,i);return null}return n=ls(n),t&&t[Ki]?t.N(e,n,Yr(r)?!!r.capture:!!r,i):es(t,e,n,!1,r,i)}function es(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Yr(i)?!!i.capture:!!i,a=as(t);if(a||(t[Yi]=a=new Xi(t)),(n=a.add(e,n,r,o,s)).proxy)return n;if(r=function(){function t(n){return e.call(t.src,t.listener,n)}var e=os;return t}(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)ji||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(ss(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function ns(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)ns(t,e[s],n,r,i);return null}return n=ls(n),t&&t[Ki]?t.O(e,n,Yr(r)?!!r.capture:!!r,i):es(t,e,n,!0,r,i)}function rs(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)rs(t,e[s],n,r,i);else r=Yr(r)?!!r.capture:!!r,n=ls(n),t&&t[Ki]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=Ji(s=t.g[e],n,r,i))&&(Gi(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=as(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ji(e,n,r,i)),(n=-1<t?e[t]:null)&&is(n))}function is(t){if("number"!=typeof t&&t&&!t.ca){var e=t.src;if(e&&e[Ki])Qi(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(ss(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=as(e))?(Qi(n,t),0==n.h&&(n.src=null,e[Yi]=null)):Gi(t)}}}function ss(t){return t in Zi?Zi[t]:Zi[t]="on"+t}function os(t,e){if(t.ca)t=!0;else{e=new qi(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&is(t),t=n.call(r,e)}return t}function as(t){return(t=t[Yi])instanceof Xi?t:null}var cs="__closure_events_fn_"+(1e9*Math.random()>>>0);function ls(t){return"function"==typeof t?t:(t[cs]||(t[cs]=function(e){return t.handleEvent(e)}),t[cs])}function us(){oi.call(this),this.i=new Xi(this),this.P=this,this.I=null}function hs(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"==typeof e)e=new Bi(e,t);else if(e instanceof Bi)e.target=e.target||t;else{var i=e;Ei(e=new Bi(r,t),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=ds(o,r,!0,e)&&i}if(i=ds(o=e.g=t,r,!0,e)&&i,i=ds(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)i=ds(o=e.g=n[s],r,!1,e)&&i}function ds(t,e,n,r){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Qi(t.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}si(us,oi),us.prototype[Ki]=!0,us.prototype.removeEventListener=function(t,e,n,r){rs(this,t,e,n,r)},us.prototype.M=function(){if(us.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Gi(n[r]);delete e.g[t],e.h--}}this.I=null},us.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},us.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var fs=Xr.JSON.stringify;function ps(){var t=Es,e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var gs,ms=function(){function t(){this.h=this.g=null}return t.prototype.add=function(t,e){var n=ys.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n},t}(),ys=new(function(){function t(t,e){this.i=t,this.j=e,this.h=0,this.g=null}return t.prototype.get=function(){var t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t},t}())((function(){return new vs}),(function(t){return t.reset()})),vs=function(){function t(){this.next=this.g=this.h=null}return t.prototype.set=function(t,e){this.h=t,this.g=e,this.next=null},t.prototype.reset=function(){this.next=this.g=this.h=null},t}();function ws(t){Xr.setTimeout((function(){throw t}),0)}function bs(t,e){gs||function(){var t=Xr.Promise.resolve(void 0);gs=function(){t.then(Ts)}}(),Ss||(gs(),Ss=!0),Es.add(t,e)}var Ss=!1,Es=new ms;function Ts(){for(var t;t=ps();){try{t.h.call(t.g)}catch(t){ws(t)}var e=ys;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ss=!1}function _s(t,e){us.call(this),this.h=t||1,this.g=e||Xr,this.j=ri(this.kb,this),this.l=Date.now()}function Is(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function As(t,e,n){if("function"==typeof t)n&&(t=ri(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=ri(t.handleEvent,t)}return 2147483647<Number(e)?-1:Xr.setTimeout(t,e||0)}function Ns(t){t.g=As((function(){t.g=null,t.i&&(t.i=!1,Ns(t))}),t.j);var e=t.h;t.h=null,t.m.apply(null,e)}si(_s,us),(Hr=_s.prototype).da=!1,Hr.S=null,Hr.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),hs(this,"tick"),this.da&&(Is(this),this.start()))}},Hr.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Hr.M=function(){_s.Z.M.call(this),Is(this),delete this.g};var Cs=function(t){function e(e,n){var r=t.call(this)||this;return r.m=e,r.j=n,r.h=null,r.i=!1,r.g=null,r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}zr(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(e,t),e.prototype.l=function(t){this.h=arguments,this.g?this.i=!0:Ns(this)},e.prototype.M=function(){t.prototype.M.call(this),this.g&&(Xr.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)},e}(oi);function xs(t){oi.call(this),this.h=t,this.g={}}si(xs,oi);var ks=[];function $s(t,e,n,r){Array.isArray(n)||(n&&(ks[0]=n.toString()),n=ks);for(var i=0;i<n.length;i++){var s=ts(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Ds(t){wi(t.g,(function(t,e){this.g.hasOwnProperty(e)&&is(t)}),t),t.g={}}function Os(){this.g=!0}function Ls(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return fs(n)}catch(t){return e}}(t,n)+(r?" "+r:"")}))}xs.prototype.M=function(){xs.Z.M.call(this),Ds(this)},xs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Os.prototype.Aa=function(){this.g=!1},Os.prototype.info=function(){};var Rs={},Ps=null;function Ms(){return Ps=Ps||new us}function Us(t){Bi.call(this,Rs.Ma,t)}function Fs(t){var e=Ms();hs(e,new Us(e,t))}function Vs(t,e){Bi.call(this,Rs.STAT_EVENT,t),this.stat=e}function js(t){var e=Ms();hs(e,new Vs(e,t))}function Bs(t,e){Bi.call(this,Rs.Na,t),this.size=e}function qs(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return Xr.setTimeout((function(){t()}),e)}Rs.Ma="serverreachability",si(Us,Bi),Rs.STAT_EVENT="statevent",si(Vs,Bi),Rs.Na="timingevent",si(Bs,Bi);var zs={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Ks={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Hs(){}function Ws(t){return t.h||(t.h=t.i())}function Gs(){}Hs.prototype.h=null;var Xs,Qs={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Js(){Bi.call(this,"d")}function Ys(){Bi.call(this,"c")}function Zs(){}function to(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new xs(this),this.P=no,t=xi?125:void 0,this.W=new _s(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new eo}function eo(){this.i=null,this.g="",this.h=!1}si(Js,Bi),si(Ys,Bi),si(Zs,Hs),Zs.prototype.g=function(){return new XMLHttpRequest},Zs.prototype.i=function(){return{}},Xs=new Zs;var no=45e3,ro={},io={};function so(t,e,n){t.K=1,t.v=xo(To(e)),t.s=n,t.U=!0,oo(t,null)}function oo(t,e){t.F=Date.now(),uo(t),t.A=To(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),Bo(n.h,"t",r),t.C=0,n=t.l.H,t.h=new eo,t.g=qa(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Cs(ri(t.Ia,t,t.g),t.O)),$s(t.V,t.g,"readystatechange",t.gb),e=t.H?bi(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Fs(1),function(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.X,t.s)}function ao(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function co(t,e,n){for(var r,i=!0;!t.I&&t.C<n.length;){if((r=lo(t,n))==io){4==e&&(t.o=4,js(14),i=!1),Ls(t.j,t.m,null,"[Incomplete Response]");break}if(r==ro){t.o=4,js(15),Ls(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Ls(t.j,t.m,r,null),mo(t,r)}ao(t)&&r!=io&&r!=ro&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,js(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,(e=t.l).g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ra(e),e.L=!0,js(11))):(Ls(t.j,t.m,n,"[Invalid Chunked Response]"),go(t),po(t))}function lo(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?io:(n=Number(e.substring(n,r)),isNaN(n)?ro:(r+=1)+n>e.length?io:(e=e.substr(r,n),t.C=r+n,e))}function uo(t){t.Y=Date.now()+t.P,ho(t,t.P)}function ho(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=qs(ri(t.eb,t),e)}function fo(t){t.B&&(Xr.clearTimeout(t.B),t.B=null)}function po(t){0==t.l.G||t.I||Ua(t.l,t)}function go(t){fo(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Is(t.W),Ds(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function mo(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Xo(n.i,t)))if(n.I=t.N,!t.J&&Xo(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(s){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Ma(n),Aa(n)}La(n),js(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=qs(ri(n.ab,n),6e3));if(1>=Go(n.i)&&n.ka){try{n.ka()}catch(s){}n.ka=void 0}}else Va(n,11)}else if((t.J||n.g==t)&&Ma(n),!di(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){var s=i[e];if(n.U=s[0],s=s[1],2==n.G)if("c"==s[0]){n.J=s[1],n.la=s[2];var o=s[3];null!=o&&(n.ma=o,n.h.info("VER="+n.ma));var a=s[4];null!=a&&(n.za=a,n.h.info("SVER="+n.za));var c=s[5];null!=c&&"number"==typeof c&&0<c&&(r=1.5*c,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;var l=t.g;if(l){var u=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(u){var h=r.i;!h.g&&(gi(u,"spdy")||gi(u,"quic")||gi(u,"h2"))&&(h.j=h.l,h.g=new Set,h.h&&(Qo(h,h.h),h.h=null))}if(r.D){var d=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;d&&(r.sa=d,Co(r.F,r.D,d))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms"));var f=t;if((r=n).oa=Ba(r,r.H?r.la:null,r.W),f.J){Jo(r.i,f);var p=f,g=r.K;g&&p.setTimeout(g),p.B&&(fo(p),uo(p)),r.g=f}else Oa(r);0<n.l.length&&xa(n)}else"stop"!=s[0]&&"close"!=s[0]||Va(n,7);else 3==n.G&&("stop"==s[0]||"close"==s[0]?"stop"==s[0]?Va(n,7):Ia(n):"noop"!=s[0]&&n.j&&n.j.wa(s),n.A=0)}Fs(4)}catch(s){}}function yo(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(Jr(t)||"string"==typeof t)li(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(Jr(t)||"string"==typeof t){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;i=(r=function(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"==typeof t)return t.split("");if(Jr(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}(t)).length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function vo(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof vo)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function wo(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];bo(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)bo(i,r=t.g[e])||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}function bo(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(Hr=to.prototype).setTimeout=function(t){this.P=t},Hr.gb=function(t){t=t.target;var e=this.L;e&&3==ba(t)?e.l():this.Ia(t)},Hr.Ia=function(t){try{if(t==this.g)t:{var e=ba(this.g),n=this.g.Da(),r=this.g.ba();if(!(3>e)&&(3!=e||xi||this.g&&(this.h.h||this.g.ga()||Sa(this.g)))){this.I||4!=e||7==n||Fs(8==n||0>=r?3:2),fo(this);var i=this.g.ba();this.N=i;e:if(ao(this)){var s=Sa(this.g);t="";var o=s.length,a=4==ba(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){go(this),po(this);var c="";break e}this.h.i=new Xr.TextDecoder}for(n=0;n<o;n++)this.h.h=!0,t+=this.h.i.decode(s[n],{stream:a&&n==o-1});s.splice(0,o),this.h.g+=t,this.C=0,c=this.h.g}else c=this.g.ga();if(this.i=200==i,function(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.X,e,i),this.i){if(this.$&&!this.J){e:{if(this.g){var l,u=this.g;if((l=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!di(l)){var h=l;break e}}h=null}if(!(i=h)){this.i=!1,this.o=3,js(12),go(this),po(this);break t}Ls(this.j,this.m,i,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,mo(this,i)}this.U?(co(this,e,c),xi&&this.i&&3==e&&($s(this.V,this.W,"tick",this.fb),this.W.start())):(Ls(this.j,this.m,c,null),mo(this,c)),4==e&&go(this),this.i&&!this.I&&(4==e?Ua(this.l,this):(this.i=!1,uo(this)))}else 400==i&&0<c.indexOf("Unknown SID")?(this.o=3,js(12)):(this.o=0,js(13)),go(this),po(this)}}}catch(e){}},Hr.fb=function(){if(this.g){var t=ba(this.g),e=this.g.ga();this.C<e.length&&(fo(this),co(this,t,e),this.i&&4!=t&&uo(this))}},Hr.cancel=function(){this.I=!0,go(this)},Hr.eb=function(){this.B=null;var t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(Fs(3),js(17)),go(this),this.o=2,po(this)):ho(this,this.Y-t)},(Hr=vo.prototype).R=function(){wo(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},Hr.T=function(){return wo(this),this.g.concat()},Hr.get=function(t,e){return bo(this.h,t)?this.h[t]:e},Hr.set=function(t,e){bo(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},Hr.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};var So=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Eo(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Eo){this.g=void 0!==e?e:t.g,_o(this,t.j),this.s=t.s,Io(this,t.i),Ao(this,t.m),this.l=t.l,e=t.h;var n=new Uo;n.i=e.i,e.g&&(n.g=new vo(e.g),n.h=e.h),No(this,n),this.o=t.o}else t&&(n=String(t).match(So))?(this.g=!!e,_o(this,n[1]||"",!0),this.s=ko(n[2]||""),Io(this,n[3]||"",!0),Ao(this,n[4]),this.l=ko(n[5]||"",!0),No(this,n[6]||"",!0),this.o=ko(n[7]||"")):(this.g=!!e,this.h=new Uo(null,this.g))}function To(t){return new Eo(t)}function _o(t,e,n){t.j=n?ko(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Io(t,e,n){t.i=n?ko(e,!0):e}function Ao(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function No(t,e,n){e instanceof Uo?(t.h=e,function(t,e){e&&!t.j&&(Fo(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Vo(this,e),Bo(this,n,t))}),t)),t.j=e}(t.h,t.g)):(n||(e=$o(e,Po)),t.h=new Uo(e,t.g))}function Co(t,e,n){t.h.set(e,n)}function xo(t){return Co(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ko(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function $o(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Do),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Do(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Eo.prototype.toString=function(){var t=[],e=this.j;e&&t.push($o(e,Oo,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push($o(e,Oo,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push($o(n,"/"==n.charAt(0)?Ro:Lo,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",$o(n,Mo)),t.join("")};var Oo=/[#\/\?@]/g,Lo=/[#\?:]/g,Ro=/[#\?]/g,Po=/[#\?@]/g,Mo=/#/g;function Uo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Fo(t){t.g||(t.g=new vo,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Vo(t,e){Fo(t),e=qo(t,e),bo(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,bo((t=t.g).h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&wo(t)))}function jo(t,e){return Fo(t),e=qo(t,e),bo(t.g.h,e)}function Bo(t,e,n){Vo(t,e),0<n.length&&(t.i=null,t.g.set(qo(t,e),hi(n)),t.h+=n.length)}function qo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(Hr=Uo.prototype).add=function(t,e){Fo(this),this.i=null,t=qo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},Hr.forEach=function(t,e){Fo(this),this.g.forEach((function(n,r){li(n,(function(n){t.call(e,n,r,this)}),this)}),this)},Hr.T=function(){Fo(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n},Hr.R=function(t){Fo(this);var e=[];if("string"==typeof t)jo(this,t)&&(e=ui(e,this.g.get(qo(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=ui(e,t[n])}return e},Hr.set=function(t,e){return Fo(this),this.i=null,jo(this,t=qo(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},Hr.get=function(t,e){return t&&0<(t=this.R(t)).length?String(t[0]):e},Hr.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};var zo=function(t,e){this.h=t,this.g=e};function Ko(t){this.l=t||Ho,Xr.PerformanceNavigationTiming?t=0<(t=Xr.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(Xr.g&&Xr.g.Ea&&Xr.g.Ea()&&Xr.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ho=10;function Wo(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Go(t){return t.h?1:t.g?t.g.size:0}function Xo(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Qo(t,e){t.g?t.g.add(e):t.h=e}function Jo(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Yo(t){var e,n;if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){var r=t.i;try{for(var i=Kr(t.g.values()),s=i.next();!s.done;s=i.next()){var o=s.value;r=r.concat(o.D)}}catch(t){e={error:t}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}return r}return hi(t.i)}function Zo(){}function ta(){this.g=new Zo}function ea(t,e,n){var r=n||"";try{yo(t,(function(t,n){var i=t;Yr(t)&&(i=fs(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(t){throw e.push(r+"type="+encodeURIComponent("_badmap")),t}}function na(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(t){}}function ra(t){this.l=t.$b||null,this.j=t.ib||!1}function ia(t,e){us.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=sa,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ko.prototype.cancel=function(){var t,e;if(this.i=Yo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){try{for(var n=Kr(this.g.values()),r=n.next();!r.done;r=n.next()){r.value.cancel()}}catch(e){t={error:e}}finally{try{r&&!r.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}this.g.clear()}},Zo.prototype.stringify=function(t){return Xr.JSON.stringify(t,void 0)},Zo.prototype.parse=function(t){return Xr.JSON.parse(t,void 0)},si(ra,Hs),ra.prototype.g=function(){return new ia(this.l,this.j)},ra.prototype.i=function(t){return function(){return t}}({}),si(ia,us);var sa=0;function oa(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function aa(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ca(t)}function ca(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(Hr=ia.prototype).open=function(t,e){if(this.readyState!=sa)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ca(this)},Hr.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;var e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Xr).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},Hr.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,aa(this)),this.readyState=sa},Hr.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ca(this)),this.g&&(this.readyState=3,ca(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==Xr.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;oa(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},Hr.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?aa(this):ca(this),3==this.readyState&&oa(this)}},Hr.Ua=function(t){this.g&&(this.response=this.responseText=t,aa(this))},Hr.Ta=function(t){this.g&&(this.response=t,aa(this))},Hr.ha=function(){this.g&&aa(this)},Hr.setRequestHeader=function(t,e){this.v.append(t,e)},Hr.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},Hr.getAllResponseHeaders=function(){if(!this.h)return"";for(var t=[],e=this.h.entries(),n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(ia.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var la=Xr.JSON.parse;function ua(t){us.call(this),this.headers=new vo,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ha,this.K=this.L=!1}si(ua,us);var ha="",da=/^https?$/i,fa=["POST","PUT"];function pa(t){return"content-type"==t.toLowerCase()}function ga(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ma(t),va(t)}function ma(t){t.D||(t.D=!0,hs(t,"complete"),hs(t,"error"))}function ya(t){if(t.h&&void 0!==Gr&&(!t.C[1]||4!=ba(t)||2!=t.ba()))if(t.v&&4==ba(t))As(t.Fa,0,t);else if(hs(t,"readystatechange"),4==ba(t)){t.h=!1;try{var e,n=t.ba();t:switch(n){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break t;default:r=!1}if(!(e=r)){var i;if(i=0===n){var s=String(t.H).match(So)[1]||null;if(!s&&Xr.self&&Xr.self.location){var o=Xr.self.location.protocol;s=o.substr(0,o.length-1)}i=!da.test(s?s.toLowerCase():"")}e=i}if(e)hs(t,"complete"),hs(t,"success");else{t.m=6;try{var a=2<ba(t)?t.g.statusText:""}catch(t){a=""}t.j=a+" ["+t.ba()+"]",ma(t)}}finally{va(t)}}}function va(t,e){if(t.g){wa(t);var n=t.g,r=t.C[0]?Qr:null;t.g=null,t.C=null,e||hs(t,"ready");try{n.onreadystatechange=r}catch(t){}}}function wa(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Xr.clearTimeout(t.A),t.A=null)}function ba(t){return t.g?t.g.readyState:0}function Sa(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case ha:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Ea(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=function(t){var e="";return wi(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Co(t,e,n))}function Ta(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function _a(t){this.za=0,this.l=[],this.h=new Os,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Ta("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Ta("baseRetryDelayMs",5e3,t),this.$a=Ta("retryDelaySeedMs",1e4,t),this.Ya=Ta("forwardChannelMaxRetries",2,t),this.ra=Ta("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Ko(t&&t.concurrentRequestLimit),this.Ca=new ta,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function Ia(t){if(Na(t),3==t.G){var e=t.V++,n=To(t.F);Co(n,"SID",t.J),Co(n,"RID",e),Co(n,"TYPE","terminate"),$a(t,n),(e=new to(t,t.h,e,void 0)).K=2,e.v=xo(To(n)),n=!1,Xr.navigator&&Xr.navigator.sendBeacon&&(n=Xr.navigator.sendBeacon(e.v.toString(),"")),!n&&Xr.Image&&((new Image).src=e.v,n=!0),n||(e.g=qa(e.l,null),e.g.ea(e.v)),e.F=Date.now(),uo(e)}ja(t)}function Aa(t){t.g&&(Ra(t),t.g.cancel(),t.g=null)}function Na(t){Aa(t),t.u&&(Xr.clearTimeout(t.u),t.u=null),Ma(t),t.i.cancel(),t.m&&("number"==typeof t.m&&Xr.clearTimeout(t.m),t.m=null)}function Ca(t,e){t.l.push(new zo(t.Za++,e)),3==t.G&&xa(t)}function xa(t){Wo(t.i)||t.m||(t.m=!0,bs(t.Ha,t),t.C=0)}function ka(t,e){var n;n=e?e.m:t.V++;var r=To(t.F);Co(r,"SID",t.J),Co(r,"RID",n),Co(r,"AID",t.U),$a(t,r),t.o&&t.s&&Ea(r,t.o,t.s),n=new to(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Da(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Qo(t.i,n),so(n,r,e)}function $a(t,e){t.j&&yo({},(function(t,n){Co(e,n,t)}))}function Da(t,e,n){n=Math.min(t.l.length,n);var r=t.j?ri(t.j.Oa,t.j,t):null;t:for(var i=t.l,s=-1;;){var o=["count="+n];-1==s?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);for(var a=!0,c=0;c<n;c++){var l=i[c].h,u=i[c].g;if(0>(l-=s))s=Math.max(0,i[c].h-100),a=!1;else try{ea(u,o,"req"+l+"_")}catch(t){r&&r(u)}}if(a){r=o.join("&");break t}}return t=t.l.splice(0,n),e.D=t,r}function Oa(t){t.g||t.u||(t.Y=1,bs(t.Ga,t),t.A=0)}function La(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=qs(ri(t.Ga,t),Fa(t,t.A)),t.A++,!0)}function Ra(t){null!=t.B&&(Xr.clearTimeout(t.B),t.B=null)}function Pa(t){t.g=new to(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=To(t.oa);Co(e,"RID","rpc"),Co(e,"SID",t.J),Co(e,"CI",t.N?"0":"1"),Co(e,"AID",t.U),$a(t,e),Co(e,"TYPE","xmlhttp"),t.o&&t.s&&Ea(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=xo(To(e)),n.s=null,n.U=!0,oo(n,t)}function Ma(t){null!=t.v&&(Xr.clearTimeout(t.v),t.v=null)}function Ua(t,e){var n=null;if(t.g==e){Ma(t),Ra(t),t.g=null;var r=2}else{if(!Xo(t.i,e))return;n=e.D,Jo(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;hs(r=Ms(),new Bs(r,n,e,i)),xa(t)}else Oa(t);else if(3==(i=e.o)||0==i&&0<t.I||!(1==r&&function(t,e){return!(Go(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.l=e.D.concat(t.l),0):1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya)||(t.m=qs(ri(t.Ha,t,e),Fa(t,t.C)),t.C++,0)))}(t,e)||2==r&&La(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Va(t,5);break;case 4:Va(t,10);break;case 3:Va(t,6);break;default:Va(t,2)}}function Fa(t,e){var n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Va(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=ri(t.jb,t);n||(n=new Eo("//www.google.com/images/cleardot.gif"),Xr.location&&"http"==Xr.location.protocol||_o(n,"https"),xo(n)),function(t,e){var n=new Os;if(Xr.Image){var r=new Image;r.onload=ii(na,n,r,"TestLoadImage: loaded",!0,e),r.onerror=ii(na,n,r,"TestLoadImage: error",!1,e),r.onabort=ii(na,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=ii(na,n,r,"TestLoadImage: timeout",!1,e),Xr.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}(n.toString(),r)}else js(2);t.G=0,t.j&&t.j.va(e),ja(t),Na(t)}function ja(t){t.G=0,t.I=-1,t.j&&(0==Yo(t.i).length&&0==t.l.length||(t.i.i.length=0,hi(t.l),t.l.length=0),t.j.ua())}function Ba(t,e,n){var r=function(t){return t instanceof Eo?To(t):new Eo(t,void 0)}(n);if(""!=r.i)e&&Io(r,e+"."+r.i),Ao(r,r.m);else{var i=Xr.location;r=function(t,e,n,r){var i=new Eo(null,void 0);return t&&_o(i,t),e&&Io(i,e),n&&Ao(i,n),r&&(i.l=r),i}(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&wi(t.aa,(function(t,e){Co(r,e,t)})),e=t.D,n=t.sa,e&&n&&Co(r,e,n),Co(r,"VER",t.ma),$a(t,r),r}function qa(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ba&&!t.qa?new ua(new ra({ib:!0})):new ua(t.qa)).L=t.H,e}function za(){}function Ka(){if(Ni&&!(10<=Number(Vi)))throw Error("Environmental error: no available transport.")}function Ha(t,e){us.call(this),this.g=new _a(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!di(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!di(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Xa(this)}function Wa(t){Js.call(this);var e=t.__sm__;if(e){t:{for(var n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Ga(){Ys.call(this),this.status=1}function Xa(t){this.g=t}(Hr=ua.prototype).ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Xs.g(),this.C=this.u?Ws(this.u):Ws(Xs),this.g.onreadystatechange=ri(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void ga(this,t)}t=n||"";var i=new vo(this.headers);r&&yo(r,(function(t,e){i.set(e,t)})),r=function(t){t:{for(var e=pa,n=t.length,r="string"==typeof t?t.split(""):t,i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(i.T()),n=Xr.FormData&&t instanceof Xr.FormData,!(0<=ci(fa,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{wa(this),0<this.B&&((this.K=function(t){return Ni&&Ui()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ri(this.pa,this)):this.A=As(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){ga(this,t)}},Hr.pa=function(){void 0!==Gr&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,hs(this,"timeout"),this.abort(8))},Hr.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,hs(this,"complete"),hs(this,"abort"),va(this))},Hr.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),va(this,!0)),ua.Z.M.call(this)},Hr.Fa=function(){this.s||(this.F||this.v||this.l?ya(this):this.cb())},Hr.cb=function(){ya(this)},Hr.ba=function(){try{return 2<ba(this)?this.g.status:-1}catch(t){return-1}},Hr.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},Hr.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),la(e)}},Hr.Da=function(){return this.m},Hr.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(Hr=_a.prototype).ma=8,Hr.G=1,Hr.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(t){}},Hr.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;var e=new to(this,this.h,t,void 0),n=this.s;if(this.P&&(n?Ei(n=bi(n),this.P):n=this.P),null===this.o&&(e.H=n),this.ja)t:{for(var r=0,i=0;i<this.l.length;i++){var s=this.l[i];if(void 0===(s="__data__"in s.g&&"string"==typeof(s=s.g.__data__)?s.length:void 0))break;if(4096<(r+=s)){r=i;break t}if(4096===r||i===this.l.length-1){r=i+1;break t}}r=1e3}else r=1e3;r=Da(this,e,r),Co(i=To(this.F),"RID",t),Co(i,"CVER",22),this.D&&Co(i,"X-HTTP-Session-Id",this.D),$a(this,i),this.o&&n&&Ea(i,this.o,n),Qo(this.i,e),this.Ra&&Co(i,"TYPE","init"),this.ja?(Co(i,"$req",r),Co(i,"SID","null"),e.$=!0,so(e,i,null)):so(e,i,r),this.G=2}}else 3==this.G&&(t?ka(this,t):0==this.l.length||Wo(this.i)||ka(this))},Hr.Ga=function(){if(this.u=null,Pa(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=qs(ri(this.bb,this),t)}},Hr.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,js(10),Aa(this),Pa(this))},Hr.ab=function(){null!=this.v&&(this.v=null,Aa(this),La(this),js(19))},Hr.jb=function(t){t?(this.h.info("Successfully pinged google.com"),js(2)):(this.h.info("Failed to ping google.com"),js(1))},(Hr=za.prototype).xa=function(){},Hr.wa=function(){},Hr.va=function(){},Hr.ua=function(){},Hr.Oa=function(){},Ka.prototype.g=function(t,e){return new Ha(t,e)},si(Ha,us),Ha.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),bs(ri(t.hb,t,e))),js(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Ba(t,null,t.W),xa(t)},Ha.prototype.close=function(){Ia(this.g)},Ha.prototype.u=function(t){if("string"==typeof t){var e={};e.__data__=t,Ca(this.g,e)}else this.v?((e={}).__data__=fs(t),Ca(this.g,e)):Ca(this.g,t)},Ha.prototype.M=function(){this.g.j=null,delete this.j,Ia(this.g),delete this.g,Ha.Z.M.call(this)},si(Wa,Js),si(Ga,Ys),si(Xa,za),Xa.prototype.xa=function(){hs(this.g,"a")},Xa.prototype.wa=function(t){hs(this.g,new Wa(t))},Xa.prototype.va=function(t){hs(this.g,new Ga(t))},Xa.prototype.ua=function(){hs(this.g,"b")},Ka.prototype.createWebChannel=Ka.prototype.g,Ha.prototype.send=Ha.prototype.u,Ha.prototype.open=Ha.prototype.m,Ha.prototype.close=Ha.prototype.close,zs.NO_ERROR=0,zs.TIMEOUT=8,zs.HTTP_ERROR=6,Ks.COMPLETE="complete",Gs.EventType=Qs,Qs.OPEN="a",Qs.CLOSE="b",Qs.ERROR="c",Qs.MESSAGE="d",us.prototype.listen=us.prototype.N,ua.prototype.listenOnce=ua.prototype.O,ua.prototype.getLastError=ua.prototype.La,ua.prototype.getLastErrorCode=ua.prototype.Da,ua.prototype.getStatus=ua.prototype.ba,ua.prototype.getResponseJson=ua.prototype.Qa,ua.prototype.getResponseText=ua.prototype.ga,ua.prototype.send=ua.prototype.ea;var Qa=zs,Ja=Ks,Ya=Rs,Za=10,tc=11,ec=ra,nc=Gs,rc=ua;
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class ic{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ic.UNAUTHENTICATED=new ic(null),ic.GOOGLE_CREDENTIALS=new ic("google-credentials-uid"),ic.FIRST_PARTY=new ic("first-party-uid"),ic.MOCK_USER=new ic("mock-user");
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
let sc="9.0.2";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const oc=new ue("@firebase/firestore");function ac(){return oc.logLevel}function cc(t,...e){if(oc.logLevel<=re.DEBUG){const n=e.map(hc);oc.debug(`Firestore (${sc}): ${t}`,...n)}}function lc(t,...e){if(oc.logLevel<=re.ERROR){const n=e.map(hc);oc.error(`Firestore (${sc}): ${t}`,...n)}}function uc(t,...e){if(oc.logLevel<=re.WARN){const n=e.map(hc);oc.warn(`Firestore (${sc}): ${t}`,...n)}}function hc(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function dc(t="Unexpected state"){const e=`FIRESTORE (${sc}) INTERNAL ASSERTION FAILED: `+t;throw lc(e),new Error(e)}function fc(t,e){t||dc()}function pc(t,e){return t}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const gc={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class mc extends Error{constructor(t,e){super(e),this.code=t,this.message=e,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class yc{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class vc{constructor(t,e){this.user=e,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${t}`}}class wc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(ic.UNAUTHENTICATED)))}shutdown(){}}class bc{constructor(t){this.t=t,this.currentUser=ic.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new yc;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new yc,t.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{cc("FirebaseCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(cc("FirebaseCredentialsProvider","Auth not yet detected"),i.resolve(),i=new yc)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(cc("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(fc("string"==typeof e.accessToken),new vc(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return fc(null===t||"string"==typeof t),new ic(t)}}class Sc{constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=ic.FIRST_PARTY}get authHeaders(){const t={"X-Goog-AuthUser":this.l},e=this.h.auth.getAuthHeaderValueForFirstParty([]);return e&&(t.Authorization=e),this.m&&(t["X-Goog-Iam-Authorization-Token"]=this.m),t}}class Ec{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new Sc(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(ic.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}
/**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Tc{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.g(t),this.p=t=>e.writeSequenceNumber(t))}g(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.p&&this.p(t),t}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function _c(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */Tc.T=-1;class Ic{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=_c(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function Ac(t,e){return t<e?-1:t>e?1:0}function Nc(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Cc{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new mc(gc.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new mc(gc.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new mc(gc.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new mc(gc.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Cc.fromMillis(Date.now())}static fromDate(t){return Cc.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Cc(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Ac(this.nanoseconds,t.nanoseconds):Ac(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class xc{constructor(t){this.timestamp=t}static fromTimestamp(t){return new xc(t)}static min(){return new xc(new Cc(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function kc(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function $c(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Dc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Oc{constructor(t,e,n){void 0===e?e=0:e>t.length&&dc(),void 0===n?n=t.length-e:n>t.length-e&&dc(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Oc.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Oc?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Lc extends Oc{construct(t,e,n){return new Lc(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new mc(gc.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Lc(e)}static emptyPath(){return new Lc([])}}const Rc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pc extends Oc{construct(t,e,n){return new Pc(t,e,n)}static isValidIdentifier(t){return Rc.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pc.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Pc(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new mc(gc.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new mc(gc.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new mc(gc.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new mc(gc.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Pc(e)}static emptyPath(){return new Pc([])}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Mc{constructor(t){this.fields=t,t.sort(Pc.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Nc(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Uc{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Uc(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Uc(e)}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Ac(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Uc.EMPTY_BYTE_STRING=new Uc("");const Fc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vc(t){if(fc(!!t),"string"==typeof t){let e=0;const n=Fc.exec(t);if(fc(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:jc(t.seconds),nanos:jc(t.nanos)}}function jc(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Bc(t){return"string"==typeof t?Uc.fromBase64String(t):Uc.fromUint8Array(t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function qc(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function zc(t){const e=t.mapValue.fields.__previous_value__;return qc(e)?zc(e):e}function Kc(t){const e=Vc(t.mapValue.fields.__local_write_time__.timestampValue);return new Cc(e.seconds,e.nanos)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Hc(t){return null==t}function Wc(t){return 0===t&&1/t==-1/0}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Gc{constructor(t){this.path=t}static fromPath(t){return new Gc(Lc.fromString(t))}static fromName(t){return new Gc(Lc.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===Lc.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Lc.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Gc(new Lc(t.slice()))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Xc(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?qc(t)?4:10:dc()}function Qc(t,e){const n=Xc(t);if(n!==Xc(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Kc(t).isEqual(Kc(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Vc(t.timestampValue),r=Vc(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Bc(t.bytesValue).isEqual(Bc(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return jc(t.geoPointValue.latitude)===jc(e.geoPointValue.latitude)&&jc(t.geoPointValue.longitude)===jc(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return jc(t.integerValue)===jc(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=jc(t.doubleValue),r=jc(e.doubleValue);return n===r?Wc(n)===Wc(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return Nc(t.arrayValue.values||[],e.arrayValue.values||[],Qc);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(kc(n)!==kc(r))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===r[t]||!Qc(n[t],r[t])))return!1;return!0}(t,e);default:return dc()}}function Jc(t,e){return void 0!==(t.values||[]).find((t=>Qc(t,e)))}function Yc(t,e){const n=Xc(t),r=Xc(e);if(n!==r)return Ac(n,r);switch(n){case 0:return 0;case 1:return Ac(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=jc(t.integerValue||t.doubleValue),r=jc(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return Zc(t.timestampValue,e.timestampValue);case 4:return Zc(Kc(t),Kc(e));case 5:return Ac(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Bc(t),r=Bc(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let t=0;t<n.length&&t<r.length;t++){const e=Ac(n[t],r[t]);if(0!==e)return e}return Ac(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Ac(jc(t.latitude),jc(e.latitude));return 0!==n?n:Ac(jc(t.longitude),jc(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let t=0;t<n.length&&t<r.length;++t){const e=Yc(n[t],r[t]);if(e)return e}return Ac(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let t=0;t<r.length&&t<s.length;++t){const e=Ac(r[t],s[t]);if(0!==e)return e;const o=Yc(n[r[t]],i[s[t]]);if(0!==o)return o}return Ac(r.length,s.length)}(t.mapValue,e.mapValue);default:throw dc()}}function Zc(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Ac(t,e);const n=Vc(t),r=Vc(e),i=Ac(n.seconds,r.seconds);return 0!==i?i:Ac(n.nanos,r.nanos)}function tl(t){return el(t)}function el(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Vc(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Bc(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Gc.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=el(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${el(t.fields[i])}`;return n+"}"}(t.mapValue):dc();var e,n}function nl(t){return!!t&&"integerValue"in t}function rl(t){return!!t&&"arrayValue"in t}function il(t){return!!t&&"nullValue"in t}function sl(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ol(t){return!!t&&"mapValue"in t}function al(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return $c(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=al(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=al(t.arrayValue.values[n]);return e}return Object.assign({},t)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class cl{constructor(t){this.value=t}static empty(){return new cl({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!ol(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=al(e)}setAll(t){let e=Pc.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=al(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());ol(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Qc(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];ol(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){$c(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new cl(al(this.value))}}function ll(t){const e=[];return $c(t.fields,((t,n)=>{const r=new Pc([t]);if(ol(n)){const t=ll(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new Mc(e)
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}class ul{constructor(t,e,n,r,i){this.key=t,this.documentType=e,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(t){return new ul(t,0,xc.min(),cl.empty(),0)}static newFoundDocument(t,e,n){return new ul(t,1,e,n,0)}static newNoDocument(t,e){return new ul(t,2,e,cl.empty(),0)}static newUnknownDocument(t,e){return new ul(t,3,e,cl.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=cl.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=cl.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof ul&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}clone(){return new ul(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class hl{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.A=null}}function dl(t,e=null,n=[],r=[],i=null,s=null,o=null){return new hl(t,e,n,r,i,s,o)}function fl(t){const e=pc(t);if(null===e.A){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>function(t){return t.field.canonicalString()+t.op.toString()+tl(t.value)}(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Hc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=Al(e.startAt)),e.endAt&&(t+="|ub:",t+=Al(e.endAt)),e.A=t}return e.A}function pl(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Cl(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Qc(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!kl(t.startAt,e.startAt)&&kl(t.endAt,e.endAt)}function gl(t){return Gc.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class ml extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.R(t,e,n):new yl(t,e,n):"array-contains"===e?new Sl(t,n):"in"===e?new El(t,n):"not-in"===e?new Tl(t,n):"array-contains-any"===e?new _l(t,n):new ml(t,e,n)}static R(t,e,n){return"in"===e?new vl(t,n):new wl(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.P(Yc(e,this.value)):null!==e&&Xc(this.value)===Xc(e)&&this.P(Yc(e,this.value))}P(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return dc()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class yl extends ml{constructor(t,e,n){super(t,e,n),this.key=Gc.fromName(n.referenceValue)}matches(t){const e=Gc.comparator(t.key,this.key);return this.P(e)}}class vl extends ml{constructor(t,e){super(t,"in",e),this.keys=bl("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class wl extends ml{constructor(t,e){super(t,"not-in",e),this.keys=bl("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function bl(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Gc.fromName(t.referenceValue)))}class Sl extends ml{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return rl(e)&&Jc(e.arrayValue,this.value)}}class El extends ml{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Jc(this.value.arrayValue,e)}}class Tl extends ml{constructor(t,e){super(t,"not-in",e)}matches(t){if(Jc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Jc(this.value.arrayValue,e)}}class _l extends ml{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!rl(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Jc(this.value.arrayValue,t)))}}class Il{constructor(t,e){this.position=t,this.before=e}}function Al(t){return`${t.before?"b":"a"}:${t.position.map((t=>tl(t))).join(",")}`}class Nl{constructor(t,e="asc"){this.field=t,this.dir=e}}function Cl(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function xl(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?Gc.comparator(Gc.fromName(o.referenceValue),n.key):Yc(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return t.before?r<=0:r<0}function kl(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Qc(t.position[n],e.position[n]))return!1;return!0}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class $l{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.V=null,this.S=null,this.startAt,this.endAt}}function Dl(t){return new $l(t)}function Ol(t){return!Hc(t.limit)&&"F"===t.limitType}function Ll(t){return!Hc(t.limit)&&"L"===t.limitType}function Rl(t){const e=pc(t);if(null===e.V){e.V=[];const t=function(t){for(const e of t.filters)if(e.v())return e.field;return null}(e),n=function(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}(e);if(null!==t&&null===n)t.isKeyField()||e.V.push(new Nl(t)),e.V.push(new Nl(Pc.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.V.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new Nl(Pc.keyField(),t))}}}return e.V}function Pl(t){const e=pc(t);if(!e.S)if("F"===e.limitType)e.S=dl(e.path,e.collectionGroup,Rl(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of Rl(e)){const e="desc"===n.dir?"asc":"desc";t.push(new Nl(n.field,e))}const n=e.endAt?new Il(e.endAt.position,!e.endAt.before):null,r=e.startAt?new Il(e.startAt.position,!e.startAt.before):null;e.S=dl(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.S}function Ml(t,e){return pl(Pl(t),Pl(e))&&t.limitType===e.limitType}function Ul(t){return`${fl(Pl(t))}|lt:${t.limitType}`}function Fl(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${tl(e.value)}`;var e})).join(", ")}]`),Hc(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: "+Al(t.startAt)),t.endAt&&(e+=", endAt: "+Al(t.endAt)),`Target(${e})`}(Pl(t))}; limitType=${t.limitType})`}function Vl(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Gc.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!xl(t.startAt,Rl(t),e))&&(!t.endAt||!xl(t.endAt,Rl(t),e))}(t,e)}function jl(t){return(e,n)=>{let r=!1;for(const i of Rl(t)){const t=Bl(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function Bl(t,e,n){const r=t.field.isKeyField()?Gc.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?Yc(r,i):dc()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return dc()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ql(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wc(e)?"-0":e}}function zl(t){return{integerValue:""+t}}function Kl(t,e){return function(t){return"number"==typeof t&&Number.isInteger(t)&&!Wc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}(e)?zl(e):ql(t,e)}
/**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Hl{constructor(){this._=void 0}}function Wl(t,e,n){return t instanceof Ql?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Jl?Yl(t,e):t instanceof Zl?tu(t,e):function(t,e){const n=Xl(t,e),r=nu(n)+nu(t.C);return nl(n)&&nl(t.C)?zl(r):ql(t.N,r)}(t,e)}function Gl(t,e,n){return t instanceof Jl?Yl(t,e):t instanceof Zl?tu(t,e):n}function Xl(t,e){return t instanceof eu?nl(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class Ql extends Hl{}class Jl extends Hl{constructor(t){super(),this.elements=t}}function Yl(t,e){const n=ru(e);for(const e of t.elements)n.some((t=>Qc(t,e)))||n.push(e);return{arrayValue:{values:n}}}class Zl extends Hl{constructor(t){super(),this.elements=t}}function tu(t,e){let n=ru(e);for(const e of t.elements)n=n.filter((t=>!Qc(t,e)));return{arrayValue:{values:n}}}class eu extends Hl{constructor(t,e){super(),this.N=t,this.C=e}}function nu(t){return jc(t.integerValue||t.doubleValue)}function ru(t){return rl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class iu{constructor(t,e){this.field=t,this.transform=e}}class su{constructor(t,e){this.version=t,this.transformResults=e}}class ou{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ou}static exists(t){return new ou(void 0,t)}static updateTime(t){return new ou(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function au(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class cu{}function lu(t,e,n){t instanceof pu?function(t,e,n){const r=t.value.clone(),i=yu(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof gu?function(t,e,n){if(!au(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=yu(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(mu(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function uu(t,e,n){t instanceof pu?function(t,e,n){if(!au(t.precondition,e))return;const r=t.value.clone(),i=vu(t.fieldTransforms,n,e);r.setAll(i),e.convertToFoundDocument(fu(e),r).setHasLocalMutations()}(t,e,n):t instanceof gu?function(t,e,n){if(!au(t.precondition,e))return;const r=vu(t.fieldTransforms,n,e),i=e.data;i.setAll(mu(t)),i.setAll(r),e.convertToFoundDocument(fu(e),i).setHasLocalMutations()}(t,e,n):function(t,e){au(t.precondition,e)&&e.convertToNoDocument(xc.min())}(t,e)}function hu(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=Xl(r.transform,t||null);null!=i&&(null==n&&(n=cl.empty()),n.set(r.field,i))}return n||null}function du(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Nc(t,e,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Jl&&e instanceof Jl||t instanceof Zl&&e instanceof Zl?Nc(t.elements,e.elements,Qc):t instanceof eu&&e instanceof eu?Qc(t.C,e.C):t instanceof Ql&&e instanceof Ql}(t.transform,e.transform)}(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function fu(t){return t.isFoundDocument()?t.version:xc.min()}class pu extends cu{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}}class gu extends cu{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function mu(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function yu(t,e,n){const r=new Map;fc(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Gl(o,a,n[i]))}return r}function vu(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,Wl(t,s,e))}return r}class wu extends cu{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class bu extends cu{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Su{constructor(t){this.count=t}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var Eu,Tu;function _u(t){if(void 0===t)return lc("GRPC error has no .code"),gc.UNKNOWN;switch(t){case Eu.OK:return gc.OK;case Eu.CANCELLED:return gc.CANCELLED;case Eu.UNKNOWN:return gc.UNKNOWN;case Eu.DEADLINE_EXCEEDED:return gc.DEADLINE_EXCEEDED;case Eu.RESOURCE_EXHAUSTED:return gc.RESOURCE_EXHAUSTED;case Eu.INTERNAL:return gc.INTERNAL;case Eu.UNAVAILABLE:return gc.UNAVAILABLE;case Eu.UNAUTHENTICATED:return gc.UNAUTHENTICATED;case Eu.INVALID_ARGUMENT:return gc.INVALID_ARGUMENT;case Eu.NOT_FOUND:return gc.NOT_FOUND;case Eu.ALREADY_EXISTS:return gc.ALREADY_EXISTS;case Eu.PERMISSION_DENIED:return gc.PERMISSION_DENIED;case Eu.FAILED_PRECONDITION:return gc.FAILED_PRECONDITION;case Eu.ABORTED:return gc.ABORTED;case Eu.OUT_OF_RANGE:return gc.OUT_OF_RANGE;case Eu.UNIMPLEMENTED:return gc.UNIMPLEMENTED;case Eu.DATA_LOSS:return gc.DATA_LOSS;default:return dc()}}(Tu=Eu||(Eu={}))[Tu.OK=0]="OK",Tu[Tu.CANCELLED=1]="CANCELLED",Tu[Tu.UNKNOWN=2]="UNKNOWN",Tu[Tu.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Tu[Tu.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Tu[Tu.NOT_FOUND=5]="NOT_FOUND",Tu[Tu.ALREADY_EXISTS=6]="ALREADY_EXISTS",Tu[Tu.PERMISSION_DENIED=7]="PERMISSION_DENIED",Tu[Tu.UNAUTHENTICATED=16]="UNAUTHENTICATED",Tu[Tu.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Tu[Tu.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Tu[Tu.ABORTED=10]="ABORTED",Tu[Tu.OUT_OF_RANGE=11]="OUT_OF_RANGE",Tu[Tu.UNIMPLEMENTED=12]="UNIMPLEMENTED",Tu[Tu.INTERNAL=13]="INTERNAL",Tu[Tu.UNAVAILABLE=14]="UNAVAILABLE",Tu[Tu.DATA_LOSS=15]="DATA_LOSS";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Iu{constructor(t,e){this.comparator=t,this.root=e||Nu.EMPTY}insert(t,e){return new Iu(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Nu.BLACK,null,null))}remove(t){return new Iu(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Nu.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Au(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Au(this.root,t,this.comparator,!1)}getReverseIterator(){return new Au(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Au(this.root,t,this.comparator,!0)}}class Au{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Nu{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:Nu.RED,this.left=null!=r?r:Nu.EMPTY,this.right=null!=i?i:Nu.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new Nu(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Nu.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Nu.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Nu.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Nu.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw dc();if(this.right.isRed())throw dc();const t=this.left.check();if(t!==this.right.check())throw dc();return t+(this.isRed()?0:1)}}Nu.EMPTY=null,Nu.RED=!0,Nu.BLACK=!1,Nu.EMPTY=new class{constructor(){this.size=0}get key(){throw dc()}get value(){throw dc()}get color(){throw dc()}get left(){throw dc()}get right(){throw dc()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Nu(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Cu{constructor(t){this.comparator=t,this.data=new Iu(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new xu(this.data.getIterator())}getIteratorFrom(t){return new xu(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Cu))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Cu(this.comparator);return e.data=t,e}}class xu{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const ku=new Iu(Gc.comparator);function $u(){return ku}const Du=new Iu(Gc.comparator);function Ou(){return Du}const Lu=new Iu(Gc.comparator);const Ru=new Cu(Gc.comparator);function Pu(...t){let e=Ru;for(const n of t)e=e.add(n);return e}const Mu=new Cu(Ac);function Uu(){return Mu}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Fu{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,Vu.createSynthesizedTargetChangeForCurrentChange(t,e)),new Fu(xc.min(),n,Uu(),$u(),Pu())}}class Vu{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new Vu(Uc.EMPTY_BYTE_STRING,e,Pu(),Pu(),Pu())}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ju{constructor(t,e,n,r){this.k=t,this.removedTargetIds=e,this.key=n,this.$=r}}class Bu{constructor(t,e){this.targetId=t,this.O=e}}class qu{constructor(t,e,n=Uc.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class zu{constructor(){this.F=0,this.M=Wu(),this.L=Uc.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return 0!==this.F}get K(){return this.U}j(t){t.approximateByteSize()>0&&(this.U=!0,this.L=t)}W(){let t=Pu(),e=Pu(),n=Pu();return this.M.forEach(((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:dc()}})),new Vu(this.L,this.B,t,e,n)}G(){this.U=!1,this.M=Wu()}H(t,e){this.U=!0,this.M=this.M.insert(t,e)}J(t){this.U=!0,this.M=this.M.remove(t)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class Ku{constructor(t){this.tt=t,this.et=new Map,this.nt=$u(),this.st=Hu(),this.it=new Cu(Ac)}rt(t){for(const e of t.k)t.$&&t.$.isFoundDocument()?this.ot(e,t.$):this.at(e,t.key,t.$);for(const e of t.removedTargetIds)this.at(e,t.key,t.$)}ct(t){this.forEachTarget(t,(e=>{const n=this.ut(e);switch(t.state){case 0:this.ht(e)&&n.j(t.resumeToken);break;case 1:n.X(),n.q||n.G(),n.j(t.resumeToken);break;case 2:n.X(),n.q||this.removeTarget(e);break;case 3:this.ht(e)&&(n.Z(),n.j(t.resumeToken));break;case 4:this.ht(e)&&(this.lt(e),n.j(t.resumeToken));break;default:dc()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.et.forEach(((t,n)=>{this.ht(n)&&e(n)}))}ft(t){const e=t.targetId,n=t.O.count,r=this.dt(e);if(r){const t=r.target;if(gl(t))if(0===n){const n=new Gc(t.path);this.at(e,n,ul.newNoDocument(n,xc.min()))}else fc(1===n);else this.wt(e)!==n&&(this.lt(e),this.it=this.it.add(e))}}_t(t){const e=new Map;this.et.forEach(((n,r)=>{const i=this.dt(r);if(i){if(n.current&&gl(i.target)){const e=new Gc(i.target.path);null!==this.nt.get(e)||this.gt(r,e)||this.at(r,e,ul.newNoDocument(e,t))}n.K&&(e.set(r,n.W()),n.G())}}));let n=Pu();this.st.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.dt(t);return!e||2===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))}));const r=new Fu(t,e,this.it,this.nt,n);return this.nt=$u(),this.st=Hu(),this.it=new Cu(Ac),r}ot(t,e){if(!this.ht(t))return;const n=this.gt(t,e.key)?2:0;this.ut(t).H(e.key,n),this.nt=this.nt.insert(e.key,e),this.st=this.st.insert(e.key,this.yt(e.key).add(t))}at(t,e,n){if(!this.ht(t))return;const r=this.ut(t);this.gt(t,e)?r.H(e,1):r.J(e),this.st=this.st.insert(e,this.yt(e).delete(t)),n&&(this.nt=this.nt.insert(e,n))}removeTarget(t){this.et.delete(t)}wt(t){const e=this.ut(t).W();return this.tt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Y(t){this.ut(t).Y()}ut(t){let e=this.et.get(t);return e||(e=new zu,this.et.set(t,e)),e}yt(t){let e=this.st.get(t);return e||(e=new Cu(Ac),this.st=this.st.insert(t,e)),e}ht(t){const e=null!==this.dt(t);return e||cc("WatchChangeAggregator","Detected inactive target",t),e}dt(t){const e=this.et.get(t);return e&&e.q?null:this.tt.Et(t)}lt(t){this.et.set(t,new zu),this.tt.getRemoteKeysForTarget(t).forEach((e=>{this.at(t,e,null)}))}gt(t,e){return this.tt.getRemoteKeysForTarget(t).has(e)}}function Hu(){return new Iu(Gc.comparator)}function Wu(){return new Iu(Gc.comparator)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Gu={asc:"ASCENDING",desc:"DESCENDING"},Xu={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class Qu{constructor(t,e){this.databaseId=t,this.D=e}}function Ju(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Yu(t,e){return t.D?e.toBase64():e.toUint8Array()}function Zu(t,e){return Ju(t,e.toTimestamp())}function th(t){return fc(!!t),xc.fromTimestamp(function(t){const e=Vc(t);return new Cc(e.seconds,e.nanos)}(t))}function eh(t,e){return function(t){return new Lc(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function nh(t){const e=Lc.fromString(t);return fc(Eh(e)),e}function rh(t,e){return eh(t.databaseId,e.path)}function ih(t,e){const n=nh(e);if(n.get(1)!==t.databaseId.projectId)throw new mc(gc.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new mc(gc.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Gc(ah(n))}function sh(t,e){return eh(t.databaseId,e)}function oh(t){return new Lc(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ah(t){return fc(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function ch(t,e,n){return{name:rh(t,e),fields:n.value.mapValue.fields}}function lh(t,e){return{documents:[sh(t,e.path)]}}function uh(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=sh(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=sh(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(sl(t.value))return{unaryFilter:{field:yh(t.field),op:"IS_NAN"}};if(il(t.value))return{unaryFilter:{field:yh(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(sl(t.value))return{unaryFilter:{field:yh(t.field),op:"IS_NOT_NAN"}};if(il(t.value))return{unaryFilter:{field:yh(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:yh(t.field),op:mh(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:yh(t.field),direction:gh(t.dir)}}(t)))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(t,e){return t.D||Hc(e)?e:{value:e}}(t,e.limit);return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=fh(e.startAt)),e.endAt&&(n.structuredQuery.endAt=fh(e.endAt)),n}function hh(t){let e=function(t){const e=nh(t);return 4===e.length?Lc.emptyPath():ah(e)}(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){fc(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=dh(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new Nl(vh(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Hc(e)?null:e}(n.limit));let c=null;n.startAt&&(c=ph(n.startAt));let l=null;return n.endAt&&(l=ph(n.endAt)),function(t,e,n,r,i,s,o,a){return new $l(t,e,n,r,i,s,o,a)}(e,i,o,s,a,"F",c,l)}function dh(t){return t?void 0!==t.unaryFilter?[bh(t)]:void 0!==t.fieldFilter?[wh(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>dh(t))).reduce(((t,e)=>t.concat(e))):dc():[]}function fh(t){return{before:t.before,values:t.position}}function ph(t){const e=!!t.before,n=t.values||[];return new Il(n,e)}function gh(t){return Gu[t]}function mh(t){return Xu[t]}function yh(t){return{fieldPath:t.canonicalString()}}function vh(t){return Pc.fromServerFormat(t.fieldPath)}function wh(t){return ml.create(vh(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":default:return dc()}}(t.fieldFilter.op),t.fieldFilter.value)}function bh(t){switch(t.unaryFilter.op){case"IS_NAN":const e=vh(t.unaryFilter.field);return ml.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=vh(t.unaryFilter.field);return ml.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=vh(t.unaryFilter.field);return ml.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=vh(t.unaryFilter.field);return ml.create(i,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":default:return dc()}}function Sh(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Eh(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Th{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&dc(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Th(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Th?e:Th.resolve(e)}catch(t){return Th.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Th.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Th.reject(e)}static resolve(t){return new Th(((e,n)=>{e(t)}))}static reject(t){return new Th(((e,n)=>{n(t)}))}static waitFor(t){return new Th(((e,n)=>{let r=0,i=0,s=!1;t.forEach((t=>{++r,t.next((()=>{++i,s&&i===r&&e()}),(t=>n(t)))})),s=!0,i===r&&e()}))}static or(t){let e=Th.resolve(!1);for(const n of t)e=e.next((t=>t?Th.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}}function _h(t){return"IndexedDbTransactionError"===t.name}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ih{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const r=this.mutations[e];r.key.isEqual(t.key)&&lu(r,t,n[e])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&uu(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&uu(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach((e=>{const n=t.get(e.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(xc.min())}))}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Pu())}isEqual(t){return this.batchId===t.batchId&&Nc(this.mutations,t.mutations,((t,e)=>du(t,e)))&&Nc(this.baseMutations,t.baseMutations,((t,e)=>du(t,e)))}}class Ah{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){fc(t.mutations.length===n.length);let r=Lu;const i=t.mutations;for(let t=0;t<i.length;t++)r=r.insert(i[t].key,n[t].version);return new Ah(t,e,n,r)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Nh{constructor(t,e,n,r,i=xc.min(),s=xc.min(),o=Uc.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(t){return new Nh(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Nh(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Nh(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ch{constructor(t){this.Wt=t}}function xh(t){const e=hh({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?function(t,e,n){return new $l(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}(e,e.limit,"L"):e}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class kh{constructor(){this.Gt=new $h}addToCollectionParentIndex(t,e){return this.Gt.add(e),Th.resolve()}getCollectionParents(t,e){return Th.resolve(this.Gt.getEntries(e))}}class $h{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Cu(Lc.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Cu(Lc.comparator)).toArray()}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Dh{constructor(t){this.ne=t}next(){return this.ne+=2,this.ne}static se(){return new Dh(0)}static ie(){return new Dh(-1)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function Oh(t){if(t.code!==gc.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==t.message)throw t;cc("LocalStore","Unexpectedly lost primary lease")}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Lh{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,r]of n)if(this.equalsFn(e,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],t))return void(r[n]=[t,e]);r.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),!0;return!1}forEach(t){$c(this.inner,((e,n)=>{for(const[e,r]of n)t(e,r)}))}isEmpty(){return Dc(this.inner)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Rh{constructor(t,e,n){this.He=t,this.In=e,this.Ht=n}An(t,e){return this.In.getAllMutationBatchesAffectingDocumentKey(t,e).next((n=>this.Rn(t,e,n)))}Rn(t,e,n){return this.He.getEntry(t,e).next((t=>{for(const e of n)e.applyToLocalView(t);return t}))}bn(t,e){t.forEach(((t,n)=>{for(const t of e)t.applyToLocalView(n)}))}Pn(t,e){return this.He.getEntries(t,e).next((e=>this.vn(t,e).next((()=>e))))}vn(t,e){return this.In.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>this.bn(e,t)))}getDocumentsMatchingQuery(t,e,n){return function(t){return Gc.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Vn(t,e.path):function(t){return null!==t.collectionGroup}(e)?this.Sn(t,e,n):this.Dn(t,e,n)}Vn(t,e){return this.An(t,new Gc(e)).next((t=>{let e=Ou();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}Sn(t,e,n){const r=e.collectionGroup;let i=Ou();return this.Ht.getCollectionParents(t,r).next((s=>Th.forEach(s,(s=>{const o=function(t,e){return new $l(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(r));return this.Dn(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}Dn(t,e,n){let r,i;return this.He.getDocumentsMatchingQuery(t,e,n).next((n=>(r=n,this.In.getAllMutationBatchesAffectingQuery(t,e)))).next((e=>(i=e,this.Cn(t,i,r).next((t=>{r=t;for(const t of i)for(const e of t.mutations){const n=e.key;let i=r.get(n);null==i&&(i=ul.newInvalidDocument(n),r=r.insert(n,i)),uu(e,i,t.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}))))).next((()=>(r.forEach(((t,n)=>{Vl(e,n)||(r=r.remove(t))})),r)))}Cn(t,e,n){let r=Pu();for(const t of e)for(const e of t.mutations)e instanceof gu&&null===n.get(e.key)&&(r=r.add(e.key));let i=n;return this.He.getEntries(t,r).next((t=>(t.forEach(((t,e)=>{e.isFoundDocument()&&(i=i.insert(t,e))})),i)))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ph{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Nn=n,this.xn=r}static kn(t,e){let n=Pu(),r=Pu();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:r=r.add(t.doc.key)}return new Ph(t,e.fromCache,n,r)}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Mh{$n(t){this.On=t}getDocumentsMatchingQuery(t,e,n,r){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(xc.min())?this.Fn(t,e):this.On.Pn(t,r).next((i=>{const s=this.Mn(e,i);return(Ol(e)||Ll(e))&&this.Ln(e.limitType,s,r,n)?this.Fn(t,e):(ac()<=re.DEBUG&&cc("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Fl(e)),this.On.getDocumentsMatchingQuery(t,e,n).next((t=>(s.forEach((e=>{t=t.insert(e.key,e)})),t))))}))}Mn(t,e){let n=new Cu(jl(t));return e.forEach(((e,r)=>{Vl(t,r)&&(n=n.add(r))})),n}Ln(t,e,n,r){if(n.size!==e.size)return!0;const i="F"===t?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Fn(t,e){return ac()<=re.DEBUG&&cc("QueryEngine","Using full collection scan to execute query:",Fl(e)),this.On.getDocumentsMatchingQuery(t,e,xc.min())}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Uh{constructor(t,e,n,r){this.persistence=t,this.Bn=e,this.N=r,this.Un=new Iu(Ac),this.qn=new Lh((t=>fl(t)),pl),this.Kn=xc.min(),this.In=t.getMutationQueue(n),this.jn=t.getRemoteDocumentCache(),this.ze=t.getTargetCache(),this.Qn=new Rh(this.jn,this.In,this.persistence.getIndexManager()),this.Je=t.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Un)))}}async function Fh(t,e){const n=pc(t);let r=n.In,i=n.Qn;const s=await n.persistence.runTransaction("Handle user change","readonly",(t=>{let s;return n.In.getAllMutationBatches(t).next((o=>(s=o,r=n.persistence.getMutationQueue(e),i=new Rh(n.jn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(t)))).next((e=>{const n=[],r=[];let o=Pu();for(const t of s){n.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return i.Pn(t,o).next((t=>({Wn:t,removedBatchIds:n,addedBatchIds:r})))}))}));return n.In=r,n.Qn=i,n.Bn.$n(n.Qn),s}function Vh(t){const e=pc(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.ze.getLastRemoteSnapshotVersion(t)))}function jh(t,e){const n=pc(t),r=e.snapshotVersion;let i=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.jn.newChangeBuffer({trackRemovals:!0});i=n.Un;const o=[];e.targetChanges.forEach(((e,s)=>{const a=i.get(s);if(!a)return;o.push(n.ze.removeMatchingKeys(t,e.removedDocuments,s).next((()=>n.ze.addMatchingKeys(t,e.addedDocuments,s))));const c=e.resumeToken;if(c.approximateByteSize()>0){const l=a.withResumeToken(c,r).withSequenceNumber(t.currentSequenceNumber);i=i.insert(s,l),function(t,e,n){return fc(e.resumeToken.approximateByteSize()>0),0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(a,l,e)&&o.push(n.ze.updateTargetData(t,l))}}));let a=$u();if(e.documentUpdates.forEach(((r,i)=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(function(t,e,n,r,i){let s=Pu();return n.forEach((t=>s=s.add(t))),e.getEntries(t,s).next((t=>{let s=$u();return n.forEach(((n,o)=>{const a=t.get(n),c=(null==i?void 0:i.get(n))||r;o.isNoDocument()&&o.version.isEqual(xc.min())?(e.removeEntry(n,c),s=s.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(e.addEntry(o,c),s=s.insert(n,o)):cc("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)})),s}))}(t,s,e.documentUpdates,r,void 0).next((t=>{a=t}))),!r.isEqual(xc.min())){const e=n.ze.getLastRemoteSnapshotVersion(t).next((e=>n.ze.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return Th.waitFor(o).next((()=>s.apply(t))).next((()=>n.Qn.vn(t,a))).next((()=>a))})).then((t=>(n.Un=i,t)))}function Bh(t,e){const n=pc(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.In.getNextMutationBatchAfterBatchId(t,e))))}async function qh(t,e,n){const r=pc(t),i=r.Un.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(t=>r.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!_h(t))throw t;cc("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.Un=r.Un.remove(e),r.qn.delete(i.target)}function zh(t,e,n){const r=pc(t);let i=xc.min(),s=Pu();return r.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const r=pc(t),i=r.qn.get(n);return void 0!==i?Th.resolve(r.Un.get(i)):r.ze.getTargetData(e,n)}(r,t,Pl(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.ze.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>r.Bn.getDocumentsMatchingQuery(t,e,n?i:xc.min(),n?s:Pu()))).next((t=>({documents:t,Gn:s})))))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Kh{constructor(t){this.N=t,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(t,e){return Th.resolve(this.Yn.get(e))}saveBundleMetadata(t,e){var n;return this.Yn.set(e.id,{id:(n=e).id,version:n.version,createTime:th(n.createTime)}),Th.resolve()}getNamedQuery(t,e){return Th.resolve(this.Xn.get(e))}saveNamedQuery(t,e){return this.Xn.set(e.name,function(t){return{name:t.name,query:xh(t.bundledQuery),readTime:th(t.readTime)}}(e)),Th.resolve()}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Hh{constructor(){this.Zn=new Cu(Wh.ts),this.es=new Cu(Wh.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const n=new Wh(t,e);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.rs(new Wh(t,e))}os(t,e){t.forEach((t=>this.removeReference(t,e)))}cs(t){const e=new Gc(new Lc([])),n=new Wh(e,t),r=new Wh(e,t+1),i=[];return this.es.forEachInRange([n,r],(t=>{this.rs(t),i.push(t.key)})),i}us(){this.Zn.forEach((t=>this.rs(t)))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new Gc(new Lc([])),n=new Wh(e,t),r=new Wh(e,t+1);let i=Pu();return this.es.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new Wh(t,0),n=this.Zn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Wh{constructor(t,e){this.key=t,this.ls=e}static ts(t,e){return Gc.comparator(t.key,e.key)||Ac(t.ls,e.ls)}static ns(t,e){return Ac(t.ls,e.ls)||Gc.comparator(t.key,e.key)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Gh{constructor(t,e){this.Ht=t,this.referenceDelegate=e,this.In=[],this.fs=1,this.ds=new Cu(Wh.ts)}checkEmpty(t){return Th.resolve(0===this.In.length)}addMutationBatch(t,e,n,r){const i=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const s=new Ih(i,e,n,r);this.In.push(s);for(const e of r)this.ds=this.ds.add(new Wh(e.key,i)),this.Ht.addToCollectionParentIndex(t,e.key.path.popLast());return Th.resolve(s)}lookupMutationBatch(t,e){return Th.resolve(this.ws(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this._s(n),i=r<0?0:r;return Th.resolve(this.In.length>i?this.In[i]:null)}getHighestUnacknowledgedBatchId(){return Th.resolve(0===this.In.length?-1:this.fs-1)}getAllMutationBatches(t){return Th.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Wh(e,0),r=new Wh(e,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([n,r],(t=>{const e=this.ws(t.ls);i.push(e)})),Th.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Cu(Ac);return e.forEach((t=>{const e=new Wh(t,0),r=new Wh(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,r],(t=>{n=n.add(t.ls)}))})),Th.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;Gc.isDocumentKey(i)||(i=i.child(""));const s=new Wh(new Gc(i),0);let o=new Cu(Ac);return this.ds.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.ls)),!0)}),s),Th.resolve(this.gs(o))}gs(t){const e=[];return t.forEach((t=>{const n=this.ws(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){fc(0===this.ys(e.batchId,"removed")),this.In.shift();let n=this.ds;return Th.forEach(e.mutations,(r=>{const i=new Wh(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.ds=n}))}te(t){}containsKey(t,e){const n=new Wh(e,0),r=this.ds.firstAfterOrEqual(n);return Th.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.In.length,Th.resolve()}ys(t,e){return this._s(t)}_s(t){return 0===this.In.length?0:t-this.In[0].batchId}ws(t){const e=this._s(t);return e<0||e>=this.In.length?null:this.In[e]}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Xh{constructor(t,e){this.Ht=t,this.ps=e,this.docs=new Iu(Gc.comparator),this.size=0}addEntry(t,e,n){const r=e.key,i=this.docs.get(r),s=i?i.size:0,o=this.ps(e);return this.docs=this.docs.insert(r,{document:e.clone(),size:o,readTime:n}),this.size+=o-s,this.Ht.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Th.resolve(n?n.document.clone():ul.newInvalidDocument(e))}getEntries(t,e){let n=$u();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.clone():ul.newInvalidDocument(t))})),Th.resolve(n)}getDocumentsMatchingQuery(t,e,n){let r=$u();const i=new Gc(e.path.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:t,value:{document:i,readTime:o}}=s.getNext();if(!e.path.isPrefixOf(t.path))break;o.compareTo(n)<=0||Vl(e,i)&&(r=r.insert(i.key,i.clone()))}return Th.resolve(r)}Es(t,e){return Th.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Qh(this)}getSize(t){return Th.resolve(this.size)}}class Qh extends class{constructor(){this.changes=new Lh((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}getReadTime(t){const e=this.changes.get(t);return e?e.readTime:xc.min()}addEntry(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})}removeEntry(t,e=null){this.assertNotApplied(),this.changes.set(t,{document:ul.newInvalidDocument(t),readTime:e})}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Th.resolve(n.document):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}{constructor(t){super(),this.Se=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.document.isValidDocument()?e.push(this.Se.addEntry(t,r.document,this.getReadTime(n))):this.Se.removeEntry(n)})),Th.waitFor(e)}getFromCache(t,e){return this.Se.getEntry(t,e)}getAllFromCache(t,e){return this.Se.getEntries(t,e)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Jh{constructor(t){this.persistence=t,this.Ts=new Lh((t=>fl(t)),pl),this.lastRemoteSnapshotVersion=xc.min(),this.highestTargetId=0,this.Is=0,this.As=new Hh,this.targetCount=0,this.Rs=Dh.se()}forEachTarget(t,e){return this.Ts.forEach(((t,n)=>e(n))),Th.resolve()}getLastRemoteSnapshotVersion(t){return Th.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Th.resolve(this.Is)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),Th.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Is&&(this.Is=e),Th.resolve()}ae(t){this.Ts.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new Dh(e),this.highestTargetId=e),t.sequenceNumber>this.Is&&(this.Is=t.sequenceNumber)}addTargetData(t,e){return this.ae(e),this.targetCount+=1,Th.resolve()}updateTargetData(t,e){return this.ae(e),Th.resolve()}removeTargetData(t,e){return this.Ts.delete(e.target),this.As.cs(e.targetId),this.targetCount-=1,Th.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Ts.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Ts.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),Th.waitFor(i).next((()=>r))}getTargetCount(t){return Th.resolve(this.targetCount)}getTargetData(t,e){const n=this.Ts.get(e)||null;return Th.resolve(n)}addMatchingKeys(t,e,n){return this.As.ss(e,n),Th.resolve()}removeMatchingKeys(t,e,n){this.As.os(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),Th.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.As.cs(e),Th.resolve()}getMatchingKeysForTargetId(t,e){const n=this.As.hs(e);return Th.resolve(n)}containsKey(t,e){return Th.resolve(this.As.containsKey(e))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Yh{constructor(t,e){this.bs={},this.Le=new Tc(0),this.Be=!1,this.Be=!0,this.referenceDelegate=t(this),this.ze=new Jh(this),this.Ht=new kh,this.He=function(t,e){return new Xh(t,e)}(this.Ht,(t=>this.referenceDelegate.Ps(t))),this.N=new Ch(e),this.Je=new Kh(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(t){let e=this.bs[t.toKey()];return e||(e=new Gh(this.Ht,this.referenceDelegate),this.bs[t.toKey()]=e),e}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(t,e,n){cc("MemoryPersistence","Starting transaction:",t);const r=new Zh(this.Le.next());return this.referenceDelegate.vs(),n(r).next((t=>this.referenceDelegate.Vs(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Ss(t,e){return Th.or(Object.values(this.bs).map((n=>()=>n.containsKey(t,e))))}}class Zh extends class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}{constructor(t){super(),this.currentSequenceNumber=t}}class td{constructor(t){this.persistence=t,this.Ds=new Hh,this.Cs=null}static Ns(t){return new td(t)}get xs(){if(this.Cs)return this.Cs;throw dc()}addReference(t,e,n){return this.Ds.addReference(n,e),this.xs.delete(n.toString()),Th.resolve()}removeReference(t,e,n){return this.Ds.removeReference(n,e),this.xs.add(n.toString()),Th.resolve()}markPotentiallyOrphaned(t,e){return this.xs.add(e.toString()),Th.resolve()}removeTarget(t,e){this.Ds.cs(e.targetId).forEach((t=>this.xs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.xs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}vs(){this.Cs=new Set}Vs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Th.forEach(this.xs,(n=>{const r=Gc.fromPath(n);return this.ks(t,r).next((t=>{t||e.removeEntry(r)}))})).next((()=>(this.Cs=null,e.apply(t))))}updateLimboDocument(t,e){return this.ks(t,e).next((t=>{t?this.xs.delete(e.toString()):this.xs.add(e.toString())}))}Ps(t){return 0}ks(t,e){return Th.or([()=>Th.resolve(this.Ds.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ss(t,e)])}}class ed{constructor(){this.activeTargetIds=Uu()}Fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ms(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Os(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class nd{constructor(){this.yi=new ed,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.yi.Fs(t),this.pi[t]||"not-current"}updateQueryState(t,e,n){this.pi[t]=e}removeLocalQueryTarget(t){this.yi.Ms(t)}isLocalQueryTarget(t){return this.yi.activeTargetIds.has(t)}clearQueryState(t){delete this.pi[t]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(t){return this.yi.activeTargetIds.has(t)}start(){return this.yi=new ed,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class rd{Ei(t){}shutdown(){}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class id{constructor(){this.Ti=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ei(t){this.bi.push(t)}shutdown(){window.removeEventListener("online",this.Ti),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ti),window.addEventListener("offline",this.Ai)}Ii(){cc("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.bi)t(0)}Ri(){cc("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.bi)t(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const sd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class od{constructor(t){this.vi=t.vi,this.Vi=t.Vi}Si(t){this.Di=t}Ci(t){this.Ni=t}onMessage(t){this.xi=t}close(){this.Vi()}send(t){this.vi(t)}ki(){this.Di()}$i(t){this.Ni(t)}Oi(t){this.xi(t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ad extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.Fi=e+"://"+t.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(t,e,n,r){const i=this.Bi(t,e);cc("RestConnection","Sending: ",i,n);const s={};return this.Ui(s,r),this.qi(t,i,s,n).then((t=>(cc("RestConnection","Received: ",t),t)),(e=>{throw uc("RestConnection",`${t} failed with error: `,e,"url: ",i,"request:",n),e}))}Ki(t,e,n,r){return this.Li(t,e,n,r)}Ui(t,e){if(t["X-Goog-Api-Client"]="gl-js/ fire/"+sc,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e)for(const n in e.authHeaders)e.authHeaders.hasOwnProperty(n)&&(t[n]=e.authHeaders[n])}Bi(t,e){const n=sd[t];return`${this.Fi}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}qi(t,e,n,r){return new Promise(((i,s)=>{const o=new rc;o.listenOnce(Ja.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Qa.NO_ERROR:const e=o.getResponseJson();cc("Connection","XHR received:",JSON.stringify(e)),i(e);break;case Qa.TIMEOUT:cc("Connection",'RPC "'+t+'" timed out'),s(new mc(gc.DEADLINE_EXCEEDED,"Request time out"));break;case Qa.HTTP_ERROR:const n=o.getStatus();if(cc("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(gc).indexOf(e)>=0?e:gc.UNKNOWN}(t.status);s(new mc(e,t.message))}else s(new mc(gc.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new mc(gc.UNAVAILABLE,"Connection failed."));break;default:dc()}}finally{cc("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(r);o.send(e,"POST",a,n,15)}))}ji(t,e){const n=[this.Fi,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=new Ka,i=Ms(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(s.xmlHttpFactory=new ec({})),this.Ui(s.initMessageHeaders,e),Ft()||jt()||Ut().indexOf("Electron/")>=0||Bt()||Ut().indexOf("MSAppHost/")>=0||Vt()||(s.httpHeadersOverwriteParam="$httpHeaders");const o=n.join("");cc("Connection","Creating WebChannel: "+o,s);const a=r.createWebChannel(o,s);let c=!1,l=!1;const u=new od({vi:t=>{l?cc("Connection","Not sending because WebChannel is closed:",t):(c||(cc("Connection","Opening WebChannel transport."),a.open(),c=!0),cc("Connection","WebChannel sending:",t),a.send(t))},Vi:()=>a.close()}),h=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return h(a,nc.EventType.OPEN,(()=>{l||cc("Connection","WebChannel transport opened.")})),h(a,nc.EventType.CLOSE,(()=>{l||(l=!0,cc("Connection","WebChannel transport closed"),u.$i())})),h(a,nc.EventType.ERROR,(t=>{l||(l=!0,uc("Connection","WebChannel transport errored:",t),u.$i(new mc(gc.UNAVAILABLE,"The operation could not be completed")))})),h(a,nc.EventType.MESSAGE,(t=>{var e;if(!l){const n=t.data[0];fc(!!n);const r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(i){cc("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=Eu[t];if(void 0!==e)return _u(e)}(t),n=i.message;void 0===e&&(e=gc.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),l=!0,u.$i(new mc(e,n)),a.close()}else cc("Connection","WebChannel received:",n),u.Oi(n)}})),h(i,Ya.STAT_EVENT,(t=>{t.stat===Za?cc("Connection","Detected buffering proxy"):t.stat===tc&&cc("Connection","Detected no buffering proxy")})),setTimeout((()=>{u.ki()}),0),u}}function cd(){return"undefined"!=typeof document?document:null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ld(t){return new Qu(t,!0)}class ud{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Oe=t,this.timerId=e,this.Qi=n,this.Wi=r,this.Gi=i,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(t){this.cancel();const e=Math.floor(this.zi+this.Zi()),n=Math.max(0,Date.now()-this.Ji),r=Math.max(0,e-n);r>0&&cc("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.zi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,r,(()=>(this.Ji=Date.now(),t()))),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){null!==this.Hi&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){null!==this.Hi&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class hd{constructor(t,e,n,r,i,s){this.Oe=t,this.er=n,this.nr=r,this.credentialsProvider=i,this.listener=s,this.state=0,this.sr=0,this.ir=null,this.stream=null,this.rr=new ud(t,e)}ar(){return 1===this.state||2===this.state||4===this.state}cr(){return 2===this.state}start(){3!==this.state?this.auth():this.ur()}async stop(){this.ar()&&await this.close(0)}hr(){this.state=0,this.rr.reset()}lr(){this.cr()&&null===this.ir&&(this.ir=this.Oe.enqueueAfterDelay(this.er,6e4,(()=>this.dr())))}wr(t){this._r(),this.stream.send(t)}async dr(){if(this.cr())return this.close(0)}_r(){this.ir&&(this.ir.cancel(),this.ir=null)}async close(t,e){this._r(),this.rr.cancel(),this.sr++,3!==t?this.rr.reset():e&&e.code===gc.RESOURCE_EXHAUSTED?(lc(e.toString()),lc("Using maximum backoff delay to prevent overloading the backend."),this.rr.Yi()):e&&e.code===gc.UNAUTHENTICATED&&this.credentialsProvider.invalidateToken(),null!==this.stream&&(this.mr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ci(e)}mr(){}auth(){this.state=1;const t=this.gr(this.sr),e=this.sr;this.credentialsProvider.getToken().then((t=>{this.sr===e&&this.yr(t)}),(e=>{t((()=>{const t=new mc(gc.UNKNOWN,"Fetching auth token failed: "+e.message);return this.pr(t)}))}))}yr(t){const e=this.gr(this.sr);this.stream=this.Er(t),this.stream.Si((()=>{e((()=>(this.state=2,this.listener.Si())))})),this.stream.Ci((t=>{e((()=>this.pr(t)))})),this.stream.onMessage((t=>{e((()=>this.onMessage(t)))}))}ur(){this.state=4,this.rr.Xi((async()=>{this.state=0,this.start()}))}pr(t){return cc("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(3,t)}gr(t){return e=>{this.Oe.enqueueAndForget((()=>this.sr===t?e():(cc("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class dd extends hd{constructor(t,e,n,r,i){super(t,"listen_stream_connection_backoff","listen_stream_idle",e,n,i),this.N=r}Er(t){return this.nr.ji("Listen",t)}onMessage(t){this.rr.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:dc()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(t,e){return t.D?(fc(void 0===e||"string"==typeof e),Uc.fromBase64String(e||"")):(fc(void 0===e||e instanceof Uint8Array),Uc.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?gc.UNKNOWN:_u(t.code);return new mc(e,t.message||"")}(o);n=new qu(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ih(t,r.document.name),s=th(r.document.updateTime),o=new cl({mapValue:{fields:r.document.fields}}),a=ul.newFoundDocument(i,s,o),c=r.targetIds||[],l=r.removedTargetIds||[];n=new ju(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ih(t,r.document),s=r.readTime?th(r.readTime):xc.min(),o=ul.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ju([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ih(t,r.document),s=r.removedTargetIds||[];n=new ju([],s,i,null)}else{if(!("filter"in e))return dc();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,i=new Su(r),s=t.targetId;n=new Bu(s,i)}}return n}(this.N,t),n=function(t){if(!("targetChange"in t))return xc.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?xc.min():e.readTime?th(e.readTime):xc.min()}(t);return this.listener.Tr(e,n)}Ir(t){const e={};e.database=oh(this.N),e.addTarget=function(t,e){let n;const r=e.target;return n=gl(r)?{documents:lh(t,r)}:{query:uh(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=Yu(t,e.resumeToken):e.snapshotVersion.compareTo(xc.min())>0&&(n.readTime=Ju(t,e.snapshotVersion.toTimestamp())),n}(this.N,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return dc()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.N,t);n&&(e.labels=n),this.wr(e)}Ar(t){const e={};e.database=oh(this.N),e.removeTarget=t,this.wr(e)}}class fd extends hd{constructor(t,e,n,r,i){super(t,"write_stream_connection_backoff","write_stream_idle",e,n,i),this.N=r,this.Rr=!1}get br(){return this.Rr}start(){this.Rr=!1,this.lastStreamToken=void 0,super.start()}mr(){this.Rr&&this.Pr([])}Er(t){return this.nr.ji("Write",t)}onMessage(t){if(fc(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Rr){this.rr.reset();const e=function(t,e){return t&&t.length>0?(fc(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?th(t.updateTime):th(e);return n.isEqual(xc.min())&&(n=th(e)),new su(n,t.transformResults||[])}(t,e)))):[]}(t.writeResults,t.commitTime),n=th(t.commitTime);return this.listener.vr(n,e)}return fc(!t.writeResults||0===t.writeResults.length),this.Rr=!0,this.listener.Vr()}Sr(){const t={};t.database=oh(this.N),this.wr(t)}Pr(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>function(t,e){let n;if(e instanceof pu)n={update:ch(t,e.key,e.value)};else if(e instanceof wu)n={delete:rh(t,e.key)};else if(e instanceof gu)n={update:ch(t,e.key,e.data),updateMask:Sh(e.fieldMask)};else{if(!(e instanceof bu))return dc();n={verify:rh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Ql)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Jl)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Zl)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof eu)return{fieldPath:e.field.canonicalString(),increment:n.C};throw dc()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Zu(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:dc()}(t,e.precondition)),n}(this.N,t)))};this.wr(e)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class pd extends class{}{constructor(t,e,n){super(),this.credentials=t,this.nr=e,this.N=n,this.Dr=!1}Cr(){if(this.Dr)throw new mc(gc.FAILED_PRECONDITION,"The client has already been terminated.")}Li(t,e,n){return this.Cr(),this.credentials.getToken().then((r=>this.nr.Li(t,e,n,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===gc.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new mc(gc.UNKNOWN,t.toString())}))}Ki(t,e,n){return this.Cr(),this.credentials.getToken().then((r=>this.nr.Ki(t,e,n,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===gc.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new mc(gc.UNKNOWN,t.toString())}))}terminate(){this.Dr=!0}}class gd{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Nr=0,this.kr=null,this.$r=!0}Or(){0===this.Nr&&(this.Fr("Unknown"),this.kr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.kr=null,this.Mr("Backend didn't respond within 10 seconds."),this.Fr("Offline"),Promise.resolve()))))}Lr(t){"Online"===this.state?this.Fr("Unknown"):(this.Nr++,this.Nr>=1&&(this.Br(),this.Mr(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.Fr("Offline")))}set(t){this.Br(),this.Nr=0,"Online"===t&&(this.$r=!1),this.Fr(t)}Fr(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}Mr(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.$r?(lc(e),this.$r=!1):cc("OnlineStateTracker",e)}Br(){null!==this.kr&&(this.kr.cancel(),this.kr=null)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class md{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ur=[],this.qr=new Map,this.Kr=new Set,this.jr=[],this.Qr=i,this.Qr.Ei((t=>{n.enqueueAndForget((async()=>{Id(this)&&(cc("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=pc(t);e.Kr.add(4),await vd(e),e.Wr.set("Unknown"),e.Kr.delete(4),await yd(e)}(this))}))})),this.Wr=new gd(n,r)}}async function yd(t){if(Id(t))for(const e of t.jr)await e(!0)}async function vd(t){for(const e of t.jr)await e(!1)}function wd(t,e){const n=pc(t);n.qr.has(e.targetId)||(n.qr.set(e.targetId,e),_d(n)?Td(n):jd(n).cr()&&Sd(n,e))}function bd(t,e){const n=pc(t),r=jd(n);n.qr.delete(e),r.cr()&&Ed(n,e),0===n.qr.size&&(r.cr()?r.lr():Id(n)&&n.Wr.set("Unknown"))}function Sd(t,e){t.Gr.Y(e.targetId),jd(t).Ir(e)}function Ed(t,e){t.Gr.Y(e),jd(t).Ar(e)}function Td(t){t.Gr=new Ku({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.qr.get(e)||null}),jd(t).start(),t.Wr.Or()}function _d(t){return Id(t)&&!jd(t).ar()&&t.qr.size>0}function Id(t){return 0===pc(t).Kr.size}function Ad(t){t.Gr=void 0}async function Nd(t){t.qr.forEach(((e,n)=>{Sd(t,e)}))}async function Cd(t,e){Ad(t),_d(t)?(t.Wr.Lr(e),Td(t)):t.Wr.set("Unknown")}async function xd(t,e,n){if(t.Wr.set("Online"),e instanceof qu&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.qr.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.qr.delete(r),t.Gr.removeTarget(r))}(t,e)}catch(n){cc("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await kd(t,n)}else if(e instanceof ju?t.Gr.rt(e):e instanceof Bu?t.Gr.ft(e):t.Gr.ct(e),!n.isEqual(xc.min()))try{const e=await Vh(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Gr._t(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.qr.get(r);i&&t.qr.set(r,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.qr.get(e);if(!n)return;t.qr.set(e,n.withResumeToken(Uc.EMPTY_BYTE_STRING,n.snapshotVersion)),Ed(t,e);const r=new Nh(n.target,e,1,n.sequenceNumber);Sd(t,r)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){cc("RemoteStore","Failed to raise snapshot:",e),await kd(t,e)}}async function kd(t,e,n){if(!_h(e))throw e;t.Kr.add(1),await vd(t),t.Wr.set("Offline"),n||(n=()=>Vh(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{cc("RemoteStore","Retrying IndexedDB access"),await n(),t.Kr.delete(1),await yd(t)}))}function $d(t,e){return e().catch((n=>kd(t,n,e)))}async function Dd(t){const e=pc(t),n=Bd(e);let r=e.Ur.length>0?e.Ur[e.Ur.length-1].batchId:-1;for(;Od(e);)try{const t=await Bh(e.localStore,r);if(null===t){0===e.Ur.length&&n.lr();break}r=t.batchId,Ld(e,t)}catch(t){await kd(e,t)}Rd(e)&&Pd(e)}function Od(t){return Id(t)&&t.Ur.length<10}function Ld(t,e){t.Ur.push(e);const n=Bd(t);n.cr()&&n.br&&n.Pr(e.mutations)}function Rd(t){return Id(t)&&!Bd(t).ar()&&t.Ur.length>0}function Pd(t){Bd(t).start()}async function Md(t){Bd(t).Sr()}async function Ud(t){const e=Bd(t);for(const n of t.Ur)e.Pr(n.mutations)}async function Fd(t,e,n){const r=t.Ur.shift(),i=Ah.from(r,e,n);await $d(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await Dd(t)}async function Vd(t,e){e&&Bd(t).br&&await async function(t,e){if(function(t){switch(t){case gc.OK:return dc();case gc.CANCELLED:case gc.UNKNOWN:case gc.DEADLINE_EXCEEDED:case gc.RESOURCE_EXHAUSTED:case gc.INTERNAL:case gc.UNAVAILABLE:case gc.UNAUTHENTICATED:return!1;case gc.INVALID_ARGUMENT:case gc.NOT_FOUND:case gc.ALREADY_EXISTS:case gc.PERMISSION_DENIED:case gc.FAILED_PRECONDITION:case gc.ABORTED:case gc.OUT_OF_RANGE:case gc.UNIMPLEMENTED:case gc.DATA_LOSS:return!0;default:return dc()}}(n=e.code)&&n!==gc.ABORTED){const n=t.Ur.shift();Bd(t).hr(),await $d(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Dd(t)}var n}(t,e),Rd(t)&&Pd(t)}function jd(t){return t.zr||(t.zr=function(t,e,n){const r=pc(t);return r.Cr(),new dd(e,r.nr,r.credentials,r.N,n)
/**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}(t.datastore,t.asyncQueue,{Si:Nd.bind(null,t),Ci:Cd.bind(null,t),Tr:xd.bind(null,t)}),t.jr.push((async e=>{e?(t.zr.hr(),_d(t)?Td(t):t.Wr.set("Unknown")):(await t.zr.stop(),Ad(t))}))),t.zr}function Bd(t){return t.Hr||(t.Hr=function(t,e,n){const r=pc(t);return r.Cr(),new fd(e,r.nr,r.credentials,r.N,n)}(t.datastore,t.asyncQueue,{Si:Md.bind(null,t),Ci:Vd.bind(null,t),Vr:Ud.bind(null,t),vr:Fd.bind(null,t)}),t.jr.push((async e=>{e?(t.Hr.hr(),await Dd(t)):(await t.Hr.stop(),t.Ur.length>0&&(cc("RemoteStore",`Stopping write stream with ${t.Ur.length} pending writes`),t.Ur=[]))}))),t.Hr
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}class qd{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new yc,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new qd(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new mc(gc.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function zd(t,e){if(lc("AsyncQueue",`${e}: ${t}`),_h(t))return new mc(gc.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Kd{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Gc.comparator(e.key,n.key):(t,e)=>Gc.comparator(t.key,e.key),this.keyedMap=Ou(),this.sortedSet=new Iu(this.comparator)}static emptySet(t){return new Kd(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Kd))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Kd;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Hd{constructor(){this.Jr=new Iu(Gc.comparator)}track(t){const e=t.doc.key,n=this.Jr.get(e);n?0!==t.type&&3===n.type?this.Jr=this.Jr.insert(e,t):3===t.type&&1!==n.type?this.Jr=this.Jr.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Jr=this.Jr.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Jr=this.Jr.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Jr=this.Jr.remove(e):1===t.type&&2===n.type?this.Jr=this.Jr.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Jr=this.Jr.insert(e,{type:2,doc:t.doc}):dc():this.Jr=this.Jr.insert(e,t)}Yr(){const t=[];return this.Jr.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Wd{constructor(t,e,n,r,i,s,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,r){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new Wd(t,e,Kd.emptySet(e),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ml(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Gd{constructor(){this.Xr=void 0,this.listeners=[]}}class Xd{constructor(){this.queries=new Lh((t=>Ul(t)),Ml),this.onlineState="Unknown",this.Zr=new Set}}function Qd(t,e){const n=pc(t);let r=!1;for(const t of e){const e=t.query,i=n.queries.get(e);if(i){for(const e of i.listeners)e.no(t)&&(r=!0);i.Xr=t}}r&&Yd(n)}function Jd(t,e,n){const r=pc(t),i=r.queries.get(e);if(i)for(const t of i.listeners)t.onError(n);r.queries.delete(e)}function Yd(t){t.Zr.forEach((t=>{t.next()}))}class Zd{constructor(t,e,n){this.query=t,this.so=e,this.io=!1,this.ro=null,this.onlineState="Unknown",this.options=n||{}}no(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Wd(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.io?this.oo(t)&&(this.so.next(t),e=!0):this.ao(t,this.onlineState)&&(this.co(t),e=!0),this.ro=t,e}onError(t){this.so.error(t)}eo(t){this.onlineState=t;let e=!1;return this.ro&&!this.io&&this.ao(this.ro,t)&&(this.co(this.ro),e=!0),e}ao(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return!(this.options.uo&&n||t.docs.isEmpty()&&"Offline"!==e)}oo(t){if(t.docChanges.length>0)return!0;const e=this.ro&&this.ro.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}co(t){t=Wd.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.io=!0,this.so.next(t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class tf{constructor(t){this.key=t}}class ef{constructor(t){this.key=t}}class nf{constructor(t,e){this.query=t,this._o=e,this.mo=null,this.current=!1,this.yo=Pu(),this.mutatedKeys=Pu(),this.po=jl(t),this.Eo=new Kd(this.po)}get To(){return this._o}Io(t,e){const n=e?e.Ao:new Hd,r=e?e.Eo:this.Eo;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a=Ol(this.query)&&r.size===this.query.limit?r.last():null,c=Ll(this.query)&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const l=r.get(t),u=Vl(this.query,e)?e:null,h=!!l&&this.mutatedKeys.has(l.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;l&&u?l.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.Ro(l,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.po(u,a)>0||c&&this.po(u,c)<0)&&(o=!0)):!l&&u?(n.track({type:0,doc:u}),f=!0):l&&!u&&(n.track({type:1,doc:l}),f=!0,(a||c)&&(o=!0)),f&&(u?(s=s.add(u),i=d?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))})),Ol(this.query)||Ll(this.query))for(;s.size>this.query.limit;){const t=Ol(this.query)?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Eo:s,Ao:n,Ln:o,mutatedKeys:i}}Ro(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Eo;this.Eo=t.Eo,this.mutatedKeys=t.mutatedKeys;const i=t.Ao.Yr();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return dc()}};return n(t)-n(e)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t.type,e.type)||this.po(t.doc,e.doc))),this.bo(n);const s=e?this.Po():[],o=0===this.yo.size&&this.current?1:0,a=o!==this.mo;return this.mo=o,0!==i.length||a?{snapshot:new Wd(this.query,t.Eo,r,i,t.mutatedKeys,0===o,a,!1),vo:s}:{vo:s}}eo(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Eo:this.Eo,Ao:new Hd,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{vo:[]}}Vo(t){return!this._o.has(t)&&!!this.Eo.has(t)&&!this.Eo.get(t).hasLocalMutations}bo(t){t&&(t.addedDocuments.forEach((t=>this._o=this._o.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this._o=this._o.delete(t))),this.current=t.current)}Po(){if(!this.current)return[];const t=this.yo;this.yo=Pu(),this.Eo.forEach((t=>{this.Vo(t.key)&&(this.yo=this.yo.add(t.key))}));const e=[];return t.forEach((t=>{this.yo.has(t)||e.push(new ef(t))})),this.yo.forEach((n=>{t.has(n)||e.push(new tf(n))})),e}So(t){this._o=t.Gn,this.yo=Pu();const e=this.Io(t.documents);return this.applyChanges(e,!0)}Do(){return Wd.fromInitialDocuments(this.query,this.Eo,this.mutatedKeys,0===this.mo)}}class rf{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class sf{constructor(t){this.key=t,this.Co=!1}}class of{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.No={},this.xo=new Lh((t=>Ul(t)),Ml),this.ko=new Map,this.$o=new Set,this.Oo=new Iu(Gc.comparator),this.Fo=new Map,this.Mo=new Hh,this.Lo={},this.Bo=new Map,this.Uo=Dh.ie(),this.onlineState="Unknown",this.qo=void 0}get isPrimaryClient(){return!0===this.qo}}async function af(t,e){const n=function(t){const e=pc(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=uf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_f.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=df.bind(null,e),e.No.Tr=Qd.bind(null,e.eventManager),e.No.jo=Jd.bind(null,e.eventManager),e}(t);let r,i;const s=n.xo.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Do();else{const t=await function(t,e){const n=pc(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.ze.getTargetData(t,e).next((i=>i?(r=i,Th.resolve(r)):n.ze.allocateTargetId(t).next((i=>(r=new Nh(e,i,0,t.currentSequenceNumber),n.ze.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.Un.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Un=n.Un.insert(t.targetId,t),n.qn.set(e,t.targetId)),t}))}(n.localStore,Pl(e)),s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await async function(t,e,n,r){t.Ko=(e,n,r)=>async function(t,e,n,r){let i=e.view.Io(n);i.Ln&&(i=await zh(t.localStore,e.query,!1).then((({documents:t})=>e.view.Io(t,i))));const s=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,s);return wf(t,e.targetId,o.vo),o.snapshot}(t,e,n,r);const i=await zh(t.localStore,e,!0),s=new nf(e,i.Gn),o=s.Io(i.documents),a=Vu.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),c=s.applyChanges(o,t.isPrimaryClient,a);wf(t,n,c.vo);const l=new rf(e,n,s);return t.xo.set(e,l),t.ko.has(n)?t.ko.get(n).push(e):t.ko.set(n,[e]),c.snapshot}(n,e,r,"current"===s),n.isPrimaryClient&&wd(n.remoteStore,t)}return i}async function cf(t,e){const n=pc(t),r=n.xo.get(e),i=n.ko.get(r.targetId);if(i.length>1)return n.ko.set(r.targetId,i.filter((t=>!Ml(t,e)))),void n.xo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await qh(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),bd(n.remoteStore,r.targetId),yf(n,r.targetId)})).catch(Oh)):(yf(n,r.targetId),await qh(n.localStore,r.targetId,!0))}async function lf(t,e,n){const r=function(t){const e=pc(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ff.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=pf.bind(null,e),e}(t);try{const t=await function(t,e){const n=pc(t),r=Cc.now(),i=e.reduce(((t,e)=>t.add(e.key)),Pu());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>n.Qn.Pn(t,i).next((i=>{s=i;const o=[];for(const t of e){const e=hu(t,s.get(t.key));null!=e&&o.push(new gu(t.key,e,ll(e.value.mapValue),ou.exists(!0)))}return n.In.addMutationBatch(t,r,o,e)})))).then((t=>(t.applyToLocalDocumentSet(s),{batchId:t.batchId,changes:s})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.Lo[t.currentUser.toKey()];r||(r=new Iu(Ac)),r=r.insert(e,n),t.Lo[t.currentUser.toKey()]=r}(r,t.batchId,n),await Ef(r,t.changes),await Dd(r.remoteStore)}catch(t){const e=zd(t,"Failed to persist write");n.reject(e)}}async function uf(t,e){const n=pc(t);try{const t=await jh(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.Fo.get(e);r&&(fc(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.Co=!0:t.modifiedDocuments.size>0?fc(r.Co):t.removedDocuments.size>0&&(fc(r.Co),r.Co=!1))})),await Ef(n,t,e)}catch(t){await Oh(t)}}function hf(t,e,n){const r=pc(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.xo.forEach(((n,r)=>{const i=r.view.eo(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=pc(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.eo(e)&&(r=!0)})),r&&Yd(n)}(r.eventManager,e),t.length&&r.No.Tr(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function df(t,e,n){const r=pc(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fo.get(e),s=i&&i.key;if(s){let t=new Iu(Gc.comparator);t=t.insert(s,ul.newNoDocument(s,xc.min()));const n=Pu().add(s),i=new Fu(xc.min(),new Map,new Cu(Ac),t,n);await uf(r,i),r.Oo=r.Oo.remove(s),r.Fo.delete(e),Sf(r)}else await qh(r.localStore,e,!1).then((()=>yf(r,e,n))).catch(Oh)}async function ff(t,e){const n=pc(t),r=e.batch.batchId;try{const t=await function(t,e){const n=pc(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),i=n.jn.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=Th.resolve();return s.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);fc(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&r.addEntry(e,n.commitVersion))}))})),o.next((()=>t.In.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.In.performConsistencyCheck(t))).next((()=>n.Qn.Pn(t,r)))}))}(n.localStore,e);mf(n,r,null),gf(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ef(n,t)}catch(t){await Oh(t)}}async function pf(t,e,n){const r=pc(t);try{const t=await function(t,e){const n=pc(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.In.lookupMutationBatch(t,e).next((e=>(fc(null!==e),r=e.keys(),n.In.removeMutationBatch(t,e)))).next((()=>n.In.performConsistencyCheck(t))).next((()=>n.Qn.Pn(t,r)))}))}(r.localStore,e);mf(r,e,n),gf(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ef(r,t)}catch(n){await Oh(n)}}function gf(t,e){(t.Bo.get(e)||[]).forEach((t=>{t.resolve()})),t.Bo.delete(e)}function mf(t,e,n){const r=pc(t);let i=r.Lo[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.Lo[r.currentUser.toKey()]=i}}function yf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ko.get(e))t.xo.delete(r),n&&t.No.jo(r,n);t.ko.delete(e),t.isPrimaryClient&&t.Mo.cs(e).forEach((e=>{t.Mo.containsKey(e)||vf(t,e)}))}function vf(t,e){t.$o.delete(e.path.canonicalString());const n=t.Oo.get(e);null!==n&&(bd(t.remoteStore,n),t.Oo=t.Oo.remove(e),t.Fo.delete(n),Sf(t))}function wf(t,e,n){for(const r of n)r instanceof tf?(t.Mo.addReference(r.key,e),bf(t,r)):r instanceof ef?(cc("SyncEngine","Document no longer in limbo: "+r.key),t.Mo.removeReference(r.key,e),t.Mo.containsKey(r.key)||vf(t,r.key)):dc()}function bf(t,e){const n=e.key,r=n.path.canonicalString();t.Oo.get(n)||t.$o.has(r)||(cc("SyncEngine","New document in limbo: "+n),t.$o.add(r),Sf(t))}function Sf(t){for(;t.$o.size>0&&t.Oo.size<t.maxConcurrentLimboResolutions;){const e=t.$o.values().next().value;t.$o.delete(e);const n=new Gc(Lc.fromString(e)),r=t.Uo.next();t.Fo.set(r,new sf(n)),t.Oo=t.Oo.insert(n,r),wd(t.remoteStore,new Nh(Pl(Dl(n.path)),r,2,Tc.T))}}async function Ef(t,e,n){const r=pc(t),i=[],s=[],o=[];r.xo.isEmpty()||(r.xo.forEach(((t,a)=>{o.push(r.Ko(a,e,n).then((t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=Ph.kn(a.targetId,t);s.push(e)}})))})),await Promise.all(o),r.No.Tr(i),await async function(t,e){const n=pc(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Th.forEach(e,(e=>Th.forEach(e.Nn,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>Th.forEach(e.xn,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!_h(t))throw t;cc("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.Un.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.Un=n.Un.insert(e,i)}}}(r.localStore,s))}async function Tf(t,e){const n=pc(t);if(!n.currentUser.isEqual(e)){cc("SyncEngine","User change. New user:",e.toKey());const t=await Fh(n.localStore,e);n.currentUser=e,function(t,e){t.Bo.forEach((t=>{t.forEach((t=>{t.reject(new mc(gc.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),t.Bo.clear()}(n),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Ef(n,t.Wn)}}function _f(t,e){const n=pc(t),r=n.Fo.get(e);if(r&&r.Co)return Pu().add(r.key);{let t=Pu();const r=n.ko.get(e);if(!r)return t;for(const e of r){const r=n.xo.get(e);t=t.unionWith(r.view.To)}return t}}class If{constructor(){this.synchronizeTabs=!1}async initialize(t){this.N=ld(t.databaseInfo.databaseId),this.sharedClientState=this.Wo(t),this.persistence=this.Go(t),await this.persistence.start(),this.gcScheduler=this.zo(t),this.localStore=this.Ho(t)}zo(t){return null}Ho(t){return function(t,e,n,r){return new Uh(t,e,n,r)}(this.persistence,new Mh,t.initialUser,this.N)}Go(t){return new Yh(td.Ns,this.N)}Wo(t){return new nd}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Af{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>hf(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Tf.bind(null,this.syncEngine),await async function(t,e){const n=pc(t);e?(n.Kr.delete(2),await yd(n)):e||(n.Kr.add(2),await vd(n),n.Wr.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Xd}createDatastore(t){const e=ld(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new ad(r));var r;return function(t,e,n){return new pd(t,e,n)}(t.credentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>hf(this.syncEngine,t,0),s=id.bt()?new id:new rd,new md(e,n,r,i,s);var e,n,r,i,s}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new of(t,e,n,r,i,s);return o&&(a.qo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=pc(t);cc("RemoteStore","RemoteStore shutting down."),e.Kr.add(5),await vd(e),e.Qr.shutdown(),e.Wr.set("Unknown")}(this.remoteStore)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Nf{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Yo(this.observer.next,t)}error(t){this.observer.error?this.Yo(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Xo(){this.muted=!0}Yo(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Cf{constructor(t,e,n){this.credentials=t,this.asyncQueue=e,this.databaseInfo=n,this.user=ic.UNAUTHENTICATED,this.clientId=Ic.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(e,(async t=>{cc("FirestoreClient","Received user=",t.uid),await this.credentialListener(t),this.user=t}))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.credentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new mc(gc.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new yc;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),t.resolve()}catch(e){const n=zd(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function xf(t){return t.offlineComponents||(cc("FirestoreClient","Using default OfflineComponentProvider"),await async function(t,e){t.asyncQueue.verifyOperationInProgress(),cc("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await Fh(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}(t,new If)),t.offlineComponents}async function kf(t){return t.onlineComponents||(cc("FirestoreClient","Using default OnlineComponentProvider"),await async function(t,e){t.asyncQueue.verifyOperationInProgress();const n=await xf(t);cc("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>async function(t,e){const n=pc(t);n.asyncQueue.verifyOperationInProgress(),cc("RemoteStore","RemoteStore received new credentials");const r=Id(n);n.Kr.add(3),await vd(n),r&&n.Wr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Kr.delete(3),await yd(n)}(e.remoteStore,t))),t.onlineComponents=e}(t,new Af)),t.onlineComponents}async function $f(t){const e=await kf(t),n=e.eventManager;return n.onListen=af.bind(null,e.syncEngine),n.onUnlisten=cf.bind(null,e.syncEngine),n}function Df(t){return t.asyncQueue.enqueue((async()=>{const e=await function(t){return xf(t).then((t=>t.persistence))}(t),n=await function(t){return kf(t).then((t=>t.remoteStore))}(t);return e.setNetworkEnabled(!1),async function(t){const e=pc(t);e.Kr.add(0),await vd(e),e.Wr.set("Offline")}(n)}))}class Of{constructor(t,e,n,r,i,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Lf{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Lf&&t.projectId===this.projectId&&t.database===this.database}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Rf=new Map;
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Pf(t,e,n){if(!n)throw new mc(gc.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Mf(t){if(!Gc.isDocumentKey(t))throw new mc(gc.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Uf(t){if(Gc.isDocumentKey(t))throw new mc(gc.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ff(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){if(t.constructor){const e=/function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());if(e&&e.length>1)return e[1]}return null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":dc()}function Vf(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new mc(gc.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ff(t);throw new mc(gc.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class jf{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new mc(gc.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new mc(gc.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,r){if(!0===e&&!0===r)throw new mc(gc.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Bf{constructor(t,e){this._credentials=e,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jf({}),this._settingsFrozen=!1,t instanceof Lf?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new mc(gc.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Lf(t.options.projectId)}(t))}get app(){if(!this._app)throw new mc(gc.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new mc(gc.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jf(t),void 0!==t.credentials&&(this._credentials=function(t){if(!t)return new wc;switch(t.type){case"gapi":const e=t.client;return fc(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new Ec(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new mc(gc.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Rf.get(t);e&&(cc("ComponentProvider","Removing Datastore"),Rf.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class qf{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Kf(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new qf(this.firestore,t,this._key)}}class zf{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new zf(this.firestore,t,this._query)}}class Kf extends zf{constructor(t,e,n){super(t,e,Dl(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new qf(this.firestore,null,new Gc(t))}withConverter(t){return new Kf(this.firestore,t,this._path)}}function Hf(t,e,...n){if(t=Yt(t),Pf("collection","path",e),t instanceof Bf){const r=Lc.fromString(e,...n);return Uf(r),new Kf(t,null,r)}{if(!(t instanceof qf||t instanceof Kf))throw new mc(gc.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Lc.fromString(e,...n));return Uf(r),new Kf(t.firestore,null,r)}}function Wf(t,e,...n){if(t=Yt(t),1===arguments.length&&(e=Ic.I()),Pf("doc","path",e),t instanceof Bf){const r=Lc.fromString(e,...n);return Mf(r),new qf(t,null,new Gc(r))}{if(!(t instanceof qf||t instanceof Kf))throw new mc(gc.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Lc.fromString(e,...n));return Mf(r),new qf(t.firestore,t instanceof Kf?t.converter:null,new Gc(r))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Gf{constructor(){this.fa=Promise.resolve(),this.da=[],this.wa=!1,this._a=[],this.ma=null,this.ga=!1,this.ya=!1,this.pa=[],this.rr=new ud(this,"async_queue_retry"),this.Ea=()=>{const t=cd();t&&cc("AsyncQueue","Visibility state changed to "+t.visibilityState),this.rr.tr()};const t=cd();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Ea)}get isShuttingDown(){return this.wa}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Ta(),this.Ia(t)}enterRestrictedMode(t){if(!this.wa){this.wa=!0,this.ya=t||!1;const e=cd();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Ea)}}enqueue(t){if(this.Ta(),this.wa)return new Promise((()=>{}));const e=new yc;return this.Ia((()=>this.wa&&this.ya?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.da.push(t),this.Aa())))}async Aa(){if(0!==this.da.length){try{await this.da[0](),this.da.shift(),this.rr.reset()}catch(t){if(!_h(t))throw t;cc("AsyncQueue","Operation failed with retryable error: "+t)}this.da.length>0&&this.rr.Xi((()=>this.Aa()))}}Ia(t){const e=this.fa.then((()=>(this.ga=!0,t().catch((t=>{throw this.ma=t,this.ga=!1,lc("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t)),t})).then((t=>(this.ga=!1,t))))));return this.fa=e,e}enqueueAfterDelay(t,e,n){this.Ta(),this.pa.indexOf(t)>-1&&(e=0);const r=qd.createAndSchedule(this,t,e,n,(t=>this.Ra(t)));return this._a.push(r),r}Ta(){this.ma&&dc()}verifyOperationInProgress(){}async ba(){let t;do{t=this.fa,await t}while(t!==this.fa)}Pa(t){for(const e of this._a)if(e.timerId===t)return!0;return!1}va(t){return this.ba().then((()=>{this._a.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this._a)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.ba()}))}Va(t){this.pa.push(t)}Ra(t){const e=this._a.indexOf(t);this._a.splice(e,1)}}function Xf(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const t of["next","error","complete"])if(t in n&&"function"==typeof n[t])return!0;return!1}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t)}class Qf extends Bf{constructor(t,e){super(t,e),this.type="firestore",this._queue=new Gf,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Zf(this),this._firestoreClient.terminate()}}function Jf(t=function(t="[DEFAULT]"){const e=me.get(t);if(!e)throw Se.create("no-app",{appName:t});return e}()){return be(t,"firestore").getImmediate()}function Yf(t){return t._firestoreClient||Zf(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Zf(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new Of(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Cf(t._credentials,t._queue,r)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class tp{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new mc(gc.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pc(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ep{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ep(Uc.fromBase64String(t))}catch(t){throw new mc(gc.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new ep(Uc.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class np{constructor(t){this._methodName=t}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class rp{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new mc(gc.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new mc(gc.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Ac(this._lat,t._lat)||Ac(this._long,t._long)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const ip=/^__.*__$/;class sp{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new gu(t,this.data,this.fieldMask,e,this.fieldTransforms):new pu(t,this.data,e,this.fieldTransforms)}}class op{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new gu(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function ap(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw dc()}}class cp{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.N=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Sa(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Da(){return this.settings.Da}Ca(t){return new cp(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Na(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Ca({path:n,xa:!1});return r.ka(t),r}$a(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Ca({path:n,xa:!1});return r.Sa(),r}Oa(t){return this.Ca({path:void 0,xa:!0})}Fa(t){return Sp(t,this.settings.methodName,this.settings.Ma||!1,this.path,this.settings.La)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Sa(){if(this.path)for(let t=0;t<this.path.length;t++)this.ka(this.path.get(t))}ka(t){if(0===t.length)throw this.Fa("Document fields must not be empty");if(ap(this.Da)&&ip.test(t))throw this.Fa('Document fields cannot begin and end with "__"')}}class lp{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.N=n||ld(t)}Ba(t,e,n,r=!1){return new cp({Da:t,methodName:e,La:n,path:Pc.emptyPath(),xa:!1,Ma:r},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function up(t){const e=t._freezeSettings(),n=ld(t._databaseId);return new lp(t._databaseId,!!e.ignoreUndefinedProperties,n)}function hp(t,e,n,r,i,s={}){const o=t.Ba(s.merge||s.mergeFields?2:0,e,n,i);yp("Data must be an object, but it was:",o,r);const a=gp(r,o);let c,l;if(s.merge)c=new Mc(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=vp(e,r,n);if(!o.contains(i))throw new mc(gc.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Ep(t,i)||t.push(i)}c=new Mc(t),l=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,l=o.fieldTransforms;return new sp(new cl(a),c,l)}class dp extends np{_toFieldTransform(t){if(2!==t.Da)throw 1===t.Da?t.Fa(`${this._methodName}() can only appear at the top level of your update data`):t.Fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof dp}}class fp extends np{_toFieldTransform(t){return new iu(t.path,new Ql)}isEqual(t){return t instanceof fp}}function pp(t,e){if(mp(t=Yt(t)))return yp("Unsupported field value:",e,t),gp(t,e);if(t instanceof np)return function(t,e){if(!ap(e.Da))throw e.Fa(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.Fa(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xa&&4!==e.Da)throw e.Fa("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=pp(i,e.Oa(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Yt(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Kl(e.N,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=Cc.fromDate(t);return{timestampValue:Ju(e.N,n)}}if(t instanceof Cc){const n=new Cc(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Ju(e.N,n)}}if(t instanceof rp)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof ep)return{bytesValue:Yu(e.N,t._byteString)};if(t instanceof qf){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.Fa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:eh(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.Fa(`Unsupported field value: ${Ff(t)}`)}(t,e)}function gp(t,e){const n={};return Dc(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):$c(t,((t,r)=>{const i=pp(r,e.Na(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function mp(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof Cc||t instanceof rp||t instanceof ep||t instanceof qf||t instanceof np)}function yp(t,e,n){if(!mp(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=Ff(n);throw"an object"===r?e.Fa(t+" a custom object"):e.Fa(t+" "+r)}}function vp(t,e,n){if((e=Yt(e))instanceof tp)return e._internalPath;if("string"==typeof e)return bp(t,e);throw Sp("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const wp=new RegExp("[~\\*/\\[\\]]");function bp(t,e,n){if(e.search(wp)>=0)throw Sp(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new tp(...e.split("."))._internalPath}catch(r){throw Sp(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Sp(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new mc(gc.INVALID_ARGUMENT,a+t+c)}function Ep(t,e){return t.some((t=>t.isEqual(e)))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Tp{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new qf(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new _p(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ip("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class _p extends Tp{data(){return super.data()}}function Ip(t,e){return"string"==typeof e?bp(t,e):e instanceof tp?e._internalPath:e._delegate._internalPath}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ap{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Np extends Tp{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Cp(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Ip("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Cp extends Np{data(t={}){return super.data(t)}}class xp{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Ap(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new Cp(this._firestore,this._userDataWriter,n.key,n,new Ap(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new mc(gc.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new Cp(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Ap(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new Cp(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Ap(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:kp(e.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function kp(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return dc()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function $p(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}class Dp{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=up(t)}set(t,e,n){this._verifyNotCommitted();const r=Op(t,this._firestore),i=$p(r.converter,e,n),s=hp(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,ou.none())),this}update(t,e,n,...r){this._verifyNotCommitted();const i=Op(t,this._firestore);let s;return s="string"==typeof(e=Yt(e))||e instanceof tp?function(t,e,n,r,i,s){const o=t.Ba(1,e,n),a=[vp(e,r,n)],c=[i];if(s.length%2!=0)throw new mc(gc.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let t=0;t<s.length;t+=2)a.push(vp(e,s[t])),c.push(s[t+1]);const l=[],u=cl.empty();for(let t=a.length-1;t>=0;--t)if(!Ep(l,a[t])){const e=a[t];let n=c[t];n=Yt(n);const r=o.$a(e);if(n instanceof dp)l.push(e);else{const t=pp(n,r);null!=t&&(l.push(e),u.set(e,t))}}const h=new Mc(l);return new op(u,h,o.fieldTransforms)}(this._dataReader,"WriteBatch.update",i._key,e,n,r):function(t,e,n,r){const i=t.Ba(1,e,n);yp("Data must be an object, but it was:",i,r);const s=[],o=cl.empty();$c(r,((t,r)=>{const a=bp(e,t,n);r=Yt(r);const c=i.$a(a);if(r instanceof dp)s.push(a);else{const t=pp(r,c);null!=t&&(s.push(a),o.set(a,t))}}));const a=new Mc(s);return new op(o,a,i.fieldTransforms)}(this._dataReader,"WriteBatch.update",i._key,e),this._mutations.push(s.toMutation(i._key,ou.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=Op(t,this._firestore);return this._mutations=this._mutations.concat(new wu(e._key,ou.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new mc(gc.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Op(t,e){if((t=Yt(t)).firestore!==e)throw new mc(gc.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}class Lp extends
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class{convertValue(t,e="none"){switch(Xc(t)){case 0:return null;case 1:return t.booleanValue;case 2:return jc(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Bc(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw dc()}}convertObject(t,e){const n={};return $c(t.fields,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new rp(jc(t.latitude),jc(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=zc(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Kc(t));default:return null}}convertTimestamp(t){const e=Vc(t);return new Cc(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Lc.fromString(t);fc(Eh(n));const r=new Lf(n.get(1),n.get(3)),i=new Gc(n.popFirst(5));return r.isEqual(e)||lc(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}{constructor(t){super(),this.firestore=t}convertBytes(t){return new ep(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new qf(this.firestore,null,e)}}function Rp(t,...e){var n,r,i;t=Yt(t);let s={includeMetadataChanges:!1},o=0;"object"!=typeof e[o]||Xf(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Xf(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(r=t.error)||void 0===r?void 0:r.bind(t),e[o+2]=null===(i=t.complete)||void 0===i?void 0:i.bind(t)}let c,l,u;if(t instanceof qf)l=Vf(t.firestore,Qf),u=Dl(t._key.path),c={next:n=>{e[o]&&e[o](function(t,e,n){const r=n.docs.get(e._key),i=new Lp(t);return new Np(t,i,e._key,r,new Ap(n.hasPendingWrites,n.fromCache),e.converter)}(l,t,n))},error:e[o+1],complete:e[o+2]};else{const n=Vf(t,zf);l=Vf(n.firestore,Qf),u=n._query;const r=new Lp(l);c={next:t=>{e[o]&&e[o](new xp(l,r,n,t))},error:e[o+1],complete:e[o+2]},function(t){if(Ll(t)&&0===t.explicitOrderBy.length)throw new mc(gc.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(t._query)}return function(t,e,n,r){const i=new Nf(r),s=new Zd(e,i,n);return t.asyncQueue.enqueueAndForget((async()=>async function(t,e){const n=pc(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Gd),i)try{s.Xr=await n.onListen(r)}catch(t){const n=zd(t,`Initialization of query '${Fl(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,s),s.listeners.push(e),e.eo(n.onlineState),s.Xr&&e.no(s.Xr)&&Yd(n)}(await $f(t),s))),()=>{i.Xo(),t.asyncQueue.enqueueAndForget((async()=>async function(t,e){const n=pc(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}(await $f(t),s)))}}(Yf(l),u,a,c)}function Pp(t,e){return function(t,e){const n=new yc;return t.asyncQueue.enqueueAndForget((async()=>lf(await function(t){return kf(t).then((t=>t.syncEngine))}(t),e,n))),n.promise}(Yf(t),e)}let Mp;function Up(){return void 0===Mp&&(Mp=Jf(),An()&&function(t){Df(Yf(t=Vf(t,Qf)))}(Mp)),Mp}sc="9.0.0",we(new Zt("firestore",((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=new Qf(n,new bc(t.getProvider("auth-internal")));return e=Object.assign({useFetchStreams:!0},e),r._setSettings(e),r}),"PUBLIC")),Te("@firebase/firestore","3.0.2",undefined);async function Fp(t,e,n){const r=
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function(t){return Yf(t=Vf(t,Qf)),new Dp(t,(e=>Pp(t,e)))}(Up()),i=t+(n?1:0),s=Wf(Up(),"users",jr(),"transcripts",Br(),"patches","meta");r.set(s,{cursor:i});const o=Wf(Up(),"users",jr(),"transcripts",Br());if(r.set(o,{updated:new fp("serverTimestamp")},{merge:!0}),n){const t=i.toString().padStart(10,"0"),s=Wf(Up(),"users",jr(),"transcripts",Br(),"patches",t);r.set(s,n);for(let t=i+1;t<=e;t++){const e=t.toString().padStart(10,"0"),n=Wf(Up(),"users",jr(),"transcripts",Br(),"patches",e);r.delete(n)}}!function(t){On.update((e=>(e.push({idx:Dn,text:t}),e))),Dn++,setTimeout((()=>{On.update((t=>(t.shift(),t)))}),2500)}("Saving"),await r.commit()}const Vp=new class{constructor(){this.patchHistory=[],this.sectionPatchStores={},this.commaSilenceStoreInternal=kn(null),this.periodSilenceStoreInternal=kn(null),this.paragraphSilenceStoreInternal=kn(null),this.commaSilenceStore=_r(this.commaSilenceStoreInternal),this.periodSilenceStore=_r(this.periodSilenceStoreInternal),this.paragraphSilenceStore=_r(this.paragraphSilenceStoreInternal),this.firebaseCursor=-1,this.cursor=-1,this.maxRedoPoint=-1}getCursor(){return{current:this.cursor,max:this.patchHistory.length-1,firebase:this.firebaseCursor}}isPatchEqual(t,e){const n=this.patchHistory[t];return JSON.stringify(n)===JSON.stringify(e)}getSectionPatchStoreInternal(t){let e=this.sectionPatchStores[t];return e||(e=kn({text:null,endParagraph:null,confirmed:null}),this.sectionPatchStores[t]=e),e}getSectionPatchStore(t){return{subscribe:this.getSectionPatchStoreInternal(t).subscribe}}resetCursor(){this.setCursor(this.firebaseCursor)}setCursor(t){if(isNaN(t))throw new Error("New cursor is NaN");t!==this.cursor&&(t>this.cursor?this.applyPatches(this.cursor+1,t):this.removePatches(this.cursor,t+1),this.cursor=t)}applyPatches(t,e){var n,r,i;const s={};let o={};for(let a=t;a<=e;a++){const t=pr(this.patchHistory,a),e=null!==(r=null===(n=t.meta)||void 0===n?void 0:n.to)&&void 0!==r?r:{};o=Object.assign(Object.assign({},o),e);for(const e in t){if("meta"===e)continue;const n=parseInt(e),r=t[n],o=null!==(i=s[n])&&void 0!==i?i:{};s[n]=Object.assign(Object.assign({},o),r.to)}}this.applyCollapsedPatch(s,o)}removePatches(t,e){var n,r,i;const s={};let o={};for(let a=t;a>=e;a--){const t=pr(this.patchHistory,a),e=null!==(r=null===(n=t.meta)||void 0===n?void 0:n.from)&&void 0!==r?r:{};o=Object.assign(Object.assign({},o),e);for(const e in t){if("meta"===e)continue;const n=parseInt(e),r=t[n],o=null!==(i=s[n])&&void 0!==i?i:{};s[n]=Object.assign(Object.assign({},o),r.from)}}this.applyCollapsedPatch(s,o)}applyCollapsedPatch(t,e){mr(t,((t,e)=>{this.getSectionPatchStoreInternal(t).update((t=>Object.assign(Object.assign({},t),e)))}));const{commaSilence:n,periodSilence:r,paragraphSilence:i}=e;void 0!==n&&this.commaSilenceStoreInternal.set(n),void 0!==r&&this.periodSilenceStoreInternal.set(r),void 0!==i&&this.paragraphSilenceStoreInternal.set(i)}init(){const t=function(t,...e){for(const n of e)t=n._apply(t);return t}(Hf(Up(),"users",jr(),"transcripts",Br(),"patches"));return new Promise((e=>{Rp(t,(t=>{this.processSnapshot(t),e(0===this.patchHistory.length)}))}))}processSnapshot(t){var e,n,r;const i=t.docChanges();if(0===i.length)return;const s=null!==(r=null===(n=null===(e=i.find((t=>"meta"===t.doc.id)))||void 0===e?void 0:e.doc)||void 0===n?void 0:n.get("cursor"))&&void 0!==r?r:this.firebaseCursor,o=i.filter((t=>"meta"!==t.doc.id)).map((t=>[parseInt(t.doc.id),t]));o.sort((([t],[e])=>t-e)),o.length&&this.processComplexSnapshot(o,s),this.setCursor(s),this.firebaseCursor=s,this.maxRedoPoint=this.patchHistory.length-1}processComplexSnapshot(t,e){var n,r;const i=t.filter((([t,e])=>"added"===e.type||"modified"===e.type));let s;if(void 0===s&&(s=null===(n=i[0])||void 0===n?void 0:n[0]),void 0===s&&(s=null===(r=t[0])||void 0===r?void 0:r[0]),void 0===s)throw new Error;this.setCursor(s-1);const o=i.map((([t,e])=>e.doc.data()));this.patchHistory.splice(s,this.patchHistory.length,...o)}undo(){return this.cursor>=0&&(this.setCursor(this.cursor-1),!0)}redo(){return this.cursor<this.maxRedoPoint&&(this.setCursor(this.cursor+1),!0)}maxRedoPointNow(){this.maxRedoPoint=this.cursor}},jp=new class{constructor(){this.patchState="none",this.sectionPatchStores={},this.sectionPatchData={},this.commaSilence=void 0,this.commaSilenceStoreInternal=kn(this.commaSilence),this.commaSilenceStore=_r(this.commaSilenceStoreInternal),this.periodSilence=void 0,this.periodSilenceStoreInternal=kn(this.periodSilence),this.periodSilenceStore=_r(this.periodSilenceStoreInternal),this.paragraphSilence=void 0,this.paragraphSilenceStoreInternal=kn(this.paragraphSilence),this.paragraphSilenceStore=_r(this.paragraphSilenceStoreInternal)}getSectionPatchStoreInternal(t){let e=this.sectionPatchStores[t];return e||(e=kn({}),this.sectionPatchStores[t]=e),e}getSectionPatchStore(t){return _r(this.getSectionPatchStoreInternal(t))}getPending(){if("pending"!==this.patchState)return;const t=Object.assign(Object.assign({},this.sectionPatchData),{meta:{}});return void 0!==this.commaSilence&&(t.meta.commaSilence=this.commaSilence),void 0!==this.periodSilence&&(t.meta.periodSilence=this.periodSilence),void 0!==this.paragraphSilence&&(t.meta.paragraphSilence=this.paragraphSilence),t}undo(){return"pending"===this.patchState&&(this.clearStores(),this.patchState="undone",!0)}redo(){return"undone"===this.patchState&&(this.patchState="pending",this.applyStores(),!0)}append(t,e){if("pending"===this.patchState){const n=Object.assign(Object.assign({},this.sectionPatchData[t]),e);this.sectionPatchData[t]=n,this.getSectionPatchStoreInternal(t).set(n)}else this.patchState="pending",this.sectionPatchData[t]=e,this.getSectionPatchStoreInternal(t).set(e)}setCommaSilence(t){this.patchState="pending",this.commaSilence=t,this.commaSilenceStoreInternal.set(t)}setPeriodSilence(t){this.patchState="pending",this.periodSilence=t,this.periodSilenceStoreInternal.set(t)}setParagraphSilence(t){this.patchState="pending",this.paragraphSilence=t,this.paragraphSilenceStoreInternal.set(t)}clear(){this.patchState="none",this.clearStores(),this.sectionPatchData={},this.commaSilence=void 0,this.periodSilence=void 0,this.paragraphSilence=void 0}clearStores(){for(let t in this.sectionPatchData)this.getSectionPatchStoreInternal(t).set({});this.commaSilenceStoreInternal.set(void 0),this.periodSilenceStoreInternal.set(void 0),this.paragraphSilenceStoreInternal.set(void 0)}applyStores(){mr(this.sectionPatchData,((t,e)=>{this.getSectionPatchStoreInternal(t).set(e)})),this.commaSilenceStoreInternal.set(this.commaSilence),this.periodSilenceStoreInternal.set(this.periodSilence),this.paragraphSilenceStoreInternal.set(this.paragraphSilence)}};let Bp=null;Vp.commaSilenceStore.subscribe((t=>Bp=t));let qp=null;Vp.periodSilenceStore.subscribe((t=>qp=t));let zp=null;Vp.paragraphSilenceStore.subscribe((t=>zp=t));const Kp={subscribe:$n([Vp.commaSilenceStore,jp.commaSilenceStore],(([t,e])=>void 0===e?null!=t?t:150:null!=e?e:.15)).subscribe,set:t=>{jp.setCommaSilence(t),Jp()}},Hp={subscribe:$n([Vp.periodSilenceStore,jp.periodSilenceStore],(([t,e])=>void 0===e?null!=t?t:250:null!=e?e:.25)).subscribe,set:t=>{jp.setPeriodSilence(t),Jp()}},Wp={subscribe:$n([Vp.paragraphSilenceStore,jp.paragraphSilenceStore],(([t,e])=>void 0===e?null!=t?t:500:null!=e?e:.5)).subscribe,set:t=>{jp.setParagraphSilence(t),Jp()}};const Gp={},Xp={};let Qp;function Jp(){void 0!==Qp&&clearTimeout(Qp),Qp=setTimeout(Yp,3e3)}async function Yp(){console.log("Committing");const t=Vp.getCursor(),e=t.current,n=t.max,r=t.firebase,i=function(t){if(void 0===t)return;let e=!0;const n={},r={from:{},to:{}},{commaSilence:i,periodSilence:s,paragraphSilence:o}=t.meta;void 0!==i&&(r.from.commaSilence=Bp,r.to.commaSilence=i,e=!1);void 0!==s&&(r.from.periodSilence=qp,r.to.periodSilence=s,e=!1);void 0!==o&&(r.from.paragraphSilence=zp,r.to.paragraphSilence=o,e=!1);e||(n.meta=r);return mr(t,((t,r)=>{if(isNaN(t))return;const i=gr(Xp,t);let s=!1;const o={from:{},to:{}};for(const t in r){const e=i[t],n=r[t];e!==n&&(o.from[t]=e,o.to[t]=n,s=!0)}s&&(n[t]=o,e=!1)})),e?void 0:n}(jp.getPending());e===r-1&&void 0!==i&&Vp.isPatchEqual(r,i)?Vp.resetCursor():await Fp(e,n,i),jp.clear()}const Zp={init:async function(){return!!await Vp.init()},getPatchStore:function(t){const e=Gp[t];if(e)return e;const n=Vp.getSectionPatchStore(t),r=jp.getSectionPatchStore(t);return n.subscribe((e=>{Xp[t]=e})),Sr($n([n,r],(([t,e])=>Object.assign(Object.assign({},t),e))),{text:null,endParagraph:null,confirmed:null})},undo:function(){jp.undo()||Vp.undo(),Jp()},redo:function(){Vp.redo()||jp.redo(),Jp()},append:function(t,e){jp.append(t,e),Vp.maxRedoPointNow(),Jp()}};async function tg(t,e){const n=lg(t);await sg(n,e)}async function eg(t,e,n){const r=lg(t);await og(r,e,n)}async function ng(t,e){const n=lg(t);await ag(n,e)}async function rg(t,e){if(void 0!==t)return tg(t+1,e)}async function ig(t,e){if(void 0!==t)return ng(t-1,e)}async function sg(t,e){return og(t,0,e)}async function og(t,e,n){var r,i,s,o;if(void 0===t)return;const a=t.hasChildNodes()?t.firstChild:t;if(null===a)return;const c=fr(e,0,null!==(i=null===(r=a.textContent)||void 0===r?void 0:r.length)&&void 0!==i?i:0);n?null===(s=window.getSelection())||void 0===s||s.extend(a,c):null===(o=window.getSelection())||void 0===o||o.setBaseAndExtent(a,c,a,c)}async function ag(t,e){var n,r;return og(t,null!==(r=null===(n=null==t?void 0:t.textContent)||void 0===n?void 0:n.length)&&void 0!==r?r:0,e)}let cg;function lg(t){if(void 0===t)return;const e=document.querySelector(`[data-sectionIdx="${t}"]`);return null!=e?e:void 0}function ug(t){const e=null==t?void 0:t.focusNode,n=(null==e?void 0:e.nodeType)===Node.TEXT_NODE?e.parentElement:e;return n||null}function hg(t){const e=null==t?void 0:t.anchorNode,n=(null==e?void 0:e.nodeType)===Node.TEXT_NODE?e.parentElement:e;return n||null}function dg(t){if(null===t)return null;const e=t.getAttribute("data-sectionIdx");if(null===e)return null;return parseInt(e)}window.onbeforeunload=()=>(void 0!==Qp&&clearTimeout(Qp),Yp(),null);const fg=kn(void 0),pg=Sr($n(fg,(t=>{if(void 0===t)return;const{anchor:e,focus:n}=t,r=function(t,e){return e.section<t.section||!(e.section>t.section)&&e.offset<t.offset}(e,n);return{anchor:e,focus:n,early:r?n:e,late:r?e:n,inverted:r}})),void 0);let gg;pg.subscribe((t=>gg=t));const mg=$n(pg,(t=>null==t?void 0:t.anchor)),yg=$n(pg,(t=>null==t?void 0:t.focus)),vg=$n(mg,(t=>null==t?void 0:t.section)),wg=$n(yg,(t=>null==t?void 0:t.section)),bg=$n([pg,vg,wg],(([t,e,n])=>(null==t?void 0:t.inverted)?n:e)),Sg=$n([pg,vg,wg],(([t,e,n])=>(null==t?void 0:t.inverted)?e:n));Er($n([bg,Sg],(([t,e])=>({early:t,late:e})))).subscribe((({last:t,current:e})=>{const n={},r=null==t?void 0:t.early,i=null==t?void 0:t.late;if(void 0!==r&&void 0!==i)for(let t=r;t<=i;t++)n[t]=!1;const s=e.early,o=e.late;if(void 0!==s&&void 0!==o)for(let t=s;t<=o;t++)n[t]=!0;mr(n,((t,e)=>{wr(t).selectedStore.set(e)})),void 0!==r&&r===i&&wr(r).soleSelectedStore.set(!1),void 0!==s&&s===o&&wr(s).soleSelectedStore.set(!0)}));const Eg=$n(pg,(t=>void 0!==t&&(t.anchor.section!==t.focus.section||t.anchor.offset!==t.focus.offset)));function Tg(t,e){if(null===t)return null;const n=t.parentElement;if(null===n)return null;let r;if(n.classList.contains("section"))r=n;else{if(!n.classList.contains("paragraph"))return null;r=t}const i=r.getAttribute("data-sectionIdx");return null===i?null:{section:parseInt(i),offset:e}}$n(pg,(t=>void 0!==t&&t.anchor.section!==t.focus.section)),document.addEventListener("selectionchange",(function(){const t=window.getSelection();if(null!==t){const e=Tg(t.anchorNode,t.anchorOffset),n=Tg(t.focusNode,t.focusOffset);if(e&&n)return void fg.set({anchor:e,focus:n})}fg.set(void 0)}));class _g{constructor(t,e,n=1e3){this.documentSupplier=t,this.initial=e,this.debounceDelayMs=n,this.connected=!1,this.remoteStore=kn(this.initial),this.stageStore=kn({}),this.localStore=$n([this.remoteStore,this.stageStore],(([t,e])=>Object.assign(Object.assign({},t),e))),this.subscribe=this.localStore.subscribe,this.fields={}}connect(){if(this.connected)throw new Error("Already connected");let t;this.connected=!0,Rp(this.documentSupplier(),(t=>{const e=t.data();void 0!==e&&this.remoteStore.set(Object.assign(Object.assign({},this.initial),e))})),this.stageStore.subscribe((e=>{void 0!==t&&clearTimeout(t),0!==Object.keys(e).length&&(t=setTimeout((()=>this.push(e)),this.debounceDelayMs))}))}async push(t){if(!this.connected)throw new Error("Store has not been connected to firestore, cannot push");void 0===t&&(t=c(this.stageStore)),0!==Object.keys(t).length&&(await function(t,e,n){t=Vf(t,qf);const r=Vf(t.firestore,Qf),i=$p(t.converter,e,n);return Pp(r,[hp(up(r),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,ou.none())])}(this.documentSupplier(),t,{merge:!0}),this.stageStore.set({}))}commit(t){this.stageStore.update((e=>Object.assign(Object.assign({},e),t)))}getField(t){return t in this.fields||(this.fields[t]=new Ig(this,t)),this.fields[t]}}class Ig{constructor(t,e){this.parent=t,this.key=e,this.derivedStore=$n(this.parent,(t=>t[this.key])),this.subscribe=this.derivedStore.subscribe,this.push=this.parent.push}set(t){const e={};e[this.key]=t,this.parent.commit(e)}update(t){const e=c(this.derivedStore);this.set(t(e))}}const Ag=new _g((()=>Wf(Up(),"users",jr(),"settings","editorAudio")),Cn()?{loop:!1,volume:100,rate:100,mode:"context",autoPlay:!0}:(An(),{loop:!1,volume:100,rate:100,mode:"onward",autoPlay:!0})),Ng=new Set,Cg=kn(Ng),xg=$n(Tr(Cg),(t=>{if(void 0===t)return[];const e=br(),n=Array.from(t);n.sort(((t,e)=>t-e)),n.unshift(-1),n[n.length-1]!==e&&n.push(e);const r=[];for(let t=1;t<n.length;t++){const e=pr(n,t-1)+1,i=pr(n,t);r.push({start:e,end:i})}return r}));xg.subscribe((async()=>{!function(){const t=window.getSelection();if(!t)return;const{anchorNode:e,anchorOffset:n,focusNode:r,focusOffset:i}=t;null!==e&&null!==r&&(cg={anchorNode:e,anchorOffset:n,focusNode:r,focusOffset:i})}(),await it(),function(){var t;cg&&(null===(t=window.getSelection())||void 0===t||t.setBaseAndExtent(cg.anchorNode,cg.anchorOffset,cg.focusNode,cg.focusOffset),cg=void 0)}()}));const kg={subscribe:xg.subscribe,setEndParagraph:function(t,e){if(e){if(Ng.has(t))return;Ng.add(t)}else{if(!Ng.has(t))return;Ng.delete(t)}Cg.set(Ng)}},$g=$n([Ag.getField("mode"),bg,Sg,kg],(([t,e,n,r])=>{if(e!==n)return Dg(e,n);if("context"===t)return function(t,e,n){const r=Og(t,-5,n),i=Og(e,5,n);return Dg(r,i)}(e,n,r);if("onward"===t)return function(t,e){if(void 0===t)return null;return{start:wr(t).startTime,end:Number.MAX_SAFE_INTEGER}}(e);throw new Error("Unrecognised audio style "+t)}));function Dg(t,e){if(void 0===t)return null;if(void 0===e)return null;return{start:wr(t).startTime,end:wr(e).endTime}}function Og(t,e,n){if(void 0===t)return;const r=function(t,e){return e.find((e=>e.start<=t&&e.end>=t))}(t,n);return void 0!==r?fr(t+e,r.start,r.end):void 0}let Lg,Rg,Pg,Mg,Ug,Fg=!1;async function Vg(){if(!Fg)throw new Error("Trying to play the audio before it has been initialised");Lg.pause();const t=c($g);null!==t&&(Lg.currentTime=t.start,Rg=t.start,Pg=t.end,await Lg.play().catch((t=>{console.error("play error: "+t)})),Bg())}function jg(){if(!Fg)throw new Error("Trying to play the audio before it has been initialised");Lg.pause()}function Bg(){if(Lg.paused)return;const t=Lg.currentTime;t<Pg?Nr.set(t):Mg?(Lg.currentTime=Rg,Nr.set(Rg)):Lg.pause(),requestAnimationFrame(Bg)}Tr($n([bg,Sg],(t=>t))).subscribe((()=>{Fg&&(Ug?Vg():jg())}));const qg=new _g((()=>Wf(Up(),"users",jr(),"settings","editorDisplay")),Cn()||An()?{fontSize:16,pageWidth:80}:{fontSize:12,pageWidth:80});function zg(e){let n,r,s,o,a,c,l,u,h,d,f,p,g,m,y,v,w,b,I,A,C,k,$,L,M,U,F,V,j,B,q,z,K,H,W,G,X,Q,J,Y,Z,tt,et,nt,rt,it,ot,at,ct,lt,ut,ht;return{c(){n=_("h1"),n.textContent="Settings",r=N(),s=_("div"),o=_("label"),o.textContent="Comma",a=N(),c=_("input"),l=N(),u=_("span"),u.textContent="ms",h=N(),d=_("label"),d.textContent="Period",f=N(),p=_("input"),g=N(),m=_("span"),m.textContent="ms",y=N(),v=_("label"),v.textContent="Paragraph",w=N(),b=_("input"),I=N(),A=_("span"),A.textContent="ms",C=N(),k=_("div"),$=N(),L=_("label"),L.textContent="AutoPlay",M=N(),U=_("input"),F=N(),V=_("label"),V.textContent="Loop",j=N(),B=_("input"),q=N(),z=_("label"),z.textContent="Mode",K=N(),H=_("select"),W=_("option"),W.textContent="Context",G=_("option"),G.textContent="Onward",X=N(),Q=_("div"),J=N(),Y=_("label"),Y.textContent="Font Size",Z=N(),tt=_("input"),et=N(),nt=_("span"),nt.textContent="pt",rt=N(),it=_("label"),it.textContent="Page Width",ot=N(),at=_("input"),ct=N(),lt=_("span"),lt.textContent="em",D(n,"class","svelte-he659w"),D(o,"for","commaSpinner"),D(c,"id","commaSpinner"),D(c,"type","number"),D(c,"min",10),D(c,"step",10),D(c,"class","svelte-he659w"),D(u,"class","svelte-he659w"),D(d,"for","periodSpinner"),D(p,"id","periodSpinner"),D(p,"type","number"),D(p,"min",20),D(p,"step",10),D(p,"class","svelte-he659w"),D(m,"class","svelte-he659w"),D(v,"for","paragraphSpinner"),D(b,"id","paragraphSpinner"),D(b,"type","number"),D(b,"min",30),D(b,"step",10),D(b,"class","svelte-he659w"),D(A,"class","svelte-he659w"),D(k,"class","spacer svelte-he659w"),D(L,"for","autoPlayCheckbox"),D(L,"title","Alt+A"),D(U,"id","autoPlayCheckbox"),D(U,"class","twoCol svelte-he659w"),D(U,"type","checkbox"),D(V,"for","loopCheckbox"),D(V,"title","Alt+L"),D(B,"id","loopCheckbox"),D(B,"class","twoCol svelte-he659w"),D(B,"type","checkbox"),D(z,"for","playMode"),D(z,"title","Alt+C = Context, Alt+O = Onward"),W.__value="context",W.value=W.__value,G.__value="onward",G.value=G.__value,D(H,"class","twoCol svelte-he659w"),void 0===e[10]&&st((()=>e[21].call(H))),D(Q,"class","spacer svelte-he659w"),D(Y,"for","fontSize"),D(tt,"id","fontSize"),D(tt,"type","number"),D(tt,"min",8),D(tt,"step",1),D(tt,"class","svelte-he659w"),D(nt,"class","svelte-he659w"),D(it,"for","pageWidth"),D(at,"id","pageWidth"),D(at,"type","number"),D(at,"min",1),D(at,"step",1),D(at,"class","svelte-he659w"),D(lt,"class","svelte-he659w"),D(s,"class","container svelte-he659w")},m(t,i){E(t,n,i),E(t,r,i),E(t,s,i),S(s,o),S(s,a),S(s,c),R(c,e[0]),S(s,l),S(s,u),S(s,h),S(s,d),S(s,f),S(s,p),R(p,e[1]),S(s,g),S(s,m),S(s,y),S(s,v),S(s,w),S(s,b),R(b,e[2]),S(s,I),S(s,A),S(s,C),S(s,k),S(s,$),S(s,L),S(s,M),S(s,U),U.checked=e[8],S(s,F),S(s,V),S(s,j),S(s,B),B.checked=e[9],S(s,q),S(s,z),S(s,K),S(s,H),S(H,W),S(H,G),P(H,e[10]),S(s,X),S(s,Q),S(s,J),S(s,Y),S(s,Z),S(s,tt),R(tt,e[11]),S(s,et),S(s,nt),S(s,rt),S(s,it),S(s,ot),S(s,at),R(at,e[12]),S(s,ct),S(s,lt),ut||(ht=[x(c,"input",e[16]),x(c,"change",e[13]),x(p,"input",e[17]),x(p,"change",e[14]),x(b,"input",e[18]),x(b,"change",e[15]),x(U,"change",e[19]),x(B,"change",e[20]),x(H,"change",e[21]),x(tt,"input",e[22]),x(at,"input",e[23])],ut=!0)},p(t,[e]){1&e&&O(c.value)!==t[0]&&R(c,t[0]),2&e&&O(p.value)!==t[1]&&R(p,t[1]),4&e&&O(b.value)!==t[2]&&R(b,t[2]),256&e&&(U.checked=t[8]),512&e&&(B.checked=t[9]),1024&e&&P(H,t[10]),2048&e&&O(tt.value)!==t[11]&&R(tt,t[11]),4096&e&&O(at.value)!==t[12]&&R(at,t[12])},i:t,o:t,d(t){t&&T(n),t&&T(r),t&&T(s),ut=!1,i(ht)}}}function Kg(e,n,r){let i,s,o,c,u,h,d,f,p,g,m,y,v,w=t,b=t,S=t,E=t,T=t;return l(e,Or,(t=>r(24,t))),l(e,Kp,(t=>r(0,h=t))),l(e,Hp,(t=>r(1,d=t))),l(e,Wp,(t=>r(2,f=t))),e.$$.on_destroy.push((()=>w())),e.$$.on_destroy.push((()=>b())),e.$$.on_destroy.push((()=>S())),e.$$.on_destroy.push((()=>E())),e.$$.on_destroy.push((()=>T())),this&&this.__awaiter,r(3,i=qg.getField("fontSize")),E(),E=a(i,(t=>r(11,y=t))),r(4,s=qg.getField("pageWidth")),T(),T=a(s,(t=>r(12,v=t))),Ag.getField("volume"),Ag.getField("rate"),r(5,o=Ag.getField("mode")),S(),S=a(o,(t=>r(10,m=t))),r(6,c=Ag.getField("autoPlay")),w(),w=a(c,(t=>r(8,p=t))),r(7,u=Ag.getField("loop")),b(),b=a(u,(t=>r(9,g=t))),[h,d,f,i,s,o,c,u,p,g,m,y,v,function(){h>=d&&Hp.set(h+1),d>=f&&Hp.set(d+1)},function(){h>=d&&Kp.set(d-1),d>=f&&Wp.set(d+1)},function(){d>=f&&Hp.set(f-1),h>=d&&Kp.set(d-1)},function(){h=O(this.value),Kp.set(h)},function(){d=O(this.value),Hp.set(d)},function(){f=O(this.value),Wp.set(f)},function(){p=this.checked,c.set(p)},function(){g=this.checked,u.set(g)},function(){m=M(this),o.set(m)},function(){y=O(this.value),i.set(y)},function(){v=O(this.value),s.set(v)}]}class Hg extends Ct{constructor(t){super(),Nt(this,t,Kg,zg,o,{})}}function Wg(t){let e,n,r,s,o,a,c,l,u,h,d,f,p,g,m,y,v,w,b,I,C,k,$,O,L,R,P,M,F,V;return o=new dr({props:{icon:Xn}}),l=new dr({props:{icon:tr}}),d=new dr({props:{icon:Jn}}),b=new dr({props:{icon:Gn}}),$=new dr({props:{icon:Gn}}),P=new dr({props:{icon:Wn}}),{c(){e=_("div"),n=_("div"),r=_("a"),s=_("button"),_t(o.$$.fragment),a=N(),c=_("button"),_t(l.$$.fragment),u=N(),h=_("button"),_t(d.$$.fragment),f=N(),p=_("a"),g=_("img"),y=N(),v=_("div"),w=_("button"),_t(b.$$.fragment),I=A(" .srt"),C=N(),k=_("button"),_t($.$$.fragment),O=A(" .txt"),L=N(),R=_("button"),_t(P.$$.fragment),D(r,"href","/dashboard"),D(n,"class","buttons left svelte-1qz8hau"),g.src!==(m="/assets/smallBrand.svg")&&D(g,"src","/assets/smallBrand.svg"),D(g,"alt","logo"),D(g,"class","svelte-1qz8hau"),D(p,"href",An()?"/":"/dashboard"),D(v,"class","buttons right svelte-1qz8hau"),D(e,"class","header svelte-1qz8hau"),U(e,"playing",t[0])},m(i,m){E(i,e,m),S(e,n),S(n,r),S(r,s),It(o,s,null),S(n,a),S(n,c),It(l,c,null),S(n,u),S(n,h),It(d,h,null),S(e,f),S(e,p),S(p,g),S(e,y),S(e,v),S(v,w),It(b,w,null),S(w,I),S(v,C),S(v,k),It($,k,null),S(k,O),S(v,L),S(v,R),It(P,R,null),M=!0,F||(V=[x(c,"click",t[3]),x(h,"click",t[4]),x(w,"click",t[1]),x(k,"click",t[2]),x(R,"click",t[5])],F=!0)},p(t,[n]){1&n&&U(e,"playing",t[0])},i(t){M||(yt(o.$$.fragment,t),yt(l.$$.fragment,t),yt(d.$$.fragment,t),yt(b.$$.fragment,t),yt($.$$.fragment,t),yt(P.$$.fragment,t),M=!0)},o(t){vt(o.$$.fragment,t),vt(l.$$.fragment,t),vt(d.$$.fragment,t),vt(b.$$.fragment,t),vt($.$$.fragment,t),vt(P.$$.fragment,t),M=!1},d(t){t&&T(e),At(o),At(l),At(d),At(b),At($),At(P),F=!1,i(V)}}}function Gg(t,e,n){let r;l(t,Ar,(t=>n(0,r=t)));const{open:i}=(s="simple-modal",H().$$.context.get(s));var s;return[r,function(){Pr("srt")},function(){Pr("txt")},function(){Zp.undo()},function(){Zp.redo()},function(){i(Hg)}]}class Xg extends Ct{constructor(t){super(),Nt(this,t,Gg,Wg,o,{})}}let Qg=()=>{},Jg=!1;async function Yg(){Jg||(Jg=!0,await it(),Qg(),Jg=!1)}const Zg=kn(void 0);const tm={subscribe:Sr(Zg,void 0,((t,e)=>(null==t?void 0:t.anchor)!==(null==e?void 0:e.anchor)||(null==t?void 0:t.focus)!==(null==e?void 0:e.focus))).subscribe,setAnchor:function(t){Zg.update((e=>void 0===e?{anchor:t,focus:t}:{anchor:t,focus:e.focus}))},setFocus:function(t){Zg.update((e=>void 0===e?{anchor:t,focus:t}:{anchor:e.anchor,focus:t}))},clear:function(){Zg.set(void 0)}};async function em(t,e){t.preventDefault(),await async function(){if(!Fg)throw new Error("Trying to play the audio before it has been initialised");return Lg.paused?Vg():jg()}()}tm.subscribe((t=>{var e,n,r,i,s;if(void 0===t)return;if(t.anchor===t.focus)return;const o=lg(t.anchor),a=lg(t.focus),c=null!==(e=null==o?void 0:o.firstChild)&&void 0!==e?e:o,l=null!==(n=null==a?void 0:a.firstChild)&&void 0!==n?n:a;if(void 0===c||void 0===l)return;const u=t.anchor>t.focus,h=u?null===(r=c.textContent)||void 0===r?void 0:r.length:0,d=u?0:null===(i=l.textContent)||void 0===i?void 0:i.length;null===(s=window.getSelection())||void 0===s||s.setBaseAndExtent(c,null!=h?h:0,l,null!=d?d:0)}));const nm={};nm.ArrowLeft=async(t,e,n,r,i)=>!t&&e?async function(t,e){const n=window.getSelection();if(null===n)return;const r=ug(n);if(null===r)return;const i=n.focusOffset;if(void 0===i)return;const s=r.getAttribute("data-sectionIdx");if(null===s)return;const o=parseInt(s);t.preventDefault(),i>0&&e.idx===o?await sg(t.currentTarget,t.shiftKey):await ig(o,t.shiftKey)}(r,i):t||e?!t||e||n?void 0:async function(t,e){t.preventDefault(),Ag.getField("rate").update((t=>t<=20?20:t<=100?t-10:t-25))}(r):async function(t,e){const n=window.getSelection();if(null===n)return;const r=ug(n);if(null===r)return;const i=n.focusOffset;if(void 0===i)return;const s=r.getAttribute("data-sectionIdx");if(null===s)return;const o=parseInt(s);i>0&&e.idx===o||(t.preventDefault(),await ig(o,t.shiftKey))}(r,i),nm.ArrowRight=async(t,e,n,r,i)=>!t&&e?async function(t,e){var n,r;const i=window.getSelection();if(null===i)return;const s=ug(i);if(null===s)return;const o=i.focusOffset;if(void 0===o)return;const a=s.getAttribute("data-sectionIdx");if(null===a)return;const c=parseInt(a);t.preventDefault(),o<(null!==(r=null===(n=s.textContent)||void 0===n?void 0:n.length)&&void 0!==r?r:0)&&e.idx===c?await ag(t.currentTarget,t.shiftKey):await rg(c,t.shiftKey)}(r,i):t||e?!t||e||n?void 0:async function(t,e){t.preventDefault(),Ag.getField("rate").update((t=>t>=300?300:t>=100?t+25:t+10))}(r):async function(t,e){var n,r;const i=window.getSelection();if(null===i)return;const s=ug(i);if(null===s)return;const o=i.focusOffset;if(void 0===o)return;const a=s.getAttribute("data-sectionIdx");if(null===a)return;const c=parseInt(a);o<(null!==(r=null===(n=s.textContent)||void 0===n?void 0:n.length)&&void 0!==r?r:0)&&e.idx===c||(t.preventDefault(),await rg(c,t.shiftKey))}(r,i),nm.ArrowDown=async(t,e,n,r,i)=>t||e?!t||e||n?void 0:async function(t,e){t.preventDefault(),Ag.getField("volume").update((t=>fr(t-5,0,100)))}(r):async function(t,e){var n,r,i;t.preventDefault();const s=ug(window.getSelection());if(null===s)return;const o=s.offsetLeft,a=s.offsetTop;let c,l=s;for(;void 0===c&&null!==l.nextElementSibling;)if(l=l.nextElementSibling,l.offsetTop>a){c=l.offsetTop;break}if(void 0===c){const t=null!==(i=null===(r=null===(n=s.parentElement)||void 0===n?void 0:n.nextElementSibling)||void 0===r?void 0:r.firstElementChild)&&void 0!==i?i:null;if(null===t)return;l=t,c=l.offsetTop}for(;;){if(l.offsetLeft+l.offsetWidth>=o)return void await sg(l,t.shiftKey);const e=l.nextElementSibling;if(null===e)return;const n=e;if(n.offsetTop>c)return void await sg(l,t.shiftKey);l=n}}(r),nm.ArrowUp=async(t,e,n,r,i)=>t||e?!t||e||n?void 0:async function(t,e){t.preventDefault(),Ag.getField("volume").update((t=>fr(t+5,0,100)))}(r):async function(t,e){var n,r,i;t.preventDefault();const s=ug(window.getSelection());if(null===s)return;const o=s.offsetLeft+s.offsetWidth,a=s.offsetTop;let c,l=s;for(;void 0===c&&null!==l.previousElementSibling;)if(l=l.previousElementSibling,l.offsetTop<a){c=l.offsetTop;break}if(void 0===c){const t=null!==(i=null===(r=null===(n=s.parentElement)||void 0===n?void 0:n.previousElementSibling)||void 0===r?void 0:r.lastElementChild)&&void 0!==i?i:null;if(null===t)return;l=t,c=l.offsetTop}for(;;){if(l.offsetLeft<o)return void await sg(l,t.shiftKey);const e=l.previousElementSibling;if(null===e)return;const n=e;if(n.offsetTop<c)return void await sg(l,t.shiftKey);l=n}}(r),nm.Home=async(t,e,n,r,i)=>t||e?t||!e||n?void 0:async function(t,e){t.preventDefault(),await tg(0,t.shiftKey)}(r):async function(t,e){t.preventDefault();const n=ug(window.getSelection());if(null===n)return;const r=n.offsetTop;let i=n;for(;;){const e=i.previousElementSibling;if((null==e?void 0:e.offsetTop)!==r)return void await sg(i,t.shiftKey);i=e}}(r),nm.End=async(t,e,n,r,i)=>t||e?t||!e||n?void 0:async function(t,e){t.preventDefault(),await ng(br(),t.shiftKey)}(r):async function(t,e){t.preventDefault();const n=ug(window.getSelection());if(null===n)return;const r=n.offsetTop;let i=n;for(;;){const e=i.nextElementSibling;if((null==e?void 0:e.offsetTop)!==r)return void await ag(i,t.shiftKey);i=e}}(r),nm.PageUp=async(t,e,n,r,i)=>{if(!t&&!e)return async function(t,e){var n;t.preventDefault();const r=null===(n=window.getSelection())||void 0===n?void 0:n.focusNode,i=(null==r?void 0:r.nodeType)===Node.TEXT_NODE?r.parentElement:r,s=null==i?void 0:i.parentElement,o=null==s?void 0:s.previousElementSibling,a=null==o?void 0:o.lastElementChild;if(a)return ag(a,t.shiftKey);const c=null==s?void 0:s.firstElementChild;return c?sg(c,t.shiftKey):void 0}(r)},nm.PageDown=async(t,e,n,r,i)=>{if(!t&&!e)return async function(t,e){var n;t.preventDefault();const r=null===(n=window.getSelection())||void 0===n?void 0:n.focusNode,i=(null==r?void 0:r.nodeType)===Node.TEXT_NODE?r.parentElement:r,s=null==i?void 0:i.parentElement,o=null==s?void 0:s.nextElementSibling,a=null==o?void 0:o.firstElementChild;if(a)return sg(a,t.shiftKey);const c=null==s?void 0:s.lastElementChild;return c?ag(c,t.shiftKey):void 0}(r)},nm.Backspace=async(t,e,n,r,i)=>{if(!t)return async function(t,e){const n=window.getSelection();if(null===n)return;const{anchorNode:r,focusNode:i,anchorOffset:s,focusOffset:o}=n;if(r&&i)if(r===i){if(0!==s||0!==o)return;t.preventDefault(),e.startParagraphStore.set(!1),setTimeout((()=>ig(e.idx)))}else{t.preventDefault();const e=dg(hg(n)),r=dg(ug(n));if(null===e||null===r)return;const i=Math.min(e,r),s=Math.max(e,r);for(let t=i;t<=s;t++){const e=wr(t);e.displayTextStore.set(""),e.startParagraphStore.set(!1)}setTimeout((()=>ig(i)))}}(r,i)},nm.Delete=async(t,e,n,r,i)=>{if(!t)return async function(t,e){var n,r;const i=window.getSelection();if(null===i)return;const{anchorNode:s,focusNode:o,anchorOffset:a,focusOffset:c}=i;if(s&&o)if(s===o){const i=null!==(r=null===(n=s.textContent)||void 0===n?void 0:n.length)&&void 0!==r?r:0;if(!(a>=i&&c>=i))return;t.preventDefault(),e.endParagraphStore.set(!1),setTimeout((()=>rg(e.idx)))}else{t.preventDefault();const e=dg(hg(i)),n=dg(ug(i));if(null===e||null===n)return;const r=Math.min(e,n),s=Math.max(e,n);for(let t=r;t<=s;t++){const e=wr(t);e.displayTextStore.set(""),e.startParagraphStore.set(!1)}setTimeout((()=>rg(s)))}}(r,i)},nm.Enter=async(t,e,n,r,i)=>{if(r.preventDefault(),!t&&!e&&!n)return async function(t,e){const n=window.getSelection(),r=null==n?void 0:n.focusOffset;if(void 0===r)return;const i=dg(ug(n));if(null===i)return;const s=wr(i);r<=0?(s.startParagraphStore.set(!0),setTimeout((()=>tg(i)))):e.idx<br()&&(s.endParagraphStore.set(!0),setTimeout((()=>tg(i+1))))}(0,i)},nm.z=async(t,e,n,r,i)=>{if(!t&&e&&!n)return async function(t,e){var n;t.preventDefault();const r=null===(n=window.getSelection())||void 0===n?void 0:n.focusOffset;Zp.undo(),setTimeout((()=>{void 0===r?tg(e.idx):eg(e.idx,r)}))}(r,i)},nm.y=async(t,e,n,r,i)=>{if(!t&&e&&!n)return async function(t,e){var n;t.preventDefault();const r=null===(n=window.getSelection())||void 0===n?void 0:n.focusOffset;Zp.redo(),setTimeout((()=>{void 0===r?tg(e.idx):eg(e.idx,r)}))}(r,i)},nm.a=async(t,e,n,r,i)=>{if(t&&!e&&!n)return async function(t,e){t.preventDefault(),Ag.getField("autoPlay").update((t=>!t))}(r)},nm.l=async(t,e,n,r,i)=>{if(t&&!e&&!n)return async function(t,e){t.preventDefault(),Ag.getField("loop").update((t=>!t))}(r)},nm.Escape=async(t,e,n,r,i)=>{if(!t&&!e&&!n)return async function(t,e){t.preventDefault();const n=c(Or);if(null!==n){const t=lg(n);t&&(await ag(t),jg())}}(r)},nm.o=async(t,e,n,r,i)=>{if(t&&!e&&!n)return async function(t,e){t.preventDefault(),Ag.getField("mode").set("onward")}(r)},nm.c=async(t,e,n,r,i)=>{if(t&&!e&&!n)return async function(t,e){t.preventDefault(),Ag.getField("mode").set("context")}(r)};let rm=!1;function im(e){let n,r,s;return{c(){n=_("span"),D(n,"contenteditable",""),D(n,"class","section svelte-15opvb0"),D(n,"data-sectionidx",e[0]),void 0===e[13]&&st((()=>e[19].call(n))),U(n,"soleSelected",e[11]),U(n,"highlight",e[10]),U(n,"sectionPlaying",e[12]),U(n,"underline",0===e[13].length),U(n,"placeholder",!e[15]),U(n,"questionable",e[13].length>0&&e[14].length>1&&!e[16])},m(t,i){E(t,n,i),void 0!==e[13]&&(n.textContent=e[13]),r||(s=[x(n,"input",e[19]),x(n,"keydown",e[20]),x(n,"keyup",e[21]),x(n,"contextmenu",e[18]),x(n,"mousemove",e[17]),x(n,"mouseup",e[17])],r=!0)},p(t,[e]){1&e&&D(n,"data-sectionidx",t[0]),8192&e&&t[13]!==n.textContent&&(n.textContent=t[13]),2048&e&&U(n,"soleSelected",t[11]),1024&e&&U(n,"highlight",t[10]),4096&e&&U(n,"sectionPlaying",t[12]),8192&e&&U(n,"underline",0===t[13].length),32768&e&&U(n,"placeholder",!t[15]),90112&e&&U(n,"questionable",t[13].length>0&&t[14].length>1&&!t[16])},i:t,o:t,d(t){t&&T(n),r=!1,i(s)}}}function sm(e,n,r){let i,s,o,c,l,u,h,d,f,p,g,m,y,v,w,b,S=t,E=t,T=t,_=t,I=t,A=t,N=t,C=t;e.$$.on_destroy.push((()=>S())),e.$$.on_destroy.push((()=>E())),e.$$.on_destroy.push((()=>T())),e.$$.on_destroy.push((()=>_())),e.$$.on_destroy.push((()=>I())),e.$$.on_destroy.push((()=>A())),e.$$.on_destroy.push((()=>N())),e.$$.on_destroy.push((()=>C()));let x,{idx:k}=n;!function(t){H().$$.before_update.push(t)}(Yg);return e.$$set=t=>{"idx"in t&&r(0,k=t.idx)},e.$$.update=()=>{1&e.$$.dirty&&r(1,x=wr(k)),2&e.$$.dirty&&(r(2,({selectedStore:i,soleSelectedStore:s,playingStore:o,displayTextStore:c,completionsStore:l,editedStore:u,confirmedStore:h,userTextStore:d}=x),i,(r(3,s),E(),E=a(s,(t=>r(11,p=t))),s),(r(4,o),T(),T=a(o,(t=>r(12,g=t))),o),(r(5,c),_(),_=a(c,(t=>r(13,m=t))),c),(r(6,l),I(),I=a(l,(t=>r(14,y=t))),l),(r(7,u),A(),A=a(u,(t=>r(15,v=t))),u),(r(8,h),N(),N=a(h,(t=>r(16,w=t))),h),(r(9,d),C(),C=a(d,(t=>r(22,b=t))),d)),S(),S=a(i,(t=>r(10,f=t))))},[k,x,i,s,o,c,l,u,h,d,f,p,g,m,y,v,w,function(t){1===t.buttons&&tm.setFocus(k)},function(t){t.preventDefault(),console.log({selected:f,soleSelected:p,playing:g,displayText:m,completions:y,edited:v,confirmed:w,userText:b})},function(){m=this.textContent,c.set(m)},t=>function(t,e){const n=t.key;rm="Alt"===n;const r=nm[n];void 0!==r&&r(t.altKey,t.ctrlKey,t.shiftKey,t,e)}(t,x),t=>function(t,e){rm&&"Alt"===t.key&&(t.preventDefault(),em(t))}(t)]}class om extends Ct{constructor(t){super(),Nt(this,t,sm,im,o,{idx:0})}}function am(t,e,n){const r=t.slice();return r[11]=e[n],r}function cm(t,e){let n,r,i;return r=new om({props:{idx:e[11]}}),{key:t,first:null,c(){n=C(),_t(r.$$.fragment),this.first=n},m(t,e){E(t,n,e),It(r,t,e),i=!0},p(t,n){e=t;const i={};4&n&&(i.idx=e[11]),r.$set(i)},i(t){i||(yt(r.$$.fragment,t),i=!0)},o(t){vt(r.$$.fragment,t),i=!1},d(t){t&&T(n),At(r,t)}}}function lm(t){let e,n,r,s,o=[],a=new Map,c=t[2];const l=t=>t[11];for(let e=0;e<c.length;e+=1){let n=am(t,c,e),r=l(n);a.set(r,o[e]=cm(r,n))}return{c(){e=_("p");for(let t=0;t<o.length;t+=1)o[t].c();D(e,"class","paragraph svelte-1aa5wdk"),D(e,"style",t[3]),U(e,"hidden",!t[0])},m(i,a){E(i,e,a);for(let t=0;t<o.length;t+=1)o[t].m(e,null);t[10](e),n=!0,r||(s=[x(e,"mousemove",$(t[4])),x(e,"mouseup",$(t[4]))],r=!0)},p(t,[r]){4&r&&(c=t[2],gt(),o=Tt(o,r,l,1,t,c,a,e,Et,cm,null,am),mt()),(!n||8&r)&&D(e,"style",t[3]),1&r&&U(e,"hidden",!t[0])},i(t){if(!n){for(let t=0;t<c.length;t+=1)yt(o[t]);n=!0}},o(t){for(let t=0;t<o.length;t+=1)vt(o[t]);n=!1},d(n){n&&T(e);for(let t=0;t<o.length;t+=1)o[t].d();t[10](null),r=!1,i(s)}}}function um(t,e,n){let r,i,s,{observer:o}=e,{start:a}=e,{end:c}=e,l=!0,u=0;function h(t){n(9,u=r.clientHeight),n(0,l=t.detail)}return W((()=>o.observe(r))),G((()=>o.unobserve(r))),t.$$set=t=>{"observer"in t&&n(5,o=t.observer),"start"in t&&n(6,a=t.start),"end"in t&&n(7,c=t.end)},t.$$.update=()=>{2&t.$$.dirty&&(null==r||r.addEventListener("setVisible",h)),192&t.$$.dirty&&n(2,i=function(t,e){const n=[];for(let r=t;r<=e;r++)n.push(r);return n}(a,c)),513&t.$$.dirty&&n(3,s=l?"":`min-height: ${u}px`)},[l,r,i,s,function(t){const e=c;1===t.buttons&&tm.setFocus(e)},o,a,c,h,u,function(t){Y[t?"unshift":"push"]((()=>{r=t,n(1,r)}))}]}class hm extends Ct{constructor(t){super(),Nt(this,t,um,lm,o,{observer:5,start:6,end:7,setVisible:8})}get setVisible(){return this.$$.ctx[8]}}function dm(t,e,n){const r=t.slice();return r[2]=e[n],r}function fm(t,e){let n,r,i;return r=new hm({props:{observer:e[0],start:e[2].start,end:e[2].end}}),{key:t,first:null,c(){n=C(),_t(r.$$.fragment),this.first=n},m(t,e){E(t,n,e),It(r,t,e),i=!0},p(t,n){e=t;const i={};1&n&&(i.observer=e[0]),2&n&&(i.start=e[2].start),2&n&&(i.end=e[2].end),r.$set(i)},i(t){i||(yt(r.$$.fragment,t),i=!0)},o(t){vt(r.$$.fragment,t),i=!1},d(t){t&&T(n),At(r,t)}}}function pm(t){let e,n,r=[],i=new Map,s=t[1];const o=t=>t[2].start+1/t[2].end;for(let e=0;e<s.length;e+=1){let n=dm(t,s,e),a=o(n);i.set(a,r[e]=fm(a,n))}return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=C()},m(t,i){for(let e=0;e<r.length;e+=1)r[e].m(t,i);E(t,e,i),n=!0},p(t,[n]){3&n&&(s=t[1],gt(),r=Tt(r,n,o,1,t,s,i,e.parentNode,Et,fm,e,dm),mt())},i(t){if(!n){for(let t=0;t<s.length;t+=1)yt(r[t]);n=!0}},o(t){for(let t=0;t<r.length;t+=1)vt(r[t]);n=!1},d(t){for(let e=0;e<r.length;e+=1)r[e].d(t);t&&T(e)}}}function gm(t,e,n){let r;l(t,kg,(t=>n(1,r=t)));let{observer:i}=e;return t.$$set=t=>{"observer"in t&&n(0,i=t.observer)},[i,r]}class mm extends Ct{constructor(t){super(),Nt(this,t,gm,pm,o,{observer:0})}}function ym(t){let e,n;return e=new mm({props:{observer:t[0]}}),{c(){_t(e.$$.fragment)},m(t,r){It(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.observer=t[0]),e.$set(r)},i(t){n||(yt(e.$$.fragment,t),n=!0)},o(t){vt(e.$$.fragment,t),n=!1},d(t){At(e,t)}}}function vm(t){let e,n,r=void 0!==t[0]&&ym(t);return{c(){r&&r.c(),e=C()},m(t,i){r&&r.m(t,i),E(t,e,i),n=!0},p(t,[n]){void 0!==t[0]?r?(r.p(t,n),1&n&&yt(r,1)):(r=ym(t),r.c(),yt(r,1),r.m(e.parentNode,e)):r&&(gt(),vt(r,1,1,(()=>{r=null})),mt())},i(t){n||(yt(r),n=!0)},o(t){vt(r),n=!1},d(t){r&&r.d(t),t&&T(e)}}}function wm(t,e,n){let{wrapper:r}=e;const i=t=>{t.forEach((t=>{const e=new CustomEvent("setVisible",{detail:t.isIntersecting});t.target.dispatchEvent(e)}))};let s,o;return function(t){H().$$.after_update.push(t)}((()=>{const t=gg;void 0===t?tg(0):eg(t.focus.section,t.focus.offset)})),t.$$set=t=>{"wrapper"in t&&n(1,r=t.wrapper)},t.$$.update=()=>{2&t.$$.dirty&&n(2,s=r?{root:r,rootMargin:"500px 0px 500px"}:void 0),4&t.$$.dirty&&n(0,o=s?new IntersectionObserver(i,s):void 0)},[o,r,s]}class bm extends Ct{constructor(t){super(),Nt(this,t,wm,vm,o,{wrapper:1})}}function Sm(t,e,n){const r=t.slice();return r[12]=e[n],r[14]=n,r}function Em(t){let e,n,r,s,o,a=t[12].padEnd(1," ")+"";function c(){return t[6](t[14])}function l(...e){return t[7](t[14],...e)}return{c(){e=_("span"),n=A(a),r=N(),D(e,"class","option svelte-a3ayy7"),U(e,"highlight",t[14]===t[1]),U(e,"topBorder",0!==t[14])},m(t,i){E(t,e,i),S(e,n),S(e,r),s||(o=[x(e,"mouseenter",c),x(e,"mousedown",l)],s=!0)},p(r,i){t=r,4&i&&a!==(a=t[12].padEnd(1," ")+"")&&L(n,a),2&i&&U(e,"highlight",t[14]===t[1])},d(t){t&&T(e),s=!1,i(o)}}}function Tm(e){let n,r,i,s,o=e[2],a=[];for(let t=0;t<o.length;t+=1)a[t]=Em(Sm(e,o,t));return{c(){n=N(),r=_("div");for(let t=0;t<a.length;t+=1)a[t].c();D(r,"class","popup svelte-a3ayy7")},m(t,o){E(t,n,o),E(t,r,o);for(let t=0;t<a.length;t+=1)a[t].m(r,null);i||(s=x(document.body,"keydown",e[3]),i=!0)},p(t,[e]){if(22&e){let n;for(o=t[2],n=0;n<o.length;n+=1){const i=Sm(t,o,n);a[n]?a[n].p(i,e):(a[n]=Em(i),a[n].c(),a[n].m(r,null))}for(;n<a.length;n+=1)a[n].d(1);a.length=o.length}},i:t,o:t,d(t){t&&T(n),t&&T(r),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(a,t),i=!1,s()}}}function _m(e,n,r){let i,s=t,o=()=>(s(),s=a(h,(t=>r(2,i=t))),h);e.$$.on_destroy.push((()=>s()));var c=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(i,s){function o(t){try{c(r.next(t))}catch(t){s(t)}}function a(t){try{c(r.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}c((r=r.apply(t,e||[])).next())}))};let l,{sectionIdx:u}=n,{completionsStore:h}=n;function d(t){return c(this,void 0,void 0,(function*(){if(void 0===t)return;const e=pr(i,t);Zp.append(u,{text:e,confirmed:!0}),yield rg(u)}))}function f(t,e){t.preventDefault(),d(e)}o();return e.$$set=t=>{"sectionIdx"in t&&r(5,u=t.sectionIdx),"completionsStore"in t&&o(r(0,h=t.completionsStore))},[h,l,i,function(t){"ArrowUp"===t.key&&t.ctrlKey?(t.preventDefault(),function(){if(0===i.length)return;r(1,l=void 0===l?i.length-1:Math.max(0,l-1))}()):"ArrowDown"===t.key&&t.ctrlKey?(t.preventDefault(),function(){if(0===i.length)return;r(1,l=void 0===l?0:Math.min(i.length-1,l+1))}()):"Enter"===t.key&&t.ctrlKey&&(t.preventDefault(),d(l))},f,u,t=>{r(1,l=t)},(t,e)=>f(e,t)]}class Im extends Ct{constructor(t){super(),Nt(this,t,_m,Tm,o,{sectionIdx:5,completionsStore:0})}}function Am(t){let e,n;return e=new Im({props:{sectionIdx:t[0],completionsStore:t[1]}}),e.$on("mouseenter",t[2]),e.$on("mouseleave",t[3]),{c(){_t(e.$$.fragment)},m(t,r){It(e,t,r),n=!0},p(t,[n]){const r={};1&n&&(r.sectionIdx=t[0]),2&n&&(r.completionsStore=t[1]),e.$set(r)},i(t){n||(yt(e.$$.fragment,t),n=!0)},o(t){vt(e.$$.fragment,t),n=!1},d(t){At(e,t)}}}function Nm(t,e,n){let r;l(t,Ar,(t=>n(6,r=t)));let i,{sectionIdx:s}=e,{completionsStore:o}=e,{transparent:a=!1}=e,c=!1;function u(){void 0!==i&&clearTimeout(i),n(4,a=!1)}return t.$$set=t=>{"sectionIdx"in t&&n(0,s=t.sectionIdx),"completionsStore"in t&&n(1,o=t.completionsStore),"transparent"in t&&n(4,a=t.transparent)},t.$$.update=()=>{64&t.$$.dirty&&(r||u()),112&t.$$.dirty&&(!r||a||c||(i=setTimeout((()=>{n(4,a=!0)}),1500)))},[s,o,function(){n(5,c=!0),u()},function(){n(5,c=!1)},a,c,r]}class Cm extends Ct{constructor(t){super(),Nt(this,t,Nm,Am,o,{sectionIdx:0,completionsStore:1,transparent:4})}}function xm(t){let e,n,r,i,s;function o(e){t[17](e)}let a={sectionIdx:t[0].idx,completionsStore:t[0].completionsStore};return void 0!==t[3]&&(a.transparent=t[3]),n=new Cm({props:a}),Y.push((()=>function(t,e,n){const r=t.$$.props[e];void 0!==r&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}(n,"transparent",o))),{c(){e=_("div"),_t(n.$$.fragment),D(e,"class","anchor svelte-1qlchdf"),D(e,"style",i=`top: ${t[2]}px; left: ${t[1]}px;`),U(e,"transparent",t[3])},m(t,r){E(t,e,r),It(n,e,null),s=!0},p(t,[o]){const a={};1&o&&(a.sectionIdx=t[0].idx),1&o&&(a.completionsStore=t[0].completionsStore),!r&&8&o&&(r=!0,a.transparent=t[3],function(t){tt.push(t)}((()=>r=!1))),n.$set(a),(!s||6&o&&i!==(i=`top: ${t[2]}px; left: ${t[1]}px;`))&&D(e,"style",i),8&o&&U(e,"transparent",t[3])},i(t){s||(yt(n.$$.fragment,t),s=!0)},o(t){vt(n.$$.fragment,t),s=!1},d(t){t&&T(e),At(n)}}}function km(t,e,n){let r,i,s,o,a,c,l,u,h,d,f,p,g,m,{section:y}=e,{sectionNode:v}=e,{paragraphNode:w}=e;return t.$$set=t=>{"section"in t&&n(0,y=t.section),"sectionNode"in t&&n(4,v=t.sectionNode),"paragraphNode"in t&&n(5,w=t.paragraphNode)},t.$$.update=()=>{16&t.$$.dirty&&n(6,r=v.offsetTop),16&t.$$.dirty&&n(7,i=v.offsetLeft),16&t.$$.dirty&&n(8,s=v.offsetWidth),16&t.$$.dirty&&n(9,o=v.offsetHeight),32&t.$$.dirty&&n(10,a=w.offsetTop),32&t.$$.dirty&&n(11,c=w.offsetLeft),32&t.$$.dirty&&n(12,l=w.offsetWidth),4480&t.$$.dirty&&n(13,u=i+s>l),8320&t.$$.dirty&&n(14,h=u?0:i),4352&t.$$.dirty&&n(15,d=l-s),18432&t.$$.dirty&&n(16,f=h+c),98304&t.$$.dirty&&n(1,p=fr(f,0,d)),1600&t.$$.dirty&&n(2,g=r+o+a)},[y,p,g,m,v,w,r,i,s,o,a,c,l,u,h,d,f,function(t){m=t,n(3,m)}]}class $m extends Ct{constructor(t){super(),Nt(this,t,km,xm,o,{section:0,sectionNode:4,paragraphNode:5})}}function Dm(t){let e,n;return e=new $m({props:{section:t[0],sectionNode:t[1],paragraphNode:t[4]}}),{c(){_t(e.$$.fragment)},m(t,r){It(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.section=t[0]),2&n&&(r.sectionNode=t[1]),16&n&&(r.paragraphNode=t[4]),e.$set(r)},i(t){n||(yt(e.$$.fragment,t),n=!0)},o(t){vt(e.$$.fragment,t),n=!1},d(t){At(e,t)}}}function Om(t){let e,n,r=!t[5]&&!t[6]&&t[7].length>1&&void 0!==t[0]&&void 0!==t[1]&&void 0!==t[4]&&Dm(t);return{c(){r&&r.c(),e=C()},m(t,i){r&&r.m(t,i),E(t,e,i),n=!0},p(t,[n]){!t[5]&&!t[6]&&t[7].length>1&&void 0!==t[0]&&void 0!==t[1]&&void 0!==t[4]?r?(r.p(t,n),243&n&&yt(r,1)):(r=Dm(t),r.c(),yt(r,1),r.m(e.parentNode,e)):r&&(gt(),vt(r,1,1,(()=>{r=null})),mt())},i(t){n||(yt(r),n=!0)},o(t){vt(r),n=!1},d(t){r&&r.d(t),t&&T(e)}}}function Lm(e,n,r){let i,s,o,c,u=t,h=t;var d,f,p;let g,m,y,v,w,b;return l(e,wg,(t=>r(12,i=t))),l(e,Eg,(t=>r(6,o=t))),e.$$.on_destroy.push((()=>u())),e.$$.on_destroy.push((()=>h())),function(t){Qg=t}((()=>{(null==w?void 0:w.isConnected)?(r(1,w),r(11,g),r(12,i)):r(1,w=lg(g))})),e.$$.update=()=>{4096&e.$$.dirty&&r(11,g=i),2048&e.$$.dirty&&r(0,m=g?wr(g):void 0),257&e.$$.dirty&&(r(2,y=null!==r(8,d=null==m?void 0:m.completionsStore)&&void 0!==d?d:kn([])),h(),h=a(y,(t=>r(7,c=t)))),513&e.$$.dirty&&(r(3,v=null!==r(9,f=null==m?void 0:m.confirmedStore)&&void 0!==f?f:kn(!0)),u(),u=a(v,(t=>r(5,s=t)))),2048&e.$$.dirty&&r(1,w=lg(g)),1026&e.$$.dirty&&r(4,b=null!==r(10,p=null==w?void 0:w.parentElement)&&void 0!==p?p:void 0)},[m,w,y,v,b,s,o,c,d,f,p,g,i]}class Rm extends Ct{constructor(t){super(),Nt(this,t,Lm,Om,o,{})}}function Pm(t){let e,n,r,s,o,a,c,l;return n=new Rm({}),s=new bm({props:{wrapper:t[0]}}),{c(){e=_("div"),_t(n.$$.fragment),r=N(),_t(s.$$.fragment),D(e,"class","scroller svelte-e7kyql"),D(e,"style",o=`width: ${t[3]}em; font-size: ${t[4]}pt;`),D(e,"spellcheck",!1),D(e,"tabindex",-1)},m(i,o){E(i,e,o),It(n,e,null),S(e,r),It(s,e,null),t[11](e),a=!0,c||(l=[x(e,"dragover",k(t[5])),x(e,"drop",k(t[6])),x(e,"drag",k(t[7])),x(e,"dragstart",k(t[8])),x(e,"cut",k(t[9])),x(e,"paste",k(t[10]))],c=!0)},p(t,[n]){const r={};1&n&&(r.wrapper=t[0]),s.$set(r),(!a||24&n&&o!==(o=`width: ${t[3]}em; font-size: ${t[4]}pt;`))&&D(e,"style",o)},i(t){a||(yt(n.$$.fragment,t),yt(s.$$.fragment,t),a=!0)},o(t){vt(n.$$.fragment,t),vt(s.$$.fragment,t),a=!1},d(r){r&&T(e),At(n),At(s),t[11](null),c=!1,i(l)}}}function Mm(e,n,r){let i,s,o,c,l,u=t,h=t;return e.$$.on_destroy.push((()=>u())),e.$$.on_destroy.push((()=>h())),r(1,i=qg.getField("fontSize")),h(),h=a(i,(t=>r(4,c=t))),r(2,s=qg.getField("pageWidth")),u(),u=a(s,(t=>r(3,o=t))),[l,i,s,o,c,function(t){Q.call(this,e,t)},function(t){Q.call(this,e,t)},function(t){Q.call(this,e,t)},function(t){Q.call(this,e,t)},function(t){Q.call(this,e,t)},function(t){Q.call(this,e,t)},function(t){Y[t?"unshift":"push"]((()=>{l=t,r(0,l)}))}]}class Um extends Ct{constructor(t){super(),Nt(this,t,Mm,Pm,o,{})}}const{window:Fm}=St;function Vm(t){let e,n,r,o,a,c,l,u,h,d,f,p,g,m=t[0].closeButton&&jm(t);var y=t[1];return y&&(c=new y({})),{c(){e=_("div"),n=_("div"),r=_("div"),m&&m.c(),o=N(),a=_("div"),c&&_t(c.$$.fragment),D(a,"class","content svelte-ktxllv"),D(a,"style",t[8]),D(r,"class","window svelte-ktxllv"),D(r,"role","dialog"),D(r,"aria-modal","true"),D(r,"aria-label",l=t[0].ariaLabelledBy?null:t[0].ariaLabel||null),D(r,"aria-labelledby",u=t[0].ariaLabelledBy||null),D(r,"style",t[7]),D(n,"class","window-wrap svelte-ktxllv"),D(n,"style",t[6]),D(e,"class","bg svelte-ktxllv"),D(e,"style",t[5])},m(i,l){E(i,e,l),S(e,n),S(n,r),m&&m.m(r,null),S(r,o),S(r,a),c&&It(c,a,null),t[42](r),t[43](n),t[44](e),f=!0,p||(g=[x(r,"introstart",(function(){s(t[12])&&t[12].apply(this,arguments)})),x(r,"outrostart",(function(){s(t[13])&&t[13].apply(this,arguments)})),x(r,"introend",(function(){s(t[14])&&t[14].apply(this,arguments)})),x(r,"outroend",(function(){s(t[15])&&t[15].apply(this,arguments)})),x(e,"mousedown",t[19]),x(e,"mouseup",t[20])],p=!0)},p(i,s){if((t=i)[0].closeButton?m?(m.p(t,s),1&s[0]&&yt(m,1)):(m=jm(t),m.c(),yt(m,1),m.m(r,o)):m&&(gt(),vt(m,1,1,(()=>{m=null})),mt()),y!==(y=t[1])){if(c){gt();const t=c;vt(t.$$.fragment,1,0,(()=>{At(t,1)})),mt()}y?(c=new y({}),_t(c.$$.fragment),yt(c.$$.fragment,1),It(c,a,null)):c=null}(!f||256&s[0])&&D(a,"style",t[8]),(!f||1&s[0]&&l!==(l=t[0].ariaLabelledBy?null:t[0].ariaLabel||null))&&D(r,"aria-label",l),(!f||1&s[0]&&u!==(u=t[0].ariaLabelledBy||null))&&D(r,"aria-labelledby",u),(!f||128&s[0])&&D(r,"style",t[7]),(!f||64&s[0])&&D(n,"style",t[6]),(!f||32&s[0])&&D(e,"style",t[5])},i(n){f||(yt(m),c&&yt(c.$$.fragment,n),st((()=>{h||(h=bt(r,t[11],t[0].transitionWindowProps,!0)),h.run(1)})),st((()=>{d||(d=bt(e,t[10],t[0].transitionBgProps,!0)),d.run(1)})),f=!0)},o(n){vt(m),c&&vt(c.$$.fragment,n),h||(h=bt(r,t[11],t[0].transitionWindowProps,!1)),h.run(0),d||(d=bt(e,t[10],t[0].transitionBgProps,!1)),d.run(0),f=!1},d(n){n&&T(e),m&&m.d(),c&&At(c),t[42](null),n&&h&&h.end(),t[43](null),t[44](null),n&&d&&d.end(),p=!1,i(g)}}}function jm(t){let e,n,r,i,s;const o=[qm,Bm],a=[];function c(t,n){return 1&n[0]&&(e=!!t[16](t[0].closeButton)),e?0:1}return n=c(t,[-1,-1]),r=a[n]=o[n](t),{c(){r.c(),i=C()},m(t,e){a[n].m(t,e),E(t,i,e),s=!0},p(t,e){let s=n;n=c(t,e),n===s?a[n].p(t,e):(gt(),vt(a[s],1,1,(()=>{a[s]=null})),mt(),r=a[n],r?r.p(t,e):(r=a[n]=o[n](t),r.c()),yt(r,1),r.m(i.parentNode,i))},i(t){s||(yt(r),s=!0)},o(t){vt(r),s=!1},d(t){a[n].d(t),t&&T(i)}}}function Bm(e){let n,r,i;return{c(){n=_("button"),D(n,"class","close svelte-ktxllv"),D(n,"aria-label","Close modal"),D(n,"style",e[9])},m(t,s){E(t,n,s),r||(i=x(n,"click",e[17]),r=!0)},p(t,e){512&e[0]&&D(n,"style",t[9])},i:t,o:t,d(t){t&&T(n),r=!1,i()}}}function qm(t){let e,n,r;var i=t[0].closeButton;function s(t){return{props:{onClose:t[17]}}}return i&&(e=new i(s(t))),{c(){e&&_t(e.$$.fragment),n=C()},m(t,i){e&&It(e,t,i),E(t,n,i),r=!0},p(t,r){if(i!==(i=t[0].closeButton)){if(e){gt();const t=e;vt(t.$$.fragment,1,0,(()=>{At(t,1)})),mt()}i?(e=new i(s(t)),_t(e.$$.fragment),yt(e.$$.fragment,1),It(e,n.parentNode,n)):e=null}},i(t){r||(e&&yt(e.$$.fragment,t),r=!0)},o(t){e&&vt(e.$$.fragment,t),r=!1},d(t){t&&T(n),e&&At(e,t)}}}function zm(t){let e,n,r,i,s=t[1]&&Vm(t);const o=t[41].default,a=function(t,e,n,r){if(t){const i=u(t,e,n,r);return t[0](i)}}(o,t,t[40],null);return{c(){s&&s.c(),e=N(),a&&a.c()},m(o,c){s&&s.m(o,c),E(o,e,c),a&&a.m(o,c),n=!0,r||(i=x(Fm,"keydown",t[18]),r=!0)},p(t,r){t[1]?s?(s.p(t,r),2&r[0]&&yt(s,1)):(s=Vm(t),s.c(),yt(s,1),s.m(e.parentNode,e)):s&&(gt(),vt(s,1,1,(()=>{s=null})),mt()),a&&a.p&&(!n||512&r[1])&&h(a,o,t,t[40],n?r:[-1,-1],null,null)},i(t){n||(yt(s),yt(a,t),n=!0)},o(t){vt(s),vt(a,t),n=!1},d(t){s&&s.d(t),t&&T(e),a&&a.d(t),r=!1,i()}}}function Km(t,e,n){let{$$slots:r={},$$scope:i}=e;const s=function(){const t=H();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const i=F(e,n);r.slice().forEach((e=>{e.call(t,i)}))}}}(),o=X;let{show:a=null}=e,{key:c="simple-modal"}=e,{ariaLabel:l=null}=e,{ariaLabelledBy:u=null}=e,{closeButton:h=!0}=e,{closeOnEsc:d=!0}=e,{closeOnOuterClick:f=!0}=e,{styleBg:p={}}=e,{styleWindowWrap:g={}}=e,{styleWindow:m={}}=e,{styleContent:y={}}=e,{styleCloseButton:v={}}=e,{setContext:w=o}=e,{transitionBg:b=Pn}=e,{transitionBgProps:S={duration:250}}=e,{transitionWindow:E=b}=e,{transitionWindowProps:T=S}=e,{disableFocusTrap:_=!1}=e;const I={ariaLabel:l,ariaLabelledBy:u,closeButton:h,closeOnEsc:d,closeOnOuterClick:f,styleBg:p,styleWindowWrap:g,styleWindow:m,styleContent:y,styleCloseButton:v,transitionBg:b,transitionBgProps:S,transitionWindow:E,transitionWindowProps:T,disableFocusTrap:_};let A,N,C,x,k,$,D,O,L,R,P,M,U,V,j,B={...I},q=null;const z=t=>t?Object.keys(t).reduce(((e,n)=>`${e}; ${(t=>t.replace(/([a-zA-Z])(?=[A-Z])/g,"$1-").toLowerCase())(n)}: ${t[n]}`),""):"",K=t=>!!(t&&t.constructor&&t.call&&t.apply),Q=()=>{};let J=Q,Z=Q,tt=Q,et=Q;const nt=(t,e={},r={},i={})=>{n(1,q=function(t,e={}){return function(n){return new t({...n,props:{...e,...n.props}})}}(t,e)),n(0,B={...I,...r}),n(5,k=z(Object.assign({},{width:window.innerWidth,height:window.innerHeight},B.styleBg))),n(6,$=z(B.styleWindowWrap)),n(7,D=z(B.styleWindow)),n(8,O=z(B.styleContent)),n(9,L=z(B.styleCloseButton)),n(10,R=B.transitionBg),n(11,P=B.transitionWindow),it(),n(12,J=t=>{i.onOpen&&i.onOpen(t),s("open"),s("opening")}),n(13,Z=t=>{i.onClose&&i.onClose(t),s("close"),s("closing")}),n(14,tt=t=>{i.onOpened&&i.onOpened(t),s("opened")}),n(15,et=t=>{i.onClosed&&i.onClosed(t),s("closed")})},rt=(t={})=>{q&&(n(13,Z=t.onClose||Z),n(15,et=t.onClosed||et),n(1,q=null),st())},it=()=>{x=window.scrollY,M=document.body.style.position,U=document.body.style.overflow,V=document.body.style.width,document.body.style.position="fixed",document.body.style.top=`-${x}px`,document.body.style.overflow="hidden",document.body.style.width="100%"},st=()=>{document.body.style.position=M||"",document.body.style.top="",document.body.style.overflow=U||"",document.body.style.width=V||"",window.scrollTo(0,x)};w(c,{open:nt,close:rt});let ot=!1;return G((()=>{ot&&rt()})),W((()=>{n(39,ot=!0)})),t.$$set=t=>{"show"in t&&n(21,a=t.show),"key"in t&&n(22,c=t.key),"ariaLabel"in t&&n(23,l=t.ariaLabel),"ariaLabelledBy"in t&&n(24,u=t.ariaLabelledBy),"closeButton"in t&&n(25,h=t.closeButton),"closeOnEsc"in t&&n(26,d=t.closeOnEsc),"closeOnOuterClick"in t&&n(27,f=t.closeOnOuterClick),"styleBg"in t&&n(28,p=t.styleBg),"styleWindowWrap"in t&&n(29,g=t.styleWindowWrap),"styleWindow"in t&&n(30,m=t.styleWindow),"styleContent"in t&&n(31,y=t.styleContent),"styleCloseButton"in t&&n(32,v=t.styleCloseButton),"setContext"in t&&n(33,w=t.setContext),"transitionBg"in t&&n(34,b=t.transitionBg),"transitionBgProps"in t&&n(35,S=t.transitionBgProps),"transitionWindow"in t&&n(36,E=t.transitionWindow),"transitionWindowProps"in t&&n(37,T=t.transitionWindowProps),"disableFocusTrap"in t&&n(38,_=t.disableFocusTrap),"$$scope"in t&&n(40,i=t.$$scope)},t.$$.update=()=>{2097152&t.$$.dirty[0]|256&t.$$.dirty[1]&&ot&&(K(a)?nt(a):rt())},[B,q,A,N,C,k,$,D,O,L,R,P,J,Z,tt,et,K,rt,t=>{if(B.closeOnEsc&&q&&"Escape"===t.key&&(t.preventDefault(),rt()),q&&"Tab"===t.key&&!B.disableFocusTrap){const e=C.querySelectorAll("*"),n=Array.from(e).filter((t=>t.tabIndex>=0));let r=n.indexOf(document.activeElement);-1===r&&t.shiftKey&&(r=0),r+=n.length+(t.shiftKey?-1:1),r%=n.length,n[r].focus(),t.preventDefault()}},t=>{!B.closeOnOuterClick||t.target!==A&&t.target!==N||(j=t.target)},t=>{B.closeOnOuterClick&&t.target===j&&(t.preventDefault(),rt())},a,c,l,u,h,d,f,p,g,m,y,v,w,b,S,E,T,_,ot,i,r,function(t){Y[t?"unshift":"push"]((()=>{C=t,n(4,C)}))},function(t){Y[t?"unshift":"push"]((()=>{N=t,n(3,N)}))},function(t){Y[t?"unshift":"push"]((()=>{A=t,n(2,A)}))}]}class Hm extends Ct{constructor(t){super(),Nt(this,t,Km,zm,o,{show:21,key:22,ariaLabel:23,ariaLabelledBy:24,closeButton:25,closeOnEsc:26,closeOnOuterClick:27,styleBg:28,styleWindowWrap:29,styleWindow:30,styleContent:31,styleCloseButton:32,setContext:33,transitionBg:34,transitionBgProps:35,transitionWindow:36,transitionWindowProps:37,disableFocusTrap:38},[-1,-1])}}function Wm(e){let n,r;return n=new dr({props:{icon:Qn}}),{c(){_t(n.$$.fragment)},m(t,e){It(n,t,e),r=!0},p:t,i(t){r||(yt(n.$$.fragment,t),r=!0)},o(t){vt(n.$$.fragment,t),r=!1},d(t){At(n,t)}}}function Gm(e){let n,r;return n=new dr({props:{icon:Yn}}),{c(){_t(n.$$.fragment)},m(t,e){It(n,t,e),r=!0},p:t,i(t){r||(yt(n.$$.fragment,t),r=!0)},o(t){vt(n.$$.fragment,t),r=!1},d(t){At(n,t)}}}function Xm(t){let e,n,r,i,s,o;const a=[Gm,Wm],c=[];function l(t,e){return t[0]?0:1}return n=l(t),r=c[n]=a[n](t),{c(){e=_("button"),r.c(),D(e,"title","Toggle playback (Alt)")},m(r,a){E(r,e,a),c[n].m(e,null),i=!0,s||(o=x(e,"click",t[1]),s=!0)},p(t,[i]){let s=n;n=l(t),n===s?c[n].p(t,i):(gt(),vt(c[s],1,1,(()=>{c[s]=null})),mt(),r=c[n],r?r.p(t,i):(r=c[n]=a[n](t),r.c()),yt(r,1),r.m(e,null))},i(t){i||(yt(r),i=!0)},o(t){vt(r),i=!1},d(t){t&&T(e),c[n].d(),s=!1,o()}}}function Qm(t,e,n){let r;l(t,Ar,(t=>n(0,r=t)));var i=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(i,s){function o(t){try{c(r.next(t))}catch(t){s(t)}}function a(t){try{c(r.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}c((r=r.apply(t,e||[])).next())}))};return[r,function(){return i(this,void 0,void 0,(function*(){r?jg():yield Vg()}))}]}class Jm extends Ct{constructor(t){super(),Nt(this,t,Qm,Xm,o,{})}}function Ym(t){let e,n,r,i,s,o;return n=new dr({props:{icon:Zn}}),{c(){e=_("button"),_t(n.$$.fragment),e.disabled=r=!t[0],D(e,"title","Jump to current time (Esc)")},m(r,a){E(r,e,a),It(n,e,null),i=!0,s||(o=x(e,"click",t[1]),s=!0)},p(t,[n]){(!i||1&n&&r!==(r=!t[0]))&&(e.disabled=r)},i(t){i||(yt(n.$$.fragment,t),i=!0)},o(t){vt(n.$$.fragment,t),i=!1},d(t){t&&T(e),At(n),s=!1,o()}}}function Zm(t,e,n){let r,i;l(t,Or,(t=>n(2,r=t))),l(t,Ar,(t=>n(0,i=t)));var s=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(i,s){function o(t){try{c(r.next(t))}catch(t){s(t)}}function a(t){try{c(r.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}c((r=r.apply(t,e||[])).next())}))};return[i,function(){return s(this,void 0,void 0,(function*(){if(null!==r){const t=lg(r);t&&(yield ag(t),jg())}}))}]}class ty extends Ct{constructor(t){super(),Nt(this,t,Zm,Ym,o,{})}}function ey(t){let e,n,r,s,o,a,c,l,u;return r=new dr({props:{icon:t[1]}}),{c(){e=_("div"),n=_("div"),_t(r.$$.fragment),s=N(),o=_("div"),a=_("input"),D(n,"class","iconWrapper svelte-k78dot"),D(a,"type","range"),D(a,"min",0),D(a,"max",100),D(a,"step",1),D(a,"class","svelte-k78dot"),D(o,"class","inputContainer svelte-k78dot"),D(e,"class","container svelte-k78dot")},m(i,h){E(i,e,h),S(e,n),It(r,n,null),S(e,s),S(e,o),S(o,a),R(a,t[0]),c=!0,l||(u=[x(n,"click",t[3]),x(a,"change",t[4]),x(a,"input",t[4])],l=!0)},p(t,[e]){const n={};2&e&&(n.icon=t[1]),r.$set(n),1&e&&R(a,t[0])},i(t){c||(yt(r.$$.fragment,t),c=!0)},o(t){vt(r.$$.fragment,t),c=!1},d(t){t&&T(e),At(r),l=!1,i(u)}}}function ny(e,n,r){let i,s,o,c=t;return e.$$.on_destroy.push((()=>c())),e.$$.update=()=>{var t;1&e.$$.dirty&&r(1,o=(t=s)<=0?nr:t<=25?rr:t<=60?er:ir)},r(2,i=Ag.getField("volume")),c(),c=a(i,(t=>r(0,s=t))),[s,o,i,function(){i.update((t=>t<=0?.5:0))},function(){s=O(this.value),i.set(s)}]}class ry extends Ct{constructor(t){super(),Nt(this,t,ny,ey,o,{})}}function iy(e){let n,r,i,s;return{c(){n=_("p"),r=A(e[0]),i=A(" / "),s=A(e[1]),D(n,"class","time svelte-1ej9j7d")},m(t,e){E(t,n,e),S(n,r),S(n,i),S(n,s)},p(t,[e]){1&e&&L(r,t[0]),2&e&&L(s,t[1])},i:t,o:t,d(t){t&&T(n)}}}function sy(t,e,n){let r,i,s,o,a;function c(t,e){if(e){return`${Math.floor(t/3600)}:${Math.floor(t%3600/60).toString().padStart(2,"0")}:${Math.floor(t%60).toString().padStart(2,"0")}`}return`${Math.floor(t%3600/60)}:${Math.floor(t%60).toString().padStart(2,"0")}`}return l(t,Cr,(t=>n(3,r=t))),l(t,Nr,(t=>n(4,i=t))),t.$$.update=()=>{8&t.$$.dirty&&n(2,s=r>=3600),20&t.$$.dirty&&n(0,o=c(i,s)),12&t.$$.dirty&&n(1,a=c(r,s))},[o,a,s,r,i]}class oy extends Ct{constructor(t){super(),Nt(this,t,sy,iy,o,{})}}function ay(e){let n,r,s,o,a;return{c(){n=_("div"),r=_("div"),D(r,"class","progress svelte-vtgpnf"),D(r,"style",s=`width: ${100*e[0]}%`),D(n,"class","timeline svelte-vtgpnf")},m(t,i){E(t,n,i),S(n,r),o||(a=[x(n,"mousedown",e[1]),x(n,"mousemove",e[2])],o=!0)},p(t,[e]){1&e&&s!==(s=`width: ${100*t[0]}%`)&&D(r,"style",s)},i:t,o:t,d(t){t&&T(n),o=!1,i(a)}}}function cy(t,e,n){let r,i;l(t,Nr,(t=>n(3,r=t))),l(t,Cr,(t=>n(4,i=t)));var s=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(i,s){function o(t){try{c(r.next(t))}catch(t){s(t)}}function a(t){try{c(r.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}c((r=r.apply(t,e||[])).next())}))};let o;function a(t){return s(this,void 0,void 0,(function*(){const e=$r(t.offsetX/t.currentTarget.offsetWidth*i);null!==e&&(yield tg(e))}))}return t.$$.update=()=>{24&t.$$.dirty&&n(0,o=r/i)},[o,a,function(t){return s(this,void 0,void 0,(function*(){if(1===t.buttons)return a(t)}))},r,i]}class ly extends Ct{constructor(t){super(),Nt(this,t,cy,ay,o,{})}}function uy(e){let n,r,i,s,o,a,c,l,u,h,d,f,p,g;return{c(){n=_("div"),r=_("label"),r.textContent="Playback Speed:",i=N(),s=_("select"),o=_("option"),o.textContent="0.25x",a=_("option"),a.textContent="0.5x",c=_("option"),c.textContent="0.75x",l=_("option"),l.textContent="Normal",u=_("option"),u.textContent="1.25x",h=_("option"),h.textContent="1.5x",d=_("option"),d.textContent="1.75x",f=_("option"),f.textContent="2x",D(r,"for","rate"),o.__value=25,o.value=o.__value,a.__value=50,a.value=a.__value,c.__value=75,c.value=c.__value,l.__value=100,l.value=l.__value,u.__value=125,u.value=u.__value,h.__value=150,h.value=h.__value,d.__value=175,d.value=d.__value,f.__value=200,f.value=f.__value,D(s,"name","rate"),D(s,"id","rate"),D(s,"class","svelte-1dcxm6u"),void 0===e[1]&&st((()=>e[2].call(s))),D(n,"class","container svelte-1dcxm6u")},m(t,m){E(t,n,m),S(n,r),S(n,i),S(n,s),S(s,o),S(s,a),S(s,c),S(s,l),S(s,u),S(s,h),S(s,d),S(s,f),P(s,e[1]),p||(g=x(s,"change",e[2]),p=!0)},p(t,[e]){2&e&&P(s,t[1])},i:t,o:t,d(t){t&&T(n),p=!1,g()}}}function hy(e,n,r){let i,s,o=t;return e.$$.on_destroy.push((()=>o())),r(0,i=Ag.getField("rate")),o(),o=a(i,(t=>r(1,s=t))),[i,s,function(){s=M(this),i.set(s)}]}class dy extends Ct{constructor(t){super(),Nt(this,t,hy,uy,o,{})}}function fy(e){let n,r,i,s,o,a,c,l,u,h,d,f,p,g;return r=new ly({}),o=new Jm({}),c=new ty({}),u=new ry({}),d=new oy({}),p=new dy({}),{c(){n=_("div"),_t(r.$$.fragment),i=N(),s=_("div"),_t(o.$$.fragment),a=N(),_t(c.$$.fragment),l=N(),_t(u.$$.fragment),h=N(),_t(d.$$.fragment),f=N(),_t(p.$$.fragment),D(s,"class","controls svelte-i7x4kw"),D(n,"class","container svelte-i7x4kw")},m(t,e){E(t,n,e),It(r,n,null),S(n,i),S(n,s),It(o,s,null),S(s,a),It(c,s,null),S(s,l),It(u,s,null),S(s,h),It(d,s,null),S(s,f),It(p,s,null),g=!0},p:t,i(t){g||(yt(r.$$.fragment,t),yt(o.$$.fragment,t),yt(c.$$.fragment,t),yt(u.$$.fragment,t),yt(d.$$.fragment,t),yt(p.$$.fragment,t),g=!0)},o(t){vt(r.$$.fragment,t),vt(o.$$.fragment,t),vt(c.$$.fragment,t),vt(u.$$.fragment,t),vt(d.$$.fragment,t),vt(p.$$.fragment,t),g=!1},d(t){t&&T(n),At(r),At(o),At(c),At(u),At(d),At(p)}}}class py extends Ct{constructor(t){super(),Nt(this,t,null,fy,o,{})}}function gy(t){let e,n;return e=new Hm({props:{closeButton:!0,styleWindow:{backgroundColor:"var(--grey-5)"},$$slots:{default:[yy]},$$scope:{ctx:t}}}),{c(){_t(e.$$.fragment)},m(t,r){It(e,t,r),n=!0},i(t){n||(yt(e.$$.fragment,t),n=!0)},o(t){vt(e.$$.fragment,t),n=!1},d(t){At(e,t)}}}function my(t){let e,n;return e=new Um({}),{c(){_t(e.$$.fragment)},m(t,r){It(e,t,r),n=!0},i(t){n||(yt(e.$$.fragment,t),n=!0)},o(t){vt(e.$$.fragment,t),n=!1},d(t){At(e,t)}}}function yy(t){let e,n,r,i,s,o,a,c,l,u;return n=new Xg({}),s=new Um({}),a=new Hn({}),l=new py({}),{c(){e=_("div"),_t(n.$$.fragment),r=N(),i=_("div"),_t(s.$$.fragment),o=N(),_t(a.$$.fragment),c=N(),_t(l.$$.fragment),D(i,"class","mainSection svelte-71x9zt"),D(e,"class","grid svelte-71x9zt")},m(t,h){E(t,e,h),It(n,e,null),S(e,r),S(e,i),It(s,i,null),S(i,o),It(a,i,null),S(e,c),It(l,e,null),u=!0},i(t){u||(yt(n.$$.fragment,t),yt(s.$$.fragment,t),yt(a.$$.fragment,t),yt(l.$$.fragment,t),u=!0)},o(t){vt(n.$$.fragment,t),vt(s.$$.fragment,t),vt(a.$$.fragment,t),vt(l.$$.fragment,t),u=!1},d(t){t&&T(e),At(n),At(s),At(a),At(l)}}}function vy(e){let n,r,i,s;const o=[my,gy],a=[];return n=Cn()?0:1,r=a[n]=o[n](e),{c(){r.c(),i=C()},m(t,e){a[n].m(t,e),E(t,i,e),s=!0},p:t,i(t){s||(yt(r),s=!0)},o(t){vt(r),s=!1},d(t){a[n].d(t),t&&T(i)}}}class wy extends Ct{constructor(t){super(),Nt(this,t,null,vy,o,{})}}function by(n){let r,i,o,a,c,l;return{c(){r=_("div"),i=_("div"),a=N(),c=_("span"),l=A(n[0]),D(i,"class","lds-dual-ring svelte-1y6904a"),D(c,"class","svelte-1y6904a"),D(r,"class","col svelte-1y6904a")},m(t,e){E(t,r,e),S(r,i),S(r,a),S(r,c),S(c,l)},p(t,[e]){1&e&&L(l,t[0])},i(n){o||st((()=>{o=function(n,r,i){let o,a,c=r(n,i),l=!1,u=0;function h(){o&&z(n,o)}function d(){const{delay:r=0,duration:i=300,easing:s=e,tick:d=t,css:f}=c||wt;f&&(o=q(n,0,1,i,r,s,f,u++)),d(0,1);const g=p()+r,m=g+i;a&&a.abort(),l=!0,st((()=>dt(n,!0,"start"))),a=v((t=>{if(l){if(t>=m)return d(1,0),dt(n,!0,"end"),h(),l=!1;if(t>=g){const e=s((t-g)/i);d(e,1-e)}}return l}))}let f=!1;return{start(){f||(z(n),s(c)?(c=c(),ht().then(d)):d())},invalidate(){f=!1},end(){l&&(h(),l=!1)}}}(i,Un,{}),o.start()}))},o:t,d(t){t&&T(r)}}}function Sy(t,e,n){let{text:r="Loading"}=e;return t.$$set=t=>{"text"in t&&n(0,r=t.text)},[r]}class Ey extends Ct{constructor(t){super(),Nt(this,t,Sy,by,o,{text:0})}}let Ty;async function _y(){return fetch("/assets/wordlist.txt").then((t=>t.text())).then((t=>t.split("\n"))).then((t=>Ty=new Set(t)))}const Iy=Object.freeze({NONE:0,DIAGONAL:1,LEFT:2,TOP:3});var Ay={TracedScore:(t,e=Iy.NONE)=>{if(Object.values(Iy).includes(e))return{score:t,direction:e};throw TypeError("Invalid direction value for TracedScore")},directions:Iy};const{TracedScore:Ny}=Ay,Cy=(t,e)=>{if(Number.isInteger(e.score))return e.score>t.score?e:t;throw TypeError(`Score object as an invalid score property: ${e.score}.`)};var xy={reverse:((...t)=>t.reduce(((t,e)=>n=>e(t(n))),(t=>t)))((t=>Number.isNaN(Number(t))?(()=>{throw TypeError("Non number input to decreaseAndRectify().")})():t),(t=>-t)),reduceTracedScores:(t,e)=>t.reduce(Cy,Ny(e))};const{directions:ky}=Ay;var $y={createMatrix:({width:t,heigth:e,fill:n=0})=>Array(e).fill(n).map((()=>Array(t).fill(n))),extractColumn:({matrix:t,row:e,col:n})=>t.slice(0,e+1).map((t=>t.slice(n,n+1))).reduce(((t,e)=>[...t,...e]),[]),extractRow:({matrix:t,row:e,col:n})=>t[e].slice(0,n+1),initNWScoringMatrix:({width:t,heigth:e})=>{const n=[];for(let r=0;r<e;r+=1)0===r?n[r]=Array(t).fill().map(((t,e)=>-e||0)):(n[r]=Array(t).fill(0),n[r][0]=-r);return n},initNWTracebacMatrix:({width:t,heigth:e})=>{const n=[];for(let r=0;r<e;r+=1)0===r?n[r]=Array(t).fill(ky.LEFT):(n[r]=Array(t).fill(ky.NONE),n[r][0]=ky.TOP),n[0][0]=ky.NONE;return n}};const{initNWScoringMatrix:Dy,initNWTracebacMatrix:Oy}=$y,{reduceTracedScores:Ly}=xy,{TracedScore:Ry,directions:Py}=Ay;var My=function({sequence1:t,sequence2:e,gapScoreFunction:n,similarityScoreFunction:r}){const i=t.length+1,s=e.length+1,o=Dy({width:s,heigth:i}),a=Oy({width:s,heigth:i});let c=0,l=[0,0];for(let u=1;u<i;u+=1)for(let i=1;i<s;i+=1){const s=r(t[u-1],e[i-1]),h=[Ry(o[u-1][i]+n(),Py.TOP),Ry(o[u][i-1]+n(),Py.LEFT),Ry(o[u-1][i-1]+s,Py.DIAGONAL)],{score:d,direction:f}=Ly(h,-1/0);o[u][i]=d,a[u][i]=f,c=d,l=[u,i]}return{alignmentScore:c,scoringMatrix:o,tracebackMatrix:a,tracebackStart:l}};const{createMatrix:Uy,extractColumn:Fy,extractRow:Vy}=$y,{reduceTracedScores:jy}=xy,{TracedScore:By,directions:qy}=Ay;function zy(t){let e=-1,n=0;for(let r=1;r<t.length;r+=1)t[r]>e&&(e=t[r],n=r);return{max:e,gapLength:n}}function Ky({scoringMatrix:t,row:e,col:n,gapScoreFunction:r,similarityScore:i}){const s=Vy({matrix:t,row:e,col:n}),o=Fy({matrix:t,row:e,col:n}),{max:a,gapLength:c}=zy(s.reverse()),{max:l,gapLength:u}=zy(o.reverse());return[By(l+r(u),qy.TOP),By(a+r(c),qy.LEFT),By(t[e-1][n-1]+i,qy.DIAGONAL)]}var Hy=function({sequence1:t,sequence2:e,gapScoreFunction:n,similarityScoreFunction:r}){const i=t.length+1,s=e.length+1,o=Uy({width:s,heigth:i}),a=Uy({width:s,heigth:i,fill:qy.NONE});let c=0,l=[0,0];for(let u=1;u<i;u+=1)for(let i=1;i<s;i+=1){const s=Ky({scoringMatrix:o,row:u,col:i,gapScoreFunction:n,similarityScore:r(t[u-1],e[i-1])}),{score:h,direction:d}=jy(s,0);o[u][i]=h,a[u][i]=d,h>=c&&(c=h,l=[u,i])}return{alignmentScore:c,scoringMatrix:o,tracebackMatrix:a,tracebackStart:l}};const{directions:Wy}=Ay;var Gy={alignmentUpdaters:t=>e=>({[Wy.DIAGONAL]:({seq1:t,seq2:e,row:n,col:r})=>[t[n-1],e[r-1]],[Wy.LEFT]:({seq2:e,col:n})=>[t,e[n-1]],[Wy.TOP]:({seq1:e,row:n})=>[e[n-1],t]}[e]),coordinateUpdaters:t=>({[Wy.DIAGONAL]:([t,e])=>[t-1,e-1],[Wy.LEFT]:([t,e])=>[t,e-1],[Wy.TOP]:([t,e])=>[t-1,e]}[t])};const{alignmentUpdaters:Xy,coordinateUpdaters:Qy}=Gy,{directions:Jy}=Ay;var Yy=function({sequence1:t,sequence2:e,tracebackMatrix:n,tracebackStart:r,gapSymbol:i}){let[s,o]=r;const a=[],c=[],l=[[s,o]],u=Xy(i);for(;n[s][o]!==Jy.NONE;){const r=n[s][o],i=u(r),[h,d]=i({seq1:t,seq2:e,row:s,col:o});a.unshift(h),c.unshift(d);const f=Qy(r);[s,o]=f([s,o]),l.push([s,o])}return{alignedSequence1:a.join(""),alignedSequence2:c.join(""),coordinateWalk:l}};const{directions:Zy}=Ay;var tv=({algorithm:t,similarityScoreFunctionDefault:e,gapScoreFunctionDefault:n,gapSymbolDefault:r})=>({similarityScoreFunction:i=e,gapScoreFunction:s=n,gapSymbol:o=r}={})=>({similarityScoreFunction:i,gapScoreFunction:s,gapSymbol:o,directions:Zy,align(e="",n=""){const{alignmentScore:r,scoringMatrix:i,tracebackMatrix:s,tracebackStart:o}=t({sequence1:e,sequence2:n,gapScoreFunction:this.gapScoreFunction,similarityScoreFunction:this.similarityScoreFunction}),{alignedSequence1:a,alignedSequence2:c,coordinateWalk:l}=Yy({sequence1:e,sequence2:n,tracebackMatrix:s,tracebackStart:o,gapSymbol:this.gapSymbol});return{score:r,originalSequences:[e,n],alignedSequences:[a,c],coordinateWalk:l,scoringMatrix:i,tracebackMatrix:s,alignment:`${a}\n${c}`}}});const{reverse:ev}=xy;const nv={NWaligner:tv({algorithm:My,similarityScoreFunctionDefault:(t,e)=>t===e?1:-2,gapScoreFunctionDefault:()=>-1,gapSymbolDefault:"-"}),SWaligner:tv({algorithm:Hy,similarityScoreFunctionDefault:(t,e)=>t===e?2:-1,gapScoreFunctionDefault:ev,gapSymbolDefault:"-"})}.NWaligner({similarityScoreFunction:(t,e)=>t.toLowerCase()===e.toLowerCase()?1:-2});function rv(t,e){const n=e.map((e=>function(t,e){if(!t)return{text:e,score:0};const n=nv.align(t,e),r=n.alignedSequences[0];let i=0;for(let t=r.length;t--&&"-"===r[t];t>=0)i++;const s=e.substring(e.length-i,e.length);return{text:t+s,score:n.score}}(t,e)));n.sort(((t,e)=>e.score-t.score));const r=n.map((t=>t.text)),i=[t];return r.filter((t=>!i.includes(t)&&(i.push(t),!0))),i}function iv(t,e,n,r){const i=e.map((t=>function(t){const e=t.split(" "),n=e.map((t=>t.length>1&&t===t.toUpperCase()?t:t.toLowerCase())).map((t=>{const e=t[t.length-1];return"."===e||","===e||"?"===e||"!"===e?t.slice(0,t.length-1):t}));return n.map((t=>function(t){return Ty.has(t)}(t)?t:sv(t))).join(" ")}(t))),s=[];i.forEach((t=>{s.includes(t)||s.push(t)}));const o=$n([n,r],(([t,e])=>s.map((n=>function(t,e,n){return(e?sv(t):t)+n}(n,t,e)))));return $n([o,t],(([t,e])=>null===e?t:rv(e,t)))}function sv(t){return t.slice(0,1).toUpperCase()+t.slice(1)}class ov{constructor(t){this.startTime=-1,this.endTime=-1,this.selectedStore=kn(!1),this.soleSelectedStore=kn(!1),this.playingStore=kn(!1),this.transcriptEntry=t;const{idx:e,startTime:n,endTime:r,options:i}=t;this.idx=e,this.startTimeStore=_r(kn(n)),this.endTimeStore=_r(kn(r)),this.rawOptions=i,this.startTimeStore.subscribe((t=>this.startTime=t)),this.endTimeStore.subscribe((t=>this.endTime=t));const s=Zp.getPatchStore(e);this.userTextStore=$n(s,(t=>t.text)),this.userEndParagraphStore=$n(s,(t=>t.endParagraph));const o=$n(s,(t=>{var e;return null!==(e=t.confirmed)&&void 0!==e&&e}));this.confirmedStore=Ir(o,(t=>Zp.append(e,{confirmed:t}))),this.editedStore=$n([this.userTextStore,this.confirmedStore],(([t,e])=>e||null!==t))}build(t,e){return new av(this.transcriptEntry,t,e)}}class av extends ov{constructor(t,e,n){var r,i;super(t),this.prevOne=e,this.nextOne=n;const s=null!==(r=null==e?void 0:e.endTimeStore)&&void 0!==r?r:kn(null);this.silenceBeforeStore=$n([s,this.startTimeStore],(([t,e])=>null===t?null:e-t));const o=null!==(i=null==n?void 0:n.startTimeStore)&&void 0!==i?i:kn(null);this.silenceAfterStore=$n([this.endTimeStore,o],(([t,e])=>null===e?null:e-t));const a=$n([this.userEndParagraphStore,this.silenceAfterStore,Wp],(([t,e,n])=>null===e||(null!==t?t:e>=n/1e3)));this.endParagraphStore=Ir(a,(t=>Zp.append(this.idx,{endParagraph:t}))),this.placeholderPunctuationStore=$n([this.endParagraphStore,this.silenceAfterStore,Kp,Hp],(([t,e,n,r])=>t||null===e||e>=r/1e3?".":e>=n/1e3?",":"")),this.endsSentenceStore=$n([this.endParagraphStore,this.placeholderPunctuationStore,this.userTextStore],(([t,e,n])=>{if(t)return!0;if(null===n)return"."===e;const r=n[n.length-1];return"."===r||("!"===r||"?"===r)}))}build(t,e){return new cv(this.transcriptEntry,this.prevOne,this.nextOne,t,e)}}class cv extends av{constructor(t,e,n,r,i){var s,o;super(t,e,n),this.startParagraphStore=null!==(s=null==r?void 0:r.endParagraphStore)&&void 0!==s?s:{subscribe:kn(!0).subscribe,set:()=>{},update:()=>{}},this.placeholderCapitalisationStore=null!==(o=null==r?void 0:r.endsSentenceStore)&&void 0!==o?o:kn(!0),this.completionsStore=iv(this.userTextStore,this.rawOptions,this.placeholderCapitalisationStore,this.placeholderPunctuationStore);const a=$n(this.completionsStore,(t=>t[0]));var c;this.displayTextStore=Ir(a,(t=>Zp.append(this.idx,{text:t}))),c=this,vr=Math.max(vr,c.idx),yr[c.idx]=c}}async function lv(){return async function(t){const e=[];await t((t=>(e.push(t),t))),await Promise.all(e).catch((t=>(console.error(t),Promise.reject("Error during initialisation"))))}((async t=>{const e=t(qr()),n=t(_y());t(Zp.init()),e.then((({audioUrl:t})=>function(t){Lg=document.createElement("audio"),Lg.src=t,Lg.onplay=()=>Ar.set(!0),Lg.onpause=()=>Ar.set(!1),Lg.ondurationchange=()=>Cr.set(Lg.duration),Ag.getField("volume").subscribe((t=>Lg.volume=t/100)),Ag.getField("rate").subscribe((t=>Lg.playbackRate=t/100)),Ag.getField("loop").subscribe((t=>Mg=t)),Ag.getField("autoPlay").subscribe((t=>Ug=t)),Fg=!0}(t)));const r=t(Promise.all([e,n]).then((([{transcript:t}])=>t)).then((t=>function(t){const e=t.map(((t,e)=>new ov(Object.assign({idx:e},t)))),n=e.map(((t,n)=>{var r,i;const s=null!==(r=e[n-1])&&void 0!==r?r:null,o=null!==(i=e[n+1])&&void 0!==i?i:null;return t.build(s,o)})),r=n.map(((t,e)=>{var r,i;const s=null!==(r=n[e-1])&&void 0!==r?r:null,o=null!==(i=n[e+1])&&void 0!==i?i:null;return t.build(s,o)}));return r.forEach((t=>{t.endParagraphStore.subscribe((e=>kg.setEndParagraph(t.idx,e)))})),r}(t))));t(r.then((t=>function(t){t.forEach((t=>{const e={startTime:-1,endTime:-1};t.startTimeStore.subscribe((t=>{e.startTime=t})),t.endTimeStore.subscribe((t=>{e.endTime=t})),xr.push(e)}))}(t)))),Ag.connect(),qg.connect()}))}function uv(e){let n;return{c(){n=_("span"),n.textContent="Login failed...",D(n,"class","loading svelte-onzbau")},m(t,e){E(t,n,e)},p:t,i:t,o:t,d(t){t&&T(n)}}}function hv(e){let n,r;return n=new Ey({props:{text:"Logging in..."}}),{c(){_t(n.$$.fragment)},m(t,e){It(n,t,e),r=!0},p:t,i(t){r||(yt(n.$$.fragment,t),r=!0)},o(t){vt(n.$$.fragment,t),r=!1},d(t){At(n,t)}}}function dv(t){let e,n,r={ctx:t,current:null,token:null,hasCatch:!0,pending:gv,then:pv,catch:fv,error:3,blocks:[,,,]};return function(t,e){const n=e.token={};function r(t,r,i,s){if(e.token!==n)return;e.resolved=s;let o=e.ctx;void 0!==i&&(o=o.slice(),o[i]=s);const a=t&&(e.current=t)(o);let c=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==r&&t&&(gt(),vt(t,1,1,(()=>{e.blocks[n]===t&&(e.blocks[n]=null)})),mt())})):e.block.d(1),a.c(),yt(a,1),a.m(e.mount(),e.anchor),c=!0),e.block=a,e.blocks&&(e.blocks[r]=a),c&&ct()}if((i=t)&&"object"==typeof i&&"function"==typeof i.then){const n=H();if(t.then((t=>{K(n),r(e.then,1,e.value,t),K(null)}),(t=>{if(K(n),r(e.catch,2,e.error,t),K(null),!e.hasCatch)throw t})),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}var i}(lv(),r),{c(){e=C(),r.block.c()},m(t,i){E(t,e,i),r.block.m(t,r.anchor=i),r.mount=()=>e.parentNode,r.anchor=e,n=!0},p(e,n){!function(t,e,n){const r=e.slice(),{resolved:i}=t;t.current===t.then&&(r[t.value]=i),t.current===t.catch&&(r[t.error]=i),t.block.p(r,n)}(r,t=e,n)},i(t){n||(yt(r.block),n=!0)},o(t){for(let t=0;t<3;t+=1){vt(r.blocks[t])}n=!1},d(t){t&&T(e),r.block.d(t),r.token=null,r=null}}}function fv(e){let n,r,i,s=e[3]+"";return{c(){n=_("span"),r=A("Error: "),i=A(s),D(n,"class","loading svelte-onzbau")},m(t,e){E(t,n,e),S(n,r),S(n,i)},p:t,i:t,o:t,d(t){t&&T(n)}}}function pv(e){let n,r;return n=new wy({}),{c(){_t(n.$$.fragment)},m(t,e){It(n,t,e),r=!0},p:t,i(t){r||(yt(n.$$.fragment,t),r=!0)},o(t){vt(n.$$.fragment,t),r=!1},d(t){At(n,t)}}}function gv(e){let n,r;return n=new Ey({props:{text:"Loading Transcript..."}}),{c(){_t(n.$$.fragment)},m(t,e){It(n,t,e),r=!0},p:t,i(t){r||(yt(n.$$.fragment,t),r=!0)},o(t){vt(n.$$.fragment,t),r=!1},d(t){At(n,t)}}}function mv(t){let e,n,r,i,s,o,a,c;const l=[dv,hv,uv],u=[];function h(t,e){return 1&e&&(n=!(!An()&&!t[0])),n?0:void 0===t[0]?1:null===t[0]?2:-1}return~(r=h(t,-1))&&(i=u[r]=l[r](t)),{c(){e=N(),i&&i.c(),s=C()},m(n,i){E(n,e,i),~r&&u[r].m(n,i),E(n,s,i),o=!0,a||(c=x(document.body,"mouseup",t[1]),a=!0)},p(t,[e]){let n=r;r=h(t,e),r===n?~r&&u[r].p(t,e):(i&&(gt(),vt(u[n],1,1,(()=>{u[n]=null})),mt()),~r?(i=u[r],i?i.p(t,e):(i=u[r]=l[r](t),i.c()),yt(i,1),i.m(s.parentNode,s)):i=null)},i(t){o||(yt(i),o=!0)},o(t){vt(i),o=!1},d(t){t&&T(e),~r&&u[r].d(t),t&&T(s),a=!1,c()}}}function yv(t,e,n){let r;l(t,Vr,(t=>n(0,r=t)));const i=function(t,e={}){"object"!=typeof e&&(e={name:e});const n=Object.assign({name:pe,automaticDataCollectionEnabled:!1},e),r=n.name;if("string"!=typeof r||!r)throw Se.create("bad-app-name",{appName:String(r)});const i=me.get(r);if(i){if(Wt(t,i.options)&&Wt(n,i.config))return i;throw Se.create("duplicate-app",{appName:r})}const s=new ie(r);for(const t of ye.values())s.addComponent(t);const o=new Ee(t,n,s);return me.set(r,o),o}({apiKey:process.env.FIREBASE_API_KEY,authDomain:`${process.env.PROJECT_ID}.firebaseapp.com`,projectId:process.env.PROJECT_ID});if(!An()){(function(t,e){const n=be(t,"auth");if(n.isInitialized()){const t=n.getImmediate();if(Wt(n.getOptions(),null!=e?e:{}))return t;ke(t,"already-initialized")}return n.initialize({options:e})})(i,{persistence:Tn}).onAuthStateChanged((t=>{null===t?location.pathname="/dashboard/auth/login/":!1===t.emailVerified?location.pathname="/dashboard/auth/verify/":Vr.set(t)}))}return[r,()=>tm.clear()]}return new class extends Ct{constructor(t){super(),Nt(this,t,yv,mv,o,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
