
<template>
  <div class="detail">
    <el-button>Default</el-button>
    <el-button type="primary" @click="handleDemo" >Prima</el-button>
    <el-button type="primary" plain>Primary</el-button>
    <el-button :plain="true" @click="open">Show message</el-button>
    <div>
      <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>33</p><p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p><p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p><p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p><p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p><p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p><p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p><p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p><p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p><p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p><p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p><p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p><p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p><p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p><p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p><p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p><p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p><p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p><p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p><p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p><p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p><p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p>
    <p>22</p> <p>22</p> <p>22</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p><p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p><p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p><p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p><p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p><p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p><p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p><p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p><p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p><p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p><p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p><p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p><p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p><p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p><p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p><p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p><p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p><p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p><p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p><p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p><p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p><p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p> <p>11</p>
    </div>


  </div>

</template>
<script  lang="ts" setup>
import { ElMessage } from 'element-plus'
const open = () => {
  console.log('3344')
  ElMessage.error('this is a message.')
}
const handleDemo=()=>{
  console.log('demo111');
  ElMessage.error('wq ')
}
</script>

<style scoped>
.detail{ width: 100%; height: 100%; overflow-x:hidden; overflow-y: auto;}
</style>
