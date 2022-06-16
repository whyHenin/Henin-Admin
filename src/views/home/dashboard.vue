<!--
 * @Author: Chen Xin
 * @Date: 2022-04-12 21:39:15
 * @LastEditTime: 2022-06-11 12:11:12
 * @LastEditors: Chen Xin
 * @Description: 
 * @FilePath: \Henin-Admin\src\views\home\dashboard.vue
-->
<template>
  <a-button @click="$router.push('/login')">去login页</a-button>
  <p>login的数据：{{ userStore.userName }}</p>
  <a-button type="primary">
    <template #icon>
      <icon-caret-up />
    </template>
    <template #default>Daete</template>
  </a-button>
</template>

<script lang="ts" setup>
// 引入store
import { ref } from "vue"
import { useUserStore } from "@/store/user"
// import { storeToRefs } from "pinia"
const userStore = useUserStore()
// 解构为响应式数据
// const { name } = storeToRefs(userStore)
</script>

<style lang="scss" scoped></style>
