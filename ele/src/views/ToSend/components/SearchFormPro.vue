<script lang="ts" setup>
import { ref, reactive } from 'vue';
// import { DownOutlined, UpOutlined } from '@ant-design/icons-vue';
// const props = defineProps(['dataSource', 'filter']);
type Props={
  filter:any,
  dataSource():any,
}
defineProps<Props>();
// const formState = ref(filter);
const form = reactive({
  name: '',
  post: '',
  isRead: false,
})
// const formState = reactive(props.filter);
const expand = ref(false);
const emit = defineEmits(['onSearch', 'handleClear']); //子组件传给父组件

// const useForm = Form.useForm;
const onFinish = (values: any) => {
  console.log('values', values)
  emit('onSearch', values);
};
// const { resetFields } = useForm(formState);
const handleClear = async () => {
  // emit('handleClear', resetFields());
};
defineExpose({
  form,
  onFinish
})
</script>
<style  lang="scss" scoped >
:deep(.el-card) {
  border-radius: 0px;
}
</style>

<template>
  <el-card style="width: 100%" shadow="never">
    <el-form layout="vertical" :model="filter"  size="default">
      <el-row :gutter="24">
        <template v-for="item in dataSource()" :key="item.key">
          <el-col :span="6">
            <el-form-item :field="item.key" :label="item.label" v-if="item.type === 'Input'">
              <el-input v-model="filter[item.key]" placeholder="placeholder" />
            </el-form-item>
            <el-form-item :field="item.key" :label="item.label" v-if="item.type === 'RangePicker'">
              <el-date-picker v-model="filter[item.key]" type="datetimerange" format="YYYY-MM-DD HH:mm:ss"
                value-format="YYYY-MM-DD HH:mm:ss" />
            </el-form-item>
            <el-form-item :field="item.key" :label="item.label" v-if="item.type === 'Radio'">
              <el-radio-group v-model="filter[item.key]">
                <el-radio-button v-for="opt in item.option" :key="opt.value" :label="opt.value">{{opt.label}}</el-radio-button>
              </el-radio-group>
            </el-form-item>
            <el-form-item :field="item.key" :label="item.label" v-if="item.type === 'Select'">
              <el-select v-model="filter[item.key]" multiple placeholder="请选择">
                <el-option v-for="set in item.option" :key="set.value" :label="set.label" :value="set.value" />
              </el-select>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
      <el-row>
        <el-col :span="24" style="text-align: right">
          <el-button type="primary" @click="onFinish(filter)" >查询</el-button>
          <el-button style="margin: 0 8px" @click="handleClear">重置</el-button>
          <!-- <a style="font-size: 12px" @click="expand = !expand">
            <template v-if="expand">
              <UpOutlined />
            </template>
            <template v-else>
              <DownOutlined />
            </template>
            Collapse
          </a> -->
        </el-col>
      </el-row>
    </el-form>
  </el-card>
</template>
