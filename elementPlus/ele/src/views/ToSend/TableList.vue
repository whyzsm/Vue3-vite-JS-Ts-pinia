<template >
   <el-table :data="reachData"  style="width: 100%">
    <el-table-column v-for="item in tableColumns({ handleDelete })" :key="item.dataIndex" :prop="item.dataIndex" :label="item.title" :width="item.width"/>
  </el-table>
</template>
<script lang="ts" setup>
  import { storeToRefs } from 'pinia';
  import { useScanStore } from '../../store/modules/scan';
  import { tableColumns } from './Items';
  import { ref } from 'vue'


const scanStore = useScanStore();
const {reachData } = storeToRefs(scanStore);
// import { SmileOutlined, DownOutlined } from '@ant-design/icons-vue';
// import { defineComponent } from 'vue';
const handleDelete=()=>{
}
const deleteRow=()=>{}
const tableData = ref([
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
])


</script>
<style>
  .TinyTable_p10{margin-top: 10px;}
</style>
