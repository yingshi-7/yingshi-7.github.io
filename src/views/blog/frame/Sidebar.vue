<script setup>
import { ref } from "vue";
const navItems = ref([
  {
    title: "HTML",
    isExpanded: false,
    subItems: [
      { title: "HTML1", name: "html-1" },
      { title: "HTML2", name: "html-2" },
    ],
  },
  {
    title: "css",
    isExpanded: false,
    subItems: [{ title: "开发者模式1" }, { title: "css2" }, { title: "css3" }],
  },
  {
    title: "javascript",
    isExpanded: false,
    subItems: [
      { title: "javascript1" },
      { title: "javascript2" },
      { title: "javascript3" },
      { title: "javascript4" },
    ],
  },
]);

const activeSubItem = ref(null);

function startTransition(el) {
  el.style.height = "auto";
  const height = `${el.scrollHeight}px`;
  el.style.height = "0px";
  void el.offsetHeight; // 触发回流
  el.style.height = height;
}

function endTransition(el) {
  el.style.height = "";
}

const toggleSubMenu = (index) => {
  navItems.value.forEach((item, i) => {
    item.isExpanded = i === index ? !item.isExpanded : false;
  });
  activeSubItem.value = null;
};
</script>

<template>
  <aside class="sidebar">
    <div class="nav-search">
      <a href="/" class="logo">
        <h1 class="logo-text">Yingshi's</h1>
        <span>Blog</span>
      </a>
      <div class="search">
        <input type="text" placeholder="Try Searching..." />
      </div>
    </div>
    <nav class="nav-menu">
      <ul class="nav-list">
        <li
          class="nav-item"
          :class="{ expanded: item.isExpanded }"
          v-for="(item, index) in navItems"
          :key="'item-' + index"
        >
          <div class="nav-con" @click="toggleSubMenu(index)">
            <span class="nav-title">{{ item.title }}</span>
            <span class="nav-count">{{ item.subItems.length }}</span>
          </div>
          <transition
            name="expand"
            @enter="startTransition"
            @after-enter="endTransition"
            @before-leave="startTransition"
            @after-leave="endTransition"
          >
            <ul class="sub-list" v-if="item.isExpanded">
              <li
                class="sub-item"
                v-for="(subItem, subIndex) in item.subItems"
                :key="subIndex"
                @click="
                  activeSubItem = { parentIndex: index, subIndex };
                  $router.push({ name: subItem.name });
                "
                :class="{
                  active:
                    activeSubItem?.parentIndex === index &&
                    activeSubItem?.subIndex === subIndex,
                }"
              >
                <span class="sub-title">{{ subItem.title }}</span>
              </li>
            </ul>
          </transition>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 20%;
  max-height: 100vh;
  overflow-y: auto;
}

/* 滚动条样式 */
.sidebar::-webkit-scrollbar {
  width: 4px;
}
.sidebar::-webkit-scrollbar-thumb {
  background: #dddddd;
  border-radius: 4px;
}

.nav-search {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.nav-search .logo {
  font-family: "PatuaOne", sans-serif;
  text-align: center;
  padding: 1.5rem 0 0.6rem;
  text-decoration: none;
  color: #333;
  transition: all 0.3s ease;
}

.nav-search .logo .logo-text {
  font-weight: 400;
  letter-spacing: 2px;
  font-size: large;
}

.nav-search .logo span {
  font-size: small;
  letter-spacing: 2px;
}

.nav-search .logo:hover {
  background-image: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  transform: scale(1.02);
}

.nav-search .search {
  width: 95%;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #ededed;
  display: flex;
  justify-content: center;
}

.nav-search .search input {
  width: 17rem;
  height: 2rem;
  border-radius: 5px;
  border: 1px solid transparent;
  background-color: #f5f5f5;
  padding-left: 8px;
  transition: all 0.3s ease;
}

.nav-search .search input:focus {
  border: 1px solid rgb(70, 174, 247);
  outline: none;
  box-shadow: 0 0 8px rgba(70, 174, 247, 0.4);
  background-color: white;
}

.nav-menu {
  width: 95%;
  margin: 0 auto;
}

.nav-menu .nav-list {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  list-style-type: none;
}

.nav-menu .nav-item {
  margin-bottom: 6px;
  border-radius: 6px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.nav-menu .nav-item .nav-con {
  display: flex;
  justify-content: space-between;
  padding: 0.7rem 0.8rem;
  border-radius: 6px;
  transition: all 0.25s ease;
  cursor: pointer;
}

.nav-menu .nav-item .nav-con .nav-title {
  font-weight: bold;
  font-size: small;
}

.nav-menu .nav-item .nav-con .nav-count {
  font-size: 12px;
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 1px 6px;
  transition: all 0.3s ease;
}

.nav-menu .nav-item .nav-con:hover {
  background-color: #f5f5f5;
}

.nav-menu .nav-item.expanded .nav-con {
  background-color: #f0f0f0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.nav-menu .nav-item.expanded .nav-con .nav-count {
  background-color: #e0e0e0;
}

.nav-menu .nav-item .sub-list {
  margin: 0;
  padding: 4px 0;
  list-style: none;
  background-color: #f7f7f7;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top: 1px solid #eaeaea;
  overflow: hidden;
}

.nav-menu .nav-item .sub-item {
  padding: 0.5rem 0.8rem;
  margin: 2px 4px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.nav-menu .nav-item .sub-item .sub-title {
  font-size: 12px;
  padding-bottom: 0.2rem;
  display: inline-block;
  transition: all 0.25s ease;
  border-bottom: 1px solid transparent;
}

.nav-menu .nav-item .sub-item:hover {
  background-color: #eef5ff;
  transform: translateX(2px);
}

.nav-menu .nav-item .sub-item:hover .sub-title {
  border-bottom: 1px solid #333;
}

/* 二级导航栏激活状态 */
.nav-menu .nav-item .sub-item.active {
  background-color: #e6f2ff;
  position: relative;
}

.nav-menu .nav-item .sub-item.active::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background-color: #1890ff;
  border-radius: 0 2px 2px 0;
}

.nav-menu .nav-item .sub-item.active .sub-title {
  color: #1890ff;
  border-bottom: 1px solid #1890ff;
}

/* 子菜单展开/收起动画 */
.expand-enter-active,
.expand-leave-active {
  transition: height 0.3s ease-out, opacity 0.25s ease;
  overflow: hidden;
  will-change: height, opacity; /* 预声明变化 */
}

.expand-enter-from,
.expand-leave-to {
  height: 0 !important;
  opacity: 0;
}
</style>
