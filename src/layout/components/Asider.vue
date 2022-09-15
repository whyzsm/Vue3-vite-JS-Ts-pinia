<template>
  <a-layout-sider breakpoint="lg" :width="200" collapsible :collapsed="collapsed" @collapse="onCollapse"  class="asider">
    <a-menu :selected-keys="[activeKey]" :default-open-keys="['Home']" :auto-open-selected="true"
      :style="{ width: '100%', height: '100%' }">
      <MenuItem v-for="item in menuTree"  :key="item.name" :data="item"  @click="handleClickItem"></MenuItem>
    </a-menu>
  </a-layout-sider>
</template>
<script lang="ts"  setup>
import { defineComponent, ref } from 'vue';
import { storeToRefs } from 'pinia';
import {useMenuStore} from  '../../store/modules/menu'
import MenuItem from './MenuItem.vue'
import { useRoute, useRouter } from 'vue-router'
// import { Message } from '@arco-design/web-vue';
import { useAppStore } from '../../store/modules/app';


const appnStore = useAppStore();
const menuStore=useMenuStore();
const {menuTree}= storeToRefs(menuStore);
const collapsed = ref(false);

const route = useRoute();
const router = useRouter();
const onCollapse = (val:any, type:any) => {
  const content = type === 'responsive' ? '触发响应式收缩' : '点击触发收缩';
  if (val) {
    appnStore.update(48)
  } else {
    appnStore.update(200)
  }
  // Message.info({
  //   content,
  //   duration: 2000,
  // });
  collapsed.value = val;
}
const getMenuKeys = (params: MenuItem[]) => {
  const data: string[] = []
  function forTree(arr: MenuItem[]) {
    arr.forEach((item: MenuItem) => {
      if (item.path) {
        data.push(item.path)
      }
      if (item.children?.length) {
        forTree(item.children)
      }
    })
  }
  forTree(params)
  return data
}
const activeKey = ref('Home');
const menuKeyList = getMenuKeys(menuStore.menuTree)
const handleClickItem = (item: MenuItem) => {
  if (!item.path) return
  if (item.path === '/file') {
    router.push({ path: item.path, query: { fileType: 0 } })
  } else {
    router.push({ path: item.path })
  }
  if (menuKeyList.includes(item.path)) {
    activeKey.value = item.path
  }
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
  height: calc(100vh - 74px);
}
</style>