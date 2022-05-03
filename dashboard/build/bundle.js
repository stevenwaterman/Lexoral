var app=function(){"use strict";function t(){}!function(){const t={PROJECT_ID:"lexoral-prod",FIREBASE_API_KEY:"AIzaSyBU8Uc2XMlksFDa-WP27u4yL4I5Q1_Ddbg"};try{if(process)return process.env=Object.assign({},process.env),void Object.assign(process.env,t)}catch(t){}globalThis.process={env:t}}();const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function r(t){return t()}function i(){return Object.create(null)}function s(t){t.forEach(r)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}function u(t){let e;return c(t,(t=>e=t))(),e}function l(t,e,n){t.$$.on_destroy.push(c(e,n))}function h(t,e,n,r){if(t){const i=d(t,e,n,r);return t[0](i)}}function d(t,e,r,i){return t[1]&&i?n(r.ctx.slice(),t[1](i(e))):r.ctx}function f(t,e,n,r,i,s,o){const a=function(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(void 0===e.dirty)return i;if("object"==typeof i){const t=[],n=Math.max(e.dirty.length,i.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|i[r];return t}return e.dirty|i}return e.dirty}(e,r,i,s);if(a){const i=d(e,n,r,o);t.p(i,a)}}function p(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function m(t,e){const n={};e=new Set(e);for(const r in t)e.has(r)||"$"===r[0]||(n[r]=t[r]);return n}const g="undefined"!=typeof window;let y=g?()=>window.performance.now():()=>Date.now(),v=g?t=>requestAnimationFrame(t):t;const w=new Set;function b(t){w.forEach((e=>{e.c(t)||(w.delete(e),e.f())})),0!==w.size&&v(b)}function E(t){let e;return 0===w.size&&v(b),{promise:new Promise((n=>{w.add(e={c:t,f:n})})),abort(){w.delete(e)}}}let I=!1;function _(t,e,n,r){for(;t<e;){const i=t+(e-t>>1);n(i)<=r?t=i+1:e=i}return t}function T(t,e){I?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const e=t.childNodes,n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let i=0;for(let t=0;t<e.length;t++){const s=_(1,i+1,(t=>e[n[t]].claim_order),e[t].claim_order)-1;r[t]=n[s]+1;const o=s+1;n[o]=t,i=Math.max(o,i)}const s=[],o=[];let a=e.length-1;for(let t=n[i]+1;0!=t;t=r[t-1]){for(s.push(e[t-1]);a>=t;a--)o.push(e[a]);a--}for(;a>=0;a--)o.push(e[a]);s.reverse(),o.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<o.length;e++){for(;n<s.length&&o[e].claim_order>=s[n].claim_order;)n++;const r=n<s.length?s[n]:null;t.insertBefore(o[e],r)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),e!==t.actual_end_child?t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling):e.parentNode!==t&&t.appendChild(e)}function S(t,e,n){I&&!n?T(t,e):(e.parentNode!==t||n&&e.nextSibling!==n)&&t.insertBefore(e,n||null)}function k(t){t.parentNode.removeChild(t)}function A(t){return document.createElement(t)}function C(t){return document.createTextNode(t)}function N(){return C(" ")}function $(){return C("")}function R(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function D(t){return function(e){return e.preventDefault(),t.call(this,e)}}function x(t){return function(e){e.target===this&&t.call(this,e)}}function O(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function L(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)null==e[r]?t.removeAttribute(r):"style"===r?t.style.cssText=e[r]:"__value"===r?t.value=t[r]=e[r]:n[r]&&n[r].set?t[r]=e[r]:O(t,r,e[r])}function P(t){return""===t?null:+t}function M(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function U(t,e){t.value=null==e?"":e}function V(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function F(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}const j=new Set;let B,q=0;function z(t,e,n,r,i,s,o,a=0){const c=16.666/r;let u="{\n";for(let t=0;t<=1;t+=c){const r=e+(n-e)*s(t);u+=100*t+`%{${o(r,1-r)}}\n`}const l=u+`100% {${o(n,1-n)}}\n}`,h=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(l)}_${a}`,d=t.ownerDocument;j.add(d);const f=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild(A("style")).sheet),p=d.__svelte_rules||(d.__svelte_rules={});p[h]||(p[h]=!0,f.insertRule(`@keyframes ${h} ${l}`,f.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${h} ${r}ms linear ${i}ms 1 both`,q+=1,h}function H(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),i=n.length-r.length;i&&(t.style.animation=r.join(", "),q-=i,q||v((()=>{q||(j.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),j.clear())})))}function K(t){B=t}function W(){if(!B)throw new Error("Function called outside component initialization");return B}function G(t){W().$$.on_mount.push(t)}function Y(t){W().$$.on_destroy.push(t)}function J(){const t=W();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const i=F(e,n);r.slice().forEach((e=>{e.call(t,i)}))}}}function X(t,e){W().$$.context.set(t,e)}function Q(t){return W().$$.context.get(t)}const Z=[],tt=[],et=[],nt=[],rt=Promise.resolve();let it=!1;function st(){it||(it=!0,rt.then(ut))}function ot(t){et.push(t)}let at=!1;const ct=new Set;function ut(){if(!at){at=!0;do{for(let t=0;t<Z.length;t+=1){const e=Z[t];K(e),lt(e.$$)}for(K(null),Z.length=0;tt.length;)tt.pop()();for(let t=0;t<et.length;t+=1){const e=et[t];ct.has(e)||(ct.add(e),e())}et.length=0}while(Z.length);for(;nt.length;)nt.pop()();it=!1,at=!1,ct.clear()}}function lt(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ot)}}let ht;function dt(){return ht||(ht=Promise.resolve(),ht.then((()=>{ht=null}))),ht}function ft(t,e,n){t.dispatchEvent(F(`${e?"intro":"outro"}${n}`))}const pt=new Set;let mt;function gt(){mt={r:0,c:[],p:mt}}function yt(){mt.r||s(mt.c),mt=mt.p}function vt(t,e){t&&t.i&&(pt.delete(t),t.i(e))}function wt(t,e,n,r){if(t&&t.o){if(pt.has(t))return;pt.add(t),mt.c.push((()=>{pt.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}const bt={duration:0};function Et(n,r,i,a){let c=r(n,i),u=a?0:1,l=null,h=null,d=null;function f(){d&&H(n,d)}function p(t,e){const n=t.b-u;return e*=Math.abs(n),{a:u,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function m(r){const{delay:i=0,duration:o=300,easing:a=e,tick:m=t,css:g}=c||bt,v={start:y()+i,b:r};r||(v.group=mt,mt.r+=1),l||h?h=v:(g&&(f(),d=z(n,u,r,o,i,a,g)),r&&m(0,1),l=p(v,o),ot((()=>ft(n,r,"start"))),E((t=>{if(h&&t>h.start&&(l=p(h,o),h=null,ft(n,l.b,"start"),g&&(f(),d=z(n,u,l.b,l.duration,0,a,c.css))),l)if(t>=l.end)m(u=l.b,1-u),ft(n,l.b,"end"),h||(l.b?f():--l.group.r||s(l.group.c)),l=null;else if(t>=l.start){const e=t-l.start;u=l.a+l.d*a(e/l.duration),m(u,1-u)}return!(!l&&!h)})))}return{run(t){o(c)?dt().then((()=>{c=c(),m(t)})):m(t)},end(){f(),l=h=null}}}const It="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function _t(t,e){wt(t,1,1,(()=>{e.delete(t.key)}))}function Tt(t,e){const n={},r={},i={$$scope:1};let s=t.length;for(;s--;){const o=t[s],a=e[s];if(a){for(const t in o)t in a||(r[t]=1);for(const t in a)i[t]||(n[t]=a[t],i[t]=1);t[s]=a}else for(const t in o)i[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function St(t){return"object"==typeof t&&null!==t?t:{}}function kt(t){t&&t.c()}function At(t,e,n,i){const{fragment:a,on_mount:c,on_destroy:u,after_update:l}=t.$$;a&&a.m(e,n),i||ot((()=>{const e=c.map(r).filter(o);u?u.push(...e):s(e),t.$$.on_mount=[]})),l.forEach(ot)}function Ct(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Nt(e,n,r,o,a,c,u=[-1]){const l=B;K(e);const h=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:i(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:n.context||[]),callbacks:i(),dirty:u,skip_bound:!1};let d=!1;if(h.ctx=r?r(e,n.props||{},((t,n,...r)=>{const i=r.length?r[0]:n;return h.ctx&&a(h.ctx[t],h.ctx[t]=i)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](i),d&&function(t,e){-1===t.$$.dirty[0]&&(Z.push(t),st(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],h.update(),d=!0,s(h.before_update),h.fragment=!!o&&o(h.ctx),n.target){if(n.hydrate){I=!0;const t=function(t){return Array.from(t.childNodes)}(n.target);h.fragment&&h.fragment.l(t),t.forEach(k)}else h.fragment&&h.fragment.c();n.intro&&vt(e.$$.fragment),At(e,n.target,n.anchor,n.customElement),I=!1,ut()}K(l)}class $t{$destroy(){Ct(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}
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
    ***************************************************************************** */var Rt=function(t,e){return(Rt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)};function Dt(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}function xt(t,e,n,r){return new(n||(n=Promise))((function(i,s){function o(t){try{c(r.next(t))}catch(t){s(t)}}function a(t){try{c(r.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}c((r=r.apply(t,e||[])).next())}))}function Ot(t,e){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=e.call(t,o)}catch(t){s=[6,t],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}}function Lt(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Pt(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,s=n.call(t),o=[];try{for(;(void 0===e||e-- >0)&&!(r=s.next()).done;)o.push(r.value)}catch(t){i={error:t}}finally{try{r&&!r.done&&(n=s.return)&&n.call(s)}finally{if(i)throw i.error}}return o}function Mt(t,e,n){if(n||2===arguments.length)for(var r,i=0,s=e.length;i<s;i++)!r&&i in e||(r||(r=Array.prototype.slice.call(e,0,i)),r[i]=e[i]);return t.concat(r||e)}
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
     */var Ut={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<t.length;i+=3){var s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,l=s>>2,h=(3&s)<<4|a>>4,d=(15&a)<<2|u>>6,f=63&u;c||(f=64,o||(d=64)),r.push(n[l],n[h],n[d],n[f])}return r.join("")},encodeString:function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(function(t){for(var e=[],n=0,r=0;r<t.length;r++){var i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296==(64512&i)&&r+1<t.length&&56320==(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e}(t),e)},decodeString:function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){for(var e=[],n=0,r=0;n<t.length;){var i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){var s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){var o=((7&i)<<18|(63&(s=t[n++]))<<12|(63&(a=t[n++]))<<6|63&t[n++])-65536;e[r++]=String.fromCharCode(55296+(o>>10)),e[r++]=String.fromCharCode(56320+(1023&o))}else{s=t[n++];var a=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&a)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray:function(t,e){this.init_();for(var n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<t.length;){var s=n[t.charAt(i++)],o=i<t.length?n[t.charAt(i)]:0,a=++i<t.length?n[t.charAt(i)]:64,c=++i<t.length?n[t.charAt(i)]:64;if(++i,null==s||null==o||null==a||null==c)throw Error();var u=s<<2|o>>4;if(r.push(u),64!==a){var l=o<<4&240|a>>2;if(r.push(l),64!==c){var h=a<<6&192|c;r.push(h)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Vt=function(){function t(){var t=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,n){t.resolve=e,t.reject=n}))}return t.prototype.wrapCallback=function(t){var e=this;return function(n,r){n?e.reject(n):e.resolve(r),"function"==typeof t&&(e.promise.catch((function(){})),1===t.length?t(n):t(n,r))}},t}();
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
function Ft(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function jt(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ft())}function Bt(){var t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function qt(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function zt(){var t=Ft();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}
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
var Ht=function(t){function e(n,r,i){var s=t.call(this,r)||this;return s.code=n,s.customData=i,s.name="FirebaseError",Object.setPrototypeOf(s,e.prototype),Error.captureStackTrace&&Error.captureStackTrace(s,Kt.prototype.create),s}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}Rt(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(e,t),e}(Error),Kt=function(){function t(t,e,n){this.service=t,this.serviceName=e,this.errors=n}return t.prototype.create=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=e[0]||{},i=this.service+"/"+t,s=this.errors[t],o=s?Wt(s,r):"Error",a=this.serviceName+": "+o+" ("+i+").",c=new Ht(i,a,r);return c},t}();function Wt(t,e){return t.replace(Gt,(function(t,n){var r=e[n];return null!=r?String(r):"<"+n+"?>"}))}var Gt=/\{\$([^}]+)}/g;function Yt(t,e){if(t===e)return!0;for(var n=Object.keys(t),r=Object.keys(e),i=0,s=n;i<s.length;i++){var o=s[i];if(!r.includes(o))return!1;var a=t[o],c=e[o];if(Jt(a)&&Jt(c)){if(!Yt(a,c))return!1}else if(a!==c)return!1}for(var u=0,l=r;u<l.length;u++){o=l[u];if(!n.includes(o))return!1}return!0}function Jt(t){return null!==t&&"object"==typeof t}
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
     */function Xt(t){for(var e=[],n=function(t,n){Array.isArray(n)?n.forEach((function(n){e.push(encodeURIComponent(t)+"="+encodeURIComponent(n))})):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n))},r=0,i=Object.entries(t);r<i.length;r++){var s=i[r];n(s[0],s[1])}return e.length?"&"+e.join("&"):""}function Qt(t){var e={};return t.replace(/^\?/,"").split("&").forEach((function(t){if(t){var n=t.split("="),r=n[0],i=n[1];e[decodeURIComponent(r)]=decodeURIComponent(i)}})),e}function Zt(t){var e=t.indexOf("?");if(!e)return"";var n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}var te=function(){function t(t,e){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((function(){t(n)})).catch((function(t){n.error(t)}))}return t.prototype.next=function(t){this.forEachObserver((function(e){e.next(t)}))},t.prototype.error=function(t){this.forEachObserver((function(e){e.error(t)})),this.close(t)},t.prototype.complete=function(){this.forEachObserver((function(t){t.complete()})),this.close()},t.prototype.subscribe=function(t,e,n){var r,i=this;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(t,e){if("object"!=typeof t||null===t)return!1;for(var n=0,r=e;n<r.length;n++){var i=r[n];if(i in t&&"function"==typeof t[i])return!0}return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n}).next&&(r.next=ee),void 0===r.error&&(r.error=ee),void 0===r.complete&&(r.complete=ee);var s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(t){}})),this.observers.push(r),s},t.prototype.unsubscribeOne=function(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},t.prototype.forEachObserver=function(t){if(!this.finalized)for(var e=0;e<this.observers.length;e++)this.sendOne(e,t)},t.prototype.sendOne=function(t,e){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[t])try{e(n.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))},t.prototype.close=function(t){var e=this;this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((function(){e.observers=void 0,e.onNoObservers=void 0})))},t}();function ee(){}
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
     */function ne(t){return t&&t._delegate?t._delegate:t}var re=function(){function t(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(t){return this.instantiationMode=t,this},t.prototype.setMultipleInstances=function(t){return this.multipleInstances=t,this},t.prototype.setServiceProps=function(t){return this.serviceProps=t,this},t.prototype.setInstanceCreatedCallback=function(t){return this.onInstanceCreated=t,this},t}(),ie="[DEFAULT]",se=function(){function t(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t.prototype.get=function(t){var e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){var n=new Vt;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:e});r&&n.resolve(r)}catch(t){}}return this.instancesDeferred.get(e).promise},t.prototype.getImmediate=function(t){var e,n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),r=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(r)return null;throw t}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(t){var e,n;if(t.name!==this.name)throw Error("Mismatching Component "+t.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
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
     */(t))try{this.getOrInitializeService({instanceIdentifier:ie})}catch(t){}try{for(var r=Lt(this.instancesDeferred.entries()),i=r.next();!i.done;i=r.next()){var s=Pt(i.value,2),o=s[0],a=s[1],c=this.normalizeInstanceIdentifier(o);try{var u=this.getOrInitializeService({instanceIdentifier:c});a.resolve(u)}catch(t){}}}catch(t){e={error:t}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}}},t.prototype.clearInstance=function(t){void 0===t&&(t=ie),this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)},t.prototype.delete=function(){return xt(this,void 0,void 0,(function(){var t;return Ot(this,(function(e){switch(e.label){case 0:return t=Array.from(this.instances.values()),[4,Promise.all(Mt(Mt([],Pt(t.filter((function(t){return"INTERNAL"in t})).map((function(t){return t.INTERNAL.delete()})))),Pt(t.filter((function(t){return"_delete"in t})).map((function(t){return t._delete()})))))];case 1:return e.sent(),[2]}}))}))},t.prototype.isComponentSet=function(){return null!=this.component},t.prototype.isInitialized=function(t){return void 0===t&&(t=ie),this.instances.has(t)},t.prototype.getOptions=function(t){return void 0===t&&(t=ie),this.instancesOptions.get(t)||{}},t.prototype.initialize=function(t){var e,n;void 0===t&&(t={});var r=t.options,i=void 0===r?{}:r,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(this.name+"("+s+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var o=this.getOrInitializeService({instanceIdentifier:s,options:i});try{for(var a=Lt(this.instancesDeferred.entries()),c=a.next();!c.done;c=a.next()){var u=Pt(c.value,2),l=u[0],h=u[1];s===this.normalizeInstanceIdentifier(l)&&h.resolve(o)}}catch(t){e={error:t}}finally{try{c&&!c.done&&(n=a.return)&&n.call(a)}finally{if(e)throw e.error}}return o},t.prototype.onInit=function(t,e){var n,r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);var s=this.instances.get(r);return s&&t(s,r),function(){i.delete(t)}},t.prototype.invokeOnInitCallbacks=function(t,e){var n,r,i=this.onInitCallbacks.get(e);if(i)try{for(var s=Lt(i),o=s.next();!o.done;o=s.next()){var a=o.value;try{a(t,e)}catch(t){}}}catch(t){n={error:t}}finally{try{o&&!o.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}},t.prototype.getOrInitializeService=function(t){var e,n=t.instanceIdentifier,r=t.options,i=void 0===r?{}:r,s=this.instances.get(n);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:(e=n,e===ie?void 0:e),options:i}),this.instances.set(n,s),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(s,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,s)}catch(t){}return s||null},t.prototype.normalizeInstanceIdentifier=function(t){return void 0===t&&(t=ie),this.component?this.component.multipleInstances?t:ie:t},t.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},t}();
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
     */var oe,ae,ce=function(){function t(t){this.name=t,this.providers=new Map}return t.prototype.addComponent=function(t){var e=this.getProvider(t.name);if(e.isComponentSet())throw new Error("Component "+t.name+" has already been registered with "+this.name);e.setComponent(t)},t.prototype.addOrOverwriteComponent=function(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)},t.prototype.getProvider=function(t){if(this.providers.has(t))return this.providers.get(t);var e=new se(t,this);return this.providers.set(t,e),e},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}();
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
    ***************************************************************************** */function ue(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),i=0;for(e=0;e<n;e++)for(var s=arguments[e],o=0,a=s.length;o<a;o++,i++)r[i]=s[o];return r}
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
     */!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(ae||(ae={}));var le={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},he=ae.INFO,de=((oe={})[ae.DEBUG]="log",oe[ae.VERBOSE]="log",oe[ae.INFO]="info",oe[ae.WARN]="warn",oe[ae.ERROR]="error",oe),fe=function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!(e<t.logLevel)){var i=(new Date).toISOString(),s=de[e];if(!s)throw new Error("Attempted to log a message with an invalid logType (value: "+e+")");console[s].apply(console,ue(["["+i+"]  "+t.name+":"],n))}},pe=function(){function t(t){this.name=t,this._logLevel=he,this._logHandler=fe,this._userLogHandler=null}return Object.defineProperty(t.prototype,"logLevel",{get:function(){return this._logLevel},set:function(t){if(!(t in ae))throw new TypeError('Invalid value "'+t+'" assigned to `logLevel`');this._logLevel=t},enumerable:!1,configurable:!0}),t.prototype.setLogLevel=function(t){this._logLevel="string"==typeof t?le[t]:t},Object.defineProperty(t.prototype,"logHandler",{get:function(){return this._logHandler},set:function(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(t){this._userLogHandler=t},enumerable:!1,configurable:!0}),t.prototype.debug=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,ue([this,ae.DEBUG],t)),this._logHandler.apply(this,ue([this,ae.DEBUG],t))},t.prototype.log=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,ue([this,ae.VERBOSE],t)),this._logHandler.apply(this,ue([this,ae.VERBOSE],t))},t.prototype.info=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,ue([this,ae.INFO],t)),this._logHandler.apply(this,ue([this,ae.INFO],t))},t.prototype.warn=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,ue([this,ae.WARN],t)),this._logHandler.apply(this,ue([this,ae.WARN],t))},t.prototype.error=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,ue([this,ae.ERROR],t)),this._logHandler.apply(this,ue([this,ae.ERROR],t))},t}();
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
class me{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const ge="@firebase/app",ye=new pe("@firebase/app"),ve="[DEFAULT]",we={[ge]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},be=new Map,Ee=new Map;function Ie(t,e){try{t.container.addComponent(e)}catch(n){ye.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _e(t){const e=t.name;if(Ee.has(e))return ye.debug(`There were multiple attempts to register component ${e}.`),!1;Ee.set(e,t);for(const e of be.values())Ie(e,t);return!0}function Te(t,e){return t.container.getProvider(e)}
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
     */const Se=new Kt("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
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
class ke{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new re("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Se.create("app-deleted",{appName:this._name})}}
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
     */const Ae="9.0.0";function Ce(t="[DEFAULT]"){const e=be.get(t);if(!e)throw Se.create("no-app",{appName:t});return e}function Ne(t,e,n){var r;let i=null!==(r=we[t])&&void 0!==r?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const t=[`Unable to register library "${i}" with version "${e}":`];return s&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void ye.warn(t.join(" "))}_e(new re(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
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
     */var $e;_e(new re("platform-logger",(t=>new me(t)),"PRIVATE")),Ne(ge,"0.7.0",$e),Ne("fire-js","");
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
Ne("firebase","9.0.2","app");const Re=t=>void 0===t,De=t=>"function"==typeof t,xe=t=>"number"==typeof t;function Oe(){let t=0;return()=>t++}const Le="undefined"==typeof window;function Pe(t,e,n){return t.addEventListener(e,n),()=>t.removeEventListener(e,n)}const Me=[];function Ue(t,e){return{subscribe:Ve(t,e).subscribe}}function Ve(e,n=t){let r;const i=[];function s(t){if(a(e,t)&&(e=t,r)){const t=!Me.length;for(let t=0;t<i.length;t+=1){const n=i[t];n[1](),Me.push(n,e)}if(t){for(let t=0;t<Me.length;t+=2)Me[t][0](Me[t+1]);Me.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(o,a=t){const c=[o,a];return i.push(c),1===i.length&&(r=n(s)||t),o(e),()=>{const t=i.indexOf(c);-1!==t&&i.splice(t,1),0===i.length&&(r(),r=null)}}}}const Fe=t=>`@@svnav-ctx__${t}`,je=Fe("LOCATION"),Be=Fe("ROUTER"),qe=Fe("ROUTE"),ze=Fe("ROUTE_PARAMS"),He=Fe("FOCUS_ELEM"),Ke=/^:(.+)/,We=(t,e)=>t.substr(0,e.length)===e,Ge=t=>"*"===t[0],Ye=t=>t.replace(/(^\/+|\/+$)/g,"");function Je(t,e=!1){const n=Ye(t).split("/");return e?n.filter(Boolean):n}const Xe=(t,e)=>t+(e?`?${e}`:""),Qe=t=>`/${Ye(t)}`;function Ze(...t){const e=t.map((t=>Je(t,!0).join("/"))).join("/");return Qe(e)}const tn={1:"Link",2:"Route",3:"Router",4:"useFocus",5:"useLocation",6:"useMatch",7:"useNavigate",8:"useParams",9:"useResolvable",10:"useResolve",11:"navigate"},en=t=>tn[t];function nn(t,e,n,r){const i=n&&function(t,e){let n;return 2===t?n=e.path?`path="${e.path}"`:"default":1===t?n=`to="${e.to}"`:3===t&&(n=`basepath="${e.basepath||""}"`),`<${en(t)} ${n||""} />`}(r||t,n),s=i?`\n\nOccurred in: ${i}`:"",o=en(t);return`<${o}> ${De(e)?e(o):e}${s}`}const rn=t=>(...e)=>t(nn(...e)),sn=rn((t=>{throw new Error(t)})),on=rn(console.warn);function an(t,e){return{route:t,score:t.default?0:Je(t.fullPath).reduce(((t,e)=>{let n=t;return n+=4,(t=>""===t)(e)?n+=1:(t=>Ke.test(t))(e)?n+=2:Ge(e)?n-=5:n+=3,n}),0),index:e}}function cn(t,e){let n,r;const[i]=e.split("?"),s=Je(i),o=""===s[0],a=function(t){return t.map(an).sort(((t,e)=>t.score<e.score?1:t.score>e.score?-1:t.index-e.index))}(t);for(let t=0,i=a.length;t<i;t++){const{route:i}=a[t];let c=!1;const u={},l=t=>({...i,params:u,uri:t});if(i.default){r=l(e);continue}const h=Je(i.fullPath),d=Math.max(s.length,h.length);let f=0;for(;f<d;f++){const t=h[f],e=s[f];if(!Re(t)&&Ge(t)){const e="*"===t?"*":t.slice(1);u[e]=s.slice(f).map(decodeURIComponent).join("/");break}if(Re(e)){c=!0;break}const n=Ke.exec(t);if(n&&!o){const t=decodeURIComponent(e);u[n[1]]=t}else if(t!==e){c=!0;break}}if(!c){n=l(Ze(...s.slice(0,f)));break}}return n||r||null}function un(t,e){return cn([t],e)}function ln(t,e){const{pathname:n,hash:r="",search:i="",state:s}=t,o=Je(e,!0),a=Je(n,!0);for(;o.length;)o[0]!==a[0]&&sn(3,`Invalid state: All locations must begin with the basepath "${e}", found "${n}"`),o.shift(),a.shift();return{pathname:Ze(...a),hash:r,search:i,state:s}}const hn=t=>1===t.length?"":t;function dn(t){const e=t.indexOf("?"),n=t.indexOf("#"),r=-1!==e,i=-1!==n,s=i?hn(t.substr(n)):"",o=i?t.substr(0,n):t,a=r?hn(o.substr(e)):"";return{pathname:r?o.substr(0,e):o,search:a,hash:s}}function fn(t,e,n){return Ze(n,function(t,e){if(We(t,"/"))return t;const[n,r]=t.split("?"),[i]=e.split("?"),s=Je(n),o=Je(i);if(""===s[0])return Xe(i,r);if(!We(s[0],".")){const t=o.concat(s).join("/");return Xe(("/"===i?"":"/")+t,r)}const a=o.concat(s),c=[];return a.forEach((t=>{".."===t?c.pop():"."!==t&&c.push(t)})),Xe(`/${c.join("/")}`,r)}(t,e))}function pn(t,e){const n=Qe(t.replace(/\*.*$/,""));const r=Je(n,!0),i=un({fullPath:n},Ze(...Je(e,!0).slice(0,r.length)));return i&&i.uri}const mn="POP";function gn(t){return{...t.location,pathname:encodeURI(decodeURI(t.location.pathname)),state:t.history.state,_key:t.history.state&&t.history.state._key||"initial"}}function yn(t,e){return{...dn(e),state:t}}const vn=!(Le||!window.document||!window.document.createElement),wn=!Le&&"null"===window.location.origin,bn=function(t){let e=[],n=gn(t),r=mn;const i=(t=e)=>t.forEach((t=>t({location:n,action:r})));return{get location(){return n},listen(s){e.push(s);i([s]);const o=Pe(t,"popstate",(()=>{n=gn(t),r=mn,i([s])}));return()=>{o(),e=e.filter((t=>t!==s))}},navigate(e,s){const{state:o={},replace:a=!1}=s||{};if(r=a?"REPLACE":"PUSH",xe(e))s&&on(11,"Navigation options (state or replace) are not supported, when passing a number as the first argument to navigate. They are ignored."),r=mn,t.history.go(e);else{const n={...o,_key:Math.random().toString(36).substring(2)};try{t.history[a?"replaceState":"pushState"](n,"",e)}catch(n){t.location[a?"replace":"assign"](e)}}n=gn(t),i()}}}(vn&&!wn?window:function(t="/"){let e=0,n=[yn(null,t)];return{get entries(){return n},get location(){return n[e]},addEventListener(){},removeEventListener(){},history:{get state(){return n[e].state},pushState(t,r,i){e++,n=n.slice(0,e),n.push(yn(t,i))},replaceState(t,r,i){n[e]=yn(t,i)},go(t){const r=e+t;r<0||r>n.length-1||(e=r)}}}}()),{navigate:En}=bn;let In=null,_n=!0;function Tn(t){(!In||t.level>In.level||t.level===In.level&&function(t,e){const n=document.querySelectorAll("[data-svnav-router]");for(let r=0;r<n.length;r++){const i=n[r],s=Number(i.dataset.svnavRouter);if(s===t)return!0;if(s===e)return!1}return!1}(t.routerId,In.routerId))&&(In=t)}function Sn(t){if(!t)return!1;const e="tabindex";try{if(!t.hasAttribute(e)){let n;t.setAttribute(e,"-1");const r=()=>{t.removeAttribute(e),n()};n=Pe(t,"blur",r)}return t.focus(),document.activeElement===t}catch(t){return!1}}function kn(t,e){return Number(t.dataset.svnavRouteEnd)===e}function An(t,e=document){return e.querySelector(t)}function Cn(t){Promise.resolve(u(t.focusElement)).then((e=>{const n=e||function(t){let e=An(`[data-svnav-route-start="${t}"]`).nextElementSibling;for(;!kn(e,t);){if(/^H[1-6]$/i.test(e.tagName))return e;const t=An("h1,h2,h3,h4,h5,h6",e);if(t)return t;e=e.nextElementSibling}return null}(t.id);n||on(3,'Could not find an element to focus. You should always render a header for accessibility reasons, or set a custom focus element via the "useFocus" hook. If you don\'t want this Route or Router to manage focus, pass "primary={false}" to it.',t,2);Sn(n)||Sn(document.documentElement)}))}const Nn=(t,e,n)=>(r,i)=>(st(),rt).then((()=>{if(In&&!_n){if(r&&Cn(In.route),t.announcements&&i){const{path:r,fullPath:i,meta:s,params:o,uri:a}=In.route,c=t.createAnnouncement({path:r,fullPath:i,meta:s,params:o,uri:a},u(n));Promise.resolve(c).then((t=>{e.set(t)}))}In=null}else _n=!1}));function $n(t){let e,n,r,i,s;const o=t[20].default,a=h(o,t,t[19],null);let c=t[2]&&t[4]&&t[1].announcements&&function(t){let e,n;return{c(){e=A("div"),n=C(t[0]),O(e,"role","status"),O(e,"aria-atomic","true"),O(e,"aria-live","polite"),O(e,"style","position:fixed;top:-1px;left:0;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;")},m(t,r){S(t,e,r),T(e,n)},p(t,e){1&e[0]&&M(n,t[0])},d(t){t&&k(e)}}}(t);return{c(){e=A("div"),n=N(),a&&a.c(),r=N(),c&&c.c(),i=$(),V(e,"display","none"),O(e,"aria-hidden","true"),O(e,"data-svnav-router",t[3])},m(t,o){S(t,e,o),S(t,n,o),a&&a.m(t,o),S(t,r,o),c&&c.m(t,o),S(t,i,o),s=!0},p(t,e){a&&a.p&&(!s||524288&e[0])&&f(a,o,t,t[19],s?e:[-1,-1],null,null),t[2]&&t[4]&&t[1].announcements&&c.p(t,e)},i(t){s||(vt(a,t),s=!0)},o(t){wt(a,t),s=!1},d(t){t&&k(e),t&&k(n),a&&a.d(t),t&&k(r),c&&c.d(t),t&&k(i)}}}const Rn=Oe(),Dn="/";function xn(t,e,n){let r,i,s,o,a,{$$slots:c={},$$scope:u}=e,{basepath:h=Dn}=e,{url:d=null}=e,{history:f=bn}=e,{primary:p=!0}=e,{a11y:m={}}=e;const g={createAnnouncement:t=>`Navigated to ${t.uri}`,announcements:!0,...m},y=h,v=Qe(h),w=Q(je),b=Q(Be),E=!w,I=Rn(),_=p&&!(b&&!b.manageFocus),T=Ve("");l(t,T,(t=>n(0,a=t)));const S=Ve([]);l(t,S,(t=>n(16,i=t)));const k=Ve(null);l(t,k,(t=>n(18,o=t)));let A=!1;const C=E?0:b.level+1,N=E?Ve(ln(Le?dn(d):f.location,v)):w;l(t,N,(t=>n(15,r=t)));const $=Ve(r);l(t,$,(t=>n(17,s=t)));const R=Nn(g,T,N),D=t=>e=>e.filter((e=>e.id!==t));return E||h===Dn||on(3,'Only top-level Routers can have a "basepath" prop. It is ignored.',{basepath:h}),E&&(G((()=>f.listen((t=>{const e=ln(t.location,v);$.set(r),N.set(e)})))),X(je,N)),X(Be,{activeRoute:k,registerRoute:function(t){if(Le){if(A)return;const e=un(t,r.pathname);if(e)return A=!0,e}else S.update((e=>{const n=D(t.id)(e);return n.push(t),n}))},unregisterRoute:function(t){S.update(D(t))},manageFocus:_,level:C,id:I,history:E?f:b.history,basepath:E?v:b.basepath}),t.$$set=t=>{"basepath"in t&&n(10,h=t.basepath),"url"in t&&n(11,d=t.url),"history"in t&&n(12,f=t.history),"primary"in t&&n(13,p=t.primary),"a11y"in t&&n(14,m=t.a11y),"$$scope"in t&&n(19,u=t.$$scope)},t.$$.update=()=>{if(1024&t.$$.dirty[0]&&h!==y&&on(3,'You cannot change the "basepath" prop. It is ignored.'),98304&t.$$.dirty[0]){const t=cn(i,r.pathname);k.set(t)}if(163840&t.$$.dirty[0]&&E){const t=!!r.hash,e=!t&&_,n=!t||r.pathname!==s.pathname;R(e,n)}262144&t.$$.dirty[0]&&_&&o&&o.primary&&Tn({level:C,routerId:I,route:o})},[a,g,E,I,_,T,S,k,N,$,h,d,f,p,m,r,i,s,o,u,c]}class On extends $t{constructor(t){super(),Nt(this,t,xn,$n,a,{basepath:10,url:11,history:12,primary:13,a11y:14},[-1,-1])}}function Ln(t,e,n=Be,r=3){Q(n)||sn(t,(t=>`You cannot use ${t} outside of a ${en(r)}.`),e)}function Pn(){return Ln(5),(t=>{const{subscribe:e}=Q(t);return{subscribe:e}})(je)}function Mn(){const{history:t}=Q(Be);return t}function Un(){const e=Q(qe);return e?function(e,n,r){const i=!Array.isArray(e),a=i?[e]:e,u=n.length<2;return Ue(r,(e=>{let r=!1;const l=[];let h=0,d=t;const f=()=>{if(h)return;d();const r=n(i?l[0]:l,e);u?e(r):d=o(r)?r:t},p=a.map(((t,e)=>c(t,(t=>{l[e]=t,h&=~(1<<e),r&&f()}),(()=>{h|=1<<e}))));return r=!0,f(),function(){s(p),d()}}))}(e,(t=>t.base)):Ve("/")}function Vn(){Ln(10);const t=Un(),{basepath:e}=Q(Be);return n=>fn(n,u(t),e)}const Fn=t=>({params:16&t,location:4&t}),jn=t=>({params:Le?u(t[9]):t[4],location:t[2],navigate:t[10]});function Bn(t){let e,n;return e=new On({props:{primary:t[1],$$slots:{default:[Hn]},$$scope:{ctx:t}}}),{c(){kt(e.$$.fragment)},m(t,r){At(e,t,r),n=!0},p(t,n){const r={};2&n&&(r.primary=t[1]),264213&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){n||(vt(e.$$.fragment,t),n=!0)},o(t){wt(e.$$.fragment,t),n=!1},d(t){Ct(e,t)}}}function qn(t){let e;const n=t[17].default,r=h(n,t,t[18],jn);return{c(){r&&r.c()},m(t,n){r&&r.m(t,n),e=!0},p(t,i){r&&r.p&&(!e||262164&i)&&f(r,n,t,t[18],e?i:-1,Fn,jn)},i(t){e||(vt(r,t),e=!0)},o(t){wt(r,t),e=!1},d(t){r&&r.d(t)}}}function zn(t){let e,r,i;const s=[{location:t[2]},{navigate:t[10]},Le?u(t[9]):t[4],t[11]];var o=t[0];function a(t){let e={};for(let t=0;t<s.length;t+=1)e=n(e,s[t]);return{props:e}}return o&&(e=new o(a())),{c(){e&&kt(e.$$.fragment),r=$()},m(t,n){e&&At(e,t,n),S(t,r,n),i=!0},p(t,n){const i=3604&n?Tt(s,[4&n&&{location:t[2]},1024&n&&{navigate:t[10]},528&n&&St(Le?u(t[9]):t[4]),2048&n&&St(t[11])]):{};if(o!==(o=t[0])){if(e){gt();const t=e;wt(t.$$.fragment,1,0,(()=>{Ct(t,1)})),yt()}o?(e=new o(a()),kt(e.$$.fragment),vt(e.$$.fragment,1),At(e,r.parentNode,r)):e=null}else o&&e.$set(i)},i(t){i||(e&&vt(e.$$.fragment,t),i=!0)},o(t){e&&wt(e.$$.fragment,t),i=!1},d(t){t&&k(r),e&&Ct(e,t)}}}function Hn(t){let e,n,r,i;const s=[zn,qn],o=[];function a(t,e){return null!==t[0]?0:1}return e=a(t),n=o[e]=s[e](t),{c(){n.c(),r=$()},m(t,n){o[e].m(t,n),S(t,r,n),i=!0},p(t,i){let c=e;e=a(t),e===c?o[e].p(t,i):(gt(),wt(o[c],1,1,(()=>{o[c]=null})),yt(),n=o[e],n?n.p(t,i):(n=o[e]=s[e](t),n.c()),vt(n,1),n.m(r.parentNode,r))},i(t){i||(vt(n),i=!0)},o(t){wt(n),i=!1},d(t){o[e].d(t),t&&k(r)}}}function Kn(t){let e,n,r,i,s,o=t[3]&&Bn(t);return{c(){e=A("div"),n=N(),o&&o.c(),r=N(),i=A("div"),V(e,"display","none"),O(e,"aria-hidden","true"),O(e,"data-svnav-route-start",t[5]),V(i,"display","none"),O(i,"aria-hidden","true"),O(i,"data-svnav-route-end",t[5])},m(t,a){S(t,e,a),S(t,n,a),o&&o.m(t,a),S(t,r,a),S(t,i,a),s=!0},p(t,[e]){t[3]?o?(o.p(t,e),8&e&&vt(o,1)):(o=Bn(t),o.c(),vt(o,1),o.m(r.parentNode,r)):o&&(gt(),wt(o,1,1,(()=>{o=null})),yt())},i(t){s||(vt(o),s=!0)},o(t){wt(o),s=!1},d(t){t&&k(e),t&&k(n),o&&o.d(t),t&&k(r),t&&k(i)}}}const Wn=Oe();function Gn(t,e,r){let i;const s=["path","component","meta","primary"];let o,a,c,u,h=m(e,s),{$$slots:d={},$$scope:f}=e,{path:g=""}=e,{component:y=null}=e,{meta:v={}}=e,{primary:w=!0}=e;Ln(2,e);const b=Wn(),{registerRoute:E,unregisterRoute:I,activeRoute:_}=Q(Be);l(t,_,(t=>r(16,c=t)));const T=Un();l(t,T,(t=>r(15,o=t)));const S=Pn();l(t,S,(t=>r(2,a=t)));const k=Ve(null);let A;const C=Ve(),N=Ve({});l(t,N,(t=>r(4,u=t))),X(qe,C),X(ze,N),X(He,k);const $=function(){Ln(7);const t=Vn(),{navigate:e}=Mn();return(n,r)=>{const i=xe(n)?n:t(n);return e(i,r)}}();return Le||Y((()=>I(b))),t.$$set=t=>{r(23,e=n(n({},e),p(t))),r(11,h=m(e,s)),"path"in t&&r(12,g=t.path),"component"in t&&r(0,y=t.component),"meta"in t&&r(13,v=t.meta),"primary"in t&&r(1,w=t.primary),"$$scope"in t&&r(18,f=t.$$scope)},t.$$.update=()=>{if(45062&t.$$.dirty){const t=""===g,e=Ze(o,g),n={id:b,path:g,meta:v,default:t,fullPath:t?"":e,base:t?o:pn(e,a.pathname),primary:w,focusElement:k};C.set(n),r(14,A=E(n))}if(81920&t.$$.dirty&&r(3,i=!!(A||c&&c.id===b)),81928&t.$$.dirty&&i){const{params:t}=A||c;N.set(t)}},e=p(e),[y,w,a,i,u,b,_,T,S,N,$,h,g,v,A,o,c,d,f]}class Yn extends $t{constructor(t){super(),Nt(this,t,Gn,Kn,a,{path:12,component:0,meta:13,primary:1})}}function Jn(t){let e,r,i,s;const o=t[13].default,a=h(o,t,t[12],null);let c=[{href:t[0]},t[1],t[2]],u={};for(let t=0;t<c.length;t+=1)u=n(u,c[t]);return{c(){e=A("a"),a&&a.c(),L(e,u)},m(n,o){S(n,e,o),a&&a.m(e,null),r=!0,i||(s=R(e,"click",t[4]),i=!0)},p(t,[n]){a&&a.p&&(!r||4096&n)&&f(a,o,t,t[12],r?n:-1,null,null),L(e,u=Tt(c,[(!r||1&n)&&{href:t[0]},2&n&&t[1],4&n&&t[2]]))},i(t){r||(vt(a,t),r=!0)},o(t){wt(a,t),r=!1},d(t){t&&k(e),a&&a.d(t),i=!1,s()}}}function Xn(t,e,r){let i,s,o,a,c;const u=["to","replace","state","getProps"];let h,d=m(e,u),{$$slots:f={},$$scope:g}=e,{to:y}=e,{replace:v=!1}=e,{state:w={}}=e,{getProps:b=null}=e;Ln(1,e);const E=Pn();l(t,E,(t=>r(9,h=t)));const I=J(),_=Vn(),{navigate:T}=Mn();return t.$$set=t=>{r(17,e=n(n({},e),p(t))),r(18,d=m(e,u)),"to"in t&&r(5,y=t.to),"replace"in t&&r(6,v=t.replace),"state"in t&&r(7,w=t.state),"getProps"in t&&r(8,b=t.getProps),"$$scope"in t&&r(12,g=t.$$scope)},t.$$.update=()=>{544&t.$$.dirty&&r(0,i=_(y,h)),513&t.$$.dirty&&r(10,s=We(h.pathname,i)),513&t.$$.dirty&&r(11,o=i===h.pathname),2048&t.$$.dirty&&r(1,a=o?{"aria-current":"page"}:{}),r(2,c=(()=>{if(De(b)){const t=b({location:h,href:i,isPartiallyCurrent:s,isCurrent:o});return{...d,...t}}return d})())},e=p(e),[i,a,c,E,function(t){if(I("click",t),function(t){return!t.defaultPrevented&&0===t.button&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t)){t.preventDefault();T(i,{state:w,replace:o||v})}},y,v,w,b,h,s,o,g,f]}class Qn extends $t{constructor(t){super(),Nt(this,t,Xn,Jn,a,{to:5,replace:6,state:7,getProps:8})}}function Zn(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tr=Zn,er=new Kt("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),nr=new pe("@firebase/auth");function rr(t,...e){nr.logLevel<=ae.ERROR&&nr.error(`Auth (9.0.0): ${t}`,...e)}
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
     */function ir(t,...e){throw or(t,...e)}function sr(t,...e){return or(t,...e)}function or(t,...e){if("string"!=typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return er.create(t,...e)}function ar(t,e,...n){if(!t)throw or(e,...n)}function cr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw rr(e),new Error(e)}function ur(t,e){t||cr(e)}
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
     */const lr=new Map;function hr(t){ur(t instanceof Function,"Expected a class definition");let e=lr.get(t);return e?(ur(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,lr.set(t,e),e)}
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
     */function dr(t,e){const n=Te(t,"auth");if(n.isInitialized()){const t=n.getImmediate();if(Yt(n.getOptions(),null!=e?e:{}))return t;ir(t,"already-initialized")}return n.initialize({options:e})}
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
function fr(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function pr(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
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
     */function mr(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==pr()&&"https:"!==pr()&&!Bt()&&!("connection"in navigator)||navigator.onLine}
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
class gr{constructor(t,e){this.shortDelay=t,this.longDelay=e,ur(e>t,"Short delay should be less than long delay!"),this.isMobile=jt()||qt()}get(){return mr()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
     */function yr(t,e){ur(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
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
     */class vr{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void cr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void cr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void cr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
     */const wr={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},br=new gr(3e4,6e4);
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
     */function Er(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ir(t,e,n,r,i={}){return _r(t,i,(()=>{let i={},s={};r&&("GET"===e?s=r:i={body:JSON.stringify(r)});const o=Xt(Object.assign({key:t.config.apiKey},s)).slice(1),a=new(vr.headers());return a.set("Content-Type","application/json"),a.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&a.set("X-Firebase-Locale",t.languageCode),vr.fetch()(Sr(t,t.config.apiHost,n,o),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},i))}))}async function _r(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},wr),e);try{const e=new kr(t),i=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw Ar(t,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const e=i.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Ar(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Ar(t,"email-already-in-use",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw function(t,e,n){const r=Object.assign(Object.assign({},tr()),{[e]:n});return new Kt("auth","Firebase",r).create(e,{appName:t.name})}(t,a,o);ir(t,a)}}catch(e){if(e instanceof Ht)throw e;ir(t,"network-request-failed")}}async function Tr(t,e,n,r,i={}){const s=await Ir(t,e,n,r,i);return"mfaPendingCredential"in s&&ir(t,"multi-factor-auth-required",{serverResponse:s}),s}function Sr(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?yr(t.config,i):`${t.config.apiScheme}://${i}`}class kr{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(sr(this.auth,"timeout"))),br.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ar(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=sr(t,e,r);return i.customData._tokenResponse=n,i}
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
function Cr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(t){}}function Nr(t){return 1e3*Number(t)}function $r(t){const[e,n,r]=t.split(".");if(void 0===e||void 0===n||void 0===r)return rr("JWT malformed, contained fewer than 3 sections"),null;try{const t=function(t){try{return Ut.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null}(n);return t?JSON.parse(t):(rr("Failed to decode base64 JWT payload"),null)}catch(t){return rr("Caught error parsing JWT payload as JSON",t),null}}
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
async function Rr(t,e,n=!1){if(n)return e;try{return await e}catch(e){throw e instanceof Ht&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
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
     */(e)&&t.auth.currentUser===t&&await t.auth.signOut(),e}}class Dr{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===t.code&&this.schedule(!0))}this.schedule()}}
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
     */class xr{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Cr(this.lastLoginAt),this.creationTime=Cr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
     */async function Or(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Rr(t,async function(t,e){return Ir(t,"POST","/v1/accounts:lookup",e)}(n,{idToken:r}));ar(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?s.providerUserInfo.map((t=>{var{providerId:e}=t,n=Dt(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=t.providerData,u=o,[...c.filter((t=>!u.some((e=>e.providerId===t.providerId)))),...u]);var c,u;const l=t.isAnonymous,h=!(t.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!l&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new xr(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}
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
class Lr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){ar(t.idToken,"internal-error"),ar(void 0!==t.idToken,"internal-error"),ar(void 0!==t.refreshToken,"internal-error");const e="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):function(t){const e=$r(t);return ar(e,"internal-error"),ar(void 0!==e.exp,"internal-error"),ar(void 0!==e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return ar(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await
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
async function(t,e){const n=await _r(t,{},(()=>{const n=Xt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,s=Sr(t,r,"/v1/token",`key=${i}`);return vr.fetch()(s,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,s=new Lr;return n&&(ar("string"==typeof n,"internal-error",{appName:t}),s.refreshToken=n),r&&(ar("string"==typeof r,"internal-error",{appName:t}),s.accessToken=r),i&&(ar("number"==typeof i,"internal-error",{appName:t}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Lr,this.toJSON())}_performRefresh(){return cr("not implemented")}}
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
     */function Pr(t,e){ar("string"==typeof t||void 0===t,"internal-error",{appName:e})}class Mr{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=Dt(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new Dr(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.metadata=new xr(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await Rr(this,this.stsTokenManager.getToken(this.auth,t));return ar(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return async function(t,e=!1){const n=ne(t),r=await n.getIdToken(e),i=$r(r);ar(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Cr(Nr(i.auth_time)),issuedAtTime:Cr(Nr(i.iat)),expirationTime:Cr(Nr(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const e=ne(t);await Or(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}(this)}_assign(t){this!==t&&(ar(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new Mr(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){ar(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Or(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Rr(this,async function(t,e){return Ir(t,"POST","/v1/accounts:delete",e)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,s,o,a,c,u;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,d=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:b,providerData:E,stsTokenManager:I}=e;ar(v&&I,t,"internal-error");const _=Lr.fromJSON(this.name,I);ar("string"==typeof v,t,"internal-error"),Pr(l,t.name),Pr(h,t.name),ar("boolean"==typeof w,t,"internal-error"),ar("boolean"==typeof b,t,"internal-error"),Pr(d,t.name),Pr(f,t.name),Pr(p,t.name),Pr(m,t.name),Pr(g,t.name),Pr(y,t.name);const T=new Mr({uid:v,auth:t,email:h,emailVerified:w,displayName:l,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:_,createdAt:g,lastLoginAt:y});return E&&Array.isArray(E)&&(T.providerData=E.map((t=>Object.assign({},t)))),m&&(T._redirectEventId=m),T}static async _fromIdTokenResponse(t,e,n=!1){const r=new Lr;r.updateFromServerResponse(e);const i=new Mr({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await Or(i),i}}
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
     */class Ur{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}Ur.type="NONE";const Vr=Ur;
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
     */function Fr(t,e,n){return`firebase:${t}:${e}:${n}`}class jr{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=Fr(this.userKey,r.apiKey,i),this.fullPersistenceKey=Fr("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Mr._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new jr(hr(Vr),t,n);const r=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let i=r[0]||hr(Vr);const s=Fr(n,t.config.apiKey,t.name);let o=null;for(const n of e)try{const e=await n._get(s);if(e){const r=Mr._fromJSON(t,e);n!==i&&(o=r),i=n;break}}catch(t){}const a=r.filter((t=>t._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==i)try{await t._remove(s)}catch(t){}}))),new jr(i,t,n)):new jr(i,t,n)}}
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
     */function Br(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Kr(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qr(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Gr(e))return"Blackberry";if(Yr(e))return"Webos";if(zr(e))return"Safari";if((e.includes("chrome/")||Hr(e))&&!e.includes("edge/"))return"Chrome";if(Wr(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function qr(t=Ft()){return/firefox\//i.test(t)}function zr(t=Ft()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Hr(t=Ft()){return/crios\//i.test(t)}function Kr(t=Ft()){return/iemobile/i.test(t)}function Wr(t=Ft()){return/android/i.test(t)}function Gr(t=Ft()){return/blackberry/i.test(t)}function Yr(t=Ft()){return/webos/i.test(t)}function Jr(t=Ft()){return/iphone|ipad|ipod/i.test(t)}function Xr(t=Ft()){return Jr(t)||Wr(t)||Yr(t)||Gr(t)||/windows phone/i.test(t)||Kr(t)}
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
function Qr(t,e=[]){let n;switch(t){case"Browser":n=Br(Ft());break;case"Worker":n=`${Br(Ft())}-${t}`;break;default:n=t}return`${n}/JsCore/9.0.0/${e.length?e.join(","):"FirebaseCore-web"}`}
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
     */class Zr{constructor(t,e){this.app=t,this.config=e,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ei(this),this.idTokenSubscription=new ei(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=er,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=e.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=hr(e)),this._initializationPromise=this.queue((async()=>{var n;this._deleted||(this.persistenceManager=await jr.create(this,t),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(e),this._deleted||(this._isInitialized=!0)))})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t):void 0}async initializeCurrentUser(t){var e;let n=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,i=null==n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(t);r&&r!==i||!(null==s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(ar(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(t){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Or(t)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?ne(t):null;return e&&ar(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&ar(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(hr(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Kt("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&hr(t)||this._popupRedirectResolver;ar(e,this,"argument-error"),this.redirectPersistenceManager=await jr.create(this,[hr(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"==typeof e?e:e.next.bind(e),s=this._isInitialized?Promise.resolve():this._initializationPromise;return ar(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof e?t.addObserver(e,n,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return ar(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Qr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function ti(t){return ne(t)}class ei{constructor(t){var e,n;this.auth=t,this.observer=null,this.addObserver=(n=new te((t=>this.observer=t),e)).subscribe.bind(n)}get next(){return ar(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
     */class ni{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return cr("not implemented")}_getIdTokenResponse(t){return cr("not implemented")}_linkToIdToken(t,e){return cr("not implemented")}_getReauthenticationResolver(t){return cr("not implemented")}}async function ri(t,e){return async function(t,e){return Ir(t,"POST","/v1/accounts:sendOobCode",Er(t,e))}(t,e)}
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
class ii extends ni{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new ii(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new ii(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t;if((null==e?void 0:e.email)&&(null==e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":
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
return async function(t,e){return Tr(t,"POST","/v1/accounts:signInWithPassword",Er(t,e))}(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(t,e){return Tr(t,"POST","/v1/accounts:signInWithEmailLink",Er(t,e))}(t,{email:this._email,oobCode:this._password});default:ir(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return async function(t,e){return Ir(t,"POST","/v1/accounts:update",e)}(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(t,e){return Tr(t,"POST","/v1/accounts:signInWithEmailLink",Er(t,e))}(t,{idToken:e,email:this._email,oobCode:this._password});default:ir(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
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
     */async function si(t,e){return Tr(t,"POST","/v1/accounts:signInWithIdp",Er(t,e))}
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
     */class oi extends ni{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new oi(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):ir("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=Dt(e,["providerId","signInMethod"]);if(!n||!r)return null;const s=new oi(n,r);return Object.assign(s,i),s}_getIdTokenResponse(t){return si(t,this.buildRequest())}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,si(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,si(t,e)}buildRequest(){const t={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=Xt(e)}return t}}
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
     */class ai{constructor(t){var e,n,r,i,s,o;const a=Qt(Zt(t)),c=null!==(e=a.apiKey)&&void 0!==e?e:null,u=null!==(n=a.oobCode)&&void 0!==n?n:null,l=function(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);ar(c&&u&&l,"argument-error"),this.apiKey=c,this.operation=l,this.code=u,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(t){const e=function(t){const e=Qt(Zt(t)).link,n=e?Qt(Zt(e)).deep_link_id:null,r=Qt(Zt(t)).deep_link_id;return(r?Qt(Zt(r)).link:null)||r||n||e||t}(t);try{return new ai(e)}catch(t){return null}}}
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
     */class ci{constructor(){this.providerId=ci.PROVIDER_ID}static credential(t,e){return ii._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=ai.parseLink(e);return ar(n,"argument-error"),ii._fromEmailAndCode(t,n.code,n.tenantId)}}ci.PROVIDER_ID="password",ci.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ci.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class ui{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
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
     */class li extends ui{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
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
     */class hi extends li{constructor(){super("facebook.com")}static credential(t){return oi._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return hi.credentialFromTaggedObject(t)}static credentialFromError(t){return hi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return hi.credential(t.oauthAccessToken)}catch(t){return null}}}hi.FACEBOOK_SIGN_IN_METHOD="facebook.com",hi.PROVIDER_ID="facebook.com";
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
class di extends li{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return oi._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return di.credentialFromTaggedObject(t)}static credentialFromError(t){return di.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return di.credential(e,n)}catch(t){return null}}}di.GOOGLE_SIGN_IN_METHOD="google.com",di.PROVIDER_ID="google.com";
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
class fi extends li{constructor(){super("github.com")}static credential(t){return oi._fromParams({providerId:fi.PROVIDER_ID,signInMethod:fi.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return fi.credentialFromTaggedObject(t)}static credentialFromError(t){return fi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return fi.credential(t.oauthAccessToken)}catch(t){return null}}}fi.GITHUB_SIGN_IN_METHOD="github.com",fi.PROVIDER_ID="github.com";
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
class pi extends li{constructor(){super("twitter.com")}static credential(t,e){return oi._fromParams({providerId:pi.PROVIDER_ID,signInMethod:pi.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return pi.credentialFromTaggedObject(t)}static credentialFromError(t){return pi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return pi.credential(e,n)}catch(t){return null}}}pi.TWITTER_SIGN_IN_METHOD="twitter.com",pi.PROVIDER_ID="twitter.com";
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
class mi{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const i=await Mr._fromIdTokenResponse(t,n,r),s=gi(n);return new mi({user:i,providerId:s,_tokenResponse:n,operationType:e})}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=gi(n);return new mi({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function gi(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
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
     */class yi extends Ht{constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,this.name="FirebaseError",Object.setPrototypeOf(this,yi.prototype),this.appName=t.name,this.code=e.code,this.tenantId=null!==(i=t.tenantId)&&void 0!==i?i:void 0,this.serverResponse=e.customData.serverResponse}static _fromErrorAndOperation(t,e,n,r){return new yi(t,e,n,r)}}function vi(t,e,n,r){return("reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw yi._fromErrorAndOperation(t,n,e,r);throw n}))}
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
async function wi(t,e,n=!1){const r="signIn",i=await vi(t,r,e),s=await mi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function bi(t,e,n){const r=ti(t),i=await
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
async function(t,e){return Tr(t,"POST","/v1/accounts:signUp",Er(t,e))}(r,{returnSecureToken:!0,email:e,password:n}),s=await mi._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function Ei(t,e,n){return async function(t,e){return wi(ti(t),e)}
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
     */(ne(t),ci.credential(e,n))}async function Ii(t,e){const n=ne(t),r={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&function(t,e,n){var r;ar((null===(r=n.url)||void 0===r?void 0:r.length)>0,t,"invalid-continue-uri"),ar(void 0===n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(ar(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iosBundleId=n.iOS.bundleId),n.android&&(ar(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}(n.auth,r,e);const{email:i}=await ri(n.auth,r);i!==t.email&&await t.reload()}const _i="__sak";
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
     */class Ti{constructor(t,e){this.storage=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(_i,"1"),this.storage.removeItem(_i),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}}
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
     */class Si extends Ti{constructor(){super(window.localStorage,"LOCAL"),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const t=Ft();return zr(t)||Jr(t)}()&&function(){try{return!(!window||window===window.top)}catch(t){return!1}}(),this.fallbackToPolling=Xr(),this._shouldAllowMigration=!0,this.boundEventHandler=this.onStorageEvent.bind(this)}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);zt()&&10===document.documentMode&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,10):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}Si.type="LOCAL";const ki=Si;
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
     */class Ai extends Ti{constructor(){super(window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Ai.type="SESSION";const Ci=Ai;
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
class Ni{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new Ni(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async t=>t(e.origin,i))),a=await function(t){return Promise.all(t.map((async t=>{try{return{fulfilled:!0,value:await t}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function $i(t="",e=10){let n="";for(let t=0;t<e;t++)n+=Math.floor(10*Math.random());return t+n}
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
     */Ni.receivers=[];class Ri{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=$i("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(e.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
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
     */function Di(){return window}
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
function xi(){return void 0!==Di().WorkerGlobalScope&&"function"==typeof Di().importScripts}
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
const Oi="firebaseLocalStorageDb",Li="firebaseLocalStorage",Pi="fbase_key";class Mi{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function Ui(t,e){return t.transaction([Li],e?"readwrite":"readonly").objectStore(Li)}function Vi(){const t=indexedDB.open(Oi,1);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(Li,{keyPath:Pi})}catch(t){n(t)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(Li)?e(n):(n.close(),await function(){const t=indexedDB.deleteDatabase(Oi);return new Mi(t).toPromise()}(),e(await Vi()))}))}))}async function Fi(t,e,n){const r=Ui(t,!0).put({[Pi]:e,value:n});return new Mi(r).toPromise()}function ji(t,e){const n=Ui(t,!0).delete(e);return new Mi(n).toPromise()}class Bi{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Vi()),this.db}async _withRetries(t){let e=0;for(;;)try{const e=await this._openDb();return await t(e)}catch(t){if(e++>3)throw t;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xi()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ni._getInstance(xi()?self:null),this.receiver._subscribe("keyChanged",(async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)}))),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}(),!this.activeServiceWorker)return;this.sender=new Ri(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&function(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Vi();return await Fi(t,_i,"1"),await ji(t,_i),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>Fi(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>async function(t,e){const n=Ui(t,!1).get(e),r=await new Mi(n).toPromise();return void 0===r?null:r.value}(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>ji(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=Ui(t,!1).getAll();return new Mi(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const t of Object.keys(this.localCache))this.localCache[t]&&!n.has(t)&&(this.notifyListeners(t,null),e.push(t));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Bi.type="LOCAL";const qi=Bi;
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
     */function zi(t){return new Promise(((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=sr("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",function(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}().appendChild(r)}))}new gr(3e4,6e4);
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
class Hi extends ni{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return si(t,this._buildIdpRequest())}_linkToIdToken(t,e){return si(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return si(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function Ki(t){return wi(t.auth,new Hi(t),t.bypassAuthState)}function Wi(t){const{auth:e,user:n}=t;return ar(n,e,"internal-error"),
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
async function(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Rr(t,vi(r,i,e,t),n);ar(s.idToken,r,"internal-error");const o=$r(s.idToken);ar(o,r,"internal-error");const{sub:a}=o;return ar(t.uid===a,r,"user-mismatch"),mi._forOperation(t,i,s)}catch(t){throw"auth/user-not-found"===(null==t?void 0:t.code)&&ir(r,"user-mismatch"),t}}(n,new Hi(t),t.bypassAuthState)}async function Gi(t){const{auth:e,user:n}=t;return ar(n,e,"internal-error"),async function(t,e,n=!1){const r=await Rr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return mi._forOperation(t,"link",r)}(n,new Hi(t),t.bypassAuthState)}
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
     */class Yi{constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(t){this.reject(t)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Ki;case"linkViaPopup":case"linkViaRedirect":return Gi;case"reauthViaPopup":case"reauthViaRedirect":return Wi;default:ir(this.auth,"internal-error")}}resolve(t){ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
     */const Ji=new gr(2e3,1e4);class Xi extends Yi{constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Xi.currentPopupAction&&Xi.currentPopupAction.cancel(),Xi.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return ar(t,this.auth,"internal-error"),t}async onExecution(){ur(1===this.filter.length,"Popup operations only handle one event");const t=$i();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(sr(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(sr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xi.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(sr(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,Ji.get())};t()}}Xi.currentPopupAction=null;
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
const Qi="pendingRedirect",Zi=new Map;class ts extends Yi{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=Zi.get(this.auth._key());if(!t){try{const e=await async function(t,e){const n=function(t){return Fr(Qi,t.config.apiKey,t.name)}(e),r="true"===await es(t)._get(n);return await es(t)._remove(n),r}(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(e)}catch(e){t=()=>Promise.reject(e)}Zi.set(this.auth._key(),t)}return t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function es(t){return hr(t._redirectPersistence)}async function ns(t,e,n=!1){const r=ti(t),i=
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
     */
function(t,e){return e?hr(e):(ar(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}(r,e),s=new ts(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}
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
     */class rs{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!function(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ss(t);default:return!1}}
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
     */(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!ss(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(sr(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(is(t))}saveEventToCache(t){this.cachedEventUids.add(is(t)),this.lastProcessedEventTime=Date.now()}}function is(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function ss({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null==e?void 0:e.code)}
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
const os=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,as=/^https?/;async function cs(t){if(t.config.emulator)return;const{authorizedDomains:e}=await async function(t,e={}){return Ir(t,"GET","/v1/projects",e)}(t);for(const t of e)try{if(us(t))return}catch(t){}ir(t,"unauthorized-domain")}function us(t){const e=fr(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!as.test(n))return!1;if(os.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
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
     */const ls=new gr(3e4,6e4);function hs(){const t=Di().___jsl;if(null==t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let e=0;e<t.CP.length;e++)t.CP[e]=null}function ds(t){return new Promise(((e,n)=>{var r,i,s;function o(){hs(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hs(),n(sr(t,"network-request-failed"))},timeout:ls.get()})}if(null===(i=null===(r=Di().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=Di().gapi)||void 0===s?void 0:s.load)){const e=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return Di()[e]=()=>{gapi.load?o():n(sr(t,"network-request-failed"))},zi(`https://apis.google.com/js/api.js?onload=${e}`)}o()}})).catch((t=>{throw fs=null,t}))}let fs=null;
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
const ps=new gr(5e3,15e3),ms={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},gs=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ys(t){const e=t.config;ar(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?yr(e,"emulator/auth/iframe"):`https://${t.config.authDomain}/__/auth/iframe`,r={apiKey:e.apiKey,appName:t.name,v:Ae},i=gs.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Xt(r).slice(1)}`}async function vs(t){const e=await function(t){return fs=fs||ds(t),fs}(t),n=Di().gapi;return ar(n,t,"internal-error"),e.open({where:document.body,url:ys(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ms,dontclear:!0},(e=>new Promise((async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=sr(t,"network-request-failed"),s=Di().setTimeout((()=>{r(i)}),ps.get());function o(){Di().clearTimeout(s),n(e)}e.ping(o).then(o,(()=>{r(i)}))}))))}
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
     */const ws={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class bs{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function Es(t,e,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},ws),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ft().toLowerCase();n&&(a=Hr(u)?"_blank":n),qr(u)&&(e=e||"http://localhost",c.scrollbars="yes");const l=Object.entries(c).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(function(t=Ft()){var e;return Jr(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}(u)&&"_self"!==a)return function(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
     */(e||"",a),new bs(null);const h=window.open(e||"",a,l);ar(h,t,"popup-blocked");try{h.focus()}catch(t){}return new bs(h)}const Is="__/auth/handler",_s="emulator/auth/handler";function Ts(t,e,n,r,i,s){ar(t.config.authDomain,t,"auth-domain-config-required"),ar(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ae,eventId:i};if(e instanceof ui){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",function(t){for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(s||{}))o[t]=e}if(e instanceof li){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(o.scopes=t.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const t of Object.keys(a))void 0===a[t]&&delete a[t];return`${function({config:t}){if(!t.emulator)return`https://${t.authDomain}/${Is}`;return yr(t,_s)}
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
     */(t)}?${Xt(a).slice(1)}`}const Ss="webStorageSupport";const ks=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ci,this._completeRedirectFn=ns}async _openPopup(t,e,n,r){var i;ur(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return Es(t,Ts(t,e,n,fr(),r),$i())}async _openRedirect(t,e,n,r){var i;return await this._originValidation(t),i=Ts(t,e,n,fr(),r),Di().location.href=i,new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(ur(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n}async initAndGetManager(t){const e=await vs(t),n=new rs(t);return e.register("authEvent",(e=>{ar(null==e?void 0:e.authEvent,t,"invalid-auth-event");return{status:n.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Ss,{type:Ss},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&e(!!i),ir(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=cs(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Xr()||zr()||Jr()}};var As;
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
class Cs{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(t)}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){ar(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
     */
function Ns(t=Ce()){const e=Te(t,"auth");return e.isInitialized()?e.getImmediate():dr(t,{popupRedirectResolver:ks,persistence:[qi,ki,Ci]})}As="Browser",_e(new re("auth",((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),{apiKey:r,authDomain:i}=n.options;return(t=>{ar(r&&!r.includes(":"),"invalid-api-key",{appName:t.name}),ar(!(null==i?void 0:i.includes(":")),"argument-error",{appName:t.name});const n={apiKey:r,authDomain:i,clientPlatform:As,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Qr(As)},s=new Zr(t,n);return function(t,e){const n=(null==e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(hr);(null==e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null==e?void 0:e.popupRedirectResolver)}(s,e),s})(n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{t.getProvider("auth-internal").initialize()}))),_e(new re("auth-internal",(t=>(t=>new Cs(t))(ti(t.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),Ne("@firebase/auth","0.17.2",function(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(As));const $s=Ve(void 0);function Rs(t){let e;return{c(){e=A("p"),e.textContent="You must enter an email address",O(e,"class","error svelte-bqs2yn")},m(t,n){S(t,e,n)},d(t){t&&k(e)}}}function Ds(t){let e;return{c(){e=A("p"),e.textContent="That email address is invalid",O(e,"class","error svelte-bqs2yn")},m(t,n){S(t,e,n)},d(t){t&&k(e)}}}function xs(t){let e;return{c(){e=A("p"),e.textContent="You must enter a password",O(e,"class","error svelte-bqs2yn")},m(t,n){S(t,e,n)},d(t){t&&k(e)}}}function Os(t){let e;return{c(){e=A("p"),e.textContent="Your password must be at least 8 characters long",O(e,"class","error svelte-bqs2yn")},m(t,n){S(t,e,n)},d(t){t&&k(e)}}}function Ls(e){let n,r,i,o,a,c,u,l,h,d,f,p,m,g,y,v,w,b,E,I,_,$,x=e[6]&&e[2]&&Rs(),L=e[6]&&e[3]&&Ds(),P=e[6]&&e[4]&&xs(),M=e[6]&&e[5]&&Os();return{c(){n=A("h1"),n.textContent="Log in to Lexoral",r=N(),i=A("form"),o=A("label"),o.textContent="Email Address",a=N(),c=A("input"),u=N(),x&&x.c(),l=N(),L&&L.c(),h=N(),d=A("label"),d.textContent="Password",f=N(),p=A("input"),m=N(),P&&P.c(),g=N(),M&&M.c(),y=N(),v=A("button"),w=C("Log In"),E=N(),I=A("p"),I.innerHTML='Don&#39;t have an account yet? <a href="/dashboard/auth/signup">Sign up</a> instead',O(o,"for","email"),O(c,"id","email"),O(c,"type","text"),O(d,"for","password"),O(p,"id","password"),O(p,"type","password"),O(v,"type","submit"),v.disabled=b=e[6]&&e[7],O(v,"class","svelte-bqs2yn"),O(i,"class","svelte-bqs2yn")},m(t,s){S(t,n,s),S(t,r,s),S(t,i,s),T(i,o),T(i,a),T(i,c),U(c,e[0]),T(i,u),x&&x.m(i,null),T(i,l),L&&L.m(i,null),T(i,h),T(i,d),T(i,f),T(i,p),U(p,e[1]),T(i,m),P&&P.m(i,null),T(i,g),M&&M.m(i,null),T(i,y),T(i,v),T(v,w),S(t,E,s),S(t,I,s),_||($=[R(c,"input",e[10]),R(p,"input",e[11]),R(i,"submit",D(e[8]))],_=!0)},p(t,[e]){1&e&&c.value!==t[0]&&U(c,t[0]),t[6]&&t[2]?x||(x=Rs(),x.c(),x.m(i,l)):x&&(x.d(1),x=null),t[6]&&t[3]?L||(L=Ds(),L.c(),L.m(i,h)):L&&(L.d(1),L=null),2&e&&p.value!==t[1]&&U(p,t[1]),t[6]&&t[4]?P||(P=xs(),P.c(),P.m(i,g)):P&&(P.d(1),P=null),t[6]&&t[5]?M||(M=Os(),M.c(),M.m(i,y)):M&&(M.d(1),M=null),192&e&&b!==(b=t[6]&&t[7])&&(v.disabled=b)},i:t,o:t,d(t){t&&k(n),t&&k(r),t&&k(i),x&&x.d(),L&&L.d(),P&&P.d(),M&&M.d(),t&&k(E),t&&k(I),_=!1,s($)}}}function Ps(t,e,n){let r,i,s,o,a,c;l(t,$s,(t=>n(9,c=t)));let u="",h="",d=!1;return t.$$.update=()=>{if(512&t.$$.dirty&&void 0===c)throw new Error("Page has been loaded before auth state has updated");512&t.$$.dirty&&null!==c&&En("/dashboard",{replace:!0}),512&t.$$.dirty&&!1===(null==c?void 0:c.emailVerified)&&En("/dashboard/auth/verify",{replace:!0}),1&t.$$.dirty&&n(2,r=0===u.length),5&t.$$.dirty&&n(3,i=!r&&!u.includes("@")),2&t.$$.dirty&&n(4,s=0===h.length),18&t.$$.dirty&&n(5,o=!s&&h.length<8),60&t.$$.dirty&&n(7,a=[r,i,s,o].some((t=>t)))},[u,h,r,i,s,o,d,a,function(){if(a)return void n(6,d=!0);Ei(Ns(),u,h).then((({user:t})=>{t.emailVerified?En("/dashboard",{replace:!0}):En("/dashboard/auth/verify",{replace:!0})})).catch((t=>{"auth/user-not-found"===t.code?console.error("Unrecognised email"):"auth/invalid-email"===t.code&&console.error("Invalid Email"),console.log(t),console.log(t.code),console.log(t.customData),console.log(t.name)}))},c,function(){u=this.value,n(0,u)},function(){h=this.value,n(1,h)}]}class Ms extends $t{constructor(t){super(),Nt(this,t,Ps,Ls,a,{})}}function Us(t){let e;return{c(){e=A("p"),e.textContent="You must enter an email address",O(e,"class","error svelte-186pp9n")},m(t,n){S(t,e,n)},d(t){t&&k(e)}}}function Vs(t){let e;return{c(){e=A("p"),e.textContent="That email address is invalid",O(e,"class","error svelte-186pp9n")},m(t,n){S(t,e,n)},d(t){t&&k(e)}}}function Fs(t){let e;return{c(){e=A("p"),e.textContent="You must enter a password",O(e,"class","error svelte-186pp9n")},m(t,n){S(t,e,n)},d(t){t&&k(e)}}}function js(t){let e;return{c(){e=A("p"),e.textContent="Your password must be at least 8 characters long",O(e,"class","error svelte-186pp9n")},m(t,n){S(t,e,n)},d(t){t&&k(e)}}}function Bs(t){let e;return{c(){e=A("p"),e.textContent="You must agree to the privacy policy",O(e,"class","error svelte-186pp9n")},m(t,n){S(t,e,n)},d(t){t&&k(e)}}}function qs(e){let n,r,i,o,a,c,u,l,h,d,f,p,m,g,y,v,w,b,E,I,_,$,x,L,P,M,F,j,B=e[8]&&e[3]&&Us(),q=e[8]&&e[4]&&Vs(),z=e[8]&&e[5]&&Fs(),H=e[8]&&e[6]&&js(),K=e[8]&&e[7]&&Bs();return{c(){n=A("h1"),n.textContent="Create your Lexoral account",r=N(),i=A("form"),o=A("label"),o.textContent="Email Address",a=N(),c=A("input"),u=N(),B&&B.c(),l=N(),q&&q.c(),h=N(),d=A("label"),d.textContent="Password",f=N(),p=A("input"),m=N(),z&&z.c(),g=N(),H&&H.c(),y=N(),v=A("div"),w=A("label"),w.innerHTML='I have read and agree to the <a href="https://lexoral.com/privacy">Privacy Policy</a>',b=N(),E=A("input"),I=N(),K&&K.c(),_=N(),$=A("button"),x=C("Create Account"),P=N(),M=A("p"),M.innerHTML='Already have an account? <a href="/dashboard/auth/login">Log in</a> instead',O(o,"for","email"),O(o,"class","svelte-186pp9n"),O(c,"id","email"),O(c,"type","text"),O(c,"class","svelte-186pp9n"),O(d,"for","password"),O(d,"class","svelte-186pp9n"),O(p,"id","password"),O(p,"type","password"),O(p,"class","svelte-186pp9n"),O(w,"for","privacy"),O(w,"class","svelte-186pp9n"),O(E,"id","privacy"),O(E,"type","checkbox"),V(E,"margin-left","1em"),O(E,"class","svelte-186pp9n"),O(v,"class","checkboxRow svelte-186pp9n"),O($,"type","submit"),$.disabled=L=e[8]&&e[9],O($,"class","svelte-186pp9n"),O(i,"class","svelte-186pp9n")},m(t,s){S(t,n,s),S(t,r,s),S(t,i,s),T(i,o),T(i,a),T(i,c),U(c,e[0]),T(i,u),B&&B.m(i,null),T(i,l),q&&q.m(i,null),T(i,h),T(i,d),T(i,f),T(i,p),U(p,e[1]),T(i,m),z&&z.m(i,null),T(i,g),H&&H.m(i,null),T(i,y),T(i,v),T(v,w),T(v,b),T(v,E),E.checked=e[2],T(i,I),K&&K.m(i,null),T(i,_),T(i,$),T($,x),S(t,P,s),S(t,M,s),F||(j=[R(c,"input",e[12]),R(p,"input",e[13]),R(E,"change",e[14]),R(i,"submit",D(e[10]))],F=!0)},p(t,[e]){1&e&&c.value!==t[0]&&U(c,t[0]),t[8]&&t[3]?B||(B=Us(),B.c(),B.m(i,l)):B&&(B.d(1),B=null),t[8]&&t[4]?q||(q=Vs(),q.c(),q.m(i,h)):q&&(q.d(1),q=null),2&e&&p.value!==t[1]&&U(p,t[1]),t[8]&&t[5]?z||(z=Fs(),z.c(),z.m(i,g)):z&&(z.d(1),z=null),t[8]&&t[6]?H||(H=js(),H.c(),H.m(i,y)):H&&(H.d(1),H=null),4&e&&(E.checked=t[2]),t[8]&&t[7]?K||(K=Bs(),K.c(),K.m(i,_)):K&&(K.d(1),K=null),768&e&&L!==(L=t[8]&&t[9])&&($.disabled=L)},i:t,o:t,d(t){t&&k(n),t&&k(r),t&&k(i),B&&B.d(),q&&q.d(),z&&z.d(),H&&H.d(),K&&K.d(),t&&k(P),t&&k(M),F=!1,s(j)}}}function zs(t,e,n){let r,i,s,o,a,c,u;l(t,$s,(t=>n(11,u=t)));var h=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(i,s){function o(t){try{c(r.next(t))}catch(t){s(t)}}function a(t){try{c(r.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}c((r=r.apply(t,e||[])).next())}))};let d="",f="",p=!1,m=!1;return t.$$.update=()=>{if(2048&t.$$.dirty&&void 0===u)throw new Error("Page has been loaded before auth state has updated");2048&t.$$.dirty&&null!==u&&En("/dashboard",{replace:!0}),2048&t.$$.dirty&&!1===(null==u?void 0:u.emailVerified)&&En("/dashboard/auth/verify",{replace:!0}),1&t.$$.dirty&&n(3,r=0===d.length),9&t.$$.dirty&&n(4,i=!r&&!d.includes("@")),2&t.$$.dirty&&n(5,s=0===f.length),34&t.$$.dirty&&n(6,o=!s&&f.length<8),4&t.$$.dirty&&n(7,a=!p),248&t.$$.dirty&&n(9,c=[r,i,s,o,a].some((t=>t)))},[d,f,p,r,i,s,o,a,m,c,function(){if(c)return void n(8,m=!0);bi(Ns(),d,f).then((({user:t})=>h(this,void 0,void 0,(function*(){t.emailVerified?En("/dashboard",{replace:!0}):(console.log("Sending email verification"),yield Ii(t),En("/dashboard/auth/verify",{replace:!0}))})))).catch((t=>{"auth/user-not-found"===t.code?console.error("Unrecognised email"):"auth/invalid-email"===t.code&&console.error("Invalid Email"),console.log(t),console.log(t.code),console.log(t.customData),console.log(t.name)}))},u,function(){d=this.value,n(0,d)},function(){f=this.value,n(1,f)},function(){p=this.checked,n(2,p)}]}class Hs extends $t{constructor(t){super(),Nt(this,t,zs,qs,a,{})}}function Ks(e){let n,r,i,s,o,a,c,u,l,h,d,f,p,m,g,y=e[0]?.email+"";return{c(){n=A("h1"),n.textContent="Verify your Email Address to continue",r=N(),i=A("p"),s=C("A verification email has been sent to "),o=C(y),a=C("."),c=N(),u=A("p"),u.textContent="Please click the link inside to continue with Lexoral.",l=N(),h=A("p"),h.textContent="Can't see it? Click below to send another verification email.",d=N(),f=A("button"),p=C("Resend Email"),f.disabled=e[1]},m(t,y){S(t,n,y),S(t,r,y),S(t,i,y),T(i,s),T(i,o),T(i,a),S(t,c,y),S(t,u,y),S(t,l,y),S(t,h,y),S(t,d,y),S(t,f,y),T(f,p),m||(g=R(f,"click",e[3]),m=!0)},p(t,[e]){1&e&&y!==(y=t[0]?.email+"")&&M(o,y),2&e&&(f.disabled=t[1])},i:t,o:t,d(t){t&&k(n),t&&k(r),t&&k(i),t&&k(c),t&&k(u),t&&k(l),t&&k(h),t&&k(d),t&&k(f),m=!1,g()}}}function Ws(t,e,n){let r;l(t,$s,(t=>n(0,r=t)));let i=!1;function s(t){if(null==t)throw new Error("User is not defined");Ii(t,{url:"https://lexoral.com/dashboard"}),n(1,i=!0)}return t.$$.update=()=>{if(1&t.$$.dirty&&void 0===r)throw new Error("Page has been loaded before auth state has updated");1&t.$$.dirty&&null===r&&En("/dashboard/auth/login",{replace:!0}),1&t.$$.dirty&&!0===(null==r?void 0:r.emailVerified)&&En("/dashboard",{replace:!0})},[r,i,s,()=>s(r)]}class Gs extends $t{constructor(t){super(),Nt(this,t,Ws,Ks,a,{})}}function Ys(t){let e;return{c(){e=A("button"),e.textContent="Back to Dashboard"},m(t,n){S(t,e,n)},d(t){t&&k(e)}}}function Js(t){let e,n,r,i,s,o,a,c;return a=new Qn({props:{to:"/",$$slots:{default:[Ys]},$$scope:{ctx:t}}}),{c(){e=A("h1"),e.textContent="Payment Success",n=N(),r=A("p"),r.textContent="Your payment was successful. You should see the credit added to your account within a few minutes.",i=N(),s=A("p"),s.innerHTML='If the credit is still missing after 10 minutes, please contact support: <a href="mailto:billing@lexoral.com">billing@lexoral.com</a>',o=N(),kt(a.$$.fragment)},m(t,u){S(t,e,u),S(t,n,u),S(t,r,u),S(t,i,u),S(t,s,u),S(t,o,u),At(a,t,u),c=!0},p(t,[e]){const n={};1&e&&(n.$$scope={dirty:e,ctx:t}),a.$set(n)},i(t){c||(vt(a.$$.fragment,t),c=!0)},o(t){wt(a.$$.fragment,t),c=!1},d(t){t&&k(e),t&&k(n),t&&k(r),t&&k(i),t&&k(s),t&&k(o),Ct(a,t)}}}class Xs extends $t{constructor(t){super(),Nt(this,t,null,Js,a,{})}}function Qs(t){let e;return{c(){e=A("button"),e.textContent="Back to Dashboard"},m(t,n){S(t,e,n)},d(t){t&&k(e)}}}function Zs(t){let e,n,r,i,s,o,a,c;return a=new Qn({props:{to:"/",$$slots:{default:[Qs]},$$scope:{ctx:t}}}),{c(){e=A("h1"),e.textContent="Payment Failed",n=N(),r=A("p"),r.textContent="Your payment was not successful. You have not been charged.",i=N(),s=A("p"),s.innerHTML='If you need support with billing, please contact us at: <a href="mailto:billing@lexoral.com">billing@lexoral.com</a>',o=N(),kt(a.$$.fragment)},m(t,u){S(t,e,u),S(t,n,u),S(t,r,u),S(t,i,u),S(t,s,u),S(t,o,u),At(a,t,u),c=!0},p(t,[e]){const n={};1&e&&(n.$$scope={dirty:e,ctx:t}),a.$set(n)},i(t){c||(vt(a.$$.fragment,t),c=!0)},o(t){wt(a.$$.fragment,t),c=!1},d(t){t&&k(e),t&&k(n),t&&k(r),t&&k(i),t&&k(s),t&&k(o),Ct(a,t)}}}class to extends $t{constructor(t){super(),Nt(this,t,null,Zs,a,{})}}function eo(t){const e=t-1;return e*e*e+1}function no(t,{delay:n=0,duration:r=400,easing:i=e}={}){const s=+getComputedStyle(t).opacity;return{delay:n,duration:r,easing:i,css:t=>"opacity: "+t*s}}function ro(t,{delay:e=0,duration:n=400,easing:r=eo}={}){const i=getComputedStyle(t),s=+i.opacity,o=parseFloat(i.height),a=parseFloat(i.paddingTop),c=parseFloat(i.paddingBottom),u=parseFloat(i.marginTop),l=parseFloat(i.marginBottom),h=parseFloat(i.borderTopWidth),d=parseFloat(i.borderBottomWidth);return{delay:e,duration:n,easing:r,css:t=>`overflow: hidden;opacity: ${Math.min(20*t,1)*s};height: ${t*o}px;padding-top: ${t*a}px;padding-bottom: ${t*c}px;margin-top: ${t*u}px;margin-bottom: ${t*l}px;border-top-width: ${t*h}px;border-bottom-width: ${t*d}px;`}}function io(t,{delay:e=0,duration:n=400,easing:r=eo,start:i=0,opacity:s=0}={}){const o=getComputedStyle(t),a=+o.opacity,c="none"===o.transform?"":o.transform,u=1-i,l=a*(1-s);return{delay:e,duration:n,easing:r,css:(t,e)=>`\n\t\t\ttransform: ${c} scale(${1-u*e});\n\t\t\topacity: ${a-l*e}\n\t\t`}}const{window:so}=It;function oo(t){let e,n,r,i,a,c,u,l,h,d,f,p=t[0].closeButton&&ao(t);var m=t[1];return m&&(c=new m({})),{c(){e=A("div"),n=A("div"),r=A("div"),p&&p.c(),i=N(),a=A("div"),c&&kt(c.$$.fragment),O(a,"class","content svelte-2wx9ab"),O(a,"style",t[8]),O(r,"class","window svelte-2wx9ab"),O(r,"role","dialog"),O(r,"aria-modal","true"),O(r,"style",t[7]),O(n,"class","window-wrap svelte-2wx9ab"),O(n,"style",t[6]),O(e,"class","bg svelte-2wx9ab"),O(e,"style",t[5])},m(s,u){S(s,e,u),T(e,n),T(n,r),p&&p.m(r,null),T(r,i),T(r,a),c&&At(c,a,null),t[39](r),t[40](n),t[41](e),h=!0,d||(f=[R(r,"introstart",(function(){o(t[12])&&t[12].apply(this,arguments)})),R(r,"outrostart",(function(){o(t[13])&&t[13].apply(this,arguments)})),R(r,"introend",(function(){o(t[14])&&t[14].apply(this,arguments)})),R(r,"outroend",(function(){o(t[15])&&t[15].apply(this,arguments)})),R(e,"mousedown",t[19]),R(e,"mouseup",t[20])],d=!0)},p(s,o){if((t=s)[0].closeButton?p?(p.p(t,o),1&o[0]&&vt(p,1)):(p=ao(t),p.c(),vt(p,1),p.m(r,i)):p&&(gt(),wt(p,1,1,(()=>{p=null})),yt()),m!==(m=t[1])){if(c){gt();const t=c;wt(t.$$.fragment,1,0,(()=>{Ct(t,1)})),yt()}m?(c=new m({}),kt(c.$$.fragment),vt(c.$$.fragment,1),At(c,a,null)):c=null}(!h||256&o[0])&&O(a,"style",t[8]),(!h||128&o[0])&&O(r,"style",t[7]),(!h||64&o[0])&&O(n,"style",t[6]),(!h||32&o[0])&&O(e,"style",t[5])},i(n){h||(vt(p),c&&vt(c.$$.fragment,n),ot((()=>{u||(u=Et(r,t[11],t[0].transitionWindowProps,!0)),u.run(1)})),ot((()=>{l||(l=Et(e,t[10],t[0].transitionBgProps,!0)),l.run(1)})),h=!0)},o(n){wt(p),c&&wt(c.$$.fragment,n),u||(u=Et(r,t[11],t[0].transitionWindowProps,!1)),u.run(0),l||(l=Et(e,t[10],t[0].transitionBgProps,!1)),l.run(0),h=!1},d(n){n&&k(e),p&&p.d(),c&&Ct(c),t[39](null),n&&u&&u.end(),t[40](null),t[41](null),n&&l&&l.end(),d=!1,s(f)}}}function ao(t){let e,n,r,i,s;const o=[uo,co],a=[];function c(t,n){return 1&n[0]&&(e=!!t[16](t[0].closeButton)),e?0:1}return n=c(t,[-1,-1]),r=a[n]=o[n](t),{c(){r.c(),i=$()},m(t,e){a[n].m(t,e),S(t,i,e),s=!0},p(t,e){let s=n;n=c(t,e),n===s?a[n].p(t,e):(gt(),wt(a[s],1,1,(()=>{a[s]=null})),yt(),r=a[n],r?r.p(t,e):(r=a[n]=o[n](t),r.c()),vt(r,1),r.m(i.parentNode,i))},i(t){s||(vt(r),s=!0)},o(t){wt(r),s=!1},d(t){a[n].d(t),t&&k(i)}}}function co(e){let n,r,i;return{c(){n=A("button"),O(n,"class","close svelte-2wx9ab"),O(n,"style",e[9])},m(t,s){S(t,n,s),r||(i=R(n,"click",e[17]),r=!0)},p(t,e){512&e[0]&&O(n,"style",t[9])},i:t,o:t,d(t){t&&k(n),r=!1,i()}}}function uo(t){let e,n,r;var i=t[0].closeButton;function s(t){return{props:{onClose:t[17]}}}return i&&(e=new i(s(t))),{c(){e&&kt(e.$$.fragment),n=$()},m(t,i){e&&At(e,t,i),S(t,n,i),r=!0},p(t,r){if(i!==(i=t[0].closeButton)){if(e){gt();const t=e;wt(t.$$.fragment,1,0,(()=>{Ct(t,1)})),yt()}i?(e=new i(s(t)),kt(e.$$.fragment),vt(e.$$.fragment,1),At(e,n.parentNode,n)):e=null}},i(t){r||(e&&vt(e.$$.fragment,t),r=!0)},o(t){e&&wt(e.$$.fragment,t),r=!1},d(t){t&&k(n),e&&Ct(e,t)}}}function lo(t){let e,n,r,i,s=t[1]&&oo(t);const o=t[38].default,a=h(o,t,t[37],null);return{c(){s&&s.c(),e=N(),a&&a.c()},m(o,c){s&&s.m(o,c),S(o,e,c),a&&a.m(o,c),n=!0,r||(i=R(so,"keydown",t[18]),r=!0)},p(t,r){t[1]?s?(s.p(t,r),2&r[0]&&vt(s,1)):(s=oo(t),s.c(),vt(s,1),s.m(e.parentNode,e)):s&&(gt(),wt(s,1,1,(()=>{s=null})),yt()),a&&a.p&&(!n||64&r[1])&&f(a,o,t,t[37],n?r:[-1,-1],null,null)},i(t){n||(vt(s),vt(a,t),n=!0)},o(t){wt(s),wt(a,t),n=!1},d(t){s&&s.d(t),t&&k(e),a&&a.d(t),r=!1,i()}}}function ho(t,e,n){let{$$slots:r={},$$scope:i}=e;const s=J(),o=X;let{show:a=null}=e,{key:c="simple-modal"}=e,{closeButton:u=!0}=e,{closeOnEsc:l=!0}=e,{closeOnOuterClick:h=!0}=e,{styleBg:d={}}=e,{styleWindowWrap:f={}}=e,{styleWindow:p={}}=e,{styleContent:m={}}=e,{styleCloseButton:g={}}=e,{setContext:y=o}=e,{transitionBg:v=no}=e,{transitionBgProps:w={duration:250}}=e,{transitionWindow:b=v}=e,{transitionWindowProps:E=w}=e;const I={closeButton:u,closeOnEsc:l,closeOnOuterClick:h,styleBg:d,styleWindowWrap:f,styleWindow:p,styleContent:m,styleCloseButton:g,transitionBg:v,transitionBgProps:w,transitionWindow:b,transitionWindowProps:E};let _,T,S,k,A,C,N,$,R,D,x,O,L,P,M,U={...I},V=null;const F=t=>t?Object.keys(t).reduce(((e,n)=>`${e}; ${(t=>t.replace(/([a-zA-Z])(?=[A-Z])/g,"$1-").toLowerCase())(n)}: ${t[n]}`),""):"",j=t=>!!(t&&t.constructor&&t.call&&t.apply),B=()=>{};let q=B,z=B,H=B,K=B;const W=(t,e={},r={},i={})=>{n(1,V=function(t,e={}){return function(n){return new t({...n,props:{...e,...n.props}})}}(t,e)),n(0,U={...I,...r}),n(5,A=F(Object.assign({},{width:window.innerWidth,height:window.innerHeight},U.styleBg))),n(6,C=F(U.styleWindowWrap)),n(7,N=F(U.styleWindow)),n(8,$=F(U.styleContent)),n(9,R=F(U.styleCloseButton)),n(10,D=U.transitionBg),n(11,x=U.transitionWindow),Z(),n(12,q=t=>{i.onOpen&&i.onOpen(t),s("open"),s("opening")}),n(13,z=t=>{i.onClose&&i.onClose(t),s("close"),s("closing")}),n(14,H=t=>{i.onOpened&&i.onOpened(t),s("opened")}),n(15,K=t=>{i.onClosed&&i.onClosed(t),s("closed")})},Q=(t={})=>{n(13,z=t.onClose||z),n(15,K=t.onClosed||K),n(1,V=null),et()},Z=()=>{k=window.scrollY,O=document.body.style.position,L=document.body.style.overflow,P=document.body.style.width,document.body.style.position="fixed",document.body.style.top=`-${k}px`,document.body.style.overflow="hidden",document.body.style.width="100%"},et=()=>{document.body.style.position=O||"",document.body.style.top="",document.body.style.overflow=L||"",document.body.style.width=P||"",window.scrollTo(0,k)};y(c,{open:W,close:Q});let nt=!1;return Y((()=>{nt&&Q()})),G((()=>{n(36,nt=!0)})),t.$$set=t=>{"show"in t&&n(21,a=t.show),"key"in t&&n(22,c=t.key),"closeButton"in t&&n(23,u=t.closeButton),"closeOnEsc"in t&&n(24,l=t.closeOnEsc),"closeOnOuterClick"in t&&n(25,h=t.closeOnOuterClick),"styleBg"in t&&n(26,d=t.styleBg),"styleWindowWrap"in t&&n(27,f=t.styleWindowWrap),"styleWindow"in t&&n(28,p=t.styleWindow),"styleContent"in t&&n(29,m=t.styleContent),"styleCloseButton"in t&&n(30,g=t.styleCloseButton),"setContext"in t&&n(31,y=t.setContext),"transitionBg"in t&&n(32,v=t.transitionBg),"transitionBgProps"in t&&n(33,w=t.transitionBgProps),"transitionWindow"in t&&n(34,b=t.transitionWindow),"transitionWindowProps"in t&&n(35,E=t.transitionWindowProps),"$$scope"in t&&n(37,i=t.$$scope)},t.$$.update=()=>{2097152&t.$$.dirty[0]|32&t.$$.dirty[1]&&nt&&(j(a)?W(a):Q())},[U,V,_,T,S,A,C,N,$,R,D,x,q,z,H,K,j,Q,t=>{if(U.closeOnEsc&&V&&"Escape"===t.key&&(t.preventDefault(),Q()),V&&"Tab"===t.key){const e=S.querySelectorAll("*"),n=Array.from(e).filter((t=>t.tabIndex>=0));let r=n.indexOf(document.activeElement);-1===r&&t.shiftKey&&(r=0),r+=n.length+(t.shiftKey?-1:1),r%=n.length,n[r].focus(),t.preventDefault()}},t=>{!U.closeOnOuterClick||t.target!==_&&t.target!==T||(M=t.target)},t=>{U.closeOnOuterClick&&t.target===M&&(t.preventDefault(),Q())},a,c,u,l,h,d,f,p,m,g,y,v,w,b,E,nt,i,r,function(t){tt[t?"unshift":"push"]((()=>{S=t,n(4,S)}))},function(t){tt[t?"unshift":"push"]((()=>{T=t,n(3,T)}))},function(t){tt[t?"unshift":"push"]((()=>{_=t,n(2,_)}))}]}class fo extends $t{constructor(t){super(),Nt(this,t,ho,lo,a,{show:21,key:22,closeButton:23,closeOnEsc:24,closeOnOuterClick:25,styleBg:26,styleWindowWrap:27,styleWindow:28,styleContent:29,styleCloseButton:30,setContext:31,transitionBg:32,transitionBgProps:33,transitionWindow:34,transitionWindowProps:35},[-1,-1])}}let po;function mo(){if(!po)throw new Error("User is undefined when calling authenticated api");return po}async function go(t,e){return mo().getIdToken().then((t=>fetch(`https://europe-west2-${process.env.PROJECT_ID}.cloudfunctions.net/upload`,{method:"post",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify({name:e})}))).then((async t=>{if(t.ok)return t;const e=await t.text();throw new Error("Request was rejected: "+e)})).then((t=>t.text())).then((e=>fetch(e,{method:"put",headers:{"Content-Type":"application/octet-stream"},body:t})))}function yo(n){let r,i,s,a,c,u;return{c(){r=A("div"),i=A("div"),a=N(),c=A("span"),u=C(n[0]),O(i,"class","lds-dual-ring svelte-1gc1a0z"),O(c,"class","svelte-1gc1a0z"),O(r,"class","col svelte-1gc1a0z")},m(t,e){S(t,r,e),T(r,i),T(r,a),T(r,c),T(c,u)},p(t,[e]){1&e&&M(u,t[0])},i(n){s||ot((()=>{s=function(n,r,i){let s,a,c=r(n,i),u=!1,l=0;function h(){s&&H(n,s)}function d(){const{delay:r=0,duration:i=300,easing:o=e,tick:d=t,css:f}=c||bt;f&&(s=z(n,0,1,i,r,o,f,l++)),d(0,1);const p=y()+r,m=p+i;a&&a.abort(),u=!0,ot((()=>ft(n,!0,"start"))),a=E((t=>{if(u){if(t>=m)return d(1,0),ft(n,!0,"end"),h(),u=!1;if(t>=p){const e=o((t-p)/i);d(e,1-e)}}return u}))}let f=!1;return{start(){f||(H(n),o(c)?(c=c(),dt().then(d)):d())},invalidate(){f=!1},end(){u&&(h(),u=!1)}}}(i,io,{}),s.start()}))},o:t,d(t){t&&k(r)}}}function vo(t,e,n){let{text:r="Loading"}=e;return t.$$set=t=>{"text"in t&&n(0,r=t.text)},[r]}$s.subscribe((t=>po=t));class wo extends $t{constructor(t){super(),Nt(this,t,vo,yo,a,{text:0})}}function bo(e){let n,r,i;return{c(){n=A("button"),n.textContent="Check out",O(n,"class","svelte-1ejei95")},m(t,s){S(t,n,s),r||(i=R(n,"click",e[5]),r=!0)},p:t,i:t,o:t,d(t){t&&k(n),r=!1,i()}}}function Eo(e){let n,r,i;return r=new wo({props:{text:"Loading secure checkout..."}}),{c(){n=A("div"),kt(r.$$.fragment),O(n,"class","loadingContainer svelte-1ejei95")},m(t,e){S(t,n,e),At(r,n,null),i=!0},p:t,i(t){i||(vt(r.$$.fragment,t),i=!0)},o(t){wt(r.$$.fragment,t),i=!1},d(t){t&&k(n),Ct(r)}}}function Io(t){let e,n,r,i,o,a,c,u,l,h,d,f,p,m,g,y,v,w,b,E,I,_,$,D,x,L,V,F,j,B=t[3].toFixed(2)+"";const q=[Eo,bo],z=[];function H(t,e){return t[2]?0:1}return $=H(t),D=z[$]=q[$](t),{c(){e=A("div"),n=A("h1"),n.textContent="Buy Credit",r=N(),i=A("div"),o=A("div"),a=A("div"),c=A("div"),u=A("label"),u.textContent="Hours:",l=N(),h=A("input"),d=N(),f=A("div"),p=A("label"),p.textContent="Minutes:",m=N(),g=A("input"),y=N(),v=A("p"),w=C("Buying "),b=C(t[4]),E=C(" mins of credit for £"),I=C(B),_=N(),D.c(),x=N(),L=A("div"),L.innerHTML='<p class="svelte-1ejei95">Std Price: £0.10 per minute</p> \n      <p class="svelte-1ejei95">Bulk Price: £0.08 per minute<br/>(orders over 10 hours)</p> \n      <p class="svelte-1ejei95">Bulk price automatically applied</p> \n      <p class="svelte-1ejei95">Min order: 5 mins</p>',O(n,"class","svelte-1ejei95"),O(u,"for","hours"),O(u,"class","svelte-1ejei95"),O(h,"id","hours"),O(h,"type","number"),O(h,"min",0),h.disabled=t[2],O(h,"class","svelte-1ejei95"),O(c,"class","formSection svelte-1ejei95"),O(p,"for","minutes"),O(p,"class","svelte-1ejei95"),O(g,"id","minutes"),O(g,"type","number"),O(g,"min",0),O(g,"max",59),g.disabled=t[2],O(g,"class","svelte-1ejei95"),O(f,"class","formSection svelte-1ejei95"),O(a,"class","row svelte-1ejei95"),O(v,"class","svelte-1ejei95"),O(o,"class","col svelte-1ejei95"),O(L,"class","pricing svelte-1ejei95"),O(i,"class","grid svelte-1ejei95"),O(e,"class","container svelte-1ejei95")},m(s,k){S(s,e,k),T(e,n),T(e,r),T(e,i),T(i,o),T(o,a),T(a,c),T(c,u),T(c,l),T(c,h),U(h,t[0]),T(a,d),T(a,f),T(f,p),T(f,m),T(f,g),U(g,t[1]),T(o,y),T(o,v),T(v,w),T(v,b),T(v,E),T(v,I),T(o,_),z[$].m(o,null),T(i,x),T(i,L),V=!0,F||(j=[R(h,"input",t[11]),R(g,"input",t[12])],F=!0)},p(t,[e]){(!V||4&e)&&(h.disabled=t[2]),1&e&&P(h.value)!==t[0]&&U(h,t[0]),(!V||4&e)&&(g.disabled=t[2]),2&e&&P(g.value)!==t[1]&&U(g,t[1]),(!V||16&e)&&M(b,t[4]),(!V||8&e)&&B!==(B=t[3].toFixed(2)+"")&&M(I,B);let n=$;$=H(t),$===n?z[$].p(t,e):(gt(),wt(z[n],1,1,(()=>{z[n]=null})),yt(),D=z[$],D?D.p(t,e):(D=z[$]=q[$](t),D.c()),vt(D,1),D.m(o,null))},i(t){V||(vt(D),V=!0)},o(t){wt(D),V=!1},d(t){t&&k(e),z[$].d(),F=!1,s(j)}}}const _o=.08;function To(t,e,n){var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(i,s){function o(t){try{c(r.next(t))}catch(t){s(t)}}function a(t){try{c(r.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}c((r=r.apply(t,e||[])).next())}))};Q("simple-modal");let i,s=!1,o=0,a=0;const c=600;let u,l,h,d,f,p;return t.$$.update=()=>{3&t.$$.dirty&&n(6,i=Math.max(60*o+a,5)),64&t.$$.dirty&&n(7,u=i>=c),128&t.$$.dirty&&n(8,l=u?_o:.1),320&t.$$.dirty&&n(9,h=i*l),640&t.$$.dirty&&n(10,d=!u&&h>=48),1536&t.$$.dirty&&n(3,f=d?48:h),1088&t.$$.dirty&&n(4,p=d?c:i)},[o,a,s,f,p,function(){return r(this,void 0,void 0,(function*(){s||(n(2,s=!0),yield async function(t){return mo().getIdToken().then((e=>fetch(`https://europe-west2-${process.env.PROJECT_ID}.cloudfunctions.net/create_checkout`,{method:"post",headers:{Authorization:`Bearer ${e}`,"Content-Type":"application/json"},body:JSON.stringify({mins:t})}))).then((async t=>{if(t.ok)return t;const e=await t.text();throw new Error("Request was rejected: "+e)})).then((t=>t.text())).then((t=>{window.location.href=t}))}(p))}))},i,u,l,h,d,function(){o=P(this.value),n(0,o)},function(){a=P(this.value),n(1,a)}]}class So extends $t{constructor(t){super(),Nt(this,t,To,Io,a,{})}}function ko(e){let n,r,i;return{c(){n=A("button"),n.textContent="+",O(n,"title","Buy more credit")},m(t,s){S(t,n,s),r||(i=R(n,"click",e[0]),r=!0)},p:t,i:t,o:t,d(t){t&&k(n),r=!1,i()}}}function Ao(t){const{open:e}=Q("simple-modal");return[function(){e(So,{},{closeButton:!0})}]}class Co extends $t{constructor(t){super(),Nt(this,t,Ao,ko,a,{})}}
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
    ***************************************************************************** */var No=function(t,e){return(No=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)};function $o(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}var Ro,Do="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},xo=xo||{},Oo=Do||self;function Lo(){}function Po(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function Mo(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var Uo="closure_uid_"+(1e9*Math.random()>>>0),Vo=0;function Fo(t,e,n){return t.call.apply(t.bind,arguments)}function jo(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function Bo(t,e,n){return(Bo=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Fo:jo).apply(null,arguments)}function qo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function zo(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function Ho(){this.s=this.s,this.o=this.o}var Ko={};Ho.prototype.s=!1,Ho.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var t=function(t){return Object.prototype.hasOwnProperty.call(t,Uo)&&t[Uo]||(t[Uo]=++Vo)}(this);delete Ko[t]}},Ho.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};var Wo=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(var n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Go=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){for(var r=t.length,i="string"==typeof t?t.split(""):t,s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function Yo(t){return Array.prototype.concat.apply([],arguments)}function Jo(t){var e=t.length;if(0<e){for(var n=Array(e),r=0;r<e;r++)n[r]=t[r];return n}return[]}function Xo(t){return/^[\s\xa0]*$/.test(t)}var Qo,Zo=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ta(t,e){return-1!=t.indexOf(e)}function ea(t,e){return t<e?-1:t>e?1:0}t:{var na=Oo.navigator;if(na){var ra=na.userAgent;if(ra){Qo=ra;break t}}Qo=""}function ia(t,e,n){for(var r in t)e.call(n,t[r],r,t)}function sa(t){var e={};for(var n in t)e[n]=t[n];return e}var oa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function aa(t,e){for(var n,r,i=1;i<arguments.length;i++){for(n in r=arguments[i])t[n]=r[n];for(var s=0;s<oa.length;s++)n=oa[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function ca(t){return ca[" "](t),t}ca[" "]=Lo;var ua,la,ha=ta(Qo,"Opera"),da=ta(Qo,"Trident")||ta(Qo,"MSIE"),fa=ta(Qo,"Edge"),pa=fa||da,ma=ta(Qo,"Gecko")&&!(ta(Qo.toLowerCase(),"webkit")&&!ta(Qo,"Edge"))&&!(ta(Qo,"Trident")||ta(Qo,"MSIE"))&&!ta(Qo,"Edge"),ga=ta(Qo.toLowerCase(),"webkit")&&!ta(Qo,"Edge");function ya(){var t=Oo.document;return t?t.documentMode:void 0}t:{var va="",wa=(la=Qo,ma?/rv:([^\);]+)(\)|;)/.exec(la):fa?/Edge\/([\d\.]+)/.exec(la):da?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(la):ga?/WebKit\/(\S+)/.exec(la):ha?/(?:Version)[ \/]?(\S+)/.exec(la):void 0);if(wa&&(va=wa?wa[1]:""),da){var ba=ya();if(null!=ba&&ba>parseFloat(va)){ua=String(ba);break t}}ua=va}var Ea,Ia={};function _a(){return function(t){var e=Ia;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){for(var t=0,e=Zo(String(ua)).split("."),n=Zo("9").split("."),r=Math.max(e.length,n.length),i=0;0==t&&i<r;i++){var s=e[i]||"",o=n[i]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==s[0].length&&0==o[0].length)break;t=ea(0==s[1].length?0:parseInt(s[1],10),0==o[1].length?0:parseInt(o[1],10))||ea(0==s[2].length,0==o[2].length)||ea(s[2],o[2]),s=s[3],o=o[3]}while(0==t)}return 0<=t}))}if(Oo.document&&da){var Ta=ya();Ea=Ta||(parseInt(ua,10)||void 0)}else Ea=void 0;var Sa=Ea,ka=function(){if(!Oo.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Oo.addEventListener("test",Lo,e),Oo.removeEventListener("test",Lo,e)}catch(t){}return t}();function Aa(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function Ca(t,e){if(Aa.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ma){t:{try{ca(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:Na[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ca.Z.h.call(this)}}Aa.prototype.h=function(){this.defaultPrevented=!0},zo(Ca,Aa);var Na={2:"touch",3:"pen",4:"mouse"};Ca.prototype.h=function(){Ca.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var $a="closure_listenable_"+(1e6*Math.random()|0),Ra=0;function Da(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++Ra,this.ca=this.fa=!1}function xa(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Oa(t){this.src=t,this.g={},this.h=0}function La(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=Wo(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(xa(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function Pa(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}Oa.prototype.add=function(t,e,n,r,i){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=Pa(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):((e=new Da(e,this.src,s,!!r,i)).fa=n,t.push(e)),e};var Ma="closure_lm_"+(1e6*Math.random()|0),Ua={};function Va(t,e,n,r,i){if(r&&r.once)return ja(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Va(t,e[s],n,r,i);return null}return n=Ga(n),t&&t[$a]?t.N(e,n,Mo(r)?!!r.capture:!!r,i):Fa(t,e,n,!1,r,i)}function Fa(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Mo(i)?!!i.capture:!!i,a=Ka(t);if(a||(t[Ma]=a=new Oa(t)),(n=a.add(e,n,r,o,s)).proxy)return n;if(r=function(){function t(n){return e.call(t.src,t.listener,n)}var e=Ha;return t}(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)ka||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(za(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function ja(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)ja(t,e[s],n,r,i);return null}return n=Ga(n),t&&t[$a]?t.O(e,n,Mo(r)?!!r.capture:!!r,i):Fa(t,e,n,!0,r,i)}function Ba(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Ba(t,e[s],n,r,i);else r=Mo(r)?!!r.capture:!!r,n=Ga(n),t&&t[$a]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=Pa(s=t.g[e],n,r,i))&&(xa(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=Ka(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Pa(e,n,r,i)),(n=-1<t?e[t]:null)&&qa(n))}function qa(t){if("number"!=typeof t&&t&&!t.ca){var e=t.src;if(e&&e[$a])La(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(za(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Ka(e))?(La(n,t),0==n.h&&(n.src=null,e[Ma]=null)):xa(t)}}}function za(t){return t in Ua?Ua[t]:Ua[t]="on"+t}function Ha(t,e){if(t.ca)t=!0;else{e=new Ca(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&qa(t),t=n.call(r,e)}return t}function Ka(t){return(t=t[Ma])instanceof Oa?t:null}var Wa="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ga(t){return"function"==typeof t?t:(t[Wa]||(t[Wa]=function(e){return t.handleEvent(e)}),t[Wa])}function Ya(){Ho.call(this),this.i=new Oa(this),this.P=this,this.I=null}function Ja(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"==typeof e)e=new Aa(e,t);else if(e instanceof Aa)e.target=e.target||t;else{var i=e;aa(e=new Aa(r,t),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Xa(o,r,!0,e)&&i}if(i=Xa(o=e.g=t,r,!0,e)&&i,i=Xa(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)i=Xa(o=e.g=n[s],r,!1,e)&&i}function Xa(t,e,n,r){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&La(t.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}zo(Ya,Ho),Ya.prototype[$a]=!0,Ya.prototype.removeEventListener=function(t,e,n,r){Ba(this,t,e,n,r)},Ya.prototype.M=function(){if(Ya.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)xa(n[r]);delete e.g[t],e.h--}}this.I=null},Ya.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},Ya.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var Qa=Oo.JSON.stringify;function Za(){var t=ac,e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var tc,ec=function(){function t(){this.h=this.g=null}return t.prototype.add=function(t,e){var n=nc.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n},t}(),nc=new(function(){function t(t,e){this.i=t,this.j=e,this.h=0,this.g=null}return t.prototype.get=function(){var t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t},t}())((function(){return new rc}),(function(t){return t.reset()})),rc=function(){function t(){this.next=this.g=this.h=null}return t.prototype.set=function(t,e){this.h=t,this.g=e,this.next=null},t.prototype.reset=function(){this.next=this.g=this.h=null},t}();function ic(t){Oo.setTimeout((function(){throw t}),0)}function sc(t,e){tc||function(){var t=Oo.Promise.resolve(void 0);tc=function(){t.then(cc)}}(),oc||(tc(),oc=!0),ac.add(t,e)}var oc=!1,ac=new ec;function cc(){for(var t;t=Za();){try{t.h.call(t.g)}catch(t){ic(t)}var e=nc;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}oc=!1}function uc(t,e){Ya.call(this),this.h=t||1,this.g=e||Oo,this.j=Bo(this.kb,this),this.l=Date.now()}function lc(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function hc(t,e,n){if("function"==typeof t)n&&(t=Bo(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=Bo(t.handleEvent,t)}return 2147483647<Number(e)?-1:Oo.setTimeout(t,e||0)}function dc(t){t.g=hc((function(){t.g=null,t.i&&(t.i=!1,dc(t))}),t.j);var e=t.h;t.h=null,t.m.apply(null,e)}zo(uc,Ya),(Ro=uc.prototype).da=!1,Ro.S=null,Ro.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ja(this,"tick"),this.da&&(lc(this),this.start()))}},Ro.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Ro.M=function(){uc.Z.M.call(this),lc(this),delete this.g};var fc=function(t){function e(e,n){var r=t.call(this)||this;return r.m=e,r.j=n,r.h=null,r.i=!1,r.g=null,r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}No(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(e,t),e.prototype.l=function(t){this.h=arguments,this.g?this.i=!0:dc(this)},e.prototype.M=function(){t.prototype.M.call(this),this.g&&(Oo.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)},e}(Ho);function pc(t){Ho.call(this),this.h=t,this.g={}}zo(pc,Ho);var mc=[];function gc(t,e,n,r){Array.isArray(n)||(n&&(mc[0]=n.toString()),n=mc);for(var i=0;i<n.length;i++){var s=Va(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function yc(t){ia(t.g,(function(t,e){this.g.hasOwnProperty(e)&&qa(t)}),t),t.g={}}function vc(){this.g=!0}function wc(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Qa(n)}catch(t){return e}}(t,n)+(r?" "+r:"")}))}pc.prototype.M=function(){pc.Z.M.call(this),yc(this)},pc.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},vc.prototype.Aa=function(){this.g=!1},vc.prototype.info=function(){};var bc={},Ec=null;function Ic(){return Ec=Ec||new Ya}function _c(t){Aa.call(this,bc.Ma,t)}function Tc(t){var e=Ic();Ja(e,new _c(e,t))}function Sc(t,e){Aa.call(this,bc.STAT_EVENT,t),this.stat=e}function kc(t){var e=Ic();Ja(e,new Sc(e,t))}function Ac(t,e){Aa.call(this,bc.Na,t),this.size=e}function Cc(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return Oo.setTimeout((function(){t()}),e)}bc.Ma="serverreachability",zo(_c,Aa),bc.STAT_EVENT="statevent",zo(Sc,Aa),bc.Na="timingevent",zo(Ac,Aa);var Nc={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},$c={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Rc(){}function Dc(t){return t.h||(t.h=t.i())}function xc(){}Rc.prototype.h=null;var Oc,Lc={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Pc(){Aa.call(this,"d")}function Mc(){Aa.call(this,"c")}function Uc(){}function Vc(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new pc(this),this.P=jc,t=pa?125:void 0,this.W=new uc(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Fc}function Fc(){this.i=null,this.g="",this.h=!1}zo(Pc,Aa),zo(Mc,Aa),zo(Uc,Rc),Uc.prototype.g=function(){return new XMLHttpRequest},Uc.prototype.i=function(){return{}},Oc=new Uc;var jc=45e3,Bc={},qc={};function zc(t,e,n){t.K=1,t.v=fu(au(e)),t.s=n,t.U=!0,Hc(t,null)}function Hc(t,e){t.F=Date.now(),Yc(t),t.A=au(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),ku(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Fc,t.g=Al(t.l,n?e:null,!t.s),0<t.O&&(t.L=new fc(Bo(t.Ia,t,t.g),t.O)),gc(t.V,t.g,"readystatechange",t.gb),e=t.H?sa(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Tc(1),function(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.X,t.s)}function Kc(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Wc(t,e,n){for(var r,i=!0;!t.I&&t.C<n.length;){if((r=Gc(t,n))==qc){4==e&&(t.o=4,kc(14),i=!1),wc(t.j,t.m,null,"[Incomplete Response]");break}if(r==Bc){t.o=4,kc(15),wc(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}wc(t.j,t.m,r,null),tu(t,r)}Kc(t)&&r!=qc&&r!=Bc&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,kc(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,(e=t.l).g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),wl(e),e.L=!0,kc(11))):(wc(t.j,t.m,n,"[Invalid Chunked Response]"),Zc(t),Qc(t))}function Gc(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?qc:(n=Number(e.substring(n,r)),isNaN(n)?Bc:(r+=1)+n>e.length?qc:(e=e.substr(r,n),t.C=r+n,e))}function Yc(t){t.Y=Date.now()+t.P,Jc(t,t.P)}function Jc(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Cc(Bo(t.eb,t),e)}function Xc(t){t.B&&(Oo.clearTimeout(t.B),t.B=null)}function Qc(t){0==t.l.G||t.I||Il(t.l,t)}function Zc(t){Xc(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,lc(t.W),yc(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function tu(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||xu(n.i,t)))if(n.I=t.N,!t.J&&xu(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(s){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;El(n),ll(n)}vl(n),kc(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=Cc(Bo(n.ab,n),6e3));if(1>=Du(n.i)&&n.ka){try{n.ka()}catch(s){}n.ka=void 0}}else Tl(n,11)}else if((t.J||n.g==t)&&El(n),!Xo(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){var s=i[e];if(n.U=s[0],s=s[1],2==n.G)if("c"==s[0]){n.J=s[1],n.la=s[2];var o=s[3];null!=o&&(n.ma=o,n.h.info("VER="+n.ma));var a=s[4];null!=a&&(n.za=a,n.h.info("SVER="+n.za));var c=s[5];null!=c&&"number"==typeof c&&0<c&&(r=1.5*c,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;var u=t.g;if(u){var l=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(l){var h=r.i;!h.g&&(ta(l,"spdy")||ta(l,"quic")||ta(l,"h2"))&&(h.j=h.l,h.g=new Set,h.h&&(Ou(h,h.h),h.h=null))}if(r.D){var d=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;d&&(r.sa=d,du(r.F,r.D,d))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms"));var f=t;if((r=n).oa=kl(r,r.H?r.la:null,r.W),f.J){Lu(r.i,f);var p=f,m=r.K;m&&p.setTimeout(m),p.B&&(Xc(p),Yc(p)),r.g=f}else yl(r);0<n.l.length&&fl(n)}else"stop"!=s[0]&&"close"!=s[0]||Tl(n,7);else 3==n.G&&("stop"==s[0]||"close"==s[0]?"stop"==s[0]?Tl(n,7):ul(n):"noop"!=s[0]&&n.j&&n.j.wa(s),n.A=0)}Tc(4)}catch(s){}}function eu(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(Po(t)||"string"==typeof t)Go(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(Po(t)||"string"==typeof t){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;i=(r=function(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"==typeof t)return t.split("");if(Po(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}(t)).length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function nu(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof nu)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function ru(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];iu(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)iu(i,r=t.g[e])||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}function iu(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(Ro=Vc.prototype).setTimeout=function(t){this.P=t},Ro.gb=function(t){t=t.target;var e=this.L;e&&3==il(t)?e.l():this.Ia(t)},Ro.Ia=function(t){try{if(t==this.g)t:{var e=il(this.g),n=this.g.Da(),r=this.g.ba();if(!(3>e)&&(3!=e||pa||this.g&&(this.h.h||this.g.ga()||sl(this.g)))){this.I||4!=e||7==n||Tc(8==n||0>=r?3:2),Xc(this);var i=this.g.ba();this.N=i;e:if(Kc(this)){var s=sl(this.g);t="";var o=s.length,a=4==il(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Zc(this),Qc(this);var c="";break e}this.h.i=new Oo.TextDecoder}for(n=0;n<o;n++)this.h.h=!0,t+=this.h.i.decode(s[n],{stream:a&&n==o-1});s.splice(0,o),this.h.g+=t,this.C=0,c=this.h.g}else c=this.g.ga();if(this.i=200==i,function(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.X,e,i),this.i){if(this.$&&!this.J){e:{if(this.g){var u,l=this.g;if((u=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Xo(u)){var h=u;break e}}h=null}if(!(i=h)){this.i=!1,this.o=3,kc(12),Zc(this),Qc(this);break t}wc(this.j,this.m,i,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,tu(this,i)}this.U?(Wc(this,e,c),pa&&this.i&&3==e&&(gc(this.V,this.W,"tick",this.fb),this.W.start())):(wc(this.j,this.m,c,null),tu(this,c)),4==e&&Zc(this),this.i&&!this.I&&(4==e?Il(this.l,this):(this.i=!1,Yc(this)))}else 400==i&&0<c.indexOf("Unknown SID")?(this.o=3,kc(12)):(this.o=0,kc(13)),Zc(this),Qc(this)}}}catch(e){}},Ro.fb=function(){if(this.g){var t=il(this.g),e=this.g.ga();this.C<e.length&&(Xc(this),Wc(this,t,e),this.i&&4!=t&&Yc(this))}},Ro.cancel=function(){this.I=!0,Zc(this)},Ro.eb=function(){this.B=null;var t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(Tc(3),kc(17)),Zc(this),this.o=2,Qc(this)):Jc(this,this.Y-t)},(Ro=nu.prototype).R=function(){ru(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},Ro.T=function(){return ru(this),this.g.concat()},Ro.get=function(t,e){return iu(this.h,t)?this.h[t]:e},Ro.set=function(t,e){iu(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},Ro.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};var su=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ou(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof ou){this.g=void 0!==e?e:t.g,cu(this,t.j),this.s=t.s,uu(this,t.i),lu(this,t.m),this.l=t.l,e=t.h;var n=new Iu;n.i=e.i,e.g&&(n.g=new nu(e.g),n.h=e.h),hu(this,n),this.o=t.o}else t&&(n=String(t).match(su))?(this.g=!!e,cu(this,n[1]||"",!0),this.s=pu(n[2]||""),uu(this,n[3]||"",!0),lu(this,n[4]),this.l=pu(n[5]||"",!0),hu(this,n[6]||"",!0),this.o=pu(n[7]||"")):(this.g=!!e,this.h=new Iu(null,this.g))}function au(t){return new ou(t)}function cu(t,e,n){t.j=n?pu(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function uu(t,e,n){t.i=n?pu(e,!0):e}function lu(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function hu(t,e,n){e instanceof Iu?(t.h=e,function(t,e){e&&!t.j&&(_u(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Tu(this,e),ku(this,n,t))}),t)),t.j=e}(t.h,t.g)):(n||(e=mu(e,bu)),t.h=new Iu(e,t.g))}function du(t,e,n){t.h.set(e,n)}function fu(t){return du(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function pu(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function mu(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,gu),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function gu(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}ou.prototype.toString=function(){var t=[],e=this.j;e&&t.push(mu(e,yu,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(mu(e,yu,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(mu(n,"/"==n.charAt(0)?wu:vu,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",mu(n,Eu)),t.join("")};var yu=/[#\/\?@]/g,vu=/[#\?:]/g,wu=/[#\?]/g,bu=/[#\?@]/g,Eu=/#/g;function Iu(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function _u(t){t.g||(t.g=new nu,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Tu(t,e){_u(t),e=Au(t,e),iu(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,iu((t=t.g).h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&ru(t)))}function Su(t,e){return _u(t),e=Au(t,e),iu(t.g.h,e)}function ku(t,e,n){Tu(t,e),0<n.length&&(t.i=null,t.g.set(Au(t,e),Jo(n)),t.h+=n.length)}function Au(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(Ro=Iu.prototype).add=function(t,e){_u(this),this.i=null,t=Au(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},Ro.forEach=function(t,e){_u(this),this.g.forEach((function(n,r){Go(n,(function(n){t.call(e,n,r,this)}),this)}),this)},Ro.T=function(){_u(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n},Ro.R=function(t){_u(this);var e=[];if("string"==typeof t)Su(this,t)&&(e=Yo(e,this.g.get(Au(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Yo(e,t[n])}return e},Ro.set=function(t,e){return _u(this),this.i=null,Su(this,t=Au(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},Ro.get=function(t,e){return t&&0<(t=this.R(t)).length?String(t[0]):e},Ro.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};var Cu=function(t,e){this.h=t,this.g=e};function Nu(t){this.l=t||$u,Oo.PerformanceNavigationTiming?t=0<(t=Oo.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(Oo.g&&Oo.g.Ea&&Oo.g.Ea()&&Oo.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var $u=10;function Ru(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Du(t){return t.h?1:t.g?t.g.size:0}function xu(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Ou(t,e){t.g?t.g.add(e):t.h=e}function Lu(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Pu(t){var e,n;if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){var r=t.i;try{for(var i=$o(t.g.values()),s=i.next();!s.done;s=i.next()){var o=s.value;r=r.concat(o.D)}}catch(t){e={error:t}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}return r}return Jo(t.i)}function Mu(){}function Uu(){this.g=new Mu}function Vu(t,e,n){var r=n||"";try{eu(t,(function(t,n){var i=t;Mo(t)&&(i=Qa(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(t){throw e.push(r+"type="+encodeURIComponent("_badmap")),t}}function Fu(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(t){}}function ju(t){this.l=t.$b||null,this.j=t.ib||!1}function Bu(t,e){Ya.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=qu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Nu.prototype.cancel=function(){var t,e;if(this.i=Pu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){try{for(var n=$o(this.g.values()),r=n.next();!r.done;r=n.next()){r.value.cancel()}}catch(e){t={error:e}}finally{try{r&&!r.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}this.g.clear()}},Mu.prototype.stringify=function(t){return Oo.JSON.stringify(t,void 0)},Mu.prototype.parse=function(t){return Oo.JSON.parse(t,void 0)},zo(ju,Rc),ju.prototype.g=function(){return new Bu(this.l,this.j)},ju.prototype.i=function(t){return function(){return t}}({}),zo(Bu,Ya);var qu=0;function zu(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Hu(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ku(t)}function Ku(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(Ro=Bu.prototype).open=function(t,e){if(this.readyState!=qu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ku(this)},Ro.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;var e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Oo).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},Ro.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Hu(this)),this.readyState=qu},Ro.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ku(this)),this.g&&(this.readyState=3,Ku(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==Oo.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;zu(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},Ro.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Hu(this):Ku(this),3==this.readyState&&zu(this)}},Ro.Ua=function(t){this.g&&(this.response=this.responseText=t,Hu(this))},Ro.Ta=function(t){this.g&&(this.response=t,Hu(this))},Ro.ha=function(){this.g&&Hu(this)},Ro.setRequestHeader=function(t,e){this.v.append(t,e)},Ro.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},Ro.getAllResponseHeaders=function(){if(!this.h)return"";for(var t=[],e=this.h.entries(),n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Bu.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Wu=Oo.JSON.parse;function Gu(t){Ya.call(this),this.headers=new nu,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Yu,this.K=this.L=!1}zo(Gu,Ya);var Yu="",Ju=/^https?$/i,Xu=["POST","PUT"];function Qu(t){return"content-type"==t.toLowerCase()}function Zu(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,tl(t),nl(t)}function tl(t){t.D||(t.D=!0,Ja(t,"complete"),Ja(t,"error"))}function el(t){if(t.h&&void 0!==xo&&(!t.C[1]||4!=il(t)||2!=t.ba()))if(t.v&&4==il(t))hc(t.Fa,0,t);else if(Ja(t,"readystatechange"),4==il(t)){t.h=!1;try{var e,n=t.ba();t:switch(n){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break t;default:r=!1}if(!(e=r)){var i;if(i=0===n){var s=String(t.H).match(su)[1]||null;if(!s&&Oo.self&&Oo.self.location){var o=Oo.self.location.protocol;s=o.substr(0,o.length-1)}i=!Ju.test(s?s.toLowerCase():"")}e=i}if(e)Ja(t,"complete"),Ja(t,"success");else{t.m=6;try{var a=2<il(t)?t.g.statusText:""}catch(t){a=""}t.j=a+" ["+t.ba()+"]",tl(t)}}finally{nl(t)}}}function nl(t,e){if(t.g){rl(t);var n=t.g,r=t.C[0]?Lo:null;t.g=null,t.C=null,e||Ja(t,"ready");try{n.onreadystatechange=r}catch(t){}}}function rl(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Oo.clearTimeout(t.A),t.A=null)}function il(t){return t.g?t.g.readyState:0}function sl(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Yu:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function ol(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=function(t){var e="";return ia(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):du(t,e,n))}function al(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function cl(t){this.za=0,this.l=[],this.h=new vc,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=al("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=al("baseRetryDelayMs",5e3,t),this.$a=al("retryDelaySeedMs",1e4,t),this.Ya=al("forwardChannelMaxRetries",2,t),this.ra=al("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Nu(t&&t.concurrentRequestLimit),this.Ca=new Uu,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function ul(t){if(hl(t),3==t.G){var e=t.V++,n=au(t.F);du(n,"SID",t.J),du(n,"RID",e),du(n,"TYPE","terminate"),ml(t,n),(e=new Vc(t,t.h,e,void 0)).K=2,e.v=fu(au(n)),n=!1,Oo.navigator&&Oo.navigator.sendBeacon&&(n=Oo.navigator.sendBeacon(e.v.toString(),"")),!n&&Oo.Image&&((new Image).src=e.v,n=!0),n||(e.g=Al(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Yc(e)}Sl(t)}function ll(t){t.g&&(wl(t),t.g.cancel(),t.g=null)}function hl(t){ll(t),t.u&&(Oo.clearTimeout(t.u),t.u=null),El(t),t.i.cancel(),t.m&&("number"==typeof t.m&&Oo.clearTimeout(t.m),t.m=null)}function dl(t,e){t.l.push(new Cu(t.Za++,e)),3==t.G&&fl(t)}function fl(t){Ru(t.i)||t.m||(t.m=!0,sc(t.Ha,t),t.C=0)}function pl(t,e){var n;n=e?e.m:t.V++;var r=au(t.F);du(r,"SID",t.J),du(r,"RID",n),du(r,"AID",t.U),ml(t,r),t.o&&t.s&&ol(r,t.o,t.s),n=new Vc(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=gl(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Ou(t.i,n),zc(n,r,e)}function ml(t,e){t.j&&eu({},(function(t,n){du(e,n,t)}))}function gl(t,e,n){n=Math.min(t.l.length,n);var r=t.j?Bo(t.j.Oa,t.j,t):null;t:for(var i=t.l,s=-1;;){var o=["count="+n];-1==s?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);for(var a=!0,c=0;c<n;c++){var u=i[c].h,l=i[c].g;if(0>(u-=s))s=Math.max(0,i[c].h-100),a=!1;else try{Vu(l,o,"req"+u+"_")}catch(t){r&&r(l)}}if(a){r=o.join("&");break t}}return t=t.l.splice(0,n),e.D=t,r}function yl(t){t.g||t.u||(t.Y=1,sc(t.Ga,t),t.A=0)}function vl(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=Cc(Bo(t.Ga,t),_l(t,t.A)),t.A++,!0)}function wl(t){null!=t.B&&(Oo.clearTimeout(t.B),t.B=null)}function bl(t){t.g=new Vc(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=au(t.oa);du(e,"RID","rpc"),du(e,"SID",t.J),du(e,"CI",t.N?"0":"1"),du(e,"AID",t.U),ml(t,e),du(e,"TYPE","xmlhttp"),t.o&&t.s&&ol(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=fu(au(e)),n.s=null,n.U=!0,Hc(n,t)}function El(t){null!=t.v&&(Oo.clearTimeout(t.v),t.v=null)}function Il(t,e){var n=null;if(t.g==e){El(t),wl(t),t.g=null;var r=2}else{if(!xu(t.i,e))return;n=e.D,Lu(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;Ja(r=Ic(),new Ac(r,n,e,i)),fl(t)}else yl(t);else if(3==(i=e.o)||0==i&&0<t.I||!(1==r&&function(t,e){return!(Du(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.l=e.D.concat(t.l),0):1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya)||(t.m=Cc(Bo(t.Ha,t,e),_l(t,t.C)),t.C++,0)))}(t,e)||2==r&&vl(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Tl(t,5);break;case 4:Tl(t,10);break;case 3:Tl(t,6);break;default:Tl(t,2)}}function _l(t,e){var n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Tl(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=Bo(t.jb,t);n||(n=new ou("//www.google.com/images/cleardot.gif"),Oo.location&&"http"==Oo.location.protocol||cu(n,"https"),fu(n)),function(t,e){var n=new vc;if(Oo.Image){var r=new Image;r.onload=qo(Fu,n,r,"TestLoadImage: loaded",!0,e),r.onerror=qo(Fu,n,r,"TestLoadImage: error",!1,e),r.onabort=qo(Fu,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=qo(Fu,n,r,"TestLoadImage: timeout",!1,e),Oo.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}(n.toString(),r)}else kc(2);t.G=0,t.j&&t.j.va(e),Sl(t),hl(t)}function Sl(t){t.G=0,t.I=-1,t.j&&(0==Pu(t.i).length&&0==t.l.length||(t.i.i.length=0,Jo(t.l),t.l.length=0),t.j.ua())}function kl(t,e,n){var r=function(t){return t instanceof ou?au(t):new ou(t,void 0)}(n);if(""!=r.i)e&&uu(r,e+"."+r.i),lu(r,r.m);else{var i=Oo.location;r=function(t,e,n,r){var i=new ou(null,void 0);return t&&cu(i,t),e&&uu(i,e),n&&lu(i,n),r&&(i.l=r),i}(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&ia(t.aa,(function(t,e){du(r,e,t)})),e=t.D,n=t.sa,e&&n&&du(r,e,n),du(r,"VER",t.ma),ml(t,r),r}function Al(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ba&&!t.qa?new Gu(new ju({ib:!0})):new Gu(t.qa)).L=t.H,e}function Cl(){}function Nl(){if(da&&!(10<=Number(Sa)))throw Error("Environmental error: no available transport.")}function $l(t,e){Ya.call(this),this.g=new cl(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Xo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Xo(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new xl(this)}function Rl(t){Pc.call(this);var e=t.__sm__;if(e){t:{for(var n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Dl(){Mc.call(this),this.status=1}function xl(t){this.g=t}(Ro=Gu.prototype).ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Oc.g(),this.C=this.u?Dc(this.u):Dc(Oc),this.g.onreadystatechange=Bo(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void Zu(this,t)}t=n||"";var i=new nu(this.headers);r&&eu(r,(function(t,e){i.set(e,t)})),r=function(t){t:{for(var e=Qu,n=t.length,r="string"==typeof t?t.split(""):t,i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(i.T()),n=Oo.FormData&&t instanceof Oo.FormData,!(0<=Wo(Xu,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{rl(this),0<this.B&&((this.K=function(t){return da&&_a()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Bo(this.pa,this)):this.A=hc(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){Zu(this,t)}},Ro.pa=function(){void 0!==xo&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ja(this,"timeout"),this.abort(8))},Ro.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ja(this,"complete"),Ja(this,"abort"),nl(this))},Ro.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),nl(this,!0)),Gu.Z.M.call(this)},Ro.Fa=function(){this.s||(this.F||this.v||this.l?el(this):this.cb())},Ro.cb=function(){el(this)},Ro.ba=function(){try{return 2<il(this)?this.g.status:-1}catch(t){return-1}},Ro.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},Ro.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Wu(e)}},Ro.Da=function(){return this.m},Ro.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(Ro=cl.prototype).ma=8,Ro.G=1,Ro.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(t){}},Ro.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;var e=new Vc(this,this.h,t,void 0),n=this.s;if(this.P&&(n?aa(n=sa(n),this.P):n=this.P),null===this.o&&(e.H=n),this.ja)t:{for(var r=0,i=0;i<this.l.length;i++){var s=this.l[i];if(void 0===(s="__data__"in s.g&&"string"==typeof(s=s.g.__data__)?s.length:void 0))break;if(4096<(r+=s)){r=i;break t}if(4096===r||i===this.l.length-1){r=i+1;break t}}r=1e3}else r=1e3;r=gl(this,e,r),du(i=au(this.F),"RID",t),du(i,"CVER",22),this.D&&du(i,"X-HTTP-Session-Id",this.D),ml(this,i),this.o&&n&&ol(i,this.o,n),Ou(this.i,e),this.Ra&&du(i,"TYPE","init"),this.ja?(du(i,"$req",r),du(i,"SID","null"),e.$=!0,zc(e,i,null)):zc(e,i,r),this.G=2}}else 3==this.G&&(t?pl(this,t):0==this.l.length||Ru(this.i)||pl(this))},Ro.Ga=function(){if(this.u=null,bl(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Cc(Bo(this.bb,this),t)}},Ro.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,kc(10),ll(this),bl(this))},Ro.ab=function(){null!=this.v&&(this.v=null,ll(this),vl(this),kc(19))},Ro.jb=function(t){t?(this.h.info("Successfully pinged google.com"),kc(2)):(this.h.info("Failed to ping google.com"),kc(1))},(Ro=Cl.prototype).xa=function(){},Ro.wa=function(){},Ro.va=function(){},Ro.ua=function(){},Ro.Oa=function(){},Nl.prototype.g=function(t,e){return new $l(t,e)},zo($l,Ya),$l.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),sc(Bo(t.hb,t,e))),kc(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=kl(t,null,t.W),fl(t)},$l.prototype.close=function(){ul(this.g)},$l.prototype.u=function(t){if("string"==typeof t){var e={};e.__data__=t,dl(this.g,e)}else this.v?((e={}).__data__=Qa(t),dl(this.g,e)):dl(this.g,t)},$l.prototype.M=function(){this.g.j=null,delete this.j,ul(this.g),delete this.g,$l.Z.M.call(this)},zo(Rl,Pc),zo(Dl,Mc),zo(xl,Cl),xl.prototype.xa=function(){Ja(this.g,"a")},xl.prototype.wa=function(t){Ja(this.g,new Rl(t))},xl.prototype.va=function(t){Ja(this.g,new Dl(t))},xl.prototype.ua=function(){Ja(this.g,"b")},Nl.prototype.createWebChannel=Nl.prototype.g,$l.prototype.send=$l.prototype.u,$l.prototype.open=$l.prototype.m,$l.prototype.close=$l.prototype.close,Nc.NO_ERROR=0,Nc.TIMEOUT=8,Nc.HTTP_ERROR=6,$c.COMPLETE="complete",xc.EventType=Lc,Lc.OPEN="a",Lc.CLOSE="b",Lc.ERROR="c",Lc.MESSAGE="d",Ya.prototype.listen=Ya.prototype.N,Gu.prototype.listenOnce=Gu.prototype.O,Gu.prototype.getLastError=Gu.prototype.La,Gu.prototype.getLastErrorCode=Gu.prototype.Da,Gu.prototype.getStatus=Gu.prototype.ba,Gu.prototype.getResponseJson=Gu.prototype.Qa,Gu.prototype.getResponseText=Gu.prototype.ga,Gu.prototype.send=Gu.prototype.ea;var Ol=Nc,Ll=$c,Pl=bc,Ml=10,Ul=11,Vl=ju,Fl=xc,jl=Gu;
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
class Bl{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Bl.UNAUTHENTICATED=new Bl(null),Bl.GOOGLE_CREDENTIALS=new Bl("google-credentials-uid"),Bl.FIRST_PARTY=new Bl("first-party-uid"),Bl.MOCK_USER=new Bl("mock-user");
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
let ql="9.0.2";
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
     */const zl=new pe("@firebase/firestore");function Hl(){return zl.logLevel}function Kl(t,...e){if(zl.logLevel<=ae.DEBUG){const n=e.map(Yl);zl.debug(`Firestore (${ql}): ${t}`,...n)}}function Wl(t,...e){if(zl.logLevel<=ae.ERROR){const n=e.map(Yl);zl.error(`Firestore (${ql}): ${t}`,...n)}}function Gl(t,...e){if(zl.logLevel<=ae.WARN){const n=e.map(Yl);zl.warn(`Firestore (${ql}): ${t}`,...n)}}function Yl(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
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
     */function Jl(t="Unexpected state"){const e=`FIRESTORE (${ql}) INTERNAL ASSERTION FAILED: `+t;throw Wl(e),new Error(e)}function Xl(t,e){t||Jl()}function Ql(t,e){return t}
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
     */const Zl={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class th extends Error{constructor(t,e){super(e),this.code=t,this.message=e,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
     */class eh{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
     */class nh{constructor(t,e){this.user=e,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${t}`}}class rh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Bl.UNAUTHENTICATED)))}shutdown(){}}class ih{constructor(t){this.t=t,this.currentUser=Bl.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new eh;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new eh,t.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{Kl("FirebaseCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Kl("FirebaseCredentialsProvider","Auth not yet detected"),i.resolve(),i=new eh)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Kl("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Xl("string"==typeof e.accessToken),new nh(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Xl(null===t||"string"==typeof t),new Bl(t)}}class sh{constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=Bl.FIRST_PARTY}get authHeaders(){const t={"X-Goog-AuthUser":this.l},e=this.h.auth.getAuthHeaderValueForFirstParty([]);return e&&(t.Authorization=e),this.m&&(t["X-Goog-Iam-Authorization-Token"]=this.m),t}}class oh{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new sh(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(Bl.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}
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
     */class ah{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.g(t),this.p=t=>e.writeSequenceNumber(t))}g(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.p&&this.p(t),t}}
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
     */function ch(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
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
     */ah.T=-1;class uh{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=ch(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function lh(t,e){return t<e?-1:t>e?1:0}function hh(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
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
     */class dh{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new th(Zl.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new th(Zl.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new th(Zl.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new th(Zl.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return dh.fromMillis(Date.now())}static fromDate(t){return dh.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new dh(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?lh(this.nanoseconds,t.nanoseconds):lh(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
     */class fh{constructor(t){this.timestamp=t}static fromTimestamp(t){return new fh(t)}static min(){return new fh(new dh(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
     */function ph(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function mh(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function gh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
     */class yh{constructor(t,e,n){void 0===e?e=0:e>t.length&&Jl(),void 0===n?n=t.length-e:n>t.length-e&&Jl(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===yh.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof yh?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class vh extends yh{construct(t,e,n){return new vh(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new th(Zl.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new vh(e)}static emptyPath(){return new vh([])}}const wh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class bh extends yh{construct(t,e,n){return new bh(t,e,n)}static isValidIdentifier(t){return wh.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bh.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new bh(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new th(Zl.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new th(Zl.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new th(Zl.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new th(Zl.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new bh(e)}static emptyPath(){return new bh([])}}
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
     */class Eh{constructor(t){this.fields=t,t.sort(bh.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return hh(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
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
     */class Ih{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Ih(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Ih(e)}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
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
     */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return lh(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ih.EMPTY_BYTE_STRING=new Ih("");const _h=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Th(t){if(Xl(!!t),"string"==typeof t){let e=0;const n=_h.exec(t);if(Xl(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Sh(t.seconds),nanos:Sh(t.nanos)}}function Sh(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function kh(t){return"string"==typeof t?Ih.fromBase64String(t):Ih.fromUint8Array(t)}
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
     */function Ah(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ch(t){const e=t.mapValue.fields.__previous_value__;return Ah(e)?Ch(e):e}function Nh(t){const e=Th(t.mapValue.fields.__local_write_time__.timestampValue);return new dh(e.seconds,e.nanos)}
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
     */function $h(t){return null==t}function Rh(t){return 0===t&&1/t==-1/0}
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
class Dh{constructor(t){this.path=t}static fromPath(t){return new Dh(vh.fromString(t))}static fromName(t){return new Dh(vh.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===vh.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return vh.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Dh(new vh(t.slice()))}}
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
     */function xh(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ah(t)?4:10:Jl()}function Oh(t,e){const n=xh(t);if(n!==xh(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Nh(t).isEqual(Nh(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Th(t.timestampValue),r=Th(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return kh(t.bytesValue).isEqual(kh(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Sh(t.geoPointValue.latitude)===Sh(e.geoPointValue.latitude)&&Sh(t.geoPointValue.longitude)===Sh(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Sh(t.integerValue)===Sh(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Sh(t.doubleValue),r=Sh(e.doubleValue);return n===r?Rh(n)===Rh(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return hh(t.arrayValue.values||[],e.arrayValue.values||[],Oh);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(ph(n)!==ph(r))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===r[t]||!Oh(n[t],r[t])))return!1;return!0}(t,e);default:return Jl()}}function Lh(t,e){return void 0!==(t.values||[]).find((t=>Oh(t,e)))}function Ph(t,e){const n=xh(t),r=xh(e);if(n!==r)return lh(n,r);switch(n){case 0:return 0;case 1:return lh(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Sh(t.integerValue||t.doubleValue),r=Sh(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return Mh(t.timestampValue,e.timestampValue);case 4:return Mh(Nh(t),Nh(e));case 5:return lh(t.stringValue,e.stringValue);case 6:return function(t,e){const n=kh(t),r=kh(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let t=0;t<n.length&&t<r.length;t++){const e=lh(n[t],r[t]);if(0!==e)return e}return lh(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=lh(Sh(t.latitude),Sh(e.latitude));return 0!==n?n:lh(Sh(t.longitude),Sh(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let t=0;t<n.length&&t<r.length;++t){const e=Ph(n[t],r[t]);if(e)return e}return lh(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let t=0;t<r.length&&t<s.length;++t){const e=lh(r[t],s[t]);if(0!==e)return e;const o=Ph(n[r[t]],i[s[t]]);if(0!==o)return o}return lh(r.length,s.length)}(t.mapValue,e.mapValue);default:throw Jl()}}function Mh(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return lh(t,e);const n=Th(t),r=Th(e),i=lh(n.seconds,r.seconds);return 0!==i?i:lh(n.nanos,r.nanos)}function Uh(t){return Vh(t)}function Vh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Th(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?kh(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Dh.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=Vh(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${Vh(t.fields[i])}`;return n+"}"}(t.mapValue):Jl();var e,n}function Fh(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function jh(t){return!!t&&"integerValue"in t}function Bh(t){return!!t&&"arrayValue"in t}function qh(t){return!!t&&"nullValue"in t}function zh(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Hh(t){return!!t&&"mapValue"in t}function Kh(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return mh(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Kh(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Kh(t.arrayValue.values[n]);return e}return Object.assign({},t)}
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
     */class Wh{constructor(t){this.value=t}static empty(){return new Wh({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Hh(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Kh(e)}setAll(t){let e=bh.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=Kh(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());Hh(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Oh(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Hh(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){mh(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new Wh(Kh(this.value))}}function Gh(t){const e=[];return mh(t.fields,((t,n)=>{const r=new bh([t]);if(Hh(n)){const t=Gh(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new Eh(e)
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
     */}class Yh{constructor(t,e,n,r,i){this.key=t,this.documentType=e,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(t){return new Yh(t,0,fh.min(),Wh.empty(),0)}static newFoundDocument(t,e,n){return new Yh(t,1,e,n,0)}static newNoDocument(t,e){return new Yh(t,2,e,Wh.empty(),0)}static newUnknownDocument(t,e){return new Yh(t,3,e,Wh.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Wh.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Wh.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Yh&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}clone(){return new Yh(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
     */class Jh{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.A=null}}function Xh(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Jh(t,e,n,r,i,s,o)}function Qh(t){const e=Ql(t);if(null===e.A){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>function(t){return t.field.canonicalString()+t.op.toString()+Uh(t.value)}(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),$h(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=hd(e.startAt)),e.endAt&&(t+="|ub:",t+=hd(e.endAt)),e.A=t}return e.A}function Zh(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!fd(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Oh(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!md(t.startAt,e.startAt)&&md(t.endAt,e.endAt)}function td(t){return Dh.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class ed extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.R(t,e,n):new nd(t,e,n):"array-contains"===e?new od(t,n):"in"===e?new ad(t,n):"not-in"===e?new cd(t,n):"array-contains-any"===e?new ud(t,n):new ed(t,e,n)}static R(t,e,n){return"in"===e?new rd(t,n):new id(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.P(Ph(e,this.value)):null!==e&&xh(this.value)===xh(e)&&this.P(Ph(e,this.value))}P(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Jl()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class nd extends ed{constructor(t,e,n){super(t,e,n),this.key=Dh.fromName(n.referenceValue)}matches(t){const e=Dh.comparator(t.key,this.key);return this.P(e)}}class rd extends ed{constructor(t,e){super(t,"in",e),this.keys=sd("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class id extends ed{constructor(t,e){super(t,"not-in",e),this.keys=sd("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function sd(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Dh.fromName(t.referenceValue)))}class od extends ed{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Bh(e)&&Lh(e.arrayValue,this.value)}}class ad extends ed{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Lh(this.value.arrayValue,e)}}class cd extends ed{constructor(t,e){super(t,"not-in",e)}matches(t){if(Lh(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Lh(this.value.arrayValue,e)}}class ud extends ed{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Bh(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Lh(this.value.arrayValue,t)))}}class ld{constructor(t,e){this.position=t,this.before=e}}function hd(t){return`${t.before?"b":"a"}:${t.position.map((t=>Uh(t))).join(",")}`}class dd{constructor(t,e="asc"){this.field=t,this.dir=e}}function fd(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function pd(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?Dh.comparator(Dh.fromName(o.referenceValue),n.key):Ph(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return t.before?r<=0:r<0}function md(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Oh(t.position[n],e.position[n]))return!1;return!0}
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
     */class gd{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.V=null,this.S=null,this.startAt,this.endAt}}function yd(t){return new gd(t)}function vd(t){return!$h(t.limit)&&"F"===t.limitType}function wd(t){return!$h(t.limit)&&"L"===t.limitType}function bd(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ed(t){for(const e of t.filters)if(e.v())return e.field;return null}function Id(t){return null!==t.collectionGroup}function _d(t){const e=Ql(t);if(null===e.V){e.V=[];const t=Ed(e),n=bd(e);if(null!==t&&null===n)t.isKeyField()||e.V.push(new dd(t)),e.V.push(new dd(bh.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.V.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new dd(bh.keyField(),t))}}}return e.V}function Td(t){const e=Ql(t);if(!e.S)if("F"===e.limitType)e.S=Xh(e.path,e.collectionGroup,_d(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of _d(e)){const e="desc"===n.dir?"asc":"desc";t.push(new dd(n.field,e))}const n=e.endAt?new ld(e.endAt.position,!e.endAt.before):null,r=e.startAt?new ld(e.startAt.position,!e.startAt.before):null;e.S=Xh(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.S}function Sd(t,e,n){return new gd(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function kd(t,e){return Zh(Td(t),Td(e))&&t.limitType===e.limitType}function Ad(t){return`${Qh(Td(t))}|lt:${t.limitType}`}function Cd(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${Uh(e.value)}`;var e})).join(", ")}]`),$h(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: "+hd(t.startAt)),t.endAt&&(e+=", endAt: "+hd(t.endAt)),`Target(${e})`}(Td(t))}; limitType=${t.limitType})`}function Nd(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Dh.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!pd(t.startAt,_d(t),e))&&(!t.endAt||!pd(t.endAt,_d(t),e))}(t,e)}function $d(t){return(e,n)=>{let r=!1;for(const i of _d(t)){const t=Rd(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function Rd(t,e,n){const r=t.field.isKeyField()?Dh.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?Ph(r,i):Jl()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Jl()}}
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
     */function Dd(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Rh(e)?"-0":e}}function xd(t){return{integerValue:""+t}}function Od(t,e){return function(t){return"number"==typeof t&&Number.isInteger(t)&&!Rh(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}(e)?xd(e):Dd(t,e)}
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
     */class Ld{constructor(){this._=void 0}}function Pd(t,e,n){return t instanceof Vd?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Fd?jd(t,e):t instanceof Bd?qd(t,e):function(t,e){const n=Ud(t,e),r=Hd(n)+Hd(t.C);return jh(n)&&jh(t.C)?xd(r):Dd(t.N,r)}(t,e)}function Md(t,e,n){return t instanceof Fd?jd(t,e):t instanceof Bd?qd(t,e):n}function Ud(t,e){return t instanceof zd?jh(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class Vd extends Ld{}class Fd extends Ld{constructor(t){super(),this.elements=t}}function jd(t,e){const n=Kd(e);for(const e of t.elements)n.some((t=>Oh(t,e)))||n.push(e);return{arrayValue:{values:n}}}class Bd extends Ld{constructor(t){super(),this.elements=t}}function qd(t,e){let n=Kd(e);for(const e of t.elements)n=n.filter((t=>!Oh(t,e)));return{arrayValue:{values:n}}}class zd extends Ld{constructor(t,e){super(),this.N=t,this.C=e}}function Hd(t){return Sh(t.integerValue||t.doubleValue)}function Kd(t){return Bh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}class Wd{constructor(t,e){this.version=t,this.transformResults=e}}class Gd{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Gd}static exists(t){return new Gd(void 0,t)}static updateTime(t){return new Gd(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Yd(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Jd{}function Xd(t,e,n){t instanceof nf?function(t,e,n){const r=t.value.clone(),i=of(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof rf?function(t,e,n){if(!Yd(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=of(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(sf(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Qd(t,e,n){t instanceof nf?function(t,e,n){if(!Yd(t.precondition,e))return;const r=t.value.clone(),i=af(t.fieldTransforms,n,e);r.setAll(i),e.convertToFoundDocument(ef(e),r).setHasLocalMutations()}(t,e,n):t instanceof rf?function(t,e,n){if(!Yd(t.precondition,e))return;const r=af(t.fieldTransforms,n,e),i=e.data;i.setAll(sf(t)),i.setAll(r),e.convertToFoundDocument(ef(e),i).setHasLocalMutations()}(t,e,n):function(t,e){Yd(t.precondition,e)&&e.convertToNoDocument(fh.min())}(t,e)}function Zd(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=Ud(r.transform,t||null);null!=i&&(null==n&&(n=Wh.empty()),n.set(r.field,i))}return n||null}function tf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&hh(t,e,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Fd&&e instanceof Fd||t instanceof Bd&&e instanceof Bd?hh(t.elements,e.elements,Oh):t instanceof zd&&e instanceof zd?Oh(t.C,e.C):t instanceof Vd&&e instanceof Vd}(t.transform,e.transform)}(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function ef(t){return t.isFoundDocument()?t.version:fh.min()}class nf extends Jd{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}}class rf extends Jd{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function sf(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function of(t,e,n){const r=new Map;Xl(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Md(o,a,n[i]))}return r}function af(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,Pd(t,s,e))}return r}class cf extends Jd{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class uf extends Jd{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
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
     */class lf{constructor(t){this.count=t}}
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
     */var hf,df;function ff(t){if(void 0===t)return Wl("GRPC error has no .code"),Zl.UNKNOWN;switch(t){case hf.OK:return Zl.OK;case hf.CANCELLED:return Zl.CANCELLED;case hf.UNKNOWN:return Zl.UNKNOWN;case hf.DEADLINE_EXCEEDED:return Zl.DEADLINE_EXCEEDED;case hf.RESOURCE_EXHAUSTED:return Zl.RESOURCE_EXHAUSTED;case hf.INTERNAL:return Zl.INTERNAL;case hf.UNAVAILABLE:return Zl.UNAVAILABLE;case hf.UNAUTHENTICATED:return Zl.UNAUTHENTICATED;case hf.INVALID_ARGUMENT:return Zl.INVALID_ARGUMENT;case hf.NOT_FOUND:return Zl.NOT_FOUND;case hf.ALREADY_EXISTS:return Zl.ALREADY_EXISTS;case hf.PERMISSION_DENIED:return Zl.PERMISSION_DENIED;case hf.FAILED_PRECONDITION:return Zl.FAILED_PRECONDITION;case hf.ABORTED:return Zl.ABORTED;case hf.OUT_OF_RANGE:return Zl.OUT_OF_RANGE;case hf.UNIMPLEMENTED:return Zl.UNIMPLEMENTED;case hf.DATA_LOSS:return Zl.DATA_LOSS;default:return Jl()}}(df=hf||(hf={}))[df.OK=0]="OK",df[df.CANCELLED=1]="CANCELLED",df[df.UNKNOWN=2]="UNKNOWN",df[df.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",df[df.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",df[df.NOT_FOUND=5]="NOT_FOUND",df[df.ALREADY_EXISTS=6]="ALREADY_EXISTS",df[df.PERMISSION_DENIED=7]="PERMISSION_DENIED",df[df.UNAUTHENTICATED=16]="UNAUTHENTICATED",df[df.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",df[df.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",df[df.ABORTED=10]="ABORTED",df[df.OUT_OF_RANGE=11]="OUT_OF_RANGE",df[df.UNIMPLEMENTED=12]="UNIMPLEMENTED",df[df.INTERNAL=13]="INTERNAL",df[df.UNAVAILABLE=14]="UNAVAILABLE",df[df.DATA_LOSS=15]="DATA_LOSS";
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
class pf{constructor(t,e){this.comparator=t,this.root=e||gf.EMPTY}insert(t,e){return new pf(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,gf.BLACK,null,null))}remove(t){return new pf(this.comparator,this.root.remove(t,this.comparator).copy(null,null,gf.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new mf(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new mf(this.root,t,this.comparator,!1)}getReverseIterator(){return new mf(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new mf(this.root,t,this.comparator,!0)}}class mf{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class gf{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:gf.RED,this.left=null!=r?r:gf.EMPTY,this.right=null!=i?i:gf.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new gf(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return gf.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return gf.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,gf.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,gf.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Jl();if(this.right.isRed())throw Jl();const t=this.left.check();if(t!==this.right.check())throw Jl();return t+(this.isRed()?0:1)}}gf.EMPTY=null,gf.RED=!0,gf.BLACK=!1,gf.EMPTY=new class{constructor(){this.size=0}get key(){throw Jl()}get value(){throw Jl()}get color(){throw Jl()}get left(){throw Jl()}get right(){throw Jl()}copy(t,e,n,r,i){return this}insert(t,e,n){return new gf(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class yf{constructor(t){this.comparator=t,this.data=new pf(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new vf(this.data.getIterator())}getIteratorFrom(t){return new vf(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof yf))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new yf(this.comparator);return e.data=t,e}}class vf{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
     */const wf=new pf(Dh.comparator);function bf(){return wf}const Ef=new pf(Dh.comparator);function If(){return Ef}const _f=new pf(Dh.comparator);const Tf=new yf(Dh.comparator);function Sf(...t){let e=Tf;for(const n of t)e=e.add(n);return e}const kf=new yf(lh);function Af(){return kf}
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
     */class Cf{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,Nf.createSynthesizedTargetChangeForCurrentChange(t,e)),new Cf(fh.min(),n,Af(),bf(),Sf())}}class Nf{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new Nf(Ih.EMPTY_BYTE_STRING,e,Sf(),Sf(),Sf())}}
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
     */class $f{constructor(t,e,n,r){this.k=t,this.removedTargetIds=e,this.key=n,this.$=r}}class Rf{constructor(t,e){this.targetId=t,this.O=e}}class Df{constructor(t,e,n=Ih.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class xf{constructor(){this.F=0,this.M=Pf(),this.L=Ih.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return 0!==this.F}get K(){return this.U}j(t){t.approximateByteSize()>0&&(this.U=!0,this.L=t)}W(){let t=Sf(),e=Sf(),n=Sf();return this.M.forEach(((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:Jl()}})),new Nf(this.L,this.B,t,e,n)}G(){this.U=!1,this.M=Pf()}H(t,e){this.U=!0,this.M=this.M.insert(t,e)}J(t){this.U=!0,this.M=this.M.remove(t)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class Of{constructor(t){this.tt=t,this.et=new Map,this.nt=bf(),this.st=Lf(),this.it=new yf(lh)}rt(t){for(const e of t.k)t.$&&t.$.isFoundDocument()?this.ot(e,t.$):this.at(e,t.key,t.$);for(const e of t.removedTargetIds)this.at(e,t.key,t.$)}ct(t){this.forEachTarget(t,(e=>{const n=this.ut(e);switch(t.state){case 0:this.ht(e)&&n.j(t.resumeToken);break;case 1:n.X(),n.q||n.G(),n.j(t.resumeToken);break;case 2:n.X(),n.q||this.removeTarget(e);break;case 3:this.ht(e)&&(n.Z(),n.j(t.resumeToken));break;case 4:this.ht(e)&&(this.lt(e),n.j(t.resumeToken));break;default:Jl()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.et.forEach(((t,n)=>{this.ht(n)&&e(n)}))}ft(t){const e=t.targetId,n=t.O.count,r=this.dt(e);if(r){const t=r.target;if(td(t))if(0===n){const n=new Dh(t.path);this.at(e,n,Yh.newNoDocument(n,fh.min()))}else Xl(1===n);else this.wt(e)!==n&&(this.lt(e),this.it=this.it.add(e))}}_t(t){const e=new Map;this.et.forEach(((n,r)=>{const i=this.dt(r);if(i){if(n.current&&td(i.target)){const e=new Dh(i.target.path);null!==this.nt.get(e)||this.gt(r,e)||this.at(r,e,Yh.newNoDocument(e,t))}n.K&&(e.set(r,n.W()),n.G())}}));let n=Sf();this.st.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.dt(t);return!e||2===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))}));const r=new Cf(t,e,this.it,this.nt,n);return this.nt=bf(),this.st=Lf(),this.it=new yf(lh),r}ot(t,e){if(!this.ht(t))return;const n=this.gt(t,e.key)?2:0;this.ut(t).H(e.key,n),this.nt=this.nt.insert(e.key,e),this.st=this.st.insert(e.key,this.yt(e.key).add(t))}at(t,e,n){if(!this.ht(t))return;const r=this.ut(t);this.gt(t,e)?r.H(e,1):r.J(e),this.st=this.st.insert(e,this.yt(e).delete(t)),n&&(this.nt=this.nt.insert(e,n))}removeTarget(t){this.et.delete(t)}wt(t){const e=this.ut(t).W();return this.tt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Y(t){this.ut(t).Y()}ut(t){let e=this.et.get(t);return e||(e=new xf,this.et.set(t,e)),e}yt(t){let e=this.st.get(t);return e||(e=new yf(lh),this.st=this.st.insert(t,e)),e}ht(t){const e=null!==this.dt(t);return e||Kl("WatchChangeAggregator","Detected inactive target",t),e}dt(t){const e=this.et.get(t);return e&&e.q?null:this.tt.Et(t)}lt(t){this.et.set(t,new xf),this.tt.getRemoteKeysForTarget(t).forEach((e=>{this.at(t,e,null)}))}gt(t,e){return this.tt.getRemoteKeysForTarget(t).has(e)}}function Lf(){return new pf(Dh.comparator)}function Pf(){return new pf(Dh.comparator)}
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
     */const Mf={asc:"ASCENDING",desc:"DESCENDING"},Uf={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class Vf{constructor(t,e){this.databaseId=t,this.D=e}}function Ff(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function jf(t,e){return t.D?e.toBase64():e.toUint8Array()}function Bf(t,e){return Ff(t,e.toTimestamp())}function qf(t){return Xl(!!t),fh.fromTimestamp(function(t){const e=Th(t);return new dh(e.seconds,e.nanos)}(t))}function zf(t,e){return function(t){return new vh(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Hf(t){const e=vh.fromString(t);return Xl(hp(e)),e}function Kf(t,e){return zf(t.databaseId,e.path)}function Wf(t,e){const n=Hf(e);if(n.get(1)!==t.databaseId.projectId)throw new th(Zl.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new th(Zl.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Dh(Jf(n))}function Gf(t,e){return zf(t.databaseId,e)}function Yf(t){return new vh(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Jf(t){return Xl(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Xf(t,e,n){return{name:Kf(t,e),fields:n.value.mapValue.fields}}function Qf(t,e){return{documents:[Gf(t,e.path)]}}function Zf(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=Gf(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Gf(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(zh(t.value))return{unaryFilter:{field:op(t.field),op:"IS_NAN"}};if(qh(t.value))return{unaryFilter:{field:op(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(zh(t.value))return{unaryFilter:{field:op(t.field),op:"IS_NOT_NAN"}};if(qh(t.value))return{unaryFilter:{field:op(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:op(t.field),op:sp(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:op(t.field),direction:ip(t.dir)}}(t)))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(t,e){return t.D||$h(e)?e:{value:e}}(t,e.limit);return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=np(e.startAt)),e.endAt&&(n.structuredQuery.endAt=np(e.endAt)),n}function tp(t){let e=function(t){const e=Hf(t);return 4===e.length?vh.emptyPath():Jf(e)}(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Xl(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=ep(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new dd(ap(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,$h(e)?null:e}(n.limit));let c=null;n.startAt&&(c=rp(n.startAt));let u=null;return n.endAt&&(u=rp(n.endAt)),function(t,e,n,r,i,s,o,a){return new gd(t,e,n,r,i,s,o,a)}(e,i,o,s,a,"F",c,u)}function ep(t){return t?void 0!==t.unaryFilter?[up(t)]:void 0!==t.fieldFilter?[cp(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>ep(t))).reduce(((t,e)=>t.concat(e))):Jl():[]}function np(t){return{before:t.before,values:t.position}}function rp(t){const e=!!t.before,n=t.values||[];return new ld(n,e)}function ip(t){return Mf[t]}function sp(t){return Uf[t]}function op(t){return{fieldPath:t.canonicalString()}}function ap(t){return bh.fromServerFormat(t.fieldPath)}function cp(t){return ed.create(ap(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":default:return Jl()}}(t.fieldFilter.op),t.fieldFilter.value)}function up(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ap(t.unaryFilter.field);return ed.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ap(t.unaryFilter.field);return ed.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ap(t.unaryFilter.field);return ed.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ap(t.unaryFilter.field);return ed.create(i,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":default:return Jl()}}function lp(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function hp(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
class dp{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Jl(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new dp(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof dp?e:dp.resolve(e)}catch(t){return dp.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):dp.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):dp.reject(e)}static resolve(t){return new dp(((e,n)=>{e(t)}))}static reject(t){return new dp(((e,n)=>{n(t)}))}static waitFor(t){return new dp(((e,n)=>{let r=0,i=0,s=!1;t.forEach((t=>{++r,t.next((()=>{++i,s&&i===r&&e()}),(t=>n(t)))})),s=!0,i===r&&e()}))}static or(t){let e=dp.resolve(!1);for(const n of t)e=e.next((t=>t?dp.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}}function fp(t){return"IndexedDbTransactionError"===t.name}
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
     */class pp{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const r=this.mutations[e];r.key.isEqual(t.key)&&Xd(r,t,n[e])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&Qd(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&Qd(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach((e=>{const n=t.get(e.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(fh.min())}))}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Sf())}isEqual(t){return this.batchId===t.batchId&&hh(this.mutations,t.mutations,((t,e)=>tf(t,e)))&&hh(this.baseMutations,t.baseMutations,((t,e)=>tf(t,e)))}}class mp{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){Xl(t.mutations.length===n.length);let r=_f;const i=t.mutations;for(let t=0;t<i.length;t++)r=r.insert(i[t].key,n[t].version);return new mp(t,e,n,r)}}
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
     */class gp{constructor(t,e,n,r,i=fh.min(),s=fh.min(),o=Ih.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(t){return new gp(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new gp(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new gp(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
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
     */class yp{constructor(t){this.Wt=t}}function vp(t){const e=tp({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Sd(e,e.limit,"L"):e}
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
     */class wp{constructor(){this.Gt=new bp}addToCollectionParentIndex(t,e){return this.Gt.add(e),dp.resolve()}getCollectionParents(t,e){return dp.resolve(this.Gt.getEntries(e))}}class bp{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new yf(vh.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new yf(vh.comparator)).toArray()}}
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
     */class Ep{constructor(t){this.ne=t}next(){return this.ne+=2,this.ne}static se(){return new Ep(0)}static ie(){return new Ep(-1)}}
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
     */async function Ip(t){if(t.code!==Zl.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==t.message)throw t;Kl("LocalStore","Unexpectedly lost primary lease")}
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
     */class _p{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,r]of n)if(this.equalsFn(e,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],t))return void(r[n]=[t,e]);r.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),!0;return!1}forEach(t){mh(this.inner,((e,n)=>{for(const[e,r]of n)t(e,r)}))}isEmpty(){return gh(this.inner)}}
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
class Tp{constructor(t,e,n){this.He=t,this.In=e,this.Ht=n}An(t,e){return this.In.getAllMutationBatchesAffectingDocumentKey(t,e).next((n=>this.Rn(t,e,n)))}Rn(t,e,n){return this.He.getEntry(t,e).next((t=>{for(const e of n)e.applyToLocalView(t);return t}))}bn(t,e){t.forEach(((t,n)=>{for(const t of e)t.applyToLocalView(n)}))}Pn(t,e){return this.He.getEntries(t,e).next((e=>this.vn(t,e).next((()=>e))))}vn(t,e){return this.In.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>this.bn(e,t)))}getDocumentsMatchingQuery(t,e,n){return function(t){return Dh.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Vn(t,e.path):Id(e)?this.Sn(t,e,n):this.Dn(t,e,n)}Vn(t,e){return this.An(t,new Dh(e)).next((t=>{let e=If();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}Sn(t,e,n){const r=e.collectionGroup;let i=If();return this.Ht.getCollectionParents(t,r).next((s=>dp.forEach(s,(s=>{const o=function(t,e){return new gd(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(r));return this.Dn(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}Dn(t,e,n){let r,i;return this.He.getDocumentsMatchingQuery(t,e,n).next((n=>(r=n,this.In.getAllMutationBatchesAffectingQuery(t,e)))).next((e=>(i=e,this.Cn(t,i,r).next((t=>{r=t;for(const t of i)for(const e of t.mutations){const n=e.key;let i=r.get(n);null==i&&(i=Yh.newInvalidDocument(n),r=r.insert(n,i)),Qd(e,i,t.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}))))).next((()=>(r.forEach(((t,n)=>{Nd(e,n)||(r=r.remove(t))})),r)))}Cn(t,e,n){let r=Sf();for(const t of e)for(const e of t.mutations)e instanceof rf&&null===n.get(e.key)&&(r=r.add(e.key));let i=n;return this.He.getEntries(t,r).next((t=>(t.forEach(((t,e)=>{e.isFoundDocument()&&(i=i.insert(t,e))})),i)))}}
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
     */class Sp{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Nn=n,this.xn=r}static kn(t,e){let n=Sf(),r=Sf();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:r=r.add(t.doc.key)}return new Sp(t,e.fromCache,n,r)}}
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
     */class kp{$n(t){this.On=t}getDocumentsMatchingQuery(t,e,n,r){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(fh.min())?this.Fn(t,e):this.On.Pn(t,r).next((i=>{const s=this.Mn(e,i);return(vd(e)||wd(e))&&this.Ln(e.limitType,s,r,n)?this.Fn(t,e):(Hl()<=ae.DEBUG&&Kl("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Cd(e)),this.On.getDocumentsMatchingQuery(t,e,n).next((t=>(s.forEach((e=>{t=t.insert(e.key,e)})),t))))}))}Mn(t,e){let n=new yf($d(t));return e.forEach(((e,r)=>{Nd(t,r)&&(n=n.add(r))})),n}Ln(t,e,n,r){if(n.size!==e.size)return!0;const i="F"===t?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Fn(t,e){return Hl()<=ae.DEBUG&&Kl("QueryEngine","Using full collection scan to execute query:",Cd(e)),this.On.getDocumentsMatchingQuery(t,e,fh.min())}}
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
     */class Ap{constructor(t,e,n,r){this.persistence=t,this.Bn=e,this.N=r,this.Un=new pf(lh),this.qn=new _p((t=>Qh(t)),Zh),this.Kn=fh.min(),this.In=t.getMutationQueue(n),this.jn=t.getRemoteDocumentCache(),this.ze=t.getTargetCache(),this.Qn=new Tp(this.jn,this.In,this.persistence.getIndexManager()),this.Je=t.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Un)))}}async function Cp(t,e){const n=Ql(t);let r=n.In,i=n.Qn;const s=await n.persistence.runTransaction("Handle user change","readonly",(t=>{let s;return n.In.getAllMutationBatches(t).next((o=>(s=o,r=n.persistence.getMutationQueue(e),i=new Tp(n.jn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(t)))).next((e=>{const n=[],r=[];let o=Sf();for(const t of s){n.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return i.Pn(t,o).next((t=>({Wn:t,removedBatchIds:n,addedBatchIds:r})))}))}));return n.In=r,n.Qn=i,n.Bn.$n(n.Qn),s}function Np(t){const e=Ql(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.ze.getLastRemoteSnapshotVersion(t)))}function $p(t,e){const n=Ql(t),r=e.snapshotVersion;let i=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.jn.newChangeBuffer({trackRemovals:!0});i=n.Un;const o=[];e.targetChanges.forEach(((e,s)=>{const a=i.get(s);if(!a)return;o.push(n.ze.removeMatchingKeys(t,e.removedDocuments,s).next((()=>n.ze.addMatchingKeys(t,e.addedDocuments,s))));const c=e.resumeToken;if(c.approximateByteSize()>0){const u=a.withResumeToken(c,r).withSequenceNumber(t.currentSequenceNumber);i=i.insert(s,u),function(t,e,n){return Xl(e.resumeToken.approximateByteSize()>0),0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(a,u,e)&&o.push(n.ze.updateTargetData(t,u))}}));let a=bf();if(e.documentUpdates.forEach(((r,i)=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(function(t,e,n,r,i){let s=Sf();return n.forEach((t=>s=s.add(t))),e.getEntries(t,s).next((t=>{let s=bf();return n.forEach(((n,o)=>{const a=t.get(n),c=(null==i?void 0:i.get(n))||r;o.isNoDocument()&&o.version.isEqual(fh.min())?(e.removeEntry(n,c),s=s.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(e.addEntry(o,c),s=s.insert(n,o)):Kl("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)})),s}))}(t,s,e.documentUpdates,r,void 0).next((t=>{a=t}))),!r.isEqual(fh.min())){const e=n.ze.getLastRemoteSnapshotVersion(t).next((e=>n.ze.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return dp.waitFor(o).next((()=>s.apply(t))).next((()=>n.Qn.vn(t,a))).next((()=>a))})).then((t=>(n.Un=i,t)))}function Rp(t,e){const n=Ql(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.In.getNextMutationBatchAfterBatchId(t,e))))}async function Dp(t,e,n){const r=Ql(t),i=r.Un.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(t=>r.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!fp(t))throw t;Kl("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.Un=r.Un.remove(e),r.qn.delete(i.target)}function xp(t,e,n){const r=Ql(t);let i=fh.min(),s=Sf();return r.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const r=Ql(t),i=r.qn.get(n);return void 0!==i?dp.resolve(r.Un.get(i)):r.ze.getTargetData(e,n)}(r,t,Td(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.ze.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>r.Bn.getDocumentsMatchingQuery(t,e,n?i:fh.min(),n?s:Sf()))).next((t=>({documents:t,Gn:s})))))}
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
     */class Op{constructor(t){this.N=t,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(t,e){return dp.resolve(this.Yn.get(e))}saveBundleMetadata(t,e){var n;return this.Yn.set(e.id,{id:(n=e).id,version:n.version,createTime:qf(n.createTime)}),dp.resolve()}getNamedQuery(t,e){return dp.resolve(this.Xn.get(e))}saveNamedQuery(t,e){return this.Xn.set(e.name,function(t){return{name:t.name,query:vp(t.bundledQuery),readTime:qf(t.readTime)}}(e)),dp.resolve()}}
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
     */class Lp{constructor(){this.Zn=new yf(Pp.ts),this.es=new yf(Pp.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const n=new Pp(t,e);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.rs(new Pp(t,e))}os(t,e){t.forEach((t=>this.removeReference(t,e)))}cs(t){const e=new Dh(new vh([])),n=new Pp(e,t),r=new Pp(e,t+1),i=[];return this.es.forEachInRange([n,r],(t=>{this.rs(t),i.push(t.key)})),i}us(){this.Zn.forEach((t=>this.rs(t)))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new Dh(new vh([])),n=new Pp(e,t),r=new Pp(e,t+1);let i=Sf();return this.es.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new Pp(t,0),n=this.Zn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Pp{constructor(t,e){this.key=t,this.ls=e}static ts(t,e){return Dh.comparator(t.key,e.key)||lh(t.ls,e.ls)}static ns(t,e){return lh(t.ls,e.ls)||Dh.comparator(t.key,e.key)}}
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
     */class Mp{constructor(t,e){this.Ht=t,this.referenceDelegate=e,this.In=[],this.fs=1,this.ds=new yf(Pp.ts)}checkEmpty(t){return dp.resolve(0===this.In.length)}addMutationBatch(t,e,n,r){const i=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const s=new pp(i,e,n,r);this.In.push(s);for(const e of r)this.ds=this.ds.add(new Pp(e.key,i)),this.Ht.addToCollectionParentIndex(t,e.key.path.popLast());return dp.resolve(s)}lookupMutationBatch(t,e){return dp.resolve(this.ws(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this._s(n),i=r<0?0:r;return dp.resolve(this.In.length>i?this.In[i]:null)}getHighestUnacknowledgedBatchId(){return dp.resolve(0===this.In.length?-1:this.fs-1)}getAllMutationBatches(t){return dp.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Pp(e,0),r=new Pp(e,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([n,r],(t=>{const e=this.ws(t.ls);i.push(e)})),dp.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new yf(lh);return e.forEach((t=>{const e=new Pp(t,0),r=new Pp(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,r],(t=>{n=n.add(t.ls)}))})),dp.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;Dh.isDocumentKey(i)||(i=i.child(""));const s=new Pp(new Dh(i),0);let o=new yf(lh);return this.ds.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.ls)),!0)}),s),dp.resolve(this.gs(o))}gs(t){const e=[];return t.forEach((t=>{const n=this.ws(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Xl(0===this.ys(e.batchId,"removed")),this.In.shift();let n=this.ds;return dp.forEach(e.mutations,(r=>{const i=new Pp(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.ds=n}))}te(t){}containsKey(t,e){const n=new Pp(e,0),r=this.ds.firstAfterOrEqual(n);return dp.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.In.length,dp.resolve()}ys(t,e){return this._s(t)}_s(t){return 0===this.In.length?0:t-this.In[0].batchId}ws(t){const e=this._s(t);return e<0||e>=this.In.length?null:this.In[e]}}
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
     */class Up{constructor(t,e){this.Ht=t,this.ps=e,this.docs=new pf(Dh.comparator),this.size=0}addEntry(t,e,n){const r=e.key,i=this.docs.get(r),s=i?i.size:0,o=this.ps(e);return this.docs=this.docs.insert(r,{document:e.clone(),size:o,readTime:n}),this.size+=o-s,this.Ht.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return dp.resolve(n?n.document.clone():Yh.newInvalidDocument(e))}getEntries(t,e){let n=bf();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.clone():Yh.newInvalidDocument(t))})),dp.resolve(n)}getDocumentsMatchingQuery(t,e,n){let r=bf();const i=new Dh(e.path.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:t,value:{document:i,readTime:o}}=s.getNext();if(!e.path.isPrefixOf(t.path))break;o.compareTo(n)<=0||Nd(e,i)&&(r=r.insert(i.key,i.clone()))}return dp.resolve(r)}Es(t,e){return dp.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Vp(this)}getSize(t){return dp.resolve(this.size)}}class Vp extends class{constructor(){this.changes=new _p((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}getReadTime(t){const e=this.changes.get(t);return e?e.readTime:fh.min()}addEntry(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})}removeEntry(t,e=null){this.assertNotApplied(),this.changes.set(t,{document:Yh.newInvalidDocument(t),readTime:e})}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?dp.resolve(n.document):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}{constructor(t){super(),this.Se=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.document.isValidDocument()?e.push(this.Se.addEntry(t,r.document,this.getReadTime(n))):this.Se.removeEntry(n)})),dp.waitFor(e)}getFromCache(t,e){return this.Se.getEntry(t,e)}getAllFromCache(t,e){return this.Se.getEntries(t,e)}}
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
     */class Fp{constructor(t){this.persistence=t,this.Ts=new _p((t=>Qh(t)),Zh),this.lastRemoteSnapshotVersion=fh.min(),this.highestTargetId=0,this.Is=0,this.As=new Lp,this.targetCount=0,this.Rs=Ep.se()}forEachTarget(t,e){return this.Ts.forEach(((t,n)=>e(n))),dp.resolve()}getLastRemoteSnapshotVersion(t){return dp.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return dp.resolve(this.Is)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),dp.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Is&&(this.Is=e),dp.resolve()}ae(t){this.Ts.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new Ep(e),this.highestTargetId=e),t.sequenceNumber>this.Is&&(this.Is=t.sequenceNumber)}addTargetData(t,e){return this.ae(e),this.targetCount+=1,dp.resolve()}updateTargetData(t,e){return this.ae(e),dp.resolve()}removeTargetData(t,e){return this.Ts.delete(e.target),this.As.cs(e.targetId),this.targetCount-=1,dp.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Ts.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Ts.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),dp.waitFor(i).next((()=>r))}getTargetCount(t){return dp.resolve(this.targetCount)}getTargetData(t,e){const n=this.Ts.get(e)||null;return dp.resolve(n)}addMatchingKeys(t,e,n){return this.As.ss(e,n),dp.resolve()}removeMatchingKeys(t,e,n){this.As.os(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),dp.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.As.cs(e),dp.resolve()}getMatchingKeysForTargetId(t,e){const n=this.As.hs(e);return dp.resolve(n)}containsKey(t,e){return dp.resolve(this.As.containsKey(e))}}
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
     */class jp{constructor(t,e){this.bs={},this.Le=new ah(0),this.Be=!1,this.Be=!0,this.referenceDelegate=t(this),this.ze=new Fp(this),this.Ht=new wp,this.He=function(t,e){return new Up(t,e)}(this.Ht,(t=>this.referenceDelegate.Ps(t))),this.N=new yp(e),this.Je=new Op(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(t){let e=this.bs[t.toKey()];return e||(e=new Mp(this.Ht,this.referenceDelegate),this.bs[t.toKey()]=e),e}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(t,e,n){Kl("MemoryPersistence","Starting transaction:",t);const r=new Bp(this.Le.next());return this.referenceDelegate.vs(),n(r).next((t=>this.referenceDelegate.Vs(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Ss(t,e){return dp.or(Object.values(this.bs).map((n=>()=>n.containsKey(t,e))))}}class Bp extends class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}{constructor(t){super(),this.currentSequenceNumber=t}}class qp{constructor(t){this.persistence=t,this.Ds=new Lp,this.Cs=null}static Ns(t){return new qp(t)}get xs(){if(this.Cs)return this.Cs;throw Jl()}addReference(t,e,n){return this.Ds.addReference(n,e),this.xs.delete(n.toString()),dp.resolve()}removeReference(t,e,n){return this.Ds.removeReference(n,e),this.xs.add(n.toString()),dp.resolve()}markPotentiallyOrphaned(t,e){return this.xs.add(e.toString()),dp.resolve()}removeTarget(t,e){this.Ds.cs(e.targetId).forEach((t=>this.xs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.xs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}vs(){this.Cs=new Set}Vs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return dp.forEach(this.xs,(n=>{const r=Dh.fromPath(n);return this.ks(t,r).next((t=>{t||e.removeEntry(r)}))})).next((()=>(this.Cs=null,e.apply(t))))}updateLimboDocument(t,e){return this.ks(t,e).next((t=>{t?this.xs.delete(e.toString()):this.xs.add(e.toString())}))}Ps(t){return 0}ks(t,e){return dp.or([()=>dp.resolve(this.Ds.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ss(t,e)])}}class zp{constructor(){this.activeTargetIds=Af()}Fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ms(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Os(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Hp{constructor(){this.yi=new zp,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.yi.Fs(t),this.pi[t]||"not-current"}updateQueryState(t,e,n){this.pi[t]=e}removeLocalQueryTarget(t){this.yi.Ms(t)}isLocalQueryTarget(t){return this.yi.activeTargetIds.has(t)}clearQueryState(t){delete this.pi[t]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(t){return this.yi.activeTargetIds.has(t)}start(){return this.yi=new zp,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
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
     */class Kp{Ei(t){}shutdown(){}}
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
     */class Wp{constructor(){this.Ti=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ei(t){this.bi.push(t)}shutdown(){window.removeEventListener("online",this.Ti),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ti),window.addEventListener("offline",this.Ai)}Ii(){Kl("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.bi)t(0)}Ri(){Kl("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.bi)t(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
     */const Gp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
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
     */class Yp{constructor(t){this.vi=t.vi,this.Vi=t.Vi}Si(t){this.Di=t}Ci(t){this.Ni=t}onMessage(t){this.xi=t}close(){this.Vi()}send(t){this.vi(t)}ki(){this.Di()}$i(t){this.Ni(t)}Oi(t){this.xi(t)}}
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
     */class Jp extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.Fi=e+"://"+t.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(t,e,n,r){const i=this.Bi(t,e);Kl("RestConnection","Sending: ",i,n);const s={};return this.Ui(s,r),this.qi(t,i,s,n).then((t=>(Kl("RestConnection","Received: ",t),t)),(e=>{throw Gl("RestConnection",`${t} failed with error: `,e,"url: ",i,"request:",n),e}))}Ki(t,e,n,r){return this.Li(t,e,n,r)}Ui(t,e){if(t["X-Goog-Api-Client"]="gl-js/ fire/"+ql,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e)for(const n in e.authHeaders)e.authHeaders.hasOwnProperty(n)&&(t[n]=e.authHeaders[n])}Bi(t,e){const n=Gp[t];return`${this.Fi}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}qi(t,e,n,r){return new Promise(((i,s)=>{const o=new jl;o.listenOnce(Ll.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Ol.NO_ERROR:const e=o.getResponseJson();Kl("Connection","XHR received:",JSON.stringify(e)),i(e);break;case Ol.TIMEOUT:Kl("Connection",'RPC "'+t+'" timed out'),s(new th(Zl.DEADLINE_EXCEEDED,"Request time out"));break;case Ol.HTTP_ERROR:const n=o.getStatus();if(Kl("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Zl).indexOf(e)>=0?e:Zl.UNKNOWN}(t.status);s(new th(e,t.message))}else s(new th(Zl.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new th(Zl.UNAVAILABLE,"Connection failed."));break;default:Jl()}}finally{Kl("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(r);o.send(e,"POST",a,n,15)}))}ji(t,e){const n=[this.Fi,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=new Nl,i=Ic(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(s.xmlHttpFactory=new Vl({})),this.Ui(s.initMessageHeaders,e),jt()||qt()||Ft().indexOf("Electron/")>=0||zt()||Ft().indexOf("MSAppHost/")>=0||Bt()||(s.httpHeadersOverwriteParam="$httpHeaders");const o=n.join("");Kl("Connection","Creating WebChannel: "+o,s);const a=r.createWebChannel(o,s);let c=!1,u=!1;const l=new Yp({vi:t=>{u?Kl("Connection","Not sending because WebChannel is closed:",t):(c||(Kl("Connection","Opening WebChannel transport."),a.open(),c=!0),Kl("Connection","WebChannel sending:",t),a.send(t))},Vi:()=>a.close()}),h=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return h(a,Fl.EventType.OPEN,(()=>{u||Kl("Connection","WebChannel transport opened.")})),h(a,Fl.EventType.CLOSE,(()=>{u||(u=!0,Kl("Connection","WebChannel transport closed"),l.$i())})),h(a,Fl.EventType.ERROR,(t=>{u||(u=!0,Gl("Connection","WebChannel transport errored:",t),l.$i(new th(Zl.UNAVAILABLE,"The operation could not be completed")))})),h(a,Fl.EventType.MESSAGE,(t=>{var e;if(!u){const n=t.data[0];Xl(!!n);const r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(i){Kl("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=hf[t];if(void 0!==e)return ff(e)}(t),n=i.message;void 0===e&&(e=Zl.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),u=!0,l.$i(new th(e,n)),a.close()}else Kl("Connection","WebChannel received:",n),l.Oi(n)}})),h(i,Pl.STAT_EVENT,(t=>{t.stat===Ml?Kl("Connection","Detected buffering proxy"):t.stat===Ul&&Kl("Connection","Detected no buffering proxy")})),setTimeout((()=>{l.ki()}),0),l}}function Xp(){return"undefined"!=typeof document?document:null}
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
     */function Qp(t){return new Vf(t,!0)}class Zp{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Oe=t,this.timerId=e,this.Qi=n,this.Wi=r,this.Gi=i,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(t){this.cancel();const e=Math.floor(this.zi+this.Zi()),n=Math.max(0,Date.now()-this.Ji),r=Math.max(0,e-n);r>0&&Kl("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.zi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,r,(()=>(this.Ji=Date.now(),t()))),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){null!==this.Hi&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){null!==this.Hi&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}
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
     */class tm{constructor(t,e,n,r,i,s){this.Oe=t,this.er=n,this.nr=r,this.credentialsProvider=i,this.listener=s,this.state=0,this.sr=0,this.ir=null,this.stream=null,this.rr=new Zp(t,e)}ar(){return 1===this.state||2===this.state||4===this.state}cr(){return 2===this.state}start(){3!==this.state?this.auth():this.ur()}async stop(){this.ar()&&await this.close(0)}hr(){this.state=0,this.rr.reset()}lr(){this.cr()&&null===this.ir&&(this.ir=this.Oe.enqueueAfterDelay(this.er,6e4,(()=>this.dr())))}wr(t){this._r(),this.stream.send(t)}async dr(){if(this.cr())return this.close(0)}_r(){this.ir&&(this.ir.cancel(),this.ir=null)}async close(t,e){this._r(),this.rr.cancel(),this.sr++,3!==t?this.rr.reset():e&&e.code===Zl.RESOURCE_EXHAUSTED?(Wl(e.toString()),Wl("Using maximum backoff delay to prevent overloading the backend."),this.rr.Yi()):e&&e.code===Zl.UNAUTHENTICATED&&this.credentialsProvider.invalidateToken(),null!==this.stream&&(this.mr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ci(e)}mr(){}auth(){this.state=1;const t=this.gr(this.sr),e=this.sr;this.credentialsProvider.getToken().then((t=>{this.sr===e&&this.yr(t)}),(e=>{t((()=>{const t=new th(Zl.UNKNOWN,"Fetching auth token failed: "+e.message);return this.pr(t)}))}))}yr(t){const e=this.gr(this.sr);this.stream=this.Er(t),this.stream.Si((()=>{e((()=>(this.state=2,this.listener.Si())))})),this.stream.Ci((t=>{e((()=>this.pr(t)))})),this.stream.onMessage((t=>{e((()=>this.onMessage(t)))}))}ur(){this.state=4,this.rr.Xi((async()=>{this.state=0,this.start()}))}pr(t){return Kl("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(3,t)}gr(t){return e=>{this.Oe.enqueueAndForget((()=>this.sr===t?e():(Kl("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class em extends tm{constructor(t,e,n,r,i){super(t,"listen_stream_connection_backoff","listen_stream_idle",e,n,i),this.N=r}Er(t){return this.nr.ji("Listen",t)}onMessage(t){this.rr.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Jl()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(t,e){return t.D?(Xl(void 0===e||"string"==typeof e),Ih.fromBase64String(e||"")):(Xl(void 0===e||e instanceof Uint8Array),Ih.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?Zl.UNKNOWN:ff(t.code);return new th(e,t.message||"")}(o);n=new Df(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Wf(t,r.document.name),s=qf(r.document.updateTime),o=new Wh({mapValue:{fields:r.document.fields}}),a=Yh.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new $f(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Wf(t,r.document),s=r.readTime?qf(r.readTime):fh.min(),o=Yh.newNoDocument(i,s),a=r.removedTargetIds||[];n=new $f([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Wf(t,r.document),s=r.removedTargetIds||[];n=new $f([],s,i,null)}else{if(!("filter"in e))return Jl();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,i=new lf(r),s=t.targetId;n=new Rf(s,i)}}return n}(this.N,t),n=function(t){if(!("targetChange"in t))return fh.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?fh.min():e.readTime?qf(e.readTime):fh.min()}(t);return this.listener.Tr(e,n)}Ir(t){const e={};e.database=Yf(this.N),e.addTarget=function(t,e){let n;const r=e.target;return n=td(r)?{documents:Qf(t,r)}:{query:Zf(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=jf(t,e.resumeToken):e.snapshotVersion.compareTo(fh.min())>0&&(n.readTime=Ff(t,e.snapshotVersion.toTimestamp())),n}(this.N,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Jl()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.N,t);n&&(e.labels=n),this.wr(e)}Ar(t){const e={};e.database=Yf(this.N),e.removeTarget=t,this.wr(e)}}class nm extends tm{constructor(t,e,n,r,i){super(t,"write_stream_connection_backoff","write_stream_idle",e,n,i),this.N=r,this.Rr=!1}get br(){return this.Rr}start(){this.Rr=!1,this.lastStreamToken=void 0,super.start()}mr(){this.Rr&&this.Pr([])}Er(t){return this.nr.ji("Write",t)}onMessage(t){if(Xl(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Rr){this.rr.reset();const e=function(t,e){return t&&t.length>0?(Xl(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?qf(t.updateTime):qf(e);return n.isEqual(fh.min())&&(n=qf(e)),new Wd(n,t.transformResults||[])}(t,e)))):[]}(t.writeResults,t.commitTime),n=qf(t.commitTime);return this.listener.vr(n,e)}return Xl(!t.writeResults||0===t.writeResults.length),this.Rr=!0,this.listener.Vr()}Sr(){const t={};t.database=Yf(this.N),this.wr(t)}Pr(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>function(t,e){let n;if(e instanceof nf)n={update:Xf(t,e.key,e.value)};else if(e instanceof cf)n={delete:Kf(t,e.key)};else if(e instanceof rf)n={update:Xf(t,e.key,e.data),updateMask:lp(e.fieldMask)};else{if(!(e instanceof uf))return Jl();n={verify:Kf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Vd)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Fd)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Bd)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof zd)return{fieldPath:e.field.canonicalString(),increment:n.C};throw Jl()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Bf(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Jl()}(t,e.precondition)),n}(this.N,t)))};this.wr(e)}}
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
     */class rm extends class{}{constructor(t,e,n){super(),this.credentials=t,this.nr=e,this.N=n,this.Dr=!1}Cr(){if(this.Dr)throw new th(Zl.FAILED_PRECONDITION,"The client has already been terminated.")}Li(t,e,n){return this.Cr(),this.credentials.getToken().then((r=>this.nr.Li(t,e,n,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Zl.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new th(Zl.UNKNOWN,t.toString())}))}Ki(t,e,n){return this.Cr(),this.credentials.getToken().then((r=>this.nr.Ki(t,e,n,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Zl.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new th(Zl.UNKNOWN,t.toString())}))}terminate(){this.Dr=!0}}class im{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Nr=0,this.kr=null,this.$r=!0}Or(){0===this.Nr&&(this.Fr("Unknown"),this.kr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.kr=null,this.Mr("Backend didn't respond within 10 seconds."),this.Fr("Offline"),Promise.resolve()))))}Lr(t){"Online"===this.state?this.Fr("Unknown"):(this.Nr++,this.Nr>=1&&(this.Br(),this.Mr(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.Fr("Offline")))}set(t){this.Br(),this.Nr=0,"Online"===t&&(this.$r=!1),this.Fr(t)}Fr(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}Mr(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.$r?(Wl(e),this.$r=!1):Kl("OnlineStateTracker",e)}Br(){null!==this.kr&&(this.kr.cancel(),this.kr=null)}}
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
     */class sm{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ur=[],this.qr=new Map,this.Kr=new Set,this.jr=[],this.Qr=i,this.Qr.Ei((t=>{n.enqueueAndForget((async()=>{pm(this)&&(Kl("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Ql(t);e.Kr.add(4),await am(e),e.Wr.set("Unknown"),e.Kr.delete(4),await om(e)}(this))}))})),this.Wr=new im(n,r)}}async function om(t){if(pm(t))for(const e of t.jr)await e(!0)}async function am(t){for(const e of t.jr)await e(!1)}function cm(t,e){const n=Ql(t);n.qr.has(e.targetId)||(n.qr.set(e.targetId,e),fm(n)?dm(n):$m(n).cr()&&lm(n,e))}function um(t,e){const n=Ql(t),r=$m(n);n.qr.delete(e),r.cr()&&hm(n,e),0===n.qr.size&&(r.cr()?r.lr():pm(n)&&n.Wr.set("Unknown"))}function lm(t,e){t.Gr.Y(e.targetId),$m(t).Ir(e)}function hm(t,e){t.Gr.Y(e),$m(t).Ar(e)}function dm(t){t.Gr=new Of({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.qr.get(e)||null}),$m(t).start(),t.Wr.Or()}function fm(t){return pm(t)&&!$m(t).ar()&&t.qr.size>0}function pm(t){return 0===Ql(t).Kr.size}function mm(t){t.Gr=void 0}async function gm(t){t.qr.forEach(((e,n)=>{lm(t,e)}))}async function ym(t,e){mm(t),fm(t)?(t.Wr.Lr(e),dm(t)):t.Wr.set("Unknown")}async function vm(t,e,n){if(t.Wr.set("Online"),e instanceof Df&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.qr.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.qr.delete(r),t.Gr.removeTarget(r))}(t,e)}catch(n){Kl("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await wm(t,n)}else if(e instanceof $f?t.Gr.rt(e):e instanceof Rf?t.Gr.ft(e):t.Gr.ct(e),!n.isEqual(fh.min()))try{const e=await Np(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Gr._t(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.qr.get(r);i&&t.qr.set(r,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.qr.get(e);if(!n)return;t.qr.set(e,n.withResumeToken(Ih.EMPTY_BYTE_STRING,n.snapshotVersion)),hm(t,e);const r=new gp(n.target,e,1,n.sequenceNumber);lm(t,r)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Kl("RemoteStore","Failed to raise snapshot:",e),await wm(t,e)}}async function wm(t,e,n){if(!fp(e))throw e;t.Kr.add(1),await am(t),t.Wr.set("Offline"),n||(n=()=>Np(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Kl("RemoteStore","Retrying IndexedDB access"),await n(),t.Kr.delete(1),await om(t)}))}function bm(t,e){return e().catch((n=>wm(t,n,e)))}async function Em(t){const e=Ql(t),n=Rm(e);let r=e.Ur.length>0?e.Ur[e.Ur.length-1].batchId:-1;for(;Im(e);)try{const t=await Rp(e.localStore,r);if(null===t){0===e.Ur.length&&n.lr();break}r=t.batchId,_m(e,t)}catch(t){await wm(e,t)}Tm(e)&&Sm(e)}function Im(t){return pm(t)&&t.Ur.length<10}function _m(t,e){t.Ur.push(e);const n=Rm(t);n.cr()&&n.br&&n.Pr(e.mutations)}function Tm(t){return pm(t)&&!Rm(t).ar()&&t.Ur.length>0}function Sm(t){Rm(t).start()}async function km(t){Rm(t).Sr()}async function Am(t){const e=Rm(t);for(const n of t.Ur)e.Pr(n.mutations)}async function Cm(t,e,n){const r=t.Ur.shift(),i=mp.from(r,e,n);await bm(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await Em(t)}async function Nm(t,e){e&&Rm(t).br&&await async function(t,e){if(function(t){switch(t){case Zl.OK:return Jl();case Zl.CANCELLED:case Zl.UNKNOWN:case Zl.DEADLINE_EXCEEDED:case Zl.RESOURCE_EXHAUSTED:case Zl.INTERNAL:case Zl.UNAVAILABLE:case Zl.UNAUTHENTICATED:return!1;case Zl.INVALID_ARGUMENT:case Zl.NOT_FOUND:case Zl.ALREADY_EXISTS:case Zl.PERMISSION_DENIED:case Zl.FAILED_PRECONDITION:case Zl.ABORTED:case Zl.OUT_OF_RANGE:case Zl.UNIMPLEMENTED:case Zl.DATA_LOSS:return!0;default:return Jl()}}(n=e.code)&&n!==Zl.ABORTED){const n=t.Ur.shift();Rm(t).hr(),await bm(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Em(t)}var n}(t,e),Tm(t)&&Sm(t)}function $m(t){return t.zr||(t.zr=function(t,e,n){const r=Ql(t);return r.Cr(),new em(e,r.nr,r.credentials,r.N,n)
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
     */}(t.datastore,t.asyncQueue,{Si:gm.bind(null,t),Ci:ym.bind(null,t),Tr:vm.bind(null,t)}),t.jr.push((async e=>{e?(t.zr.hr(),fm(t)?dm(t):t.Wr.set("Unknown")):(await t.zr.stop(),mm(t))}))),t.zr}function Rm(t){return t.Hr||(t.Hr=function(t,e,n){const r=Ql(t);return r.Cr(),new nm(e,r.nr,r.credentials,r.N,n)}(t.datastore,t.asyncQueue,{Si:km.bind(null,t),Ci:Nm.bind(null,t),Vr:Am.bind(null,t),vr:Cm.bind(null,t)}),t.jr.push((async e=>{e?(t.Hr.hr(),await Em(t)):(await t.Hr.stop(),t.Ur.length>0&&(Kl("RemoteStore",`Stopping write stream with ${t.Ur.length} pending writes`),t.Ur=[]))}))),t.Hr
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
     */}class Dm{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new eh,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new Dm(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new th(Zl.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xm(t,e){if(Wl("AsyncQueue",`${e}: ${t}`),fp(t))return new th(Zl.UNAVAILABLE,`${e}: ${t}`);throw t}
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
     */class Om{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Dh.comparator(e.key,n.key):(t,e)=>Dh.comparator(t.key,e.key),this.keyedMap=If(),this.sortedSet=new pf(this.comparator)}static emptySet(t){return new Om(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Om))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Om;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
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
     */class Lm{constructor(){this.Jr=new pf(Dh.comparator)}track(t){const e=t.doc.key,n=this.Jr.get(e);n?0!==t.type&&3===n.type?this.Jr=this.Jr.insert(e,t):3===t.type&&1!==n.type?this.Jr=this.Jr.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Jr=this.Jr.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Jr=this.Jr.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Jr=this.Jr.remove(e):1===t.type&&2===n.type?this.Jr=this.Jr.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Jr=this.Jr.insert(e,{type:2,doc:t.doc}):Jl():this.Jr=this.Jr.insert(e,t)}Yr(){const t=[];return this.Jr.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Pm{constructor(t,e,n,r,i,s,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,r){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new Pm(t,e,Om.emptySet(e),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&kd(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}}
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
     */class Mm{constructor(){this.Xr=void 0,this.listeners=[]}}class Um{constructor(){this.queries=new _p((t=>Ad(t)),kd),this.onlineState="Unknown",this.Zr=new Set}}function Vm(t,e){const n=Ql(t);let r=!1;for(const t of e){const e=t.query,i=n.queries.get(e);if(i){for(const e of i.listeners)e.no(t)&&(r=!0);i.Xr=t}}r&&jm(n)}function Fm(t,e,n){const r=Ql(t),i=r.queries.get(e);if(i)for(const t of i.listeners)t.onError(n);r.queries.delete(e)}function jm(t){t.Zr.forEach((t=>{t.next()}))}class Bm{constructor(t,e,n){this.query=t,this.so=e,this.io=!1,this.ro=null,this.onlineState="Unknown",this.options=n||{}}no(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Pm(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.io?this.oo(t)&&(this.so.next(t),e=!0):this.ao(t,this.onlineState)&&(this.co(t),e=!0),this.ro=t,e}onError(t){this.so.error(t)}eo(t){this.onlineState=t;let e=!1;return this.ro&&!this.io&&this.ao(this.ro,t)&&(this.co(this.ro),e=!0),e}ao(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return!(this.options.uo&&n||t.docs.isEmpty()&&"Offline"!==e)}oo(t){if(t.docChanges.length>0)return!0;const e=this.ro&&this.ro.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}co(t){t=Pm.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.io=!0,this.so.next(t)}}
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
     */class qm{constructor(t){this.key=t}}class zm{constructor(t){this.key=t}}class Hm{constructor(t,e){this.query=t,this._o=e,this.mo=null,this.current=!1,this.yo=Sf(),this.mutatedKeys=Sf(),this.po=$d(t),this.Eo=new Om(this.po)}get To(){return this._o}Io(t,e){const n=e?e.Ao:new Lm,r=e?e.Eo:this.Eo;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a=vd(this.query)&&r.size===this.query.limit?r.last():null,c=wd(this.query)&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),l=Nd(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Ro(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.po(l,a)>0||c&&this.po(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))})),vd(this.query)||wd(this.query))for(;s.size>this.query.limit;){const t=vd(this.query)?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Eo:s,Ao:n,Ln:o,mutatedKeys:i}}Ro(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Eo;this.Eo=t.Eo,this.mutatedKeys=t.mutatedKeys;const i=t.Ao.Yr();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Jl()}};return n(t)-n(e)}
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
     */(t.type,e.type)||this.po(t.doc,e.doc))),this.bo(n);const s=e?this.Po():[],o=0===this.yo.size&&this.current?1:0,a=o!==this.mo;return this.mo=o,0!==i.length||a?{snapshot:new Pm(this.query,t.Eo,r,i,t.mutatedKeys,0===o,a,!1),vo:s}:{vo:s}}eo(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Eo:this.Eo,Ao:new Lm,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{vo:[]}}Vo(t){return!this._o.has(t)&&!!this.Eo.has(t)&&!this.Eo.get(t).hasLocalMutations}bo(t){t&&(t.addedDocuments.forEach((t=>this._o=this._o.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this._o=this._o.delete(t))),this.current=t.current)}Po(){if(!this.current)return[];const t=this.yo;this.yo=Sf(),this.Eo.forEach((t=>{this.Vo(t.key)&&(this.yo=this.yo.add(t.key))}));const e=[];return t.forEach((t=>{this.yo.has(t)||e.push(new zm(t))})),this.yo.forEach((n=>{t.has(n)||e.push(new qm(n))})),e}So(t){this._o=t.Gn,this.yo=Sf();const e=this.Io(t.documents);return this.applyChanges(e,!0)}Do(){return Pm.fromInitialDocuments(this.query,this.Eo,this.mutatedKeys,0===this.mo)}}class Km{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Wm{constructor(t){this.key=t,this.Co=!1}}class Gm{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.No={},this.xo=new _p((t=>Ad(t)),kd),this.ko=new Map,this.$o=new Set,this.Oo=new pf(Dh.comparator),this.Fo=new Map,this.Mo=new Lp,this.Lo={},this.Bo=new Map,this.Uo=Ep.ie(),this.onlineState="Unknown",this.qo=void 0}get isPrimaryClient(){return!0===this.qo}}async function Ym(t,e){const n=function(t){const e=Ql(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Qm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=dg.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=tg.bind(null,e),e.No.Tr=Vm.bind(null,e.eventManager),e.No.jo=Fm.bind(null,e.eventManager),e}(t);let r,i;const s=n.xo.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Do();else{const t=await function(t,e){const n=Ql(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.ze.getTargetData(t,e).next((i=>i?(r=i,dp.resolve(r)):n.ze.allocateTargetId(t).next((i=>(r=new gp(e,i,0,t.currentSequenceNumber),n.ze.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.Un.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Un=n.Un.insert(t.targetId,t),n.qn.set(e,t.targetId)),t}))}(n.localStore,Td(e)),s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await async function(t,e,n,r){t.Ko=(e,n,r)=>async function(t,e,n,r){let i=e.view.Io(n);i.Ln&&(i=await xp(t.localStore,e.query,!1).then((({documents:t})=>e.view.Io(t,i))));const s=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,s);return ag(t,e.targetId,o.vo),o.snapshot}(t,e,n,r);const i=await xp(t.localStore,e,!0),s=new Hm(e,i.Gn),o=s.Io(i.documents),a=Nf.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),c=s.applyChanges(o,t.isPrimaryClient,a);ag(t,n,c.vo);const u=new Km(e,n,s);return t.xo.set(e,u),t.ko.has(n)?t.ko.get(n).push(e):t.ko.set(n,[e]),c.snapshot}(n,e,r,"current"===s),n.isPrimaryClient&&cm(n.remoteStore,t)}return i}async function Jm(t,e){const n=Ql(t),r=n.xo.get(e),i=n.ko.get(r.targetId);if(i.length>1)return n.ko.set(r.targetId,i.filter((t=>!kd(t,e)))),void n.xo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Dp(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),um(n.remoteStore,r.targetId),sg(n,r.targetId)})).catch(Ip)):(sg(n,r.targetId),await Dp(n.localStore,r.targetId,!0))}async function Xm(t,e,n){const r=function(t){const e=Ql(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=eg.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ng.bind(null,e),e}(t);try{const t=await function(t,e){const n=Ql(t),r=dh.now(),i=e.reduce(((t,e)=>t.add(e.key)),Sf());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>n.Qn.Pn(t,i).next((i=>{s=i;const o=[];for(const t of e){const e=Zd(t,s.get(t.key));null!=e&&o.push(new rf(t.key,e,Gh(e.value.mapValue),Gd.exists(!0)))}return n.In.addMutationBatch(t,r,o,e)})))).then((t=>(t.applyToLocalDocumentSet(s),{batchId:t.batchId,changes:s})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.Lo[t.currentUser.toKey()];r||(r=new pf(lh)),r=r.insert(e,n),t.Lo[t.currentUser.toKey()]=r}(r,t.batchId,n),await lg(r,t.changes),await Em(r.remoteStore)}catch(t){const e=xm(t,"Failed to persist write");n.reject(e)}}async function Qm(t,e){const n=Ql(t);try{const t=await $p(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.Fo.get(e);r&&(Xl(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.Co=!0:t.modifiedDocuments.size>0?Xl(r.Co):t.removedDocuments.size>0&&(Xl(r.Co),r.Co=!1))})),await lg(n,t,e)}catch(t){await Ip(t)}}function Zm(t,e,n){const r=Ql(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.xo.forEach(((n,r)=>{const i=r.view.eo(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=Ql(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.eo(e)&&(r=!0)})),r&&jm(n)}(r.eventManager,e),t.length&&r.No.Tr(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function tg(t,e,n){const r=Ql(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fo.get(e),s=i&&i.key;if(s){let t=new pf(Dh.comparator);t=t.insert(s,Yh.newNoDocument(s,fh.min()));const n=Sf().add(s),i=new Cf(fh.min(),new Map,new yf(lh),t,n);await Qm(r,i),r.Oo=r.Oo.remove(s),r.Fo.delete(e),ug(r)}else await Dp(r.localStore,e,!1).then((()=>sg(r,e,n))).catch(Ip)}async function eg(t,e){const n=Ql(t),r=e.batch.batchId;try{const t=await function(t,e){const n=Ql(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),i=n.jn.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=dp.resolve();return s.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);Xl(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&r.addEntry(e,n.commitVersion))}))})),o.next((()=>t.In.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.In.performConsistencyCheck(t))).next((()=>n.Qn.Pn(t,r)))}))}(n.localStore,e);ig(n,r,null),rg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await lg(n,t)}catch(t){await Ip(t)}}async function ng(t,e,n){const r=Ql(t);try{const t=await function(t,e){const n=Ql(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.In.lookupMutationBatch(t,e).next((e=>(Xl(null!==e),r=e.keys(),n.In.removeMutationBatch(t,e)))).next((()=>n.In.performConsistencyCheck(t))).next((()=>n.Qn.Pn(t,r)))}))}(r.localStore,e);ig(r,e,n),rg(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await lg(r,t)}catch(n){await Ip(n)}}function rg(t,e){(t.Bo.get(e)||[]).forEach((t=>{t.resolve()})),t.Bo.delete(e)}function ig(t,e,n){const r=Ql(t);let i=r.Lo[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.Lo[r.currentUser.toKey()]=i}}function sg(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ko.get(e))t.xo.delete(r),n&&t.No.jo(r,n);t.ko.delete(e),t.isPrimaryClient&&t.Mo.cs(e).forEach((e=>{t.Mo.containsKey(e)||og(t,e)}))}function og(t,e){t.$o.delete(e.path.canonicalString());const n=t.Oo.get(e);null!==n&&(um(t.remoteStore,n),t.Oo=t.Oo.remove(e),t.Fo.delete(n),ug(t))}function ag(t,e,n){for(const r of n)r instanceof qm?(t.Mo.addReference(r.key,e),cg(t,r)):r instanceof zm?(Kl("SyncEngine","Document no longer in limbo: "+r.key),t.Mo.removeReference(r.key,e),t.Mo.containsKey(r.key)||og(t,r.key)):Jl()}function cg(t,e){const n=e.key,r=n.path.canonicalString();t.Oo.get(n)||t.$o.has(r)||(Kl("SyncEngine","New document in limbo: "+n),t.$o.add(r),ug(t))}function ug(t){for(;t.$o.size>0&&t.Oo.size<t.maxConcurrentLimboResolutions;){const e=t.$o.values().next().value;t.$o.delete(e);const n=new Dh(vh.fromString(e)),r=t.Uo.next();t.Fo.set(r,new Wm(n)),t.Oo=t.Oo.insert(n,r),cm(t.remoteStore,new gp(Td(yd(n.path)),r,2,ah.T))}}async function lg(t,e,n){const r=Ql(t),i=[],s=[],o=[];r.xo.isEmpty()||(r.xo.forEach(((t,a)=>{o.push(r.Ko(a,e,n).then((t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=Sp.kn(a.targetId,t);s.push(e)}})))})),await Promise.all(o),r.No.Tr(i),await async function(t,e){const n=Ql(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>dp.forEach(e,(e=>dp.forEach(e.Nn,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>dp.forEach(e.xn,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!fp(t))throw t;Kl("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.Un.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.Un=n.Un.insert(e,i)}}}(r.localStore,s))}async function hg(t,e){const n=Ql(t);if(!n.currentUser.isEqual(e)){Kl("SyncEngine","User change. New user:",e.toKey());const t=await Cp(n.localStore,e);n.currentUser=e,function(t,e){t.Bo.forEach((t=>{t.forEach((t=>{t.reject(new th(Zl.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),t.Bo.clear()}(n),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await lg(n,t.Wn)}}function dg(t,e){const n=Ql(t),r=n.Fo.get(e);if(r&&r.Co)return Sf().add(r.key);{let t=Sf();const r=n.ko.get(e);if(!r)return t;for(const e of r){const r=n.xo.get(e);t=t.unionWith(r.view.To)}return t}}class fg{constructor(){this.synchronizeTabs=!1}async initialize(t){this.N=Qp(t.databaseInfo.databaseId),this.sharedClientState=this.Wo(t),this.persistence=this.Go(t),await this.persistence.start(),this.gcScheduler=this.zo(t),this.localStore=this.Ho(t)}zo(t){return null}Ho(t){return function(t,e,n,r){return new Ap(t,e,n,r)}(this.persistence,new kp,t.initialUser,this.N)}Go(t){return new jp(qp.Ns,this.N)}Wo(t){return new Hp}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class pg{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Zm(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=hg.bind(null,this.syncEngine),await async function(t,e){const n=Ql(t);e?(n.Kr.delete(2),await om(n)):e||(n.Kr.add(2),await am(n),n.Wr.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Um}createDatastore(t){const e=Qp(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new Jp(r));var r;return function(t,e,n){return new rm(t,e,n)}(t.credentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>Zm(this.syncEngine,t,0),s=Wp.bt()?new Wp:new Kp,new sm(e,n,r,i,s);var e,n,r,i,s}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new Gm(t,e,n,r,i,s);return o&&(a.qo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Ql(t);Kl("RemoteStore","RemoteStore shutting down."),e.Kr.add(5),await am(e),e.Qr.shutdown(),e.Wr.set("Unknown")}(this.remoteStore)}}
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
     */class mg{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Yo(this.observer.next,t)}error(t){this.observer.error?this.Yo(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Xo(){this.muted=!0}Yo(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
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
     */class gg{constructor(t,e,n){this.credentials=t,this.asyncQueue=e,this.databaseInfo=n,this.user=Bl.UNAUTHENTICATED,this.clientId=uh.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(e,(async t=>{Kl("FirestoreClient","Received user=",t.uid),await this.credentialListener(t),this.user=t}))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.credentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new th(Zl.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new eh;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),t.resolve()}catch(e){const n=xm(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function yg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await async function(t){return t.offlineComponents||(Kl("FirestoreClient","Using default OfflineComponentProvider"),await async function(t,e){t.asyncQueue.verifyOperationInProgress(),Kl("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await Cp(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}(t,new fg)),t.offlineComponents}(t);Kl("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>async function(t,e){const n=Ql(t);n.asyncQueue.verifyOperationInProgress(),Kl("RemoteStore","RemoteStore received new credentials");const r=pm(n);n.Kr.add(3),await am(n),r&&n.Wr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Kr.delete(3),await om(n)}(e.remoteStore,t))),t.onlineComponents=e}async function vg(t){return t.onlineComponents||(Kl("FirestoreClient","Using default OnlineComponentProvider"),await yg(t,new pg)),t.onlineComponents}async function wg(t){const e=await vg(t),n=e.eventManager;return n.onListen=Ym.bind(null,e.syncEngine),n.onUnlisten=Jm.bind(null,e.syncEngine),n}class bg{constructor(t,e,n,r,i,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Eg{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Eg&&t.projectId===this.projectId&&t.database===this.database}}
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
     */const Ig=new Map;
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
     */function _g(t,e,n){if(!n)throw new th(Zl.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Tg(t){if(!Dh.isDocumentKey(t))throw new th(Zl.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Sg(t){if(Dh.isDocumentKey(t))throw new th(Zl.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function kg(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){if(t.constructor){const e=/function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());if(e&&e.length>1)return e[1]}return null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Jl()}function Ag(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new th(Zl.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=kg(t);throw new th(Zl.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
class Cg{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new th(Zl.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new th(Zl.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,r){if(!0===e&&!0===r)throw new th(Zl.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
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
     */class Ng{constructor(t,e){this._credentials=e,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Cg({}),this._settingsFrozen=!1,t instanceof Eg?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new th(Zl.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Eg(t.options.projectId)}(t))}get app(){if(!this._app)throw new th(Zl.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new th(Zl.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Cg(t),void 0!==t.credentials&&(this._credentials=function(t){if(!t)return new rh;switch(t.type){case"gapi":const e=t.client;return Xl(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new oh(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new th(Zl.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Ig.get(t);e&&(Kl("ComponentProvider","Removing Datastore"),Ig.delete(t),e.terminate())}(this),Promise.resolve()}}
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
     */class $g{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Dg(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new $g(this.firestore,t,this._key)}}class Rg{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Rg(this.firestore,t,this._query)}}class Dg extends Rg{constructor(t,e,n){super(t,e,yd(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new $g(this.firestore,null,new Dh(t))}withConverter(t){return new Dg(this.firestore,t,this._path)}}function xg(t,e,...n){if(t=ne(t),_g("collection","path",e),t instanceof Ng){const r=vh.fromString(e,...n);return Sg(r),new Dg(t,null,r)}{if(!(t instanceof $g||t instanceof Dg))throw new th(Zl.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(vh.fromString(e,...n));return Sg(r),new Dg(t.firestore,null,r)}}
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
class Og{constructor(){this.fa=Promise.resolve(),this.da=[],this.wa=!1,this._a=[],this.ma=null,this.ga=!1,this.ya=!1,this.pa=[],this.rr=new Zp(this,"async_queue_retry"),this.Ea=()=>{const t=Xp();t&&Kl("AsyncQueue","Visibility state changed to "+t.visibilityState),this.rr.tr()};const t=Xp();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Ea)}get isShuttingDown(){return this.wa}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Ta(),this.Ia(t)}enterRestrictedMode(t){if(!this.wa){this.wa=!0,this.ya=t||!1;const e=Xp();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Ea)}}enqueue(t){if(this.Ta(),this.wa)return new Promise((()=>{}));const e=new eh;return this.Ia((()=>this.wa&&this.ya?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.da.push(t),this.Aa())))}async Aa(){if(0!==this.da.length){try{await this.da[0](),this.da.shift(),this.rr.reset()}catch(t){if(!fp(t))throw t;Kl("AsyncQueue","Operation failed with retryable error: "+t)}this.da.length>0&&this.rr.Xi((()=>this.Aa()))}}Ia(t){const e=this.fa.then((()=>(this.ga=!0,t().catch((t=>{throw this.ma=t,this.ga=!1,Wl("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
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
     */(t)),t})).then((t=>(this.ga=!1,t))))));return this.fa=e,e}enqueueAfterDelay(t,e,n){this.Ta(),this.pa.indexOf(t)>-1&&(e=0);const r=Dm.createAndSchedule(this,t,e,n,(t=>this.Ra(t)));return this._a.push(r),r}Ta(){this.ma&&Jl()}verifyOperationInProgress(){}async ba(){let t;do{t=this.fa,await t}while(t!==this.fa)}Pa(t){for(const e of this._a)if(e.timerId===t)return!0;return!1}va(t){return this.ba().then((()=>{this._a.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this._a)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.ba()}))}Va(t){this.pa.push(t)}Ra(t){const e=this._a.indexOf(t);this._a.splice(e,1)}}function Lg(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const t of["next","error","complete"])if(t in n&&"function"==typeof n[t])return!0;return!1}
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
     */(t)}class Pg extends Ng{constructor(t,e){super(t,e),this.type="firestore",this._queue=new Og,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Ug(this),this._firestoreClient.terminate()}}function Mg(t){return t._firestoreClient||Ug(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Ug(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new bg(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new gg(t._credentials,t._queue,r)}
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
     */class Vg{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new th(Zl.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bh(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
     */class Fg{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Fg(Ih.fromBase64String(t))}catch(t){throw new th(Zl.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Fg(Ih.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
     */class jg{constructor(t){this._methodName=t}}
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
     */class Bg{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new th(Zl.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new th(Zl.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return lh(this._lat,t._lat)||lh(this._long,t._long)}}
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
     */const qg=/^__.*__$/;class zg{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new rf(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Hg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Jl()}}class Kg{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.N=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Sa(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Da(){return this.settings.Da}Ca(t){return new Kg(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Na(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Ca({path:n,xa:!1});return r.ka(t),r}$a(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Ca({path:n,xa:!1});return r.Sa(),r}Oa(t){return this.Ca({path:void 0,xa:!0})}Fa(t){return ry(t,this.settings.methodName,this.settings.Ma||!1,this.path,this.settings.La)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Sa(){if(this.path)for(let t=0;t<this.path.length;t++)this.ka(this.path.get(t))}ka(t){if(0===t.length)throw this.Fa("Document fields must not be empty");if(Hg(this.Da)&&qg.test(t))throw this.Fa('Document fields cannot begin and end with "__"')}}class Wg{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.N=n||Qp(t)}Ba(t,e,n,r=!1){return new Kg({Da:t,methodName:e,La:n,path:bh.emptyPath(),xa:!1,Ma:r},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function Gg(t){const e=t._freezeSettings(),n=Qp(t._databaseId);return new Wg(t._databaseId,!!e.ignoreUndefinedProperties,n)}class Yg extends jg{_toFieldTransform(t){if(2!==t.Da)throw 1===t.Da?t.Fa(`${this._methodName}() can only appear at the top level of your update data`):t.Fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Yg}}function Jg(t,e,n,r=!1){return Xg(n,t.Ba(r?4:3,e))}function Xg(t,e){if(Qg(t=ne(t)))return Zg("Unsupported field value:",e,t),function(t,e){const n={};return gh(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):mh(t,((t,r)=>{const i=Xg(r,e.Na(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}(t,e);if(t instanceof jg)return function(t,e){if(!Hg(e.Da))throw e.Fa(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.Fa(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xa&&4!==e.Da)throw e.Fa("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=Xg(i,e.Oa(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=ne(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Od(e.N,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=dh.fromDate(t);return{timestampValue:Ff(e.N,n)}}if(t instanceof dh){const n=new dh(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Ff(e.N,n)}}if(t instanceof Bg)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Fg)return{bytesValue:jf(e.N,t._byteString)};if(t instanceof $g){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.Fa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:zf(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.Fa(`Unsupported field value: ${kg(t)}`)}(t,e)}function Qg(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof dh||t instanceof Bg||t instanceof Fg||t instanceof $g||t instanceof jg)}function Zg(t,e,n){if(!Qg(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=kg(n);throw"an object"===r?e.Fa(t+" a custom object"):e.Fa(t+" "+r)}}function ty(t,e,n){if((e=ne(e))instanceof Vg)return e._internalPath;if("string"==typeof e)return ny(t,e);throw ry("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const ey=new RegExp("[~\\*/\\[\\]]");function ny(t,e,n){if(e.search(ey)>=0)throw ry(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Vg(...e.split("."))._internalPath}catch(r){throw ry(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ry(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new th(Zl.INVALID_ARGUMENT,a+t+c)}function iy(t,e){return t.some((t=>t.isEqual(e)))}
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
     */class sy{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new $g(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new oy(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(ay("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class oy extends sy{data(){return super.data()}}function ay(t,e){return"string"==typeof e?ny(t,e):e instanceof Vg?e._internalPath:e._delegate._internalPath}
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
     */class cy{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class uy extends sy{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ly(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(ay("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class ly extends uy{data(t={}){return super.data(t)}}class hy{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new cy(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new ly(this._firestore,this._userDataWriter,n.key,n,new cy(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new th(Zl.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new ly(t._firestore,t._userDataWriter,n.doc.key,n.doc,new cy(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new ly(t._firestore,t._userDataWriter,e.doc.key,e.doc,new cy(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:dy(e.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function dy(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Jl()}}
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
     */class fy{}function py(t,...e){for(const n of e)t=n._apply(t);return t}class my extends fy{constructor(t,e){super(),this.Ka=t,this.Wa=e,this.type="orderBy"}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new th(Zl.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new th(Zl.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new dd(e,n);return function(t,e){if(null===bd(t)){const n=Ed(t);null!==n&&function(t,e,n){if(!n.isEqual(e))throw new th(Zl.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
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
     */(0,n,e.field)}}(t,r),r}(t._query,this.Ka,this.Wa);return new Rg(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new gd(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function gy(t,e="asc"){const n=e,r=ay("orderBy",t);return new my(r,n)}class yy extends fy{constructor(t,e,n){super(),this.type=t,this.Ga=e,this.za=n}_apply(t){return new Rg(t.firestore,t.converter,Sd(t._query,this.Ga,this.za))}}function vy(t){return function(t,e){if(e<=0)throw new th(Zl.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}("limit",t),new yy("limit",t,"F")}class wy extends fy{constructor(t,e,n){super(),this.type=t,this.Ha=e,this.Ja=n}_apply(t){const e=function(t,e,n,r){if(n[0]=ne(n[0]),n[0]instanceof sy)return function(t,e,n,r,i){if(!r)throw new th(Zl.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const n of _d(t))if(n.field.isKeyField())s.push(Fh(e,r.key));else{const t=r.data.field(n.field);if(Ah(t))throw new th(Zl.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+n.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===t){const t=n.field.canonicalString();throw new th(Zl.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${t}' (used as the orderBy) does not exist.`)}s.push(t)}return new ld(s,i)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Gg(t.firestore);return function(t,e,n,r,i,s){const o=t.explicitOrderBy;if(i.length>o.length)throw new th(Zl.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let s=0;s<i.length;s++){const c=i[s];if(o[s].field.isKeyField()){if("string"!=typeof c)throw new th(Zl.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof c}`);if(!Id(t)&&-1!==c.indexOf("/"))throw new th(Zl.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to ${r}() must be a plain document ID, but '${c}' contains a slash.`);const n=t.path.child(vh.fromString(c));if(!Dh.isDocumentKey(n))throw new th(Zl.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new Dh(n);a.push(Fh(e,i))}else{const t=Jg(n,r,c);a.push(t)}}return new ld(a,s)}(t._query,t.firestore._databaseId,i,e,n,r)}}(t,this.type,this.Ha,this.Ja);return new Rg(t.firestore,t.converter,function(t,e){return new gd(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,e,t.endAt)}(t._query,e))}}class by extends class{convertValue(t,e="none"){switch(xh(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Sh(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(kh(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Jl()}}convertObject(t,e){const n={};return mh(t.fields,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new Bg(Sh(t.latitude),Sh(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Ch(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Nh(t));default:return null}}convertTimestamp(t){const e=Th(t);return new dh(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=vh.fromString(t);Xl(hp(n));const r=new Eg(n.get(1),n.get(3)),i=new Dh(n.popFirst(5));return r.isEqual(e)||Wl(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}{constructor(t){super(),this.firestore=t}convertBytes(t){return new Fg(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new $g(this.firestore,null,e)}}function Ey(t,e,n,...r){t=Ag(t,$g);const i=Ag(t.firestore,Pg),s=Gg(i);let o;return o="string"==typeof(e=ne(e))||e instanceof Vg?function(t,e,n,r,i,s){const o=t.Ba(1,e,n),a=[ty(e,r,n)],c=[i];if(s.length%2!=0)throw new th(Zl.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let t=0;t<s.length;t+=2)a.push(ty(e,s[t])),c.push(s[t+1]);const u=[],l=Wh.empty();for(let t=a.length-1;t>=0;--t)if(!iy(u,a[t])){const e=a[t];let n=c[t];n=ne(n);const r=o.$a(e);if(n instanceof Yg)u.push(e);else{const t=Xg(n,r);null!=t&&(u.push(e),l.set(e,t))}}const h=new Eh(u);return new zg(l,h,o.fieldTransforms)}(s,"updateDoc",t._key,e,n,r):function(t,e,n,r){const i=t.Ba(1,e,n);Zg("Data must be an object, but it was:",i,r);const s=[],o=Wh.empty();mh(r,((t,r)=>{const a=ny(e,t,n);r=ne(r);const c=i.$a(a);if(r instanceof Yg)s.push(a);else{const t=Xg(r,c);null!=t&&(s.push(a),o.set(a,t))}}));const a=new Eh(s);return new zg(o,a,i.fieldTransforms)}(s,"updateDoc",t._key,e),_y(i,[o.toMutation(t._key,Gd.exists(!0))])}function Iy(t,...e){var n,r,i;t=ne(t);let s={includeMetadataChanges:!1},o=0;"object"!=typeof e[o]||Lg(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Lg(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(r=t.error)||void 0===r?void 0:r.bind(t),e[o+2]=null===(i=t.complete)||void 0===i?void 0:i.bind(t)}let c,u,l;if(t instanceof $g)u=Ag(t.firestore,Pg),l=yd(t._key.path),c={next:n=>{e[o]&&e[o](function(t,e,n){const r=n.docs.get(e._key),i=new by(t);return new uy(t,i,e._key,r,new cy(n.hasPendingWrites,n.fromCache),e.converter)}(u,t,n))},error:e[o+1],complete:e[o+2]};else{const n=Ag(t,Rg);u=Ag(n.firestore,Pg),l=n._query;const r=new by(u);c={next:t=>{e[o]&&e[o](new hy(u,r,n,t))},error:e[o+1],complete:e[o+2]},function(t){if(wd(t)&&0===t.explicitOrderBy.length)throw new th(Zl.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(t._query)}return function(t,e,n,r){const i=new mg(r),s=new Bm(e,i,n);return t.asyncQueue.enqueueAndForget((async()=>async function(t,e){const n=Ql(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Mm),i)try{s.Xr=await n.onListen(r)}catch(t){const n=xm(t,`Initialization of query '${Cd(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,s),s.listeners.push(e),e.eo(n.onlineState),s.Xr&&e.no(s.Xr)&&jm(n)}(await wg(t),s))),()=>{i.Xo(),t.asyncQueue.enqueueAndForget((async()=>async function(t,e){const n=Ql(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}(await wg(t),s)))}}(Mg(u),l,a,c)}function _y(t,e){return function(t,e){const n=new eh;return t.asyncQueue.enqueueAndForget((async()=>Xm(await function(t){return vg(t).then((t=>t.syncEngine))}(t),e,n))),n.promise}(Mg(t),e)}let Ty;function Sy(){return void 0===Ty&&(Ty=function(t=Ce()){return Te(t,"firestore").getImmediate()}()),Ty}ql="9.0.0",_e(new re("firestore",((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=new Pg(n,new ih(t.getProvider("auth-internal")));return e=Object.assign({useFetchStreams:!0},e),r._setSettings(e),r}),"PUBLIC")),Ne("@firebase/firestore","3.0.2",undefined);const ky=Ve(void 0),Ay={subscribe:ky.subscribe};let Cy=()=>{};function Ny(t){if(void 0===t)return"Loading";if(t<0)return"Overdrawn";if(0===t)return"None";const e=Math.floor(t/3600),n=Math.floor(t%3600/60),r=t%60;return`${e.toString().padStart(2,"0")}:${n.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}`}function $y(t){let e,n,r,i,s,o,a=Ny(t[0])+"";return s=new Co({}),{c(){e=A("span"),n=C("Credit: "),r=C(a),i=N(),kt(s.$$.fragment)},m(t,a){S(t,e,a),T(e,n),T(e,r),T(e,i),At(s,e,null),o=!0},p(t,[e]){(!o||1&e)&&a!==(a=Ny(t[0])+"")&&M(r,a)},i(t){o||(vt(s.$$.fragment,t),o=!0)},o(t){wt(s.$$.fragment,t),o=!1},d(t){t&&k(e),Ct(s)}}}function Ry(t,e,n){let r;return l(t,Ay,(t=>n(0,r=t))),[r]}$s.subscribe((t=>{if(Cy(),!t)return void(Cy=()=>{});const e=function(t,e,...n){if(t=ne(t),1===arguments.length&&(e=uh.I()),_g("doc","path",e),t instanceof Ng){const r=vh.fromString(e,...n);return Tg(r),new $g(t,null,new Dh(r))}{if(!(t instanceof $g||t instanceof Dg))throw new th(Zl.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(vh.fromString(e,...n));return Tg(r),new $g(t.firestore,t instanceof Dg?t.converter:null,new Dh(r))}}(Sy(),"users",t.uid);Cy=Iy(e,(t=>{const e=t.get("secondsCredit");ky.set(e)}))}));class Dy extends $t{constructor(t){super(),Nt(this,t,Ry,$y,a,{})}}function xy(e){let n,r,i,s;return{c(){n=A("button"),r=C("Sign Out"),n.disabled=e[0]},m(t,o){S(t,n,o),T(n,r),i||(s=R(n,"click",e[1]),i=!0)},p(t,[e]){1&e&&(n.disabled=t[0])},i:t,o:t,d(t){t&&k(n),i=!1,s()}}}function Oy(t,e,n){var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(i,s){function o(t){try{c(r.next(t))}catch(t){s(t)}}function a(t){try{c(r.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}c((r=r.apply(t,e||[])).next())}))};let i=!1;return[i,function(){return r(this,void 0,void 0,(function*(){const t=Ns();n(0,i=!0),yield function(t){return ne(t).signOut()}(t),n(0,i=!1)}))}]}class Ly extends $t{constructor(t){super(),Nt(this,t,Oy,xy,a,{})}}function Py(t){let e,n,r,i,s,o;function a(t,e){return void 0===t[1]?Fy:t[4]?t[3]?My:Uy:Vy}let c=a(t),u=c(t);return{c(){e=A("audio"),r=N(),u.c(),i=$(),e.controls=!0,e.src!==(n=t[0])&&O(e,"src",n),O(e,"class","svelte-lox7ap"),void 0===t[1]&&ot((()=>t[18].call(e)))},m(n,a){S(n,e,a),S(n,r,a),u.m(n,a),S(n,i,a),s||(o=R(e,"durationchange",t[18]),s=!0)},p(t,r){1&r&&e.src!==(n=t[0])&&O(e,"src",n),c===(c=a(t))&&u?u.p(t,r):(u.d(1),u=c(t),u&&(u.c(),u.m(i.parentNode,i)))},d(t){t&&k(e),t&&k(r),u.d(t),t&&k(i),s=!1,o()}}}function My(t){let e,n,r,i=Ny(t[2])+"";return{c(){e=A("p"),n=C("Your remaining credit will be: "),r=C(i),O(e,"class","svelte-lox7ap")},m(t,i){S(t,e,i),T(e,n),T(e,r)},p(t,e){4&e&&i!==(i=Ny(t[2])+"")&&M(r,i)},d(t){t&&k(e)}}}function Uy(t){let e,n,r,i,s=Ny(-t[2])+"";return{c(){e=A("p"),n=C("Insufficient credit: Add "),r=C(s),i=C(" to proceed"),O(e,"class","error svelte-lox7ap")},m(t,s){S(t,e,s),T(e,n),T(e,r),T(e,i)},p(t,e){4&e&&s!==(s=Ny(-t[2])+"")&&M(r,s)},d(t){t&&k(e)}}}function Vy(e){let n;return{c(){n=A("p"),n.textContent="Too long: Each transcript must be under 4 hours in duration",O(n,"class","error svelte-lox7ap")},m(t,e){S(t,n,e)},p:t,d(t){t&&k(n)}}}function Fy(e){let n;return{c(){n=A("p"),n.textContent="Unsupported file type",O(n,"class","svelte-lox7ap")},m(t,e){S(t,n,e)},p:t,d(t){t&&k(n)}}}function jy(t){let e,n,r,i,o,a,c,u;return{c(){e=A("div"),n=A("button"),n.textContent="Cancel",r=N(),i=A("button"),o=C("Upload"),O(n,"class","danger svelte-lox7ap"),O(i,"class","success svelte-lox7ap"),i.disabled=a=!t[8],O(e,"class","buttonContainer svelte-lox7ap")},m(s,a){S(s,e,a),T(e,n),T(e,r),T(e,i),T(i,o),c||(u=[R(n,"click",D(t[9])),R(i,"click",D(t[11]))],c=!0)},p(t,e){256&e&&a!==(a=!t[8])&&(i.disabled=a)},d(t){t&&k(e),c=!1,s(u)}}}function By(t){let e,n,r;return n=new wo({props:{text:"Uploading"}}),{c(){e=A("div"),kt(n.$$.fragment),O(e,"class","loadingContainer svelte-lox7ap")},m(t,i){S(t,e,i),At(n,e,null),r=!0},i(t){r||(vt(n.$$.fragment,t),r=!0)},o(t){wt(n.$$.fragment,t),r=!1},d(t){t&&k(e),Ct(n)}}}function qy(t){let e,n,r,i,o,a,c,u,l,h,d,f,p,m,g,y,v,w,b=t[0]&&Py(t),E=!t[7]&&jy(t),I=t[7]&&By();return{c(){e=A("div"),n=A("h1"),n.textContent="New Transcript",r=N(),i=A("div"),o=A("label"),o.textContent="Audio:",a=N(),c=A("input"),u=N(),l=A("div"),h=A("label"),h.textContent="Name:",d=N(),f=A("input"),p=N(),b&&b.c(),m=N(),E&&E.c(),g=N(),I&&I.c(),O(n,"class","svelte-lox7ap"),O(o,"for","upload_file"),O(o,"class","svelte-lox7ap"),O(c,"id","upload_file"),O(c,"type","file"),O(c,"accept","audio/*,video/*"),c.disabled=t[7],O(i,"class","formSection svelte-lox7ap"),O(h,"for","upload_name"),O(h,"class","svelte-lox7ap"),O(f,"id","upload_name"),O(f,"type","text"),f.disabled=t[7],O(f,"placeholder",t[5]),O(l,"class","formSection svelte-lox7ap"),O(e,"class","container svelte-lox7ap")},m(s,_){S(s,e,_),T(e,n),T(e,r),T(e,i),T(i,o),T(i,a),T(i,c),T(e,u),T(e,l),T(l,h),T(l,d),T(l,f),U(f,t[6]),T(e,p),b&&b.m(e,null),T(e,m),E&&E.m(e,null),T(e,g),I&&I.m(e,null),y=!0,v||(w=[R(c,"change",t[10]),R(f,"input",t[17])],v=!0)},p(t,[n]){(!y||128&n)&&(c.disabled=t[7]),(!y||128&n)&&(f.disabled=t[7]),(!y||32&n)&&O(f,"placeholder",t[5]),64&n&&f.value!==t[6]&&U(f,t[6]),t[0]?b?b.p(t,n):(b=Py(t),b.c(),b.m(e,m)):b&&(b.d(1),b=null),t[7]?E&&(E.d(1),E=null):E?E.p(t,n):(E=jy(t),E.c(),E.m(e,g)),t[7]?I?128&n&&vt(I,1):(I=By(),I.c(),vt(I,1),I.m(e,null)):I&&(gt(),wt(I,1,1,(()=>{I=null})),yt())},i(t){y||(vt(I),y=!0)},o(t){wt(I),y=!1},d(t){t&&k(e),b&&b.d(),E&&E.d(),I&&I.d(),v=!1,s(w)}}}function zy(t,e,n){let r;l(t,Ay,(t=>n(16,r=t)));var i=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(i,s){function o(t){try{c(r.next(t))}catch(t){s(t)}}function a(t){try{c(r.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}c((r=r.apply(t,e||[])).next())}))};const{close:s}=Q("simple-modal");let o,a,c,u,h,d,f,p,m,g,y;let v,w=!1;return t.$$.update=()=>{4096&t.$$.dirty&&n(5,a=function(t){if(void 0===t)return"My Transcript";const e=t.name,n=e.lastIndexOf(".");return-1===n?e:e.slice(0,n)}(o)),4096&t.$$.dirty&&n(0,u=void 0===o?void 0:URL.createObjectURL(o)),65536&t.$$.dirty&&n(13,d=r),2&t.$$.dirty&&n(14,f=isNaN(null!=h?h:0)?0:null!=h?h:0),16384&t.$$.dirty&&n(15,p=Math.max(1,Math.floor(f))),40960&t.$$.dirty&&n(2,m=(null!=d?d:0)-p),4&t.$$.dirty&&n(3,g=m>=0),32768&t.$$.dirty&&n(4,y=p<=14399),27&t.$$.dirty&&n(8,v=void 0!==u&&void 0!==h&&g&&y)},[u,h,m,g,y,a,c,w,v,s,function(t){var e;const r=t.target;n(12,o=null===(e=r.files)||void 0===e?void 0:e[0])},function(){return i(this,void 0,void 0,(function*(){void 0!==o&&(n(7,w=!0),void 0!==c&&c.length>0?yield go(o,c):yield go(o,a),n(7,w=!1),s())}))},o,d,f,p,r,function(){c=this.value,n(6,c)},function(){h=this.duration,n(1,h)}]}class Hy extends $t{constructor(t){super(),Nt(this,t,zy,qy,a,{})}}function Ky(e){let n,r,i;return{c(){n=A("button"),n.textContent="New Transcript"},m(t,s){S(t,n,s),r||(i=R(n,"click",e[0]),r=!0)},p:t,i:t,o:t,d(t){t&&k(n),r=!1,i()}}}function Wy(t){const{open:e}=Q("simple-modal");return[function(){e(Hy,{},{closeButton:!1})}]}class Gy extends $t{constructor(t){super(),Nt(this,t,Wy,Ky,a,{})}}function Yy(t){let e,n,r,i,s,o,a;return e=new Dy({}),i=new Gy({}),o=new Ly({}),{c(){kt(e.$$.fragment),n=N(),r=A("div"),kt(i.$$.fragment),s=N(),kt(o.$$.fragment),O(r,"class","buttons svelte-mh2vsg")},m(t,c){At(e,t,c),S(t,n,c),S(t,r,c),At(i,r,null),T(r,s),At(o,r,null),a=!0},i(t){a||(vt(e.$$.fragment,t),vt(i.$$.fragment,t),vt(o.$$.fragment,t),a=!0)},o(t){wt(e.$$.fragment,t),wt(i.$$.fragment,t),wt(o.$$.fragment,t),a=!1},d(t){Ct(e,t),t&&k(n),t&&k(r),Ct(i),Ct(o)}}}function Jy(t){let e,n,r,i,s=t[0]&&Yy();return{c(){e=A("nav"),n=A("a"),n.innerHTML='<img class="logo svelte-mh2vsg" src="/assets/smallBrand.svg" alt="logo"/>',r=N(),s&&s.c(),O(n,"href","/dashboard"),O(n,"class","logo svelte-mh2vsg"),O(e,"class","svelte-mh2vsg")},m(t,o){S(t,e,o),T(e,n),T(e,r),s&&s.m(e,null),i=!0},p(t,[n]){t[0]?s?1&n&&vt(s,1):(s=Yy(),s.c(),vt(s,1),s.m(e,null)):s&&(gt(),wt(s,1,1,(()=>{s=null})),yt())},i(t){i||(vt(s),i=!0)},o(t){wt(s),i=!1},d(t){t&&k(e),s&&s.d()}}}function Xy(t,e,n){let r;return l(t,$s,(t=>n(0,r=t))),[r]}class Qy extends $t{constructor(t){super(),Nt(this,t,Xy,Jy,a,{})}}const Zy=Ue(new Date,(t=>{const e=setInterval((()=>{t(new Date)}),6e4);return()=>clearInterval(e)}));function tv(t,e){if(void 0===t)return"-";const n=t.valueOf()/1e3,r=e.valueOf()/1e3,i=Math.floor(r-n),s=3600,o=86400,a=604800;if(i<60)return"now";if(i<120)return"a minute ago";if(i<s)return`${Math.floor(i/60)} minutes ago`;if(i<7200)return"an hour ago";if(i<o)return`${Math.floor(i/s)} hours ago`;if(i<172800)return"yesterday";if(i<a)return`${Math.floor(i/o)} days ago`;let c=e.getFullYear()-t.getFullYear();if((e.getMonth()<t.getMonth()||e.getMonth()===t.getMonth()&&e.getDate()<t.getDate())&&c--,1===c)return"a year ago";if(c>1)return`${c} years ago`;let u=e.getMonth()-t.getMonth();return e.getDate()<t.getDate()&&u--,1===u?"a month ago":u>1?`${u} months ago`:i<1209600?"a week ago":`${Math.floor(i/a)} weeks ago`}function ev(e){let n,r,i,o,a,c;return{c(){n=A("div"),r=A("button"),r.textContent="Cancel",i=N(),o=A("button"),o.textContent="Permanently Delete",O(r,"class","svelte-1xj7075"),O(o,"class","danger svelte-1xj7075"),O(n,"class","buttonContainer svelte-1xj7075")},m(t,s){S(t,n,s),T(n,r),T(n,i),T(n,o),a||(c=[R(r,"click",D(e[2])),R(o,"click",D(e[3]))],a=!0)},p:t,d(t){t&&k(n),a=!1,s(c)}}}function nv(t){let e,n,r;return n=new wo({props:{text:"Deleting"}}),{c(){e=A("div"),kt(n.$$.fragment),O(e,"class","loadingContainer svelte-1xj7075")},m(t,i){S(t,e,i),At(n,e,null),r=!0},i(t){r||(vt(n.$$.fragment,t),r=!0)},o(t){wt(n.$$.fragment,t),r=!1},d(t){t&&k(e),Ct(n)}}}function rv(t){let e,n,r,i,s,o,a,c,u,l,h,d,f,p,m,g,y=!t[1]&&ev(t),v=t[1]&&nv();return{c(){e=A("div"),n=A("h1"),n.textContent="Delete Transcript",r=N(),i=A("p"),s=C("You are about to "),o=A("span"),o.textContent="permanently",a=C(" delete '"),c=C(t[0]),u=C("' from Lexoral's servers."),l=N(),h=A("p"),h.textContent="It's not possible to recover the transcript after you delete it.",d=N(),f=A("p"),f.textContent="Are you sure?",p=N(),y&&y.c(),m=N(),v&&v.c(),O(n,"class","svelte-1xj7075"),O(o,"class","bold svelte-1xj7075"),O(i,"class","svelte-1xj7075"),O(h,"class","svelte-1xj7075"),O(f,"class","svelte-1xj7075"),O(e,"class","container svelte-1xj7075")},m(t,w){S(t,e,w),T(e,n),T(e,r),T(e,i),T(i,s),T(i,o),T(i,a),T(i,c),T(i,u),T(e,l),T(e,h),T(e,d),T(e,f),T(e,p),y&&y.m(e,null),T(e,m),v&&v.m(e,null),g=!0},p(t,[n]){(!g||1&n)&&M(c,t[0]),t[1]?y&&(y.d(1),y=null):y?y.p(t,n):(y=ev(t),y.c(),y.m(e,m)),t[1]?v?2&n&&vt(v,1):(v=nv(),v.c(),vt(v,1),v.m(e,null)):v&&(gt(),wt(v,1,1,(()=>{v=null})),yt())},i(t){g||(vt(v),g=!0)},o(t){wt(v),g=!1},d(t){t&&k(e),y&&y.d(),v&&v.d()}}}function iv(t,e,n){var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(i,s){function o(t){try{c(r.next(t))}catch(t){s(t)}}function a(t){try{c(r.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}c((r=r.apply(t,e||[])).next())}))};const{close:i}=Q("simple-modal");let s,{transcript:o}=e,a=!1;return t.$$set=t=>{"transcript"in t&&n(4,o=t.transcript)},t.$$.update=()=>{16&t.$$.dirty&&n(0,s=o.get("name"))},[s,a,i,function(){return r(this,void 0,void 0,(function*(){n(1,a=!0),yield function(t){return _y(Ag(t.firestore,Pg),[new cf(t._key,Gd.none())])}(o.ref),i(),n(1,a=!1)}))},o]}class sv extends $t{constructor(t){super(),Nt(this,t,iv,rv,a,{transcript:4})}}function ov(e){let n,r,i,o,a,c;return{c(){n=A("div"),r=A("button"),r.textContent="Cancel",i=N(),o=A("button"),o.textContent="Update Name",O(r,"class","svelte-1mozu0g"),O(o,"class","svelte-1mozu0g"),O(n,"class","buttonContainer svelte-1mozu0g")},m(t,s){S(t,n,s),T(n,r),T(n,i),T(n,o),a||(c=[R(r,"click",D(e[2])),R(o,"click",D(e[3]))],a=!0)},p:t,d(t){t&&k(n),a=!1,s(c)}}}function av(t){let e,n,r;return n=new wo({props:{text:"Renaming"}}),{c(){e=A("div"),kt(n.$$.fragment),O(e,"class","loadingContainer svelte-1mozu0g")},m(t,i){S(t,e,i),At(n,e,null),r=!0},i(t){r||(vt(n.$$.fragment,t),r=!0)},o(t){wt(n.$$.fragment,t),r=!1},d(t){t&&k(e),Ct(n)}}}function cv(t){let e,n,r,i,s,o,a,c,u,l,h,d,f=!t[1]&&ov(t),p=t[1]&&av();return{c(){e=A("div"),n=A("h1"),n.textContent="Rename Transcript",r=N(),i=A("div"),s=A("label"),s.textContent="Name:",o=N(),a=A("input"),c=N(),f&&f.c(),u=N(),p&&p.c(),O(n,"class","svelte-1mozu0g"),O(s,"for","upload_name"),O(a,"id","upload_name"),O(a,"type","text"),a.disabled=t[1],O(i,"class","formSection svelte-1mozu0g"),O(e,"class","container svelte-1mozu0g")},m(m,g){S(m,e,g),T(e,n),T(e,r),T(e,i),T(i,s),T(i,o),T(i,a),U(a,t[0]),T(e,c),f&&f.m(e,null),T(e,u),p&&p.m(e,null),l=!0,h||(d=R(a,"input",t[5]),h=!0)},p(t,[n]){(!l||2&n)&&(a.disabled=t[1]),1&n&&a.value!==t[0]&&U(a,t[0]),t[1]?f&&(f.d(1),f=null):f?f.p(t,n):(f=ov(t),f.c(),f.m(e,u)),t[1]?p?2&n&&vt(p,1):(p=av(),p.c(),vt(p,1),p.m(e,null)):p&&(gt(),wt(p,1,1,(()=>{p=null})),yt())},i(t){l||(vt(p),l=!0)},o(t){wt(p),l=!1},d(t){t&&k(e),f&&f.d(),p&&p.d(),h=!1,d()}}}function uv(t,e,n){var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(i,s){function o(t){try{c(r.next(t))}catch(t){s(t)}}function a(t){try{c(r.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}c((r=r.apply(t,e||[])).next())}))};const{close:i}=Q("simple-modal");let{transcript:s}=e,o=s.get("name"),a=!1;return t.$$set=t=>{"transcript"in t&&n(4,s=t.transcript)},[o,a,i,function(){return r(this,void 0,void 0,(function*(){n(1,a=!0),yield Ey(s.ref,{name:o}),i(),n(1,a=!1)}))},s,function(){o=this.value,n(0,o)}]}class lv extends $t{constructor(t){super(),Nt(this,t,uv,cv,a,{transcript:4})}}function hv(e){let n,r,i,o,a,c,u,l;return{c(){n=A("ul"),r=A("li"),r.textContent="Rename",i=N(),o=A("li"),o.textContent="Delete",O(r,"class","svelte-h1nhjk"),O(o,"class","svelte-h1nhjk"),O(n,"class","svelte-h1nhjk")},m(t,s){S(t,n,s),T(n,r),T(n,i),T(n,o),c=!0,u||(l=[R(r,"click",e[2]),R(o,"click",e[3])],u=!0)},p:t,i(t){c||(ot((()=>{a||(a=Et(n,ro,{},!0)),a.run(1)})),c=!0)},o(t){a||(a=Et(n,ro,{},!1)),a.run(0),c=!1},d(t){t&&k(n),t&&a&&a.end(),u=!1,s(l)}}}function dv(t){let e,n,r,i,o,a=t[0]&&hv(t);return{c(){e=A("button"),n=C("⋮\n  "),a&&a.c(),O(e,"class","svelte-h1nhjk")},m(s,c){S(s,e,c),T(e,n),a&&a.m(e,null),r=!0,i||(o=[R(e,"click",x(t[1])),R(e,"mouseleave",t[4]),R(e,"mouseenter",t[5])],i=!0)},p(t,[n]){t[0]?a?(a.p(t,n),1&n&&vt(a,1)):(a=hv(t),a.c(),vt(a,1),a.m(e,null)):a&&(gt(),wt(a,1,1,(()=>{a=null})),yt())},i(t){r||(vt(a),r=!0)},o(t){wt(a),r=!1},d(t){t&&k(e),a&&a.d(),i=!1,s(o)}}}function fv(t,e,n){var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(i,s){function o(t){try{c(r.next(t))}catch(t){s(t)}}function a(t){try{c(r.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}c((r=r.apply(t,e||[])).next())}))};let{transcript:i}=e,s=!1;function o(){n(0,s=!1),u()}const{open:a}=Q("simple-modal");let c;function u(){void 0!==c&&(clearTimeout(c),c=void 0)}return t.$$set=t=>{"transcript"in t&&n(6,i=t.transcript)},[s,function(){n(0,s=!0)},function(){return r(this,void 0,void 0,(function*(){o(),a(lv,{transcript:i},{closeButton:!1})}))},function(){return r(this,void 0,void 0,(function*(){o(),a(sv,{transcript:i},{closeButton:!1})}))},function(){c=setTimeout(o,500)},u,i]}class pv extends $t{constructor(t){super(),Nt(this,t,fv,dv,a,{transcript:6})}}function mv(t){let e,n;return{c(){e=A("span"),n=C("? Unknown"),O(e,"class","icon svelte-1t4fg9n"),O(e,"style","color: var(--warn)"),O(e,"title",t[3])},m(t,r){S(t,e,r),T(e,n)},p(t,n){8&n&&O(e,"title",t[3])},d(t){t&&k(e)}}}function gv(e){let n;return{c(){n=A("span"),n.textContent="⚠ Contact Support",O(n,"class","icon svelte-1t4fg9n"),O(n,"style","color: var(--error)")},m(t,e){S(t,n,e)},p:t,d(t){t&&k(n)}}}function yv(e){let n;return{c(){n=A("span"),n.textContent="✓ Ready",O(n,"class","icon svelte-1t4fg9n"),O(n,"style","color: var(--success)")},m(t,e){S(t,n,e)},p:t,d(t){t&&k(n)}}}function vv(e){let n;return{c(){n=A("span"),n.textContent="⧗ Processing",O(n,"class","icon svelte-1t4fg9n"),O(n,"style","color: var(--info)")},m(t,e){S(t,n,e)},p:t,d(t){t&&k(n)}}}function wv(e){let n;return{c(){n=A("span"),n.textContent="⇫ Uploading",O(n,"class","icon svelte-1t4fg9n"),O(n,"style","color: var(--info)")},m(t,e){S(t,n,e)},p:t,d(t){t&&k(n)}}}function bv(t){let e,n,r,i,s,o,a,c,u,l,h,d,f,p,m,g,y,v,w,b=tv(t[1],t[10])+"",E=tv(t[2],t[10])+"";function I(t,e){return"uploading"===t[3]?wv:"processing"===t[3]?vv:"ready"===t[3]?yv:"error"===t[3]?gv:mv}let _=I(t),$=_(t);return v=new pv({props:{transcript:t[0]}}),{c(){e=A("li"),n=A("a"),r=A("span"),i=C(t[5]),s=N(),o=A("span"),a=C(t[6]),c=N(),u=A("span"),l=C(b),h=N(),d=A("span"),f=C(E),p=N(),$.c(),g=N(),y=A("div"),kt(v.$$.fragment),O(r,"class","svelte-1t4fg9n"),O(o,"class","svelte-1t4fg9n"),O(u,"title",t[7]),O(u,"class","svelte-1t4fg9n"),O(d,"title",t[8]),O(d,"class","svelte-1t4fg9n"),O(n,"href",m=t[9]?t[4]:void 0),O(n,"class","svelte-1t4fg9n"),O(y,"class","menuContainer svelte-1t4fg9n"),O(e,"class","svelte-1t4fg9n")},m(t,m){S(t,e,m),T(e,n),T(n,r),T(r,i),T(n,s),T(n,o),T(o,a),T(n,c),T(n,u),T(u,l),T(n,h),T(n,d),T(d,f),T(n,p),$.m(n,null),T(e,g),T(e,y),At(v,y,null),w=!0},p(t,[e]){(!w||32&e)&&M(i,t[5]),(!w||64&e)&&M(a,t[6]),(!w||1026&e)&&b!==(b=tv(t[1],t[10])+"")&&M(l,b),(!w||128&e)&&O(u,"title",t[7]),(!w||1028&e)&&E!==(E=tv(t[2],t[10])+"")&&M(f,E),(!w||256&e)&&O(d,"title",t[8]),_===(_=I(t))&&$?$.p(t,e):($.d(1),$=_(t),$&&($.c(),$.m(n,null))),(!w||528&e&&m!==(m=t[9]?t[4]:void 0))&&O(n,"href",m);const r={};1&e&&(r.transcript=t[0]),v.$set(r)},i(t){w||(vt(v.$$.fragment,t),w=!0)},o(t){wt(v.$$.fragment,t),w=!1},d(t){t&&k(e),$.d(),Ct(v)}}}function Ev(t){if(void 0===t)return;return`${t.getFullYear()}-${t.getMonth().toString().padStart(2,"0")}-${t.getDay().toString().padStart(2,"0")} ${t.getHours().toString().padStart(2,"0")}:${t.getMinutes().toString().padStart(2,"0")}:${t.getSeconds().toString().padStart(2,"0")}`}function Iv(t,e,n){let r;var i,s,o;l(t,Zy,(t=>n(10,r=t)));let a,c,u,h,d,f,p,m,g,y,{transcript:v}=e;return t.$$set=t=>{"transcript"in t&&n(0,v=t.transcript)},t.$$.update=()=>{1&t.$$.dirty&&n(4,a=`/editor?id=${v.id}`),1&t.$$.dirty&&n(5,c=v.get("name")),1&t.$$.dirty&&n(14,u=v.get("audio.duration")),16384&t.$$.dirty&&n(6,h=function(t){if(void 0===t)return"-";if(-1===t)return"-";let e=t;const n=Math.floor(e/3600);e-=3600*n;const r=Math.floor(e/60);e-=60*r,e=Math.round(e);const i=n.toString(),s=r.toString().padStart(2,"0"),o=e.toString().padStart(2,"0");return 0===n&&0===r?`${e} seconds`:0===n?`${s}:${o}`:`${i}:${s}:${o}`}(u)),2049&t.$$.dirty&&n(1,d=null===n(11,i=v.get("created"))||void 0===i?void 0:i.toDate()),2&t.$$.dirty&&n(7,f=Ev(d)),4097&t.$$.dirty&&n(2,p=null===n(12,s=v.get("updated"))||void 0===s?void 0:s.toDate()),4&t.$$.dirty&&n(8,m=Ev(p)),8193&t.$$.dirty&&n(3,g=null!==n(13,o=v.get("stage"))&&void 0!==o?o:"unknown"),8&t.$$.dirty&&n(9,y="ready"===g)},[v,d,p,g,a,c,h,f,m,y,r,i,s,o,u]}class _v extends $t{constructor(t){super(),Nt(this,t,Iv,bv,a,{transcript:0})}}function Tv(t,e,n){const r=t.slice();return r[18]=e[n],r[20]=n,r}function Sv(t){let e;function n(t,e){return"asc"===t[1]?Av:kv}let r=n(t),i=r(t);return{c(){i.c(),e=$()},m(t,n){i.m(t,n),S(t,e,n)},p(t,s){r!==(r=n(t))&&(i.d(1),i=r(t),i&&(i.c(),i.m(e.parentNode,e)))},d(t){i.d(t),t&&k(e)}}}function kv(t){let e;return{c(){e=C("▼")},m(t,n){S(t,e,n)},d(t){t&&k(e)}}}function Av(t){let e;return{c(){e=C("▲")},m(t,n){S(t,e,n)},d(t){t&&k(e)}}}function Cv(t){let e;function n(t,e){return"asc"===t[1]?$v:Nv}let r=n(t),i=r(t);return{c(){i.c(),e=$()},m(t,n){i.m(t,n),S(t,e,n)},p(t,s){r!==(r=n(t))&&(i.d(1),i=r(t),i&&(i.c(),i.m(e.parentNode,e)))},d(t){i.d(t),t&&k(e)}}}function Nv(t){let e;return{c(){e=C("▼")},m(t,n){S(t,e,n)},d(t){t&&k(e)}}}function $v(t){let e;return{c(){e=C("▲")},m(t,n){S(t,e,n)},d(t){t&&k(e)}}}function Rv(t){let e;function n(t,e){return"asc"===t[1]?xv:Dv}let r=n(t),i=r(t);return{c(){i.c(),e=$()},m(t,n){i.m(t,n),S(t,e,n)},p(t,s){r!==(r=n(t))&&(i.d(1),i=r(t),i&&(i.c(),i.m(e.parentNode,e)))},d(t){i.d(t),t&&k(e)}}}function Dv(t){let e;return{c(){e=C("▼")},m(t,n){S(t,e,n)},d(t){t&&k(e)}}}function xv(t){let e;return{c(){e=C("▲")},m(t,n){S(t,e,n)},d(t){t&&k(e)}}}function Ov(t){let e;function n(t,e){return"asc"===t[1]?Pv:Lv}let r=n(t),i=r(t);return{c(){i.c(),e=$()},m(t,n){i.m(t,n),S(t,e,n)},p(t,s){r!==(r=n(t))&&(i.d(1),i=r(t),i&&(i.c(),i.m(e.parentNode,e)))},d(t){i.d(t),t&&k(e)}}}function Lv(t){let e;return{c(){e=C("▼")},m(t,n){S(t,e,n)},d(t){t&&k(e)}}}function Pv(t){let e;return{c(){e=C("▲")},m(t,n){S(t,e,n)},d(t){t&&k(e)}}}function Mv(t){let e,n;function r(t,e){return t[4]?Vv:Uv}let i=r(t),s=i(t);return{c(){e=A("li"),n=A("span"),s.c(),O(n,"class","empty svelte-ca3b87"),O(e,"class","svelte-ca3b87")},m(t,r){S(t,e,r),T(e,n),s.m(n,null)},p(t,e){i!==(i=r(t))&&(s.d(1),s=i(t),s&&(s.c(),s.m(n,null)))},d(t){t&&k(e),s.d()}}}function Uv(t){let e;return{c(){e=C("Loading...")},m(t,n){S(t,e,n)},d(t){t&&k(e)}}}function Vv(t){let e;return{c(){e=C("You have no transcripts")},m(t,n){S(t,e,n)},d(t){t&&k(e)}}}function Fv(t,e){let n,r,i;return r=new _v({props:{transcript:e[18]}}),{key:t,first:null,c(){n=$(),kt(r.$$.fragment),this.first=n},m(t,e){S(t,n,e),At(r,t,e),i=!0},p(t,n){e=t;const i={};4&n&&(i.transcript=e[18]),r.$set(i)},i(t){i||(vt(r.$$.fragment,t),i=!0)},o(t){wt(r.$$.fragment,t),i=!1},d(t){t&&k(n),Ct(r,t)}}}function jv(t){let e,n,r,i;const s=[qv,Bv],o=[];function a(t,e){return t[3]?0:1}return e=a(t),n=o[e]=s[e](t),{c(){n.c(),r=$()},m(t,n){o[e].m(t,n),S(t,r,n),i=!0},p(t,i){let c=e;e=a(t),e===c?o[e].p(t,i):(gt(),wt(o[c],1,1,(()=>{o[c]=null})),yt(),n=o[e],n?n.p(t,i):(n=o[e]=s[e](t),n.c()),vt(n,1),n.m(r.parentNode,r))},i(t){i||(vt(n),i=!0)},o(t){wt(n),i=!1},d(t){o[e].d(t),t&&k(r)}}}function Bv(e){let n,r,i;return{c(){n=A("button"),n.textContent="Load more"},m(t,s){S(t,n,s),r||(i=R(n,"click",e[6]),r=!0)},p:t,i:t,o:t,d(t){t&&k(n),r=!1,i()}}}function qv(e){let n,r;return n=new wo({props:{text:"Loading"}}),{c(){kt(n.$$.fragment)},m(t,e){At(n,t,e),r=!0},p:t,i(t){r||(vt(n.$$.fragment,t),r=!0)},o(t){wt(n.$$.fragment,t),r=!1},d(t){Ct(n,t)}}}function zv(t){let e,n,r,i,o,a,c,u,l,h,d,f,p,m,g,y,v,w,b,E,I,_,D,x,L,P,M,U=[],F=new Map,j="name"===t[0]&&Sv(t),B="audio.duration"===t[0]&&Cv(t),q="created"===t[0]&&Rv(t),z="updated"===t[0]&&Ov(t),H=t[2];const K=t=>t[18].id;for(let e=0;e<H.length;e+=1){let n=Tv(t,H,e),r=K(n);F.set(r,U[e]=Fv(r,n))}let W=null;H.length||(W=Mv(t));let G=!t[4]&&jv(t);return{c(){e=A("h1"),e.textContent="Your Transcripts",n=N(),r=A("ol"),i=A("li"),o=A("span"),a=C("Name\n      "),j&&j.c(),c=N(),u=A("span"),l=C("Length\n      "),B&&B.c(),h=N(),d=A("span"),f=C("Created\n      "),q&&q.c(),p=N(),m=A("span"),g=C("Updated\n      "),z&&z.c(),y=N(),v=A("span"),v.textContent="Status",w=N(),b=A("span"),b.textContent="Edit",E=N();for(let t=0;t<U.length;t+=1)U[t].c();W&&W.c(),I=N(),_=A("div"),D=N(),G&&G.c(),x=$(),O(o,"class","header sortable svelte-ca3b87"),O(u,"class","header sortable svelte-ca3b87"),O(d,"class","header sortable svelte-ca3b87"),O(m,"class","header sortable svelte-ca3b87"),O(v,"class","header svelte-ca3b87"),O(b,"class","header svelte-ca3b87"),V(b,"text-align","center"),O(i,"class","svelte-ca3b87"),O(_,"class","spacer svelte-ca3b87"),O(r,"class","table svelte-ca3b87")},m(s,k){S(s,e,k),S(s,n,k),S(s,r,k),T(r,i),T(i,o),T(o,a),j&&j.m(o,null),T(i,c),T(i,u),T(u,l),B&&B.m(u,null),T(i,h),T(i,d),T(d,f),q&&q.m(d,null),T(i,p),T(i,m),T(m,g),z&&z.m(m,null),T(i,y),T(i,v),T(i,w),T(i,b),T(r,E);for(let t=0;t<U.length;t+=1)U[t].m(r,null);W&&W.m(r,null),T(r,I),T(r,_),S(s,D,k),G&&G.m(s,k),S(s,x,k),L=!0,P||(M=[R(o,"click",t[12]),R(u,"click",t[13]),R(d,"click",t[14]),R(m,"click",t[15])],P=!0)},p(t,[e]){"name"===t[0]?j?j.p(t,e):(j=Sv(t),j.c(),j.m(o,null)):j&&(j.d(1),j=null),"audio.duration"===t[0]?B?B.p(t,e):(B=Cv(t),B.c(),B.m(u,null)):B&&(B.d(1),B=null),"created"===t[0]?q?q.p(t,e):(q=Rv(t),q.c(),q.m(d,null)):q&&(q.d(1),q=null),"updated"===t[0]?z?z.p(t,e):(z=Ov(t),z.c(),z.m(m,null)):z&&(z.d(1),z=null),20&e&&(H=t[2],gt(),U=function(t,e,n,r,i,s,o,a,c,u,l,h){let d=t.length,f=s.length,p=d;const m={};for(;p--;)m[t[p].key]=p;const g=[],y=new Map,v=new Map;for(p=f;p--;){const t=h(i,s,p),a=n(t);let c=o.get(a);c?r&&c.p(t,e):(c=u(a,t),c.c()),y.set(a,g[p]=c),a in m&&v.set(a,Math.abs(p-m[a]))}const w=new Set,b=new Set;function E(t){vt(t,1),t.m(a,l),o.set(t.key,t),l=t.first,f--}for(;d&&f;){const e=g[f-1],n=t[d-1],r=e.key,i=n.key;e===n?(l=e.first,d--,f--):y.has(i)?!o.has(r)||w.has(r)?E(e):b.has(i)?d--:v.get(r)>v.get(i)?(b.add(r),E(e)):(w.add(i),d--):(c(n,o),d--)}for(;d--;){const e=t[d];y.has(e.key)||c(e,o)}for(;f;)E(g[f-1]);return g}(U,e,K,1,t,H,F,r,_t,Fv,I,Tv),yt(),!H.length&&W?W.p(t,e):H.length?W&&(W.d(1),W=null):(W=Mv(t),W.c(),W.m(r,I))),t[4]?G&&(gt(),wt(G,1,1,(()=>{G=null})),yt()):G?(G.p(t,e),16&e&&vt(G,1)):(G=jv(t),G.c(),vt(G,1),G.m(x.parentNode,x))},i(t){if(!L){for(let t=0;t<H.length;t+=1)vt(U[t]);vt(G),L=!0}},o(t){for(let t=0;t<U.length;t+=1)wt(U[t]);wt(G),L=!1},d(t){t&&k(e),t&&k(n),t&&k(r),j&&j.d(),B&&B.d(),q&&q.d(),z&&z.d();for(let t=0;t<U.length;t+=1)U[t].d();W&&W.d(),t&&k(D),G&&G.d(t),t&&k(x),P=!1,s(M)}}}function Hv(t,e,n){let r;var i,s;l(t,$s,(t=>n(11,r=t)));let o="updated",a="desc";function c(t){o===t?n(1,a="asc"===a?"desc":"asc"):(n(0,o=t),"name"===o||"audio.duration"===o?n(1,a="asc"):("created"===o||"updated"===o)&&n(1,a="desc"))}let u,h,d,f=()=>{},p=[],m=!1;return t.$$.update=()=>{if(2048&t.$$.dirty&&void 0===r)throw new Error("Page has been loaded before auth state has updated");2048&t.$$.dirty&&null===r&&En("/dashboard/auth/login",{replace:!0}),2048&t.$$.dirty&&!1===(null==r?void 0:r.emailVerified)&&En("/dashboard/auth/verify",{replace:!0}),512&t.$$.dirty&&n(2,u=p.flat()),896&t.$$.dirty&&n(4,h=(null!==n(8,s=null===n(7,i=function(t){if(void 0===t)return;const e=t.length;if(0===e)return;return t[e-1]}(p))||void 0===i?void 0:i.length)&&void 0!==s?s:-1)<10),2048&t.$$.dirty&&n(10,d=r),1027&t.$$.dirty&&d&&function(t,e,r){const i=py(xg(Sy(),"users",t.uid,"transcripts"),gy(e,r),vy(10));f(),f=Iy(i,(t=>{n(9,p=[t.docs])}))}(d,o,a)},[o,a,u,m,h,c,function(){if(m)return;if(!d)return;if(!o)return;if(!a)return;const t=p.length-1;if(-1===t)return;const e=p[t];if(void 0===e)return;const r=e[e.length-1];if(void 0===r)return;n(3,m=!0);const i=py(xg(Sy(),"users",d.uid,"transcripts"),gy(o,a),function(...t){return new wy("startAfter",t,!1)}(r),vy(10)),s=[],c=f,u=Iy(i,(t=>{s.splice(0,s.length,...t.docs),n(9,p)}));f=()=>{c(),u()},p.push(s),n(3,m=!1)},i,s,p,d,r,()=>c("name"),()=>c("audio.duration"),()=>c("created"),()=>c("updated")]}class Kv extends $t{constructor(t){super(),Nt(this,t,Hv,zv,a,{})}}function Wv(t){let e,n;return e=new fo({props:{$$slots:{default:[ew]},$$scope:{ctx:t}}}),{c(){kt(e.$$.fragment)},m(t,r){At(e,t,r),n=!0},i(t){n||(vt(e.$$.fragment,t),n=!0)},o(t){wt(e.$$.fragment,t),n=!1},d(t){Ct(e,t)}}}function Gv(t){let e,n;return e=new Kv({}),{c(){kt(e.$$.fragment)},m(t,r){At(e,t,r),n=!0},i(t){n||(vt(e.$$.fragment,t),n=!0)},o(t){wt(e.$$.fragment,t),n=!1},d(t){Ct(e,t)}}}function Yv(t){let e,n;return e=new Ms({}),{c(){kt(e.$$.fragment)},m(t,r){At(e,t,r),n=!0},i(t){n||(vt(e.$$.fragment,t),n=!0)},o(t){wt(e.$$.fragment,t),n=!1},d(t){Ct(e,t)}}}function Jv(t){let e,n;return e=new Hs({}),{c(){kt(e.$$.fragment)},m(t,r){At(e,t,r),n=!0},i(t){n||(vt(e.$$.fragment,t),n=!0)},o(t){wt(e.$$.fragment,t),n=!1},d(t){Ct(e,t)}}}function Xv(t){let e,n;return e=new Gs({}),{c(){kt(e.$$.fragment)},m(t,r){At(e,t,r),n=!0},i(t){n||(vt(e.$$.fragment,t),n=!0)},o(t){wt(e.$$.fragment,t),n=!1},d(t){Ct(e,t)}}}function Qv(t){let e,n;return e=new Xs({}),{c(){kt(e.$$.fragment)},m(t,r){At(e,t,r),n=!0},i(t){n||(vt(e.$$.fragment,t),n=!0)},o(t){wt(e.$$.fragment,t),n=!1},d(t){Ct(e,t)}}}function Zv(t){let e,n;return e=new to({}),{c(){kt(e.$$.fragment)},m(t,r){At(e,t,r),n=!0},i(t){n||(vt(e.$$.fragment,t),n=!0)},o(t){wt(e.$$.fragment,t),n=!1},d(t){Ct(e,t)}}}function tw(t){let e,n,r,i,s,o,a,c,u,l,h,d;return e=new Yn({props:{path:"/",$$slots:{default:[Gv]},$$scope:{ctx:t}}}),r=new Yn({props:{path:"/auth/login",$$slots:{default:[Yv]},$$scope:{ctx:t}}}),s=new Yn({props:{path:"/auth/signup",$$slots:{default:[Jv]},$$scope:{ctx:t}}}),a=new Yn({props:{path:"/auth/verify",$$slots:{default:[Xv]},$$scope:{ctx:t}}}),u=new Yn({props:{path:"/payment/success",$$slots:{default:[Qv]},$$scope:{ctx:t}}}),h=new Yn({props:{path:"/payment/failed",$$slots:{default:[Zv]},$$scope:{ctx:t}}}),{c(){kt(e.$$.fragment),n=N(),kt(r.$$.fragment),i=N(),kt(s.$$.fragment),o=N(),kt(a.$$.fragment),c=N(),kt(u.$$.fragment),l=N(),kt(h.$$.fragment)},m(t,f){At(e,t,f),S(t,n,f),At(r,t,f),S(t,i,f),At(s,t,f),S(t,o,f),At(a,t,f),S(t,c,f),At(u,t,f),S(t,l,f),At(h,t,f),d=!0},p(t,n){const i={};8&n&&(i.$$scope={dirty:n,ctx:t}),e.$set(i);const o={};8&n&&(o.$$scope={dirty:n,ctx:t}),r.$set(o);const c={};8&n&&(c.$$scope={dirty:n,ctx:t}),s.$set(c);const l={};8&n&&(l.$$scope={dirty:n,ctx:t}),a.$set(l);const d={};8&n&&(d.$$scope={dirty:n,ctx:t}),u.$set(d);const f={};8&n&&(f.$$scope={dirty:n,ctx:t}),h.$set(f)},i(t){d||(vt(e.$$.fragment,t),vt(r.$$.fragment,t),vt(s.$$.fragment,t),vt(a.$$.fragment,t),vt(u.$$.fragment,t),vt(h.$$.fragment,t),d=!0)},o(t){wt(e.$$.fragment,t),wt(r.$$.fragment,t),wt(s.$$.fragment,t),wt(a.$$.fragment,t),wt(u.$$.fragment,t),wt(h.$$.fragment,t),d=!1},d(t){Ct(e,t),t&&k(n),Ct(r,t),t&&k(i),Ct(s,t),t&&k(o),Ct(a,t),t&&k(c),Ct(u,t),t&&k(l),Ct(h,t)}}}function ew(t){let e,n,r,i,s;return n=new Qy({}),i=new On({props:{basepath:"/dashboard",$$slots:{default:[tw]},$$scope:{ctx:t}}}),{c(){e=A("div"),kt(n.$$.fragment),r=N(),kt(i.$$.fragment),O(e,"class","container svelte-17pu2w6")},m(t,o){S(t,e,o),At(n,e,null),T(e,r),At(i,e,null),s=!0},p(t,e){const n={};8&e&&(n.$$scope={dirty:e,ctx:t}),i.$set(n)},i(t){s||(vt(n.$$.fragment,t),vt(i.$$.fragment,t),s=!0)},o(t){wt(n.$$.fragment,t),wt(i.$$.fragment,t),s=!1},d(t){t&&k(e),Ct(n),Ct(i)}}}function nw(t){let e,n,r=void 0!==t[0]&&Wv(t);return{c(){r&&r.c(),e=$()},m(t,i){r&&r.m(t,i),S(t,e,i),n=!0},p(t,[n]){void 0!==t[0]?r?1&n&&vt(r,1):(r=Wv(t),r.c(),vt(r,1),r.m(e.parentNode,e)):r&&(gt(),wt(r,1,1,(()=>{r=null})),yt())},i(t){n||(vt(r),n=!0)},o(t){wt(r),n=!1},d(t){r&&r.d(t),t&&k(e)}}}function rw(t,e,n){let r;l(t,$s,(t=>n(0,r=t)));return dr(function(t,e={}){"object"!=typeof e&&(e={name:e});const n=Object.assign({name:ve,automaticDataCollectionEnabled:!1},e),r=n.name;if("string"!=typeof r||!r)throw Se.create("bad-app-name",{appName:String(r)});const i=be.get(r);if(i){if(Yt(t,i.options)&&Yt(n,i.config))return i;throw Se.create("duplicate-app",{appName:r})}const s=new ce(r);for(const t of Ee.values())s.addComponent(t);const o=new ke(t,n,s);return be.set(r,o),o}({apiKey:process.env.FIREBASE_API_KEY,authDomain:`${process.env.PROJECT_ID}.firebaseapp.com`,projectId:process.env.PROJECT_ID}),{persistence:ki}).onAuthStateChanged((t=>$s.set(t))),[r]}return new class extends $t{constructor(t){super(),Nt(this,t,rw,nw,a,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
