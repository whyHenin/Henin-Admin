<!--
 * @Author: Chen Xin
 * @Date: 2022-04-17 20:09:33
 * @LastEditTime: 2022-04-21 09:57:08
 * @LastEditors: Chen Xin
 * @Description: 
 * @FilePath: \Henin-Admin\src\layout\components\header\user.vue
-->
<template>
  <a-dropdown>
    <a-avatar src="https://cube.aemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
    <template #content>
      <a-doption>个人信息</a-doption>
      <a-doption>个人设置</a-doption>
      <a-doption>退出系统</a-doption>
    </template>
  </a-dropdown>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
