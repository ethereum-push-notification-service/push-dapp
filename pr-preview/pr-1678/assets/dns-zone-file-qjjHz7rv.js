import{s as P,__tla as d}from"./index-CKK9e80c.js";let N,E=Promise.all([(()=>{try{return d}catch{}})()]).then(async()=>{function A(e,t){for(var o=0;o<t.length;o++){const r=t[o];if(typeof r!="string"&&!Array.isArray(r)){for(const n in r)if(n!=="default"&&!(n in e)){const s=Object.getOwnPropertyDescriptor(r,n);s&&Object.defineProperty(e,n,s.get?s:{enumerable:!0,get:()=>r[n]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var a,l;function I(){if(l)return a;l=1,a=e,e.displayName="dnsZoneFile",e.aliases=[];function e(t){t.languages["dns-zone-file"]={comment:/;.*/,string:{pattern:/"(?:\\.|[^"\\\r\n])*"/,greedy:!0},variable:[{pattern:/(^\$ORIGIN[ \t]+)\S+/m,lookbehind:!0},{pattern:/(^|\s)@(?=\s|$)/,lookbehind:!0}],keyword:/^\$(?:INCLUDE|ORIGIN|TTL)(?=\s|$)/m,class:{pattern:/(^|\s)(?:CH|CS|HS|IN)(?=\s|$)/,lookbehind:!0,alias:"keyword"},type:{pattern:/(^|\s)(?:A|A6|AAAA|AFSDB|APL|ATMA|CAA|CDNSKEY|CDS|CERT|CNAME|DHCID|DLV|DNAME|DNSKEY|DS|EID|GID|GPOS|HINFO|HIP|IPSECKEY|ISDN|KEY|KX|LOC|MAILA|MAILB|MB|MD|MF|MG|MINFO|MR|MX|NAPTR|NB|NBSTAT|NIMLOC|NINFO|NS|NSAP|NSAP-PTR|NSEC|NSEC3|NSEC3PARAM|NULL|NXT|OPENPGPKEY|PTR|PX|RKEY|RP|RRSIG|RT|SIG|SINK|SMIMEA|SOA|SPF|SRV|SSHFP|TA|TKEY|TLSA|TSIG|TXT|UID|UINFO|UNSPEC|URI|WKS|X25)(?=\s|$)/,lookbehind:!0,alias:"keyword"},punctuation:/[()]/},t.languages["dns-zone"]=t.languages["dns-zone-file"]}return a}var S=I();let i;i=P(S),N=A({__proto__:null,default:i},[S])});export{E as __tla,N as d};
