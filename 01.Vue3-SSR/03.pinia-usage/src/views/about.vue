<template>
  <div>
    <h2>About</h2>
    <div>{{ count }}</div>
    <button @click="addCount">+1</button>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useHomeStore } from '../store'

const homeStore = useHomeStore()
const { count } = storeToRefs(homeStore)

const addCount = () => {
  count.value++
}
</script>

<style scoped>

</style>