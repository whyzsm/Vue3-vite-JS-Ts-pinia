<template>
  <a-layout class="main" :style="{width: `calc(100vh +${memuWidth} + px)`,left:memuWidth+'px'}">
    <router-view #default="{ Component,route}">
      <transition name="fade-transform" mode="out-in" appear>
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
    <!-- <router-view></router-view> -->
  </a-layout>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia';
import { useAppStore } from '../../store/modules/app';
const appnStore = useAppStore();
const { memuWidth } = storeToRefs(appnStore);
const route = useRoute()
const key = computed(() => route.path)
</script>
<style lang="scss" scoped>
.main {
  height: calc(100vh - 74px);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;

}
</style>
  