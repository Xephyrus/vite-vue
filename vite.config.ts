/*
 * @Author: your name
 * @Date: 2021-08-09 22:58:45
 * @LastEditTime: 2021-10-07 11:24:57
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \prismd:\code\vite-vue\vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvg } from './src/icons/index'
// 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node -> npm i @types/node -D
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), createSvg('./src/icons/svg/')],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // 设置 `@` 指向 `src` 目录
    }
  },
  base: './', // 设置打包路径
  server: {
    host: '0.0.0.0', // ip
    port: 80, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
    cors: true, // 允许跨域
    strictPort: true,
    // 设置代理，根据我们项目实际情况配置
    proxy: {
      '/api': {
        target: 'https://api.bilibili.com/',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
        headers: {
          referer: 'https://www.bilibili.com',
          origin: 'https://www.bilibili.com'
        }
      },
      '/local': {
        target: 'http://localhost:8000/',
        rewrite: (path) => path.replace(/^\/local/, '')
      }
    }
  }
})
