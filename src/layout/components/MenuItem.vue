<template>
  <el-sub-menu :key="data.path" v-if="data.children && data.children.length && !data.hidden">
    <template #icon>
      <IconFont :type='data.icon' :size="16"/>
    </template>
    <template #title>{{ data.name }}</template>
    <MenuItem v-for="item in data.children" :key="item.id" :data="item" @click="onClickMenuItem"></MenuItem>
  </el-sub-menu>

  <el-menu-item v-else :key="data.path"  @click="onClickMenuItem(data)" v-if="!data.hidden">
    <template #icon>
      111
      <IconFont :type='data.icon' :size="20"/>
      <!-- <icon-unordered-list v-else :size="20" /> -->
    </template>
    {{ data.name }}
  </el-menu-item>

</template>

<script setup lang="ts" name="MenuItem">
import type { PropType } from 'vue'
import { Icon } from '@arco-design/web-vue';
const IconFont = Icon.addFromIconFontCn({ src: 'https://at.alicdn.com/t/c/font_1866771_12ay6ubnrcta.js' });
console.log('22222',IconFont)
defineProps(['data']);

// defineProps({
//   data: {
//     // type: Object as PropType<MenuItem>,
//     // eslint-disable-next-line @typescript-eslint/no-empty-function
//     default: () => {}
//   }
// })

const emit = defineEmits(['click'])
const onClickMenuItem = (item: MenuItem) => {
  emit('click', item)
}
</script>

<style lang="scss" scoped>

</style>
