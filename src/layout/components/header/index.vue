<!--
 * @Author: Chen Xin
 * @Date: 2022-04-17 13:21:54
 * @LastEditTime: 2022-05-07 10:55:48
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
          :visible="settingVisible"
          unmount-on-close
          :footer="false"
          @ok="handleOk"
          @cancel="handleCancel"
        >
          <template #title> 系统配置 </template>
          <div>这里是系统配置</div>
        </a-drawer>
      </li>
      <!-- 用户头像 -->
      <li>
        <a-dropdown>
          <a-avatar
            ><img
              :style="{
                width: '100%',
              }"
              :src="userStore.avatar"
          /></a-avatar>
          <template #content>
            <a-doption @click="router.push('/user/center')"><icon-user />个人信息</a-doption>
            <a-doption><icon-settings />个人设置</a-doption>
            <a-doption @click="handleLogOut"><icon-import />退出系统</a-doption>
          </template>
        </a-dropdown>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { Message, Modal } from "@arco-design/web-vue"
import { storageLocal } from "@/utils/storage"
import { useUserStore } from "@/store/user"
const userStore = useUserStore()
const router = useRouter()

// 全屏显示功能
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
// 黑夜模式功能
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
// 设置抽屉组件
const settingVisible = ref(false)
const handleDrawer = () => {
  settingVisible.value = !settingVisible.value
}
const handleOk = () => {
  settingVisible.value = false
}
const handleCancel = () => {
  settingVisible.value = false
}
// 用户头像功能
const handleLogOut = () => {
  Modal.warning({
    title: "退出系统",
    content: "确定退出系统吗？",
    hideCancel: false,
    onOk: () => {
      storageLocal.clear()
      Message.success("退出成功")
      router.replace("/login")
    },
  })
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
