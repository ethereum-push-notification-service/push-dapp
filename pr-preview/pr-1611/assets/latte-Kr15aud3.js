import{cr as d,__tla as h}from"./index-DwlvCP4t.js";import{r as S}from"./markup-templating-BxAVv-bL.js";import{r as _}from"./php-E3TmF6re.js";let g,b=Promise.all([(()=>{try{return h}catch{}})()]).then(async()=>{function f(n,l){for(var a=0;a<l.length;a++){const t=l[a];if(typeof t!="string"&&!Array.isArray(t)){for(const e in t)if(e!=="default"&&!(e in n)){const r=Object.getOwnPropertyDescriptor(t,e);r&&Object.defineProperty(n,e,r.get?r:{enumerable:!0,get:()=>t[e]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var s,o;function c(){if(o)return s;o=1;var n=S(),l=_();s=a,a.displayName="latte",a.aliases=[];function a(t){t.register(n),t.register(l),function(e){e.languages.latte={comment:/^\{\*[\s\S]*/,"latte-tag":{pattern:/(^\{(?:\/(?=[a-z]))?)(?:[=_]|[a-z]\w*\b(?!\())/i,lookbehind:!0,alias:"important"},delimiter:{pattern:/^\{\/?|\}$/,alias:"punctuation"},php:{pattern:/\S(?:[\s\S]*\S)?/,alias:"language-php",inside:e.languages.php}};var r=e.languages.extend("markup",{});e.languages.insertBefore("inside","attr-value",{"n-attr":{pattern:/n:[\w-]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+))?/,inside:{"attr-name":{pattern:/^[^\s=]+/,alias:"important"},"attr-value":{pattern:/=[\s\S]+/,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}],php:{pattern:/\S(?:[\s\S]*\S)?/,inside:e.languages.php}}}}}},r.tag),e.hooks.add("before-tokenize",function(i){if(i.language==="latte"){var m=/\{\*[\s\S]*?\*\}|\{[^'"\s{}*](?:[^"'/{}]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|\/\*(?:[^*]|\*(?!\/))*\*\/)*\}/g;e.languages["markup-templating"].buildPlaceholders(i,"latte",m),i.grammar=r}}),e.hooks.add("after-tokenize",function(i){e.languages["markup-templating"].tokenizePlaceholders(i,"latte")})}(t)}return s}var p=c();let u;u=d(p),g=f({__proto__:null,default:u},[p])});export{b as __tla,g as l};
