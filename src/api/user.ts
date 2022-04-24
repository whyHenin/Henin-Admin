/*
 * @Author: Chen Xin
 * @Date: 2022-04-24 20:12:14
 * @LastEditTime: 2022-04-24 21:36:11
 * @LastEditors: Chen Xin
 * @Description:
 * @FilePath: \Henin-Admin\src\api\user.ts
 */
import http from "@/utils/http"
// 用户列表接口

export const userList = (params: object) => http.get("/userList", params)
