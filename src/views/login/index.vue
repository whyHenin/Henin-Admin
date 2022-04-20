<!--
 * @Author: Chen Xin
 * @Date: 2022-04-20 15:00:35
 * @LastEditTime: 2022-04-20 23:21:34
 * @LastEditors: Chen Xin
 * @Description: 
 * @FilePath: \Henin-Admin\src\views\login\index.vue
-->
<template>
  <div class="container">
    <div class="left"></div>
    <div class="right">
      <div class="content">
        <div class="form-title">登录 Arco Design Pro</div>
        <div class="form-sub-title">登录 Arco Design Pro</div>
        <div class="form-msg">{{ formMsg }}</div>
        <a-form :model="form" layout="horizontal" auto-label-width>
          <a-form-item field="name" hide-label>
            <a-input v-model="form.name" placeholder="账号"
              ><template #prefix> <icon-user /> </template
            ></a-input>
          </a-form-item>
          <a-form-item field="password" hide-label>
            <a-input-password v-model="form.password" placeholder="密码" allow-clear
              ><template #prefix> <icon-lock /> </template
            ></a-input-password>
          </a-form-item>
          <a-form-item field="captcha" hide-label>
            <a-row :gutter="20">
              <a-col :span="14"
                ><a-input v-model="form.captcha" placeholder="验证码"
                  ><template #prefix> <icon-image /> </template></a-input
              ></a-col>
              <a-col :span="6"> <img class="captchaImg" :src="captchaUrl" alt="" /></a-col>
              <a-col :span="2"
                ><a-button type="text" shape="circle" @click="getCaptcha"
                  ><icon-refresh
                /></a-button>
              </a-col>
            </a-row>
          </a-form-item>
          <a-form-item hide-label>
            <a-button type="primary" long @click="login">登录</a-button>
          </a-form-item>
          <a-form-item hide-label>
            <a-button type="text" long @click="reg">立即注册</a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from "vue"
import { useRouter } from "vue-router"
import axios from "axios"
const router = useRouter()
const form = reactive({
  name: "",
  password: "",
  captcha: "",
})
const formMsg = ref("")
const captchaUrl = ref("")
const getCaptcha = () => {
  axios.get("https://www.hfzhishidai.com/marketServer/sys/getGifCode").then((res) => {
    captchaUrl.value = res.data.data.image
  })
}
const login = () => {
  router.push("/")
}
const reg = () => {
  document.body.setAttribute("arco-theme", "dark")
}
onMounted(() => {
  getCaptcha()
})
</script>

<style lang="less" scoped>
.container {
  display: flex;
  height: 100%;
}
.left {
  width: 25vw;
  background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
  height: 100vh;
}
.right {
  width: 75vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .content {
    width: 320px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .form-title {
      color: var(--color-text-1);
      font-weight: 500;
      font-size: 24px;
      line-height: 32px;
      width: 100%;
      text-align: left;
    }
    .form-sub-title {
      color: var(--color-text-3);
      font-size: 16px;
      line-height: 24px;
      width: 100%;
      text-align: left;
    }
    .form-msg {
      height: 32px;
      color: rgb(var(--red-6));
      line-height: 32px;
      width: 100%;
      text-align: left;
    }
    .captchaImg {
      height: 32px;
    }
    .arco-btn-text {
      color: var(--color-text-3);
    }
  }
}
</style>
