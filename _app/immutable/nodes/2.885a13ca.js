import{i as he,s as T,f as _e,n as H,h as Q,c as P,j as $,u as B,g as F,d as R,k as ne,l as z}from"../chunks/scheduler.5eb7d87f.js";import{S as E,i as L,g as M,s as W,h as U,j as q,c as A,y as Y,f as p,k as C,a as j,x as N,z as X,A as fe,e as K,B as me,C as O,d as g,t as v,D as de,r as k,u as b,v as w,w as y,p as ge,b as ve,m as le,n as ie}from"../chunks/index.4f5f25f3.js";import{M as pe,F as $e}from"../chunks/Footer.e9c37c75.js";import{e as Z}from"../chunks/each.e59479a4.js";function V(i,e){const l={},t={},s={$$scope:1};let n=i.length;for(;n--;){const o=i[n],a=e[n];if(a){for(const f in o)f in a||(t[f]=1);for(const f in a)s[f]||(l[f]=a[f],s[f]=1);i[n]=a}else for(const f in o)s[f]=1}for(const o in t)o in l||(l[o]=void 0);return l}function G(i){return typeof i=="object"&&i!==null?i:{}}const ke=""+new URL("../../../images/cover.jpg",import.meta.url).href;function x(i,{delay:e=0,duration:l=400,easing:t=he}={}){const s=+getComputedStyle(i).opacity;return{delay:e,duration:l,easing:t,css:n=>`opacity: ${n*s}`}}function be(i){let e,l,t,s,n,o,a,f="A Free Clothing Swap Marketplace Inspiring Circular Fashion",h,d;return{c(){e=M("div"),l=M("img"),n=W(),o=M("div"),a=M("h2"),a.textContent=f,this.h()},l(m){e=U(m,"DIV",{class:!0});var r=q(e);l=U(r,"IMG",{src:!0,alt:!0,class:!0}),n=A(r),o=U(r,"DIV",{class:!0});var u=q(o);a=U(u,"H2",{class:!0,"data-svelte-h":!0}),Y(a)!=="svelte-1bi0lft"&&(a.textContent=f),u.forEach(p),r.forEach(p),this.h()},h(){_e(l.src,t=ke)||C(l,"src",t),C(l,"alt","Fashion images"),C(l,"class","svelte-11b9skr"),C(a,"class","svelte-11b9skr"),C(o,"class","text-box svelte-11b9skr"),C(e,"class","content svelte-11b9skr")},m(m,r){j(m,e,r),N(e,l),N(e,n),N(e,o),N(o,a)},p:H,i(m){m&&(s||Q(()=>{s=X(l,x,{delay:150,duration:300}),s.start()})),m&&(h||Q(()=>{h=X(a,x,{delay:750,duration:300}),h.start()})),m&&(d||Q(()=>{d=X(o,x,{delay:450,duration:300}),d.start()}))},o:H,d(m){m&&p(e)}}}class we extends E{constructor(e){super(),L(this,e,null,be,T,{})}}const ye=""+new URL("../../../images/closet.jpg",import.meta.url).href;function Se(i){let e,l=`<div class="image-container svelte-g7ogq0"><img src="${ye}" alt="About Image" class="svelte-g7ogq0"/></div> <div class="text-container svelte-g7ogq0"><h2 class="svelte-g7ogq0">About Us</h2> <p>CycleUp! aims to reduce fast fashion with sustainable practices, changing the way we shop with a free clothing swap marketplace.
      <br/><br/>
      Here at CycleUp! not only can users acquire &#39;new&#39; free items, but are also reducing the carbon footprint by not allowing unwanted items to end up in landfills polluting our environment. 
      <br/><br/>
      We help users not only to swap, but also bring new life to favorite garments by making something &#39;new&#39; out of something old. We help connect users with local upcycling tailors promoting sustainability, and gather all the latest news and events to help you discover and learn everything you need to know and do about sustainable and ethical fashion.</p></div>`;return{c(){e=M("div"),e.innerHTML=l,this.h()},l(t){e=U(t,"DIV",{class:!0,"data-svelte-h":!0}),Y(e)!=="svelte-1wejffx"&&(e.innerHTML=l),this.h()},h(){C(e,"class","container svelte-g7ogq0")},m(t,s){j(t,e,s)},p:H,i:H,o:H,d(t){t&&p(e)}}}class Ne extends E{constructor(e){super(),L(this,e,null,Se,T,{})}}const oe={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};function re(i,e,l){const t=i.slice();return t[10]=e[l][0],t[11]=e[l][1],t}function ee(i){let e,l=[i[11]],t={};for(let s=0;s<l.length;s+=1)t=$(t,l[s]);return{c(){e=fe(i[10]),this.h()},l(s){e=me(s,i[10],{}),q(e).forEach(p),this.h()},h(){O(e,t)},m(s,n){j(s,e,n)},p(s,n){O(e,t=V(l,[n&32&&s[11]]))},d(s){s&&p(e)}}}function ae(i){let e=i[10],l,t=i[10]&&ee(i);return{c(){t&&t.c(),l=K()},l(s){t&&t.l(s),l=K()},m(s,n){t&&t.m(s,n),j(s,l,n)},p(s,n){s[10]?e?T(e,s[10])?(t.d(1),t=ee(s),e=s[10],t.c(),t.m(l.parentNode,l)):t.p(s,n):(t=ee(s),e=s[10],t.c(),t.m(l.parentNode,l)):e&&(t.d(1),t=null,e=s[10])},d(s){s&&p(l),t&&t.d(s)}}}function je(i){let e,l,t,s,n,o=Z(i[5]),a=[];for(let r=0;r<o.length;r+=1)a[r]=ae(re(i,o,r));const f=i[9].default,h=P(f,i,i[8],null);let d=[oe,i[6],{width:i[2]},{height:i[2]},{stroke:i[1]},{"stroke-width":t=i[4]?Number(i[3])*24/Number(i[2]):i[3]},{class:s=`lucide-icon lucide lucide-${i[0]} ${i[7].class??""}`}],m={};for(let r=0;r<d.length;r+=1)m=$(m,d[r]);return{c(){e=fe("svg");for(let r=0;r<a.length;r+=1)a[r].c();l=K(),h&&h.c(),this.h()},l(r){e=me(r,"svg",{width:!0,height:!0,stroke:!0,"stroke-width":!0,class:!0});var u=q(e);for(let _=0;_<a.length;_+=1)a[_].l(u);l=K(),h&&h.l(u),u.forEach(p),this.h()},h(){O(e,m)},m(r,u){j(r,e,u);for(let _=0;_<a.length;_+=1)a[_]&&a[_].m(e,null);N(e,l),h&&h.m(e,null),n=!0},p(r,[u]){if(u&32){o=Z(r[5]);let _;for(_=0;_<o.length;_+=1){const c=re(r,o,_);a[_]?a[_].p(c,u):(a[_]=ae(c),a[_].c(),a[_].m(e,l))}for(;_<a.length;_+=1)a[_].d(1);a.length=o.length}h&&h.p&&(!n||u&256)&&B(h,f,r,r[8],n?R(f,r[8],u,null):F(r[8]),null),O(e,m=V(d,[oe,u&64&&r[6],(!n||u&4)&&{width:r[2]},(!n||u&4)&&{height:r[2]},(!n||u&2)&&{stroke:r[1]},(!n||u&28&&t!==(t=r[4]?Number(r[3])*24/Number(r[2]):r[3]))&&{"stroke-width":t},(!n||u&129&&s!==(s=`lucide-icon lucide lucide-${r[0]} ${r[7].class??""}`))&&{class:s}]))},i(r){n||(g(h,r),n=!0)},o(r){v(h,r),n=!1},d(r){r&&p(e),de(a,r),h&&h.d(r)}}}function Ce(i,e,l){const t=["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"];let s=ne(e,t),{$$slots:n={},$$scope:o}=e,{name:a}=e,{color:f="currentColor"}=e,{size:h=24}=e,{strokeWidth:d=2}=e,{absoluteStrokeWidth:m=!1}=e,{iconNode:r}=e;return i.$$set=u=>{l(7,e=$($({},e),z(u))),l(6,s=ne(e,t)),"name"in u&&l(0,a=u.name),"color"in u&&l(1,f=u.color),"size"in u&&l(2,h=u.size),"strokeWidth"in u&&l(3,d=u.strokeWidth),"absoluteStrokeWidth"in u&&l(4,m=u.absoluteStrokeWidth),"iconNode"in u&&l(5,r=u.iconNode),"$$scope"in u&&l(8,o=u.$$scope)},e=z(e),[a,f,h,d,m,r,s,e,o,n]}class Ie extends E{constructor(e){super(),L(this,e,Ce,je,T,{name:0,color:1,size:2,strokeWidth:3,absoluteStrokeWidth:4,iconNode:5})}}const J=Ie;function Me(i){let e;const l=i[2].default,t=P(l,i,i[3],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,n){t&&t.m(s,n),e=!0},p(s,n){t&&t.p&&(!e||n&8)&&B(t,l,s,s[3],e?R(l,s[3],n,null):F(s[3]),null)},i(s){e||(g(t,s),e=!0)},o(s){v(t,s),e=!1},d(s){t&&t.d(s)}}}function Ue(i){let e,l;const t=[{name:"download"},i[1],{iconNode:i[0]}];let s={$$slots:{default:[Me]},$$scope:{ctx:i}};for(let n=0;n<t.length;n+=1)s=$(s,t[n]);return e=new J({props:s}),{c(){k(e.$$.fragment)},l(n){b(e.$$.fragment,n)},m(n,o){w(e,n,o),l=!0},p(n,[o]){const a=o&3?V(t,[t[0],o&2&&G(n[1]),o&1&&{iconNode:n[0]}]):{};o&8&&(a.$$scope={dirty:o,ctx:n}),e.$set(a)},i(n){l||(g(e.$$.fragment,n),l=!0)},o(n){v(e.$$.fragment,n),l=!1},d(n){y(e,n)}}}function He(i,e,l){let{$$slots:t={},$$scope:s}=e;const n=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{points:"7 10 12 15 17 10"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3"}]];return i.$$set=o=>{l(1,e=$($({},e),z(o))),"$$scope"in o&&l(3,s=o.$$scope)},e=z(e),[n,e,t,s]}class Te extends E{constructor(e){super(),L(this,e,He,Ue,T,{})}}const ze=Te;function Ee(i){let e;const l=i[2].default,t=P(l,i,i[3],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,n){t&&t.m(s,n),e=!0},p(s,n){t&&t.p&&(!e||n&8)&&B(t,l,s,s[3],e?R(l,s[3],n,null):F(s[3]),null)},i(s){e||(g(t,s),e=!0)},o(s){v(t,s),e=!1},d(s){t&&t.d(s)}}}function Le(i){let e,l;const t=[{name:"map-pin"},i[1],{iconNode:i[0]}];let s={$$slots:{default:[Ee]},$$scope:{ctx:i}};for(let n=0;n<t.length;n+=1)s=$(s,t[n]);return e=new J({props:s}),{c(){k(e.$$.fragment)},l(n){b(e.$$.fragment,n)},m(n,o){w(e,n,o),l=!0},p(n,[o]){const a=o&3?V(t,[t[0],o&2&&G(n[1]),o&1&&{iconNode:n[0]}]):{};o&8&&(a.$$scope={dirty:o,ctx:n}),e.$set(a)},i(n){l||(g(e.$$.fragment,n),l=!0)},o(n){v(e.$$.fragment,n),l=!1},d(n){y(e,n)}}}function We(i,e,l){let{$$slots:t={},$$scope:s}=e;const n=[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"}],["circle",{cx:"12",cy:"10",r:"3"}]];return i.$$set=o=>{l(1,e=$($({},e),z(o))),"$$scope"in o&&l(3,s=o.$$scope)},e=z(e),[n,e,t,s]}class Ae extends E{constructor(e){super(),L(this,e,We,Le,T,{})}}const De=Ae;function qe(i){let e;const l=i[2].default,t=P(l,i,i[3],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,n){t&&t.m(s,n),e=!0},p(s,n){t&&t.p&&(!e||n&8)&&B(t,l,s,s[3],e?R(l,s[3],n,null):F(s[3]),null)},i(s){e||(g(t,s),e=!0)},o(s){v(t,s),e=!1},d(s){t&&t.d(s)}}}function Ve(i){let e,l;const t=[{name:"shirt"},i[1],{iconNode:i[0]}];let s={$$slots:{default:[qe]},$$scope:{ctx:i}};for(let n=0;n<t.length;n+=1)s=$(s,t[n]);return e=new J({props:s}),{c(){k(e.$$.fragment)},l(n){b(e.$$.fragment,n)},m(n,o){w(e,n,o),l=!0},p(n,[o]){const a=o&3?V(t,[t[0],o&2&&G(n[1]),o&1&&{iconNode:n[0]}]):{};o&8&&(a.$$scope={dirty:o,ctx:n}),e.$set(a)},i(n){l||(g(e.$$.fragment,n),l=!0)},o(n){v(e.$$.fragment,n),l=!1},d(n){y(e,n)}}}function Pe(i,e,l){let{$$slots:t={},$$scope:s}=e;const n=[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"}]];return i.$$set=o=>{l(1,e=$($({},e),z(o))),"$$scope"in o&&l(3,s=o.$$scope)},e=z(e),[n,e,t,s]}class Be extends E{constructor(e){super(),L(this,e,Pe,Ve,T,{})}}const Fe=Be;function Re(i){let e;const l=i[2].default,t=P(l,i,i[3],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,n){t&&t.m(s,n),e=!0},p(s,n){t&&t.p&&(!e||n&8)&&B(t,l,s,s[3],e?R(l,s[3],n,null):F(s[3]),null)},i(s){e||(g(t,s),e=!0)},o(s){v(t,s),e=!1},d(s){t&&t.d(s)}}}function Ye(i){let e,l;const t=[{name:"smartphone"},i[1],{iconNode:i[0]}];let s={$$slots:{default:[Re]},$$scope:{ctx:i}};for(let n=0;n<t.length;n+=1)s=$(s,t[n]);return e=new J({props:s}),{c(){k(e.$$.fragment)},l(n){b(e.$$.fragment,n)},m(n,o){w(e,n,o),l=!0},p(n,[o]){const a=o&3?V(t,[t[0],o&2&&G(n[1]),o&1&&{iconNode:n[0]}]):{};o&8&&(a.$$scope={dirty:o,ctx:n}),e.$set(a)},i(n){l||(g(e.$$.fragment,n),l=!0)},o(n){v(e.$$.fragment,n),l=!1},d(n){y(e,n)}}}function Ge(i,e,l){let{$$slots:t={},$$scope:s}=e;const n=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2"}],["path",{d:"M12 18h.01"}]];return i.$$set=o=>{l(1,e=$($({},e),z(o))),"$$scope"in o&&l(3,s=o.$$scope)},e=z(e),[n,e,t,s]}class Je extends E{constructor(e){super(),L(this,e,Ge,Ye,T,{})}}const Ke=Je;function Oe(i){let e;const l=i[2].default,t=P(l,i,i[3],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,n){t&&t.m(s,n),e=!0},p(s,n){t&&t.p&&(!e||n&8)&&B(t,l,s,s[3],e?R(l,s[3],n,null):F(s[3]),null)},i(s){e||(g(t,s),e=!0)},o(s){v(t,s),e=!1},d(s){t&&t.d(s)}}}function Ze(i){let e,l;const t=[{name:"user-2"},i[1],{iconNode:i[0]}];let s={$$slots:{default:[Oe]},$$scope:{ctx:i}};for(let n=0;n<t.length;n+=1)s=$(s,t[n]);return e=new J({props:s}),{c(){k(e.$$.fragment)},l(n){b(e.$$.fragment,n)},m(n,o){w(e,n,o),l=!0},p(n,[o]){const a=o&3?V(t,[t[0],o&2&&G(n[1]),o&1&&{iconNode:n[0]}]):{};o&8&&(a.$$scope={dirty:o,ctx:n}),e.$set(a)},i(n){l||(g(e.$$.fragment,n),l=!0)},o(n){v(e.$$.fragment,n),l=!1},d(n){y(e,n)}}}function Qe(i,e,l){let{$$slots:t={},$$scope:s}=e;const n=[["circle",{cx:"12",cy:"8",r:"5"}],["path",{d:"M20 21a8 8 0 1 0-16 0"}]];return i.$$set=o=>{l(1,e=$($({},e),z(o))),"$$scope"in o&&l(3,s=o.$$scope)},e=z(e),[n,e,t,s]}class Xe extends E{constructor(e){super(),L(this,e,Qe,Ze,T,{})}}const xe=Xe;function ce(i,e,l){const t=i.slice();return t[1]=e[l],t}function et(i){let e,l;return e=new De({props:{size:"64"}}),{c(){k(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,s){w(e,t,s),l=!0},i(t){l||(g(e.$$.fragment,t),l=!0)},o(t){v(e.$$.fragment,t),l=!1},d(t){y(e,t)}}}function tt(i){let e,l;return e=new Ke({props:{size:"64"}}),{c(){k(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,s){w(e,t,s),l=!0},i(t){l||(g(e.$$.fragment,t),l=!0)},o(t){v(e.$$.fragment,t),l=!1},d(t){y(e,t)}}}function st(i){let e,l;return e=new Fe({props:{size:"64"}}),{c(){k(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,s){w(e,t,s),l=!0},i(t){l||(g(e.$$.fragment,t),l=!0)},o(t){v(e.$$.fragment,t),l=!1},d(t){y(e,t)}}}function nt(i){let e,l;return e=new xe({props:{size:"64"}}),{c(){k(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,s){w(e,t,s),l=!0},i(t){l||(g(e.$$.fragment,t),l=!0)},o(t){v(e.$$.fragment,t),l=!1},d(t){y(e,t)}}}function lt(i){let e,l;return e=new ze({props:{size:"64"}}),{c(){k(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,s){w(e,t,s),l=!0},i(t){l||(g(e.$$.fragment,t),l=!0)},o(t){v(e.$$.fragment,t),l=!1},d(t){y(e,t)}}}function ue(i){let e,l,t,s,n,o=i[1].title+"",a,f,h,d=i[1].text+"",m,r,u;const _=[lt,nt,st,tt,et],c=[];function S(I,D){return I[1].alt==="Step 1"?0:I[1].alt==="Step 2"?1:I[1].alt==="Step 3"?2:I[1].alt==="Step 4"?3:I[1].alt==="Step 5"?4:-1}return~(l=S(i))&&(t=c[l]=_[l](i)),{c(){e=M("div"),t&&t.c(),s=W(),n=M("h3"),a=le(o),f=W(),h=M("p"),m=le(d),r=W(),this.h()},l(I){e=U(I,"DIV",{class:!0});var D=q(e);t&&t.l(D),s=A(D),n=U(D,"H3",{class:!0});var te=q(n);a=ie(te,o),te.forEach(p),f=A(D),h=U(D,"P",{});var se=q(h);m=ie(se,d),se.forEach(p),r=A(D),D.forEach(p),this.h()},h(){C(n,"class","svelte-hbeaed"),C(e,"class","step svelte-hbeaed")},m(I,D){j(I,e,D),~l&&c[l].m(e,null),N(e,s),N(e,n),N(n,a),N(e,f),N(e,h),N(h,m),N(e,r),u=!0},p:H,i(I){u||(g(t),u=!0)},o(I){v(t),u=!1},d(I){I&&p(e),~l&&c[l].d()}}}function it(i){let e,l,t="How It Works",s,n,o,a=Z(i[0]),f=[];for(let d=0;d<a.length;d+=1)f[d]=ue(ce(i,a,d));const h=d=>v(f[d],1,1,()=>{f[d]=null});return{c(){e=M("div"),l=M("h2"),l.textContent=t,s=W(),n=M("div");for(let d=0;d<f.length;d+=1)f[d].c();this.h()},l(d){e=U(d,"DIV",{class:!0});var m=q(e);l=U(m,"H2",{class:!0,"data-svelte-h":!0}),Y(l)!=="svelte-14knkj"&&(l.textContent=t),s=A(m),n=U(m,"DIV",{class:!0});var r=q(n);for(let u=0;u<f.length;u+=1)f[u].l(r);r.forEach(p),m.forEach(p),this.h()},h(){C(l,"class","svelte-hbeaed"),C(n,"class","steps svelte-hbeaed"),C(e,"class","how-it-works svelte-hbeaed")},m(d,m){j(d,e,m),N(e,l),N(e,s),N(e,n);for(let r=0;r<f.length;r+=1)f[r]&&f[r].m(n,null);o=!0},p(d,[m]){if(m&1){a=Z(d[0]);let r;for(r=0;r<a.length;r+=1){const u=ce(d,a,r);f[r]?(f[r].p(u,m),g(f[r],1)):(f[r]=ue(u),f[r].c(),g(f[r],1),f[r].m(n,null))}for(ge(),r=a.length;r<f.length;r+=1)h(r);ve()}},i(d){if(!o){for(let m=0;m<a.length;m+=1)g(f[m]);o=!0}},o(d){f=f.filter(Boolean);for(let m=0;m<f.length;m+=1)v(f[m]);o=!1},d(d){d&&p(e),de(f,d)}}}function ot(i){return[[{alt:"Step 1",title:"Download",text:"The CycleUp! app is free and easy to use."},{alt:"Step 2",title:"Create an Account",text:"Sign up to be a free CycleUp! member."},{alt:"Step 3",title:"List Items",text:"Set up your own closet. Take pictures and add detailed descriptions of your pre-loved clothes."},{alt:"Step 4",title:"Browse",text:"Start searching for items to add to your new wardrobe."},{alt:"Step 5",title:"Locate",text:"Use our map function to locate an upcycling tailor near you!"}]]}class rt extends E{constructor(e){super(),L(this,e,ot,it,T,{})}}function at(i){let e,l='<h2 class="svelte-1uyx1k1">Users have said...</h2> <div class="testimonials svelte-1uyx1k1"><div class="testimonial svelte-1uyx1k1"><div class="message svelte-1uyx1k1"><p>Upcycle! is amazing! I&#39;ve been able to find so many great secondhand clothes on here, and it&#39;s really helped me reduce my environmental impact.</p></div> <div class="author svelte-1uyx1k1">- Sarah J.</div></div> <div class="testimonial svelte-1uyx1k1"><div class="message svelte-1uyx1k1"><p>I love Upcycle! because it&#39;s so easy to use and I can find clothes that fit my style without breaking the bank. Plus, I feel good knowing that I&#39;m supporting sustainable fashion practices.</p></div> <div class="author svelte-1uyx1k1">- Alex K.</div></div> <div class="testimonial svelte-1uyx1k1"><div class="message svelte-1uyx1k1"><p>Upcycle! has been a game-changer for me. I used to feel guilty about buying new clothes all the time, but now I can shop guilt-free and even sell my own clothes to others who will appreciate them.</p></div> <div class="author svelte-1uyx1k1">- Emily L.</div></div></div>';return{c(){e=M("div"),e.innerHTML=l,this.h()},l(t){e=U(t,"DIV",{class:!0,"data-svelte-h":!0}),Y(e)!=="svelte-dkfk75"&&(e.innerHTML=l),this.h()},h(){C(e,"class","all svelte-1uyx1k1")},m(t,s){j(t,e,s)},p:H,i:H,o:H,d(t){t&&p(e)}}}class ct extends E{constructor(e){super(),L(this,e,null,at,T,{})}}const ut=""+new URL("../../../images/mockup-1.png",import.meta.url).href,ft=""+new URL("../../../images/mockup-2.png",import.meta.url).href,mt=""+new URL("../../../images/mockup-3.png",import.meta.url).href;function dt(i){let e,l=`<div class="panel svelte-10ikj4t"><div class="row svelte-10ikj4t"><img src="${ut}" alt="Mockup of app 1" class="svelte-10ikj4t"/> <div class="text svelte-10ikj4t"><h2 class="svelte-10ikj4t">Step 1</h2> <p>Our Home Page allows you to begin shopping in other closets. You are able to search for items to add to your &#39;new&#39; wardrobe!</p></div></div> <div></div></div> <div class="panel svelte-10ikj4t"><div></div> <div class="row svelte-10ikj4t"><div class="text-right svelte-10ikj4t"><h2 class="svelte-10ikj4t">Step 2</h2> <p>Click on Swap Now! for real-time notifications for swap requests, messages, and confirmations.
        <br/><br/>
        Contact a member you want to express an interest in something in their closet, and ask them if there&#39;s anything in your closet they&#39;d be interested in swapping or giving away.  </p></div> <img src="${ft}" alt="Mockup of app 2" class="svelte-10ikj4t"/></div></div> <div class="panel svelte-10ikj4t"><div class="row svelte-10ikj4t"><img src="${mt}" alt="Mockup of app 3" class="svelte-10ikj4t"/> <div class="text svelte-10ikj4t"><h2 class="svelte-10ikj4t">Step 3</h2> <p>This is a smart matching feature that is designed to facilitate connections between individuals and tailors who are interested in upcycling. It allows you to bring new life to your favorite pre-loved items by making something new out of something old! You will input your zip code, and upcycling tailors near you will pop up!</p></div> <div></div></div></div>`;return{c(){e=M("div"),e.innerHTML=l,this.h()},l(t){e=U(t,"DIV",{class:!0,"data-svelte-h":!0}),Y(e)!=="svelte-1ljwzrd"&&(e.innerHTML=l),this.h()},h(){C(e,"class","container svelte-10ikj4t")},m(t,s){j(t,e,s)},p:H,i:H,o:H,d(t){t&&p(e)}}}class ht extends E{constructor(e){super(),L(this,e,null,dt,T,{})}}function _t(i){let e,l,t,s,n,o,a,f,h,d,m,r,u,_;return e=new pe({props:{currentPage:"home"}}),t=new we({}),n=new Ne({}),a=new rt({}),h=new ht({}),m=new ct({}),u=new $e({}),{c(){k(e.$$.fragment),l=W(),k(t.$$.fragment),s=W(),k(n.$$.fragment),o=W(),k(a.$$.fragment),f=W(),k(h.$$.fragment),d=W(),k(m.$$.fragment),r=W(),k(u.$$.fragment)},l(c){b(e.$$.fragment,c),l=A(c),b(t.$$.fragment,c),s=A(c),b(n.$$.fragment,c),o=A(c),b(a.$$.fragment,c),f=A(c),b(h.$$.fragment,c),d=A(c),b(m.$$.fragment,c),r=A(c),b(u.$$.fragment,c)},m(c,S){w(e,c,S),j(c,l,S),w(t,c,S),j(c,s,S),w(n,c,S),j(c,o,S),w(a,c,S),j(c,f,S),w(h,c,S),j(c,d,S),w(m,c,S),j(c,r,S),w(u,c,S),_=!0},p:H,i(c){_||(g(e.$$.fragment,c),g(t.$$.fragment,c),g(n.$$.fragment,c),g(a.$$.fragment,c),g(h.$$.fragment,c),g(m.$$.fragment,c),g(u.$$.fragment,c),_=!0)},o(c){v(e.$$.fragment,c),v(t.$$.fragment,c),v(n.$$.fragment,c),v(a.$$.fragment,c),v(h.$$.fragment,c),v(m.$$.fragment,c),v(u.$$.fragment,c),_=!1},d(c){c&&(p(l),p(s),p(o),p(f),p(d),p(r)),y(e,c),y(t,c),y(n,c),y(a,c),y(h,c),y(m,c),y(u,c)}}}class kt extends E{constructor(e){super(),L(this,e,null,_t,T,{})}}export{kt as component};
