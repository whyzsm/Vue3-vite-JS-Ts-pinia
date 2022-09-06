import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { setupStore } from './store';
// import store from './store'
import Antd from 'ant-design-vue';
import { setArcoVue } from './plugins/arco-vue-plugin'
// import ArcoVue from '@arco-design/web-vue';
import 'ant-design-vue/dist/antd.css'
import '@arco-design/web-vue/dist/arco.css'
import './style.css'






// const app = createApp(App).use(router,axios,ElementPlus)
// app.mount('#app')
const app = createApp(App)



app.use(router)
// app.use(store)
app.use(Antd)
setArcoVue(app)
setupStore(app)
app.mount('#app')
