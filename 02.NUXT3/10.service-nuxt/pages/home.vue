<template>
  <div>
    Home
  </div>
</template>

<script setup>
import { fetchHomeInfoData } from '~~/service/home'

const res = await fetchHomeInfoData()
console.log(res)

</script>

<style scoped>

</style>