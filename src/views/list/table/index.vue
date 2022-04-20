<!--
 * @Author: Chen Xin
 * @Date: 2022-04-19 10:41:59
 * @LastEditTime: 2022-04-21 00:43:02
 * @LastEditors: Chen Xin
 * @Description: 
 * @FilePath: \Henin-Admin\src\views\list\table\index.vue
-->
<template>
  <breadcrumb />
  <!-- 卡片区 -->
  <a-card :bordered="false">
    <template #title> 表格列表 </template>
    Card content
    <br />
    Card content
  </a-card>
</template>

<script setup lang="ts">
import breadcrumb from "@/components/breadcrumb.vue"
// import searchForm from "./searchForm.vue"
// import operation from "./operation.vue"
</script>

<style lang="scss" scoped>
.arco-card {
  border-radius: 4px;
  .arco-card-header {
    flex: 1;
    color: var(--color-text-1);
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    .arco-card-header-title {
      font-size: 16px;
      line-height: 16px;
    }
  }
}
.arco-card-size-medium .arco-card-header {
  height: 46px;
  padding: 20px 20px;
}
</style>
