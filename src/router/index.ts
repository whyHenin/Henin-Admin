/*
 * @Author: Chen Xin
 * @Date: 2022-04-11 16:09:48
 * @LastEditTime: 2022-04-20 15:13:56
 * @LastEditors: Chen Xin
 * @Description:
 * @FilePath: \Henin-Admin\src\router\index.ts
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import NProgress from "nprogress"
import "nprogress/nprogress.css"
import layout from "@/layout/index.vue"
import login from "@/views/login/index.vue"
import errorRoutes from "./modules/error"
import listRoutes from "./modules/list"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "layout",
    component: layout,
    children: [
      {
        // 默认路由
        path: "",
        name: "home",
        component: () => import("@/views/home/home.vue"),
        meta: {
          title: "首页",
        },
      },
      errorRoutes,
      listRoutes,
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
// 全局前置守卫
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
// 全局后置守卫
router.afterEach((to, from) => {
  NProgress.done()
})

export default router
