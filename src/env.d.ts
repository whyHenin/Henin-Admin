/*
 * @Author: Chen Xin
 * @Date: 2022-04-17 00:51:45
 * @LastEditTime: 2022-04-17 01:01:20
 * @LastEditors: Chen Xin
 * @Description:
 * @FilePath: \Henin-Admin\src\env.d.ts
 */
interface ImportMetaEnv {
  readonly VITE_API_BASEURL: string
  readonly VITE_APP_TITLE: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
