import type { App } from 'vue';
import { createPinia } from 'pinia';

const store = createPinia();
console.log('store',store)
export const setupStore=(app: App<Element>)=>{
  app.use(store);
 }
 

export { store };
