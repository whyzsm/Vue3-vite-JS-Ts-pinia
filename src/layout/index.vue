<template>
  <div>
    <a-layout class="tiny_layout">
      <Header></Header>
      <a-layout-content class="tiny_content">
        <a-layout>
          <Asider></Asider>
          <Main></Main>
        </a-layout>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script lang="ts" setup>
import Asider from './components/Asider.vue'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
</script>
<style scoped>
.tiny_content {
  position: relative;
}

.tiny_layout {
  height: 100%;
  flex-direction: 100%,
    /* flex-direction: row; */
}
</style>
