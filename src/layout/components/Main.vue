<template>
  <a-layout class="main">
     <router-view #default="{ Component,route}">
      <transition name="fade-transform" mode="out-in" appear>
        <component :is="Component" :key="route.path"/>
      </transition>
    </router-view>
    <!-- <router-view></router-view> -->
  </a-layout>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  
  const route = useRoute()
  const key = computed(() => route.path)
  
  </script>
  <style lang="scss" scoped>
    .main {
      width: calc(100vh - 200px);
      height: calc(100vh - 74px);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      position: relative;
      left:200px;
    }
    </style>
  