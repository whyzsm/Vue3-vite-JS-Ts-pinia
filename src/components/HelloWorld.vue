<script setup lang="ts">
import { ref,reactive, Ref, isRef, shallowRef, triggerRef,inject } from "vue";
import { clearCache, useRequest } from 'vue-request';
import { useUserStore } from "../store/user";
import { storeToRefs } from "pinia";
const userStore = useUserStore();
// formdata: {iptName:'input',seltName:'全部'},
const { formdata } = storeToRefs(userStore);
console.log('formdata',formdata.value)
defineProps<{ msg: string }>();
const $axios = inject('$axios')
const getData = () => {
    return $axios.get('https://api.github.com/users')
}
const onClick = () => {
  console.log('1111')
  userStore.updateName("李四");
  userStore.iptUpadataName();
  const { run, data, loading, error, refresh } = useRequest(getData, {
    // loading
    loadingDelay: 0, // 请求花多少才让显示loading
    loadingKeep: 2000, // 持续时间
    
    // 防抖，时间内的请求只发一次
    debounceInterval: 300,
        
    // 缓存的名称（鉴别是否是同一个数据、缓存）
    cacheKey: 'goodsList', // 支持动态key
    // 缓存的时间
    // cacheTime: 5 * 60 * 1000, // 5 minutes
    // 保鲜时间，时间内认为是新数据，不发请求
    // staleTime: 60 * 60 * 1000, // 60 minutes
    // 自定义缓存，可不设置
    // setCache: (cacheKey, data) => {
    //  localStorage.setItem(cacheKey, JSON.stringify(data));
    // },
    // getCache: cacheKey => {
    //  return JSON.parse(localStorage.getItem(cacheKey) || '{}');
    // },
    
    // 错误尝试
    // errorRetryCount: 5,
    // errorRetryInterval: 3 * 1000, // The retry interval is 3 seconds
    // onError: () => {
    //  message.error('(⊙︿⊙) something error');
    //  errorCount.value++;
    // },
    // onSuccess: () => {
    //  message.success('✿✿ヽ(°▽°)ノ✿ success');
    //  errorCount.value = 0;
    // },
    
    // 节流，时间后发送请求
    throttleInterval: 10000,
    
    // 聚焦控制
    refreshOnWindowFocus: true, // 开启多页面的时候激活自动发请求
    refocusTimespan: 1000, // 重新聚焦间隔时间
    
    // 轮询，间隔时间发一次
    // pollingInterval: 1000,
    
    // 手动触发
    manual: true,
});
console.log('data',data)
  
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
    <a-button type="primary" @click="onClick">1n</a-button>
    <!-- <button type="button" @click="onCount">count is {{ count }}{{message}}</button> -->
  </div>
</template>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
