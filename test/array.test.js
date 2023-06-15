import array from '../src/package/arrayfn'
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
            expect(array.allEqual([])).toBe(false)
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
            expect(() => { array.allEqual(null) }).toThrow()
            expect(() => { array.allEqual([],{}) }).toThrow()
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
            expect(() => { array.averageBy([],{}) }).toThrow()
        })
    })
    describe('bifurcate 检查数组各项相等', () => {
        test('正确的测试用例', () => {
            expect(array.bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]).toBe(5))
        })
        test('错误的测试用例', () => {
            expect(() => { array.averageBy({}) }).toThrow()
            expect(() => { array.averageBy(null) }).toThrow()
            expect(() => { array.averageBy([],{}) }).toThrow()
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
    describe('sample 数组中获取随机元素', () => {
        test('正确的测试用例', () => {
            expect(array.sample([1, 2, 3])).toBe(2)
            expect(array.sample(['qw', {a:1}, 3])).toEqual({a:1})
        })
        test('错误的测试用例', () => {
            expect(() => { array.sample() }).toThrow()
            expect(() => { array.sample(null) }).toThrow()
            expect(() => { array.sample({ a: 1, b: 2 }) }).toThrow()
        })
    })
    
    
   

})