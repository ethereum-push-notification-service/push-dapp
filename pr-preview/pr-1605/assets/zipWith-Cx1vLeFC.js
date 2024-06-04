import{c as k,b as Wn,__tla as Tt}from"./skip-B3b4O9Or.js";import{gH as b,gI as l,gB as Xn,hS as St,gC as z,hg as T,ho as E,gv as M,gA as U,hh as N,gx as K,hT as W,hU as I,gy as w,hp as an,hk as sn,hs as O,hj as At,hV as Qn,ht as _,gD as j,gE as C,hW as A,gF as B,hx as Yn,hL as P,hH as Vt,hB as Zn,hP as X,hK as Ft,hi as Q,gJ as fn,hJ as $n,hX as Dn,gw as Pt,gz as zt,aa as Mt,hv as It,hO as Y,gG as Lt,__tla as Rt}from"./index-CfmYqbcn.js";let ln,vn,nr,H,rr,Z,tr,ur,J,er,$,or,ir,cr,q,ar,sr,fr,bn,hn,pn,D,lr,vr,br,hr,pr,dr,dn,mr,gr,yr,wr,xr,_r,Er,Nr,jr,nn,Cr,mn,Or,G,kr,gn,Tr,Sr,yn,Ar,Vr,Fr,Pr,zr,Mr,Ir,V,rn,wn,xn,Lr,_n,En,Rr,Ur,Br,Hr,Jr,qr,L,Gr,Kr,Wr,Xr,Nn,jn,Qr,Yr,Zr,$r,Dr,nt,rt,tt,ut,et,Cn,ot,On,kn,tn,Tn,Sn,An,F,Vn,Fn,it,ct,at,st,un,ft,lt,vt,bt,Pn,zn,ht,Mn,pt,en,on,Ut=Promise.all([(()=>{try{return Tt}catch{}})(),(()=>{try{return Rt}catch{}})()]).then(async()=>{Nn=function(){return b(function(r,n){var t=null;r._refCount++;var u=l(n,void 0,void 0,void 0,function(){if(!r||r._refCount<=0||0<--r._refCount){t=null;return}var e=r._connection,o=t;t=null,e&&(!o||e===o)&&e.unsubscribe(),n.unsubscribe()});r.subscribe(u),u.closed||(t=r.connect())})},H=function(r){Xn(n,r);function n(t,u){var e=r.call(this)||this;return e.source=t,e.subjectFactory=u,e._subject=null,e._refCount=0,e._connection=null,St(t)&&(e.lift=t.lift),e}return n.prototype._subscribe=function(t){return this.getSubject().subscribe(t)},n.prototype.getSubject=function(){var t=this._subject;return(!t||t.isStopped)&&(this._subject=this.subjectFactory()),this._subject},n.prototype._teardown=function(){this._refCount=0;var t=this._connection;this._subject=this._connection=null,t==null||t.unsubscribe()},n.prototype.connect=function(){var t=this,u=this._connection;if(!u){u=this._connection=new z;var e=this.getSubject();u.add(this.source.subscribe(l(e,void 0,function(){t._teardown(),e.complete()},function(o){t._teardown(),e.error(o)},function(){return t._teardown()}))),u.closed&&(this._connection=null,u=z.EMPTY)}return u},n.prototype.refCount=function(){return Nn()(this)},n}(T),vn=function(r){Xn(n,r);function n(){var t=r!==null&&r.apply(this,arguments)||this;return t._value=null,t._hasValue=!1,t._isComplete=!1,t}return n.prototype._checkFinalizedStatuses=function(t){var u=this,e=u.hasError,o=u._hasValue,i=u._value,c=u.thrownError,a=u.isStopped,s=u._isComplete;e?t.error(c):(a||s)&&(o&&t.next(i),t.complete())},n.prototype.next=function(t){this.isStopped||(this._value=t,this._hasValue=!0)},n.prototype.complete=function(){var t=this,u=t._hasValue,e=t._value,o=t._isComplete;o||(this._isComplete=!0,u&&r.prototype.next.call(this,e),r.prototype.complete.call(this))},n}(E),un=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var t=M(r);return U(r,t)},Pn=function(r,n){var t=N(r)?r:function(){return r},u=function(e){return e.error(t())};return new T(n?function(e){return n.schedule(u,0,e)}:u)},function(r){r.NEXT="N",r.ERROR="E",r.COMPLETE="C"}(On||(On={})),q=function(){function r(n,t,u){this.kind=n,this.value=t,this.error=u,this.hasValue=n==="N"}return r.prototype.observe=function(n){return In(this,n)},r.prototype.do=function(n,t,u){var e=this,o=e.kind,i=e.value,c=e.error;return o==="N"?n==null?void 0:n(i):o==="E"?t==null?void 0:t(c):u==null?void 0:u()},r.prototype.accept=function(n,t,u){var e;return N((e=n)===null||e===void 0?void 0:e.next)?this.observe(n):this.do(n,t,u)},r.prototype.toObservable=function(){var n=this,t=n.kind,u=n.value,e=n.error,o=t==="N"?un(u):t==="E"?Pn(function(){return e}):t==="C"?K:0;if(!o)throw new TypeError("Unexpected notification kind "+t);return o},r.createNext=function(n){return new r("N",n)},r.createError=function(n){return new r("E",void 0,n)},r.createComplete=function(){return r.completeNotification},r.completeNotification=new r("C"),r}();function In(r,n){var t,u,e,o=r,i=o.kind,c=o.value,a=o.error;if(typeof i!="string")throw new TypeError('Invalid notification, missing "kind"');i==="N"?(t=n.next)===null||t===void 0||t.call(n,c):i==="E"?(u=n.error)===null||u===void 0||u.call(n,a):(e=n.complete)===null||e===void 0||e.call(n)}tn=W(function(r){return function(){r(this),this.name="ArgumentOutOfRangeError",this.message="argument out of range"}}),Tn=W(function(r){return function(n){r(this),this.name="NotFoundError",this.message=n}}),hn=W(function(r){return function(n){r(this),this.name="SequenceError",this.message=n}});function cn(r){return r instanceof Date&&!isNaN(r)}pn=W(function(r){return function(n){n===void 0&&(n=null),r(this),this.message="Timeout has occurred",this.name="TimeoutError",this.info=n}}),gn=function(r,n){var t=cn(r)?{first:r}:typeof r=="number"?{each:r}:r,u=t.first,e=t.each,o=t.with,i=o===void 0?dt:o,c=t.scheduler,a=c===void 0?n??k:c,s=t.meta,f=s===void 0?null:s;if(u==null&&e==null)throw new TypeError("No timeout provided.");return b(function(v,p){var y,d,g=null,h=0,m=function(x){d=I(p,a,function(){try{y.unsubscribe(),w(i({meta:f,lastValue:g,seen:h})).subscribe(p)}catch(S){p.error(S)}},x)};y=v.subscribe(l(p,function(x){d==null||d.unsubscribe(),h++,p.next(g=x),e>0&&m(e)},void 0,void 0,function(){d!=null&&d.closed||(d==null||d.unsubscribe()),g=null})),!h&&m(u!=null?typeof u=="number"?u:+u-a.now():e)})};function dt(r){throw new pn(r)}var mt=Array.isArray,gt=Object.getPrototypeOf,yt=Object.prototype,wt=Object.keys;dn=function(r){if(r.length===1){var n=r[0];if(mt(n))return{args:n,keys:null};if(xt(n)){var t=wt(n);return{args:t.map(function(u){return n[u]}),keys:t}}}return{args:r,keys:null}};function xt(r){return r&&typeof r=="object"&&gt(r)===yt}kn=function(r,n){return r.reduce(function(t,u,e){return t[u]=n[e],t},{})},Sn=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var t=M(r),u=an(r),e=dn(r),o=e.args,i=e.keys;if(o.length===0)return U([],t);var c=new T(Ln(o,t,i?function(a){return kn(i,a)}:O));return u?c.pipe(sn(u)):c};function Ln(r,n,t){return t===void 0&&(t=O),function(u){Rn(n,function(){for(var e=r.length,o=new Array(e),i=e,c=e,a=function(f){Rn(n,function(){var v=U(r[f],n),p=!1;v.subscribe(l(u,function(y){o[f]=y,p||(p=!0,c--),c||u.next(t(o.slice()))},function(){--i||u.complete()}))},u)},s=0;s<e;s++)a(s)},u)}}function Rn(r,n,t){r?I(t,r,n):n()}F=function(r,n,t){r===void 0&&(r=0),t===void 0&&(t=Wn);var u=-1;return n!=null&&(At(n)?t=n:u=n),new T(function(e){var o=cn(r)?+r-t.now():r;o<0&&(o=0);var i=0;return t.schedule(function(){e.closed||(e.next(i++),0<=u?this.schedule(void 0,u):e.complete())},o)})},Vn=function(r,n){return r===void 0&&(r=0),n===void 0&&(n=k),r<0&&(r=0),F(r,r,n)};var _t=Array.isArray;V=function(r){return r.length===1&&_t(r[0])?r[0]:r},An=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var t=V(r);return new T(function(u){var e=0,o=function(){if(e<t.length){var i=void 0;try{i=w(t[e++])}catch{o();return}var c=new Qn(u,void 0,_,_);i.subscribe(c),c.add(o)}else u.complete()};o()})},st=function(r,n){return function(t,u){return!r.call(n,t,u)}},vt=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return r=V(r),r.length===1?w(r[0]):new T(Un(r))};function Un(r){return function(n){for(var t=[],u=function(o){t.push(w(r[o]).subscribe(l(n,function(i){if(t){for(var c=0;c<t.length;c++)c!==o&&t[c].unsubscribe();t=null}n.next(i)})))},e=0;t&&!n.closed&&e<r.length;e++)u(e)}}on=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var t=an(r),u=V(r);return u.length?new T(function(e){var o=u.map(function(){return[]}),i=u.map(function(){return!1});e.add(function(){o=i=null});for(var c=function(s){w(u[s]).subscribe(l(e,function(f){if(o[s].push(f),o.every(function(p){return p.length})){var v=o.map(function(p){return p.shift()});e.next(t?t.apply(void 0,j([],C(v))):v),o.some(function(p,y){return!p.length&&i[y]})&&e.complete()}},function(){i[s]=!0,!o[s].length&&e.complete()}))},a=0;!e.closed&&a<u.length;a++)c(a);return function(){o=i=null}}):K},Fn=function(r){return b(function(n,t){var u=!1,e=null,o=null,i=!1,c=function(){if(o==null||o.unsubscribe(),o=null,u){u=!1;var s=e;e=null,t.next(s)}i&&t.complete()},a=function(){o=null,i&&t.complete()};n.subscribe(l(t,function(s){u=!0,e=s,o||w(r(s)).subscribe(o=l(t,c,a))},function(){i=!0,(!u||!o||o.closed)&&t.complete()}))})},it=function(r,n){return n===void 0&&(n=k),Fn(function(){return F(r,n)})},ct=function(r){return b(function(n,t){var u=[];return n.subscribe(l(t,function(e){return u.push(e)},function(){t.next(u),t.complete()})),w(r).subscribe(l(t,function(){var e=u;u=[],t.next(e)},_)),function(){u=null}})},at=function(r,n){return n===void 0&&(n=null),n=n??r,b(function(t,u){var e=[],o=0;t.subscribe(l(u,function(i){var c,a,s,f,v=null;o++%n===0&&e.push([]);try{for(var p=A(e),y=p.next();!y.done;y=p.next()){var d=y.value;d.push(i),r<=d.length&&(v=v??[],v.push(d))}}catch(m){c={error:m}}finally{try{y&&!y.done&&(a=p.return)&&a.call(p)}finally{if(c)throw c.error}}if(v)try{for(var g=A(v),h=g.next();!h.done;h=g.next()){var d=h.value;B(e,d),u.next(d)}}catch(m){s={error:m}}finally{try{h&&!h.done&&(f=g.return)&&f.call(g)}finally{if(s)throw s.error}}},function(){var i,c;try{for(var a=A(e),s=a.next();!s.done;s=a.next()){var f=s.value;u.next(f)}}catch(v){i={error:v}}finally{try{s&&!s.done&&(c=a.return)&&c.call(a)}finally{if(i)throw i.error}}u.complete()},void 0,function(){e=null}))})},ft=function(r){for(var n,t,u=[],e=1;e<arguments.length;e++)u[e-1]=arguments[e];var o=(n=M(u))!==null&&n!==void 0?n:k,i=(t=u[0])!==null&&t!==void 0?t:null,c=u[1]||1/0;return b(function(a,s){var f=[],v=!1,p=function(g){var h=g.buffer,m=g.subs;m.unsubscribe(),B(f,g),s.next(h),v&&y()},y=function(){if(f){var g=new z;s.add(g);var h=[],m={buffer:h,subs:g};f.push(m),I(g,o,function(){return p(m)},r)}};i!==null&&i>=0?I(s,o,y,i,!0):v=!0,y();var d=l(s,function(g){var h,m,x=f.slice();try{for(var S=A(x),R=S.next();!R.done;R=S.next()){var Gn=R.value,Kn=Gn.buffer;Kn.push(g),c<=Kn.length&&p(Gn)}}catch(kt){h={error:kt}}finally{try{R&&!R.done&&(m=S.return)&&m.call(S)}finally{if(h)throw h.error}}},function(){for(;f!=null&&f.length;)s.next(f.shift().buffer);d==null||d.unsubscribe(),s.complete(),s.unsubscribe()},void 0,function(){return f=null});a.subscribe(d)})},lt=function(r,n){return b(function(t,u){var e=[];w(r).subscribe(l(u,function(o){var i=[];e.push(i);var c=new z,a=function(){B(e,i),u.next(i),c.unsubscribe()};c.add(w(n(o)).subscribe(l(u,a,_)))},_)),t.subscribe(l(u,function(o){var i,c;try{for(var a=A(e),s=a.next();!s.done;s=a.next()){var f=s.value;f.push(o)}}catch(v){i={error:v}}finally{try{s&&!s.done&&(c=a.return)&&c.call(a)}finally{if(i)throw i.error}}},function(){for(;e.length>0;)u.next(e.shift());u.complete()}))})},bt=function(r){return b(function(n,t){var u=null,e=null,o=function(){e==null||e.unsubscribe();var i=u;u=[],i&&t.next(i),w(r()).subscribe(e=l(t,o,_))};o(),n.subscribe(l(t,function(i){return u==null?void 0:u.push(i)},function(){u&&t.next(u),t.complete()},void 0,function(){return u=e=null}))})},zn=function(r){return b(function(n,t){var u=null,e=!1,o;u=n.subscribe(l(t,void 0,void 0,function(i){o=w(r(i,zn(r)(n))),u?(u.unsubscribe(),u=null,o.subscribe(t)):e=!0})),e&&(u.unsubscribe(),u=null,o.subscribe(t))})};function Bn(r,n,t,u,e){return function(o,i){var c=t,a=n,s=0;o.subscribe(l(i,function(f){var v=s++;a=c?r(a,f,v):(c=!0,f),u&&i.next(a)},e&&function(){c&&i.next(a),i.complete()}))}}L=function(r,n){return b(Bn(r,n,arguments.length>=2,!1,!0))};var Et=function(r,n){return r.push(n),r};yn=function(){return b(function(r,n){L(Et,[])(r).subscribe(n)})};function Hn(r,n){return Yn(yn(),P(function(t){return r(t)}),n?sn(n):O)}Mn=function(r){return Hn(Sn,r)},ht=Mn,rn=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var t=an(r);return t?Yn(rn.apply(void 0,j([],C(r))),sn(t)):b(function(u,e){Ln(j([u],C(V(r))))(e)})},pt=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return rn.apply(void 0,j([],C(r)))},en=function(r,n){return N(n)?P(r,n,1):P(r,1)},nr=function(r,n){return N(n)?en(function(){return r},n):en(function(){return r})},wn=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var t=M(r);return b(function(u,e){Vt()(U(j([u],C(r)),t)).subscribe(e)})},rr=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return wn.apply(void 0,j([],C(r)))};function Nt(r){return new T(function(n){return r.subscribe(n)})}var jt={connector:function(){return new E}};Z=function(r,n){n===void 0&&(n=jt);var t=n.connector;return b(function(u,e){var o=t();w(r(Nt(o))).subscribe(e),e.add(u.subscribe(o))})},tr=function(r){return L(function(n,t,u){return!r||r(t,u)?n+1:n},0)},ur=function(r){return b(function(n,t){var u=!1,e=null,o=null,i=function(){if(o==null||o.unsubscribe(),o=null,u){u=!1;var c=e;e=null,t.next(c)}};n.subscribe(l(t,function(c){o==null||o.unsubscribe(),u=!0,e=c,o=l(t,i,_),w(r(c)).subscribe(o)},function(){i(),t.complete()},void 0,function(){e=o=null}))})},J=function(r){return b(function(n,t){var u=!1;n.subscribe(l(t,function(e){u=!0,t.next(e)},function(){u||t.next(r),t.complete()}))})},ln=function(){return b(function(r,n){r.subscribe(l(n,_))})},$=function(r,n){return n?function(t){return Zn(n.pipe(X(1),ln()),t.pipe($(r)))}:P(function(t,u){return w(r(t,u)).pipe(X(1),Ft(t))})},er=function(r,n){n===void 0&&(n=k);var t=F(r,n);return $(function(){return t})},or=function(){return b(function(r,n){r.subscribe(l(n,function(t){return In(t,n)}))})},ir=function(r,n){return b(function(t,u){var e=new Set;t.subscribe(l(u,function(o){var i=r?r(o):o;e.has(i)||(e.add(i),u.next(o))})),n&&w(n).subscribe(l(u,function(){return e.clear()},_))})},G=function(r){return r===void 0&&(r=Ct),b(function(n,t){var u=!1;n.subscribe(l(t,function(e){u=!0,t.next(e)},function(){return u?t.complete():t.error(r())}))})};function Ct(){return new Q}cr=function(r,n){if(r<0)throw new tn;var t=arguments.length>=2;return function(u){return u.pipe(fn(function(e,o){return o===r}),X(1),t?J(n):G(function(){return new tn}))}},ar=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return function(t){return Zn(t,un.apply(void 0,j([],C(r))))}},sr=function(r,n){return b(function(t,u){var e=0;t.subscribe(l(u,function(o){r.call(n,o,e++,t)||(u.next(!1),u.complete())},function(){u.next(!0),u.complete()}))})},D=function(r,n){return n?function(t){return t.pipe(D(function(u,e){return w(r(u,e)).pipe($n(function(o,i){return n(u,o,e,i)}))}))}:b(function(t,u){var e=0,o=null,i=!1;t.subscribe(l(u,function(c){o||(o=l(u,void 0,function(){o=null,i&&u.complete()}),w(r(c,e++)).subscribe(o))},function(){i=!0,!o&&u.complete()}))})},bn=function(){return D(O)},fr=bn,lr=function(r,n,t){return n===void 0&&(n=1/0),n=(n||0)<1?1/0:n,b(function(u,e){return Dn(u,e,r,n,void 0,!0,t)})},vr=function(r){return b(function(n,t){try{n.subscribe(t)}finally{t.add(r)}})},br=function(r,n){return b(Jn(r,n,"value"))};function Jn(r,n,t){var u=t==="index";return function(e,o){var i=0;e.subscribe(l(o,function(c){var a=i++;r.call(n,c,a,e)&&(o.next(u?a:c),o.complete())},function(){o.next(u?-1:void 0),o.complete()}))}}hr=function(r,n){return b(Jn(r,n,"index"))},pr=function(r,n){var t=arguments.length>=2;return function(u){return u.pipe(r?fn(function(e,o){return r(e,o,u)}):O,X(1),t?J(n):G(function(){return new Q}))}},dr=function(r,n,t,u){return b(function(e,o){var i;!n||typeof n=="function"?i=n:(t=n.duration,i=n.element,u=n.connector);var c=new Map,a=function(d){c.forEach(d),d(o)},s=function(d){return a(function(g){return g.error(d)})},f=0,v=!1,p=new Qn(o,function(d){try{var g=r(d),h=c.get(g);if(!h){c.set(g,h=u?u():new E);var m=y(g,h);if(o.next(m),t){var x=l(h,function(){h.complete(),x==null||x.unsubscribe()},void 0,void 0,function(){return c.delete(g)});p.add(w(t(m)).subscribe(x))}}h.next(i?i(d):d)}catch(S){s(S)}},function(){return a(function(d){return d.complete()})},s,function(){return c.clear()},function(){return v=!0,f===0});e.subscribe(p);function y(d,g){var h=new T(function(m){f++;var x=g.subscribe(m);return function(){x.unsubscribe(),--f===0&&v&&p.unsubscribe()}});return h.key=d,h}})},mr=function(){return b(function(r,n){r.subscribe(l(n,function(){n.next(!1),n.complete()},function(){n.next(!0),n.complete()}))})},Cn=function(r){return r<=0?function(){return K}:b(function(n,t){var u=[];n.subscribe(l(t,function(e){u.push(e),r<u.length&&u.shift()},function(){var e,o;try{for(var i=A(u),c=i.next();!c.done;c=i.next()){var a=c.value;t.next(a)}}catch(s){e={error:s}}finally{try{c&&!c.done&&(o=i.return)&&o.call(i)}finally{if(e)throw e.error}}t.complete()},void 0,function(){u=null}))})},gr=function(r,n){var t=arguments.length>=2;return function(u){return u.pipe(r?fn(function(e,o){return r(e,o,u)}):O,Cn(1),t?J(n):G(function(){return new Q}))}},yr=function(){return b(function(r,n){r.subscribe(l(n,function(t){n.next(q.createNext(t))},function(){n.next(q.createComplete()),n.complete()},function(t){n.next(q.createError(t)),n.complete()}))})},wr=function(r){return L(N(r)?function(n,t){return r(n,t)>0?n:t}:function(n,t){return n>t?n:t})},xr=P,_r=function(r,n,t){return t===void 0&&(t=1/0),N(n)?P(function(){return r},n,t):(typeof n=="number"&&(t=n),P(function(){return r},t))},Er=function(r,n,t){return t===void 0&&(t=1/0),b(function(u,e){var o=n;return Dn(u,e,function(i,c){return r(o,i,c)},t,function(i){o=i},!1,void 0,function(){return o=null})})},xn=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var t=M(r),u=Pt(r,1/0);return r=V(r),b(function(e,o){zt(u)(U(j([e],C(r)),t)).subscribe(o)})},Nr=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return xn.apply(void 0,j([],C(r)))},jr=function(r){return L(N(r)?function(n,t){return r(n,t)<0?n:t}:function(n,t){return n<t?n:t})},nn=function(r,n){var t=N(r)?r:function(){return r};return N(n)?Z(n,{connector:t}):function(u){return new H(u,t)}},En=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var t=V(r);return function(u){return An.apply(void 0,j([u],C(t)))}},Lr=En,Rr=function(){return b(function(r,n){var t,u=!1;r.subscribe(l(n,function(e){var o=t;t=e,u&&n.next([o,e]),u=!0}))})},Ur=function(r){return r?function(n){return Z(r)(n)}:function(n){return nn(new E)(n)}},Br=function(r){return function(n){var t=new Mt(r);return new H(n,function(){return t})}},Hr=function(){return function(r){var n=new vn;return new H(r,function(){return n})}},Jr=function(r,n,t,u){t&&!N(t)&&(u=t);var e=N(t)?t:void 0;return function(o){return nn(new It(r,n,u),e)(o)}},qr=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return r.length?b(function(t,u){Un(j([t],C(r)))(u)}):O},Gr=function(r){var n,t=1/0,u;return r!=null&&(typeof r=="object"?(n=r.count,t=n===void 0?1/0:n,u=r.delay):t=r),t<=0?function(){return K}:b(function(e,o){var i=0,c,a=function(){if(c==null||c.unsubscribe(),c=null,u!=null){var f=typeof u=="number"?F(u):w(u(i)),v=l(o,function(){v.unsubscribe(),s()});f.subscribe(v)}else s()},s=function(){var f=!1;c=e.subscribe(l(o,void 0,function(){++i<t?c?a():f=!0:o.complete()})),f&&a()};s()})},Kr=function(r){return b(function(n,t){var u,e=!1,o,i=!1,c=!1,a=function(){return c&&i&&(t.complete(),!0)},s=function(){return o||(o=new E,w(r(o)).subscribe(l(t,function(){u?f():e=!0},function(){i=!0,a()}))),o},f=function(){c=!1,u=n.subscribe(l(t,void 0,function(){c=!0,!a()&&s().next()})),e&&(u.unsubscribe(),u=null,e=!1,f())};f()})},Wr=function(r){r===void 0&&(r=1/0);var n;r&&typeof r=="object"?n=r:n={count:r};var t=n.count,u=t===void 0?1/0:t,e=n.delay,o=n.resetOnSuccess,i=o===void 0?!1:o;return u<=0?O:b(function(c,a){var s=0,f,v=function(){var p=!1;f=c.subscribe(l(a,function(y){i&&(s=0),a.next(y)},void 0,function(y){if(s++<u){var d=function(){f?(f.unsubscribe(),f=null,v()):p=!0};if(e!=null){var g=typeof e=="number"?F(e):w(e(y,s)),h=l(a,function(){h.unsubscribe(),d()},function(){a.complete()});g.subscribe(h)}else d()}else a.error(y)})),p&&(f.unsubscribe(),f=null,v())};v()})},Xr=function(r){return b(function(n,t){var u,e=!1,o,i=function(){u=n.subscribe(l(t,void 0,void 0,function(c){o||(o=new E,w(r(o)).subscribe(l(t,function(){return u?i():e=!0}))),o&&o.next(c)})),e&&(u.unsubscribe(),u=null,e=!1,i())};i()})},jn=function(r){return b(function(n,t){var u=!1,e=null;n.subscribe(l(t,function(o){u=!0,e=o})),w(r).subscribe(l(t,function(){if(u){u=!1;var o=e;e=null,t.next(o)}},_))})},Qr=function(r,n){return n===void 0&&(n=k),jn(Vn(r,n))},Yr=function(r,n){return b(Bn(r,n,arguments.length>=2,!0))},Zr=function(r,n){return n===void 0&&(n=function(t,u){return t===u}),b(function(t,u){var e=qn(),o=qn(),i=function(a){u.next(a),u.complete()},c=function(a,s){var f=l(u,function(v){var p=s.buffer,y=s.complete;p.length===0?y?i(!1):a.buffer.push(v):!n(v,p.shift())&&i(!1)},function(){a.complete=!0;var v=s.complete,p=s.buffer;v&&i(p.length===0),f==null||f.unsubscribe()});return f};t.subscribe(c(e,o)),w(r).subscribe(c(o,e))})};function qn(){return{buffer:[],complete:!1}}$r=function(r){return b(function(n,t){var u=!1,e,o=!1,i=0;n.subscribe(l(t,function(c){o=!0,(!r||r(c,i++,n))&&(u&&t.error(new hn("Too many matching values")),u=!0,e=c)},function(){u?(t.next(e),t.complete()):t.error(o?new Tn("No matching values"):new Q)}))})},Dr=function(r){return r<=0?O:b(function(n,t){var u=new Array(r),e=0;return n.subscribe(l(t,function(o){var i=e++;if(i<r)u[i]=o;else{var c=i%r,a=u[c];u[c]=o,t.next(a)}})),function(){u=null}})},nt=function(r){return b(function(n,t){var u=!1,e=l(t,function(){e==null||e.unsubscribe(),u=!0},_);w(r).subscribe(e),n.subscribe(l(t,function(o){return u&&t.next(o)}))})},rt=function(r){return b(function(n,t){var u=!1,e=0;n.subscribe(l(t,function(o){return(u||(u=!r(o,e++)))&&t.next(o)}))})},tt=function(){return Y(O)},ut=function(r,n){return N(n)?Y(function(){return r},n):Y(function(){return r})},et=function(r,n){return b(function(t,u){var e=n;return Y(function(o,i){return r(e,o,i)},function(o,i){return e=i,i})(t).subscribe(u),function(){e=null}})},ot=function(r,n){return n===void 0&&(n=!1),b(function(t,u){var e=0;t.subscribe(l(u,function(o){var i=r(o,e++);(i||n)&&u.next(o),!i&&u.complete()}))})},Cr=function(r,n,t){var u=N(r)||n||t?{next:r,error:n,complete:t}:r;return u?b(function(e,o){var i;(i=u.subscribe)===null||i===void 0||i.call(u);var c=!0;e.subscribe(l(o,function(a){var s;(s=u.next)===null||s===void 0||s.call(u,a),o.next(a)},function(){var a;c=!1,(a=u.complete)===null||a===void 0||a.call(u),o.complete()},function(a){var s;c=!1,(s=u.error)===null||s===void 0||s.call(u,a),o.error(a)},function(){var a,s;c&&((a=u.unsubscribe)===null||a===void 0||a.call(u)),(s=u.finalize)===null||s===void 0||s.call(u)}))}):O},mn=function(r,n){return b(function(t,u){var e=n??{},o=e.leading,i=o===void 0?!0:o,c=e.trailing,a=c===void 0?!1:c,s=!1,f=null,v=null,p=!1,y=function(){v==null||v.unsubscribe(),v=null,a&&(h(),p&&u.complete())},d=function(){v=null,p&&u.complete()},g=function(m){return v=w(r(m)).subscribe(l(u,y,d))},h=function(){if(s){s=!1;var m=f;f=null,u.next(m),!p&&g(m)}};t.subscribe(l(u,function(m){s=!0,f=m,!(v&&!v.closed)&&(i?h():g(m))},function(){p=!0,!(a&&s&&v&&!v.closed)&&u.complete()}))})},Or=function(r,n,t){n===void 0&&(n=k);var u=F(r,n);return mn(function(){return u},t)},kr=function(r){return r===void 0&&(r=k),b(function(n,t){var u=r.now();n.subscribe(l(t,function(e){var o=r.now(),i=o-u;u=o,t.next(new Ot(e,i))}))})};var Ot=function(){function r(n,t){this.value=n,this.interval=t}return r}();Tr=function(r,n,t){var u,e,o;if(t=t??Wn,cn(r)?u=r:typeof r=="number"&&(e=r),n)o=function(){return n};else throw new TypeError("No observable provided to switch to");if(u==null&&e==null)throw new TypeError("No timeout provided.");return gn({first:u,each:e,scheduler:t,with:o})},Sr=function(r){return r===void 0&&(r=Lt),$n(function(n){return{value:n,timestamp:r.now()}})},Ar=function(r){return b(function(n,t){var u=new E;t.next(u.asObservable());var e=function(o){u.error(o),t.error(o)};return n.subscribe(l(t,function(o){return u==null?void 0:u.next(o)},function(){u.complete(),t.complete()},e)),w(r).subscribe(l(t,function(){u.complete(),t.next(u=new E)},_,e)),function(){u==null||u.unsubscribe(),u=null}})},Vr=function(r,n){n===void 0&&(n=0);var t=n>0?n:r;return b(function(u,e){var o=[new E],i=[],c=0;e.next(o[0].asObservable()),u.subscribe(l(e,function(a){var s,f;try{for(var v=A(o),p=v.next();!p.done;p=v.next()){var y=p.value;y.next(a)}}catch(h){s={error:h}}finally{try{p&&!p.done&&(f=v.return)&&f.call(v)}finally{if(s)throw s.error}}var d=c-r+1;if(d>=0&&d%t===0&&o.shift().complete(),++c%t===0){var g=new E;o.push(g),e.next(g.asObservable())}},function(){for(;o.length>0;)o.shift().complete();e.complete()},function(a){for(;o.length>0;)o.shift().error(a);e.error(a)},function(){i=null,o=null}))})},Fr=function(r){for(var n,t,u=[],e=1;e<arguments.length;e++)u[e-1]=arguments[e];var o=(n=M(u))!==null&&n!==void 0?n:k,i=(t=u[0])!==null&&t!==void 0?t:null,c=u[1]||1/0;return b(function(a,s){var f=[],v=!1,p=function(h){var m=h.window,x=h.subs;m.complete(),x.unsubscribe(),B(f,h),v&&y()},y=function(){if(f){var h=new z;s.add(h);var m=new E,x={window:m,subs:h,seen:0};f.push(x),s.next(m.asObservable()),I(h,o,function(){return p(x)},r)}};i!==null&&i>=0?I(s,o,y,i,!0):v=!0,y();var d=function(h){return f.slice().forEach(h)},g=function(h){d(function(m){var x=m.window;return h(x)}),h(s),s.unsubscribe()};return a.subscribe(l(s,function(h){d(function(m){m.window.next(h),c<=++m.seen&&p(m)})},function(){return g(function(h){return h.complete()})},function(h){return g(function(m){return m.error(h)})})),function(){f=null}})},Pr=function(r,n){return b(function(t,u){var e=[],o=function(i){for(;0<e.length;)e.shift().error(i);u.error(i)};w(r).subscribe(l(u,function(i){var c=new E;e.push(c);var a=new z,s=function(){B(e,c),c.complete(),a.unsubscribe()},f;try{f=w(n(i))}catch(v){o(v);return}u.next(c.asObservable()),a.add(f.subscribe(l(u,s,_,o)))},_)),t.subscribe(l(u,function(i){var c,a,s=e.slice();try{for(var f=A(s),v=f.next();!v.done;v=f.next()){var p=v.value;p.next(i)}}catch(y){c={error:y}}finally{try{v&&!v.done&&(a=f.return)&&a.call(f)}finally{if(c)throw c.error}}},function(){for(;0<e.length;)e.shift().complete();u.complete()},o,function(){for(;0<e.length;)e.shift().unsubscribe()}))})},zr=function(r){return b(function(n,t){var u,e,o=function(c){u.error(c),t.error(c)},i=function(){e==null||e.unsubscribe(),u==null||u.complete(),u=new E,t.next(u.asObservable());var c;try{c=w(r())}catch(a){o(a);return}c.subscribe(e=l(t,i,i,o))};i(),n.subscribe(l(t,function(c){return u.next(c)},function(){u.complete(),t.complete()},o,function(){e==null||e.unsubscribe(),u=null}))})},Mr=function(r){return Hn(on,r)},_n=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return b(function(t,u){on.apply(void 0,j([t],C(r))).subscribe(u)})},Ir=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return _n.apply(void 0,j([],C(r)))}});export{ln as $,vn as A,nr as B,H as C,rr as D,Z as E,tr as F,ur as G,J as H,er as I,$ as J,or as K,ir as L,cr as M,q as N,ar as O,sr as P,fr as Q,bn as R,hn as S,pn as T,D as U,lr as V,vr as W,br as X,hr as Y,pr as Z,dr as _,Ut as __tla,dn as a,mr as a0,gr as a1,yr as a2,wr as a3,xr as a4,_r as a5,Er as a6,Nr as a7,jr as a8,nn as a9,Cr as aA,mn as aB,Or as aC,G as aD,kr as aE,gn as aF,Tr as aG,Sr as aH,yn as aI,Ar as aJ,Vr as aK,Fr as aL,Pr as aM,zr as aN,Mr as aO,Ir as aP,V as aQ,rn as aR,wn as aS,xn as aT,Lr as aU,_n as aV,En as aa,Rr as ab,Ur as ac,Br as ad,Hr as ae,Jr as af,qr as ag,L as ah,Gr as ai,Kr as aj,Wr as ak,Xr as al,Nn as am,jn as an,Qr as ao,Yr as ap,Zr as aq,$r as ar,Dr as as,nt as at,rt as au,tt as av,ut as aw,et as ax,Cn as ay,ot as az,On as b,kn as c,tn as d,Tn as e,Sn as f,An as g,F as h,Vn as i,Fn as j,it as k,ct as l,at as m,st as n,un as o,ft as p,lt as q,vt as r,bt as s,Pn as t,zn as u,ht as v,Mn as w,pt as x,en as y,on as z};
