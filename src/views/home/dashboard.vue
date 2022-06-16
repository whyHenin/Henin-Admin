<!--
 * @Author: Chen Xin
 * @Date: 2022-04-12 21:39:15
 * @LastEditTime: 2022-06-17 00:47:18
 * @LastEditors: Chen Xin
 * @Description: 
 * @FilePath: \Henin-Admin\src\views\home\dashboard.vue
-->
<template>
  <breadcrumb />
  <p>流量版</p>
</template>

<script lang="ts" setup>
// 引入store
import { useUserStore } from "@/store/user"
// import { storeToRefs } from "pinia"
const userStore = useUserStore()
// 解构为响应式数据
// const { name } = storeToRefs(userStore)
</script>

<style lang="scss" scoped></style>
