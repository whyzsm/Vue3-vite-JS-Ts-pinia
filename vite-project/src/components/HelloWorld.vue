<script setup >
import { ref,computed } from 'vue'

defineProps({
  msg: String
})
const message=ref('zsm');
const aa=0;
const cc=false;
const abc=()=>{
  console.log('vue')
}
const parent=()=>{
  console.log('parent')
}
const name={
  color:'blue',
  height:'300px'
}
const cls={
  aa:true,
  bb:false,
}
const Arr=[1,2,3];
// let fistName=

const count = ref(0)
// const aa=computed({
//   return 
// })
</script>

<template>
  <form>
    <button @click.prevent="abc">提交</button>
  </form>
  <input v-model="message" type="text"/>
  <!-- <div :style="name">1111</div> -->
  <p :class="cls">{{message}}</p>
  <div key="item" v-for="item in Arr ">{{message}}{{item}}</div>
  <div @click="parent"> 
    <button @click.stop="abc">123</button>
  </div>
 
</template>

<style scoped lang="less">
.read-the-docs {
  color: #888;
}
.aa{
  color: red;
}
.bb{color: yellow;}
</style>
