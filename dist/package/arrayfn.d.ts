export declare const all: <T>(arr: T[], fn?: (v: T, index: number, arr: T[]) => boolean) => boolean;
export declare const allEqual: <T>(arr: T[]) => boolean;
interface arrayT<T> extends Array<T> {
    [index: number]: T;
}
export declare const arrayToCSV: <T>(arr: arrayT<T>[], delimiter?: string) => string;
interface averageByObj {
    [key: string]: any;
}
export declare const averageBy: (arr: averageByObj[], fn: string | ((item: averageByObj) => any)) => number;
export declare const bifurcate: (arr: any[], filter: boolean[]) => any;
export declare const castArray: <T>(val: T | T[]) => T[];
export declare const compact: <T>(arr: T[]) => T[];
export declare const countOccurrences: (arr: any[], val: any) => number;
export declare const deepFlatten: (arr: any[]) => any[];
export declare const difference: <T>(a: T[], b: T[]) => T[];
export declare const differenceBy: <T>(a: T[], b: T[], fn: (item: T) => void) => T[];
export declare const dropWhile: <T>(arr: T[], func: (item: T) => boolean) => T[];
export declare const flatten: <T>(arr: T[], depth?: number) => T[];
export declare const indexOfAll: <T>(arr: T[], val: T) => number[];
export declare const intersection: <T>(a: T[], b: T[]) => T[];
export declare const intersectionBy: <T>(a: T[], b: T[], fn: (item: T) => T) => T[];
export declare const intersectionWith: <T>(a: T[], b: T[], comp: (a: T, b: T) => boolean) => T[];
export declare const sample: <T>(arr: T[]) => T;
export declare const sampleSize: <T>(arr: T[], n?: number) => T[];
export declare const shuffle: <T>(arr: T[]) => T[];
export declare const minN: (arr: number[], n?: number) => number[];
declare const _default: {
    all: <T>(arr: T[], fn?: (v: T, index: number, arr: T[]) => boolean) => boolean;
    allEqual: <T_1>(arr: T_1[]) => boolean;
    arrayToCSV: <T_2>(arr: arrayT<T_2>[], delimiter?: string) => string;
    averageBy: (arr: averageByObj[], fn: string | ((item: averageByObj) => any)) => number;
    bifurcate: (arr: any[], filter: boolean[]) => any;
    castArray: <T_3>(val: T_3 | T_3[]) => T_3[];
    compact: <T_4>(arr: T_4[]) => T_4[];
    countOccurrences: (arr: any[], val: any) => number;
    deepFlatten: (arr: any[]) => any[];
    difference: <T_5>(a: T_5[], b: T_5[]) => T_5[];
    differenceBy: <T_6>(a: T_6[], b: T_6[], fn: (item: T_6) => void) => T_6[];
    dropWhile: <T_7>(arr: T_7[], func: (item: T_7) => boolean) => T_7[];
    flatten: <T_8>(arr: T_8[], depth?: number) => T_8[];
    indexOfAll: <T_9>(arr: T_9[], val: T_9) => number[];
    intersection: <T_10>(a: T_10[], b: T_10[]) => T_10[];
    intersectionBy: <T_11>(a: T_11[], b: T_11[], fn: (item: T_11) => T_11) => T_11[];
    intersectionWith: <T_12>(a: T_12[], b: T_12[], comp: (a: T_12, b: T_12) => boolean) => T_12[];
    randomIntArrayInRange: (min: number, max: number, n?: number) => number[];
    sample: <T_13>(arr: T_13[]) => T_13;
    sampleSize: <T_14>(arr: T_14[], n?: number) => T_14[];
    shuffle: <T_15>(arr: T_15[]) => T_15[];
    minN: (arr: number[], n?: number) => number[];
};
export default _default;
