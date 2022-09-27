<template>
  <div>
    <el-container class="tiny_layout">
      <Header></Header>
      <el-main class="tiny_content">
        <a-layout>
          <Asider></Asider>
          <el-container>
            <NavTab></NavTab>
            <Main></Main>
          </el-container>

        </a-layout>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import Asider from './components/Asider.vue'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import NavTab from './components/NavTab.vue'
import { storeToRefs } from 'pinia';
import { useAppStore } from '../store/modules/app';
const appStore = useAppStore();
const { autoLeftWidth } = storeToRefs(appStore);
</script>
<style scoped>
.tiny_content {
  position: relative;
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
