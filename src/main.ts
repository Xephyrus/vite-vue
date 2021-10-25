/*
 * @Author: your name
 * @Date: 2021-08-09 22:58:45
 * @LastEditTime: 2021-10-25 11:56:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \prismd:\code\vite-vue\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import './style/index.scss'
import router from './router/index' // 挂载路由
import store from './store/index' // 挂载VueX
import ElementPlus from 'element-plus' // 挂载支持vue3的element UI
import 'element-plus/lib/theme-chalk/index.css'
import exAvatar from './components/base/ex-avatar.vue'

createApp(App).use(router).use(store).use(ElementPlus).component('exAvatar', exAvatar).mount('#app')
