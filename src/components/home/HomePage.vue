<!-- 首页 -->
<script setup>


</script>

<template>
  <div class="home-page">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <div class="first-page">
      <div class="home-page-header">
        <div class="home-page-logo">
          <img src="../../assets/apple-touch-icon.png" alt="博客logo">
          <h1>媵式在线</h1>
        </div>
        <h2>登录</h2>
      </div>
      <div class="home-page-content">
        <div class="content-container">
          <div class="content-title">
            <div class="title-top">
              <div class="content-item">WELCOME</div>
              <div class="content-item">TO</div>
              <div class="content-item">HERE,</div>
            </div>
            <div class="title-bottom">
              <div class="content-item">MY</div>
              <div class="content-item">NAME'S</div>
              <div class="content-item">YINGSHI</div>
            </div>
          </div>
          <div class="content-desc">清醒时做事，迷茫时读书</div>
        </div>
        <img class="pull-down" src="@/assets/pull-down.png" alt="下拉">
      </div>
    </div>
    <div class="second-page" id="second-page">
      <h2>About me.</h2>
      <div class="second-page-content">
        <div class="content-container">
          <div class="content-item" v-for="item in 2">
            <div class="item-box">
              <img src="@/assets/favicon-32x32.png" alt="">
              <span @click="$router.push('/blog')" style="cursor: pointer;">记录在线</span>
            </div>
            <p>一个关于自己的blog，记录生活和学习的点滴。</p>
          </div>
        </div>
      </div>
      <span class="end-text">© 2024 Yingshi. All rights reserved.</span>
    </div>
  </div>
</template>

<style lang="scss">
.home-page {
  height: 100vh;
  /* 让页面高度填满视口 */
  background-image: url('../../assets/background.png');
  background-size: cover;
  position: relative;
}

.home-page-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  
  h2 {
    color: #fff;
    font-size: clamp(1.2rem, 4vw, 1.5rem);
    margin: 0;
  }

  .home-page-logo {
    display: flex;
    align-items: center;

    img {
      position: relative;
      width: 3rem;
    }

    h1 {
      margin-left: 1.5rem;
      font-family: 'ZhiMangXing', sans-serif;
      font-weight: 400;
      font-size: 2.5rem;
      color: #fff;
    }
  }
}

.home-page-content {
  width: 95%;
  display: flex; /* 使用flex布局 */
  flex-direction: column; /* 垂直排列 */
  align-items: center; /* 水平居中 */
  justify-content: center; /* 垂直居中 */
  padding: 1rem;
  overflow: hidden;
  min-height: 80vh; /* 设置最小高度 */

  .content-container {
    position: fixed; //固定内容容器
    width: 85%; // 保持宽度
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 1; // 保证内容在最上层

    .content-title {
      width: 100%;
      margin: 0 auto;

      .title-top, .title-bottom {
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        margin-bottom: 1rem;
      }

      .content-item {
        position: relative;
        font-weight: 900;
        font-size: clamp(2rem, 8vw, 8rem);
        font-family: 'PatuaOne', sans-serif;
        text-align: center;
        white-space: nowrap;
        letter-spacing: 0.2rem;
      }
    }

    div {
      color: #fff;
    }

    .content-desc {
      font-family: 'ZhiMangXing', sans-serif;
      font-size: clamp(1.5rem, 3vw, 2.5rem);
      height: auto; // 移除固定高度
      padding: 1rem 0;
    }
  }

  .pull-down {
    color: #fff;
    position: absolute; // absolute，这样会随页面滚动
    right: 50%;
    bottom: 10%;
    transform: translate(50%, 0);
  }
}

.second-page {
  position: absolute;
  top: 100vh;
  width: 100%;
  min-height: 100vh;
  background: #000000; // 或其他背景色
  z-index: 2; // 保证内容在最上层

  h2 {
    display: inline-block;
    width: 100%;
    color: #fff;
    margin: 1.5rem auto -2rem;
    text-align: center;
    font-size: 2.5rem;
    font-family: 'PTSerif', sans-serif;
  }

.second-page-content {
  margin: 1rem 0;
  padding: 1rem;
  min-height: 85vh;
  display: flex;
  align-items: flex-start;

  .content-container {
    // display: grid;
    // grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;

      .content-item {
        background-color: #fff;
        border-radius: 15px;
        width: calc(25% - 3vw); // 响应式宽度
        min-width: 280px; // 设置最小宽度
        height: auto; // 自适应高度
        min-height: 150px;
        padding: 2rem;
        margin-bottom: 1vw;

        .item-box {
          height: 50%;
          display: flex;
          align-items: center;

          span{
            margin-left: 1rem;
            font-weight: 600;
            font-size: clamp(14px, 1.5vw, 20px);
          }
        }

        p{
          height: 60%;
          color: rgba(131, 115, 115);
          // font-size: 1.5ch;
          text-align: center;
          padding-top: 20px;
          font-size: clamp(12px, 1.5vw, 16px);
        }
      }
    }
  }

  .end-text {
    color: #fff;
    display: inline-block;
    width: 100%;
    text-align: center;
    margin-bottom: 1rem;
  }
}

// 添加媒体查询
@media screen and (max-width: 1024px) {
  .home-page-header {
    padding: 1rem;
  }

  .home-page-content {
    margin: 5vh auto 0;
  }
}

@media screen and (max-width: 768px) {
  .home-page-header {
    padding: 1rem 1.5rem 0;

    .home-page-logo {
      img {
        width: 2rem;
      }

      h1 {
        font-size: 2rem;
        margin-left: 1rem;
      }
    }
  }

  .content-title {
    .content-item {
      font-size: clamp(1.8rem, 4vw, 2.5rem);
      letter-spacing: 0.05rem;
    }
  }

  .second-page-content {
    .content-container {
      .content-item {
        width: calc(50% - 2vw); // 在小屏幕上每行显示两个
      }
    }
  }
}

@media screen and (max-width: 480px) {
  .second-page-content {
    .content-container {
      display: flex;
      flex-direction: column;
      align-items: center; /* 水平居中 */
      
      .content-item {
        width: 90%; /* 适当缩小宽度 */
        margin: 1rem 0; /* 调整间距 */
      }
    }
  }

  .content-title {
    .content-item {
      font-size: clamp(1.5rem, 3.5vw, 2rem);
    }
  }
}
</style>