<!--
 * @Author: Chen Xin
 * @Date: 2022-04-17 13:21:54
 * @LastEditTime: 2022-04-22 16:52:48
 * @LastEditors: Chen Xin
 * @Description: 
 * @FilePath: \Henin-Admin\src\layout\components\header\index.vue
-->
<template>
  <div class="nav-bar">
    <div class="left">Henin-Admin</div>
    <ul class="right">
      <!-- 刷新 -->
      <li>
        <a-tooltip content="刷新" position="bottom">
          <a-button shape="circle" type="outline" @click="$router.go(0)"><icon-refresh /></a-button>
        </a-tooltip>
      </li>
      <!-- 全屏显示 -->
      <li>
        <a-tooltip content="全屏" position="bottom">
          <a-button shape="circle" type="outline" @click="toggleFullScreen">
            <icon-fullscreen v-if="!isFullScreen" />
            <icon-fullscreen-exit v-else />
          </a-button>
        </a-tooltip>
      </li>
      <!-- 黑夜模式 -->
      <li>
        <a-tooltip content="切换模式" position="bottom">
          <a-button shape="circle" type="outline" @click="toggleDarkMode">
            <icon-moon-fill v-if="!isDark" />
            <icon-sun-fill v-else />
          </a-button>
        </a-tooltip>
      </li>
      <!-- 搜索 -->
      <li>
        <a-tooltip content="搜索" position="bottom">
          <a-button shape="circle" type="outline"><icon-search /></a-button>
        </a-tooltip>
      </li>
      <!-- 设置 -->
      <li>
        <a-button shape="circle" type="outline" @click="handleDrawer"><icon-settings /></a-button>
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
      </li>
      <!-- 用户头像 -->
      <li>
        <a-dropdown>
          <a-avatar src="https://cube.aemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
          <template #content>
            <a-doption><icon-user />个人信息</a-doption>
            <a-doption><icon-settings />个人设置</a-doption>
            <a-doption><icon-import />退出系统</a-doption>
          </template>
        </a-dropdown>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
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

<style lang="less" scoped>
.nav-bar {
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  .left {
    width: 200px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .right {
    display: flex;
    align-items: center;
    padding-right: 20px;
    list-style: none;
    li {
      padding: 0 10px;
      .arco-btn {
        border-color: rgb(var(--gray-2));
        color: rgb(var(--gray-8));
        font-size: 16px;
      }
    }
  }
}
</style>
