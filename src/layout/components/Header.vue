<template>
  <a-layout-header class="Tiny-header">
    <div class="logo" />
    <a-menu v-model:selectedKeys="selectedKeys"  mode="horizontal" :style="{ lineHeight: '45px' }">
      <a-menu-item key="1">nav 1</a-menu-item>
      <a-menu-item key="2">nav 2</a-menu-item>
      <a-menu-item key="3">nav 3</a-menu-item>
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
<style>
.Tiny-header{
  position: 'fixed'; z-index: 10; width: '100%';
  box-shadow: 1px 1px 2px 0px rgba(82, 90, 102, 0.04),2px 2px 8px 0px rgba(82, 90, 102, 0.08);
}
#components-layout-demo-fixed .logo {
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
}
</style>