<template>
  <a-layout class="gi-layout">
    <Asider></Asider>
    <a-layout>
      <Header></Header>
      <Main></Main>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import Asider from './components/Asider.vue'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
</script>
