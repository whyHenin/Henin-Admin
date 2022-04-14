/*
 * @Author: Chen Xin
 * @Date: 2022-04-14 21:02:15
 * @LastEditTime: 2022-04-14 21:02:22
 * @LastEditors: Chen Xin
 * @Description:
 * @FilePath: \Henin-Admin\shims-vue.d.ts
 */
declare module "*.vue" {
  import { DefineComponent } from "vue"
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module "*.scss" {
  const scss: Record<string, string>
  export default scss
}

declare module "vuedraggable/src/vuedraggable"
