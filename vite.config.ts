/*
 * @Author: Chen Xin
 * @Date: 2022-03-16 09:18:55
 * @LastEditTime: 2022-04-22 10:07:37
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
import legacy from "@vitejs/plugin-legacy"
import { ArcoResolver } from "unplugin-vue-components/resolvers"
import Icons from "unplugin-icons/vite"
import IconsResolver from "unplugin-icons/resolver"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      // 这里除了引入 vue 以外还可以引入pinia、vue-router、vueuse等，
      // 甚至你还可以使用自定义的配置规则，见 https://github.com/antfu/unplugin-auto-import#configuration
      imports: ["vue", "vue-router", "pinia"],
      // 第三方组件库的解析器
      resolvers: [ArcoResolver()],
      dts: "./src/auto-imports.d.ts",
      eslintrc: {
        enabled: true, // Default `false`
        filepath: "./.eslintrc-auto-import.json", // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
    }),
    Components({
      // dirs 指定组件所在位置，默认为 src/components
      // 可以让我们使用自己定义组件的时候免去 import 的麻烦
      dirs: ["src/components/"],
      // 配置需要将哪些后缀类型的文件进行自动按需引入
      extensions: ["vue", "md"],
      // 第三方组件库的解析器
      resolvers: [IconsResolver()],
      dts: "./src/components.d.ts",
    }),
    Icons({ compiler: "vue3", autoInstall: true }),
    // 为打包后的文件提供传统浏览器兼容性支持
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
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
    chunkSizeWarningLimit: 2000,
  },
})
