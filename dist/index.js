"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const r=(r,t=Boolean)=>{if("[object Array]"!=Object.prototype.toString.call(r))throw new Error("TypeError: first param must be Array");return r.every(t)},t=r=>{if("[object Array]"!=Object.prototype.toString.call(r))throw new Error("TypeError: param must be Array");return r.every((t=>t===r[0]))},e=(r,t=",")=>{if("[object Array]"!=Object.prototype.toString.call(r))throw new Error("TypeError: first param must be Array");if("[object String]"!=Object.prototype.toString.call(t))throw new Error("TypeError: second param must be String");return r.map((r=>r.map((r=>`"${r}"`)).join(t))).join("\n")},o=(r,t)=>{if("[object Array]"!=Object.prototype.toString.call(r))throw new Error("TypeError: first param must be Array");return t instanceof Function?r.map(t).reduce(((r,t)=>r+t),0)/r.length:r.map((r=>r[t])).reduce(((r,t)=>r+t),0)/r.length},a=(r,t)=>{if("[object Array]"!=Object.prototype.toString.call(r))throw new Error("TypeError: first param must be Array");return r.reduce(((r,e,o)=>(r[t[o]?0:1].push(e),r)),[[],[]])},p=r=>Array.isArray(r)?r:[r],n=r=>{if("[object Array]"!=Object.prototype.toString.call(r))throw new Error("TypeError: param must be Array");return r.filter(Boolean)},c=(r,t)=>{if("[object Array]"!=Object.prototype.toString.call(r))throw new Error("TypeError: first param must be Array");return r.reduce(((r,e)=>e===t?r+1:r),0)},y=r=>{if("[object Array]"!=Object.prototype.toString.call(r))throw new Error("TypeError: param must be Array");return[].concat(...r.map((r=>Array.isArray(r)?y(r):r)))},i=(r,t,e)=>{if("[object Array]"!=Object.prototype.toString.call(r))throw new Error("TypeError: first param must be Array");if("[object Array]"!=Object.prototype.toString.call(t))throw new Error("TypeError: second param must be Array");let o;return"function"==typeof e?(o=new Set(t.map(e)),r.filter((r=>!o.has(e(r))))):(o=new Set(t),r.filter((r=>!o.has(r))))},l=(r,t)=>{if("[object Array]"!=Object.prototype.toString.call(r))throw new Error("TypeError: first param must be Array");for(;r.length>0&&!t(r[0]);)r=r.slice(1);return r},s=(r,t=1)=>{if("[object Array]"!=Object.prototype.toString.call(r))throw new Error("TypeError: first param must be Array");if("[object Number]"!=Object.prototype.toString.call(t))throw new Error("TypeError: second param must be Number");return r.reduce(((r,e)=>r.concat(t>1&&Array.isArray(e)?s(e,t-1):e)),[])},b=(r,t)=>{if("[object Array]"!=Object.prototype.toString.call(r))throw new Error("TypeError: first param must be Array");return r.reduce(((r,e,o)=>e===t?[...r,o]:r),[])},m=(r,t)=>{if("[object Array]"!=Object.prototype.toString.call(r))throw new Error("TypeError: first param must be Array");if("[object Array]"!=Object.prototype.toString.call(t))throw new Error("TypeError: second param must be Array");const e=new Set(t);return r.filter((r=>e.has(r)))},u=(r,t,e)=>{if("[object Array]"!=Object.prototype.toString.call(r))throw new Error("TypeError: first param must be Array");if("[object Array]"!=Object.prototype.toString.call(t))throw new Error("TypeError: second param must be Array");if("[object Function]"!=Object.prototype.toString.call(e))throw new Error("TypeError: third param must be Function");const o=new Set(t.map(e));return r.filter((r=>o.has(e(r))))},f=r=>{if("[object Array]"!=Object.prototype.toString.call(r))throw new Error("TypeError: param must be Array");return r[Math.floor(Math.random()*r.length)]},j=(r,t=1)=>{if("[object Array]"!=Object.prototype.toString.call(r))throw new Error("TypeError: first param must be Array");if("[object Number]"!=Object.prototype.toString.call(t))throw new Error("TypeError: second param must be Number");let e=r.length;for(;e;){const t=Math.floor(Math.random()*e--);[r[e],r[t]]=[r[t],r[e]]}return r.slice(0,t)},w=r=>{if("[object Array]"!=Object.prototype.toString.call(r))throw new Error("TypeError: param must be Array");let t=r.length;for(;t;){const e=Math.floor(Math.random()*t--);[r[t],r[e]]=[r[e],r[t]]}return r},E=(r,t=1)=>[...r].sort(((r,t)=>r-t)).slice(0,t);var h={all:r,allEqual:t,arrayToCSV:e,averageBy:o,bifurcate:a,castArray:p,compact:n,countOccurrences:c,deepFlatten:y,difference:i,dropWhile:l,flatten:s,indexOfAll:b,intersection:m,intersectionBy:u,randomIntArrayInRange:(r,t,e=1)=>{if("[object Number]"!=Object.prototype.toString.call(r))throw new Error("TypeError: first param must be Number");if("[object Number]"!=Object.prototype.toString.call(t))throw new Error("TypeError: second param must be Number");if("[object Number]"!=Object.prototype.toString.call(e))throw new Error("TypeError: third param must be Number");return Array.from({length:e},(()=>Math.floor(Math.random()*(t-r+1))+r))},sample:f,sampleSize:j,shuffle:w,minN:E};let A=Object.assign(h);exports.all=r,exports.allEqual=t,exports.arrayToCSV=e,exports.averageBy=o,exports.bifurcate=a,exports.castArray=p,exports.compact=n,exports.countOccurrences=c,exports.deepFlatten=y,exports.default=A,exports.difference=i,exports.dropWhile=l,exports.flatten=s,exports.indexOfAll=b,exports.intersection=m,exports.intersectionBy=u,exports.minN=E,exports.sample=f,exports.sampleSize=j,exports.shuffle=w;