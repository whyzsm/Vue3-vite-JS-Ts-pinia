<template >
  <el-table :columns="tableColumns({ handleDelete })"  :data="reachData" />
</template>
<script lang="ts" setup>
  import { storeToRefs } from 'pinia';
  import { useScanStore } from '../../store/modules/scan';
const scanStore = useScanStore();
const {reachData } = storeToRefs(scanStore);
// import { SmileOutlined, DownOutlined } from '@ant-design/icons-vue';
// import { defineComponent } from 'vue';
import { tableColumns } from './Items';
const handleDelete=()=>{  
}


</script>
<style>
  .TinyTable_p10{margin-top: 10px;}
</style>