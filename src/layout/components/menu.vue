<!--
 * @Author: Chen Xin
 * @Date: 2022-04-17 10:20:01
 * @LastEditTime: 2022-04-17 19:50:48
 * @LastEditors: Chen Xin
 * @Description: 
 * @FilePath: \Henin-Admin\src\layout\components\menu.vue
-->
<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#fff"
    router
    unique-opened
    :collapse="pageStore.isCollapse"
  >
    <el-menu-item index="/">
      <el-icon>
        <i-ri-dashboard-line />
      </el-icon>
      <span>首页</span>
    </el-menu-item>
    <el-sub-menu index="1">
      <template #title>
        <el-icon>
          <i-ri-apps-2-line />
        </el-icon>
        <span>功能展示</span>
      </template>
      <el-menu-item index="/1">选项1</el-menu-item>
      <el-menu-item index="/2">选项2</el-menu-item>
      <el-menu-item index="/3">选项3</el-menu-item>
      <el-sub-menu index="1-4">
        <template #title>选项4</template>
        <el-menu-item index="/">选项4-1</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>
        <el-icon>
          <i-ri-alert-line />
        </el-icon>
        <span>错误页展示</span>
      </template>
      <el-menu-item index="/error/403">403</el-menu-item>
      <el-menu-item index="/error/404">404</el-menu-item>
      <el-menu-item index="/error/500">500</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">
import { usePageStore } from "@/store/page"
const pageStore = usePageStore()
</script>

<style lang="scss" scoped>
.el-menu {
  border-right: 0;
}
.el-menu:not(.el-menu--collapse) {
  width: 200px;
}
</style>
