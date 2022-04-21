/*
 * @Author: Chen Xin
 * @Date: 2022-04-11 21:33:57
 * @LastEditTime: 2022-04-21 09:27:10
 * @LastEditors: Chen Xin
 * @Description:
 * @FilePath: \Henin-Admin\src\main.ts
 */
import { createApp } from "vue"
import router from "./router"
import store from "./store"
// 加载全局样式
import "@/styles/index.less"
import ArcoVue from "@arco-design/web-vue"
import ArcoVueIcon from "@arco-design/web-vue/es/icon"
import "@arco-design/web-vue/dist/arco.css"
import App from "./App.vue"

const app = createApp(App)
app.use(router).use(store).use(ArcoVue)
app.use(ArcoVueIcon)
app.mount("#app")
