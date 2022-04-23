/*
 * @Author: Chen Xin
 * @Date: 2022-04-11 16:09:48
 * @LastEditTime: 2022-04-23 21:24:21
 * @LastEditors: Chen Xin
 * @Description:
 * @FilePath: \Henin-Admin\src\router\index.ts
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import NProgress from "@/utils/nprogress"
import layout from "@/layout/index.vue"
// import login from "@/views/login/index.vue"
import errorRoutes from "./modules/error"
import listRoutes from "./modules/list"
import homeRoutes from "./modules/home"
import { storageLocal } from "@/utils/storage"
import { USER_TOKEN } from "@/utils/constants"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "layout",
    redirect: "/home",
    component: layout,
    children: [homeRoutes, errorRoutes, listRoutes],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/index.vue"), // 注意这里要带上 文件后缀.vue
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
// 全局前置守卫
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (!storageLocal.getItem(USER_TOKEN)) {
    if (to.path !== "/login") {
      next({ path: "/login", query: { redirect: to.fullPath } })
    }
  }
  next()
})
// 全局后置守卫
router.afterEach((to, from) => {
  NProgress.done()
})

export default router
