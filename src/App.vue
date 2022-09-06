<script setup lang="ts" name="App">
// import HelloWorld from './components/HelloWorld.vue';
// import Form from './components/Form.vue';
</script>
<template>
  <a-config-provider size="small" update-at-scroll>
    <router-view></router-view>
  </a-config-provider>
</template>

<!-- <template>
  <HelloWorld msg="zsm" />
  <Form/>
</template> -->

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
