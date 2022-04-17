/*
 * @Author: Chen Xin
 * @Date: 2022-04-12 22:04:22
 * @LastEditTime: 2022-04-17 13:30:58
 * @LastEditors: Chen Xin
 * @Description:
 * @FilePath: \Henin-Admin\src\store\user.ts
 */
//src/store/user.ts

import { defineStore } from "pinia"

export const useUserStore = defineStore({
  id: "user", // id必填，且需要唯一
  state: () => {
    return {
      id: 1,
      name: "张三",
    }
  },
  actions: {
    updateName(name: string) {
      this.name = name
    },
    updateId() {
      this.id++
    },
  },
  getters: {
    fullName: (state) => {
      return state.name + "丰"
    },
  },
  // 开启数据缓存
  persist: {
    enabled: true,
  },
})
