import array from '../src/package/arrayfn.js'
const mockMath = Object.create(global.Math);
mockMath.random = () => 0.5;
global.Math = mockMath;
describe('array 功能函数', () => {

    describe('all 布尔全等判断', () => {
        test('正确的测试用例', () => {
            expect(array.all([1, 2, 3])).toBe(true)
            expect(array.all([1,2,3,4], x=>x>1)).toBe(false)
            expect(array.all([1,'12',false,null,3,4,{a:1}])).toBe(false)
        })
        test('错误的测试用例', () => {
            expect(() => { array.all() }).toThrow()
            expect(() => { array.all(null) }).toThrow()
            expect(() => { array.all({ a: 1, b: 2 }) }).toThrow()
        })
    })

    describe('allEqual 检查数组各项相等', () => {
        test('正确的测试用例', () => {
            expect(array.allEqual([1, 2, 3])).toBe(false)
            expect(array.allEqual([])).toBe(true)
            expect(array.allEqual([1,1,1,1])).toBe(true)
            expect(array.allEqual([1,'12',false,null,3,4,{a:1}])).toBe(false)
            expect(array.allEqual([1,'1',true])).toBe(false)
        })
        test('错误的测试用例', () => {
            expect(() => { array.allEqual() }).toThrow()
            expect(() => { array.allEqual(null) }).toThrow()
            expect(() => { array.allEqual({ a: 1, b: 2 }) }).toThrow()
        })
    })

    describe('arrayToCSV 检查数组各项相等', () => {
        test('正确的测试用例', () => {
            expect(array.arrayToCSV([['姓名','性别','年龄'], ['lily','女',18],['lily','女',18]])).toBe('"姓名","性别","年龄"\n"lily","女","18"\n"lily","女","18"')
        })
        test('错误的测试用例', () => {
            expect(() => { array.arrayToCSV({}) }).toThrow()
            expect(() => { array.arrayToCSV(null) }).toThrow()
            expect(() => { array.arrayToCSV([['姓名','性别','年龄'], ['lily','女',18]],2) }).toThrow()
        })
    })
    describe('averageBy 检查数组各项相等', () => {
        test('正确的测试用例', () => {
            expect(array.averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n)).toBe(5)
            expect(array.averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n')).toBe(5)
        })
        test('错误的测试用例', () => {
            expect(() => { array.averageBy({}) }).toThrow()
            expect(() => { array.averageBy(null) }).toThrow()
        })
    })
    describe('bifurcate 检查数组各项相等', () => {
        test('正确的测试用例', () => {
            expect(array.bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true])).toEqual([ ['beep', 'boop', 'bar'], ['foo'] ])
        })
        test('错误的测试用例', () => {
            expect(() => { array.bifurcate({}) }).toThrow()
            expect(() => { array.bifurcate(null) }).toThrow()
        })
    })
    describe('castArray 其它类型转数组', () => {
        test('正确的测试用例', () => {
            expect(array.castArray(['beep', 'boop', 'foo', 'bar'])).toEqual(['beep', 'boop', 'foo', 'bar'])
            expect(array.castArray(1)).toEqual([1])
            expect(array.castArray({})).toEqual([{}])
        })
    })
    describe('compact 去除数组中的无效/无用值,转boolean为false', () => {
        test('正确的测试用例', () => {
            expect(array.compact(['beep', false, 'foo', 'bar'])).toEqual(['beep', 'foo', 'bar'])
            expect(array.compact(['beep', 0, 'foo', 'bar'])).toEqual(['beep', 'foo', 'bar'])
        })
        test('错误的测试用例', () => {
            expect(() => { array.compact({}) }).toThrow()
        })
    })
    describe('countOccurrences 检测数值出现次数', () => {
        test('正确的测试用例', () => {
            expect(array.countOccurrences(['beep', false, 'foo', 'bar'],'beep')).toBe(1)
            expect(array.countOccurrences([1,2,2,2,2,2,2,1],1)).toBe(2)
        })
        test('错误的测试用例', () => {
            expect(() => { array.countOccurrences({}) }).toThrow()
        })
    })

    describe('deepFlatten 数组扁平化', () => {
        test('正确的测试用例', () => {
            expect(array.deepFlatten([1, 2, 3, [4, [5]]])).toEqual([1, 2, 3, 4, 5])
            expect(array.deepFlatten([[1], 2, 3, [4, [5]]])).toEqual([1, 2, 3, 4, 5])
            expect(array.deepFlatten([[1], [2, 3, [4, [5]]]])).toEqual([1, 2, 3, 4, 5])
            expect(array.deepFlatten([])).toEqual([])
        })
        test('错误的测试用例', () => {
            expect(() => { array.deepFlatten() }).toThrow()
            expect(() => { array.deepFlatten(null) }).toThrow()
            expect(() => { array.deepFlatten({ a: 1, b: 2 }) }).toThrow()
        })
    })
    describe('difference 寻找差异（并返回第一个数组独有的）', () => {
        test('正确的测试用例', () => {
            expect(array.difference([1, 2, 3],[2,3,4])).toEqual([1])
            expect(array.difference([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x)).toEqual([{x:2}])
            expect(array.difference([null, 2, 3],[2,3,4])).toEqual([null])
        })
        test('错误的测试用例', () => {
            expect(() => { array.difference() }).toThrow()
            expect(() => { array.difference(null) }).toThrow()
            expect(() => { array.difference({ a: 1, b: 2 }) }).toThrow()
            expect(() => { array.difference([],'1') }).toThrow()
        })
    })
    describe('dropWhile 删除不符合条件的值）', () => {
        test('正确的测试用例', () => {
            expect(array.dropWhile([1, 2, 3],function(item){return item>2})).toEqual([3])
            expect(array.dropWhile([null, 2, 3],function(item){return !!item})).toEqual([2,3])
        })
        test('错误的测试用例', () => {
            expect(() => { array.dropWhile() }).toThrow()
        })
    })
    describe('flatten 指定深度扁平化数组）', () => {
        test('正确的测试用例', () => {
            expect(array.flatten([1, [[[2]]], 3, 4])).toEqual([1, [[2]], 3, 4])
            expect(array.flatten([1, [2, [3, [4, 5], 6], 7], 8], 2)).toEqual([1, 2, 3, [4, 5], 6, 7, 8])
        })
        test('错误的测试用例', () => {
            expect(() => { array.flatten(1) }).toThrow()
            expect(() => { array.flatten([],'2') }).toThrow()
        })
    })
    describe('indexOfAll 返回数组中某值的所有索引）', () => {
        test('正确的测试用例', () => {
            expect(array.indexOfAll([1, 2, 3, 1, 2, 3],1)).toEqual([0,3])
            expect(array.indexOfAll([1, 2, 3], 4)).toEqual([])
        })
        test('错误的测试用例', () => {
            expect(() => { array.indexOfAll(1) }).toThrow()
        })
    })
    describe('intersection 两数组的交集', () => {
        test('正确的测试用例', () => {
            expect(array.intersection([1,2,3],[1,2,4])).toEqual([1,2])
            expect(array.intersection([1, 2, 3], [4])).toEqual([])
        })
        test('错误的测试用例', () => {
            expect(() => { array.intersection(1) }).toThrow()
            expect(() => { array.intersection([],1) }).toThrow()
        })
    })
    describe('intersectionBy 两数组都符合条件的交集', () => {
        test('正确的测试用例', () => {
            expect(array.intersectionBy([2.1, 1.2], [2.3, 3.4], function(item){return item>2})).toEqual([2.1])
        })
        test('错误的测试用例', () => {
            expect(() => { array.intersectionBy(1) }).toThrow()
            expect(() => { array.intersectionBy([],1) }).toThrow()
            expect(() => { array.intersectionBy([],[],1) }).toThrow()
        })
    })
    describe('sample 数组中获取随机元素', () => {
        test('错误的测试用例', () => {
            expect(() => { array.sample() }).toThrow()
            expect(() => { array.sample(null) }).toThrow()
            expect(() => { array.sample({ a: 1, b: 2 }) }).toThrow()
        })
    })
    describe('randomIntArrayInRange：生成两数之间指定长度的随机数组', () => {
        test('错误的测试用例', () => {
            expect(() => { array.randomIntArrayInRange('') }).toThrow()
            expect(() => { array.randomIntArrayInRange(1,[]) }).toThrow()
            expect(() => { array.randomIntArrayInRange(1,2,'') }).toThrow()
        })
    })
    describe('sampleSize 生成两数之间指定长度的随机数组', () => {
        test('错误的测试用例', () => {
            expect(() => { array.sampleSize('') }).toThrow()
            expect(() => { array.sampleSize([],'2') }).toThrow()
        })
    })
    describe('shuffle 生成两数之间指定长度的随机数组', () => {
        test('错误的测试用例', () => {
            expect(() => { array.shuffle('') }).toThrow()
        })
    })
    describe('minN：返回指定长度的升序数组', () => {
        test('正确的测试用例', () => {
            expect(array.minN([1, 2, 3])).toEqual([1])
            expect(array.minN([1, 2, 3], 2)).toEqual([1,2])
        })
        // test('错误的测试用例', () => {
        //     expect(() => { array.minN('') }).toThrow()
        // })
    })
    
   

})