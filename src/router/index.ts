/*
 * @Author: Chen Xin
 * @Date: 2022-04-11 16:09:48
 * @LastEditTime: 2022-04-12 21:50:42
 * @LastEditors: Chen Xin
 * @Description:
 * @FilePath: \Henin-Admin\src\router\index.ts
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login.vue"), // 注意这里要带上 文件后缀.vue
  },
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home.vue"), // 注意这里要带上 文件后缀.vue
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
