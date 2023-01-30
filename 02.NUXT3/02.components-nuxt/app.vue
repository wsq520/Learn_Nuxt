<template>
  <div>
    <h1>Nuxt-APP</h1>
    <ClientOnly fallback-tag="h1" fallback="loading....">
      我只在客户端渲染 服务器返回内容没我 不信你看看
    </ClientOnly>
    <NuxtPage></NuxtPage>
    <ClientOnly>
      <div>我在客户端渲染</div>
      <template #fallback>
        <div>
          我是服务端渲染的loading...
        </div>
      </template>
    </ClientOnly>
  </div>
</template>

<script setup>

</script>
