import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript.js'
import html from 'highlight.js/lib/languages/xml'
import css from 'highlight.js/lib/languages/css'
// 修改样式引入方式
import 'highlight.js/styles/atom-one-dark.css'

const app = createApp(App)
app.use(router)
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('html', html);
hljs.registerLanguage('css', css);

app.mount('#app')
