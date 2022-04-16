<!--
 * @Author: Chen Xin
 * @Date: 2022-04-11 16:07:49
 * @LastEditTime: 2022-04-17 00:55:26
 * @LastEditors: Chen Xin
 * @Description: 
 * @FilePath: \Henin-Admin\src\views\login\index.vue
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
import { onMounted } from "vue"
import { login } from "@/api/login"
const userStore = useUserStore()

const setName = () => {
  userStore.updateName("李四")
}
const addId = () => {
  userStore.updateId()
}
onMounted(() => {
  console.log("login mounted")
  login().then((res) => {
    console.log("%c [res]-19", "font-size:13px; background:pink; color:#bf2c9f;", res)
    console.log("login success")
  })
})
</script>

<style lang="scss" scoped></style>
