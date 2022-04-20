<!--
 * @Author: Chen Xin
 * @Date: 2022-04-17 20:07:46
 * @LastEditTime: 2022-04-20 16:44:58
 * @LastEditors: Chen Xin
 * @Description: 
 * @FilePath: \Henin-Admin\src\layout\components\header\setting.vue
-->
<!--
 * @Author: Chen Xin
 * @Date: 2022-04-17 19:22:21
 * @LastEditTime: 2022-04-17 19:25:23
 * @LastEditors: Chen Xin
 * @Description: 
 * @FilePath: \Henin-Admin\src\layout\components\header\search.vue
-->
<template>
  <div @click="handleDrawer">
    <a-button shape="circle"><icon-settings /></a-button>
    <a-drawer
      :visible="visible"
      unmount-on-close
      :footer="false"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <template #title> 系统配置 </template>
      <div>
        You can cusstomize modal body text by the current situation. This modal will be closed
        immediately once you press the OK button.
      </div>
    </a-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const visible = ref(false)
const handleDrawer = () => {
  visible.value = !visible.value
}
const handleOk = () => {
  visible.value = false
}
const handleCancel = () => {
  visible.value = false
}
</script>

<style lang="scss" scoped></style>
