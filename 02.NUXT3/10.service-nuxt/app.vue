<template>
  <div>
    <h1>App</h1>
    <NuxtLink to="/home">
      <button>主页</button>
    </NuxtLink>
    <NuxtPage></NuxtPage>
  </div>
</template>

<script setup>
const nuxtApp = useNuxtApp()

</script>
