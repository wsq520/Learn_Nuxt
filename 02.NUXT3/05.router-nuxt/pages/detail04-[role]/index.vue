<template>
  <div>
    detail-role
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
console.log(route)
const { role } = route.params
console.log(role)
</script>

<style scoped>

</style>
