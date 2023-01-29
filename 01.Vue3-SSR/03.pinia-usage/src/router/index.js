import { createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/home.vue')
  },
  {
    path: '/about',
    component: () => import('../views/about.vue')
  }
]

// 也要通过函数来创建路由实例
// 对应 history 客户端和服务端不同 那么可以通过参数来决定
export default function(history) {
  return createRouter({
    history,
    routes
  })
}
