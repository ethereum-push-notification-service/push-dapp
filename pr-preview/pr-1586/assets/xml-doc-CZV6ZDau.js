import{cr as y,__tla as _}from"./index-Cur82iCp.js";let g,b=Promise.all([(()=>{try{return _}catch{}})()]).then(async()=>{function u(r,i){for(var a=0;a<i.length;a++){const e=i[a];if(typeof e!="string"&&!Array.isArray(e)){for(const t in e)if(t!=="default"&&!(t in r)){const n=Object.getOwnPropertyDescriptor(e,t);n&&Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:()=>e[t]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var o,l;function m(){if(l)return o;l=1,o=r,r.displayName="xmlDoc",r.aliases=[];function r(i){(function(a){function e(f,d){a.languages[f]&&a.languages.insertBefore(f,"comment",{"doc-comment":d})}var t=a.languages.markup.tag,n={pattern:/\/\/\/.*/,greedy:!0,alias:"comment",inside:{tag:t}},p={pattern:/'''.*/,greedy:!0,alias:"comment",inside:{tag:t}};e("csharp",n),e("fsharp",n),e("vbnet",p)})(i)}return o}var c=m();let s;s=y(c),g=u({__proto__:null,default:s},[c])});export{b as __tla,g as x};