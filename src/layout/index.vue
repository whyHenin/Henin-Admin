<!--
 * @Author: Chen Xin
 * @Date: 2022-04-17 01:50:54
 * @LastEditTime: 2022-04-22 13:38:00
 * @LastEditors: Chen Xin
 * @Description: 后台布局
 * @FilePath: \Henin-Admin\src\layout\index.vue
-->
<template>
  <a-layout>
    <a-layout-header><Header /></a-layout-header>
    <a-layout>
      <a-layout-sider collapsible breakpoint="lg"><Menu /></a-layout-sider>
      <a-layout-content><router-view> </router-view> </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import Menu from "./components/menu.vue"
import Header from "./components/header/index.vue"
</script>

<style lang="less" scoped></style>
