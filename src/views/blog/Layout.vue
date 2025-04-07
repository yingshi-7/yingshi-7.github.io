<template>
  <div class="layout">
    <Sidebar class="sidebar" />
    <div class="content-wrapper">
      <Content class="content" />
      <Footer class="footer" />
    </div>
  </div>
</template>

<script setup>
import Sidebar from './frame/Sidebar.vue'
import Content from './frame/Content.vue'
import Footer from './frame/Footer.vue'
</script>

<style>
.layout {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 20vw;
  min-width: 15rem;
}
.content-wrapper{
  flex:1
}
</style>
