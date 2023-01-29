<template>
  <div>
    <h2>vue-demo</h2>
    <div>{{ count }}</div>
    <button @click="addCount">+1</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(100)

const addCount = () => {
  count.value++
}
</script>

<style scoped>

</style>