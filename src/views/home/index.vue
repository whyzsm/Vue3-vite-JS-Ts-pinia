<script setup lang="ts">
  import { ref,reactive, Ref, isRef, shallowRef, triggerRef } from "vue";
  import { useUserStore } from "../../store/user";
  import { storeToRefs } from "pinia";
  const userStore = useUserStore();
  // formdata: {iptName:'input',seltName:'全部'},
  const { formdata } = storeToRefs(userStore);
  console.log('formdata',formdata.value)
  defineProps<{ msg: string }>();
  const onClick = () => {
    userStore.updateName("李四");
    userStore.iptUpadataName();
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
  .read-the-docs {
    color: #888;
  }
  </style>
  