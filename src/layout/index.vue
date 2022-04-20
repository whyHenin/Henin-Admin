<!--
 * @Author: Chen Xin
 * @Date: 2022-04-17 01:50:54
 * @LastEditTime: 2022-04-21 00:16:28
 * @LastEditors: Chen Xin
 * @Description: 后台布局
 * @FilePath: \Henin-Admin\src\layout\index.vue
-->
<template>
  <a-layout>
    <a-layout-header><Header /></a-layout-header>
    <a-layout>
      <a-layout-sider :collapsible="true"><Menu /></a-layout-sider>
      <a-layout-content><router-view> </router-view> </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import Menu from "./components/menu.vue"
import Header from "./components/header/index.vue"
</script>

<style lang="less" scoped>
.arco-layout {
  min-height: 100vh;
  overflow-y: hidden;
  transition: padding 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);
  background-color: var(--color-bg-3);
  .arco-layout-header {
    height: 60px;
    box-shadow: 0px 4px 10px 0px rgba(78, 89, 105, 0.06), 0px 1px 0px 0px #e5e6eb;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    background-color: var(--color-bg-2);
    border-bottom: 1px solid var(--color-border);
  }
  .arco-layout-sider {
    width: 100px;
    padding-top: 60px;
  }
  .arco-layout-content {
    padding: 20px;
    padding-top: 60px;
    background-color: var(--color-fill-2);
  }
}
</style>
