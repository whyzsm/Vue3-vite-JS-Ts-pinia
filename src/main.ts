import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { setupStore } from './store';
// import store from './store'
// import Antd from 'ant-design-vue';
import ArcoVue from '@arco-design/web-vue'
// 额外引入图标库
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
// import { setArcoVue } from './plugins/arco-vue-plugin'
// import 'ant-design-vue/dist/antd.css'
import '@arco-design/web-vue/dist/arco.css'
import '@/styles/css/transition.css'
// 导入全局scss主文件
import '@/styles/index.scss'






// const app = createApp(App).use(router,axios,ElementPlus)
// app.mount('#app')
const app = createApp(App)



app.use(router)
app.use(ArcoVue)
app.use(ArcoVueIcon)
// app.use(store)
// app.use(Antd)
// setArcoVue(app)
app.use(router,ArcoVue,ArcoVueIcon)
setupStore(app)
app.mount('#app')
