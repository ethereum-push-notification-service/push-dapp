import{cr as b,__tla as g}from"./index-Vkv2POv9.js";let d,f=Promise.all([(()=>{try{return g}catch{}})()]).then(async()=>{function u(n,e){for(var o=0;o<e.length;o++){const t=e[o];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in n)){const i=Object.getOwnPropertyDescriptor(t,r);i&&Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var a,s;function p(){if(s)return a;s=1,a=n,n.displayName="concurnas",n.aliases=["conc"];function n(e){e.languages.concurnas={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?(?:\*\/|$)|\/\/.*)/,lookbehind:!0,greedy:!0},langext:{pattern:/\b\w+\s*\|\|[\s\S]+?\|\|/,greedy:!0,inside:{"class-name":/^\w+/,string:{pattern:/(^\s*\|\|)[\s\S]+(?=\|\|$)/,lookbehind:!0},punctuation:/\|\|/}},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/,lookbehind:!0},keyword:/\b(?:abstract|actor|also|annotation|assert|async|await|bool|boolean|break|byte|case|catch|changed|char|class|closed|constant|continue|def|default|del|double|elif|else|enum|every|extends|false|finally|float|for|from|global|gpudef|gpukernel|if|import|in|init|inject|int|lambda|local|long|loop|match|new|nodefault|null|of|onchange|open|out|override|package|parfor|parforsync|post|pre|private|protected|provide|provider|public|return|shared|short|single|size_t|sizeof|super|sync|this|throw|trait|trans|transient|true|try|typedef|unchecked|using|val|var|void|while|with)\b/,boolean:/\b(?:false|true)\b/,number:/\b0b[01][01_]*L?\b|\b0x(?:[\da-f_]*\.)?[\da-f_p+-]+\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfls]?/i,punctuation:/[{}[\];(),.:]/,operator:/<==|>==|=>|->|<-|<>|&==|&<>|\?:?|\.\?|\+\+|--|[-+*/=<>]=?|[!^~]|\b(?:and|as|band|bor|bxor|comp|is|isnot|mod|or)\b=?/,annotation:{pattern:/@(?:\w+:)?(?:\w+|\[[^\]]+\])?/,alias:"builtin"}},e.languages.insertBefore("concurnas","langext",{"regex-literal":{pattern:/\br("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:e.languages.concurnas},regex:/[\s\S]+/}},"string-literal":{pattern:/(?:\B|\bs)("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:e.languages.concurnas},string:/[\s\S]+/}}}),e.languages.conc=e.languages.concurnas}return a}var l=p();let c;c=b(l),d=u({__proto__:null,default:c},[l])});export{f as __tla,d as c};
