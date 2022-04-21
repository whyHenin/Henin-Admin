<!--
 * @Author: Chen Xin
 * @Date: 2022-04-17 10:20:01
 * @LastEditTime: 2022-04-21 09:56:36
 * @LastEditors: Chen Xin
 * @Description: 
 * @FilePath: \Henin-Admin\src\layout\components\menu.vue
-->
<template>
  <a-menu
    :default-open-keys="['0']"
    :default-selected-keys="['0_2']"
    breakpoint="xl"
    accordion
    :level-indent="30"
  >
    <a-sub-menu key="0">
      <template #icon><icon-apps></icon-apps></template>
      <template #title>首页</template>
      <a-menu-item key="0_0">工作台</a-menu-item>
      <a-menu-item key="0_1">流量板</a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="1">
      <template #icon><icon-bulb></icon-bulb></template>
      <template #title>功能展示</template>
      <a-menu-item key="1_0">表格展示</a-menu-item>
      <a-menu-item key="1_1">卡片展示</a-menu-item>
      <a-sub-menu key="1_2" title="Navigation 4">
        <a-menu-item key="1_2_0">Menu 1</a-menu-item>
        <a-menu-item key="1_2_1">Menu 2</a-menu-item>
      </a-sub-menu>
    </a-sub-menu>
    <a-sub-menu key="2">
      <template #icon><icon-bug></icon-bug></template>
      <template #title>错误页展示</template>
      <a-menu-item key="2_0">403</a-menu-item>
      <a-menu-item key="2_1">404</a-menu-item>
      <a-menu-item key="2_2">500</a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<script setup lang="ts">
import { usePageStore } from "@/store/page"
const pageStore = usePageStore()
</script>

<style lang="scss" scoped></style>
