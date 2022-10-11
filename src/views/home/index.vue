<script setup lang="ts">
import { ref, reactive, Ref, isRef, shallowRef, triggerRef } from "vue";
import { useUserStore } from "../../store/user";
import { storeToRefs } from "pinia";
import service from '../../utils/request'
const userStore = useUserStore();
const { formdata } = storeToRefs(userStore);

const getInfo=()=> {
  return service({
    url: 'https://api.github.com/users',
    method: 'get'
  })
}
var msg:Ref<boolean> =ref(false);
const onClick =async () => {
    let { data } = await getInfo();
    console.log('data123',data)
    msg.value=!msg.value;
    console.log('msg',msg)
};
let count: Ref<number> = ref(0);
//
type Obj = {
  foo: string;
  abc: number;
};
let message: Ref<Obj> = shallowRef({
  foo: "小满",
  abc: 124,
});

const onCount = () => {
  // count.value++;
  message.value.foo = "大满";
  //  triggerRef(message)

  // let notRef:number = 123;

  // message.value = { name: "大满" }

  // count.value=count.value++
};
var abc:Ref<string> =reactive('wqvb ');
const changeMsg=()=>{
  abc = "change msg"
  console.log('abc',abc)
}
</script>
  
<template>
  <div class="card">
    
    <a-input v-model:value="formdata.iptName" />
    <a-input v-model:value="formdata.seltName" />
    <button @click="changeMsg">change</button>
    <div>{{ abc }}</div>

    {{msg}}
    <el-button type="primary" @click="onClick">Primary Button</el-button>
    <!-- <button type="button" @click="onCount">count is {{ count }}{{message}}</button> -->
  </div>
</template>
<style scoped>
.card {
  overflow: auto;
}

.read-the-docs {
  color: #888;
}
</style>
  