<!--
 * @Author: Chen Xin
 * @Date: 2022-04-17 13:21:54
 * @LastEditTime: 2022-04-21 00:21:15
 * @LastEditors: Chen Xin
 * @Description: 
 * @FilePath: \Henin-Admin\src\layout\components\header\index.vue
-->
<template>
  <div class="logo">Henin-Admin</div>
  <!-- 分割 -->
  <div class="divier"></div>
  <!-- 刷新 -->
  <reFresh />
  <!-- 全屏显示 -->
  <fullScreen />
  <!-- 黑夜模式 -->
  <toggleDark />
  <!-- 搜索 -->
  <search />
  <!-- 设置 -->
  <setting />
  <!-- 用户头像 -->
  <user />
</template>

<script setup lang="ts">
import fullScreen from "./fullScreen.vue"
import search from "./search.vue"
import setting from "./setting.vue"
import user from "./user.vue"
import reFresh from "./reFresh.vue"
import toggleDark from "./toggleDark.vue"
</script>

<style lang="scss" scoped>
.logo {
  width: 200px;
  height: 100%;
  background-color: #f1f2f3;
}
.divier {
  margin-left: auto;
}
</style>
