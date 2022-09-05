<template>
  <a-layout-sider collapsible breakpoint="xl" class="gi-aside">
    <div class="logo" />
    <a-menu :defaultSelectedKeys="[activePath]" :style="{ width: '100%' @menuItemClick="onClickMenuItem">
      <a-menu-item v-for="item in menuList" :key="item.path" @click="handleClickItem(item)">
        <component :is="item.icon"></component>
        {{ item.name }}
      </a-menu-item>
    </a-menu>
    <template #trigger="{ collapsed }">
      <IconCaretRight v-if="collapsed" />
      <IconCaretLeft v-else />
    </template>
  </a-layout-sider>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { IconCaretRight, IconCaretLeft, IconHome, IconCalendar } from '@arco-design/web-vue/es/icon'

const store = useStore()
const router = useRouter()
console.log('store', store)
// 获取菜单
const menuList = computed(() => store.state.app.menuList)
// 获取激活的路劲
const activePath = computed(() => store.state.app.activePath)

// 点击触发 store
const handleClickItem = (item:any) => {
  // 设置激活的路由 store
  store.commit('app/storeSetActivePath', item.path)
  // 进行跳转
  router.push(item.path)
}
</script>
