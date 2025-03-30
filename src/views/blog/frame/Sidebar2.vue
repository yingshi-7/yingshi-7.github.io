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
// 记录当前激活的子菜单项
const activeSubItem = ref(null);
const toggleSubMenu = (index) => {
  navItems.value.forEach((item, i) => {
    // 如果当前项的索引等于传入的索引，则切换其展开状态，否则收起其他项
    item.isExpanded = i === index ? !item.isExpanded : false;
  });
  activeSubItem.value = null; // 关闭菜单时重置激活项
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
          :key="index"
        >
          <div class="nav-con" @click="toggleSubMenu(index)">
            <span class="nav-title">{{ item.title }}</span>
            <span class="nav-count">{{ item.subItems.length }}</span>
          </div>
          <!-- <transition name="slide-fade"> -->
          <ul class="sub-list">
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
          <!-- </transition> -->
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
/* 滚动条滑块样式 */
.sidebar::-webkit-scrollbar-thumb {
  background: #dddddd;
}

.nav-search {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo {
    font-family: "PatuaOne", sans-serif;
    text-align: center;
    padding: 1.5rem 0 0.6rem;
    text-decoration: none; /* 去掉下划线 */
    color: #333;

    .logo-text {
      font-weight: 400;
      letter-spacing: 2px;
      /* word-spacing: 2px; 设置单词间距 */
      font-size: large;
    }
    span {
      font-size: small;
      letter-spacing: 2px;
    }
  }
  .logo:hover {
    background-image: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%);
    /* 下面两行是用于将背景图像裁剪成文本形状 */
    -webkit-background-clip: text; /* (Chrome和Safari等)背景裁剪属性扩展 */
    background-clip: text;
    /* 将文本颜色设置为透明 */
    -webkit-text-fill-color: transparent;
    color: transparent;
  }

  .search {
    width: 95%;
    padding-bottom: 10px;
    border-bottom: 1px solid #ededed;
    display: flex;
    justify-content: center;

    input {
      width: 17rem;
      height: 2rem;
      border-radius: 5px;
      border: none;
      transition: box-shadow 0.3s ease; /* 添加过度效果 */
    }

    input:focus {
      border: 1px solid rgb(70, 174, 247);
      outline: none; /* 默认无聚焦时的轮廓 */
      box-shadow: 0 0 10px rgba(70, 174, 247, 0.5);
      padding-left: 8px;
    }
  }
}
.nav-menu {
  width: 95%;
  margin: 0 auto;
  .nav-list {
    display: flex;
    flex-direction: column;

    .nav-item {
      .nav-con {
        display: flex;
        justify-content: space-between;
        padding: 0.6rem 0.6rem 0.5rem;
        margin-top: 0.7rem;
        border-bottom: 1px solid #ededed;
        .nav-title {
          font-weight: bold;
          font-size: small;
        }
        .nav-count {
          font-size: 12px;
        }
      }
      .nav-con:hover {
        background-color: #f5f5f5;
      }

      .sub-list {
        max-height: 0;
        opacity: 0;
        overflow: hidden;
        transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1),
          opacity 0.3s ease;
        margin: 0;
        padding: 0;
        list-style: none;
        transform: translateY(-10px);
      }

      &.expanded .sub-list {
        opacity: 1;
        max-height: 500px; /* 足够容纳所有子项的高度 */
        transform: translateY(0);
      }
      .sub-item {
        padding: 0.5rem;
        cursor: pointer;

        .sub-title {
          font-size: 12px;
          padding-bottom: 0.2rem;
        }
      }
      .sub-item:hover .sub-title {
        border-bottom: 1px solid #333;
      }

      /* 二级导航栏激活状态 */
      .sub-item.active {
        background-color: #e6f2ff;
        position: relative;
      }
      .sub-item.active::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 3px;
        background-color: #1890ff;
      }
      .sub-item.active .sub-title {
        color: #1890ff;
        border-bottom: 1px solid #1890ff;
      }
    }
    .nav-item:first-child {
      padding-top: 0.5rem;
    }
  }
}
</style>
