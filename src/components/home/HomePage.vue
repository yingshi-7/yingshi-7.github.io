<!-- 首页 -->
<script setup>


</script>

<template>
  <div class="home-page">
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
            <div class="content-item">WELCOME</div>
            <div class="content-item" style="margin: 0 3rem;">TO</div>
            <div class="content-item">HERE,</div>
            <div class="content-item">MY</div>
            <div class="content-item">NAME'S</div>
            <div class="content-item">YINGSHI</div>
          </div>
          <div class="content-desc">座右铭</div>
        </div>
        <img class="pull-down" src="../../assets/pull-down.png" alt="下拉">
      </div>
    </div>
    <div class="second-page" id="second-page">
      <h2>About me.</h2>
      <div class="second-page-content">
        <div class="content-container">
          <div class="content-item">
            <div class="item-box">
              <img src="../../assets/favicon-32x32.png" alt="">
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
@font-face {
  // logo字体
  font-family: 'ZhiMangXing';
  src: url('../../assets/fonts/ZhiMangXing-Regular.ttf')format('truetype');
}

@font-face {
  // 内容字体
  font-family: 'PTSerif';
  src: url('../../assets/fonts/PTSerif-Regular.ttf')format('truetype');
}

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
  padding: 2rem 3rem 0;

  h2 {
    color: #fff;
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
  width: 80%;
  margin: 5rem auto;
  overflow: auto;

  .content-container {

    position: fixed; //固定内容容器
    width: 80%; // 保持宽度
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 1; // 保证内容在最上层

    .content-title {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .content-item {
        position: relative;
        font-weight: 900;
        font-size: 7rem;
        font-family: 'PTSerif', sans-serif;
      }

    }

    div {
      color: #fff;
    }

    .content-desc {
      font-family: 'ZhiMangXing', sans-serif;
      font-size: 2.5rem;
      height: 5rem;
      line-height: 5rem;
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
    margin: 1.5rem auto 0;
    text-align: center;
    font-size: 2.5rem;
    font-family: 'PTSerif', sans-serif;
  }

  .second-page-content {
    margin: 1rem 3rem 1rem;
    // background: #cebdbd;
    height: 85vh;

    .content-container {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      .content-item {
        background-color: #fff;
        width: 23%;
        height: 150px;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        // margin: 0 30px 30px 0;

        .item-box {
          height: 50%;
          display: flex;
          align-items: center;

          span{
            margin-left: 1.5rem;
            font-weight: 600;
            font-size: 2ch;
          }
        }

        p{
          height: 60%;
          color: rgba(131, 115, 115);
          margin: 0;
          font-size: 1.5ch;
          text-align: center;
          padding-top: 20px;
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
// 改变滚动条样式
</style>