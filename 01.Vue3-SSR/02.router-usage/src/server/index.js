import { renderToString } from '@vue/server-renderer'
import createApp from '../app'
import createRouter from '../router'
// 内存路由 给node使用的 因为在node环境下没有关于hash\history这些API
import { createMemoryHistory } from 'vue-router'

const express = require('express')

const server = express()

// 部署静态资源
// 浏览器遇到<script src="/client/client_bundle.js"></script> 就去build下找资源
server.use(express.static('build'))

server.get('/*', async (req, res) => {
  let app = createApp()

  // 安装路由
  const router = createRouter(createMemoryHistory())
  app.use(router)
  // 等待路由跳转完毕
  await router.push(req.url || '/')
  // 等待异步组件、路由加载完毕
  await router.isReady()

  let appStringHTML = await renderToString(app)
  res.send(
    `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
      </head>
      <body>
        <div id="app">
          <h1>Vue3-SSR-Demo</h1>
          ${appStringHTML}
        </div>
        <script src="/client/client_bundle.js"></script>
      </body>
      </html>
    `
  )
})

server.listen(3000, () => {
  console.log('start node server on 3000 port')
})