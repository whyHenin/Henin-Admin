/*
 * @Author: Chen Xin
 * @Date: 2022-04-16 22:45:07
 * @LastEditTime: 2022-04-16 22:54:14
 * @LastEditors: Chen Xin
 * @Description:
 * @FilePath: \Henin-Admin\src\api\login.ts
 */
import http from "@/utils/http"
// 登录接口
export const login = (data: any) => http.post("/login", data)
