/*
 * @Author: Chen Xin
 * @Date: 2022-04-17 13:25:02
 * @LastEditTime: 2022-04-17 15:48:13
 * @LastEditors: Chen Xin
 * @Description:
 * @FilePath: \Henin-Admin\src\store\page.ts
 */
import { defineStore } from "pinia"
export const usePageStore = defineStore({
  id: "page", // id必填，且需要唯一
  state: () => {
    return {
      isCollapse: false,
    }
  },
  actions: {
    setCollapse() {
      this.isCollapse = !this.isCollapse
    },
  },
  // getters: {
  //   fullName: (state) => {
  //     return state.name + "丰"
  //   },
  // },
  // // 开启数据缓存
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage,
      },
    ],
  },
})
