import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/home/HomePage.vue'
import Layout from '../views/blog/Layout.vue'

// 定义路由关系
const routes = [
  {
    path: '/',
    component: HomePage,
    name: 'home',
  },
  {
    path: '/blog',
    component: Layout,
    name: 'blog',
    children: [
      {
        path: 'html/one',
        component: () => import('../views/blog/contents/html/one.vue'),
        name: 'html-one'
      }
    ]
  }
]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes
})

// 导出路由实例
export default router
