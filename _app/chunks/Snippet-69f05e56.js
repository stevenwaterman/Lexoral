var te=Object.defineProperty,le=Object.defineProperties;var ne=Object.getOwnPropertyDescriptors;var J=Object.getOwnPropertySymbols;var ie=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable;var K=(l,e,f)=>e in l?te(l,e,{enumerable:!0,configurable:!0,writable:!0,value:f}):l[e]=f,$=(l,e)=>{for(var f in e||(e={}))ie.call(e,f)&&K(l,f,e[f]);if(J)for(var f of J(e))se.call(e,f)&&K(l,f,e[f]);return l},w=(l,e)=>le(l,ne(e));import{S as N,i as A,s as B,e as j,t as k,g as b,a as h,c as v,E as L,d as T,_ as S,f as p,$ as D,h as fe,F as O,q as Z,r as y,m as F,k as E,w as x,j as oe,l as ae,a0 as re,a1 as M,a2 as ue,a3 as de,a4 as ce,a5 as me,a6 as he}from"./vendor-f4f84365.js";function P(l,e,f){const i=l.slice();return i[2]=e[f],i[4]=f,i}function Q(l,e,f){const i=l.slice();return i[2]=e[f],i[4]=f,i}function R(l){let e,f,i,r=l[0].count+"",u,n,c,t=l[0].lines,s=[];for(let a=0;a<t.length;a+=1)s[a]=U(Q(l,t,a));return{c(){e=j("details"),f=j("summary"),i=k("<Show "),u=k(r),n=k(" identical lines>"),c=b();for(let a=0;a<s.length;a+=1)s[a].c();h(f,"class","svelte-19djgjm"),h(e,"class","svelte-19djgjm")},m(a,d){v(a,e,d),L(e,f),L(f,i),L(f,u),L(f,n),L(e,c);for(let m=0;m<s.length;m+=1)s[m].m(e,null)},p(a,d){if(d&1&&r!==(r=a[0].count+"")&&T(u,r),d&3){t=a[0].lines;let m;for(m=0;m<t.length;m+=1){const _=Q(a,t,m);s[m]?s[m].p(_,d):(s[m]=U(_),s[m].c(),s[m].m(e,null))}for(;m<s.length;m+=1)s[m].d(1);s.length=t.length}},d(a){a&&p(e),D(s,a)}}}function U(l){let e,f=(l[0].fromStartLine===void 0?" ":l[0].fromStartLine+l[4])+"",i,r,u,n,c=(l[0].toStartLine===void 0?" ":l[0].toStartLine+l[4])+"",t,s,a,d,m=(l[2]||" ")+"",_;return{c(){e=j("div"),i=k(f),u=b(),n=j("div"),t=k(c),a=b(),d=j("div"),h(e,"class",r=S(`fromLine ${l[1]}`)+" svelte-19djgjm"),h(e,"aria-hidden","true"),h(n,"class",s=S(`toLine ${l[1]}`)+" svelte-19djgjm"),h(n,"aria-hidden","true"),h(d,"class",_=S(`code ${l[1]}`)+" svelte-19djgjm")},m(o,g){v(o,e,g),L(e,i),v(o,u,g),v(o,n,g),L(n,t),v(o,a,g),v(o,d,g),d.innerHTML=m},p(o,g){g&1&&f!==(f=(o[0].fromStartLine===void 0?" ":o[0].fromStartLine+o[4])+"")&&T(i,f),g&2&&r!==(r=S(`fromLine ${o[1]}`)+" svelte-19djgjm")&&h(e,"class",r),g&1&&c!==(c=(o[0].toStartLine===void 0?" ":o[0].toStartLine+o[4])+"")&&T(t,c),g&2&&s!==(s=S(`toLine ${o[1]}`)+" svelte-19djgjm")&&h(n,"class",s),g&1&&m!==(m=(o[2]||" ")+"")&&(d.innerHTML=m),g&2&&_!==(_=S(`code ${o[1]}`)+" svelte-19djgjm")&&h(d,"class",_)},d(o){o&&p(e),o&&p(u),o&&p(n),o&&p(a),o&&p(d)}}}function V(l){let e,f=(l[0].fromStartLine===void 0?" ":l[0].fromStartLine+l[4])+"",i,r,u,n,c=(l[0].toStartLine===void 0?" ":l[0].toStartLine+l[4])+"",t,s,a,d,m=(l[2]||" ")+"",_;return{c(){e=j("div"),i=k(f),u=b(),n=j("div"),t=k(c),a=b(),d=j("div"),h(e,"class",r=S(`fromLine ${l[1]}`)+" svelte-19djgjm"),h(e,"aria-hidden","true"),h(n,"class",s=S(`toLine ${l[1]}`)+" svelte-19djgjm"),h(n,"aria-hidden","true"),h(d,"class",_=S(`code ${l[1]}`)+" svelte-19djgjm")},m(o,g){v(o,e,g),L(e,i),v(o,u,g),v(o,n,g),L(n,t),v(o,a,g),v(o,d,g),d.innerHTML=m},p(o,g){g&1&&f!==(f=(o[0].fromStartLine===void 0?" ":o[0].fromStartLine+o[4])+"")&&T(i,f),g&2&&r!==(r=S(`fromLine ${o[1]}`)+" svelte-19djgjm")&&h(e,"class",r),g&1&&c!==(c=(o[0].toStartLine===void 0?" ":o[0].toStartLine+o[4])+"")&&T(t,c),g&2&&s!==(s=S(`toLine ${o[1]}`)+" svelte-19djgjm")&&h(n,"class",s),g&1&&m!==(m=(o[2]||" ")+"")&&(d.innerHTML=m),g&2&&_!==(_=S(`code ${o[1]}`)+" svelte-19djgjm")&&h(d,"class",_)},d(o){o&&p(e),o&&p(u),o&&p(n),o&&p(a),o&&p(d)}}}function _e(l){let e,f,i=l[1]==="hidden"&&R(l),r=l[0].lines,u=[];for(let n=0;n<r.length;n+=1)u[n]=V(P(l,r,n));return{c(){i&&i.c(),e=b();for(let n=0;n<u.length;n+=1)u[n].c();f=fe()},m(n,c){i&&i.m(n,c),v(n,e,c);for(let t=0;t<u.length;t+=1)u[t].m(n,c);v(n,f,c)},p(n,[c]){if(n[1]==="hidden"?i?i.p(n,c):(i=R(n),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null),c&3){r=n[0].lines;let t;for(t=0;t<r.length;t+=1){const s=P(n,r,t);u[t]?u[t].p(s,c):(u[t]=V(s),u[t].c(),u[t].m(f.parentNode,f))}for(;t<u.length;t+=1)u[t].d(1);u.length=r.length}},i:O,o:O,d(n){i&&i.d(n),n&&p(e),D(u,n),n&&p(f)}}}function ge(l,e,f){let{change:i}=e,r;return l.$$set=u=>{"change"in u&&f(0,i=u.change)},l.$$.update=()=>{l.$$.dirty&1&&(i.added?f(1,r="added"):i.removed?f(1,r="removed"):i.hidden?f(1,r="hidden"):f(1,r="same"))},[i,r]}class ve extends N{constructor(e){super();A(this,e,ge,_e,B,{change:0})}}function W(l,e,f){const i=l.slice();return i[5]=e[f],i}function X(l){let e,f;return e=new ve({props:{change:l[5]}}),{c(){Z(e.$$.fragment)},m(i,r){y(e,i,r),f=!0},p(i,r){const u={};r&2&&(u.change=i[5]),e.$set(u)},i(i){f||(F(e.$$.fragment,i),f=!0)},o(i){E(e.$$.fragment,i),f=!1},d(i){x(e,i)}}}function pe(l){let e,f,i,r,u=l[1],n=[];for(let t=0;t<u.length;t+=1)n[t]=X(W(l,u,t));const c=t=>E(n[t],1,1,()=>{n[t]=null});return{c(){e=j("code");for(let t=0;t<n.length;t+=1)n[t].c();f=b(),i=j("code"),h(e,"class","visualCode svelte-12l7s60"),h(e,"aria-hidden","true"),h(i,"class","sr-code svelte-12l7s60")},m(t,s){v(t,e,s);for(let a=0;a<n.length;a+=1)n[a].m(e,null);v(t,f,s),v(t,i,s),i.innerHTML=l[0],r=!0},p(t,[s]){if(s&2){u=t[1];let a;for(a=0;a<u.length;a+=1){const d=W(t,u,a);n[a]?(n[a].p(d,s),F(n[a],1)):(n[a]=X(d),n[a].c(),F(n[a],1),n[a].m(e,null))}for(oe(),a=u.length;a<n.length;a+=1)c(a);ae()}(!r||s&1)&&(i.innerHTML=t[0])},i(t){if(!r){for(let s=0;s<u.length;s+=1)F(n[s]);r=!0}},o(t){n=n.filter(Boolean);for(let s=0;s<n.length;s+=1)E(n[s]);r=!1},d(t){t&&p(e),D(n,t),t&&p(f),t&&p(i)}}}function Le(l,e,f){let{from:i}=e,{to:r}=e,u;function n(t){let s=1,a=1;const d=[];for(let m=0;m<t.length;m++){const _=t[m],o=_.value.split(`
`);if(o[o.length-1]===""&&o.pop(),_.added)d.push(w($({},_),{lines:o,toStartLine:a})),a+=_.count;else if(_.removed)d.push(w($({},_),{lines:o,fromStartLine:s})),s+=_.count;else{const g=m===0,ee=m===t.length-1,H=g?0:3,C=ee?0:3,q=o.length-H-C;if(q>=6){const z=o.slice(0,H),G=o.slice(H,o.length-C),I=o.slice(o.length-C,o.length);H>0&&(d.push(w($({},_),{count:z.length,lines:z,fromStartLine:s,toStartLine:a})),s+=H,a+=H),q>0&&(d.push(w($({},_),{count:G.length,lines:G,fromStartLine:s,toStartLine:a,hidden:!0})),s+=q,a+=q),C>0&&(d.push(w($({},_),{count:I.length,lines:I,fromStartLine:s,toStartLine:a})),s+=C,a+=C)}else d.push(w($({},_),{lines:o,fromStartLine:s,toStartLine:a})),s+=_.count,a+=_.count}}return d}let c;return l.$$set=t=>{"from"in t&&f(2,i=t.from),"to"in t&&f(0,r=t.to)},l.$$.update=()=>{l.$$.dirty&5&&f(3,u=re(i!=null?i:r,r)),l.$$.dirty&8&&f(1,c=n(u))},[r,c,i,u]}class je extends N{constructor(e){super();A(this,e,Le,pe,B,{from:2,to:0})}}function Y(l){let e,f,i,r,u,n,c;return{c(){e=j("label"),f=k("Show Diff"),u=b(),n=j("input"),h(e,"class","diffLabel svelte-1o5982m"),h(e,"for",i=`diff-${l[1].name}-${l[0].name}-checkbox`),h(e,"title",r=`Tick to show changes from ${l[1].name} to ${l[0].name}`),h(n,"class","diffCheckbox svelte-1o5982m"),h(n,"id",c=`diff-${l[1].name}-${l[0].name}-checkbox`),h(n,"type","checkbox"),n.checked=!0,h(n,"autocomplete","off")},m(t,s){v(t,e,s),L(e,f),v(t,u,s),v(t,n,s)},p(t,s){s&3&&i!==(i=`diff-${t[1].name}-${t[0].name}-checkbox`)&&h(e,"for",i),s&3&&r!==(r=`Tick to show changes from ${t[1].name} to ${t[0].name}`)&&h(e,"title",r),s&3&&c!==(c=`diff-${t[1].name}-${t[0].name}-checkbox`)&&h(n,"id",c)},d(t){t&&p(e),t&&p(u),t&&p(n)}}}function Se(l){var a;let e,f,i=l[0].name+"",r,u,n,c,t,s=l[1]!==void 0&&Y(l);return c=new je({props:{from:l[2]((a=l[1])==null?void 0:a.snippet),to:l[2](l[0].snippet)}}),{c(){e=j("figure"),f=j("h2"),r=k(i),u=b(),s&&s.c(),n=b(),Z(c.$$.fragment),h(f,"class","name svelte-1o5982m"),h(e,"class","container wide svelte-1o5982m")},m(d,m){v(d,e,m),L(e,f),L(f,r),L(e,u),s&&s.m(e,null),L(e,n),y(c,e,null),t=!0},p(d,[m]){var o;(!t||m&1)&&i!==(i=d[0].name+"")&&T(r,i),d[1]!==void 0?s?s.p(d,m):(s=Y(d),s.c(),s.m(e,n)):s&&(s.d(1),s=null);const _={};m&2&&(_.from=d[2]((o=d[1])==null?void 0:o.snippet)),m&1&&(_.to=d[2](d[0].snippet)),c.$set(_)},i(d){t||(F(c.$$.fragment,d),t=!0)},o(d){E(c.$$.fragment,d),t=!1},d(d){d&&p(e),s&&s.d(),x(c)}}}function be(l,e,f){let{config:i}=e,{diffFrom:r=void 0}=e;M.registerLanguage("ts",ue),M.registerLanguage("xml",de),M.registerLanguage("js",ce),M.registerLanguage("css",me);let u;function n(c){if(c===void 0)return;const t=c.trim(),s=he.format(t,{parser:u}).trimEnd();return M.highlightAuto(s).value}return l.$$set=c=>{"config"in c&&f(0,i=c.config),"diffFrom"in c&&f(1,r=c.diffFrom)},l.$$.update=()=>{l.$$.dirty&1&&(u={svelte:"svelte",ts:"typescript"}[i.language])},[i,r,n]}class we extends N{constructor(e){super();A(this,e,be,Se,B,{config:0,diffFrom:1})}}export{we as S};
