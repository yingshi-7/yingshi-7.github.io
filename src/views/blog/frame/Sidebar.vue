<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <aside class="sidebar">
    <div class="logo">
      <h1 class="logo-text">Yingshi's Blog</h1>
    </div>
    <nav>
      <ul class="nav-list">
        <li class="nav-item">
          <RouterLink to="/blog/html/one" class="nav-link">
            <span class="icon">🏠</span>
            <span class="text">HTML</span>
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/css" class="nav-link">
            <span class="icon">📖</span>
            <span class="text">CSS</span>
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/js" class="nav-link">
            <span class="icon">📧</span>
            <span class="text">JS</span>
          </RouterLink>
        </li>
      </ul>
    </nav>
  </aside>

  <!-- 内容区域 -->
  <main class="content">
    <router-view></router-view> <!-- 子路由的内容会渲染在这里 -->
  </main>
</template>

<style scoped>
.logo-text {
  font-family: 'PatuaOne', sans-serif;
}

.sidebar {
  width: 20%;
}
</style>
