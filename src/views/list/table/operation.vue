<!--
 * @Author: Chen Xin
 * @Date: 2022-04-20 00:42:48
 * @LastEditTime: 2022-04-20 00:43:26
 * @LastEditors: Chen Xin
 * @Description: 
 * @FilePath: \Henin-Admin\src\views\list\table\operation.vue
-->
<template>
  <el-row>
    <el-col :span="24"><div class="divider"></div></el-col>
    <el-col :span="4"
      ><el-button type="primary">
        <el-icon> <i-ri-add-line /> </el-icon>新建</el-button
      ><el-button> 批量导入</el-button></el-col
    >
    <el-col :span="18"></el-col>
    <el-col :span="2"
      ><el-button>
        <el-icon> <i-ri-download-2-line /> </el-icon>导出</el-button
      ></el-col
    >
  </el-row>
</template>

<script setup lang="ts"></script>

<style scoped></style>
