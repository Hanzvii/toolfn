/**
 * @method 只能输入数字和一位小数点和小数点后面payload位小数
 * @param {string} value
 * @param {number} payload 保留小数位数
 * @returns {string} 返回一个小数
 */ 
let numdecimal = (value,payload=null)=>{ 
  value = value.replace(/[^\d.]/g,"");  //清除“数字”和“.”以外的字符  
  value = value.replace(/\.{2,}/g,"."); //只保留第一个. 清除多余的  
  value = value.replace(".","$#$").replace(/\./g,"").replace("$#$","."); 
  if(payload !== null){
    let d = '';
    for(let i = 0;i<payload;i++){
      d = d + '\\\d'
    }
    value = value.replace(new RegExp(`^(\\-)*(\\d+)\\.(${d}).*$`),'$1$2.$3');
  }
  if(value.indexOf(".")< 0 && value !=""){//以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额 
      value= parseFloat(value); 
  };
  return value;
}
/**
 * @method 时间格式转换（时分秒） 08：30：00
 * @param {Date} date 传入时间
 * @param {string} sign 分隔符
 * @returns {string}
 */
let formatTime = (date, sign) => {
  let signal = sign !== undefined ? sign : ':'
  if (date) {
    let d = new Date(date)
    return (d.getHours() < 10 ? ('0' + d.getHours()) : d.getHours()) + signal + (d.getMinutes() < 10 ? ('0' + d.getMinutes()) : d.getMinutes()) + signal + (d.getSeconds() < 10 ? ('0' + d.getSeconds()) : d.getSeconds())
  } else {
    return '--'
  }
}
/**
 * @method 时间格式转换（年月日）2018-12-12
 * @param {*} date 传入时间
 * @param {*} sign 分隔符
 * @returns {string}
 */
let formatDate = (date, sign) => {
  let signal = sign !== undefined ? sign : '-'
  if (date) {
    let d = new Date(date)
    return d.getFullYear() + signal + ((d.getMonth() + 1) < 10 ? ('0' + (d.getMonth() + 1)) : (d.getMonth() + 1)) + signal + (d.getDate() < 10 ? ('0' + d.getDate()) : d.getDate())
  } else {
    return '--'
  }
}
/**
 * @method 计算时间长度（*天*小时*分钟*秒）
 * @param {Number} date 传入毫秒转化为时间长度
 * @returns {String}
 */
let formatLong = (date) => {
  let second = 1000
  let min = 60 * second
  let hour = 60 * min
  let day = 24 * hour
  let result = ''

  let isNull = 0
  // 计算天
  if ((date / day) > 1) {
    result += Math.floor(date / day) + '天'
    date -= day * Math.floor(date / day)
  } else {
    isNull += 1
  }
  // 计算时
  if ((date / hour) > 1) {
    result += Math.floor(date / hour) + '小时'
    date -= hour * Math.floor(date / hour)
  } else {
    isNull += 1
  }
  // 计算分
  if ((date / min) > 1) {
    result += Math.floor(date / min) + '分钟'
    date -= min * Math.floor(date / min)
  } else {
    isNull += 1
  }
  // 计算秒
  // console.log(date, second, date / second)
  if ((date / second) > 1) {
    result += Math.floor(date / second) + '秒'
  } else {
    if (date >= 0) {
      result += '0秒'
    }
    isNull += 1
  }

  if (isNull === 4 && !result) {
    result = '--'
  }
  return result
}
/**
 * @method 返回时间格式 01：34：23，多用于播放
 * @param {Number} da 传入毫秒
 * @returns {String}
 */
let timeschedule = function(da){
  let seconds = Math.ceil( da / 1000);
  let miniters = Math.floor(seconds / 60);
  let hours = Math.floor(miniters / 60);
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (miniters - hours * 60 < 10) {
    miniters = "0" + (miniters - hours * 60);
  } else {
    miniters = miniters - hours * 60;
  }
  if (seconds - hours * 3600 - miniters * 60 < 10) {
    seconds = "0" + (seconds - hours * 3600 - miniters * 60);
  } else {
    seconds = seconds - hours * 3600 - miniters * 60;
  }
  return hours + ":" + miniters + ":" + seconds;
}
/**
 * @method 验证是否符合手机号 
 * @param {String} str 传入手机号
 * @returns {Boolean} 正确手机号返回true，否则返回false
 */
let isvalidPhone = function(str) {
  const valid_Phone = /^1[345789]\d{9}$/
  return valid_Phone.test(str.trim())
}
/**
 * @method 验证是否符合邮箱格式 
 * @param {String} str 传入邮箱
 * @returns {Boolean} 正确邮箱返回true，否则返回false
 */
let isvalidEmail = function(str) {
  const valid_Phone = /^\w+@\w+(\.[a-zA-Z]{2,3}){1,2}$/
  return valid_Phone.test(str.trim())
}
/**
 * @method 验证是否符合URL格式 
 * @param {String} str 传入URL
 * @returns {Boolean} 正确URL返回true，否则返回false
 */
let isvalidURL = function(str) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlregex.test(str)
}
/**
 * @method 验证是否全部是小写字母 
 * @param {String} str 传入str
 * @returns {Boolean} 正确返回true，否则返回false
 */
let isvalidLowerCase = function(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}
/**
 * @method 验证是否全部是大写字母 
 * @param {String} str 传入str
 * @returns {Boolean} 正确返回true，否则返回false
 */
let isvalidUpperCase = function(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}
/**
 * @method 验证是否全部是字母 
 * @param {String} str 传入str
 * @returns {Boolean} 正确返回true，否则返回false
 */
let isvalidAlphabets = function(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}
// 2019-4-18
/**
 * @method 转为时间段 
 * @param {time} number 传入time(秒)
 * @returns {String} 返回时间段
 */
let timeSlot = function(time, option) {
  time = +time * 1000
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) { // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return d.getMonth() + 1 + '月' + d.getDate() + '日' + d.getHours() + '时' + d.getMinutes() + '分'
  }
}
export default {
  numdecimal,formatTime,formatDate,formatLong,timeschedule,isvalidPhone,isvalidEmail,isvalidURL,isvalidLowerCase,isvalidUpperCase,isvalidAlphabets,timeSlot
}