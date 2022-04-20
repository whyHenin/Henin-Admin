<!--
 * @Author: Chen Xin
 * @Date: 2022-04-17 14:43:00
 * @LastEditTime: 2022-04-20 16:38:43
 * @LastEditors: Chen Xin
 * @Description: 
 * @FilePath: \Henin-Admin\src\layout\components\header\fullScreen.vue
-->
<template>
  <a-tooltip content="全屏" position="bottom">
    <a-button shape="circle" @click="toggleFullScreen">
      <icon-fullscreen v-if="!isFullScreen" />
      <icon-fullscreen-exit v-else />
    </a-button>
  </a-tooltip>
</template>

<script setup lang="ts">
import { ref } from "vue"
const isFullScreen = ref(false)
const toggleFullScreen = () => {
  if (!document.fullscreenElement) {
    isFullScreen.value = true
    document.documentElement.requestFullscreen()
  } else if (document.exitFullscreen) {
    isFullScreen.value = false
    document.exitFullscreen()
  }
}
</script>

<style lang="scss" scoped></style>
