<!--
 * @Author: Chen Xin
 * @Date: 2022-04-17 20:09:33
 * @LastEditTime: 2022-04-19 01:00:27
 * @LastEditors: Chen Xin
 * @Description: 
 * @FilePath: \Henin-Admin\src\layout\components\header\user.vue
-->
<template>
  <el-dropdown>
    <span class="el-dropdown-link" :size="'large'">
      <div class="header">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        <span>HeninAdmin</span>
      </div>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>个人信息</el-dropdown-item>
        <el-dropdown-item divided>个人设置</el-dropdown-item>
        <el-dropdown-item>退出系统</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  margin: 0 15px;
  cursor: pointer;
}
</style>
