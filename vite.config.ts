/*
 * @Author: Chen Xin
 * @Date: 2022-03-16 09:18:55
 * @LastEditTime: 2022-04-11 16:11:12
 * @LastEditors: Chen Xin
 * @Description: config of vite
 * @FilePath: \xen-Admin\vite.config.ts
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass',
        }),
      ],
    }),
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass',
        }),
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src/'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 自定义的主题色
        additionalData: `@use "@/theme/element/index.scss" as *;`,
      },
    },
  },
  server: {
    port: 1027,
    open: false,
    // proxy: {
    //   '/api': {
    //     target: 'http:xxxx',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, '')
    //   }
    // }
  },
});
