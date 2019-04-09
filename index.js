import tool from './tool/tool'
import browser from './tool/browser'
import fn from './tool/fn'
import stringfn from './tool/stringfn'
let maxFn = Object.assign(tool,browser,fn,stringfn)
export default maxFn;