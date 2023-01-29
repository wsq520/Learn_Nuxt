import { createApp } from 'vue'
import createRouter from '../router'
import { createWebHistory } from 'vue-router'

import App from '../App.vue'
import { createPinia } from 'pinia'

const app = createApp(App)

const router = createRouter(createWebHistory())
app.use(router)

// 安装Pinia
const pinia = createPinia()
app.use(pinia)

// 等待路由加载完成再挂载app
router.isReady().then(() => {
  app.mount('#app')
})

