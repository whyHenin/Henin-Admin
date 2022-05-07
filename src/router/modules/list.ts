/*
 * @Author: Chen Xin
 * @Date: 2022-04-19 10:43:24
 * @LastEditTime: 2022-05-07 09:42:30
 * @LastEditors: Chen Xin
 * @Description:
 * @FilePath: \Henin-Admin\src\router\modules\list.ts
 */
import { RouterView, RouteRecordRaw } from "vue-router"
const routes: RouteRecordRaw = {
  path: "/list",
  name: "list",
  redirect: "/list/table",
  component: RouterView,
  meta: {
    title: "列表页",
    icon: "icon-list",
  },
  children: [
    {
      path: "/list/table",
      name: "table",
      component: () => import("@/views/list/table/index.vue"),
      meta: {
        title: "查询表格",
      },
    },
    {
      path: "/list/card",
      name: "card",
      component: () => import("@/views/list/card/index.vue"),
      meta: {
        title: "卡片列表",
      },
    },
  ],
}
export default routes
