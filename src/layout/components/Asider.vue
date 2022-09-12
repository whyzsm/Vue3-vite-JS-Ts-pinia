<template>
  <a-layout-sider breakpoint="lg" :width="200" collapsible :collapsed="collapsed" @collapse="onCollapse" class="asider">
    <a-menu :selected-keys="[activeKey]" :default-open-keys="['Workplace']" :auto-open-selected="true"
      :style="{ width: '100%', height: '100%' }">
      <MenuItem v-for="item in menuList" :key="item.name" :data="item" @click="handleClickItem"></MenuItem>
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
<script  setup>
import { defineComponent, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { Message } from '@arco-design/web-vue';
import { IconHome, IconCalendar } from '@arco-design/web-vue/es/icon';
import { useAppStore } from '../../store/modules/app';
import MenuItem from './MenuItem.vue'
// import useMenuTree from './useMenuTree'
const appnStore = useAppStore();
// const {menuList}=useMenuTree()
const { menuList, autoLeftWidth } = storeToRefs(appnStore);
console.log('menuList', menuList, 'autoLeftWidth', autoLeftWidth)
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