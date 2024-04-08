import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router'
import { setupStore } from './store';
import axios from 'axios';
import ArcoVue from '@arco-design/web-vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import '@arco-design/web-vue/dist/arco.css'
import '@/styles/css/transition.css'
// 导入全局scss主文件
import '@/styles/index.scss'
// createApp(App).mount('#app')
const app = createApp(App)
app.use(router)
app.use(ArcoVue)
app.use(ArcoVueIcon)
setupStore(app)
app.provide('$axios', axios)
app.mount('#app')