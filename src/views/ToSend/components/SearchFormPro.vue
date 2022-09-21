<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { Form } from 'ant-design-vue';
import { DownOutlined, UpOutlined } from '@ant-design/icons-vue';
import type { FormInstance } from 'ant-design-vue';
import { any, object } from 'vue-types';
// defineProps({
//   dataSource: {
//     type: Object,
//     default: true,
//   },
//   filter: {
//     type: Object,
//     default: true,
//   },
// })
const props = defineProps(['dataSource', 'filter']);
const formRef = ref<FormInstance>();
const formState = ref(props.filter);
const form = reactive({
  name: '',
  post: '',
  isRead: false,
})
// const formState = reactive(props.filter);
console.log('formState', props.dataSource());
const expand = ref(false);
const emit = defineEmits(['onSearch', 'handleClear']);
const useForm = Form.useForm;
const onFinish = (values: any) => {
  console.log('values', values)
  emit('onSearch', values);
};
const { resetFields } = useForm(formState);
const handleClear = async () => {
  emit('handleClear', resetFields());
};
</script>
<template>
  <a-card style="width: 100%">
    <a-form  layout="vertical" :model="formState" @submit="onFinish">
      <a-row :gutter="24">
        <template  v-for="item in props.dataSource()"  :key="item.key">
          <a-col  :span="6">
            <a-form-item :field="item.key" :label="item.label" v-if="item.type === 'Input'">
              <a-input v-model="formState[item.key]" placeholder="placeholder" />
            </a-form-item>
            <a-form-item :field="item.key" :label="item.label" v-if="item.type === 'RangePicker'">
              <a-range-picker
                v-model="formState[item.key]"
                show-time
                format="YYYY-MM-DD HH:mm:ss"
                value-format="YYYY-MM-DD HH:mm:ss"
              />
            </a-form-item>
            <a-form-item :field="item.key" :label="item.label" v-if="item.type === 'Radio'">
              <a-radio-group
                v-model="formState[item.key]"
                :options="item.option"
                option-type="button"
                style="width: 100%"
                class="tiny-itemFlex"
              />
            </a-form-item>
            <a-form-item :field="item.key" :label="item.label" v-if="item.type === 'Select'">
              <a-select
                v-model="formState[item.key]"
                style="width: 100%"
                placeholder="请选择"
                :multiple="item.mode"
                :options="item.option"
              />
            </a-form-item>
          </a-col>
        </template>
      </a-row>
      <a-row>
        <a-col :span="24" style="text-align: right">
          <a-button type="primary" html-type="submit">查询</a-button>
          <a-button style="margin: 0 8px" @click="handleClear">重置</a-button>
          <a style="font-size: 12px" @click="expand = !expand">
            <template v-if="expand">
              <UpOutlined />
            </template>
            <template v-else>
              <DownOutlined />
            </template>
            Collapse
          </a>
        </a-col>
      </a-row>
    </a-form>
    {{formState}}
  </a-card>
</template>
