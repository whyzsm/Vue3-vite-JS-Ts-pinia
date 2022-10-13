<template>
  <a-layout class="main">
    <router-view #default="{ Component,route}">
      <transition name="fade-transform" mode="out-in" appear>
        <a-scrollbar style="height:100%;overflow: auto;">
          <component :is="Component" :key="route.path" />
        </a-scrollbar>
       
      </transition>
    </router-view>
    <!-- <router-view></router-view> -->
  </a-layout>
</template>

<script lang="ts" setup>
import { computed, ref, onMounted } from 'vue'

import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia';
import { useAppStore } from '../../store/modules/app';
const appStore = useAppStore();
const { autoLeftWidth } = storeToRefs(appStore);
const route = useRoute()
const key = computed(() => route.path)
</script>
<style lang="scss" scoped>
.main {
  height: calc(100vh - 74px);
  width: 100%;
  // display: flex;
  // flex-direction: column;
  // overflow: hidden;
  // position: relative;
  background:#fff;
}
</style>
  