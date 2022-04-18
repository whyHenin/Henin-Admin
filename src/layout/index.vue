<!--
 * @Author: Chen Xin
 * @Date: 2022-04-17 01:50:54
 * @LastEditTime: 2022-04-19 00:29:18
 * @LastEditors: Chen Xin
 * @Description: 后台布局
 * @FilePath: \Henin-Admin\src\layout\index.vue
-->
<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-container>
        <el-aside>
          <Menu />
        </el-aside>
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
  position: relative;
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0;
  box-shadow: 0px 4px 10px 0px rgba(78, 89, 105, 0.06), 0px 1px 0px 0px #e5e6eb;
  z-index: 2;
}
.el-main {
  background: #f7f8fa;
}
.el-aside {
  background: #ffffff;
  width: auto;
  h1 {
    width: 100%;
    height: 60px;
  }
}
</style>
