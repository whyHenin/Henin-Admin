/*
 * @Author: Chen Xin
 * @Date: 2022-04-12 22:04:22
 * @LastEditTime: 2022-04-23 21:25:03
 * @LastEditors: Chen Xin
 * @Description:
 * @FilePath: \Henin-Admin\src\store\user.ts
 */
//src/store/user.ts

import { defineStore } from "pinia"
// import { userType } from "./types"
import { storageLocal } from "@/utils/storage"
import { USER_TOKEN } from "@/utils/constants"

export const useUserStore = defineStore({
  id: "user_info", // id必填，且需要唯一
  state: () => ({
    userName: "",
    role: "",
    phone: 0,
    id: 0,
    craetTime: "",
    avatar: "",
  }),
  actions: {
    updateUser(Info: any) {
      storageLocal.setItem(USER_TOKEN, Info.token)
      this.userName = Info.userName
      this.role = Info.role
      this.phone = Info.phone
      this.id = Info.id
      this.craetTime = Info.craetTime
      this.avatar = Info.avatar
    },
  },
  getters: {},
  // 开启数据缓存
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage, // 默认sessionStorage 改为localStorage
      },
    ],
  },
})
