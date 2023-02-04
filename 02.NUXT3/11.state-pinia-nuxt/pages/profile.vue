<template>
  <div class="profile">
    profile
    {{ loginInfo.name }}
    {{ loginInfo.age }}
    {{ loginInfo.sex }}
  </div>
</template>

<script setup>
const loginInfo = useLoginInfo()

</script>

<style scoped>

</style>