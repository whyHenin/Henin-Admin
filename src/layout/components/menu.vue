<!--
 * @Author: Chen Xin
 * @Date: 2022-04-17 10:20:01
 * @LastEditTime: 2022-04-19 00:32:44
 * @LastEditors: Chen Xin
 * @Description: 
 * @FilePath: \Henin-Admin\src\layout\components\menu.vue
-->
<template>
  <el-menu
    active-text-color="#165DFF"
    background-color="#ffffff"
    class="el-menu-vertical-demo"
    default-active="1"
    text-color="#4E5969"
    router
    unique-opened
    :collapse="pageStore.isCollapse"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon>
          <i-ri-dashboard-line />
        </el-icon>
        <span>首页</span>
      </template>
      <el-menu-item index="/">分析页</el-menu-item>
      <el-menu-item index="/da">工作台</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
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
    <el-sub-menu index="3">
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
  font-weight: bold;
  .el-sub-menu .el-sub-menu__title {
    &:hover {
      color: #165dff;
    }
  }
  .el-menu-item {
    border-radius: 2px;
    background: #f2f3f5;
    &:hover {
      background: #e5e6eb;
      color: #165dff;
    }
  }
}
.el-menu:not(.el-menu--collapse) {
  width: 200px;
}
</style>
