<template>
  <div class="home">
    <div class="wrapper content">
      <swiper :banners="banners"></swiper>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useHomeStore } from '@/store'

export interface IProps {
  title: string
}

const props = withDefaults(defineProps<IProps>(), {
  title: 'home'
})

const homeStore = useHomeStore()
const { banners, categorys } = storeToRefs(homeStore)
</script>

<style lang="scss">
.home {
  background-color: $bgGrayColor;
}
</style>