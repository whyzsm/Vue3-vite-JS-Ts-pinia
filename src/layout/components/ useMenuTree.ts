import { computed } from 'vue'
import type { RouteRecordRaw, RouteRecordNormalized } from 'vue-router'
<<<<<<< HEAD:src/layout/components/useMenuTree.ts
import { useAppStore } from '../../store/modules/app'
// import { appRoutes as appClientMenus } from '../../router'
import {routes as appClientMenus} from '../../router'
console.log('appClientMenus',appClientMenus)
=======
import { useAppStore } from '@/store'
import { appRoutes as appClientMenus } from '@/router'

>>>>>>> parent of 820e23c... zsm:src/layout/components/ useMenuTree.ts
export default function useMenuTree() {
  const appStore = useAppStore()

  const appRoute = computed(() => {
    console.log('appStore.menuFromServer',appStore.menuFromServer)
    if (appStore.menuFromServer) {
      return appStore.asyncMenus
    }
    return appClientMenus
  })
  console.log('appClientMenus',appClientMenus)
  console.log('appRoute',appRoute)

  const menuTree = computed(() => {
    const copyRouter = JSON.parse(JSON.stringify(appRoute.value))
    console.log('copyRouter',copyRouter),
    copyRouter.sort((a: RouteRecordNormalized, b: RouteRecordNormalized) => {
      return (a.meta.order || 0) - (b.meta.order || 0)
    })
    console.log('copyRouter',copyRouter)
    // 遍历方法
    function travel(_routes: RouteRecordRaw[], layer: number) {
      if (!_routes) return null

      const collector: any = _routes.map((element) => {
        // 叶子节点
        if (element.meta?.hideChildrenInMenu || !element.children) {
          element.children = []
          return element
        }

        // 路由过滤 hideInMenu 为 true
        element.children = element.children.filter((x) => x.meta?.hideInMenu !== true)

        // 相关子节点
        const subItem = travel(element.children, layer + 1)

        if (subItem.length) {
          element.children = subItem
          return element
        }
        // 其他逻辑
        if (layer > 1) {
          element.children = subItem
          return element
        }

        if (element.meta?.hideInMenu === false) {
          return element
        }

        return null
      })
      return collector.filter(Boolean)
    }
    return travel(copyRouter, 0)
  })

  return {
    menuTree
  }
}
