<!--
 * @Author: Chen Xin
 * @Date: 2022-04-20 23:36:24
 * @LastEditTime: 2022-04-20 23:44:17
 * @LastEditors: Chen Xin
 * @Description: 
 * @FilePath: \Henin-Admin\src\layout\components\header\toggleDark.vue
-->
<!--
 * @Author: Chen Xin
 * @Date: 2022-04-17 14:43:00
 * @LastEditTime: 2022-04-20 16:38:43
 * @LastEditors: Chen Xin
 * @Description: 
 * @FilePath: \Henin-Admin\src\layout\components\header\fullScreen.vue
-->
<template>
  <a-tooltip content="切换模式" position="bottom">
    <a-button shape="circle" @click="toggleDarkMode">
      <icon-moon-fill v-if="!isDark" />
      <icon-sun-fill v-else />
    </a-button>
  </a-tooltip>
</template>

<script setup lang="ts">
import { ref } from "vue"
const isDark = ref(false)
const toggleDarkMode = () => {
  if (isDark.value) {
    isDark.value = false
    document.body.removeAttribute("arco-theme")
  } else {
    isDark.value = true
    document.body.setAttribute("arco-theme", "dark")
  }
}
</script>

<style lang="scss" scoped></style>
