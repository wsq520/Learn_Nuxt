<template>
  <div>
    Page:index
  </div>
</template>

<script setup>
// 路由中间件
definePageMeta({
  middleware: [
    // 该函数只有两个参数
    function (to, from) {
      // console.log(to)
      // console.log(from)
      console.log('第一个中间件index')

      // 如果返回的是空字符串、null 或者没有返回值时 那么会执行下一个中间件
      // abortNavigation('终止导航')
    },
    function (to, from) {
      // console.log(to)
      // console.log(from)
      console.log('第二个中间件index')
    },
    // 这个是命名中间件
    "home"
  ]
})
</script>

<style scoped>

</style>