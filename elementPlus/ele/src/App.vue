<script setup lang="ts">
import { onMounted } from 'vue'
</script>

<template>
  <div id="app">
    <!-- <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="primary" plain>Primary</el-button> -->
    <router-view></router-view>
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
