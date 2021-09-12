import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/home.vue'
import Vuex from '@/views/vuex.vue'
import Demo from '@/views/demo.vue'
import NotFound from '@/views/notFound.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: Vuex
  },
  {
    path: '/axios',
    name: 'Axios',
    component: () => import('@/views/axios.vue') // 懒加载组件
  },
  {
    path: '/demo',
    name: 'Demo',
    component: Demo
  },
  {
    path: '/detail/:id/:type',
    name: 'Detail',
    component: () => import('@/views/detail/id/index.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: 'notFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'is-active'
})

router.afterEach((to, from) => {
  window.scrollTo(0, 0)
})

export default router
