<template>
  <div class="home">
    <h1>home</h1>
    <p>{{ counter }}</p>
    <button @click="addCounter">+1</button>
  </div>
</template>

<script setup>
const counter = useCounter()

function addCounter() {
  counter.value++
}

</script>

<style scoped>

</style>