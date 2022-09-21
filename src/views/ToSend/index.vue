<template>
  <div class="tinyContainer">
    <SearchForm/>
    <TableList/>
  </div>
</template>
<script lang="ts" setup>
  import SearchForm from './SearchForm.vue';
  import TableList from './TableList.vue';

</script>
<style >
  .tinyContainer{padding:16px 16px;}
</style>