<template>
  <div>
    <h2>hello-nuxtApp</h2>
    <div>
      <NuxtLink to="/">
        <button>首页</button>
      </NuxtLink>
      <NuxtLink to="/category">
        <button>分类</button>
      </NuxtLink>
      <NuxtLink to="/cart">
        <button>购物车</button>
      </NuxtLink>
      <NuxtLink :to="{ path: '/cart', query: { id: 100 } }">
        <button>购物车-携带参数</button>
      </NuxtLink>
      <NuxtLink to="/cart" active-class="active-wsq123">
        <button>购物车-活跃路由类名</button>
      </NuxtLink>
      <NuxtLink to="https://www.baidu.com" target="_blank">
        <button>百度</button>
      </NuxtLink>
    </div>
    <hr>
    <div>
      <button @click="goToCart">
        购物车
      </button>
    </div>
    <NuxtPage></NuxtPage>
  </div>
</template>

<script setup>
const goToCart = async () => {
  // 1.传入字符串
  // navigateTo('/cart')

  // 2.传入对象
  // navigateTo({
  //   path: '/cart',
  //   query: {
  //     id: 999
  //   }
  // },
  //   {
  //     replace: true
  //   })

  // 3.跳到外部连接
  return await navigateTo('https://www.jd.com', {
    external: true
  })
}

</script>