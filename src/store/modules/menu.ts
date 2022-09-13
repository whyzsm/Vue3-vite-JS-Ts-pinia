import { MenuItem } from '@arco-design/web-vue'
import { defineStore } from 'pinia'

interface MenuState {
  menuTree: MenuItem[]
}

export const useMenuStore = defineStore({
  id: 'Menu',
  state: (): MenuState => {
    return {
      menuTree: [
        {
          icon: 'iconfenlei',
          id: 'hm',
          name: 'home',
          path: '/',
          keepAlive: false,
          hidden: false,
        },
        {
          icon: 'iconfenlei',
          id: 'hm',
          name: '关于',
          path: '/about',
          keepAlive: false,
          hidden: false,
        }
      ]
    }
  },
  getters: {},
  actions: {}
})
