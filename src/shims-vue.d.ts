/*
 * @Author: Chen Xin
 * @Date: 2022-04-14 21:02:15
 * @LastEditTime: 2022-04-15 23:39:28
 * @LastEditors: Chen Xin
 * @Description:
 * @FilePath: \Henin-Admin\src\shims-vue.d.ts
 */
declare module "*.vue" {
  import { DefineComponent } from "vue"
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module "vuedraggable/src/vuedraggable"
