import{cr as f,__tla as y}from"./index-BcmAHWWu.js";let p,_=Promise.all([(()=>{try{return y}catch{}})()]).then(async()=>{function u(n,a){for(var o=0;o<a.length;o++){const e=a[o];if(typeof e!="string"&&!Array.isArray(e)){for(const t in e)if(t!=="default"&&!(t in n)){const r=Object.getOwnPropertyDescriptor(e,t);r&&Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:()=>e[t]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var i,l;function d(){if(l)return i;l=1,i=n,n.displayName="jq",n.aliases=[];function n(a){(function(o){var e=/\\\((?:[^()]|\([^()]*\))*\)/.source,t=RegExp(/(^|[^\\])"(?:[^"\r\n\\]|\\[^\r\n(]|__)*"/.source.replace(/__/g,function(){return e})),r={interpolation:{pattern:RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+e),lookbehind:!0,inside:{content:{pattern:/^(\\\()[\s\S]+(?=\)$)/,lookbehind:!0,inside:null},punctuation:/^\\\(|\)$/}}},b=o.languages.jq={comment:/#.*/,property:{pattern:RegExp(t.source+/(?=\s*:(?!:))/.source),lookbehind:!0,greedy:!0,inside:r},string:{pattern:t,lookbehind:!0,greedy:!0,inside:r},function:{pattern:/(\bdef\s+)[a-z_]\w+/i,lookbehind:!0},variable:/\B\$\w+/,"property-literal":{pattern:/\b[a-z_]\w*(?=\s*:(?!:))/i,alias:"property"},keyword:/\b(?:as|break|catch|def|elif|else|end|foreach|if|import|include|label|module|modulemeta|null|reduce|then|try|while)\b/,boolean:/\b(?:false|true)\b/,number:/(?:\b\d+\.|\B\.)?\b\d+(?:[eE][+-]?\d+)?\b/,operator:[{pattern:/\|=?/,alias:"pipe"},/\.\.|[!=<>]?=|\?\/\/|\/\/=?|[-+*/%]=?|[<>?]|\b(?:and|not|or)\b/],"c-style-function":{pattern:/\b[a-z_]\w*(?=\s*\()/i,alias:"function"},punctuation:/::|[()\[\]{},:;]|\.(?=\s*[\[\w$])/,dot:{pattern:/\./,alias:"important"}};r.interpolation.inside.content.inside=b})(a)}return i}var s=d();let c;c=f(s),p=u({__proto__:null,default:c},[s])});export{_ as __tla,p as j};
