// 导出工具函数
import * as utils from './libs/utils.uts'
import request, { configure, addInterceptor } from './libs/request.uts'

// 导出所有工具函数
export * from './libs/utils.uts'
export * from './libs/request.uts'
export { request }

// 挂载到uni对象上
const $mms = {
  ...utils,
  request,
  configure,
  addInterceptor
}

export const mount$mms = function() {
  uni.$mms = $mms
}

// 批量注册全局组件
const importFn = import.meta.glob('./components/mms-*/mms-*.uvue', { eager: true })
let components = []

function toCamelCase(str) {
  return str.replace(/-([a-z])/g, function(match, group1) {
    return group1.toUpperCase()
  }).replace(/^[a-z]/, function(match) {
    return match.toUpperCase()
  })
}

// 批量注册
for (const key in importFn) {
  let component = importFn[key].default
  if (component.name) {
    component.install = function (Vue) {
      Vue.component(component.name, component)
    }
    components.push(component)
  }
}

const install = (Vue) => {
  // 注册所有组件
  components.forEach(function(component) {
    Vue.component(component.name, component)
  })

  // 挂载到uni
  uni.$mms = $mms

  // 挂载到Vue全局属性
  Vue.config.globalProperties.$mms = $mms
}

export default {
  install
}
