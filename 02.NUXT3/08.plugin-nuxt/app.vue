<template>
  <div>
    <h1>App</h1>
  </div>
</template>

<script setup>
// 创建一个插件
const nuxtApp = useNuxtApp()
nuxtApp.provide('formatData', () => {
  return '2023-2-2'
})
// 通过 $ 符号取出插件并使用
console.log(nuxtApp.$formatData())

console.log(nuxtApp.$formatTime())
</script>
