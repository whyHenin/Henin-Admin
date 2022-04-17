/*
 * @Author: Chen Xin
 * @Date: 2022-04-11 16:09:48
 * @LastEditTime: 2022-04-17 01:58:27
 * @LastEditors: Chen Xin
 * @Description:
 * @FilePath: \Henin-Admin\src\router\index.ts
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import layout from "@/layout/index.vue"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: layout,
    children: [
      {
        // 默认路由
        path: "",
        name: "home",
        component: () => import("@/views/home.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/index.vue"), // 注意这里要带上 文件后缀.vue
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
