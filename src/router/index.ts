/*
 * @Author: Chen Xin
 * @Date: 2022-04-11 16:09:48
 * @LastEditTime: 2022-05-07 10:29:30
 * @LastEditors: Chen Xin
 * @Description:
 * @FilePath: \Henin-Admin\src\router\index.ts
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import NProgress from "@/utils/nprogress"
import layout from "@/layout/index.vue"
// import login from "@/views/login/index.vue"
import listRoutes from "./modules/list"
import homeRoutes from "./modules/home"
import userRoutes from "./modules/user"
import { storageLocal } from "@/utils/storage"
import { USER_TOKEN } from "@/utils/constants"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "layout",
    redirect: "/home",
    component: layout,
    children: [homeRoutes, listRoutes, userRoutes],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/index.vue"), // 注意这里要带上 文件后缀.vue
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("@/views/notFound/404.vue"),
    meta: {
      title: "错误404",
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
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
