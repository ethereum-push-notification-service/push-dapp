import{s as f,__tla as u}from"./index-jHipGTpH.js";let b,g=Promise.all([(()=>{try{return u}catch{}})()]).then(async()=>{function c(e,t){for(var o=0;o<t.length;o++){const r=t[o];if(typeof r!="string"&&!Array.isArray(r)){for(const n in r)if(n!=="default"&&!(n in e)){const a=Object.getOwnPropertyDescriptor(r,n);a&&Object.defineProperty(e,n,a.get?a:{enumerable:!0,get:()=>r[n]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var i,s;function p(){if(s)return i;s=1,i=e,e.displayName="brightscript",e.aliases=[];function e(t){t.languages.brightscript={comment:/(?:\brem|').*/i,"directive-statement":{pattern:/(^[\t ]*)#(?:const|else(?:[\t ]+if)?|end[\t ]+if|error|if).*/im,lookbehind:!0,alias:"property",inside:{"error-message":{pattern:/(^#error).+/,lookbehind:!0},directive:{pattern:/^#(?:const|else(?:[\t ]+if)?|end[\t ]+if|error|if)/,alias:"keyword"},expression:{pattern:/[\s\S]+/,inside:null}}},property:{pattern:/([\r\n{,][\t ]*)(?:(?!\d)\w+|"(?:[^"\r\n]|"")*"(?!"))(?=[ \t]*:)/,lookbehind:!0,greedy:!0},string:{pattern:/"(?:[^"\r\n]|"")*"(?!")/,greedy:!0},"class-name":{pattern:/(\bAs[\t ]+)\w+/i,lookbehind:!0},keyword:/\b(?:As|Dim|Each|Else|Elseif|End|Exit|For|Function|Goto|If|In|Print|Return|Step|Stop|Sub|Then|To|While)\b/i,boolean:/\b(?:false|true)\b/i,function:/\b(?!\d)\w+(?=[\t ]*\()/,number:/(?:\b\d+(?:\.\d+)?(?:[ed][+-]\d+)?|&h[a-f\d]+)\b[%&!#]?/i,operator:/--|\+\+|>>=?|<<=?|<>|[-+*/\\<>]=?|[:^=?]|\b(?:and|mod|not|or)\b/i,punctuation:/[.,;()[\]{}]/,constant:/\b(?:LINE_NUM)\b/i},t.languages.brightscript["directive-statement"].inside.expression.inside=t.languages.brightscript}return i}var l=p();let d;d=f(l),b=c({__proto__:null,default:d},[l])});export{g as __tla,b};
