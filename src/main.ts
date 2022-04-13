/*
 * @Author: Chen Xin
 * @Date: 2022-04-11 21:33:57
 * @LastEditTime: 2022-04-13 22:45:14
 * @LastEditors: Chen Xin
 * @Description:
 * @FilePath: \Henin-Admin\src\main.ts
 */
import { createApp } from "vue"
import router from "./router/index"
import store from "./store"
import App from "./App.vue"

const app = createApp(App)

const a = 123

app.use(router).use(store)

app.mount("#app")
