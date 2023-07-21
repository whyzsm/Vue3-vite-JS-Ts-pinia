<template>
  <div class="tinyContainer">
    <SearchForm/>
    <TableList/>
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
  import SearchForm from './SearchForm.vue';
  import TableList from './TableList.vue';
  import { useScanStore } from '../../store/modules/scan';
  const scanStore = useScanStore();
  onMounted(()=>{
    console.log('走你')
    scanStore.PostQueryMaxNumber({typeCode: 'pick_up'})
  })
</script>
<style >
  .tinyContainer{padding:16px 16px;}
</style>
