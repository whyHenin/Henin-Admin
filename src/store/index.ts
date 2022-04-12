/*
 * @Author: Chen Xin
 * @Date: 2022-04-11 16:10:17
 * @LastEditTime: 2022-04-12 22:26:02
 * @LastEditors: Chen Xin
 * @Description:pinia状态库
 * @FilePath: \Henin-Admin\src\store\index.ts
 */
// src/store/index.ts

import { createPinia } from "pinia"
import piniaPluginPersist from "pinia-plugin-persist"

const store = createPinia()
store.use(piniaPluginPersist)

export default store
