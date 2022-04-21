/*
 * @Author: Chen Xin
 * @Date: 2022-03-16 09:18:55
 * @LastEditTime: 2022-04-21 09:27:28
 * @LastEditors: Chen Xin
 * @Description: config of vite
 * @FilePath: \Henin-Admin\vite.config.ts
 */
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import { resolve } from "path"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ArcoResolver } from "unplugin-vue-components/resolvers"
import Icons from "unplugin-icons/vite"
import IconsResolver from "unplugin-icons/resolver"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      resolvers: [ArcoResolver()],
    }),
    Components({
      resolvers: [IconsResolver()],
    }),
    Icons({ autoInstall: true }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 自定义的主题色
        // additionalData: `@use "@/styles/variables.scss" as *;`,
      },
    },
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
    open: false,
    https: false,
    // proxy: {
    //   '/api': {
    //     target: 'http:xxxx',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, '')
    //   }
    // }
  },
  build: {
    brotliSize: false,
    // 消除打包大小超过500kb警告
  },
})
