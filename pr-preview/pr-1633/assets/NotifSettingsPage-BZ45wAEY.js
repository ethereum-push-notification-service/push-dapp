import{dm as Ge,ad as m,ao as e,ag as M,bm as Fe,ba as se,ak as d,ai as Je,bb as Ve,bP as He,bv as E,ah as qe,ap as le,aY as de,bi as Ke,aj as pe,b1 as ce,an as ue,be as We,ae as S,bf as Ze,bc as xe,bd as H,aA as he,aZ as Q,b2 as Ye,bo as Xe,bp as Qe,bw as et,br as tt,dz as rt,af as O,aC as it,b9 as me,ax as at,aD as nt,__tla as ot}from"./index-DGS2C2HC.js";import{__tla as st}from"./Tag-BLkb1Yy8.js";import{b as lt,__tla as dt}from"./index.esm-BmTwGmce.js";import{M as pt,g as ct,S as ut,F as xt,m as ht,a as mt,C as gt,b as ft,__tla as bt}from"./ChannelInfoList-C75_VIwG.js";import{I as St,R as yt,__tla as wt}from"./RangeSlider-8DwRus_R.js";import{I as Nt,__tla as jt}from"./SendNotifications-BeLxKosR.js";import{a as Tt,__tla as Et}from"./EmptyNotificationSettings-0zZL7fMC.js";import{__tla as Ct}from"./TransitionGroupContext-B4NjDseD.js";import{__tla as vt}from"./index.es-C4IWHLSc.js";import"./browser-CeceZ__e.js";import{__tla as At}from"./index--TIT6L6G.js";import{__tla as Mt}from"./index.esm-Dtnr6Rdw.js";let ge,Dt=Promise.all([(()=>{try{return ot}catch{}})(),(()=>{try{return st}catch{}})(),(()=>{try{return dt}catch{}})(),(()=>{try{return bt}catch{}})(),(()=>{try{return wt}catch{}})(),(()=>{try{return jt}catch{}})(),(()=>{try{return Et}catch{}})(),(()=>{try{return Ct}catch{}})(),(()=>{try{return vt}catch{}})(),(()=>{try{return At}catch{}})(),(()=>{try{return Mt}catch{}})()]).then(async()=>{function fe(t){return Ge({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M230.14,70.54,185.46,25.85a20,20,0,0,0-28.29,0L33.86,149.17A19.85,19.85,0,0,0,28,163.31V208a20,20,0,0,0,20,20H92.69a19.86,19.86,0,0,0,14.14-5.86L230.14,98.82a20,20,0,0,0,0-28.28ZM91,204H52V165l84-84,39,39ZM192,103,153,64l18.34-18.34,39,39Z"}}]})(t)}const v=t=>t.trim().length==0,be=({setErrorInfo:t,lowerLimit:g,upperLimit:f,type:y,settingName:i,defaultValue:c,sliderStep:w})=>{t(void 0);let p=!1;return v(i)&&(t(n=>({...n,settingName:"Setting Name is required"})),p=!0),(y===2||y===3)&&(v(g)&&(t(n=>({...n,lowerLimit:"Minimum range is required"})),p=!0),v(f)&&(t(n=>({...n,upperLimit:"Maximum range is required"})),p=!0),(typeof c=="string"?v(c):v(c.lower)||v(c.upper))&&(typeof c=="string"?t(n=>({...n,default:"Default value is required"})):(v(c.lower)&&t(n=>({...n,defaultStart:"Default start value is required"})),v(c.upper)&&t(n=>({...n,defaultEnd:"Default end value is required"}))),p=!0),v(w)&&(t(n=>({...n,sliderStep:"Slider step is required"})),p=!0),!v(g)&&!v(f)&&!v(w)&&(Number(g)<0&&(t(n=>({...n,lowerLimit:"Minimum range should be greater than 0"})),p=!0),Number(f)<0&&(t(n=>({...n,upperLimit:"Maximum range should be greater than 0"})),p=!0),Number(g)>Number(f)&&(t(n=>({...n,lowerLimit:"Minimum range should be less than maximum range"})),p=!0),typeof c=="string"?(Number(c)<Number(g)||Number(c)>Number(f))&&(t(n=>({...n,default:"Default value not in range"})),p=!0):((Number(c.lower)<Number(g)||Number(c.lower)>Number(f))&&(t(n=>({...n,defaultStart:"Default value not in range"})),p=!0),(Number(c.upper)<Number(g)||Number(c.upper)>Number(f)||Number(c.lower)>Number(c.upper))&&(t(n=>({...n,defaultEnd:"Default value not in range"})),p=!0)),Number(w)<=0&&(t(n=>({...n,sliderStep:"Slider step should be greater than 0"})),p=!0),Number(w)>Number(f)-Number(g)&&(t(n=>({...n,sliderStep:"Slider step should be less than range"})),p=!0))),!p},Se=({checked:t,onChange:g})=>e.jsx(ye,{id:"Checkbox-switch",type:"checkbox",checked:t,onChange:g}),ye=m.input`
  cursor: pointer;
  z-index: 1;
  border-radius: 15px;
  width: 16px;
  height: 20px;

  /* Change the color of the checkbox */
  &:checked {
    accent-color: #D53A94;
  }
`,ee=({checked:t,onChange:g,label:f,description:y})=>e.jsx(E,{margin:"12px 0px 12px 0px",flex:"1",self:"stretch",align:"stretch",children:e.jsxs(E,{direction:"row",align:"center",flex:"1",self:"stretch",justify:"space-between",children:[e.jsxs(E,{flex:"1",self:"stretch",justify:"space-between",align:"flex-start",children:[e.jsx(T,{children:f}),e.jsx(te,{children:y})]}),e.jsx(Nt,{checked:t,onChange:g})]})}),we=({onConfirm:t,onClose:g,toastObject:f,InnerComponentProps:y})=>{const i=(y==null?void 0:y.settingToEdit)||void 0,[c,w]=d.useState(!1),[p,n]=d.useState(i?i.description:""),[D,N]=d.useState(i?i.type===1&&i.default||i.type===2&&i.enabled||i.type===3&&i.enabled:!0),[C,B]=d.useState(!!(i&&(i.type===2||i.type===3))),[u,k]=d.useState(i&&(i.type===2||i.type===3)?i.lowerLimit.toString():""),[x,L]=d.useState(i&&(i.type===2||i.type===3)?i.upperLimit.toString():""),[h,$]=d.useState(i&&(i.type===2||i.type===3)&&i.ticker?i.ticker.toString():"1"),[j,F]=d.useState(!!(i&&i.type===3)),[A,W]=d.useState(i&&i.type===2?i.default.toString():""),[P,U]=d.useState(i&&i.type===2?i.default:0),[_,J]=d.useState(i&&i.type===3?i.default.lower.toString():""),[I,Z]=d.useState(i&&i.type===3?i.default.upper.toString():""),[Y,V]=d.useState(i&&i.type===3?i.default.lower:0),[X,l]=d.useState(i&&i.type===3?i.default.upper:0),[a,r]=d.useState(),o=Je(),ne=()=>!c&&g(),oe=d.useRef(null);Ve(oe,()=>ne());const Pe=s=>{if(s.preventDefault(),w(!0),be({setErrorInfo:r,defaultValue:j?{lower:_,upper:I}:A,settingName:p,lowerLimit:u,type:C?j?3:2:1,upperLimit:x,sliderStep:h})){const b=i?i.index:Math.floor(Math.random()*1e6),Oe=C?j?{type:3,default:{lower:Number(_),upper:Number(I)},enabled:D,description:p,index:b,lowerLimit:Number(u),upperLimit:Number(x),ticker:Number(h)}:{type:2,default:Number(A),enabled:D,description:p,index:b,lowerLimit:Number(u),upperLimit:Number(x),ticker:Number(h)}:{type:1,default:D,description:p,index:b};t(Oe),g()}w(!1)},z=s=>s!==""&&!/^[0-9]+(?:\.[0-9])?$/.test(s),ze=d.useMemo(()=>u!==""&&x!==""&&(j?_!==""&&I!=="":A!=="")&&h!==""&&Number(u)<=Number(x)&&Number(h)>0&&Number(h)<=Number(x)-Number(u)&&(j?Number(_)>=Number(u)&&Number(I)<=Number(x)&&Number(I)>Number(_):Number(A)>=Number(u)&&Number(A)<=Number(x)),[u,x,A,h,_,I,j]);return e.jsx(Te,{ref:oe,children:e.jsxs(He,{onSubmit:Pe,children:[e.jsx(Ne,{onClick:ne}),e.jsxs(je,{children:[i?"Edit ":"Add a "," Setting"]}),e.jsxs(E,{margin:"32px 0px 12px 0px",flex:"1",self:"stretch",align:"stretch",children:[e.jsxs(E,{direction:"row",align:"center",flex:"1",self:"stretch",justify:"space-between",children:[e.jsx(T,{children:"Setting Name"}),e.jsx(qe,{color:o.editChannelSecondaryText,size:"14px",margin:"0px 8px 0px 0px",weight:"500",children:50-p.length})]}),e.jsx(q,{maxlength:"50",padding:"13px 16px",weight:"400",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:o.textAreaBorderColor,focusBorder:o.textAreaFocusBorder,radius:"12px",bg:o.editChannelInputbg,color:o.editChannelPrimaryText,value:p,onChange:s=>{n(s.target.value.slice(0,50)),r(b=>({...b,settingName:void 0}))},autocomplete:"off",hasError:!!(a!=null&&a.settingName)}),e.jsx(R,{children:a==null?void 0:a.settingName})]}),e.jsx(ee,{checked:D,onChange:()=>N(s=>!s),label:"Set as default",description:"Setting turned on for users by default"}),e.jsx(ee,{checked:C,onChange:()=>B(s=>!s),label:"Range",description:"Set a range for this setting e.g. 1-10"}),C&&e.jsxs(e.Fragment,{children:[e.jsxs(E,{direction:"column",align:"flex-start",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(T,{children:"Range Values"}),e.jsxs(E,{direction:"row",children:[e.jsx(G,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 0",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:o.textAreaBorderColor,focusBorder:o.textAreaFocusBorder,radius:"12px",bg:o.editChannelInputbg,color:o.editChannelPrimaryText,value:u,onChange:s=>{r(b=>({...b,lowerLimit:void 0})),!z(s.target.value)&&k(s.target.value)},autocomplete:"off",hasError:!!(a!=null&&a.lowerLimit)}),e.jsx(T,{padding:"0px 16px",children:"to"}),e.jsx(G,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 10",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:o.textAreaBorderColor,focusBorder:o.textAreaFocusBorder,radius:"12px",bg:o.editChannelInputbg,color:o.editChannelPrimaryText,value:x,onChange:s=>{r(b=>({...b,upperLimit:void 0})),!z(s.target.value)&&L(s.target.value)},autocomplete:"off",hasError:!!(a!=null&&a.upperLimit)})]}),e.jsx(R,{children:a==null?void 0:a.lowerLimit}),e.jsx(R,{children:a==null?void 0:a.upperLimit})]}),e.jsxs(E,{direction:"row",align:"flex-start",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(Se,{checked:j,onChange:()=>F(!j)}),e.jsxs(E,{align:"left",margin:"0px 0px 0px 4px",children:[e.jsx(T,{children:"Enable Multi Range Slider"}),e.jsx(te,{children:"User can select a range of values in the slider"})]})]}),!j&&e.jsxs(E,{direction:"column",align:"stretch",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(T,{children:"Default Value"}),e.jsx(q,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 5",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:o.textAreaBorderColor,focusBorder:o.textAreaFocusBorder,radius:"12px",bg:o.editChannelInputbg,color:o.editChannelPrimaryText,value:A,onChange:s=>{r(b=>({...b,default:void 0})),!z(s.target.value)&&(W(s.target.value),U(Number(s.target.value)))},autocomplete:"off",hasError:!!(a!=null&&a.default)}),e.jsx(R,{children:a==null?void 0:a.default})]}),j&&e.jsxs(E,{direction:"column",align:"flex-start",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(T,{children:"Default Values"}),e.jsxs(E,{direction:"row",children:[e.jsx(G,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 5",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:o.textAreaBorderColor,focusBorder:o.textAreaFocusBorder,radius:"12px",bg:o.editChannelInputbg,color:o.editChannelPrimaryText,value:_,onChange:s=>{r(b=>({...b,defaultStart:void 0})),!z(s.target.value)&&(J(s.target.value),V(Number(s.target.value)))},autocomplete:"off",hasError:!!(a!=null&&a.defaultStart)}),e.jsx(T,{padding:"0px 16px",children:"to"}),e.jsx(G,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 8",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:o.textAreaBorderColor,focusBorder:o.textAreaFocusBorder,radius:"12px",bg:o.editChannelInputbg,color:o.editChannelPrimaryText,value:I,onChange:s=>{r(b=>({...b,defaultEnd:void 0})),!z(s.target.value)&&(Z(s.target.value),l(Number(s.target.value)))},autocomplete:"off",hasError:!!(a!=null&&a.defaultEnd)})]}),e.jsx(R,{children:(a==null?void 0:a.defaultStart)||(a==null?void 0:a.defaultEnd)})]}),e.jsxs(E,{direction:"column",align:"stretch",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(T,{children:"Slider Step Value"}),e.jsx(q,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 1",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:o.textAreaBorderColor,focusBorder:o.textAreaFocusBorder,radius:"12px",bg:o.editChannelInputbg,color:o.editChannelPrimaryText,value:h,onChange:s=>{r(b=>({...b,sliderStep:void 0})),$(s.target.value),U(u===""?0:Number(u))},autocomplete:"off",hasError:!!(a!=null&&a.sliderStep)}),e.jsx(R,{children:a==null?void 0:a.sliderStep})]}),ze&&e.jsxs(E,{direction:"column",align:"flex-start",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(Ee,{children:"Preview"}),!j&&e.jsxs(re,{children:[e.jsx(T,{children:u}),e.jsx(St,{val:P,min:Number(u),max:Number(x),step:Number(h),defaultVal:Number(A),onChange:({x:s})=>U(s),preview:!0}),e.jsx(T,{children:x})]}),j&&e.jsxs(re,{children:[e.jsx(T,{children:u}),e.jsx(yt,{startVal:Y,endVal:X,min:Number(u),max:Number(x),step:Number(h),defaultStartVal:Number(_),defaultEndVal:Number(I),onChange:({startVal:s,endVal:b})=>{V(s),l(b)},preview:!0}),e.jsx(T,{children:x})]})]})]}),e.jsx(pt,{text:"Save Setting",isLoading:c,topMargin:"20px",padding:"14.5px 26.5px"})]})})},Ne=m(Fe)`
  align-self: flex-end;
  color: ${t=>t.theme.default.secondaryColor};
  font-size: 20px;
  cursor: pointer;
`,je=m.div`
  font-size: 24px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${t=>t.theme.default.color};
`,Te=m.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  margin: 6% 1%;
  background: ${t=>t.theme.modalContentBackground};
  border-radius: 1rem;
  padding: 1.2% 2%;
  @media (${M.laptop}) {
    width: 50vw;
  }
  @media (${M.mobileL}) {
    width: 95vw;
  }
`,T=m.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.011em;
  color: ${t=>t.theme.default.color};
  padding: ${t=>t.padding||"0px"};
`,Ee=m(T)`
  color: ${t=>t.theme.default.secondaryColor};
`,te=m.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: ${t=>t.theme.default.secondaryColor};
`,G=m(se)`
  max-width: 108px;
  flex: 1;
  border: ${t=>t.hasError?`1px solid ${t.theme.nfsError}`:`1px solid ${t.theme.default.borderColor}`};
`,q=m(se)`
  flex: 1;
  border: ${t=>t.hasError?`1px solid ${t.theme.nfsError}`:`1px solid ${t.theme.default.borderColor}`};
`,R=m.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: ${t=>t.theme.nfsError};
  margin-top: 4px;
`,re=m.div`
  display: flex;
  padding: 12px;
  gap: 16px;
  margin-top: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 8px;
  background: ${t=>t.theme.nfsTickerPreviewBg};
`,Ce=({title:t,description:g,onCancel:f,disabled:y,onClick:i,feeRequired:c})=>{const{account:w,provider:p}=pe(),[n,D]=d.useState(0),[N,C]=d.useState(!1),[B,u]=d.useState(!1),k=ce();d.useEffect(()=>{!w||!p||async function(){const L=await ct({address:w,provider:p,contractAddress:ue.epnscore});D(parseInt(L));const h=parseInt(L);h>=c&&h!=0?C(!0):C(!1)}()},[w,p]);const x=async()=>{if(u(!0),!p)return;const L=p.getSigner(w);k.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{const h=await mt({signer:L,contractAddress:ue.epnscore,amount:c-n});console.debug("response",h),h&&(u(!1),D(c),C(!0),k.showMessageToast({toastTitle:"Success",toastMessage:"Successfully approved Push!",toastType:"SUCCESS",getToastIcon:$=>e.jsx(xe,{size:$,color:"green"})}))}catch(h){console.error(h),h.code=="ACTION_REJECTED"?k.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:$=>e.jsx(H,{size:$,color:"red"})}):(k.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in approving PUSH Token",toastType:"ERROR",getToastIcon:$=>e.jsx(H,{size:$,color:"red"})}),console.error("Error --> %o",h),console.error({err:h}))}u(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(Ae,{children:[e.jsxs("div",{children:[e.jsx(Me,{children:t}),e.jsx(De,{children:g})]}),e.jsxs(de,{flex:"0",children:[N?e.jsx(ve,{src:ut}):null,e.jsxs(Le,{children:[c," PUSH"]})]})]}),e.jsx(xt,{noOfPushTokensToCheck:c,containerProps:{width:"100%"},onMintPushToken:async L=>{await ht({noOfTokens:L,provider:p,account:w})}}),B?e.jsx(e.Fragment,{children:e.jsxs(_e,{children:[e.jsx(We,{size:42,color:S.COLORS.PRIMARY_PINK,type:Ze.PROCESSING}),e.jsx(Ie,{children:"Verifying Transaction"})]})}):e.jsx(e.Fragment,{children:e.jsxs($e,{children:[e.jsx(ke,{onClick:f,disabled:!1,children:"Cancel"}),n>=c?e.jsx(K,{disabled:y,onClick:i,children:"Save Changes"}):e.jsx(K,{disabled:y,onClick:x,children:"Approve PUSH"})]})})]})},ve=m.img``,Ae=m(le)`
  background: ${t=>t.theme.editFooterBg};
  border-radius: 20px;
  padding: 23px 32px;
  display: grid;
  grid-auto-flow: column;
  align-content: space-between;
  justify-content: space-between;
  grid-gap: 40px;
  height: 100px;
  align-items: center;
  z-index: 1;

  @media ${M.tablet} {
    padding: 16px;
    flex: 0;
  }

  @media ${M.mobileL} {
    margin: 0px;
  }
`,Me=m.p`
  margin: 0px;
  color: ${t=>t.theme.editChannelPrimaryText};
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`,De=m.p`
  font-size: 12px;
  margin: 0px;
  font-weight: 400;
  line-height: 130%;
  color: ${t=>t.theme.editChannelSecondaryText};
`,Le=m.p`
  margin: 0px 0px 0px 5px;
  color: ${t=>t.theme.viewChannelSecondaryText};
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`,_e=m(le)`
  flex-direction: row;
  margin-top: 33px;

  @media ${M.tablet} {
    flex: 0;
  }
`,Ie=m.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-left: 12px;
  color: ${t=>t.theme.editChannelPrimaryText};
`,$e=m(de)`
  justify-content: end;
  margin-top: 24px;
  @media ${M.mobileL} {
    flex-direction: column-reverse;
    flex: 0;
  }
`,K=m(Ke)`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  border-radius: 15px;
  align-items: center;
  text-align: center;
  background: ${t=>t.disabled?t.theme.nfsDisabled:t.theme.default.primaryPushThemeTextColor};
  color: ${t=>t.disabled?t.theme.nfsDisabledText:"white"};
  padding: 16px 27px;
  width: 12rem;

  @media ${M.tablet} {
    font-size: 15px;
    padding: 12px 12px;
    width: 8rem;
  }

  @media ${M.mobileL} {
    width: -webkit-fill-available;
  }
`,ke=m(K)`
  margin-right: 14px;
  background: ${t=>t.theme.default.bg};
  color: ${t=>t.theme.logoBtnColor};
  border: 1px solid
    ${t=>t.theme.scheme==="light"?t.theme.default.primaryPushThemeTextColor:t.theme.default.borderColor};

  @media ${M.mobileL} {
    margin-right: 0px;
    margin-top: 10px;
  }
`,Ue=he.coreContractChain;function Re(){const{account:t,chainId:g}=pe(),{coreChannelAdmin:f,delegatees:y}=Q(l=>l.admin),{channelSettings:i}=Q(l=>l.channels),c=Ye(),w=Ue===g,p=50,[n,D]=d.useState(""),[N,C]=d.useState([]),[B,u]=d.useState(),[k,x]=d.useState(!1),[L,h]=d.useState(!0),{handleConnectWallet:$}=d.useContext(Xe),{userPushSDKInstance:j}=Q(l=>l.user),{isModalOpen:F,showModal:A,ModalComponent:W}=Qe(),P=()=>{const l=window.location.origin;window.location.replace(`${l}/channels`)};d.useEffect(()=>{(async()=>{if(x(!0),!!t){try{await j.channel.info(t)||P()}catch{P()}f&&f!==t&&P(),x(!1)}})()},[t,f]),d.useEffect(()=>{F===!1&&u(void 0)},[F]),d.useEffect(()=>{t&&(!y||!y.length?D(t):D(w?y[0].channel:y[0].alias_address))},[y,t]),d.useEffect(()=>{n&&i[n]&&(C(i[n]||[]),h(!1))},[n,i]);const U=ce(5e3),_=et(),J=()=>{_("/dashboard",{replace:!0})},I=l=>{const a=N.findIndex(r=>r.index===l.index);if(a===-1)C([...N,l]);else{const r=[...N];r[a]=l,C(r)}},Z=l=>{u(l),A()},Y=l=>{C(a=>a.filter(r=>r.index!==l.index))},V=async()=>{try{x(!0);let l=j;if(!l.signer&&(l=await $(),!l)){x(!1);return}U.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});const a=N.map(r=>{if(r.type===1)return{type:r.type,description:r.description,default:r.default?1:0};if(r.type===2)return console.info({type:r.type,description:r.description,default:r.default,data:{lower:r.lowerLimit,upper:r.upperLimit,ticker:r.ticker,enabled:r.enabled}}),{type:r.type,description:r.description,default:r.default,data:{lower:r.lowerLimit,upper:r.upperLimit,ticker:r.ticker,enabled:r.enabled}};if(r.type===3)return console.info({type:r.type,description:r.description,default:r.default,data:{lower:r.lowerLimit,upper:r.upperLimit,ticker:r.ticker,enabled:r.enabled}}),{type:r.type,description:r.description,default:r.default,data:{lower:r.lowerLimit,upper:r.upperLimit,ticker:r.ticker,enabled:r.enabled}}});console.info(a),await l.channel.setting(a),c(rt({channelAddress:n,settings:N})),x(!1),U.showMessageToast({toastTitle:"Success",toastMessage:"Channel Settings Updated Successfully",toastType:"SUCCESS",getToastIcon:r=>e.jsx(xe,{size:r,color:"green"})}),setTimeout(()=>J(),2e3)}catch(l){x(!1),l.code=="ACTION_REJECTED"?U.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:a=>e.jsx(H,{size:a,color:"red"})}):(U.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in updating channel settings",toastType:"ERROR",getToastIcon:a=>e.jsx(H,{size:a,color:"red"})}),console.error("Error --> %o",l))}},X=d.useMemo(()=>{if(!N||!i[t])return!1;if(N.length!==i[t].length)return!0;let l=!0;for(let a=0;a<N.length;a++){const r=N[a],o=i[t][a];r.type===1?l=l&&r.type===o.type&&r.description===o.description&&r.default===o.default:r.type===2&&(l=l&&r.type===o.type&&r.description===o.description&&r.default===o.default&&r.enabled===o.enabled&&r.lowerLimit===o.lowerLimit&&r.upperLimit===o.upperLimit&&r.ticker===o.ticker)}return l===!1},[N,i[t]]);return e.jsxs(e.Fragment,{children:[e.jsx(gt,{style:{padding:0},title:"Notification Settings",description:"Add, Edit or Remove Notification Settings",Button:e.jsx(Tt,{onClick:A})}),e.jsx(ft,{style:{width:"100%",marginTop:"24px",marginBottom:"8px"},account:t,isAddress:!1,isLoading:L,items:N,onClickEmptyListButton:A,emptyListButtonTitle:"Add Setting",settingsDropdownOptions:[{icon:e.jsx(fe,{}),onClick:Z,text:"Edit"},{icon:e.jsx(lt,{}),onClick:Y,text:"Delete"}]}),e.jsx(Ce,{feeRequired:p,title:"Modify Settings fee",description:"Make sure all settings are ready before proceeding to the next step",onCancel:J,disabled:!X||k,onClick:V}),e.jsx(W,{modalPosition:tt.ON_PARENT,InnerComponent:we,onConfirm:I,InnerComponentProps:{settingToEdit:B}})]})}he.coreContractChain;function Be(){it.pageview("/channel/settings");const[t,g]=me.useState(null),f=()=>g(null);return me.useEffect(()=>{t&&f()},[t]),e.jsx(ie,{children:e.jsx(Re,{})})}let ie,ae;ie=m(at)`
  align-items: center;
  align-self: center;
  background: ${t=>t.theme.default.bg};
  border-radius: ${S.ADJUSTMENTS.RADIUS.LARGE} ${S.ADJUSTMENTS.RADIUS.LARGE}
    ${S.ADJUSTMENTS.RADIUS.LARGE} ${S.ADJUSTMENTS.RADIUS.LARGE};
  box-shadow: ${S.ADJUSTMENTS.MODULE_BOX_SHADOW};
  display: flex;
  flex-direction: column;
  flex: initial;
  justify-content: center;
  max-width: 1200px;
  width: calc(
    100% - ${O.MINI_MODULES.DESKTOP.RIGHT} - ${O.MINI_MODULES.DESKTOP.LEFT} -
      ${S.ADJUSTMENTS.PADDING.BIG} - ${S.ADJUSTMENTS.PADDING.BIG}
  );
  position: relative;
  margin: ${S.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};
  padding: ${S.ADJUSTMENTS.PADDING.BIG};

  @media ${M.laptop} {
    margin: ${S.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    padding: ${S.ADJUSTMENTS.PADDING.DEFAULT};
    justify-content: flex-start;
  }

  @media ${M.mobileL} {
    margin: ${S.ADJUSTMENTS.MARGIN.BIG_MODULES.MOBILE};
    padding: ${S.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(
      100% - ${O.MINI_MODULES.MOBILE.RIGHT} - ${O.MINI_MODULES.MOBILE.LEFT} -
        ${S.ADJUSTMENTS.PADDING.DEFAULT} - ${S.ADJUSTMENTS.PADDING.DEFAULT}
    );
    min-height: calc(100vh - ${S.CONSTANTS.HEADER_HEIGHT}px - ${O.BIG_MODULES.MOBILE.TOP});
    overflow-y: scroll;
    border-radius: ${S.ADJUSTMENTS.RADIUS.LARGE} ${S.ADJUSTMENTS.RADIUS.LARGE} 0 0;
  }
`,ge=()=>e.jsx(ae,{children:e.jsx(Be,{})}),ae=m(nt)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
  justify-content: flex-start;
`});export{Dt as __tla,ge as default};