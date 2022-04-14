<!--
 * @Author: Chen Xin
 * @Date: 2022-04-14 22:43:19
 * @LastEditTime: 2022-04-14 23:55:29
 * @LastEditors: Chen Xin
 * @Description: 
 * @FilePath: \Henin-Admin\src\views\hello.vue
-->
<template>
  <div>hello vue3 {{ props.msg }}</div>
</template>

<script setup lang="ts">
import { defineComponent } from "vue"
const props = defineProps({
  msg: {
    type: String,
    default: "hello vue3",
  },
})
</script>

<style scoped></style>
