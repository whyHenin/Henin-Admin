<!--
 * @Author: Chen Xin
 * @Date: 2022-04-17 01:50:54
 * @LastEditTime: 2022-04-17 10:43:00
 * @LastEditors: Chen Xin
 * @Description: 后台布局
 * @FilePath: \Henin-Admin\src\layout\index.vue
-->
<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <Menu />
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <!-- 子路由出口 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Menu from "./components/menu.vue"
</script>

<style scoped>
.el-container {
  height: 100vh;
}
.el-header {
  border: 1px solid #000;
}
.el-main {
  border: 1px solid #000;
}
.el-aside {
  background-color: #545c64;
}
</style>
