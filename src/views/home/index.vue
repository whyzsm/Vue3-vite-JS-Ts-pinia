<script setup lang="ts">
import { ref, reactive, Ref, isRef, shallowRef, triggerRef } from "vue";
import { useUserStore } from "../../store/user";
import { storeToRefs } from "pinia";
import service from '../../utils/request'
const userStore = useUserStore();
console.log('service',service)
// formdata: {iptName:'input',seltName:'全部'},
const { formdata } = storeToRefs(userStore);
console.log('formdata', formdata.value)
defineProps<{ msg: string }>();

const getInfo=()=> {
  return service({
    url: 'https://api.github.com/users',
    method: 'get'
  })
}
const onClick =async () => {
  console.log('222')
  // async getInfo() {
  //   let param = {
  //     pageNum:id.pageNum,
  //     pageSize: id.pageSize,
  //     params: id.params,
  //   }
    let { data } = await getInfo();
    console.log('data123',data)
  // getInfo().then(res=>{
  //   console.log('res',res)
  // })
  // userStore.updateName("李四");
  // userStore.iptUpadataName();
  // const data=request(getInf)


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
  // console.log(isRef(message));
  // console.log(isRef(notRef));

  // message.value = { name: "大满" }
  // console.log('count',count)
  // count.value=count.value++
};
</script>
  
<template>
  <!-- <h1>{{ msg }}</h1> -->
  <div class="card">
    <a-input v-model:value="formdata.iptName" />
    <a-input v-model:value="formdata.seltName" />
    <a-button type="primary" @click="onClick">Primary Button</a-button>
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
  