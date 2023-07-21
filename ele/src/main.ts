import { createApp } from "vue";
// 1.1 安装后 导入
import router from "./router";
import { setupStore } from './store';
import { createPinia } from "pinia";
import App from "@/App.vue";
import ElementPlus from 'element-plus'
import axios from 'axios';
// 导入全局scss主文件
// import 'element-plus/dist/index.css';
import * as Elicons from '@element-plus/icons-vue';
import 'element-plus/theme-chalk/el-loading.css';
import 'element-plus/theme-chalk/el-message.css';
import './assets/icons/iconfont/iconfont.css';
import './style.css';
import '@/styles/element/scrollbar-reset.scss';


const app = createApp(App);
const pinia = createPinia();

Object.keys(Elicons).forEach((key) => {
  app.component(key, Elicons[key as keyof typeof Elicons]);
})
// for ([name, comp] of Object.entries(ElementPlusIconsVue)) {
//   app.component(name, comp);
// }


// 1.2. use挂载
app.use(router);
app.use(pinia);
app.use(ElementPlus);
setupStore(app);
app.provide('$axios', axios);
app.mount("#app");
