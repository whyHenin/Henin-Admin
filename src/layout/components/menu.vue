<!--
 * @Author: Chen Xin
 * @Date: 2022-04-17 10:20:01
 * @LastEditTime: 2022-04-22 17:48:35
 * @LastEditors: Chen Xin
 * @Description: 
 * @FilePath: \Henin-Admin\src\layout\components\menu.vue
-->
<template>
  <a-menu
    :default-open-keys="['0']"
    :default-selected-keys="['0_0']"
    breakpoint="lg"
    accordion
    auto-scroll-into-view
    :level-indent="30"
    @menu-item-click="toPage"
    @sub-menu-click="toPage"
  >
    <a-sub-menu v-for="item in routerList" :key="item.path">
      <template #icon><icon-common /></template>
      <template #title>{{ item.meta?.title }}</template>
      <a-menu-item v-for="i in item.children" :key="i.path">{{ i.meta?.title }}</a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<script setup lang="ts">
const router = useRouter()
const routerList = router.options.routes[0].children
const toPage = (key: string) => {
  router.push(key)
}
</script>

<style lang="scss" scoped></style>
