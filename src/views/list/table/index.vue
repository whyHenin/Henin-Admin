<!--
 * @Author: Chen Xin
 * @Date: 2022-04-19 10:41:59
 * @LastEditTime: 2022-04-20 00:53:57
 * @LastEditors: Chen Xin
 * @Description: 
 * @FilePath: \Henin-Admin\src\views\list\table\index.vue
-->
<template>
  <p class="common-title">查询表格</p>
  <!-- 搜索表格 -->
  <searchForm />
  <!-- 操作区 -->
  <operation />
  <!-- 表格 -->
  <div class="table-body">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" class-name="table-dome" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>
  </div>
</template>

<script setup lang="ts">
import searchForm from "./searchForm.vue"
import operation from "./operation.vue"
const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
]
</script>

<style lang="scss" scoped></style>
