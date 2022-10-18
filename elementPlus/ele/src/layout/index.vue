<template>
  <div class="tiny_layout">
    <Header></Header>
    <el-container class="tiny_content">
      <Asider></Asider>
      <div class="tiny_main">
        <NavTab></NavTab>
        <Main></Main>
      </div>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import Asider from './components/Asider.vue'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import NavTab from './components/NavTab.vue'
</script>
<style lang="scss" scoped >
.tiny_layout {
  width: 100%;
  height: 100%;
  overflow: hidden;
  flex-direction: 100%;
  flex-direction: row;
}

.tiny_main {
  display: 1;
  width: 100%;
  // flex-direction: row;
}

.tiny_content {
  margin-top: 60px;
  flex-direction: row;
  display: flex;
  flex:1;
  // display: flex;
  // flex-direction: column;
  background: #f6f6f6;
}

.tiny_mainbox {
  overflow: hidden;
  width: 100%;
}
</style>
