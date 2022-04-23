/*
 * @Author: Chen Xin
 * @Date: 2022-04-12 20:50:10
 * @LastEditTime: 2022-04-23 23:00:39
 * @LastEditors: Chen Xin
 * @Description:axios请求封装
 * @FilePath: \Henin-Admin\src\utils\http.ts
 */
//http.ts
import { Message, Modal } from "@arco-design/web-vue"
import axios, { AxiosRequestConfig } from "axios"
import NProgress from "./nprogress"
import { USER_TOKEN } from "@/utils/constants"
import { storageLocal } from "@/utils/storage"

const router = useRouter()

// 设置请求头和请求路径
const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASEURL,
  timeout: 10000,
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
})
// 请求拦截
request.interceptors.request.use(
  (config): AxiosRequestConfig<any> => {
    const token = storageLocal.getItem(USER_TOKEN)
    if (token) {
      //@ts-ignore
      config.headers.token = token
    }
    return config
  },
  (error) => {
    return error
  },
)
// 响应拦截

request.interceptors.response.use(
  (res) => {
    const status = res.data.status

    //正确情况
    if (!status || status === 200) {
      return res
    }

    // 错误情况
    if (status === 401) {
      //清楚登录数据并跳转登录页面
      Message.error("登录失效，请重新登录")
      storageLocal.clear()
      router.push({
        path: "/login",
        query: { redirect: router.currentRoute.value.fullPath },
      })
      return Promise.reject(res)
    }

    // 其他错误情况
    Modal.error({
      title: "错误",
      content: res.data.msg || "网络错误,请稍后再试",
    })
    return Promise.reject(res.data)
  },
  (error) => {
    return Promise.reject(error)
  },
)

interface ResType<T> {
  code: number
  data?: T
  msg: string
  err?: string
}
interface Http {
  get<T>(url: string, params?: unknown): Promise<ResType<T>>
  post<T>(url: string, params?: unknown): Promise<ResType<T>>
  upload<T>(url: string, params: unknown): Promise<ResType<T>>
  download(url: string): void
}

const http: Http = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      request
        .get(url, { params })
        .then((res) => {
          NProgress.done()
          resolve(res.data)
        })
        .catch((err) => {
          NProgress.done()
          reject(err.data)
        })
    })
  },
  post(url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      request
        .post(url, JSON.stringify(params))
        .then((res) => {
          NProgress.done()
          resolve(res.data)
        })
        .catch((err) => {
          NProgress.done()
          reject(err.data)
        })
    })
  },
  upload(url, file) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      request
        .post(url, file, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          NProgress.done()
          resolve(res.data)
        })
        .catch((err) => {
          NProgress.done()
          reject(err.data)
        })
    })
  },
  download(url) {
    const iframe = document.createElement("iframe")
    iframe.style.display = "none"
    iframe.src = url
    iframe.onload = function () {
      document.body.removeChild(iframe)
    }
    document.body.appendChild(iframe)
  },
}
export default http
