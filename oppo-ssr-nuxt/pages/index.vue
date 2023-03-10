<template>
  <div class="home">
    home
  </div>
</template>

<script lang="ts" setup>
export interface IProps {
  title: string
}

const props = withDefaults(defineProps<IProps>(), {
  title: ''
})
</script>

<style lang="scss">
.home {

}
</style>