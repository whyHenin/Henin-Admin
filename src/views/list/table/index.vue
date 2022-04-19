<!--
 * @Author: Chen Xin
 * @Date: 2022-04-19 10:41:59
 * @LastEditTime: 2022-04-19 14:57:00
 * @LastEditors: Chen Xin
 * @Description: 
 * @FilePath: \Henin-Admin\src\views\list\table\index.vue
-->
<template>
  <p class="common-title">查询表格</p>
  <!-- 搜索表格 -->
  <searchForm />
  <el-button type="primary">
    <el-icon> <i-ri-add-line /> </el-icon>新建档案</el-button
  >
</template>

<script setup lang="ts">
import searchForm from "./searchForm.vue"
</script>

<style lang="scss" scoped></style>
