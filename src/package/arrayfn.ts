// all 布尔全等判断
export const all = <T>(arr:T[], fn: ((v:T,index:number,arr:T[])=>boolean)=Boolean): boolean => {
    if(Object.prototype.toString.call(arr) != '[object Array]') {
        throw new Error('typeErr: first param must be Array')
    }
    return arr.every(fn);
}
// 检查数组各项相等
export const allEqual = <T>(arr:T[]): boolean =>  {
    if(Object.prototype.toString.call(arr) != '[object Array]') {
        throw new Error('typeErr: param must be Array')
    }
    return arr.every(val => val === arr[0]);
}
export interface arrayT<T> extends Array<T> {
    [index: number]: T
}
// 数组转CSV格式（带空格的字符串）
export const arrayToCSV = <T>(arr: arrayT<T>[], delimiter: string = ',') => {
    if(Object.prototype.toString.call(arr) != '[object Array]') {
        throw new Error('typeErr: first param must be Array')
    }
    if(Object.prototype.toString.call(delimiter) != '[object String]') {
        throw new Error('typeErr: second param must be String')
    }
    return arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join('\n');
}
// averageBy：对象数组属性平均数
export interface averageByObj {
    [key: string]: any
}
export const averageBy = (arr:averageByObj[], fn:((item:averageByObj)=>any)|string) =>{
    if(Object.prototype.toString.call(arr) != '[object Array]') {
        throw new Error('typeErr: first param must be Array')
    }
    if(fn instanceof Function) {
        return arr.map(fn).reduce((acc, val) => acc + val, 0) /
        arr.length;
    }else {
        return arr.map(val => val[fn]).reduce((acc, val) => acc + val, 0) /
        arr.length;
    }
}
// bifurcate：拆分断言后的数组
export const bifurcate = (arr: any[], filter: boolean[]) =>{
    if(Object.prototype.toString.call(arr) != '[object Array]') {
        throw new Error('typeErr: first param must be Array')
    }
    return arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);
}
  
// castArray：其它类型转数组
export const castArray = <T>(val:T|T[]):T[] => (Array.isArray(val) ? val : [val]);
// compact：去除数组中的无效/无用值
export const compact = <T>(arr: T[]): T[] => {
    if(Object.prototype.toString.call(arr) != '[object Array]') {
        throw new Error('typeErr: param must be Array')
    }
    return arr.filter(Boolean);
}
// countOccurrences：检测数值出现次数
export const countOccurrences = (arr: any[], val: any):number => {
    if(Object.prototype.toString.call(arr) != '[object Array]') {
        throw new Error('typeErr: first param must be Array')
    }
    return arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
}
// deepFlatten：递归扁平化数组

export const deepFlatten = (arr: any[]):any[] => {
    if(Object.prototype.toString.call(arr) != '[object Array]') {
        throw new Error('typeErr: param must be Array')
    }
    return [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));
}
// difference：寻找差异（并返回第一个数组独有的）
  export  const difference = <T>(a:T[], b:T[]):T[] => {
    if(Object.prototype.toString.call(a) != '[object Array]') {
        throw new Error('typeErr: first param must be Array')
    }
    if(Object.prototype.toString.call(b) != '[object Array]') {
        throw new Error('typeErr: second param must be Array')
    }
    const s = new Set(b);
    return a.filter(x => !s.has(x));
  };
// differenceBy：先执行再寻找差异
  export  const differenceBy = <T>(a:T[], b:T[], fn: (item:T)=>void) => {
    if(Object.prototype.toString.call(a) != '[object Array]') {
        throw new Error('typeErr: first param must be Array')
    }
    if(Object.prototype.toString.call(b) != '[object Array]') {
        throw new Error('typeErr: second param must be Array')
    }
    const s = new Set(b.map(fn));
    return a.filter(x => !s.has(fn(x)));
  };
// dropWhile：删除不符合条件的值
  export const dropWhile = <T>(arr:T[], func:(item:T)=>boolean) => {
    if(Object.prototype.toString.call(arr) != '[object Array]') {
        throw new Error('typeErr: first param must be Array')
    }
    while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
    return arr;
  };
// flatten：指定深度扁平化数组
export const flatten = <T>(arr:T[], depth:number = 1):T[] =>{
    if(Object.prototype.toString.call(arr) != '[object Array]') {
        throw new Error('typeErr: first param must be Array')
    }
    if(Object.prototype.toString.call(arr) != '[object Number]') {
        throw new Error('typeErr: second param must be Number')
    }
    return arr.reduce((a:T[], v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);
}
  
// indexOfAll：返回数组中某值的所有索引
export const indexOfAll = <T>(arr:T[], val: T): number[] => {
    if(Object.prototype.toString.call(arr) != '[object Array]') {
        throw new Error('typeErr: first param must be Array')
    }
    return arr.reduce((acc: number[], el:T, i:number) => (el === val ? [...acc, i] : acc), []);
}
// intersection：两数组的交集
  export const intersection = <T>(a:T[], b:T[]): T[] => {
    if(Object.prototype.toString.call(a) != '[object Array]') {
        throw new Error('typeErr: first param must be Array')
    }
    if(Object.prototype.toString.call(b) != '[object Array]') {
        throw new Error('typeErr: second param must be Array')
    }
    const s = new Set(b);
    return a.filter(x => s.has(x));
  };
// intersectionWith：两数组都符合条件的交集
  export const intersectionBy = <T>(a:T[], b:T[], fn:(item: T)=>T) => {
    if(Object.prototype.toString.call(a) != '[object Array]') {
        throw new Error('typeErr: first param must be Array')
    }
    if(Object.prototype.toString.call(b) != '[object Array]') {
        throw new Error('typeErr: second param must be Array')
    }
    const s = new Set(b.map(fn));
    return a.filter(x => s.has(fn(x)));
  };

//   intersectionWith：先比较后返回交集
export const intersectionWith = <T>(a: T[], b: T[], comp:(a:T, b:T)=>boolean) => {
    if(Object.prototype.toString.call(a) != '[object Array]') {
        throw new Error('typeErr: first param must be Array')
    }
    if(Object.prototype.toString.call(b) != '[object Array]') {
        throw new Error('typeErr: second param must be Array')
    }
    if(Object.prototype.toString.call(comp) != '[object Function]') {
        throw new Error('typeErr: second param must be Function')
    }
    return a.filter(x => b.findIndex(y => comp(x, y)) !== -1);
}
// negate：根据条件反向筛选
// export const negate = func => {
//     if(Object.prototype.toString.call(func) != '[object Function]') {
//         throw new Error('typeErr: param must be Function')
//     }
//     return (...args) => !func(...args);
// }
// sample：在指定数组中获取随机数
export const sample = <T>(arr: T[]):T => {
    if(Object.prototype.toString.call(arr) != '[object Array]') {
        throw new Error('typeErr: param must be Array')
    }
    return arr[Math.floor(Math.random() * arr.length)];
}

// randomIntArrayInRange：生成两数之间指定长度的随机数组
const randomIntArrayInRange = (min: number, max: number, n:number = 1) =>{
    if(Object.prototype.toString.call(min) != '[object Number]') {
        throw new Error('typeErr: first param must be Number')
    }
    if(Object.prototype.toString.call(max) != '[object Number]') {
        throw new Error('typeErr: second param must be Number')
    }
    if(Object.prototype.toString.call(n) != '[object Number]') {
        throw new Error('typeErr: third param must be Number')
    }
    return Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);
}
  

// sampleSize：在指定数组中获取指定长度的随机数
  export  const sampleSize = <T>(arr:T[], n:number = 1):T[] => {
    if(Object.prototype.toString.call(arr) != '[object Array]') {
        throw new Error('typeErr: first param must be Array')
    }
    if(Object.prototype.toString.call(n) != '[object Number]') {
        throw new Error('typeErr: second param must be Number')
    }
    let m = arr.length;
    while (m) {
      const i = Math.floor(Math.random() * m--);
      [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr.slice(0, n);
  };

// shuffle：“洗牌” 数组
export const shuffle = <T>(arr: T[]) => {
    if(Object.prototype.toString.call(arr) != '[object Array]') {
        throw new Error('typeErr: param must be Array')
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
//         throw new Error('typeErr: first param must be Array')
//     }
//     return items
//     .filter(item => item[link] === id)
//     .map(item => ({ ...item, children: nest(items, item.id) }));
// }
export const minN = (arr: number[], n:number = 1) => [...arr].sort((a, b) => a - b).slice(0, n);


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
    differenceBy,
    dropWhile,
    flatten,
    indexOfAll,
    intersection,
    intersectionBy,
    intersectionWith,
    // negate,
    randomIntArrayInRange,
    sample,
    sampleSize,
    shuffle,
    minN
    // array2Tree
}

























// console.log(intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor))






