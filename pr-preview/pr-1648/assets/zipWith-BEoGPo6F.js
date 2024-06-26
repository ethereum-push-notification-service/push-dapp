import{c as k,b as Kn,__tla as Tt}from"./skip-BOoZSwC7.js";import{gD as b,gE as l,gx as Qn,ig as St,gy as z,hF as T,hN as E,gr as M,gw as L,hG as N,gt as W,ih as K,ii as P,gu as w,hO as an,hJ as sn,hR as j,hI as At,ij as Xn,hS as _,gz as C,gA as O,ik as A,gB as q,hW as Yn,i8 as R,i4 as Ft,h_ as Zn,ic as Q,i7 as Vt,hH as X,gF as fn,i6 as $n,il as Dn,gs as Rt,gv as zt,aa as Mt,hU as Pt,ib as Y,gC as It,__tla as Ut}from"./index-OrdTq4PU.js";let ln,vn,nr,B,rr,Z,tr,ur,G,er,$,ir,or,cr,H,ar,sr,fr,bn,pn,hn,D,lr,vr,br,pr,hr,dr,dn,mr,gr,yr,wr,xr,_r,Er,Nr,Cr,nn,Or,mn,jr,J,kr,gn,Tr,Sr,yn,Ar,Fr,Vr,Rr,zr,Mr,Pr,F,rn,wn,xn,Ir,_n,En,Ur,Lr,qr,Br,Gr,Hr,I,Jr,Wr,Kr,Qr,Nn,Cn,Xr,Yr,Zr,$r,Dr,nt,rt,tt,ut,et,On,it,jn,kn,tn,Tn,Sn,An,V,Fn,Vn,ot,ct,at,st,un,ft,lt,vt,bt,Rn,zn,pt,Mn,ht,en,on,Lt=Promise.all([(()=>{try{return Tt}catch{}})(),(()=>{try{return Ut}catch{}})()]).then(async()=>{Nn=function(){return b(function(r,n){var t=null;r._refCount++;var u=l(n,void 0,void 0,void 0,function(){if(!r||r._refCount<=0||0<--r._refCount){t=null;return}var e=r._connection,i=t;t=null,e&&(!i||e===i)&&e.unsubscribe(),n.unsubscribe()});r.subscribe(u),u.closed||(t=r.connect())})},B=function(r){Qn(n,r);function n(t,u){var e=r.call(this)||this;return e.source=t,e.subjectFactory=u,e._subject=null,e._refCount=0,e._connection=null,St(t)&&(e.lift=t.lift),e}return n.prototype._subscribe=function(t){return this.getSubject().subscribe(t)},n.prototype.getSubject=function(){var t=this._subject;return(!t||t.isStopped)&&(this._subject=this.subjectFactory()),this._subject},n.prototype._teardown=function(){this._refCount=0;var t=this._connection;this._subject=this._connection=null,t==null||t.unsubscribe()},n.prototype.connect=function(){var t=this,u=this._connection;if(!u){u=this._connection=new z;var e=this.getSubject();u.add(this.source.subscribe(l(e,void 0,function(){t._teardown(),e.complete()},function(i){t._teardown(),e.error(i)},function(){return t._teardown()}))),u.closed&&(this._connection=null,u=z.EMPTY)}return u},n.prototype.refCount=function(){return Nn()(this)},n}(T),vn=function(r){Qn(n,r);function n(){var t=r!==null&&r.apply(this,arguments)||this;return t._value=null,t._hasValue=!1,t._isComplete=!1,t}return n.prototype._checkFinalizedStatuses=function(t){var u=this,e=u.hasError,i=u._hasValue,o=u._value,c=u.thrownError,a=u.isStopped,s=u._isComplete;e?t.error(c):(a||s)&&(i&&t.next(o),t.complete())},n.prototype.next=function(t){this.isStopped||(this._value=t,this._hasValue=!0)},n.prototype.complete=function(){var t=this,u=t._hasValue,e=t._value,i=t._isComplete;i||(this._isComplete=!0,u&&r.prototype.next.call(this,e),r.prototype.complete.call(this))},n}(E),un=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var t=M(r);return L(r,t)},Rn=function(r,n){var t=N(r)?r:function(){return r},u=function(e){return e.error(t())};return new T(n?function(e){return n.schedule(u,0,e)}:u)},function(r){r.NEXT="N",r.ERROR="E",r.COMPLETE="C"}(jn||(jn={})),H=function(){function r(n,t,u){this.kind=n,this.value=t,this.error=u,this.hasValue=n==="N"}return r.prototype.observe=function(n){return Pn(this,n)},r.prototype.do=function(n,t,u){var e=this,i=e.kind,o=e.value,c=e.error;return i==="N"?n==null?void 0:n(o):i==="E"?t==null?void 0:t(c):u==null?void 0:u()},r.prototype.accept=function(n,t,u){var e;return N((e=n)===null||e===void 0?void 0:e.next)?this.observe(n):this.do(n,t,u)},r.prototype.toObservable=function(){var n=this,t=n.kind,u=n.value,e=n.error,i=t==="N"?un(u):t==="E"?Rn(function(){return e}):t==="C"?W:0;if(!i)throw new TypeError("Unexpected notification kind "+t);return i},r.createNext=function(n){return new r("N",n)},r.createError=function(n){return new r("E",void 0,n)},r.createComplete=function(){return r.completeNotification},r.completeNotification=new r("C"),r}();function Pn(r,n){var t,u,e,i=r,o=i.kind,c=i.value,a=i.error;if(typeof o!="string")throw new TypeError('Invalid notification, missing "kind"');o==="N"?(t=n.next)===null||t===void 0||t.call(n,c):o==="E"?(u=n.error)===null||u===void 0||u.call(n,a):(e=n.complete)===null||e===void 0||e.call(n)}tn=K(function(r){return function(){r(this),this.name="ArgumentOutOfRangeError",this.message="argument out of range"}}),Tn=K(function(r){return function(n){r(this),this.name="NotFoundError",this.message=n}}),pn=K(function(r){return function(n){r(this),this.name="SequenceError",this.message=n}});function cn(r){return r instanceof Date&&!isNaN(r)}hn=K(function(r){return function(n){n===void 0&&(n=null),r(this),this.message="Timeout has occurred",this.name="TimeoutError",this.info=n}}),gn=function(r,n){var t=cn(r)?{first:r}:typeof r=="number"?{each:r}:r,u=t.first,e=t.each,i=t.with,o=i===void 0?dt:i,c=t.scheduler,a=c===void 0?n??k:c,s=t.meta,f=s===void 0?null:s;if(u==null&&e==null)throw new TypeError("No timeout provided.");return b(function(v,h){var y,d,g=null,p=0,m=function(x){d=P(h,a,function(){try{y.unsubscribe(),w(o({meta:f,lastValue:g,seen:p})).subscribe(h)}catch(S){h.error(S)}},x)};y=v.subscribe(l(h,function(x){d==null||d.unsubscribe(),p++,h.next(g=x),e>0&&m(e)},void 0,void 0,function(){d!=null&&d.closed||(d==null||d.unsubscribe()),g=null})),!p&&m(u!=null?typeof u=="number"?u:+u-a.now():e)})};function dt(r){throw new hn(r)}var mt=Array.isArray,gt=Object.getPrototypeOf,yt=Object.prototype,wt=Object.keys;dn=function(r){if(r.length===1){var n=r[0];if(mt(n))return{args:n,keys:null};if(xt(n)){var t=wt(n);return{args:t.map(function(u){return n[u]}),keys:t}}}return{args:r,keys:null}};function xt(r){return r&&typeof r=="object"&&gt(r)===yt}kn=function(r,n){return r.reduce(function(t,u,e){return t[u]=n[e],t},{})},Sn=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var t=M(r),u=an(r),e=dn(r),i=e.args,o=e.keys;if(i.length===0)return L([],t);var c=new T(In(i,t,o?function(a){return kn(o,a)}:j));return u?c.pipe(sn(u)):c};function In(r,n,t){return t===void 0&&(t=j),function(u){Un(n,function(){for(var e=r.length,i=new Array(e),o=e,c=e,a=function(f){Un(n,function(){var v=L(r[f],n),h=!1;v.subscribe(l(u,function(y){i[f]=y,h||(h=!0,c--),c||u.next(t(i.slice()))},function(){--o||u.complete()}))},u)},s=0;s<e;s++)a(s)},u)}}function Un(r,n,t){r?P(t,r,n):n()}V=function(r,n,t){r===void 0&&(r=0),t===void 0&&(t=Kn);var u=-1;return n!=null&&(At(n)?t=n:u=n),new T(function(e){var i=cn(r)?+r-t.now():r;i<0&&(i=0);var o=0;return t.schedule(function(){e.closed||(e.next(o++),0<=u?this.schedule(void 0,u):e.complete())},i)})},Fn=function(r,n){return r===void 0&&(r=0),n===void 0&&(n=k),r<0&&(r=0),V(r,r,n)};var _t=Array.isArray;F=function(r){return r.length===1&&_t(r[0])?r[0]:r},An=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var t=F(r);return new T(function(u){var e=0,i=function(){if(e<t.length){var o=void 0;try{o=w(t[e++])}catch{i();return}var c=new Xn(u,void 0,_,_);o.subscribe(c),c.add(i)}else u.complete()};i()})},st=function(r,n){return function(t,u){return!r.call(n,t,u)}},vt=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return r=F(r),r.length===1?w(r[0]):new T(Ln(r))};function Ln(r){return function(n){for(var t=[],u=function(i){t.push(w(r[i]).subscribe(l(n,function(o){if(t){for(var c=0;c<t.length;c++)c!==i&&t[c].unsubscribe();t=null}n.next(o)})))},e=0;t&&!n.closed&&e<r.length;e++)u(e)}}on=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var t=an(r),u=F(r);return u.length?new T(function(e){var i=u.map(function(){return[]}),o=u.map(function(){return!1});e.add(function(){i=o=null});for(var c=function(s){w(u[s]).subscribe(l(e,function(f){if(i[s].push(f),i.every(function(h){return h.length})){var v=i.map(function(h){return h.shift()});e.next(t?t.apply(void 0,C([],O(v))):v),i.some(function(h,y){return!h.length&&o[y]})&&e.complete()}},function(){o[s]=!0,!i[s].length&&e.complete()}))},a=0;!e.closed&&a<u.length;a++)c(a);return function(){i=o=null}}):W},Vn=function(r){return b(function(n,t){var u=!1,e=null,i=null,o=!1,c=function(){if(i==null||i.unsubscribe(),i=null,u){u=!1;var s=e;e=null,t.next(s)}o&&t.complete()},a=function(){i=null,o&&t.complete()};n.subscribe(l(t,function(s){u=!0,e=s,i||w(r(s)).subscribe(i=l(t,c,a))},function(){o=!0,(!u||!i||i.closed)&&t.complete()}))})},ot=function(r,n){return n===void 0&&(n=k),Vn(function(){return V(r,n)})},ct=function(r){return b(function(n,t){var u=[];return n.subscribe(l(t,function(e){return u.push(e)},function(){t.next(u),t.complete()})),w(r).subscribe(l(t,function(){var e=u;u=[],t.next(e)},_)),function(){u=null}})},at=function(r,n){return n===void 0&&(n=null),n=n??r,b(function(t,u){var e=[],i=0;t.subscribe(l(u,function(o){var c,a,s,f,v=null;i++%n===0&&e.push([]);try{for(var h=A(e),y=h.next();!y.done;y=h.next()){var d=y.value;d.push(o),r<=d.length&&(v=v??[],v.push(d))}}catch(m){c={error:m}}finally{try{y&&!y.done&&(a=h.return)&&a.call(h)}finally{if(c)throw c.error}}if(v)try{for(var g=A(v),p=g.next();!p.done;p=g.next()){var d=p.value;q(e,d),u.next(d)}}catch(m){s={error:m}}finally{try{p&&!p.done&&(f=g.return)&&f.call(g)}finally{if(s)throw s.error}}},function(){var o,c;try{for(var a=A(e),s=a.next();!s.done;s=a.next()){var f=s.value;u.next(f)}}catch(v){o={error:v}}finally{try{s&&!s.done&&(c=a.return)&&c.call(a)}finally{if(o)throw o.error}}u.complete()},void 0,function(){e=null}))})},ft=function(r){for(var n,t,u=[],e=1;e<arguments.length;e++)u[e-1]=arguments[e];var i=(n=M(u))!==null&&n!==void 0?n:k,o=(t=u[0])!==null&&t!==void 0?t:null,c=u[1]||1/0;return b(function(a,s){var f=[],v=!1,h=function(g){var p=g.buffer,m=g.subs;m.unsubscribe(),q(f,g),s.next(p),v&&y()},y=function(){if(f){var g=new z;s.add(g);var p=[],m={buffer:p,subs:g};f.push(m),P(g,i,function(){return h(m)},r)}};o!==null&&o>=0?P(s,i,y,o,!0):v=!0,y();var d=l(s,function(g){var p,m,x=f.slice();try{for(var S=A(x),U=S.next();!U.done;U=S.next()){var Jn=U.value,Wn=Jn.buffer;Wn.push(g),c<=Wn.length&&h(Jn)}}catch(kt){p={error:kt}}finally{try{U&&!U.done&&(m=S.return)&&m.call(S)}finally{if(p)throw p.error}}},function(){for(;f!=null&&f.length;)s.next(f.shift().buffer);d==null||d.unsubscribe(),s.complete(),s.unsubscribe()},void 0,function(){return f=null});a.subscribe(d)})},lt=function(r,n){return b(function(t,u){var e=[];w(r).subscribe(l(u,function(i){var o=[];e.push(o);var c=new z,a=function(){q(e,o),u.next(o),c.unsubscribe()};c.add(w(n(i)).subscribe(l(u,a,_)))},_)),t.subscribe(l(u,function(i){var o,c;try{for(var a=A(e),s=a.next();!s.done;s=a.next()){var f=s.value;f.push(i)}}catch(v){o={error:v}}finally{try{s&&!s.done&&(c=a.return)&&c.call(a)}finally{if(o)throw o.error}}},function(){for(;e.length>0;)u.next(e.shift());u.complete()}))})},bt=function(r){return b(function(n,t){var u=null,e=null,i=function(){e==null||e.unsubscribe();var o=u;u=[],o&&t.next(o),w(r()).subscribe(e=l(t,i,_))};i(),n.subscribe(l(t,function(o){return u==null?void 0:u.push(o)},function(){u&&t.next(u),t.complete()},void 0,function(){return u=e=null}))})},zn=function(r){return b(function(n,t){var u=null,e=!1,i;u=n.subscribe(l(t,void 0,void 0,function(o){i=w(r(o,zn(r)(n))),u?(u.unsubscribe(),u=null,i.subscribe(t)):e=!0})),e&&(u.unsubscribe(),u=null,i.subscribe(t))})};function qn(r,n,t,u,e){return function(i,o){var c=t,a=n,s=0;i.subscribe(l(o,function(f){var v=s++;a=c?r(a,f,v):(c=!0,f),u&&o.next(a)},e&&function(){c&&o.next(a),o.complete()}))}}I=function(r,n){return b(qn(r,n,arguments.length>=2,!1,!0))};var Et=function(r,n){return r.push(n),r};yn=function(){return b(function(r,n){I(Et,[])(r).subscribe(n)})};function Bn(r,n){return Yn(yn(),R(function(t){return r(t)}),n?sn(n):j)}Mn=function(r){return Bn(Sn,r)},pt=Mn,rn=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var t=an(r);return t?Yn(rn.apply(void 0,C([],O(r))),sn(t)):b(function(u,e){In(C([u],O(F(r))))(e)})},ht=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return rn.apply(void 0,C([],O(r)))},en=function(r,n){return N(n)?R(r,n,1):R(r,1)},nr=function(r,n){return N(n)?en(function(){return r},n):en(function(){return r})},wn=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var t=M(r);return b(function(u,e){Ft()(L(C([u],O(r)),t)).subscribe(e)})},rr=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return wn.apply(void 0,C([],O(r)))};function Nt(r){return new T(function(n){return r.subscribe(n)})}var Ct={connector:function(){return new E}};Z=function(r,n){n===void 0&&(n=Ct);var t=n.connector;return b(function(u,e){var i=t();w(r(Nt(i))).subscribe(e),e.add(u.subscribe(i))})},tr=function(r){return I(function(n,t,u){return!r||r(t,u)?n+1:n},0)},ur=function(r){return b(function(n,t){var u=!1,e=null,i=null,o=function(){if(i==null||i.unsubscribe(),i=null,u){u=!1;var c=e;e=null,t.next(c)}};n.subscribe(l(t,function(c){i==null||i.unsubscribe(),u=!0,e=c,i=l(t,o,_),w(r(c)).subscribe(i)},function(){o(),t.complete()},void 0,function(){e=i=null}))})},G=function(r){return b(function(n,t){var u=!1;n.subscribe(l(t,function(e){u=!0,t.next(e)},function(){u||t.next(r),t.complete()}))})},ln=function(){return b(function(r,n){r.subscribe(l(n,_))})},$=function(r,n){return n?function(t){return Zn(n.pipe(Q(1),ln()),t.pipe($(r)))}:R(function(t,u){return w(r(t,u)).pipe(Q(1),Vt(t))})},er=function(r,n){n===void 0&&(n=k);var t=V(r,n);return $(function(){return t})},ir=function(){return b(function(r,n){r.subscribe(l(n,function(t){return Pn(t,n)}))})},or=function(r,n){return b(function(t,u){var e=new Set;t.subscribe(l(u,function(i){var o=r?r(i):i;e.has(o)||(e.add(o),u.next(i))})),n&&w(n).subscribe(l(u,function(){return e.clear()},_))})},J=function(r){return r===void 0&&(r=Ot),b(function(n,t){var u=!1;n.subscribe(l(t,function(e){u=!0,t.next(e)},function(){return u?t.complete():t.error(r())}))})};function Ot(){return new X}cr=function(r,n){if(r<0)throw new tn;var t=arguments.length>=2;return function(u){return u.pipe(fn(function(e,i){return i===r}),Q(1),t?G(n):J(function(){return new tn}))}},ar=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return function(t){return Zn(t,un.apply(void 0,C([],O(r))))}},sr=function(r,n){return b(function(t,u){var e=0;t.subscribe(l(u,function(i){r.call(n,i,e++,t)||(u.next(!1),u.complete())},function(){u.next(!0),u.complete()}))})},D=function(r,n){return n?function(t){return t.pipe(D(function(u,e){return w(r(u,e)).pipe($n(function(i,o){return n(u,i,e,o)}))}))}:b(function(t,u){var e=0,i=null,o=!1;t.subscribe(l(u,function(c){i||(i=l(u,void 0,function(){i=null,o&&u.complete()}),w(r(c,e++)).subscribe(i))},function(){o=!0,!i&&u.complete()}))})},bn=function(){return D(j)},fr=bn,lr=function(r,n,t){return n===void 0&&(n=1/0),n=(n||0)<1?1/0:n,b(function(u,e){return Dn(u,e,r,n,void 0,!0,t)})},vr=function(r){return b(function(n,t){try{n.subscribe(t)}finally{t.add(r)}})},br=function(r,n){return b(Gn(r,n,"value"))};function Gn(r,n,t){var u=t==="index";return function(e,i){var o=0;e.subscribe(l(i,function(c){var a=o++;r.call(n,c,a,e)&&(i.next(u?a:c),i.complete())},function(){i.next(u?-1:void 0),i.complete()}))}}pr=function(r,n){return b(Gn(r,n,"index"))},hr=function(r,n){var t=arguments.length>=2;return function(u){return u.pipe(r?fn(function(e,i){return r(e,i,u)}):j,Q(1),t?G(n):J(function(){return new X}))}},dr=function(r,n,t,u){return b(function(e,i){var o;!n||typeof n=="function"?o=n:(t=n.duration,o=n.element,u=n.connector);var c=new Map,a=function(d){c.forEach(d),d(i)},s=function(d){return a(function(g){return g.error(d)})},f=0,v=!1,h=new Xn(i,function(d){try{var g=r(d),p=c.get(g);if(!p){c.set(g,p=u?u():new E);var m=y(g,p);if(i.next(m),t){var x=l(p,function(){p.complete(),x==null||x.unsubscribe()},void 0,void 0,function(){return c.delete(g)});h.add(w(t(m)).subscribe(x))}}p.next(o?o(d):d)}catch(S){s(S)}},function(){return a(function(d){return d.complete()})},s,function(){return c.clear()},function(){return v=!0,f===0});e.subscribe(h);function y(d,g){var p=new T(function(m){f++;var x=g.subscribe(m);return function(){x.unsubscribe(),--f===0&&v&&h.unsubscribe()}});return p.key=d,p}})},mr=function(){return b(function(r,n){r.subscribe(l(n,function(){n.next(!1),n.complete()},function(){n.next(!0),n.complete()}))})},On=function(r){return r<=0?function(){return W}:b(function(n,t){var u=[];n.subscribe(l(t,function(e){u.push(e),r<u.length&&u.shift()},function(){var e,i;try{for(var o=A(u),c=o.next();!c.done;c=o.next()){var a=c.value;t.next(a)}}catch(s){e={error:s}}finally{try{c&&!c.done&&(i=o.return)&&i.call(o)}finally{if(e)throw e.error}}t.complete()},void 0,function(){u=null}))})},gr=function(r,n){var t=arguments.length>=2;return function(u){return u.pipe(r?fn(function(e,i){return r(e,i,u)}):j,On(1),t?G(n):J(function(){return new X}))}},yr=function(){return b(function(r,n){r.subscribe(l(n,function(t){n.next(H.createNext(t))},function(){n.next(H.createComplete()),n.complete()},function(t){n.next(H.createError(t)),n.complete()}))})},wr=function(r){return I(N(r)?function(n,t){return r(n,t)>0?n:t}:function(n,t){return n>t?n:t})},xr=R,_r=function(r,n,t){return t===void 0&&(t=1/0),N(n)?R(function(){return r},n,t):(typeof n=="number"&&(t=n),R(function(){return r},t))},Er=function(r,n,t){return t===void 0&&(t=1/0),b(function(u,e){var i=n;return Dn(u,e,function(o,c){return r(i,o,c)},t,function(o){i=o},!1,void 0,function(){return i=null})})},xn=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var t=M(r),u=Rt(r,1/0);return r=F(r),b(function(e,i){zt(u)(L(C([e],O(r)),t)).subscribe(i)})},Nr=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return xn.apply(void 0,C([],O(r)))},Cr=function(r){return I(N(r)?function(n,t){return r(n,t)<0?n:t}:function(n,t){return n<t?n:t})},nn=function(r,n){var t=N(r)?r:function(){return r};return N(n)?Z(n,{connector:t}):function(u){return new B(u,t)}},En=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var t=F(r);return function(u){return An.apply(void 0,C([u],O(t)))}},Ir=En,Ur=function(){return b(function(r,n){var t,u=!1;r.subscribe(l(n,function(e){var i=t;t=e,u&&n.next([i,e]),u=!0}))})},Lr=function(r){return r?function(n){return Z(r)(n)}:function(n){return nn(new E)(n)}},qr=function(r){return function(n){var t=new Mt(r);return new B(n,function(){return t})}},Br=function(){return function(r){var n=new vn;return new B(r,function(){return n})}},Gr=function(r,n,t,u){t&&!N(t)&&(u=t);var e=N(t)?t:void 0;return function(i){return nn(new Pt(r,n,u),e)(i)}},Hr=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return r.length?b(function(t,u){Ln(C([t],O(r)))(u)}):j},Jr=function(r){var n,t=1/0,u;return r!=null&&(typeof r=="object"?(n=r.count,t=n===void 0?1/0:n,u=r.delay):t=r),t<=0?function(){return W}:b(function(e,i){var o=0,c,a=function(){if(c==null||c.unsubscribe(),c=null,u!=null){var f=typeof u=="number"?V(u):w(u(o)),v=l(i,function(){v.unsubscribe(),s()});f.subscribe(v)}else s()},s=function(){var f=!1;c=e.subscribe(l(i,void 0,function(){++o<t?c?a():f=!0:i.complete()})),f&&a()};s()})},Wr=function(r){return b(function(n,t){var u,e=!1,i,o=!1,c=!1,a=function(){return c&&o&&(t.complete(),!0)},s=function(){return i||(i=new E,w(r(i)).subscribe(l(t,function(){u?f():e=!0},function(){o=!0,a()}))),i},f=function(){c=!1,u=n.subscribe(l(t,void 0,function(){c=!0,!a()&&s().next()})),e&&(u.unsubscribe(),u=null,e=!1,f())};f()})},Kr=function(r){r===void 0&&(r=1/0);var n;r&&typeof r=="object"?n=r:n={count:r};var t=n.count,u=t===void 0?1/0:t,e=n.delay,i=n.resetOnSuccess,o=i===void 0?!1:i;return u<=0?j:b(function(c,a){var s=0,f,v=function(){var h=!1;f=c.subscribe(l(a,function(y){o&&(s=0),a.next(y)},void 0,function(y){if(s++<u){var d=function(){f?(f.unsubscribe(),f=null,v()):h=!0};if(e!=null){var g=typeof e=="number"?V(e):w(e(y,s)),p=l(a,function(){p.unsubscribe(),d()},function(){a.complete()});g.subscribe(p)}else d()}else a.error(y)})),h&&(f.unsubscribe(),f=null,v())};v()})},Qr=function(r){return b(function(n,t){var u,e=!1,i,o=function(){u=n.subscribe(l(t,void 0,void 0,function(c){i||(i=new E,w(r(i)).subscribe(l(t,function(){return u?o():e=!0}))),i&&i.next(c)})),e&&(u.unsubscribe(),u=null,e=!1,o())};o()})},Cn=function(r){return b(function(n,t){var u=!1,e=null;n.subscribe(l(t,function(i){u=!0,e=i})),w(r).subscribe(l(t,function(){if(u){u=!1;var i=e;e=null,t.next(i)}},_))})},Xr=function(r,n){return n===void 0&&(n=k),Cn(Fn(r,n))},Yr=function(r,n){return b(qn(r,n,arguments.length>=2,!0))},Zr=function(r,n){return n===void 0&&(n=function(t,u){return t===u}),b(function(t,u){var e=Hn(),i=Hn(),o=function(a){u.next(a),u.complete()},c=function(a,s){var f=l(u,function(v){var h=s.buffer,y=s.complete;h.length===0?y?o(!1):a.buffer.push(v):!n(v,h.shift())&&o(!1)},function(){a.complete=!0;var v=s.complete,h=s.buffer;v&&o(h.length===0),f==null||f.unsubscribe()});return f};t.subscribe(c(e,i)),w(r).subscribe(c(i,e))})};function Hn(){return{buffer:[],complete:!1}}$r=function(r){return b(function(n,t){var u=!1,e,i=!1,o=0;n.subscribe(l(t,function(c){i=!0,(!r||r(c,o++,n))&&(u&&t.error(new pn("Too many matching values")),u=!0,e=c)},function(){u?(t.next(e),t.complete()):t.error(i?new Tn("No matching values"):new X)}))})},Dr=function(r){return r<=0?j:b(function(n,t){var u=new Array(r),e=0;return n.subscribe(l(t,function(i){var o=e++;if(o<r)u[o]=i;else{var c=o%r,a=u[c];u[c]=i,t.next(a)}})),function(){u=null}})},nt=function(r){return b(function(n,t){var u=!1,e=l(t,function(){e==null||e.unsubscribe(),u=!0},_);w(r).subscribe(e),n.subscribe(l(t,function(i){return u&&t.next(i)}))})},rt=function(r){return b(function(n,t){var u=!1,e=0;n.subscribe(l(t,function(i){return(u||(u=!r(i,e++)))&&t.next(i)}))})},tt=function(){return Y(j)},ut=function(r,n){return N(n)?Y(function(){return r},n):Y(function(){return r})},et=function(r,n){return b(function(t,u){var e=n;return Y(function(i,o){return r(e,i,o)},function(i,o){return e=o,o})(t).subscribe(u),function(){e=null}})},it=function(r,n){return n===void 0&&(n=!1),b(function(t,u){var e=0;t.subscribe(l(u,function(i){var o=r(i,e++);(o||n)&&u.next(i),!o&&u.complete()}))})},Or=function(r,n,t){var u=N(r)||n||t?{next:r,error:n,complete:t}:r;return u?b(function(e,i){var o;(o=u.subscribe)===null||o===void 0||o.call(u);var c=!0;e.subscribe(l(i,function(a){var s;(s=u.next)===null||s===void 0||s.call(u,a),i.next(a)},function(){var a;c=!1,(a=u.complete)===null||a===void 0||a.call(u),i.complete()},function(a){var s;c=!1,(s=u.error)===null||s===void 0||s.call(u,a),i.error(a)},function(){var a,s;c&&((a=u.unsubscribe)===null||a===void 0||a.call(u)),(s=u.finalize)===null||s===void 0||s.call(u)}))}):j},mn=function(r,n){return b(function(t,u){var e=n??{},i=e.leading,o=i===void 0?!0:i,c=e.trailing,a=c===void 0?!1:c,s=!1,f=null,v=null,h=!1,y=function(){v==null||v.unsubscribe(),v=null,a&&(p(),h&&u.complete())},d=function(){v=null,h&&u.complete()},g=function(m){return v=w(r(m)).subscribe(l(u,y,d))},p=function(){if(s){s=!1;var m=f;f=null,u.next(m),!h&&g(m)}};t.subscribe(l(u,function(m){s=!0,f=m,!(v&&!v.closed)&&(o?p():g(m))},function(){h=!0,!(a&&s&&v&&!v.closed)&&u.complete()}))})},jr=function(r,n,t){n===void 0&&(n=k);var u=V(r,n);return mn(function(){return u},t)},kr=function(r){return r===void 0&&(r=k),b(function(n,t){var u=r.now();n.subscribe(l(t,function(e){var i=r.now(),o=i-u;u=i,t.next(new jt(e,o))}))})};var jt=function(){function r(n,t){this.value=n,this.interval=t}return r}();Tr=function(r,n,t){var u,e,i;if(t=t??Kn,cn(r)?u=r:typeof r=="number"&&(e=r),n)i=function(){return n};else throw new TypeError("No observable provided to switch to");if(u==null&&e==null)throw new TypeError("No timeout provided.");return gn({first:u,each:e,scheduler:t,with:i})},Sr=function(r){return r===void 0&&(r=It),$n(function(n){return{value:n,timestamp:r.now()}})},Ar=function(r){return b(function(n,t){var u=new E;t.next(u.asObservable());var e=function(i){u.error(i),t.error(i)};return n.subscribe(l(t,function(i){return u==null?void 0:u.next(i)},function(){u.complete(),t.complete()},e)),w(r).subscribe(l(t,function(){u.complete(),t.next(u=new E)},_,e)),function(){u==null||u.unsubscribe(),u=null}})},Fr=function(r,n){n===void 0&&(n=0);var t=n>0?n:r;return b(function(u,e){var i=[new E],o=[],c=0;e.next(i[0].asObservable()),u.subscribe(l(e,function(a){var s,f;try{for(var v=A(i),h=v.next();!h.done;h=v.next()){var y=h.value;y.next(a)}}catch(p){s={error:p}}finally{try{h&&!h.done&&(f=v.return)&&f.call(v)}finally{if(s)throw s.error}}var d=c-r+1;if(d>=0&&d%t===0&&i.shift().complete(),++c%t===0){var g=new E;i.push(g),e.next(g.asObservable())}},function(){for(;i.length>0;)i.shift().complete();e.complete()},function(a){for(;i.length>0;)i.shift().error(a);e.error(a)},function(){o=null,i=null}))})},Vr=function(r){for(var n,t,u=[],e=1;e<arguments.length;e++)u[e-1]=arguments[e];var i=(n=M(u))!==null&&n!==void 0?n:k,o=(t=u[0])!==null&&t!==void 0?t:null,c=u[1]||1/0;return b(function(a,s){var f=[],v=!1,h=function(p){var m=p.window,x=p.subs;m.complete(),x.unsubscribe(),q(f,p),v&&y()},y=function(){if(f){var p=new z;s.add(p);var m=new E,x={window:m,subs:p,seen:0};f.push(x),s.next(m.asObservable()),P(p,i,function(){return h(x)},r)}};o!==null&&o>=0?P(s,i,y,o,!0):v=!0,y();var d=function(p){return f.slice().forEach(p)},g=function(p){d(function(m){var x=m.window;return p(x)}),p(s),s.unsubscribe()};return a.subscribe(l(s,function(p){d(function(m){m.window.next(p),c<=++m.seen&&h(m)})},function(){return g(function(p){return p.complete()})},function(p){return g(function(m){return m.error(p)})})),function(){f=null}})},Rr=function(r,n){return b(function(t,u){var e=[],i=function(o){for(;0<e.length;)e.shift().error(o);u.error(o)};w(r).subscribe(l(u,function(o){var c=new E;e.push(c);var a=new z,s=function(){q(e,c),c.complete(),a.unsubscribe()},f;try{f=w(n(o))}catch(v){i(v);return}u.next(c.asObservable()),a.add(f.subscribe(l(u,s,_,i)))},_)),t.subscribe(l(u,function(o){var c,a,s=e.slice();try{for(var f=A(s),v=f.next();!v.done;v=f.next()){var h=v.value;h.next(o)}}catch(y){c={error:y}}finally{try{v&&!v.done&&(a=f.return)&&a.call(f)}finally{if(c)throw c.error}}},function(){for(;0<e.length;)e.shift().complete();u.complete()},i,function(){for(;0<e.length;)e.shift().unsubscribe()}))})},zr=function(r){return b(function(n,t){var u,e,i=function(c){u.error(c),t.error(c)},o=function(){e==null||e.unsubscribe(),u==null||u.complete(),u=new E,t.next(u.asObservable());var c;try{c=w(r())}catch(a){i(a);return}c.subscribe(e=l(t,o,o,i))};o(),n.subscribe(l(t,function(c){return u.next(c)},function(){u.complete(),t.complete()},i,function(){e==null||e.unsubscribe(),u=null}))})},Mr=function(r){return Bn(on,r)},_n=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return b(function(t,u){on.apply(void 0,C([t],O(r))).subscribe(u)})},Pr=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return _n.apply(void 0,C([],O(r)))}});export{ln as $,vn as A,nr as B,B as C,rr as D,Z as E,tr as F,ur as G,G as H,er as I,$ as J,ir as K,or as L,cr as M,H as N,ar as O,sr as P,fr as Q,bn as R,pn as S,hn as T,D as U,lr as V,vr as W,br as X,pr as Y,hr as Z,dr as _,Lt as __tla,dn as a,mr as a0,gr as a1,yr as a2,wr as a3,xr as a4,_r as a5,Er as a6,Nr as a7,Cr as a8,nn as a9,Or as aA,mn as aB,jr as aC,J as aD,kr as aE,gn as aF,Tr as aG,Sr as aH,yn as aI,Ar as aJ,Fr as aK,Vr as aL,Rr as aM,zr as aN,Mr as aO,Pr as aP,F as aQ,rn as aR,wn as aS,xn as aT,Ir as aU,_n as aV,En as aa,Ur as ab,Lr as ac,qr as ad,Br as ae,Gr as af,Hr as ag,I as ah,Jr as ai,Wr as aj,Kr as ak,Qr as al,Nn as am,Cn as an,Xr as ao,Yr as ap,Zr as aq,$r as ar,Dr as as,nt as at,rt as au,tt as av,ut as aw,et as ax,On as ay,it as az,jn as b,kn as c,tn as d,Tn as e,Sn as f,An as g,V as h,Fn as i,Vn as j,ot as k,ct as l,at as m,st as n,un as o,ft as p,lt as q,vt as r,bt as s,Rn as t,zn as u,pt as v,Mn as w,ht as x,en as y,on as z};