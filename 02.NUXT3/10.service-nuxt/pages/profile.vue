<template>
  <div>
    Profile
    <button @click="getToken">获取token</button>
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/homeInfo')
// console.log(data)
// console.log(data._value)

// login.get.ts表明该请求是get请求 所以method必须是get 否则报错
// const res = await useFetch('/api/login', {
//   method: 'GET'
// })
// console.log(res.data._value)

// login.post.ts
const res = await useFetch('/api/login?id=999', {
  method: 'POST',
  body: {
    username: 'ppp',
    age: 19
  }
})
console.log(res.data._value)

async function getToken() {
  const { data } = await useFetch('/api/login?id=999', {
    method: 'POST'
  })
  // console.log(data._value)

  const cookie = useCookie('token', {
    maxAge: 60 // 只存储60s
  })
  // console.log(data._value.data.token)
  cookie.value = data._value.data.token
}

</script>

<style scoped>

</style>