// 引入vue-router对象
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
        meta: { title: '首页', keepAlive: false }
      }
    ]
  }
]

/**
 * 创建路由
 */
const router = createRouter({
  // hash模式：createWebHashHistory，
  // history模式：createWebHistory
  history: createWebHistory('/'),
  // history:createWebHashHistory(),
  routes
})

/**
 * 路由守卫
 */
// router.beforeEach((guard) => {
//   beforeEach.checkAuth(guard, router)
// })

/**
 * 路由错误回调
 */
router.onError((handler) => {
  console.log('error:', handler)
})

/**
 * 输出对象
 */
export default router
