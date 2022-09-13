import { createRouter, createWebHashHistory,createWebHistory } from 'vue-router'
import type { RouteRecordNormalized } from 'vue-router'
import { getToken } from '../utils/auth'
import { DEFAULT_LAYOUT } from './base'

// 路由模块化自动导入
const modules = import.meta.globEager('./modules/*.ts')

function formatModules(_modules: any, result: RouteRecordNormalized[]) {
  Object.keys(_modules).forEach((key) => {
    const defaultModule = _modules[key].default
    if (!defaultModule) return
    const moduleList = Array.isArray(defaultModule) ? [...defaultModule] : [defaultModule]
    result.push(...moduleList)
  })
  return result
}

export const appRoutes: RouteRecordNormalized[] = formatModules(modules, [])
console.log('appRoutes',appRoutes)
export const routes = [
  {
    path: '/',
    redirect: '/home',
    // path: '/layout',
    name: 'Layout',
    component: DEFAULT_LAYOUT,
    meta: {
      title: 'home',
      locale: 'menu.about',
      requiresAuth: true,
      icon: 'iconfenlei',
      hideChildrenInMenu: true,
      order: 11
    },
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
        meta: { title: '首页', keepAlive: false}
      },
    ]
  },
  ...appRoutes
]
console.log('routes',routes)

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

// 没有login先注释掉
// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') {
//     next()
//   } else {
//     const token = getToken()
//     if (!token) {
//       next('/login')
//     } else {
//       next()
//     }
//   }
// })

export default router
