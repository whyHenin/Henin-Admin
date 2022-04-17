<!--
 * @Author: Chen Xin
 * @Date: 2022-04-17 14:12:25
 * @LastEditTime: 2022-04-17 20:26:07
 * @LastEditors: Chen Xin
 * @Description: 
 * @FilePath: \Henin-Admin\src\layout\components\header\toggleSideBar.vue
-->

<template>
  <el-icon class="header-icon" @click="pageStore.setCollapse">
    <i-ri-arrow-right-circle-line v-if="pageStore.isCollapse" />
    <i-ri-arrow-left-circle-line v-else />
  </el-icon>
</template>

<script setup lang="ts">
import { usePageStore } from "@/store/page"
const pageStore = usePageStore()
</script>

<style lang="scss" scoped></style>
