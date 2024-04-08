<template>
 <div> pinia:{{name}}</div>
  <a-form
    layout="inline"
    :model="formState"
    @finish="handleFinish"
    @finishFailed="handleFinishFailed"
  >
    <a-form-item>
      <a-input v-model:value="formState.user" placeholder="Username">
        <template #prefix
          ><UserOutlined style="color: rgba(0, 0, 0, 0.25)"
        /></template>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input
        v-model:value="formState.password"
        type="password"
        placeholder="Password"
      >
        <template #prefix
          ><LockOutlined style="color: rgba(0, 0, 0, 0.25)"
        /></template>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-button
        type="primary"
        html-type="submit"
        :disabled="formState.user === '' || formState.password === ''"
      >
        Log in
      </a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts" setup>
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { defineComponent, reactive } from "vue";
import type { UnwrapRef } from "vue";
import type { FormProps } from "ant-design-vue";
import { useUserStore } from '../store/user';
import { storeToRefs } from 'pinia';
const userStore = useUserStore();
const { name } = storeToRefs(userStore);


interface FormState {
  user: string;
  password: string;
}
const formState: UnwrapRef<FormState> = reactive({
  user: "",
  password: "",
});
const handleFinish: FormProps["onFinish"] = (values) => {
  console.log(values, formState);
};
const handleFinishFailed: FormProps["onFinishFailed"] = (errors) => {
  console.log(errors);
};
// export default defineComponent({
//   components: {
//     UserOutlined,
//     LockOutlined,
//   },
//   setup() {
//     const formState: UnwrapRef<FormState> = reactive({
//       user: '',
//       password: '',
//     });
//     const handleFinish: FormProps['onFinish'] = values => {
//       console.log(values, formState);
//     };
//     const handleFinishFailed: FormProps['onFinishFailed'] = errors => {
//       console.log(errors);
//     };
//     return {
//       formState,
//       handleFinish,
//       handleFinishFailed,
//     };
//   },
// });
</script>
