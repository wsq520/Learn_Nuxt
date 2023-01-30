<template>
  <div>
    <h1>Hello</h1>
  </div>
</template>

<script setup>
// 1.判断代码执行环境
if(process.server) {
  console.log('运行在服务端')
}
if(process.client) {
  console.log('运行在客户端')
}

// 2.获取运行时配置信息(客户端和服务端)
const runtimeConfig = useRuntimeConfig()
if(process.server) {
  console.log(runtimeConfig.appKey)
  console.log(runtimeConfig.public)
}
if(process.client) {
  console.log(runtimeConfig.appKey) // 客户端访问不了该属性 返回undefined
  console.log(runtimeConfig.public.baseURL)
}

// 3.获取appConfig
const appConfig = useAppConfig()
console.log(appConfig)

onMounted(() => {
  document.title = appConfig.title
})
</script>
