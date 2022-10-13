<template>
  <div>
    <a-layout class="tiny_layout">
      <Header></Header>
      <a-layout-content class="tiny_content">
        <a-layout>
          <Asider></Asider>
          <a-layout>
            <NavTab></NavTab>
            <Main></Main>
          </a-layout>
        </a-layout>
      </a-layout-content>
    </a-layout>
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

.tiny_layout {
  /* height: 100%; */
  flex-direction: 100%,
    /* flex-direction: row; */
}
</style>
