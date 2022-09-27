import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { setupStore } from './store';
import { setGlobalOptions } from 'vue-request';
import axios from 'axios';
// import store from './store'
// import Antd from 'ant-design-vue';
// import ArcoVue from '@arco-design/web-vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'



// 额外引入图标库
// import ArcoVueIcon from '@arco-design/web-vue/es/icon'
// import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// import { setArcoVue } from './plugins/arco-vue-plugin'
// import 'ant-design-vue/dist/antd.css'
// import '@arco-design/web-vue/dist/arco.css'
// import '@arco-themes/vue-tiny/index.less'
// import '@arco-themes/vue-gi-demo/index.less'  //切换不同的主题，也可以用自定义，vue-tiny就是自定义的




import '@/styles/css/transition.css'
// 导入全局scss主文件
import '@/styles/index.scss'

setGlobalOptions({
  manual: true,
  // ...
});





// const app = createApp(App).use(router,axios,ElementPlus)
// app.mount('#app')
const app = createApp(App)



// app.use(router)
// app.use(ArcoVue)
// app.use(ArcoVueIcon)
// app.use(store)
// app.use(Antd)
// setArcoVue(app)
app.use(router,ElementPlus)
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//   app.component(key, component)
// }
setupStore(app)
app.provide('$axios', axios)
app.mount('#app')
