<!--
 * @Author: Chen Xin
 * @Date: 2022-04-12 21:39:15
 * @LastEditTime: 2022-04-12 22:18:39
 * @LastEditors: Chen Xin
 * @Description: 
 * @FilePath: \Henin-Admin\src\views\home.vue
-->
<template>
  <div>home</div>
  <el-button type="" @click="$router.push('/login')">去login页</el-button>
  <p>login的数据：{{ userStore.name }}</p>
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
