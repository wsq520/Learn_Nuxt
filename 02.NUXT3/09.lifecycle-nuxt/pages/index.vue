<template>
  <div>
    Page-Home
  </div>
</template>

<script>
export default {
  setup() {
    console.log('set up')
    return {}
  },
  beforeCreate() {
    console.log('beforeCreated')
  },
  created() {
    console.log('created')
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
  }
}
</script>

<style scoped>

</style>