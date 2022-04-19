<!--
 * @Author: Chen Xin
 * @Date: 2022-04-11 16:07:49
 * @LastEditTime: 2022-04-19 14:36:33
 * @LastEditors: Chen Xin
 * @Description: 登录页
 * @FilePath: \Henin-Admin\src\views\login\index.vue
-->
<template>
  <div class="container">
    <div class="left">
      <h1>Admin中后台管理系统</h1>
      <img src="@/assets/common/login.svg" />
    </div>
    <div class="right">
      <div class="login">
        <el-form :model="form" label-position="top">
          <el-form-item>
            <h1>登录</h1>
          </el-form-item>
          <el-form-item label="账号">
            <el-input v-model="form.account" placeholder="请输入账号" />
          </el-form-item>
          <el-form-item label="密码">
            <el-input
              v-model="form.password"
              type="password"
              :show-password="true"
              placeholder="请输入密码"
            />
          </el-form-item>
          <el-form-item label="验证码">
            <el-row justify="space-between">
              <el-col :span="17"
                ><el-input v-model="form.captcha" placeholder="请输入验证码"
              /></el-col>
              <el-col :span="7"><img :src="captcha" @click="getCaptcha" /> </el-col>
            </el-row>
          </el-form-item>
          <el-form-item>
            <div class="option">
              <el-checkbox label="记住我"></el-checkbox>
              <span class="forget">忘记密码？</span>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submit">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from "vue"
import { useRoute, useRouter } from "vue-router"
import axios from "axios"
const route = useRoute()
const router = useRouter()
const captcha = ref("")
const form = reactive({
  account: "",
  password: "",
  captcha: "",
})
const getCaptcha = () => {
  axios.get("https://www.hfzhishidai.com/marketServer/sys/getGifCode").then((res) => {
    captcha.value = res.data.data.image
  })
}
const submit = () => {
  router.push("/")
}
onMounted(() => {
  getCaptcha()
})
</script>
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
    position: relative;
    h1 {
      top: 10%;
      left: 35%;
      position: absolute;
      color: #c3e7fe;
      font-size: 36px;
    }
    img {
      top: 25%;
      left: 25%;
      position: absolute;
      width: 40vw;
    }
  }
  .right {
    height: 100%;
    width: 50%;
    position: relative;
    .login {
      position: absolute;
      top: 30%;
      left: 10%;
      width: 20vw;
      height: 50vh;
      h1 {
        font-size: 36px;
        color: #272e3b;
      }
      .option {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
      .el-button {
        width: 100%;
        height: 40px;
      }
      .el-row {
        width: 100%;
      }
      .el-col {
        img {
          height: 40px;
          margin-left: auto;
          cursor: pointer;
        }
      }
      .forget {
        color: #337ecc;
        cursor: pointer;
      }
    }
  }
}
</style>
