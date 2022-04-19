<!--
 * @Author: Chen Xin
 * @Date: 2022-04-17 13:21:54
 * @LastEditTime: 2022-04-19 10:10:44
 * @LastEditors: Chen Xin
 * @Description: 
 * @FilePath: \Henin-Admin\src\layout\components\header\index.vue
-->
<template>
  <div class="logo">Henin-Admin</div>
  <!-- 收缩侧边栏 -->
  <toggleSideBar />
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
  <!-- 用户头像 -->
  <user />
  <!-- 设置 -->
  <setting />
</template>

<script setup lang="ts">
import breadcrumb from "./breadcrumb.vue"
import toggleSideBar from "./toggleSideBar.vue"
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
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #f1f1f1;
}
.divier {
  margin-left: auto;
}
</style>
