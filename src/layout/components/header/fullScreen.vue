<!--
 * @Author: Chen Xin
 * @Date: 2022-04-17 14:43:00
 * @LastEditTime: 2022-04-17 21:47:39
 * @LastEditors: Chen Xin
 * @Description: 
 * @FilePath: \Henin-Admin\src\layout\components\header\fullScreen.vue
-->
<template>
  <el-tooltip effect="dark" content="全屏" placement="bottom" :show-after="600">
    <div class="header-icon">
      <el-icon @click="toggleFullScreen">
        <i-ri-fullscreen-fill v-if="!isFullScreen" />
        <i-ri-fullscreen-exit-fill v-else />
      </el-icon>
    </div>
  </el-tooltip>
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
