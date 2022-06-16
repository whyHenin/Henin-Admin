/*
 * @Author: Chen Xin
 * @Date: 2022-05-07 10:29:50
 * @LastEditTime: 2022-05-07 10:56:39
 * @LastEditors: Chen Xin
 * @Description:
 * @FilePath: \Henin-Admin\src\router\modules\user.ts
 */
import { RouterView, RouteRecordRaw } from "vue-router"
const routes: RouteRecordRaw = {
  path: "/user",
  name: "user",
  redirect: "/user/center",
  component: RouterView,
  meta: {
    title: "用户中心",
    icon: "icon-user",
  },
  children: [
    {
      path: "/user/center",
      name: "userCenter",
      component: () => import("@/views/user/center.vue"),
      meta: {
        title: "个人信息",
      },
    },
  ],
}
export default routes
