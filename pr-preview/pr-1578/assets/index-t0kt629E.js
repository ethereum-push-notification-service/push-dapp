import{gB as T,gC as b,gD as A,hf as f,gA as m,hg as Q,hh as X,hi as Z,hj as $,hk as aa,hl as ea,hm as x,hn as ta,ho as qa,gx as I,gH as Sa,hp as Ta,hq as Wa,hr as W,hs as sa,gz as na,gI as O,gw as M,__tla as Oa}from"./index-YisuJCH-.js";import{aa as Ma,hy as Ca,hu as Na,hv as za,hz as La,hA as ja,hG as Pa,hF as Ba,ab as Ra,hH as Ua,hB as Va,hx as Da,hC as Ka,hD as Ha,hI as Ja,hJ as Ga,gy as Ya,hK as Qa,ht as Xa,hw as Za,hL as $a,hE as ae,hM as ee,p as te,o as se,hN as ne,hO as re,hP as ie,hQ as oe,__tla as ue}from"./index-YisuJCH-.js";import{A as ra,a as ce,c as le,n as he,__tla as fe}from"./zipWith-Bec-bwqQ.js";import{d as de,C as me,e as pe,N as ve,b as ye,S as be,T as ge,j as _e,k as we,l as Ae,m as xe,p as Ie,q as Fe,s as Ee,u as ke,v as qe,f as Se,w as Te,x as We,y as Oe,B as Me,D as Ce,E as Ne,F as ze,G as Le,H as je,I as Pe,J as Be,K as Re,L as Ue,M as Ve,O as De,P as Ke,Q as He,R as Je,U as Ge,V as Ye,W as Qe,X as Xe,Y as Ze,Z as $e,a4 as at,_ as et,$ as tt,i as st,a0 as nt,a1 as rt,a2 as it,a3 as ot,a5 as ut,a6 as ct,a7 as lt,a8 as ht,a9 as ft,o as dt,g as mt,aa as pt,ab as vt,ac as yt,ad as bt,ae as gt,af as _t,r as wt,ag as At,ah as xt,am as It,ai as Ft,aj as Et,ak as kt,al as qt,an as St,ao as Tt,ap as Wt,aq as Ot,ar as Mt,as as Ct,at as Nt,au as zt,av as Lt,aw as jt,ax as Pt,ay as Bt,az as Rt,aA as Ut,aB as Vt,aC as Dt,t as Kt,aD as Ht,aE as Jt,aF as Gt,aG as Yt,h as Qt,aH as Xt,aI as Zt,aJ as $t,aK as as,aL as es,aM as ts,aN as ss,z as ns,aO as rs,aP as is,__tla as os}from"./zipWith-Bec-bwqQ.js";import{A as F,a as E,__tla as us}from"./skip-CN96VQ2H.js";import{S as cs,b as ls,c as hs,d as fs,s as ds,__tla as ms}from"./skip-CN96VQ2H.js";import{m as ps,__tla as vs}from"./merge-CctTIm7j.js";let C,N,ia,oa,z,ua,ca,L,la,ha,fa,da,ma,pa,va,ya,ba,ga,_a,wa,j,Aa,xa,ys=Promise.all([(()=>{try{return Oa}catch{}})(),(()=>{try{return ue}catch{}})(),(()=>{try{return fe}catch{}})(),(()=>{try{return os}catch{}})(),(()=>{try{return us}catch{}})(),(()=>{try{return ms}catch{}})(),(()=>{try{return vs}catch{}})()]).then(async()=>{var P={now:function(){return(P.delegate||performance).now()},delegate:void 0},v={schedule:function(s){var t=requestAnimationFrame,a=cancelAnimationFrame,n=v.delegate;n&&(t=n.requestAnimationFrame,a=n.cancelAnimationFrame);var e=t(function(r){a=void 0,s(r)});return new T(function(){return a==null?void 0:a(e)})},requestAnimationFrame:function(){for(var s=[],t=0;t<arguments.length;t++)s[t]=arguments[t];return requestAnimationFrame.apply(void 0,b([],A(s)))},cancelAnimationFrame:function(){for(var s=[],t=0;t<arguments.length;t++)s[t]=arguments[t];var a=v.delegate;return((a==null?void 0:a.cancelAnimationFrame)||cancelAnimationFrame).apply(void 0,b([],A(s)))},delegate:void 0};ua=function(s){return s?B(s):Ia};function B(s){return new f(function(t){var a=s||P,n=a.now(),e=0,r=function(){t.closed||(e=v.requestAnimationFrame(function(i){e=0;var o=a.now();t.next({timestamp:s?o:i,elapsed:o-n}),r()}))};return r(),function(){e&&v.cancelAnimationFrame(e)}})}var Ia=B(),Fa=1,k,q={};function R(s){return s in q?(delete q[s],!0):!1}let S,U,V,g,D,K,H,J,G,Y;S={setImmediate:function(s){var t=Fa++;return q[t]=!0,k||(k=Promise.resolve()),k.then(function(){return R(t)&&s()}),t},clearImmediate:function(s){R(s)}},U=S.setImmediate,V=S.clearImmediate,g={setImmediate:function(){for(var s=[],t=0;t<arguments.length;t++)s[t]=arguments[t];return U.apply(void 0,b([],A(s)))},clearImmediate:function(s){var t=g.delegate;return((t==null?void 0:t.clearImmediate)||V)(s)},delegate:void 0},D=function(s){m(t,s);function t(a,n){var e=s.call(this,a,n)||this;return e.scheduler=a,e.work=n,e}return t.prototype.requestAsyncId=function(a,n,e){return e===void 0&&(e=0),e!==null&&e>0?s.prototype.requestAsyncId.call(this,a,n,e):(a.actions.push(this),a._scheduled||(a._scheduled=g.setImmediate(a.flush.bind(a,void 0))))},t.prototype.recycleAsyncId=function(a,n,e){var r;if(e===void 0&&(e=0),e!=null?e>0:this.delay>0)return s.prototype.recycleAsyncId.call(this,a,n,e);var i=a.actions;n!=null&&((r=i[i.length-1])===null||r===void 0?void 0:r.id)!==n&&(g.clearImmediate(n),a._scheduled===n&&(a._scheduled=void 0))},t}(F),K=function(s){m(t,s);function t(){return s!==null&&s.apply(this,arguments)||this}return t.prototype.flush=function(a){this._active=!0;var n=this._scheduled;this._scheduled=void 0;var e=this.actions,r;a=a||e.shift();do if(r=a.execute(a.state,a.delay))break;while((a=e[0])&&a.id===n&&e.shift());if(this._active=!1,r){for(;(a=e[0])&&a.id===n&&e.shift();)a.unsubscribe();throw r}},t}(E),L=new K(D),ca=L,H=function(s){m(t,s);function t(a,n){var e=s.call(this,a,n)||this;return e.scheduler=a,e.work=n,e}return t.prototype.schedule=function(a,n){return n===void 0&&(n=0),n>0?s.prototype.schedule.call(this,a,n):(this.delay=n,this.state=a,this.scheduler.flush(this),this)},t.prototype.execute=function(a,n){return n>0||this.closed?s.prototype.execute.call(this,a,n):this._execute(a,n)},t.prototype.requestAsyncId=function(a,n,e){return e===void 0&&(e=0),e!=null&&e>0||e==null&&this.delay>0?s.prototype.requestAsyncId.call(this,a,n,e):(a.flush(this),0)},t}(F),J=function(s){m(t,s);function t(){return s!==null&&s.apply(this,arguments)||this}return t}(E),j=new J(H),wa=j,G=function(s){m(t,s);function t(a,n){var e=s.call(this,a,n)||this;return e.scheduler=a,e.work=n,e}return t.prototype.requestAsyncId=function(a,n,e){return e===void 0&&(e=0),e!==null&&e>0?s.prototype.requestAsyncId.call(this,a,n,e):(a.actions.push(this),a._scheduled||(a._scheduled=v.requestAnimationFrame(function(){return a.flush(void 0)})))},t.prototype.recycleAsyncId=function(a,n,e){var r;if(e===void 0&&(e=0),e!=null?e>0:this.delay>0)return s.prototype.recycleAsyncId.call(this,a,n,e);var i=a.actions;n!=null&&((r=i[i.length-1])===null||r===void 0?void 0:r.id)!==n&&(v.cancelAnimationFrame(n),a._scheduled=void 0)},t}(F),Y=function(s){m(t,s);function t(){return s!==null&&s.apply(this,arguments)||this}return t.prototype.flush=function(a){this._active=!0;var n=this._scheduled;this._scheduled=void 0;var e=this.actions,r;a=a||e.shift();do if(r=a.execute(a.state,a.delay))break;while((a=e[0])&&a.id===n&&e.shift());if(this._active=!1,r){for(;(a=e[0])&&a.id===n&&e.shift();)a.unsubscribe();throw r}},t}(E),z=new Y(G),oa=z,ia=function(s){m(t,s);function t(a,n){a===void 0&&(a=N),n===void 0&&(n=1/0);var e=s.call(this,a,function(){return e.frame})||this;return e.maxFrames=n,e.frame=0,e.index=-1,e}return t.prototype.flush=function(){for(var a=this,n=a.actions,e=a.maxFrames,r,i;(i=n[0])&&i.delay<=e&&(n.shift(),this.frame=i.delay,!(r=i.execute(i.state,i.delay))););if(r){for(;i=n.shift();)i.unsubscribe();throw r}},t.frameTimeFactor=10,t}(E),N=function(s){m(t,s);function t(a,n,e){e===void 0&&(e=a.index+=1);var r=s.call(this,a,n)||this;return r.scheduler=a,r.work=n,r.index=e,r.active=!0,r.index=a.index=e,r}return t.prototype.schedule=function(a,n){if(n===void 0&&(n=0),Number.isFinite(n)){if(!this.id)return s.prototype.schedule.call(this,a,n);this.active=!1;var e=new t(this.scheduler,this.work);return this.add(e),e.schedule(a,n)}else return T.EMPTY},t.prototype.requestAsyncId=function(a,n,e){e===void 0&&(e=0),this.delay=a.frame+e;var r=a.actions;return r.push(this),r.sort(t.sortActions),1},t.prototype.recycleAsyncId=function(a,n,e){},t.prototype._execute=function(a,n){if(this.active===!0)return s.prototype._execute.call(this,a,n)},t.sortActions=function(a,n){return a.delay===n.delay?a.index===n.index?0:a.index>n.index?1:-1:a.delay>n.delay?1:-1},t}(F),va=function(s){return!!s&&(s instanceof f||Q(s.lift)&&Q(s.subscribe))},ya=function(s,t){var a=typeof t=="object";return new Promise(function(n,e){var r=!1,i;s.subscribe({next:function(o){i=o,r=!0},error:e,complete:function(){r?n(i):a?n(t.defaultValue):e(new X)}})})};function _(s,t,a,n){if(a)if(Z(a))n=a;else return function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return _(s,t,n).apply(this,e).pipe($(a))};return n?function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return _(s,t).apply(this,e).pipe(aa(n),ea(n))}:function(){for(var e=this,r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];var o=new ra,u=!0;return new f(function(d){var c=o.subscribe(d);if(u){u=!1;var l=!1,w=!1;t.apply(e,b(b([],A(r)),[function(){for(var h=[],p=0;p<arguments.length;p++)h[p]=arguments[p];if(s){var y=h.shift();if(y!=null){o.error(y);return}}o.next(1<h.length?h:h[0]),w=!0,l&&o.complete()}])),w&&o.complete(),l=!0}return c})}}la=function(s,t,a){return _(!1,s,t,a)},ha=function(s,t,a){return _(!0,s,t,a)};var Ea={connector:function(){return new ta},resetOnDisconnect:!0};fa=function(s,t){t===void 0&&(t=Ea);var a=null,n=t.connector,e=t.resetOnDisconnect,r=e===void 0?!0:e,i=n(),o=new f(function(u){return i.subscribe(u)});return o.connect=function(){return(!a||a.closed)&&(a=x(function(){return s}).subscribe(i),r&&a.add(function(){return i=n()})),a},o},da=function(){for(var s=[],t=0;t<arguments.length;t++)s[t]=arguments[t];var a=qa(s),n=ce(s),e=n.args,r=n.keys,i=new f(function(o){var u=e.length;if(!u){o.complete();return}for(var d=new Array(u),c=u,l=u,w=function(p){var y=!1;I(e[p]).subscribe(Sa(o,function(ka){y||(y=!0,l--),d[p]=ka},function(){return c--},void 0,function(){(!c||!y)&&(l||o.next(r?le(r,d):d),o.complete())}))},h=0;h<u;h++)w(h)});return a?i.pipe($(a)):i},ma=function(s,t,a,n,e){var r,i,o,u;arguments.length===1?(r=s,u=r.initialState,t=r.condition,a=r.iterate,i=r.resultSelector,o=i===void 0?W:i,e=r.scheduler):(u=s,!n||Z(n)?(o=W,e=n):o=n);function d(){var c;return Wa(this,function(l){switch(l.label){case 0:c=u,l.label=1;case 1:return!t||t(c)?[4,o(c)]:[3,4];case 2:l.sent(),l.label=3;case 3:return c=a(c),[3,1];case 4:return[2]}})}return x(e?function(){return Ta(d(),e)}:d)},pa=function(s,t,a){return x(function(){return s()?t:a})},C=new f(sa),ba=function(){return C},ga=function(s,t){return na(Object.entries(s),t)},_a=function(s,t,a){return[O(t,a)(I(s)),O(he(t,a))(I(s))]},Aa=function(s,t,a){if(t==null&&(t=s,s=0),t<=0)return M;var n=t+s;return new f(a?function(e){var r=s;return a.schedule(function(){r<n?(e.next(r++),this.schedule()):e.complete()})}:function(e){for(var r=s;r<n&&!e.closed;)e.next(r++);e.complete()})},xa=function(s,t){return new f(function(a){var n=s(),e=t(n),r=e?I(e):M;return r.subscribe(a),function(){n&&n.unsubscribe()}})}});export{de as ArgumentOutOfRangeError,ra as AsyncSubject,Ma as BehaviorSubject,me as ConnectableObservable,M as EMPTY,X as EmptyError,C as NEVER,pe as NotFoundError,ve as Notification,ye as NotificationKind,Ca as ObjectUnsubscribedError,f as Observable,Na as ReplaySubject,cs as Scheduler,be as SequenceError,ta as Subject,za as Subscriber,T as Subscription,ge as TimeoutError,La as UnsubscriptionError,N as VirtualAction,ia as VirtualTimeScheduler,ys as __tla,oa as animationFrame,z as animationFrameScheduler,ua as animationFrames,ca as asap,L as asapScheduler,ls as async,hs as asyncScheduler,_e as audit,we as auditTime,la as bindCallback,ha as bindNodeCallback,Ae as buffer,xe as bufferCount,Ie as bufferTime,Fe as bufferToggle,Ee as bufferWhen,ke as catchError,qe as combineAll,Se as combineLatest,Te as combineLatestAll,We as combineLatestWith,ja as concat,Pa as concatAll,Oe as concatMap,Me as concatMapTo,Ce as concatWith,Ba as config,Ne as connect,fa as connectable,ze as count,Le as debounce,fs as debounceTime,je as defaultIfEmpty,x as defer,Pe as delay,Be as delayWhen,Re as dematerialize,Ue as distinct,Ra as distinctUntilChanged,Ua as distinctUntilKeyChanged,Ve as elementAt,Va as empty,De as endWith,Ke as every,He as exhaust,Je as exhaustAll,Ge as exhaustMap,Ye as expand,O as filter,Qe as finalize,Xe as find,Ze as findIndex,$e as first,Da as firstValueFrom,at as flatMap,da as forkJoin,na as from,Ka as fromEvent,Ha as fromEventPattern,ma as generate,et as groupBy,W as identity,tt as ignoreElements,pa as iif,st as interval,nt as isEmpty,va as isObservable,rt as last,ya as lastValueFrom,Ja as map,Ga as mapTo,it as materialize,ot as max,ps as merge,Ya as mergeAll,Qa as mergeMap,ut as mergeMapTo,ct as mergeScan,lt as mergeWith,ht as min,ft as multicast,ba as never,sa as noop,Xa as observable,ea as observeOn,dt as of,mt as onErrorResumeNext,pt as onErrorResumeNextWith,ga as pairs,vt as pairwise,_a as partition,Za as pipe,$a as pluck,yt as publish,bt as publishBehavior,gt as publishLast,_t as publishReplay,wa as queue,j as queueScheduler,wt as race,At as raceWith,Aa as range,xt as reduce,It as refCount,Ft as repeat,Et as repeatWhen,kt as retry,qt as retryWhen,St as sample,Tt as sampleTime,Wt as scan,ae as scheduled,Ot as sequenceEqual,ee as share,te as shareReplay,Mt as single,ds as skip,Ct as skipLast,Nt as skipUntil,zt as skipWhile,se as startWith,aa as subscribeOn,Lt as switchAll,ne as switchMap,jt as switchMapTo,Pt as switchScan,re as take,Bt as takeLast,ie as takeUntil,Rt as takeWhile,Ut as tap,Vt as throttle,Dt as throttleTime,Kt as throwError,Ht as throwIfEmpty,Jt as timeInterval,Gt as timeout,Yt as timeoutWith,Qt as timer,Xt as timestamp,Zt as toArray,xa as using,$t as window,as as windowCount,es as windowTime,ts as windowToggle,ss as windowWhen,oe as withLatestFrom,ns as zip,rs as zipAll,is as zipWith};