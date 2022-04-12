/*
 * @Author: Chen Xin
 * @Date: 2022-04-11 21:33:57
 * @LastEditTime: 2022-04-12 09:08:34
 * @LastEditors: Chen Xin
 * @Description:
 * @FilePath: \Henin-Admin\src\main.ts
 */
import { createApp } from "vue"
import router from "./router/index"
import App from "./App.vue"

const app = createApp(App)

app.use(router)

app.mount("#app")
