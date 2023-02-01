<template>
  <div>
    detail02-id
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
console.log(route)
const { id } = route.params
console.log(id)

</script>

<style scoped></style>
