<!--
 * @Author: Chen Xin
 * @Date: 2022-04-11 16:07:49
 * @LastEditTime: 2022-04-18 01:45:32
 * @LastEditors: Chen Xin
 * @Description: 
 * @FilePath: \Henin-Admin\src\views\login\index.vue
-->
<template>
  <div class="container">
    <div class="left">
      <h1>Henin-Admin中后台管理系统</h1>
      <img src="@/assets/common/login.svg" />
    </div>
    <div class="right"></div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("@/assets/common/bgc.svg") no-repeat;
  background-size: cover;
  .left {
    height: 100%;
    width: 50%;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    // background-color: #2f53eb;
    position: relative;
    h1 {
      top: 55px;
      left: 30%;
      position: absolute;
      color: #fff;
      font-size: 24px;
    }
    img {
      top: 40%;
      left: 30%;
      position: absolute;
      width: 750px;
    }
  }
  .right {
    height: 100%;
    width: 50%;
  }
}
</style>
