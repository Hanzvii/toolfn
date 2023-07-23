// all 布尔全等判断
export const all = (arr, fn = Boolean) => {
    if (Object.prototype.toString.call(arr) != '[object Array]') {
        throw new Error('TypeError: first param must be Array');
    }
    return arr.every(fn);
};
// 检查数组各项相等
export const allEqual = (arr) => {
    if (Object.prototype.toString.call(arr) != '[object Array]') {
        throw new Error('TypeError: param must be Array');
    }
    return arr.every(val => val === arr[0]);
};
// 数组转CSV格式（带空格的字符串）
export const arrayToCSV = (arr, delimiter = ',') => {
    if (Object.prototype.toString.call(arr) != '[object Array]') {
        throw new Error('TypeError: first param must be Array');
    }
    if (Object.prototype.toString.call(delimiter) != '[object String]') {
        throw new Error('TypeError: second param must be String');
    }
    return arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join('\n');
};
export const averageBy = (arr, fn) => {
    if (Object.prototype.toString.call(arr) != '[object Array]') {
        throw new Error('TypeError: first param must be Array');
    }
    if (fn instanceof Function) {
        return arr.map(fn).reduce((acc, val) => acc + val, 0) /
            arr.length;
    }
    else {
        return arr.map(val => val[fn]).reduce((acc, val) => acc + val, 0) /
            arr.length;
    }
};
// bifurcate：拆分断言后的数组
export const bifurcate = (arr, filter) => {
    if (Object.prototype.toString.call(arr) != '[object Array]') {
        throw new Error('TypeError: first param must be Array');
    }
    return arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);
};
// castArray：其它类型转数组
export const castArray = (val) => (Array.isArray(val) ? val : [val]);
// compact：去除数组中的无效/无用值
export const compact = (arr) => {
    if (Object.prototype.toString.call(arr) != '[object Array]') {
        throw new Error('TypeError: param must be Array');
    }
    return arr.filter(Boolean);
};
// countOccurrences：检测数值出现次数
export const countOccurrences = (arr, val) => {
    if (Object.prototype.toString.call(arr) != '[object Array]') {
        throw new Error('TypeError: first param must be Array');
    }
    return arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
};
// deepFlatten：递归扁平化数组
export const deepFlatten = (arr) => {
    if (Object.prototype.toString.call(arr) != '[object Array]') {
        throw new Error('TypeError: param must be Array');
    }
    return [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));
};
// difference：寻找差异（并返回第一个数组独有的）
export const difference = (a, b, fn) => {
    if (Object.prototype.toString.call(a) != '[object Array]') {
        throw new Error('TypeError: first param must be Array');
    }
    if (Object.prototype.toString.call(b) != '[object Array]') {
        throw new Error('TypeError: second param must be Array');
    }
    let s;
    if (typeof fn == 'function'){
        s = new Set(b.map(fn));
        return a.filter(x => !s.has(fn(x)));
    }else {
        s = new Set(b);
    }
    return a.filter(x => !s.has(x));
};
// // differenceBy：先执行再寻找差异
// export const differenceBy = (a, b, fn) => {
//     if (Object.prototype.toString.call(a) != '[object Array]') {
//         throw new Error('TypeError: first param must be Array');
//     }
//     if (Object.prototype.toString.call(b) != '[object Array]') {
//         throw new Error('TypeError: second param must be Array');
//     }
//     const s = new Set(b.map(fn));
//     return a.filter(x => !s.has(fn(x)));
// };
// dropWhile：删除不符合条件的值
export const dropWhile = (arr, func) => {
    if (Object.prototype.toString.call(arr) != '[object Array]') {
        throw new Error('TypeError: first param must be Array');
    }
    while (arr.length > 0 && !func(arr[0]))
        arr = arr.slice(1);
    return arr;
};
// flatten：指定深度扁平化数组
export const flatten = (arr, depth = 1) => {
    if (Object.prototype.toString.call(arr) != '[object Array]') {
        throw new Error('TypeError: first param must be Array');
    }
    if (Object.prototype.toString.call(depth) != '[object Number]') {
        throw new Error('TypeError: second param must be Number');
    }
    return arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);
};
// indexOfAll：返回数组中某值的所有索引
export const indexOfAll = (arr, val) => {
    if (Object.prototype.toString.call(arr) != '[object Array]') {
        throw new Error('TypeError: first param must be Array');
    }
    return arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);
};
// intersection：两数组的交集
export const intersection = (a, b) => {
    if (Object.prototype.toString.call(a) != '[object Array]') {
        throw new Error('TypeError: first param must be Array');
    }
    if (Object.prototype.toString.call(b) != '[object Array]') {
        throw new Error('TypeError: second param must be Array');
    }
    const s = new Set(b);
    return a.filter(x => s.has(x));
};
// intersectionWith：两数组都符合条件的交集
export const intersectionBy = (a, b, fn) => {
    if (Object.prototype.toString.call(a) != '[object Array]') {
        throw new Error('TypeError: first param must be Array');
    }
    if (Object.prototype.toString.call(b) != '[object Array]') {
        throw new Error('TypeError: second param must be Array');
    }
    if (Object.prototype.toString.call(fn) != '[object Function]') {
        throw new Error('TypeError: third param must be Function');
    }
    const s = new Set(b.map(fn));
    return a.filter(x => s.has(fn(x)));
};

// negate：根据条件反向筛选
// export const negate = func => {
//     if(Object.prototype.toString.call(func) != '[object Function]') {
//         throw new Error('TypeError: param must be Function')
//     }
//     return (...args) => !func(...args);
// }
// sample：在指定数组中获取随机数
export const sample = (arr) => {
    if (Object.prototype.toString.call(arr) != '[object Array]') {
        throw new Error('TypeError: param must be Array');
    }
    return arr[Math.floor(Math.random() * arr.length)];
};
// randomIntArrayInRange：生成两数之间指定长度的随机数组
const randomIntArrayInRange = (min, max, n = 1) => {
    if (Object.prototype.toString.call(min) != '[object Number]') {
        throw new Error('TypeError: first param must be Number');
    }
    if (Object.prototype.toString.call(max) != '[object Number]') {
        throw new Error('TypeError: second param must be Number');
    }
    if (Object.prototype.toString.call(n) != '[object Number]') {
        throw new Error('TypeError: third param must be Number');
    }
    return Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);
};
// sampleSize：在指定数组中获取指定长度的随机数
export const sampleSize = (arr, n = 1) => {
    if (Object.prototype.toString.call(arr) != '[object Array]') {
        throw new Error('TypeError: first param must be Array');
    }
    if (Object.prototype.toString.call(n) != '[object Number]') {
        throw new Error('TypeError: second param must be Number');
    }
    let m = arr.length;
    while (m) {
        const i = Math.floor(Math.random() * m--);
        [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr.slice(0, n);
};
// shuffle：“洗牌” 数组
export const shuffle = (arr) => {
    if (Object.prototype.toString.call(arr) != '[object Array]') {
        throw new Error('TypeError: param must be Array');
    }
    let m = arr.length;
    while (m) {
        const i = Math.floor(Math.random() * m--);
        [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr;
};
// Array转tree
// export const array2Tree = (items, id = null, link = 'parent_id')=>{
//     if(Object.prototype.toString.call(arr) != '[object Array]') {
//         throw new Error('TypeError: first param must be Array')
//     }
//     return items
//     .filter(item => item[link] === id)
//     .map(item => ({ ...item, children: nest(items, item.id) }));
// }
// minN：返回指定长度的升序数组
export const minN = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n);
export default {
    all,
    allEqual,
    arrayToCSV,
    averageBy,
    bifurcate,
    castArray,
    compact,
    countOccurrences,
    deepFlatten,
    difference,
    // differenceBy,
    dropWhile,
    flatten,
    indexOfAll,
    intersection,
    intersectionBy,
    // intersectionWith,
    // negate,
    randomIntArrayInRange,
    sample,
    sampleSize,
    shuffle,
    minN
    // array2Tree
};
// console.log(intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor))
