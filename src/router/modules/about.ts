import { DEFAULT_LAYOUT } from '../base'
import type { AppRouteRecordRaw } from '../types'

<<<<<<< HEAD
const About: AppRouteRecordRaw = {
=======
const About: AppRouteRecordRaw[] = {
>>>>>>> b35cfa018055d656e2f9c4f1cc9d5d245cfbabfb
  path: '/about',
  name: 'About',
  redirect: '/about',
  component: DEFAULT_LAYOUT,
  meta: {
    title: '关于',
    locale: 'menu.about',
    requiresAuth: true,
    icon: 'iconshuju2',
    hideChildrenInMenu: true,
    order: 12
  },
  children: [
    {
      path: '',
      name: 'About',
      component: () => import('@/views/about/index.vue'),
      meta: {
        title: '关于',
        keepAlive: false,
        locale: 'menu.about.main',
        requiresAuth: true,
        roles: ['*']
      }
    }
  ]
}

export default About
