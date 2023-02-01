<template>
  <div>
    detail-role
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
console.log(route)
const { role, id } = route.params
console.log(role, id)
</script>

<style scoped>

</style>
