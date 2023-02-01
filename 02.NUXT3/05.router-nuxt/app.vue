<template>
  <div>
    <NuxtLink to="/">
      <button>home</button>
    </NuxtLink>
    <NuxtLink to="/detail01">
      <button>detail01</button>
    </NuxtLink>
    <NuxtLink to="/detail02">
      <button>detail02/index</button>
    </NuxtLink>
    <NuxtLink to="/detail02/123">
      <button>detail02-id</button>
    </NuxtLink>
    <NuxtLink to="/detail03/user-999">
      <button>detail03-user-id</button>
    </NuxtLink>
    <NuxtLink to="/detail04-admin">
      <button>detail04-admin</button>
    </NuxtLink>
    <NuxtLink to="/detail04-admin/100">
      <button>detail04-admin/100</button>
    </NuxtLink>
    <hr>
    <h2>路由的嵌套</h2>
    <NuxtPage></NuxtPage>
  </div>
</template>

<script setup>
</script>
