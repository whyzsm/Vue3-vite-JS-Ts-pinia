<script setup lang="ts">
import { onMounted } from 'vue'
import { ElMessage } from 'element-plus'
const open = () => {
  ElMessage.error('this is a message.')
}
</script>

<template>
  <div id="app">
    <!-- <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="primary" plain>Primary</el-button> -->
    <!-- <el-button :plain="true" @click="open">Show message</el-button> -->
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
