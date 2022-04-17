/*
 * @Author: Chen Xin
 * @Date: 2022-04-11 21:33:57
 * @LastEditTime: 2022-04-17 19:33:59
 * @LastEditors: Chen Xin
 * @Description:
 * @FilePath: \Henin-Admin\src\main.ts
 */
import { createApp } from "vue"
import router from "./router"
import store from "./store"
// 加载全局样式
import "@/styles/index.scss"
import App from "./App.vue"
import * as ElIconModules from "@element-plus/icons-vue"

const app = createApp(App)
// 统一注册Icon图标
for (const iconName in ElIconModules) {
  if (Reflect.has(ElIconModules, iconName)) {
    const item = ElIconModules[iconName]
    app.component(iconName, item)
  }
}

app.use(router).use(store)

app.mount("#app")
