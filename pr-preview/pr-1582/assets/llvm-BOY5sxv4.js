import{cr as c,__tla as p}from"./index-DdCmac8Z.js";let d,_=Promise.all([(()=>{try{return p}catch{}})()]).then(async()=>{function s(e,n){for(var t=0;t<n.length;t++){const a=n[t];if(typeof a!="string"&&!Array.isArray(a)){for(const r in a)if(r!=="default"&&!(r in e)){const o=Object.getOwnPropertyDescriptor(a,r);o&&Object.defineProperty(e,r,o.get?o:{enumerable:!0,get:()=>a[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var l,b;function u(){if(b)return l;b=1,l=e,e.displayName="llvm",e.aliases=[];function e(n){(function(t){t.languages.llvm={comment:/;.*/,string:{pattern:/"[^"]*"/,greedy:!0},boolean:/\b(?:false|true)\b/,variable:/[%@!#](?:(?!\d)(?:[-$.\w]|\\[a-f\d]{2})+|\d+)/i,label:/(?!\d)(?:[-$.\w]|\\[a-f\d]{2})+:/i,type:{pattern:/\b(?:double|float|fp128|half|i[1-9]\d*|label|metadata|ppc_fp128|token|void|x86_fp80|x86_mmx)\b/,alias:"class-name"},keyword:/\b[a-z_][a-z_0-9]*\b/,number:/[+-]?\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b|\b0x[\dA-Fa-f]+\b|\b0xK[\dA-Fa-f]{20}\b|\b0x[ML][\dA-Fa-f]{32}\b|\b0xH[\dA-Fa-f]{4}\b/,punctuation:/[{}[\];(),.!*=<>]/}})(n)}return l}var f=u();let i;i=c(f),d=s({__proto__:null,default:i},[f])});export{_ as __tla,d as l};