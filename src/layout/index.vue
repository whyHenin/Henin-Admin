<!--
 * @Author: Chen Xin
 * @Date: 2022-04-17 01:50:54
 * @LastEditTime: 2022-04-17 22:02:15
 * @LastEditors: Chen Xin
 * @Description: 后台布局
 * @FilePath: \Henin-Admin\src\layout\index.vue
-->
<template>
  <div class="common-layout">
    <el-container>
      <el-aside>
        <!-- <h1>henin-Admin</h1> -->
        <Menu />
      </el-aside>
      <el-container>
        <el-header>
          <Header />
        </el-header>
        <el-main>
          <!-- 子路由出口 -->
          <router-view> </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Menu from "./components/menu.vue"
import Header from "./components/header/index.vue"
</script>

<style lang="scss" scoped>
.el-container {
  height: 100vh;
}
.el-header {
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0;
}
.el-main {
  background-color: #f1f1f1;
}
.el-aside {
  background-color: #545c64;
  width: auto;
  h1 {
    width: 100%;
    height: 60px;
  }
}
</style>
