<!--
 * @Author: Chen Xin
 * @Date: 2022-04-17 13:21:54
 * @LastEditTime: 2022-04-20 17:20:30
 * @LastEditors: Chen Xin
 * @Description: 
 * @FilePath: \Henin-Admin\src\layout\components\header\index.vue
-->
<template>
  <div class="logo">Henin-Admin</div>
  <!-- 面包屑导航 -->
  <breadcrumb />
  <!-- 分割 -->
  <div class="divier"></div>
  <!-- 刷新 -->
  <reFresh />
  <!-- 全屏显示 -->
  <fullScreen />
  <!-- 搜索 -->
  <search />
  <!-- 设置 -->
  <setting />
  <!-- 用户头像 -->
  <user />
</template>

<script setup lang="ts">
import breadcrumb from "./breadcrumb.vue"
import fullScreen from "./fullScreen.vue"
import search from "./search.vue"
import setting from "./setting.vue"
import user from "./user.vue"
import reFresh from "./reFresh.vue"
</script>

<style lang="scss" scoped>
.logo {
  width: 200px;
  height: 100%;
  border: 1px solid #f1f1f1;
}
.divier {
  margin-left: auto;
}
</style>
