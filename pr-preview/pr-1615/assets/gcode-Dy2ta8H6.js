import{cr as g,__tla as p}from"./index-BcmAHWWu.js";let u,y=Promise.all([(()=>{try{return p}catch{}})()]).then(async()=>{function f(e,n){for(var o=0;o<n.length;o++){const t=n[o];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in e)){const i=Object.getOwnPropertyDescriptor(t,r);i&&Object.defineProperty(e,r,i.get?i:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var a,l;function d(){if(l)return a;l=1,a=e,e.displayName="gcode",e.aliases=[];function e(n){n.languages.gcode={comment:/;.*|\B\(.*?\)\B/,string:{pattern:/"(?:""|[^"])*"/,greedy:!0},keyword:/\b[GM]\d+(?:\.\d+)?\b/,property:/\b[A-Z]/,checksum:{pattern:/(\*)\d+/,lookbehind:!0,alias:"number"},punctuation:/[:*]/}}return a}var c=d();let s;s=g(c),u=f({__proto__:null,default:s},[c])});export{y as __tla,u as g};
