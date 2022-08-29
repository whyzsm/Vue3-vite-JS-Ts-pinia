<script setup lang="ts">
import { ref,Ref,isRef } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0);
// let message:string='aa'
let message:Ref<string>=ref('zsm');
const changeMsg=()=>{
  message.value='花花同学会';
  console.log('message',message)
}
</script>

<template>
  <!-- <h1>{{ msg }}</h1> -->
  <div>
    <button @click="changeMsg">change</button>
    <div>{{ message }}</div>
  </div>

  <!-- <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p> -->
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
