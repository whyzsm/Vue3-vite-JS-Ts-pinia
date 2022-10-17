<template>
  <a-layout class="layout">
    <Asider></Asider>
    <div class="abc">
      <NavTab></NavTab>
      <Main></Main>
    </div>
  </a-layout>
  <!-- <a-layout class="layout">
          <Asider></Asider>
          <a-layout>
            <NavTab></NavTab>
            <Main></Main>
          </a-layout>
        </a-layout> -->
  <!-- </a-layout-content> -->
  <!-- </a-layout> -->
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
/* .layout {
  flex-direction: row;
} */
.abc{ width: 100%;}
.tiny_content {
  position: relative;
}

.tiny_layout {
  width: 100%;
  /* height: 100%; */
  /* flex-direction: 100%, */
  /* flex-direction: row; */
}
</style>
