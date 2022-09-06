import ArcoVue from '@arco-design/web-vue'
// 额外引入图标库
import ArcoVueIcon from '@arco-design/web-vue/es/icon'


export const setArcoVue = (app:any) => {
  app.use(ArcoVue)
  app.use(ArcoVueIcon)
}