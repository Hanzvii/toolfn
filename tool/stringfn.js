/**
 * @method 字段判空 
 * @param {String} str 传入str
 * @returns {Boolean} 空值返回true，非空返回false
 */
let isEmpty = function (str) {
  return !str.replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g,"")?true:false;
}
/**
 * @method 清除中文 
 * @param {String} str 传入str
 * @returns {Boolean} 返回过滤掉中文的字符串
 */
let clearChinese = function (str) {
  return str.replace(/[\u4e00-\u9fa5]/g,"");
}
/**
 * @method 只含有中文 
 * @param {String} str 传入str
 * @returns {Boolean} 返回过滤掉的字符串
 */
let onlyChinese = function (str) {
  return str.replace(/^[\u4e00-\u9fa5]/g,"");
}
/**
 * @method 清除非数字字符
 * @param {String} str 传入str
 * @returns {Boolean} 返回过滤掉的字符串
 */
let clearNoNumber = function(str){
  return str.replace(/\D/g,"");
}
export default {
  isEmpty,clearChinese,onlyChinese,clearNoNumber
}