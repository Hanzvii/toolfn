import tool from './tool/tool'
import browser from './tool/browser'
import fn from './tool/fn'
import stringfn from './tool/stringfn'
export default {
  ...tool,...browser,...fn,...stringfn
};