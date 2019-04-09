/**
 * @method 判断浏览器当前环境
 * @returns {String} 返回浏览器当前所在环境
 */
let osType = function () {
  let osType = "";
  windows = (navigator.userAgent.indexOf("Windows", 0) != -1) ? 1 : 0,
    mac = (navigator.userAgent.toLowerCase().indexOf("mac", 0) != -1) ? 1 : 0,
    linux = (navigator.userAgent.indexOf("Linux", 0) != -1) ? 1 : 0,
    unix = (navigator.userAgent.indexOf("X11", 0) != -1) ? 1 : 0;
  if (windows) {
    osType = "Windows";
  } else if (mac) {
    osType = "Mac";
  } else if (linux) {
    osType = "Linux";
  } else if (unix) {
    osType = "Unix";
  }
  return osType;
}
/**
 * @method 判断浏览器所在设备
 * @returns {String} 返回浏览器当前设备类型
 */
let browType = function () {
  let mobileReg = /iphone|ipod|android.*mobile|windows.*phone|blackberry.*mobile/i;
  if(mobileReg.test(navigator.userAgent.toLowerCase())){
    return "mobile"
  }else{
    return "notmobile"
  }
}
