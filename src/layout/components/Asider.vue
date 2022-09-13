<template>
  <a-layout-sider breakpoint="lg" :width="200" collapsible :collapsed="collapsed" @collapse="onCollapse" class="asider">
    <a-menu :selected-keys="[activeKey]" :default-open-keys="['Workplace']" :auto-open-selected="true"
      :style="{ width: '100%', height: '100%' }">
      <Menu-Item v-for="item in menuTree" :key="item.name" :data="item" @click="handleClickItem"></Menu-Item>
    </a-menu>
  </a-layout-sider>
</template>
<script  setup>
import { defineComponent, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { Message } from '@arco-design/web-vue';
import { IconHome, IconCalendar } from '@arco-design/web-vue/es/icon';
import { useAppStore } from '../../store/modules/app';
import MenuItem from './MenuItem.vue'
import useMenuTree from './useMenuTree'
const appnStore = useAppStore();
console.log('useMenuTree',useMenuTree())
const {menuTree}=useMenuTree()
const { menuList, autoLeftWidth } = storeToRefs(appnStore);
console.log('menuList11', menuList,)
console.log('menuTree',menuTree.value)
// 菜单循环
// const getMenuKeys = (params: MenuItem[]) => {
//   const data: string[] = []
//   function forTree(arr: MenuItem[]) {
//     arr.forEach((item: MenuItem) => {
//       if (item.name) {
//         data.push(item.name)
//       }
//       if (item.children?.length) {
//         forTree(item.children)
//       }
//     })
//   }
//   forTree(params)
//   return data
// }


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
const onClickMenuItem = (key) => {
  Message.info({ content: `You select ${key}`, showIcon: true });
}
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