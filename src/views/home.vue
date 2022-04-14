<!--
 * @Author: Chen Xin
 * @Date: 2022-04-12 21:39:15
 * @LastEditTime: 2022-04-14 22:45:41
 * @LastEditors: Chen Xin
 * @Description: 
 * @FilePath: \Henin-Admin\src\views\home.vue
-->
<template>
  <div>home</div>
  <el-button type="" @click="$router.push('/login')">去login页</el-button>
  <p>login的数据：{{ userStore.name }}</p>
  <p>test:{{ test }}</p>
  <el-button type="" @click="add">增加test</el-button>
  <hello :msg="'home的msg'" />
</template>

<script lang="ts" setup>
// 引入store
import hello from "./hello.vue"
import { ref } from "vue"
import { useUserStore } from "@/store/user"
// import { storeToRefs } from "pinia"
const userStore = useUserStore()
// 解构为响应式数据
// const { name } = storeToRefs(userStore)

const test = ref(0)
const add = () => {
  test.value++
}
</script>

<style lang="scss" scoped></style>
