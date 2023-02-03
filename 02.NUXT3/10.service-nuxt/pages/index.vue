<template>
  <div class="index">
    index
  </div>
</template>

<script setup>
const BASE_URL = 'http://codercba.com:9060/juanpi/api'

// 1.$fetch发送网络请求
// 此情况下 客户端和服务端都会发送网络请求
// $fetch(BASE_URL + '/homeInfo', {
//   method: 'GET'
// }).then(res => {
//   console.log(res)
// })

// 2.使用内置API(在刷新页面时 可以减少客户端发起的一次请求)
// const { data } = await useAsyncData('homeInfo', () => {
//   这里可以使用内置的$fetch 也可以使用axios发送网络请求 
//   return $fetch(BASE_URL + '/homeInfo', {
//     method: 'GET'
//   })
// })

// 3.useAsyncData的简写 (这里只能使用内置的$fetch发送网络请求)
// const { data } = await useFetch(BASE_URL + '/homeInfo', {
//   method: 'GET'
// })

// 4.options
// const { data } = await useFetch('/goods', {
//   method: 'POST',
//   baseURL: BASE_URL,
//   body: {
//     count: 6
//   }
// })

// 5.请求拦截器
const { data } = await useFetch('/goods', {
  method: 'POST',
  baseURL: BASE_URL,
  body: {
    count: 1
  },
  onRequest({ request, options }) {
    console.log(options.method)
    console.log(options)
    // options.headers = {
    //   token: 'aaabbcc'
    // }
  },
  onRequestError({ request, options, error }) {
    console.log('onRequestError')
  },
  onResponse({ request, response, options }) {
    console.log('onResponse')
  },
  onResponseError({ request, response, options, error }) {
    console.log('onResponseError')
  }
})

console.log(data)
</script>

<style scoped>

</style>