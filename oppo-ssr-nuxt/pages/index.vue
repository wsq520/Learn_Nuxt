<template>
  <div class="home">
    <div class="wrapper content">
      <swiper :banners="banners"></swiper>
      <tab-category :categorys="categorys" @item-click="handleItemClick"></tab-category>
      <template v-for="(item, index) in categorys" :key="item.id">
        <section-category :category="item"></section-category>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useHomeStore } from '@/store'
import type { ICategory } from '@/store'

const homeStore = useHomeStore()
const { banners, categorys } = storeToRefs(homeStore)

// 处理子组件点击事件
const handleItemClick = (item: ICategory) => {
  return navigateTo({
    path: '/oppo-detail',
    query: {
      type: item.type
    }
  })
}

</script>

<style lang="scss">
.home {
  background-color: $bgGrayColor;
}
</style>