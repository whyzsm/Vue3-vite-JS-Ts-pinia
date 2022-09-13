<template>
  <div>
    <a-layout class="tiny-layout">
      <Header></Header>
      <a-layout-content class="tiny-content">
        <a-layout>
          <Asider></Asider>
          <Main></Main>
        </a-layout>
      </a-layout-content>
    </a-layout>
  </div>

  <!-- <a-layout class="gi-layout">
    <Asider></Asider>
    <a-layout>
      <Header></Header>
      <Main></Main>
    </a-layout>
  </a-layout> -->
</template>

<script lang="ts" setup>
import Asider from './components/Asider.vue'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
</script>
<style scoped>
.tiny-content {
  position: relative;
}

.tiny-layout {
  height: 100%;
  flex-direction: 100%,
    /* flex-direction: row; */
}
</style>
