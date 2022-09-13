<template>
<<<<<<< HEAD
  <a-sub-menu :key="data.name" v-if="data.children && data.children.length && !data.meta.hidden">
    <template #icon>
      <IconFont :type='data.meta.icon' :size="16"/>
    </template>
    <template #title>{{ data.meta.title }}</template>
<<<<<<< HEAD
    <!-- <MenuItem v-for="item in data.children" :key="item.name" :data="item" @click="onClickMenuItem"></MenuItem> -->
=======
    <MenuItem v-for="item in data.children" :key="item.name" :data="item" @click="onClickMenuItem"></MenuItem>
>>>>>>> parent of 820e23c... zsm
  </a-sub-menu>

  <a-menu-item v-else :key="data.name" @click="onClickMenuItem(data)" v-if="!data.meta.hidden">
    <template #icon>
<<<<<<< HEAD
      <IconFont :type='data.meta.icon' :size="16"/>
      <!-- <GiSvgIcon v-if="data.meta.icon" :size="24" :name="data.meta.icon"></GiSvgIcon> -->
      <!-- <icon-unordered-list v-else :size="20" /> -->
=======
      <GiSvgIcon v-if="data.meta.icon" :size="24" :name="data.meta.icon"></GiSvgIcon>
      <icon-unordered-list v-else :size="20" />
>>>>>>> parent of 820e23c... zsm
    </template>
    {{ data.meta.title }}
  </a-menu-item>
  <!-- <a-sub-menu :key="data.id" v-if="data.children && data.children.length && !data?.meta?.hidden">
=======
  <a-sub-menu :key="data.name" v-if="data.children && data.children.length && !data?.meta?.hidden">
>>>>>>> parent of 89e9932... zsm
    <template #icon>
      <GiSvgIcon v-if="data.meta.icon" :size="24" :name="data.meta.icon"></GiSvgIcon>
    </template>
    <template #title>{{ data.meta.title }}</template>
    <MenuItem v-for="item in data?.children" :key="item.name" :data="item" @click="onClickMenuItem">
    </MenuItem>
  </a-sub-menu>

  <a-menu-item v-else :key="data.name" @click="onClickMenuItem(data)" v-if="!data?.meta?.hidden">
    <template #icon>
      <!-- <GiSvgIcon v-if="data.meta.icon" :size="24" :name="data.meta.icon"></GiSvgIcon> -->
      <!-- <icon-unordered-list v-else :size="20" /> -->
    </template>
    {{data.name}}
    <!-- {{ data.meta.title }} -->
  </a-menu-item>
</template>

<script setup lang="ts" name="MenuItem">
import type { PropType } from 'vue'
<<<<<<< HEAD
<<<<<<< HEAD
import { Icon } from '@arco-design/web-vue';
const IconFont = Icon.addFromIconFontCn({ src: 'https://at.alicdn.com/t/c/font_1866771_12ay6ubnrcta.js' });
=======
>>>>>>> parent of 89e9932... zsm
defineProps(['data']);
=======
>>>>>>> parent of 820e23c... zsm

defineProps({
  data: {
    type: Object as PropType<MenuItem>,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    default: () => {}
  }
})

const emit = defineEmits(['click'])

const onClickMenuItem = (item: MenuItem) => {
  emit('click', item)
}
</script>

<style lang="scss" scoped></style>
