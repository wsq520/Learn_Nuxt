import { createApp } from 'vue'
import createRouter from '../router'
import { createWebHistory } from 'vue-router'

import App from '../App.vue'

const app = createApp(App)

const router = createRouter(createWebHistory())
app.use(router)

// 等待路由加载完成再挂载app
router.isReady.then(() => {
  app.mount('#app')
})

