<!--
 * @Author: Chen Xin
 * @Date: 2022-04-17 14:08:38
 * @LastEditTime: 2022-04-21 00:22:05
 * @LastEditors: Chen Xin
 * @Description: 
 * @FilePath: \Henin-Admin\src\components\breadcrumb.vue
-->
<template>
  <a-breadcrumb>
    <a-breadcrumb-item v-for="(item, index) in routes" :key="index">
      {{ item.meta.title }}</a-breadcrumb-item
    >
  </a-breadcrumb>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"
import { computed } from "vue"
const router = useRouter()
const routes = computed(() => {
  return router.currentRoute.value.matched.filter((item) => {
    return item.meta.title
  })
})
</script>

<style lang="scss" scoped>
.arco-breadcrumb {
  margin: 16px 0;
}
</style>
