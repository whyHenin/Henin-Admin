/*
 * @Author: Chen Xin
 * @Date: 2022-04-22 16:27:43
 * @LastEditTime: 2022-04-22 23:34:10
 * @LastEditors: Chen Xin
 * @Description:
 * @FilePath: \Henin-Admin\src\router\modules\home.ts
 */
import { RouterView, RouteRecordRaw } from "vue-router"
const routes: RouteRecordRaw = {
  path: "/home",
  name: "home",
  redirect: "/home/dashboard",
  component: RouterView,
  meta: {
    title: "首页",
    icon: "icon-home",
  },
  children: [
    {
      path: "dashboard",
      name: "dashboard",
      component: () => import("@/views/home/dashboard.vue"),
      meta: {
        title: "仪表盘",
      },
    },
  ],
}
export default routes
