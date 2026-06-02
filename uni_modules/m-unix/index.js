// 批量注册全局组件
const importFn = import.meta.glob('./components/m-*/m-*.uvue', { eager: true })
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
}

export default {
  install
}
