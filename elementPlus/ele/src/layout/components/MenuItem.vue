<template>
  <el-sub-menu :key="data?.path" v-if="data.children && data.children.length && !data.hidden">
    <template #icon>
      <span class="iconfont icon-liuxiangfenxi">111</span>
      <!-- <IconFont :type='data.icon' :size="16"/> -->
    </template>
    <!-- <span class="iconfont icon-liuxiangfenxi">111</span> -->
    <template #title>{{ data.name }}</template>
    <MenuItem v-for="item in data.children" :key="item.id" :data="item" @click="onClickMenuItem"></MenuItem>
  </el-sub-menu>

  <el-menu-item v-else :key="data?.path"  @click="onClickMenuItem(data)" v-if="!data.hidden">
    <template #icon>
      <span class="iconfont icon-liuxiangfenxi">2222</span>
      <!-- <IconFont :type='data.icon' :size="20"/> -->
    </template>
    <span :class="['iconfont', `icon-${data.icon}`]"></span>
    {{ data.name }}
  </el-menu-item>

</template>

<script setup lang="ts" name="MenuItem">
defineProps(['data']);


const emit = defineEmits(['click'])
const onClickMenuItem = (item: MenuItem) => {
  emit('click', item)
}
</script>

<style lang="scss" scoped>

</style>
