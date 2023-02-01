<template>
  <div>
    detail03-user-{{ id }}
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
console.log(route)
const { id } = route.params
console.log(id)

</script>

<style scoped></style>
