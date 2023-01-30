<template>
  <div>
    <h1 class="global-style">Nuxt-APP</h1>
    <h1 class="global-style1">全局样式-main.css</h1>
    <h1 class="global-style2">全局样式-global.sass</h1>

    <!-- 访问Public资源 -->
    <img src="/js01.webp" alt="">

    <!-- 访问assets资源 -->
    <img class="a-img" src="@/assets/images/beauty.jpg" alt="">

    <img class="a-img" :src="ImgOne" alt="">
    <NuxtPage></NuxtPage>
  </div>
</template>

<script setup>
import ImgOne from '@/assets/images/beauty.jpg'
</script>

<style>
.global-style {
  color: red
}

.a-img {
  width: 200px;
  height: 180px;
}
</style>
