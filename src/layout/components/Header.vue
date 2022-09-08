<template>
  <a-layout-header class="Tiny-header">
    <div class="Tiny-logo">
      <!-- <section class="system-logo" @click="toHome">
      <img src="@/assets/images/logo.gif" />
      <span class="gi_hover system-name">Admin Pro</span>
    </section> -->
      <img src="@/assets/images/logo.png" alt="Logo" />
    </div>
    <a-menu v-model:selectedKeys="selectedKeys" mode="horizontal" :style="{ lineHeight: '45px' }">
      <a-menu-item key="1">首页</a-menu-item>
      <a-menu-item key="2">销售管理</a-menu-item>
      <a-menu-item key="3">采购管理</a-menu-item>
      <a-menu-item key="4">仓储管理</a-menu-item>
      <a-menu-item key="5">运营管理</a-menu-item>
      <a-menu-item key="6">工单中心</a-menu-item>
      <a-menu-item key="7">财务管理</a-menu-item>
      <a-menu-item key="8">审批管理</a-menu-item>
      <a-menu-item key="9">基础档案</a-menu-item>
      <a-menu-item key="10">系统设置</a-menu-item>
    </a-menu>

  </a-layout-header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      selectedKeys: ref<string[]>(['2']),
    };
  },
});
</script>
<style  lang="scss" scoped>
.Tiny-header {
  position: 'fixed';
  z-index: 10;
  width: '100%';
  display: flex;
  background: #fff;
  box-shadow: 1px 1px 2px 0px rgba(82, 90, 102, 0.04), 2px 2px 8px 0px rgba(82, 90, 102, 0.08);

  .arco-menu-light .arco-menu-item.arco-menu-selected {
    background: #2861BD;
    color: #fff;
  }
}


.Tiny-logo {
  width: 180px;
  height: 20px;
  margin: 20px;

  img {
    width: 100%;
    height: 20px;
  }
}

/* #components-layout-demo-fixed .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}

.site-layout .site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
} */
</style>