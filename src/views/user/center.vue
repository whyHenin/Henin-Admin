<!--
 * @Author: Chen Xin
 * @Date: 2022-04-12 21:39:15
 * @LastEditTime: 2022-05-07 10:48:45
 * @LastEditors: Chen Xin
 * @Description: 
 * @FilePath: \Henin-Admin\src\views\user\center.vue
-->
<template>
  <breadcrumb />
  <p>用户名：{{ userStore.userName }}</p>
  <p>角色：{{ userStore.role }}</p>
  <p>联系方式：{{ userStore.phone }}</p>
  <p>用户id：{{ userStore.id }}</p>
  <p>创建日期：{{ userStore.craetTime }}</p>
  <p>头像：{{ userStore.avatar }}</p>
</template>

<script lang="ts" setup>
// 引入store
import { useUserStore } from "@/store/user"
const userStore = useUserStore()
</script>

<style lang="scss" scoped></style>
