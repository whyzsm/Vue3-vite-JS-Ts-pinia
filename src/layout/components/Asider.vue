<template>
  <a-layout-sider breakpoint="lg" :width="200" collapsible :collapsed="collapsed" @collapse="onCollapse" class="asider">
<<<<<<< HEAD
    <a-menu :selected-keys="[activeKey]" :default-open-keys="['Workplace']" :auto-open-selected="true"
      :style="{ width: '100%', height: '100%' }">
<<<<<<< HEAD
      <Menu-Item v-for="item in menuTree" :key="item.name" :data="item" @click="handleClickItem"></Menu-Item>
=======
    <a-menu :defaultOpenKeys="['1']" :defaultSelectedKeys="['0_2']" @menuItemClick="onClickMenuItem">
      <a-menu-item key="0_1" disabled>
        <IconHome />
        Menu 1
      </a-menu-item>
      <a-menu-item key="0_2">
        <IconCalendar />
        Menu 2
      </a-menu-item>
      <a-sub-menu key="1">
        <template #title>
          <span>
            <IconCalendar />Navigation 1
          </span>
        </template>
        <a-menu-item key="1_1">Menu 1</a-menu-item>
        <a-menu-item key="1_2">Menu 2</a-menu-item>
        <a-sub-menu key="2" title="Navigation 2">
          <a-menu-item key="2_1">Menu 1</a-menu-item>
          <a-menu-item key="2_2">Menu 2</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="3" title="Navigation 3">
          <a-menu-item key="3_1">Menu 1</a-menu-item>
          <a-menu-item key="3_2">Menu 2</a-menu-item>
          <a-menu-item key="3_3">Menu 3</a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
      <a-sub-menu key="4">
        <template #title>
          <span>
            <IconCalendar />Navigation 4
          </span>
        </template>
        <a-menu-item key="4_1">Menu 1</a-menu-item>
        <a-menu-item key="4_2">Menu 2</a-menu-item>
        <a-menu-item key="4_3">Menu 3</a-menu-item>
      </a-sub-menu>
>>>>>>> parent of 820e23c... zsm
=======
      <MenuItem v-for="item in menuList" :key="item.name" :data="item" @click="handleClickItem"></MenuItem>
>>>>>>> parent of 89e9932... zsm
    </a-menu>
    <!-- <a-menu :default-selected-keys="['1']" :auto-open-selected="true" :default-open-keys="['1']"
      @menu-item-click="onClickMenuItem" :style="{ width: '100%', height: '100%' }"> -->
      <!-- <a-menu-item key="0_1">
          <IconHome />
         {{item.name}}
        </a-menu-item>
        <a-sub-menu key="1">
          <template #title>
            <span>
              <IconCalendar />Navigation 1
            </span>
          </template>
          <a-menu-item key="1_1">Menu 1</a-menu-item>
        </a-sub-menu>
      </div> -->

    <!-- </a-menu> -->
  </a-layout-sider>
</template>
<script lang="ts" setup>
import { defineComponent, ref,watch } from 'vue';
// import { storeToRefs } from 'pinia';
import { Message } from '@arco-design/web-vue';
<<<<<<< HEAD
import { useRoute, useRouter } from 'vue-router'

import { useAppStore } from '../../store/modules/app';
<<<<<<< HEAD
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


=======
import {IconHome,IconCalendar} from '@arco-design/web-vue/es/icon';
import { useAppStore } from '../../store/modules/app';
const appnStore = useAppStore();
>>>>>>> parent of 820e23c... zsm
=======
import MenuItem from './MenuItem.vue'
// import useMenuTree from './useMenuTree'
const appnStore = useAppStore();
// const {menuList}=useMenuTree()
const { menuList, autoLeftWidth } = storeToRefs(appnStore);
console.log('menuList', menuList, 'autoLeftWidth', autoLeftWidth)
>>>>>>> parent of 89e9932... zsm
const collapsed = ref(false);
const onCollapse = (val, type) => {
  const content = type === 'responsive' ? '触发响应式收缩' : '点击触发收缩';
  if(val){
    appnStore.update(48)
  }else{
    appnStore.update(200)
  }
<<<<<<< HEAD
=======
 
>>>>>>> parent of 820e23c... zsm
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