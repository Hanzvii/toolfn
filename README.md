# toolfn
## 说明
*本项目是个人日常工作中常用到的一些方法，现开放出来方便使用，不足之处望大家不吝指正*
## 下载
```
npm install toolfn
```
## 使用实例

```
import toolfn from 'toolfn'
或
import {isvalidPhone} from 'toolfn'

toolfn.isvalidPhone(str) //验证是否符合手机号
``` 
## 方法说明
```
/**
 * @method 验证是否符合手机号 
 * @param {String} str 传入手机号
 * @returns {Boolean} 正确手机号返回true，否则返回false
 */
 
isvalidPhone(str)

/**
 * @method 验证是否符合邮箱格式 
 * @param {String} str 传入邮箱
 * @returns {Boolean} 正确邮箱返回true，否则返回false
 */
 
 isvalidEmail(str)
 
 /**
 * @method 验证是否符合URL格式 
 * @param {String} str 传入URL
 * @returns {Boolean} 正确URL返回true，否则返回false
 */
 
 isvalidURL(str)
 
 /**
 * @method 只能输入数字和一位小数点和小数点后面payload位小数
 * @param {string} value
 * @param {number} payload 保留小数位数
 * @returns {string} 返回一个小数
 */ 
 
 numdecimal(value,[payload])
 
 /**
 * @method 时间格式转换（时分秒） 08：30：00
 * @param {Date} date 传入时间
 * @param {string} sign 分隔符
 * @returns {string}
 */
 
 formatTime(date, [sign])
 
 /**
 * @method 时间格式转换（年月日）2018-12-12
 * @param {*} date 传入时间
 * @param {*} sign 分隔符
 * @returns {string}
 */
 
 formatDate(date, [sign])
 
 /**
 * @method 计算时间长度（*天*小时*分钟*秒）
 * @param {Number} date 传入毫秒转化为时间长度
 * @returns {String}
 */
 
 formatLong(date)
 
 /**
 * @method 返回时间格式 01：34：23，多用于播放
 * @param {Number} da 传入毫秒
 * @returns {String}
 */
 
 timeschedule(da)
 
 /**
 * @method 验证是否全部是小写字母 
 * @param {String} str 传入str
 * @returns {Boolean} 正确返回true，否则返回false
 */
 
 isvalidLowerCase(str)
 
 /**
 * @method 验证是否全部是大写字母 
 * @param {String} str 传入str
 * @returns {Boolean} 正确返回true，否则返回false
 */
 
 isvalidUpperCase(str)
 
 /**
 * @method 验证是否全部是字母 
 * @param {String} str 传入str
 * @returns {Boolean} 正确返回true，否则返回false
 */
 
 isvalidAlphabets(str)
 
 /**
 * @method 字段判空 
 * @param {String} str 传入str
 * @returns {Boolean} 空值返回true，非空返回false
 */
 
 isEmpty(str)
 
 /**
 * @method 清除中文 
 * @param {String} str 传入str
 * @returns {Boolean} 返回过滤掉中文的字符串
 */
 
 clearChinese(str)
 
 /**
 * @method 只含有中文 
 * @param {String} str 传入str
 * @returns {Boolean} 返回过滤掉的字符串
 */
 
 onlyChinese(str)
 
 /**
 * @method 清除非数字字符
 * @param {String} str 传入str
 * @returns {Boolean} 返回过滤掉的字符串
 */
 
 clearNoNumber(str)
 
 /**
 * @method 判断浏览器当前环境
 * @returns {String} 返回浏览器当前所在环境(Windows,Mac,Linux,Unix)
 */
 
 osType()
 
 /**
 * @method 判断浏览器所在设备
 * @returns {String} 返回浏览器当前设备类型(mobile,notmobile)
 */
 
 browType()
 
 /**
 * @desc 函数防抖
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 */
 
 debounce(func,wait,immediate)
 
 /**
 * @desc 函数节流
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param type 1 表时间戳版，2 表定时器版
 */
 
 throttle(func, wait ,type)
```
