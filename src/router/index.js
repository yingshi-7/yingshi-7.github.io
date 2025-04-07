import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/home/HomePage.vue";
import Layout from "../views/blog/Layout.vue";

// 定义路由关系
const routes = [
  {
    path: "/",
    component: HomePage,
    name: "home",
  },
  {
    path: "/blog",
    component: Layout,
    name: "blog",
    children: [
      {
        path: '',
        component: () => import("@/views/blog/contents/index.vue")
      },
      {
        path: "html",
        children: [
          {
            path: "1",
            component: () => import("@/views/blog/contents/html/DOCTYPE.vue"),
            name: "html-1",
          },
          {
            path: "2",
            component: () => import("@/views/blog/contents/html/test.vue"),
            name: "html-2",
          },
        ],
      },
    ],
  },
];

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 导出路由实例
export default router;
