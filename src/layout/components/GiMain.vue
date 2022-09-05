<template>
  <a-layout class="gi-main">
     <!-- <router-view #default="{ Component }">
      <transition name="fade-transform" class="abs">
        <component :is="Component" :key="key" />
      </transition>
    </router-view> -->
    <router-view></router-view>
  </a-layout>
</template>
<script lang="ts" setup>
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  
  const route = useRoute()
  const key = computed(() => route.path)
  
  </script>