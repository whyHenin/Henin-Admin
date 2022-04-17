<!--
 * @Author:ChenXin
 * @Date: 2022-03-16 09:18:55
 * @LastEditTime: 2022-04-17 01:48:24
 * @LastEditors: Chen Xin
 * @Description: 
 * @FilePath: \Henin-Admin\src\App.vue
-->

<template>
  <el-config-provider :locale="zhCn">
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup lang="ts">
// 配置国际化
import zhCn from "element-plus/lib/locale/lang/zh-cn"
</script>

<style></style>
