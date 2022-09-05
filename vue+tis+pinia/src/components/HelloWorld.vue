<script setup lang="ts">
import { ref,Ref,isRef,reactive,toRef,toRefs } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0);

type Person = {
  list?:Array<number>
}
let person = reactive<Person>({
   list:[]
})
// let message:string='aa'
let message:Ref<string>=ref('zsm');
  let objt =reactive<number[]>([4,5]);
  let boj=reactive({name:'zsm',age:11});
  // let {name,age}=boj;
  const {name:eag,age:re}=toRefs(boj);
  // const age=toRef(boj,'age')
const changeMsg=()=>{
  message.value='花花同学会';
  // objt.name='eryt';
  console.log('message',message)
  setTimeout(()=>{
    let arr=[1,2,3,4];
    objt.push(...arr);
    person.list=[3,45,6,7]
    // objt=arr;
    console.log('objt',objt)
    // age.value=23;
    // name='123'
    eag.value='er'
    re.value=234;
  },500)
}
</script>

<template>
  <!-- <h1>{{ msg }}</h1> -->
  <div>
    <button @click="changeMsg">change</button>
    <div>{{ message }}{{objt}}</div>
    <div>{{person}}</div>
    <div>{{eag}}{{re}}</div>
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
