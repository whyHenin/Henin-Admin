/*
 * @Author: Chen Xin
 * @Date: 2022-04-17 11:13:23
 * @LastEditTime: 2022-04-22 16:19:51
 * @LastEditors: Chen Xin
 * @Description:
 * @FilePath: \Henin-Admin\src\router\modules\error.ts
 */
import { RouterView, RouteRecordRaw } from "vue-router"
const routes: RouteRecordRaw = {
  path: "/error",
  name: "error",
  component: RouterView,
  redirect: "/error/404",
  meta: {
    title: "错误页面",
  },
  children: [
    {
      path: "403",
      name: "403",
      component: () => import("@/views/error/403.vue"),
      meta: {
        title: "错误403",
      },
    },
    {
      path: "404",
      name: "404",
      component: () => import("@/views/error/404.vue"),
      meta: {
        title: "错误404",
      },
    },
    {
      path: "500",
      name: "500",
      component: () => import("@/views/error/500.vue"),
      meta: {
        title: "错误500",
      },
    },
  ],
}
export default routes
