import{cr as p,__tla as f}from"./index-BT1iobQv.js";let c,b=Promise.all([(()=>{try{return f}catch{}})()]).then(async()=>{function d(t,n){for(var o=0;o<n.length;o++){const e=n[o];if(typeof e!="string"&&!Array.isArray(e)){for(const a in e)if(a!=="default"&&!(a in t)){const s=Object.getOwnPropertyDescriptor(e,a);s&&Object.defineProperty(t,a,s.get?s:{enumerable:!0,get:()=>e[a]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var r,i;function m(){if(i)return r;i=1,r=t,t.displayName="jsstacktrace",t.aliases=[];function t(n){n.languages.jsstacktrace={"error-message":{pattern:/^\S.*/m,alias:"string"},"stack-frame":{pattern:/(^[ \t]+)at[ \t].*/m,lookbehind:!0,inside:{"not-my-code":{pattern:/^at[ \t]+(?!\s)(?:node\.js|<unknown>|.*(?:node_modules|\(<anonymous>\)|\(<unknown>|<anonymous>$|\(internal\/|\(node\.js)).*/m,alias:"comment"},filename:{pattern:/(\bat\s+(?!\s)|\()(?:[a-zA-Z]:)?[^():]+(?=:)/,lookbehind:!0,alias:"url"},function:{pattern:/(\bat\s+(?:new\s+)?)(?!\s)[_$a-zA-Z\xA0-\uFFFF<][.$\w\xA0-\uFFFF<>]*/,lookbehind:!0,inside:{punctuation:/\./}},punctuation:/[()]/,keyword:/\b(?:at|new)\b/,alias:{pattern:/\[(?:as\s+)?(?!\s)[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\]/,alias:"variable"},"line-number":{pattern:/:\d+(?::\d+)?\b/,alias:"number",inside:{punctuation:/:/}}}}}}return r}var l=m();let u;u=p(l),c=d({__proto__:null,default:u},[l])});export{b as __tla,c as j};
