import{cr as P,__tla as k}from"./index-DwlvCP4t.js";let h,x=Promise.all([(()=>{try{return k}catch{}})()]).then(async()=>{function g(n,o){for(var e=0;e<o.length;e++){const a=o[e];if(typeof a!="string"&&!Array.isArray(a)){for(const t in a)if(t!=="default"&&!(t in n)){const r=Object.getOwnPropertyDescriptor(a,t);r&&Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:()=>a[t]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var p,c;function f(){if(c)return p;c=1,p=n,n.displayName="http",n.aliases=[];function n(o){(function(e){function a(l){return RegExp("(^(?:"+l+"):[ 	]*(?![ 	]))[^]+","i")}e.languages.http={"request-line":{pattern:/^(?:CONNECT|DELETE|GET|HEAD|OPTIONS|PATCH|POST|PRI|PUT|SEARCH|TRACE)\s(?:https?:\/\/|\/)\S*\sHTTP\/[\d.]+/m,inside:{method:{pattern:/^[A-Z]+\b/,alias:"property"},"request-target":{pattern:/^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,lookbehind:!0,alias:"url",inside:e.languages.uri},"http-version":{pattern:/^(\s)HTTP\/[\d.]+/,lookbehind:!0,alias:"property"}}},"response-status":{pattern:/^HTTP\/[\d.]+ \d+ .+/m,inside:{"http-version":{pattern:/^HTTP\/[\d.]+/,alias:"property"},"status-code":{pattern:/^(\s)\d+(?=\s)/,lookbehind:!0,alias:"number"},"reason-phrase":{pattern:/^(\s).+/,lookbehind:!0,alias:"string"}}},header:{pattern:/^[\w-]+:.+(?:(?:\r\n?|\n)[ \t].+)*/m,inside:{"header-value":[{pattern:a(/Content-Security-Policy/.source),lookbehind:!0,alias:["csp","languages-csp"],inside:e.languages.csp},{pattern:a(/Public-Key-Pins(?:-Report-Only)?/.source),lookbehind:!0,alias:["hpkp","languages-hpkp"],inside:e.languages.hpkp},{pattern:a(/Strict-Transport-Security/.source),lookbehind:!0,alias:["hsts","languages-hsts"],inside:e.languages.hsts},{pattern:a(/[^:]+/.source),lookbehind:!0}],"header-name":{pattern:/^[^:]+/,alias:"keyword"},punctuation:/^:/}}};var t=e.languages,r={"application/javascript":t.javascript,"application/json":t.json||t.javascript,"application/xml":t.xml,"text/xml":t.xml,"text/html":t.html,"text/css":t.css,"text/plain":t.plain},m={"application/json":!0,"application/xml":!0};function y(l){var T=l.replace(/^[a-z]+\//,""),v="\\w+/(?:[\\w.-]+\\+)+"+T+"(?![+\\w.-])";return"(?:"+l+"|"+v+")"}var i;for(var s in r)if(r[s]){i=i||{};var b=m[s]?y(s):s;i[s.replace(/\//g,"-")]={pattern:RegExp("("+/content-type:\s*/.source+b+/(?:(?:\r\n?|\n)[\w-].*)*(?:\r(?:\n|(?!\n))|\n)/.source+")"+/[^ \t\w-][\s\S]*/.source,"i"),lookbehind:!0,inside:r[s]}}i&&e.languages.insertBefore("http","header",i)})(o)}return p}var u=f();let d;d=P(u),h=g({__proto__:null,default:d},[u])});export{x as __tla,h};
