<!--
 * @Author: Chen Xin
 * @Date: 2022-04-11 16:07:49
 * @LastEditTime: 2022-04-14 21:14:45
 * @LastEditors: Chen Xin
 * @Description: 
 * @FilePath: \Henin-Admin\src\views\login.vue
-->
<template>
  <div>login</div>
  <el-button type="" @click="setName">login页写入pinia</el-button>
  <p>{{ userStore.fullName }}</p>
  <el-button type="" @click="addId">增加id</el-button>
  <p>{{ userStore.id }}</p>
</template>

<script lang="ts" setup>
// 引入store
import { useUserStore } from "@/store/user"
const userStore = useUserStore()

const setName = () => {
  userStore.updateName("李四")
}
const addId = () => {
  // console.log(import.meta.env.VITE_TITLE)
  userStore.updateId()
}
</script>

<style lang="scss" scoped></style>
