<!--
 * @Author: Chen Xin
 * @Date: 2022-04-17 01:50:54
 * @LastEditTime: 2022-04-20 17:17:43
 * @LastEditors: Chen Xin
 * @Description: 后台布局
 * @FilePath: \Henin-Admin\src\layout\index.vue
-->
<template>
  <a-layout>
    <a-layout-header><Header /></a-layout-header>
    <a-layout>
      <a-layout-sider :collapsible="true"><Menu /></a-layout-sider>
      <a-layout-content
        ><div class="container"><router-view> </router-view></div
      ></a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import Menu from "./components/menu.vue"
import Header from "./components/header/index.vue"
</script>

<style lang="less" scoped>
.arco-layout {
  height: 100vh;
  .arco-layout-header {
    height: 8vh;
    box-shadow: 0px 4px 10px 0px rgba(78, 89, 105, 0.06), 0px 1px 0px 0px #e5e6eb;
    z-index: 2;
    display: flex;
    align-items: center;
  }
  .arco-layout-sider {
    width: 100px;
  }
  .arco-layout-content {
    background-color: var(--color-fill-2);
    padding: 20px;
  }
  .container {
    background-color: #fff;
    padding: 20px;
    min-height: 100%;
  }
}
</style>
