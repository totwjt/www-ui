import { App } from 'vue'
import Foo from '@demo-ui-lib/foo'
import CropImg from '@demo-ui-lib/crop-img'
import Desensitization from '@demo-ui-lib/desensitization'
// import component end
import '../scss/index.scss'

const components = [
  Foo,
  CropImg,
  Desensitization
] // components

// 全局动态添加组件
const install = (app: App): void => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export default {
  install
}
