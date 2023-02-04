<template>
  <div>
    <NuxtLink to="/">
      <button>主页</button>
    </NuxtLink>
    <NuxtLink to="/cart">
      <button>购物车</button>
    </NuxtLink>
    <NuxtLink to="/category">
      <button>分类</button>
    </NuxtLink>
    <NuxtLink to="/profile">
      <button>个人</button>
    </NuxtLink>
    <NuxtPage></NuxtPage>
  </div>
</template>

<script setup>
const nuxtApp = useNuxtApp()

</script>
