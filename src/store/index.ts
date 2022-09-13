import type { App } from 'vue';
import { createPinia } from 'pinia';
// import { useAppStore } from './modules/app'


const store = createPinia();
export const setupStore=(app: App<Element>)=>{
  app.use(store);
 }

export { store };
// export { useAppStore }
