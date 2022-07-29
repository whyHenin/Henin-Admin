<template>
  <div class="container">
    <div class="left"><Swiper /></div>
    <div class="right">
      <div class="content">
        <div class="form-title">登录 Henin-Admin</div>
        <div class="form-sub-title">登录 Henin-Admin</div>
        <div class="form-msg">{{ formMsg }}</div>
        <a-form
          ref="form"
          layout="horizontal"
          auto-label-width
          :rules="rules"
          :model="ruleForm"
          @submit="dologin"
        >
          <a-form-item field="name" hide-label>
            <a-input v-model="ruleForm.name" placeholder="账号"
              ><template #prefix> <icon-user /> </template
            ></a-input>
          </a-form-item>
          <a-form-item field="password" hide-label>
            <a-input-password v-model="ruleForm.password" placeholder="密码" allow-clear
              ><template #prefix> <icon-lock /> </template
            ></a-input-password>
          </a-form-item>
          <a-form-item field="captcha" hide-label>
            <a-row :gutter="15">
              <a-col :span="14"
                ><a-input v-model="ruleForm.captcha" placeholder="验证码"
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
            <a-button type="primary" long html-type="submit">登录</a-button>
          </a-form-item>
          <a-form-item hide-label>
            <a-button type="text" long @click="doReg">立即注册</a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Swiper from "./components/swiper.vue"
import axios from "axios"
import { login } from "@/api/login"
import { useUserStore } from "@/store/user"
const router = useRouter()
const route = useRoute()
const userStore = useUserStore()
// 表单数据对象
const ruleForm = reactive({
  name: "",
  password: "",
  captcha: "",
})
// 表单验证规则
const rules = ref({
  name: [
    {
      required: true,
      message: "请输入账号",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "请输入密码",
      trigger: "blur",
    },
  ],
  captcha: [
    {
      required: true,
      message: "请输入验证码",
      trigger: "blur",
    },
  ],
})
// 验证码图片
const captchaUrl = ref("")
// 获取验证码
const getCaptcha = () => {
  axios.get("https://www.beijiniu.net.cn/marketServer/sys/getGifCode").then((res) => {
    captchaUrl.value = res.data.data.image
  })
}
onMounted(() => {
  getCaptcha()
})
// 表单实例
const form = ref()
// 登录
const dologin = async () => {
  await login({ ...ruleForm }).then((res) => {
    const { redirect, ...othersQuery } = router.currentRoute.value.query
    if (res.code === 200) {
      userStore.updateUser(res.data)
      setTimeout(() => {
        router.push({
          path: (redirect as string) || "/",
          query: {
            ...othersQuery,
          },
        })
      }, 3000)
    } else {
      formMsg.value = res.msg
      getCaptcha()
    }
  })
}
// 提示信息
const formMsg = ref("")
// 注册
const doReg = () => {
  form.value.validate((valid: any) => {
    if (valid) {
      // console.log("验证不通过")
    } else {
      // console.log("通过!!")
      return false
    }
  })
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
  width: 35vw;
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
