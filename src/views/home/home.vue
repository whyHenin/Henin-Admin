<!--
 * @Author: Chen Xin
 * @Date: 2022-04-12 21:39:15
 * @LastEditTime: 2022-04-20 13:41:52
 * @LastEditors: Chen Xin
 * @Description: 
 * @FilePath: \Henin-Admin\src\views\home\home.vue
-->
<template>
  <a-button @click="$router.push('/login')">去login页</a-button>
  <p>login的数据：{{ userStore.name }}</p>
  <p>test:{{ test }}</p>
  <a-button @click="add">增加test</a-button>
  <a-button type="primary">
    <template #icon>
      <icon-caret-up />
    </template>
    <!-- Use the default slot to avoid extra spaces -->
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

const test = ref(0)
const add = () => {
  console.log(this)

  test.value++
}
</script>

<style lang="scss" scoped></style>
