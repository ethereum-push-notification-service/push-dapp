import{Z as M,$ as S,a0 as R,a1 as _,an as ct,a5 as k,a8 as $,a9 as F,aa as z,ab as I,ac as w,ad as W,ae as Ut,af as te,ag as H,a2 as g,a4 as y,aB as ee,ai as N,a3 as L,b7 as K,aj as V,a6 as x,a7 as T,az as dt,bg as ne,bh as oe,bi as ie,aE as ae,aV as re,aH as se,aX as le,ak as O,aP as X,aS as ce,bj as de,bk as ft,aW as fe,aA as ve,bl as vt,bm as q,ax as G,aI as pt,ao as pe,ap as ut,bn as ue,ah as yt,bo as mt,bp as ht,am as D,bq as bt,av as E,aD as B,br as gt,bs as ye,bt as xt,bu as P,au as me,aY as Z,bv as he,__tla as be}from"./index-CKK9e80c.js";let kt,ge=Promise.all([(()=>{try{return be}catch{}})()]).then(async()=>{function $t(o,{from:t,to:e},n={}){const i=getComputedStyle(o),a=i.transform==="none"?"":i.transform,[d,l]=i.transformOrigin.split(" ").map(parseFloat),s=t.left+t.width*d/e.width-(e.left+d),r=t.top+t.height*l/e.height-(e.top+l),{delay:c=0,duration:f=v=>Math.sqrt(v)*120,easing:p=ft}=n;return{delay:c,duration:ve(f)?f(Math.sqrt(s*s+r*r)):f,easing:p,css:(v,h)=>{const u=h*s,m=h*r,C=v+h*t.width/e.width,j=v+h*t.height/e.height;return`transform: ${a} translate(${u}px, ${m}px) scale(${C}, ${j});`}}}function wt(o){_(o,"svelte-13cuwwo","div.svelte-13cuwwo{box-sizing:content-box}.border.svelte-13cuwwo{border:2px solid;border-radius:120px;overflow:hidden}")}function Ct(o){let t,e;return{c(){t=g("div"),y(t,"class","border svelte-13cuwwo"),y(t,"style",e=`
    width: ${o[2]-o[3]*2}px; 
    height: ${o[2]-o[3]*2}px; 
    border-color: var(${o[1]}); 
    padding: ${o[3]}px; 
    background-color: ${o[4]};
    border-radius: 50%;
    display: flex;
    justify-content: center;
  `)},m(n,i){k(n,t,i),t.innerHTML=o[0]},p(n,[i]){i&1&&(t.innerHTML=n[0]),i&30&&e!==(e=`
    width: ${n[2]-n[3]*2}px; 
    height: ${n[2]-n[3]*2}px; 
    border-color: var(${n[1]}); 
    padding: ${n[3]}px; 
    background-color: ${n[4]};
    border-radius: 50%;
    display: flex;
    justify-content: center;
  `)&&y(t,"style",e)},i:D,o:D,d(n){n&&w(t)}}}function zt(o,t,e){let{icon:n}=t,{borderColorVar:i}=t,{size:a}=t,{padding:d=0}=t,{background:l="transparent"}=t;return o.$$set=s=>{"icon"in s&&e(0,n=s.icon),"borderColorVar"in s&&e(1,i=s.borderColorVar),"size"in s&&e(2,a=s.size),"padding"in s&&e(3,d=s.padding),"background"in s&&e(4,l=s.background)},[n,i,a,d,l]}class jt extends M{constructor(t){super(),S(this,t,zt,Ct,R,{icon:0,borderColorVar:1,size:2,padding:3,background:4},wt)}}function Lt(o){_(o,"svelte-jvic9v","div.notification-icons-wrapper.svelte-jvic9v{height:32px;width:32px}.border.svelte-jvic9v{border-radius:8px}div.notification-icon.svelte-jvic9v{padding:6px}div.pending-icon.svelte-jvic9v{animation:svelte-jvic9v-blink 2s ease-in infinite;height:100%;width:100%;padding:7px}@keyframes svelte-jvic9v-blink{from,to{opacity:1}50%{opacity:0.2}}div.border-action.svelte-jvic9v{height:32px;min-width:32px;border-radius:8px;overflow:hidden;will-change:transform}div.border-action.svelte-jvic9v:before{content:'';background-image:conic-gradient(#b1b7f2 20deg, #6370e5 120deg);height:140%;width:140%;position:absolute;left:-25%;top:-25%;animation:svelte-jvic9v-rotate 2s infinite linear}div.chain-icon-container.svelte-jvic9v{left:18px;top:18px}@keyframes svelte-jvic9v-rotate{100%{transform:rotate(-360deg)}}")}function Y(o){let t,e,n,i,a=P[o[1].type].eventIcon+"",d,l,s,r=!o[1].id.includes("customNotification")&&!o[1].id.includes("preflight"),c,f=o[1].type==="pending"&&J(),p=r&&Q(o);return{c(){t=g("div"),f&&f.c(),e=L(),n=g("div"),i=g("div"),s=L(),p&&p.c(),y(i,"class",d=K(`notification-icon flex items-center justify-center ${o[1].type==="pending"?"pending-icon":""}`)+" svelte-jvic9v"),y(n,"class","flex items-center justify-center border relative notification-icons-wrapper svelte-jvic9v"),y(n,"style",l=`background:${P[o[1].type].backgroundColor}; color: ${P[o[1].type].iconColor||""}; ${o[1].type==="pending"?"height: 28px; width: 28px; margin: 2px;":`border: 2px solid ${P[o[1].type].borderColor}`}; `),y(t,"class","relative")},m(v,h){k(v,t,h),f&&f.m(t,null),x(t,e),x(t,n),x(n,i),i.innerHTML=a,x(t,s),p&&p.m(t,null),c=!0},p(v,h){v[1].type==="pending"?f||(f=J(),f.c(),f.m(t,e)):f&&(f.d(1),f=null),(!c||h&2)&&a!==(a=P[v[1].type].eventIcon+"")&&(i.innerHTML=a),(!c||h&2&&d!==(d=K(`notification-icon flex items-center justify-center ${v[1].type==="pending"?"pending-icon":""}`)+" svelte-jvic9v"))&&y(i,"class",d),(!c||h&2&&l!==(l=`background:${P[v[1].type].backgroundColor}; color: ${P[v[1].type].iconColor||""}; ${v[1].type==="pending"?"height: 28px; width: 28px; margin: 2px;":`border: 2px solid ${P[v[1].type].borderColor}`}; `))&&y(n,"style",l),h&2&&(r=!v[1].id.includes("customNotification")&&!v[1].id.includes("preflight")),r?p?(p.p(v,h),h&2&&$(p,1)):(p=Q(v),p.c(),$(p,1),p.m(t,null)):p&&(F(),z(p,1,1,()=>{p=null}),I())},i(v){c||($(p),c=!0)},o(v){z(p),c=!1},d(v){v&&w(t),f&&f.d(),p&&p.d()}}}function J(o){let t;return{c(){t=g("div"),y(t,"class","border-action absolute svelte-jvic9v")},m(e,n){k(e,t,n)},d(e){e&&w(t)}}}function Q(o){let t,e,n;return e=new jt({props:{icon:o[0].icon,size:16,background:o[0].color,borderColorVar:"--notify-onboard-background, var(--onboard-gray-600, var(--gray-600))",padding:3}}),{c(){t=g("div"),N(e.$$.fragment),y(t,"class","absolute chain-icon-container svelte-jvic9v")},m(i,a){k(i,t,a),V(e,t,null),n=!0},p(i,a){const d={};a&1&&(d.icon=i[0].icon),a&1&&(d.background=i[0].color),e.$set(d)},i(i){n||($(e.$$.fragment,i),n=!0)},o(i){z(e.$$.fragment,i),n=!1},d(i){i&&w(t),O(e)}}}function Pt(o){let t,e,n=o[1].type&&Y(o);return{c(){n&&n.c(),t=ct()},m(i,a){n&&n.m(i,a),k(i,t,a),e=!0},p(i,[a]){i[1].type?n?(n.p(i,a),a&2&&$(n,1)):(n=Y(i),n.c(),$(n,1),n.m(t.parentNode,t)):n&&(F(),z(n,1,1,()=>{n=null}),I())},i(i){e||($(n),e=!0)},o(i){z(n),e=!1},d(i){n&&n.d(i),i&&w(t)}}}function Tt(o,t,e){let{chainStyles:n=me}=t,{notification:i}=t;return o.$$set=a=>{"chainStyles"in a&&e(0,n=a.chainStyles),"notification"in a&&e(1,i=a.notification)},[n,i]}class Mt extends M{constructor(t){super(),S(this,t,Tt,Pt,R,{chainStyles:0,notification:1},Lt)}}function St(o){_(o,"svelte-pm7idu",`div.svelte-pm7idu{display:flex;justify-content:center;font-size:inherit;font-family:inherit;margin:0 1.5rem 0 0.75rem}span.svelte-pm7idu{font-family:inherit;display:flex;align-items:center;margin:0 2px}.time.svelte-pm7idu{color:var(
      --notify-onboard-timer-color,
      var(--onboard-gray-300, var(--gray-300))
    );margin-left:4px}`)}function U(o){let t,e,n=o[2](o[1]-o[0])+"",i,a;return{c(){t=E(`-
    `),e=g("span"),i=E(n),a=E(`
    ago`),y(e,"class","svelte-pm7idu")},m(d,l){k(d,t,l),k(d,e,l),x(e,i),k(d,a,l)},p(d,l){l&3&&n!==(n=d[2](d[1]-d[0])+"")&&B(i,n)},d(d){d&&w(t),d&&w(e),d&&w(a)}}}function Rt(o){let t,e=o[0]&&U(o);return{c(){t=g("div"),e&&e.c(),y(t,"class","time svelte-pm7idu")},m(n,i){k(n,t,i),e&&e.m(t,null)},p(n,[i]){n[0]?e?e.p(n,i):(e=U(n),e.c(),e.m(t,null)):e&&(e.d(1),e=null)},i:D,o:D,d(n){n&&w(t),e&&e.d()}}}function _t(o,t,e){let n,i;H(o,ut,r=>e(3,n=r)),H(o,he,r=>e(4,i=r));let{startTime:a}=t;function d(r){const c=Math.floor(r/1e3),f=c<0?0:c;return f>=60?`${Math.floor(f/60).toLocaleString(i)} ${n("notify.time.minutes")}`:`${f.toLocaleString(i)} ${n("notify.time.seconds")}`}let l=Date.now();const s=setInterval(()=>{e(1,l=Date.now())},1e3);return yt(()=>{clearInterval(s)}),o.$$set=r=>{"startTime"in r&&e(0,a=r.startTime)},[a,l,d]}class Dt extends M{constructor(t){super(),S(this,t,_t,Rt,R,{startTime:0},St)}}function Et(o){_(o,"svelte-1otz6tt",`div.notify-transaction-data.svelte-1otz6tt{font-size:var(
      --notify-onboard-transaction-font-size,
      var(--onboard-font-size-6, var(--font-size-6))
    );font-family:inherit;margin:0px 20px 0px 8px;justify-content:center}.hash-time.svelte-1otz6tt{display:inline-flex;margin-top:4px;font-size:var(
      --notify-onboard-hash-time-font-size,
      var(--onboard-font-size-7, var(--font-size-7))
    );line-height:var(
      --notify-onboard-hash-time-font-line-height,
      var(--onboard-font-line-height-4, var(--font-line-height-4))
    )}.address-hash.svelte-1otz6tt{color:var(
      --notify-onboard-address-hash-color,
      var(--onboard-primary-200, var(--primary-200))
    )}a.address-hash.svelte-1otz6tt{color:var(
      --notify-onboard-anchor-color,
      var(--onboard-primary-400, var(--primary-400))
    )}a.svelte-1otz6tt{display:flex;text-decoration:none;color:inherit}.transaction-status.svelte-1otz6tt{color:var(--notify-onboard-transaction-status, inherit);line-height:var(
      --notify-onboard-font-size-5,
      var(--onboard-font-size-5, var(--font-size-5))
    );font-weight:400;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}`)}function tt(o){let t,e,n,i;function a(s,r){return s[0].link?It:Ft}let d=a(o),l=d(o);return n=new Dt({props:{startTime:o[0].startTime}}),{c(){t=g("span"),l.c(),e=L(),N(n.$$.fragment),y(t,"class","hash-time svelte-1otz6tt")},m(s,r){k(s,t,r),l.m(t,null),x(t,e),V(n,t,null),i=!0},p(s,r){d===(d=a(s))&&l?l.p(s,r):(l.d(1),l=d(s),l&&(l.c(),l.m(t,e)));const c={};r&1&&(c.startTime=s[0].startTime),n.$set(c)},i(s){i||($(n.$$.fragment,s),i=!0)},o(s){z(n.$$.fragment,s),i=!1},d(s){s&&w(t),l.d(),O(n)}}}function Ft(o){let t,e=Z(o[0].id)+"",n;return{c(){t=g("div"),n=E(e),y(t,"class","address-hash svelte-1otz6tt")},m(i,a){k(i,t,a),x(t,n)},p(i,a){a&1&&e!==(e=Z(i[0].id)+"")&&B(n,e)},d(i){i&&w(t)}}}function It(o){let t,e=Z(o[0].id)+"",n,i;return{c(){t=g("a"),n=E(e),y(t,"class","address-hash svelte-1otz6tt"),y(t,"href",i=o[0].link),y(t,"target","_blank"),y(t,"rel","noreferrer noopener")},m(a,d){k(a,t,d),x(t,n)},p(a,d){d&1&&e!==(e=Z(a[0].id)+"")&&B(n,e),d&1&&i!==(i=a[0].link)&&y(t,"href",i)},d(a){a&&w(t)}}}function Ht(o){let t,e,n=o[0].message+"",i,a,d=o[0].id&&!o[0].id.includes("customNotification")&&!o[0].id.includes("preflight"),l,s=d&&tt(o);return{c(){t=g("div"),e=g("span"),i=E(n),a=L(),s&&s.c(),y(e,"class","transaction-status svelte-1otz6tt"),y(t,"class","flex flex-column notify-transaction-data svelte-1otz6tt")},m(r,c){k(r,t,c),x(t,e),x(e,i),x(t,a),s&&s.m(t,null),l=!0},p(r,[c]){(!l||c&1)&&n!==(n=r[0].message+"")&&B(i,n),c&1&&(d=r[0].id&&!r[0].id.includes("customNotification")&&!r[0].id.includes("preflight")),d?s?(s.p(r,c),c&1&&$(s,1)):(s=tt(r),s.c(),$(s,1),s.m(t,null)):s&&(F(),z(s,1,1,()=>{s=null}),I())},i(r){l||($(s),l=!0)},o(r){z(s),l=!1},d(r){r&&w(t),s&&s.d()}}}function Nt(o,t,e){let{notification:n}=t;return o.$$set=i=>{"notification"in i&&e(0,n=i.notification)},[n]}class Vt extends M{constructor(t){super(),S(this,t,Nt,Ht,R,{notification:0},Et)}}var Ot=`
<svg width="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM15 13.59L13.59 15L10 11.41L6.41 15L5 13.59L8.59 10L5 6.41L6.41 5L10 8.59L13.59 5L15 6.41L11.41 10L15 13.59Z" fill="currentColor"/>
</svg>
`;const Kt=["txPool"],qt=["main","matic-main"],Gt=["Ledger","Trezor","Keystone","KeepKey","D'CENT"],et=o=>Kt.includes(o),nt=o=>qt.includes(o),ot=o=>o&&Gt.includes(o.label);async function it({type:o,wallet:t,transaction:e}){const{from:n,input:i,value:a,to:d,nonce:l,gas:s,network:r}=e,c=q[r],{gasPriceProbability:f}=W.get().notify.replacement,{gas:p,apiKey:v}=X,[h]=await p.get({chains:[q[r]],endpoint:"blockPrices",apiKey:v}),{maxFeePerGas:u,maxPriorityFeePerGas:m}=h.blockPrices[0].estimatedPrices.find(({confidence:A})=>A===(o==="speedup"?f.speedup:f.cancel)),C=gt(u),j=gt(m),b=i==="0x"?{}:{data:i};return t.provider.request({method:"eth_sendTransaction",params:[{type:"0x2",from:n,to:o==="cancel"?n:d,chainId:parseInt(c),value:`${ye.from(a).toHexString()}`,nonce:xt(l),gasLimit:xt(s),maxFeePerGas:C,maxPriorityFeePerGas:j,...b}]})}function Bt(o){_(o,"svelte-ftkynd",`.bn-notify-notification.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{--backround-color:var(--notify-onboard-background, var(--w3o-backround-color, var(--gray-700)));--foreground-color:var(--w3o-foreground-color, var(--gray-600));--text-color:var(--w3o-text-color, #FFF);--border-color:var(--w3o-border-color);font-family:inherit;transition:background 300ms ease-in-out, color 300ms ease-in-out;pointer-events:all;backdrop-filter:blur(5px);width:100%;min-height:56px;display:flex;flex-direction:column;position:relative;overflow:hidden;border:1px solid transparent;border-radius:var(
      --notify-onboard-border-radius,
      var(--onboard-border-radius-4, var(--border-radius-4))
    );background:var(--foreground-color);color:var(--text-color)}.bn-notify-notification-inner.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{padding:0.75rem}.bn-notify-notification.svelte-ftkynd:hover>div.bn-notify-notification-inner.svelte-ftkynd>div.notify-close-btn-desktop.svelte-ftkynd{visibility:visible;opacity:1}div.notify-close-btn.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{margin-left:auto;margin-bottom:auto;height:24px;width:24px;position:absolute;top:8px;right:8px;justify-content:center;align-items:center}div.notify-close-btn-desktop.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{visibility:hidden;transition:visibility 0.15s linear, opacity 0.15s linear;opacity:0}.notify-close-btn.svelte-ftkynd .close-icon.svelte-ftkynd.svelte-ftkynd{width:20px;margin:auto;color:var(--text-color)}.notify-close-btn.svelte-ftkynd>.close-icon.svelte-ftkynd.svelte-ftkynd{color:var(--notify-onboard-close-icon-color)}.notify-close-btn.svelte-ftkynd:hover>.close-icon.svelte-ftkynd.svelte-ftkynd{color:var(--notify-onboard-close-icon-hover)}.transaction-status.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{color:var(
      --notify-onboard-transaction-status-color,
      var(--onboard-primary-100, var(--primary-100))
    );line-height:14px}.dropdown.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{height:0px;overflow:hidden;transition:height 150ms ease-in-out}.dropdown-visible.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{height:48px}.dropdown-buttons.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{background-color:var(
      --notify-onboard-dropdown-background,
      var(--onboard-gray-700, var(--gray-700))
    );width:100%;padding:8px}.dropdown-button.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{padding:4px 12px;border-radius:var(
      --notify-onboard-dropdown-border-radius,
      var(--onboard-border-radius-5, var(--border-radius-5))
    );background-color:transparent;font-size:var(
      --notify-onboard-dropdown-font-size,
      var(--onboard-font-size-6, var(--font-size-6))
    );color:var(
      --notify-onboard-dropdown-text-color,
      var(--onboard-primary-400, var(--primary-400))
    );transition:all 150ms ease-in-out;cursor:pointer}.dropdown-button.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd:hover{background:var(
      --notify-onboard-dropdown-btn-hover-background,
      rgba(146, 155, 237, 0.2)
    )}`)}function at(o){let t,e,n,i,a,d;return{c(){t=g("div"),e=g("button"),e.textContent="Cancel",n=L(),i=g("button"),i.textContent="Speed-up",y(e,"class","dropdown-button svelte-ftkynd"),y(i,"class","dropdown-button svelte-ftkynd"),y(t,"class","dropdown-buttons flex items-center justify-end svelte-ftkynd")},m(l,s){k(l,t,s),x(t,e),x(t,n),x(t,i),a||(d=[T(e,"click",o[9]),T(i,"click",o[10])],a=!0)},p:D,d(l){l&&w(t),a=!1,pt(d)}}}function Zt(o){let t,e,n,i,a,d,l,s,r,c,f,p,v,h;n=new Mt({props:{notification:o[0],chainStyles:vt[q[o[0].network]]}}),a=new Vt({props:{notification:o[0]}});let u=o[0].eventCode==="txPool"&&at(o);return{c(){t=g("div"),e=g("div"),N(n.$$.fragment),i=L(),N(a.$$.fragment),d=L(),l=g("div"),s=g("div"),r=L(),c=g("div"),u&&u.c(),y(s,"class","flex items-center close-icon svelte-ftkynd"),y(l,"class","notify-close-btn notify-close-btn-"+o[4].type+" pointer flex svelte-ftkynd"),y(e,"class","flex bn-notify-notification-inner svelte-ftkynd"),y(c,"class","dropdown svelte-ftkynd"),G(c,"dropdown-visible",o[2]&&o[5]&&et(o[0].eventCode)&&nt(o[0].network)&&ot(o[7])),y(t,"class",f="bn-notify-notification bn-notify-notification-"+o[0].type+"} svelte-ftkynd"),G(t,"bn-notify-clickable",o[0].onClick)},m(m,C){k(m,t,C),x(t,e),V(n,e,null),x(e,i),V(a,e,null),x(e,d),x(e,l),x(l,s),s.innerHTML=Ot,x(t,r),x(t,c),u&&u.m(c,null),p=!0,v||(h=[T(l,"click",dt(o[8])),T(t,"mouseenter",o[11]),T(t,"mouseleave",o[12]),T(t,"click",o[13])],v=!0)},p(m,[C]){const j={};C&1&&(j.notification=m[0]),C&1&&(j.chainStyles=vt[q[m[0].network]]),n.$set(j);const b={};C&1&&(b.notification=m[0]),a.$set(b),m[0].eventCode==="txPool"?u?u.p(m,C):(u=at(m),u.c(),u.m(c,null)):u&&(u.d(1),u=null),(!p||C&165)&&G(c,"dropdown-visible",m[2]&&m[5]&&et(m[0].eventCode)&&nt(m[0].network)&&ot(m[7])),(!p||C&1&&f!==(f="bn-notify-notification bn-notify-notification-"+m[0].type+"} svelte-ftkynd"))&&y(t,"class",f),(!p||C&1)&&G(t,"bn-notify-clickable",m[0].onClick)},i(m){p||($(n.$$.fragment,m),$(a.$$.fragment,m),p=!0)},o(m){z(n.$$.fragment,m),z(a.$$.fragment,m),p=!1},d(m){m&&w(t),O(n),O(a),u&&u.d(),v=!1,pt(h)}}}function At(o,t,e){let n,i;H(o,pe,b=>e(15,n=b)),H(o,ut,b=>e(3,i=b));const{device:a,gas:d}=X;let{notification:l}=t,{updateParentOnRemove:s}=t,r,c=!1;const f=ue.getValue().find(({hash:b})=>b===l.id),p=f&&n.find(({accounts:b})=>!!b.find(({address:A})=>A.toLowerCase()===f.from.toLowerCase()));yt(()=>{clearTimeout(r)});const v=()=>{mt(l.id),ht(l.id),s()},h=async()=>{try{await it({type:"cancel",wallet:p,transaction:f})}catch{const b=`${f.hash.slice(0,9)}:txReplaceError${f.hash.slice(-5)}`;bt({id:b,type:"hint",eventCode:"txError",message:i("notify.transaction.txReplaceError"),key:b,autoDismiss:4e3})}},u=async()=>{try{await it({type:"speedup",wallet:p,transaction:f})}catch{const b=`${f.hash.slice(0,9)}:txReplaceError${f.hash.slice(-5)}`;bt({id:b,type:"hint",eventCode:"txError",message:i("notify.transaction.txReplaceError"),key:b,autoDismiss:4e3})}},m=()=>e(2,c=!0),C=()=>e(2,c=!1),j=b=>l.onClick&&l.onClick(b);return o.$$set=b=>{"notification"in b&&e(0,l=b.notification),"updateParentOnRemove"in b&&e(1,s=b.updateParentOnRemove)},o.$$.update=()=>{o.$$.dirty&1&&l.autoDismiss&&(r=setTimeout(()=>{mt(l.id),ht(l.id)},l.autoDismiss))},[l,s,c,i,a,d,f,p,v,h,u,m,C,j]}class Wt extends M{constructor(t){super(),S(this,t,At,Zt,R,{notification:0,updateParentOnRemove:1},Bt)}}function Xt(o){_(o,"svelte-1h8mmo3",`ul.svelte-1h8mmo3{padding-left:0;display:flex;flex-flow:column nowrap;font-size:var(
      --notify-onboard-font-size,
      var(--onboard-font-size-5, var(--font-size-5))
    );list-style-type:none;overflow:visible;scrollbar-width:none;box-sizing:border-box;z-index:var(--notify-onboard-z-index, 300);font-family:var(
      --notify-onboard-font-family,
      var(--onboard-font-family-normal, inherit)
    );margin:8px 0;pointer-events:all}.y-scroll.svelte-1h8mmo3{overflow-y:scroll}.y-visible.svelte-1h8mmo3{overflow-y:visible}li.notification-list-top.svelte-1h8mmo3:not(:first-child){margin-top:8px}li.notification-list-bottom.svelte-1h8mmo3:not(:first-child){margin-bottom:8px}ul.bn-notify-bottomLeft.svelte-1h8mmo3,ul.bn-notify-bottomRight.svelte-1h8mmo3{flex-direction:column-reverse}@media only screen and (max-width: 450px){ul.svelte-1h8mmo3{width:100%}}.bn-notify-clickable:hover{cursor:pointer}.svelte-1h8mmo3::-webkit-scrollbar{display:none}`)}function rt(o,t,e){const n=o.slice();return n[12]=t[e],n}function st(o){let t,e=[],n=new Map,i,a,d,l=o[2];const s=r=>r[12].key;for(let r=0;r<l.length;r+=1){let c=rt(o,l,r),f=s(c);n.set(f,e[r]=lt(f,c))}return{c(){t=g("ul");for(let r=0;r<e.length;r+=1)e[r].c();y(t,"class",i="bn-notify-"+o[0]+" "+o[5]+" svelte-1h8mmo3"),y(t,"style",a=`${o[0].includes("top")?"justify-content:flex-start;":""}; max-height: calc(100vh - ${o[6].expanded?"412px":o[1]&&o[7].type!=="mobile"?"82px":!o[1]&&o[7].type==="mobile"?"108px":"24px"})`)},m(r,c){k(r,t,c);for(let f=0;f<e.length;f+=1)e[f]&&e[f].m(t,null);d=!0},p(r,c){if(c&517){l=r[2],F();for(let f=0;f<e.length;f+=1)e[f].r();e=ee(e,c,s,1,r,l,n,t,de,lt,null,rt);for(let f=0;f<e.length;f+=1)e[f].a();I()}(!d||c&33&&i!==(i="bn-notify-"+r[0]+" "+r[5]+" svelte-1h8mmo3"))&&y(t,"class",i),(!d||c&67&&a!==(a=`${r[0].includes("top")?"justify-content:flex-start;":""}; max-height: calc(100vh - ${r[6].expanded?"412px":r[1]&&r[7].type!=="mobile"?"82px":!r[1]&&r[7].type==="mobile"?"108px":"24px"})`))&&y(t,"style",a)},i(r){if(!d){for(let c=0;c<l.length;c+=1)$(e[c]);d=!0}},o(r){for(let c=0;c<e.length;c+=1)z(e[c]);d=!1},d(r){r&&w(t);for(let c=0;c<e.length;c+=1)e[c].d()}}}function lt(o,t){let e,n,i,a,d,l,s,r=D,c,f,p;return n=new Wt({props:{notification:t[12],updateParentOnRemove:t[9]}}),{key:o,first:null,c(){e=g("li"),N(n.$$.fragment),i=L(),y(e,"class",a=K(`bn-notify-li-${t[0]} ${t[0].includes("top")?"notification-list-top":"notification-list-bottom"}`)+" svelte-1h8mmo3"),this.first=e},m(v,h){k(v,e,h),V(n,e,null),x(e,i),c=!0,f||(p=T(e,"click",dt(t[10])),f=!0)},p(v,h){t=v;const u={};h&4&&(u.notification=t[12]),n.$set(u),(!c||h&1&&a!==(a=K(`bn-notify-li-${t[0]} ${t[0].includes("top")?"notification-list-top":"notification-list-bottom"}`)+" svelte-1h8mmo3"))&&y(e,"class",a)},r(){s=e.getBoundingClientRect()},f(){ne(e),r(),oe(e,s)},a(){r(),r=ie(e,s,$t,{duration:500})},i(v){c||($(n.$$.fragment,v),v&&ae(()=>{c&&(l&&l.end(1),d=re(e,se,{duration:1200,delay:300,x:t[3],y:t[4],easing:Jt}),d.start())}),c=!0)},o(v){z(n.$$.fragment,v),d&&d.invalidate(),l=le(e,fe,{duration:300,easing:ft}),c=!1},d(v){v&&w(e),O(n),v&&l&&l.end(),f=!1,p()}}}function Yt(o){let t,e,n=o[2].length&&st(o);return{c(){n&&n.c(),t=ct()},m(i,a){n&&n.m(i,a),k(i,t,a),e=!0},p(i,[a]){i[2].length?n?(n.p(i,a),a&4&&$(n,1)):(n=st(i),n.c(),$(n,1),n.m(t.parentNode,t)):n&&(F(),z(n,1,1,()=>{n=null}),I())},i(i){e||($(n),e=!0)},o(i){z(n),e=!1},d(i){n&&n.d(i),i&&w(t)}}}function Jt(o){return Math.sin(-13*(o+1)*Math.PI/2)*Math.pow(2,-35*o)+1}function Qt(o,t,e){let n;const{device:i}=X,a=W.select("accountCenter").pipe(Ut(W.get().accountCenter),te(1));H(o,a,u=>e(6,n=u));let{position:d}=t,{sharedContainer:l}=t,{notifications:s}=t,r,c;r=0,c=0;let f="y-scroll";const p=()=>{f!=="y-visible"&&e(5,f="y-visible"),v(function(){e(5,f="y-scroll")},1e3)},v=function(){let u=null;return(m,C)=>{clearTimeout(u),u=setTimeout(m,C)}}();function h(u){ce.call(this,o,u)}return o.$$set=u=>{"position"in u&&e(0,d=u.position),"sharedContainer"in u&&e(1,l=u.sharedContainer),"notifications"in u&&e(2,s=u.notifications)},o.$$.update=()=>{o.$$.dirty&1&&(d.includes("top")?e(4,c=-50):e(4,c=50))},[d,l,s,r,c,f,n,i,a,p,h]}kt=class extends M{constructor(o){super(),S(this,o,Qt,Yt,R,{position:0,sharedContainer:1,notifications:2},Xt)}}});export{ge as __tla,kt as default};
