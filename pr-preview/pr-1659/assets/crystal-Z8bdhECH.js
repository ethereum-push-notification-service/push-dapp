import{cr as _,__tla as p}from"./index-CLjNtL_g.js";import{r as g}from"./ruby-DYsn9XfW.js";let d,b=Promise.all([(()=>{try{return p}catch{}})()]).then(async()=>{function c(a,t){for(var r=0;r<t.length;r++){const e=t[r];if(typeof e!="string"&&!Array.isArray(e)){for(const n in e)if(n!=="default"&&!(n in a)){const s=Object.getOwnPropertyDescriptor(e,n);s&&Object.defineProperty(a,n,s.get?s:{enumerable:!0,get:()=>e[n]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var i,o;function f(){if(o)return i;o=1;var a=g();i=t,t.displayName="crystal",t.aliases=[];function t(r){r.register(a),function(e){e.languages.crystal=e.languages.extend("ruby",{keyword:[/\b(?:__DIR__|__END_LINE__|__FILE__|__LINE__|abstract|alias|annotation|as|asm|begin|break|case|class|def|do|else|elsif|end|ensure|enum|extend|for|fun|if|ifdef|include|instance_sizeof|lib|macro|module|next|of|out|pointerof|private|protected|ptr|require|rescue|return|select|self|sizeof|struct|super|then|type|typeof|undef|uninitialized|union|unless|until|when|while|with|yield)\b/,{pattern:/(\.\s*)(?:is_a|responds_to)\?/,lookbehind:!0}],number:/\b(?:0b[01_]*[01]|0o[0-7_]*[0-7]|0x[\da-fA-F_]*[\da-fA-F]|(?:\d(?:[\d_]*\d)?)(?:\.[\d_]*\d)?(?:[eE][+-]?[\d_]*\d)?)(?:_(?:[uif](?:8|16|32|64))?)?\b/,operator:[/->/,e.languages.ruby.operator],punctuation:/[(){}[\].,;\\]/}),e.languages.insertBefore("crystal","string-literal",{attribute:{pattern:/@\[.*?\]/,inside:{delimiter:{pattern:/^@\[|\]$/,alias:"punctuation"},attribute:{pattern:/^(\s*)\w+/,lookbehind:!0,alias:"class-name"},args:{pattern:/\S(?:[\s\S]*\S)?/,inside:e.languages.crystal}}},expansion:{pattern:/\{(?:\{.*?\}|%.*?%)\}/,inside:{content:{pattern:/^(\{.)[\s\S]+(?=.\}$)/,lookbehind:!0,inside:e.languages.crystal},delimiter:{pattern:/^\{[\{%]|[\}%]\}$/,alias:"operator"}}},char:{pattern:/'(?:[^\\\r\n]{1,2}|\\(?:.|u(?:[A-Fa-f0-9]{1,4}|\{[A-Fa-f0-9]{1,6}\})))'/,greedy:!0}})}(r)}return i}var l=f();let u;u=_(l),d=c({__proto__:null,default:u},[l])});export{b as __tla,d as c};
