import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";


/** @type {import('eslint').Linter.Config[]} */
export default [
  //指定 ESLint 应该检查的文件类型
  {files: ["**/*.{js,mjs,cjs,vue}"]},
  //设置全局变量
  {languageOptions: { globals: globals.browser }},
  //应用 @eslint/js 插件的推荐配置。
  pluginJs.configs.recommended,
  //应用 eslint-plugin-vue 插件的 flat/essential 配置
  ...pluginVue.configs["flat/essential"],
  //自定义配置
  {
    rules:{
      // 禁止使用 console(警告)
      "no-console":"warn",
      // 禁止vue组件中未使用的变量
      "vue/no-unused-vars":"error"
    }
  }
];