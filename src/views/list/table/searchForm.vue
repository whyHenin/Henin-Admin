<!--
 * @Author: Chen Xin
 * @Date: 2022-04-19 14:50:10
 * @LastEditTime: 2022-04-19 14:56:34
 * @LastEditors: Chen Xin
 * @Description: 
 * @FilePath: \Henin-Admin\src\views\list\table\searchForm.vue
-->
<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="Approved by">
      <el-input v-model="formInline.user" placeholder="Approved by" />
    </el-form-item>
    <el-form-item label="Activity zone">
      <el-select v-model="formInline.region" placeholder="Activity zone">
        <el-option label="Zone one" value="shanghai" />
        <el-option label="Zone two" value="beijing" />
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">
        <el-icon> <i-ri-search-line /> </el-icon>查找</el-button
      >

      <el-button type="info">
        <el-icon> <i-ri-refresh-line /> </el-icon>重置</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { reactive } from "vue"
const formInline = reactive({
  user: "",
  region: "",
})
const onSubmit = () => {
  console.log("搜索事件")
}
</script>

<style scoped></style>
