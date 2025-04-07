<!-- blog首页 -->
<script setup></script>

<template>
  <div>
    <h1 class="blog-h1">BLOG</h1>
    <h2 class="blog-h2">
      Hi ~ 欢迎来到<code class="blog-code">DailyBits</code>
    </h2>
    <p class="blog-p">
      如果觉得还不错，请帮忙给这个
      <a
        class="blog-link"
        href="https://github.com/yingshi-7/yingshi-7.github.io"
        target="_blank"
        >版本库</a
      >
      点个⭐Star 吧 😁
    </p>
    <p class="blog-p">
      这是一个前端小白的学习历程，如果<strong>只学习而不记录</strong>点什么那基本就等于白学了。这个版本库的名字
      <code class="blog-code">DailyBits</code>
      就是将我每次接触、学习到的内容都通过这种形式记录下来，版本库的gh-pages分支就是我的博客站点了。
    </p>
    <p class="blog-p">博客内容主要包括以下几个部分:</p>
    <ul class="blog-ul">
      <li class="blog-li"><strong>学习总结</strong> 记录学习技术过程</li>
      <li class="blog-li">
        <strong>实际问题</strong> 记录生活中实际出现的问题，并解答
      </li>
      <li class="blog-li"><strong>每日一题</strong> 学习笔记</li>
    </ul>
    <p class="blog-p">
      在博客的内容当中，除了每日一题的学习笔记之外还有一些做项目时的记录以及遇到的坑等，对于技术相关的文章，基本都是参考众多文章整理归纳而写的，文章包括了
      <code class="blog-code">HTML</code>基础、
      <code class="blog-code">CSS</code>基础、
      <code class="blog-code">JavaScript</code>基础与拓展、
      <code class="blog-code">Browser</code>浏览器相关、
      <code class="blog-code">Vue</code>使用与分析、
      <code class="blog-code">React</code>使用与分析、
      <code class="blog-code">Java</code>相关、
      <code class="blog-code">LeetCode</code>题解、
      <code class="blog-code">MyLift</code>生活相关等类别。
      内容都是比较基础的，毕竟我也还是个初学者，此外基础上每个示例都是本着以能够即时运行为目标，无论是在浏览器还是console中。
    </p>
    <br />
    <h2 class="blog-h2">Hello, World:</h2>
  </div>
</template>

<style scoped>
* {
  color: #3f4a54;
}
.blog-p {
  line-height: 1.75rem;
  margin: 0.5rem 0;
}
.blog-h1 {
  font-size: 1.875rem;
  margin: 3.5rem 0 2rem;
}
.blog-h2 {
  font-size: 1.275rem;
  margin: 1.75rem 0 1rem;
}
.blog-link {
  color: #000000;
  text-decoration: none;
  border-bottom: 1px dashed #00c6fb; /* 底部虚线 */
}
.blog-code {
  color: #00c6fb;
  background-color: #d4f0fc;
  padding: 2px 10px;
  border-radius: 10px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
}
.blog-ul {
  list-style-type: disc;
  margin: 0.5rem 0 0.5rem 2rem;
}
.blog-li {
  line-height: 1.75rem;
}
</style>
