<template>
    <div class="tiny_layout">
      <Header></Header>
      <div class="tiny_content">
        <el-container>
          <Asider></Asider>
          <div class="tiny_main">
            <NavTab></NavTab>
            <Main></Main>
          </div>
        </el-container>
      </div>
    </div>
</template>
<script lang="ts" setup>
import Asider from './components/Asider.vue'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import NavTab from './components/NavTab.vue'
</script>
<style lang="scss" scoped >
 .tiny_main{
    width: 100%;
  }
.tiny_content {
  width: 100%;
  /* position: relative; */
}
.tiny_mainbox{
 overflow: hidden;
 width: 100%;
}

.tiny_layout {
  height: 100%;
  flex-direction: 100%,
    /* flex-direction: row; */
}
</style>
