<!--
 * @Author: Chen Xin
 * @Date: 2022-04-17 14:08:38
 * @LastEditTime: 2022-04-19 00:38:59
 * @LastEditors: Chen Xin
 * @Description: 
 * @FilePath: \Henin-Admin\src\layout\components\header\Breadcrumb.vue
-->
<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item v-for="(item, index) in routes" :key="index">
      {{ item.meta.title }}</el-breadcrumb-item
    >
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { ArrowRight } from "@element-plus/icons-vue"
import { useRouter } from "vue-router"
import { computed } from "vue"
const router = useRouter()
const routes = computed(() => {
  return router.currentRoute.value.matched.filter((item) => {
    return item.meta.title
  })
})
</script>

<style lang="scss" scoped></style>
