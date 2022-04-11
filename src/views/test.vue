<!--
 * @Author: Chen Xin
 * @Date: 2022-03-21 11:36:54
 * @LastEditTime: 2022-04-12 00:53:22
 * @LastEditors: Chen Xin
 * @Description: 
 * @FilePath: \Henin-Admin\src\views\test.vue
-->
<template>
  <div>
    <el-button type="">test</el-button>
    <el-button type="primary">test2</el-button>
    <el-input placeholder="4444"></el-input>
    <el-input v-model="input1" placeholder="Please input">
      <template #prepend>Http://</template>
    </el-input>
    <h1 class="test">1111111</h1>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.test {
  color: $test-color;
}
</style>
