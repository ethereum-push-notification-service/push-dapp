import{cr as d,__tla as f}from"./index-C3_SR6z9.js";let b,_=Promise.all([(()=>{try{return f}catch{}})()]).then(async()=>{function p(t,n){for(var s=0;s<n.length;s++){const e=n[s];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in t)){const o=Object.getOwnPropertyDescriptor(e,r);o&&Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var a,l;function u(){if(l)return a;l=1,a=t,t.displayName="gdscript",t.aliases=[];function t(n){n.languages.gdscript={comment:/#.*/,string:{pattern:/@?(?:("|')(?:(?!\1)[^\n\\]|\\[\s\S])*\1(?!"|')|"""(?:[^\\]|\\[\s\S])*?""")/,greedy:!0},"class-name":{pattern:/(^(?:class|class_name|extends)[ \t]+|^export\([ \t]*|\bas[ \t]+|(?:\b(?:const|var)[ \t]|[,(])[ \t]*\w+[ \t]*:[ \t]*|->[ \t]*)[a-zA-Z_]\w*/m,lookbehind:!0},keyword:/\b(?:and|as|assert|break|breakpoint|class|class_name|const|continue|elif|else|enum|export|extends|for|func|if|in|is|master|mastersync|match|not|null|onready|or|pass|preload|puppet|puppetsync|remote|remotesync|return|self|setget|signal|static|tool|var|while|yield)\b/,function:/\b[a-z_]\w*(?=[ \t]*\()/i,variable:/\$\w+/,number:[/\b0b[01_]+\b|\b0x[\da-fA-F_]+\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.[\d_]+)(?:e[+-]?[\d_]+)?\b/,/\b(?:INF|NAN|PI|TAU)\b/],constant:/\b[A-Z][A-Z_\d]*\b/,boolean:/\b(?:false|true)\b/,operator:/->|:=|&&|\|\||<<|>>|[-+*/%&|!<>=]=?|[~^]/,punctuation:/[.:,;()[\]{}]/}}return a}var i=u();let c;c=d(i),b=p({__proto__:null,default:c},[i])});export{_ as __tla,b as g};