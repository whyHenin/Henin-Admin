<!--
 * @Author: Chen Xin
 * @Date: 2022-04-17 11:13:00
 * @LastEditTime: 2022-05-07 09:59:26
 * @LastEditors: Chen Xin
 * @Description: 
 * @FilePath: \Henin-Admin\src\views\notFound\404.vue
-->
<template>
  <div class="container">
    <img src="@/assets/common/404.svg" alt="" />
    <div>抱歉，页面不见了～</div>
    <a-button @click="router.go(-1)">返回</a-button>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
</script>

<style scoped lang="less">
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > div {
    margin: 20px 0;
  }
}
</style>
