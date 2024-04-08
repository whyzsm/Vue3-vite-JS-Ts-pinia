<template>
  <SearchFormPro :filter="searchParams" :dataSource="searchFormItems" @onSearch="onSearch" @handleClear="handleClear"/>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { storeToRefs } from 'pinia';
import SearchFormPro from './components/SearchFormPro.vue';
import { searchFormItems } from './Items';
import { useScanStore } from '../../store/modules/scan';
const scanStore = useScanStore();
const { searchParams,reachData } = storeToRefs(scanStore);
console.log('reachData+++++',reachData?.value)
const onSearch = async(values: any) => {
  console.log('父组件接受子组件', values);
  await scanStore.getData(values)
};
const handleClear = (resetFields:any) => {
};
</script>
<style>
#components-form-demo-advanced-search .ant-form {
  max-width: none;
}

#components-form-demo-advanced-search .search-result-list {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 2px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 80px;
}

[data-theme='dark'] .ant-advanced-search-form {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid #434343;
  padding: 24px;
  border-radius: 2px;
}

[data-theme='dark'] #components-form-demo-advanced-search .search-result-list {
  border: 1px dashed #434343;
  background: rgba(255, 255, 255, 0.04);
}

.tiny-itemFlex {
  width: 100%;
  display: inline-block;
}

/* .ant-radio-button-wrapper{ background: red; display: flex;} */
</style>
