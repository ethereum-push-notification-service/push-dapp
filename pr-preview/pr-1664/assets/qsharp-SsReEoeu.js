import{s as k,__tla as x}from"./index-D-XcfI2a.js";let _,O=Promise.all([(()=>{try{return x}catch{}})()]).then(async()=>{function q(a,i){for(var r=0;r<i.length;r++){const n=i[r];if(typeof n!="string"&&!Array.isArray(n)){for(const e in n)if(e!=="default"&&!(e in a)){const o=Object.getOwnPropertyDescriptor(n,e);o&&Object.defineProperty(a,e,o.get?o:{enumerable:!0,get:()=>n[e]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var u,p;function w(){if(p)return u;p=1,u=a,a.displayName="qsharp",a.aliases=["qs"];function a(i){(function(r){function n(t,s){return t.replace(/<<(\d+)>>/g,function(l,j){return"(?:"+s[+j]+")"})}function e(t,s,l){return RegExp(n(t,s),"")}function o(t,s){for(var l=0;l<s;l++)t=t.replace(/<<self>>/g,function(){return"(?:"+t+")"});return t.replace(/<<self>>/g,"[^\\s\\S]")}var b={type:"Adj BigInt Bool Ctl Double false Int One Pauli PauliI PauliX PauliY PauliZ Qubit Range Result String true Unit Zero",other:"Adjoint adjoint apply as auto body borrow borrowing Controlled controlled distribute elif else fail fixup for function if in internal intrinsic invert is let mutable namespace new newtype open operation repeat return self set until use using while within"};function v(t){return"\\b(?:"+t.trim().replace(/ /g,"|")+")\\b"}var f=RegExp(v(b.type+" "+b.other)),P=/\b[A-Za-z_]\w*\b/.source,d=n(/<<0>>(?:\s*\.\s*<<0>>)*/.source,[P]),y={keyword:f,punctuation:/[<>()?,.:[\]]/},h=/"(?:\\.|[^\\"])*"/.source;r.languages.qsharp=r.languages.extend("clike",{comment:/\/\/.*/,string:[{pattern:e(/(^|[^$\\])<<0>>/.source,[h]),lookbehind:!0,greedy:!0}],"class-name":[{pattern:e(/(\b(?:as|open)\s+)<<0>>(?=\s*(?:;|as\b))/.source,[d]),lookbehind:!0,inside:y},{pattern:e(/(\bnamespace\s+)<<0>>(?=\s*\{)/.source,[d]),lookbehind:!0,inside:y}],keyword:f,number:/(?:\b0(?:x[\da-f]+|b[01]+|o[0-7]+)|(?:\B\.\d+|\b\d+(?:\.\d*)?)(?:e[-+]?\d+)?)l?\b/i,operator:/\band=|\bor=|\band\b|\bnot\b|\bor\b|<[-=]|[-=]>|>>>=?|<<<=?|\^\^\^=?|\|\|\|=?|&&&=?|w\/=?|~~~|[*\/+\-^=!%]=?/,punctuation:/::|[{}[\];(),.:]/}),r.languages.insertBefore("qsharp","number",{range:{pattern:/\.\./,alias:"operator"}});var m=o(n(/\{(?:[^"{}]|<<0>>|<<self>>)*\}/.source,[h]),2);r.languages.insertBefore("qsharp","string",{"interpolation-string":{pattern:e(/\$"(?:\\.|<<0>>|[^\\"{])*"/.source,[m]),greedy:!0,inside:{interpolation:{pattern:e(/((?:^|[^\\])(?:\\\\)*)<<0>>/.source,[m]),lookbehind:!0,inside:{punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-qsharp",inside:r.languages.qsharp}}},string:/[\s\S]+/}}})})(i),i.languages.qs=i.languages.qsharp}return u}var c=w();let g;g=k(c),_=q({__proto__:null,default:g},[c])});export{O as __tla,_ as q};
