<!--
 * @Author: Chen Xin
 * @Date: 2022-04-17 20:07:46
 * @LastEditTime: 2022-04-17 22:04:25
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
  <div class="header-icon" @click="handleDrawer">
    <el-icon> <i-ri-settings-3-line /> </el-icon>
    <el-drawer v-model="drawer" title="系统配置" direction="rtl" size="20%">
      <span>Hi, there!</span>
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const drawer = ref(false)
const handleDrawer = () => {
  drawer.value = !drawer.value
}
</script>

<style lang="scss" scoped></style>
