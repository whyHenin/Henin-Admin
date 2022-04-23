/*
 * @Author: Chen Xin
 * @Date: 2022-04-23 18:10:28
 * @LastEditTime: 2022-04-23 18:10:29
 * @LastEditors: Chen Xin
 * @Description:
 * @FilePath: \Henin-Admin\src\utils\index.ts
 */
import NProgress from "nprogress"
import "nprogress/nprogress.css"

NProgress.configure({
  // 动画方式
  easing: "ease",
  // 递增进度条的速度
  speed: 500,
  // 是否显示加载ico
  showSpinner: false,
  // 自动递增间隔
  trickleSpeed: 200,
  // 初始化时的最小百分比
  minimum: 0.3,
})

export default NProgress
