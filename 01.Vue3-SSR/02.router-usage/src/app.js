import { createSSRApp } from 'vue'

import App from './App.vue'

// 通过函数封装来返回app实例 可以保证每个请求都会返回一个新的app实例 从而避免跨请求状态的污染
export default function createApp() {
  return createSSRApp(App)
}