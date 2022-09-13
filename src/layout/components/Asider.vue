<template>
  <a-layout-sider breakpoint="lg" :width="200" collapsible :collapsed="collapsed" @collapse="onCollapse" class="asider">
    <a-menu :selected-keys="[activeKey]" :default-open-keys="['Workplace']" :auto-open-selected="true"
      :style="{ width: '100%', height: '100%' }">
      <Menu-Item v-for="item in menuTree" :key="item.name" :data="item" @click="handleClickItem"></Menu-Item>
    </a-menu>
  </a-layout-sider>
</template>
<script lang="ts" setup>
import { defineComponent, ref,watch } from 'vue';
// import { storeToRefs } from 'pinia';
import { Message } from '@arco-design/web-vue';
import { useRoute, useRouter } from 'vue-router'

import { useAppStore } from '../../store/modules/app';
import { useMenuStore } from '../../store/modules/menu';
import useMenuTree from './useMenuTree'
const appnStore = useAppStore();
const menuStore=useMenuStore();
const {menuTree}=useMenuTree();
const route = useRoute()
const router = useRouter()
console.log('route',route.path)
console.log('router',router)
// const { menuList, autoLeftWidth } = storeToRefs(appnStore);
const getMenuKeys = (params: MenuItem[]) => {
  const data: string[] = []
  function forTree(arr: MenuItem[]) {
    console.log('arr',arr)
    arr.forEach((item: MenuItem) => {
      if (item.name) {
        data.push(item.name)
      }
      if (item.children?.length) {
        forTree(item.children)
      }
    })
  }
  forTree(params)
  return data
}


const activeKey = ref('Home')
console.log('menuTree.value',menuTree.value)
// const menuKeyList = getMenuKeys(menuTree.value)

// watch(
//   () => route.path,
//   () => {
//     console.log('menuKeyList',menuKeyList)
//     console.log('333', route.name?.toString())
//     if (menuKeyList.includes(route.name?.toString() || '')) {
//       activeKey.value = route.name?.toString() || '';
//       console.log('activeKey',activeKey)
//     }
//   },
//   { immediate: true }
// )


const collapsed = ref(false);
const onCollapse = (val, type) => {
  const content = type === 'responsive' ? '触发响应式收缩' : '点击触发收缩';
  if (val) {
    appnStore.update(48)
  } else {
    appnStore.update(200)
  }
  Message.info({
    content,
    duration: 2000,
  });
  collapsed.value = val;
}
// const handleClickItem = (item: MenuItem) => {
//   activeKey.value = item.name
//   if (item.name) {
//     if (item.name === 'File') {
//       router.push({ name: item.name, query: { fileType: 0 } })
//     } else {
//       router.push({ name: item.name })
//     }
//     if (menuKeyList.includes(item.path)) {
//       activeKey.value = item.name
//     }
//   }
// }



</script>
<style lang="scss" scoped>
:deep(.arco-menu.arco-menu-vertical.arco-menu-collapsed) {

  // Menu菜单组件修改
  .arco-menu-icon {
    margin-right: 0;
    padding: 10px 0;
  }

  .arco-menu-has-icon {
    padding: 0;
    justify-content: center;
  }

  .arco-menu-title {
    display: none;
  }
}

.asider {
  z-index: 9;
  position: fixed;
  height: calc(100vh - 74px);
  top: 74px
}
</style>