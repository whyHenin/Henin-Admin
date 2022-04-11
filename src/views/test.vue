<!--
 * @Author: Chen Xin
 * @Date: 2022-03-21 11:36:54
 * @LastEditTime: 2022-03-21 12:45:59
 * @LastEditors: Chen Xin
 * @Description: 
 * @FilePath: \shop-vite\src\views\test.vue
-->
<template>
  <div>
    <el-button type="">test</el-button>
    <el-button type="primary">test2</el-button>
    <el-input placeholder="4444"></el-input>
    <el-input v-model="input1" placeholder="Please input">
      <template #prepend>Http://</template>
    </el-input>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
