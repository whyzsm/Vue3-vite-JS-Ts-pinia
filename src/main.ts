import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'
import Antd from 'ant-design-vue';
// import ArcoVue from '@arco-design/web-vue';
import 'ant-design-vue/dist/antd.css'
import '@arco-design/web-vue/dist/arco.css'
import { setArcoVue } from './plugins/arco-vue-plugin'






// const app = createApp(App).use(router,axios,ElementPlus)
// app.mount('#app')
const app = createApp(App)


setArcoVue(app)
app.use(store).use(Antd).mount('#app')
