import { createApp } from 'vue'
import './style.css'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'
import App from './App.vue'
import store from './store'



// const app = createApp(App).use(router,axios,ElementPlus)
// app.mount('#app')
const app = createApp(App)
app.use(store).use(Antd).mount('#app')
// createApp(App).use(Antd).mount('#app')
