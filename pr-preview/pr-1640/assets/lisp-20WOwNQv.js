import{cr as v,__tla as w}from"./index-Cc9XGUGJ.js";let k,_=Promise.all([(()=>{try{return w}catch{}})()]).then(async()=>{function x(o,i){for(var t=0;t<i.length;t++){const r=i[t];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in o)){const e=Object.getOwnPropertyDescriptor(r,a);e&&Object.defineProperty(o,a,e.get?e:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}var l,b;function E(){if(b)return l;b=1,l=o,o.displayName="lisp",o.aliases=[];function o(i){(function(t){function r(g){return RegExp(/(\()/.source+"(?:"+g+")"+/(?=[\s\)])/.source)}function a(g){return RegExp(/([\s([])/.source+"(?:"+g+")"+/(?=[\s)])/.source)}var e=/(?!\d)[-+*/~!@$%^=<>{}\w]+/.source,R="&"+e,s="(\\()",h="(?=\\))",y="(?=\\s)",p=/(?:[^()]|\((?:[^()]|\((?:[^()]|\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\))*\))*\))*/.source,n={heading:{pattern:/;;;.*/,alias:["comment","title"]},comment:/;.*/,string:{pattern:/"(?:[^"\\]|\\.)*"/,greedy:!0,inside:{argument:/[-A-Z]+(?=[.,\s])/,symbol:RegExp("`"+e+"'")}},"quoted-symbol":{pattern:RegExp("#?'"+e),alias:["variable","symbol"]},"lisp-property":{pattern:RegExp(":"+e),alias:"property"},splice:{pattern:RegExp(",@?"+e),alias:["symbol","variable"]},keyword:[{pattern:RegExp(s+"(?:and|(?:cl-)?letf|cl-loop|cond|cons|error|if|(?:lexical-)?let\\*?|message|not|null|or|provide|require|setq|unless|use-package|when|while)"+y),lookbehind:!0},{pattern:RegExp(s+"(?:append|by|collect|concat|do|finally|for|in|return)"+y),lookbehind:!0}],declare:{pattern:r(/declare/.source),lookbehind:!0,alias:"keyword"},interactive:{pattern:r(/interactive/.source),lookbehind:!0,alias:"keyword"},boolean:{pattern:a(/nil|t/.source),lookbehind:!0},number:{pattern:a(/[-+]?\d+(?:\.\d*)?/.source),lookbehind:!0},defvar:{pattern:RegExp(s+"def(?:const|custom|group|var)\\s+"+e),lookbehind:!0,inside:{keyword:/^def[a-z]+/,variable:RegExp(e)}},defun:{pattern:RegExp(s+/(?:cl-)?(?:defmacro|defun\*?)\s+/.source+e+/\s+\(/.source+p+/\)/.source),lookbehind:!0,greedy:!0,inside:{keyword:/^(?:cl-)?def\S+/,arguments:null,function:{pattern:RegExp("(^\\s)"+e),lookbehind:!0},punctuation:/[()]/}},lambda:{pattern:RegExp(s+"lambda\\s+\\(\\s*(?:&?"+e+"(?:\\s+&?"+e+")*\\s*)?\\)"),lookbehind:!0,greedy:!0,inside:{keyword:/^lambda/,arguments:null,punctuation:/[()]/}},car:{pattern:RegExp(s+e),lookbehind:!0},punctuation:[/(?:['`,]?\(|[)\[\]])/,{pattern:/(\s)\.(?=\s)/,lookbehind:!0}]},u={"lisp-marker":RegExp(R),varform:{pattern:RegExp(/\(/.source+e+/\s+(?=\S)/.source+p+/\)/.source),inside:n},argument:{pattern:RegExp(/(^|[\s(])/.source+e),lookbehind:!0,alias:"variable"},rest:n},d="\\S+(?:\\s+\\S+)*",c={pattern:RegExp(s+p+h),lookbehind:!0,inside:{"rest-vars":{pattern:RegExp("&(?:body|rest)\\s+"+d),inside:u},"other-marker-vars":{pattern:RegExp("&(?:aux|optional)\\s+"+d),inside:u},keys:{pattern:RegExp("&key\\s+"+d+"(?:\\s+&allow-other-keys)?"),inside:u},argument:{pattern:RegExp(e),alias:"variable"},punctuation:/[()]/}};n.lambda.inside.arguments=c,n.defun.inside.arguments=t.util.clone(c),n.defun.inside.arguments.inside.sublist=c,t.languages.lisp=n,t.languages.elisp=n,t.languages.emacs=n,t.languages["emacs-lisp"]=n})(i)}return l}var m=E();let f;f=v(m),k=x({__proto__:null,default:f},[m])});export{_ as __tla,k as l};
