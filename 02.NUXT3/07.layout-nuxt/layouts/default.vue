<template>
  <div class="layout">
    <div class="header">
      <h1>我是header</h1>
      <div>
        <NuxtLink to="/">
          <button>首页</button>
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
        <NuxtLink to="/login">
          <button>登录</button>
        </NuxtLink>
      </div>
    </div>
    <slot></slot>
    <div class="footer">我是footer</div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.header {
  background-color: red;
  text-align: center;
  font-size: 30px;
}

.footer {
  background-color: blue;
  text-align: center;
  font-size: 30px;
}
</style>