<template>
  <div>
    category
    <div>{{ counter }}</div>
    <div><button @click="addCounter">+1</button></div>
    <div><button @click="fetchData">获取数据</button></div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useHomeStore } from '~~/store/home'

const homeStore = useHomeStore()
const { counter } = storeToRefs(homeStore)

function addCounter() {
  homeStore.increment()
}

function fetchData() {
  homeStore.fetchHomeData()
}

</script>

<style scoped>

</style>