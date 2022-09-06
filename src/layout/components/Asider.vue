<template>
  <a-layout-sider collapsible breakpoint="xl" class="gi-aside">
    <div class="logo" />
    <a-menu :defaultSelectedKeys="[activePath]" :style="{ width: '100%'}">
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
import { storeToRefs } from 'pinia';
import { useAppStore } from '../../store/modules/app';
import { useRouter } from 'vue-router'
import { IconCaretRight, IconCaretLeft } from '@arco-design/web-vue/es/icon'

const appStore = useAppStore();
const { menuList,activePath } = storeToRefs(appStore);
console.log('menuList',menuList)
// const store = useStore()
const router = useRouter()
// 获取菜单
// const menuListData = computed(() => menuList)
// // 获取激活的路劲
// const activePathData = computed(() => activePath)

// 点击触发 store
const handleClickItem = (item: any) => {
// 设置激活的路由 store
// store.commit('app/storeSetActivePath', item.path)
// 进行跳转
router.push(item.path)
}
const onClickMenuItem = () => { }
</script>