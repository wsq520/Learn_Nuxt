<template>
  <div class="home">
    <div class="wrapper content">
      <swiper :banners="banners"></swiper>
      <tab-category :categorys="categorys" @item-click="handleItemClick"></tab-category>
      <section-title title="Find N 系列"></section-title>
      <grid-view :productDetails="categorys![1].productDetailss"></grid-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useHomeStore } from '@/store'
import type { ICategory } from '@/store'

// export interface IProps {
//   title: string
// }

// const props = withDefaults(defineProps<IProps>(), {
//   title: 'home'
// })

const homeStore = useHomeStore()
const { banners, categorys } = storeToRefs(homeStore)

// 处理子组件点击事件
const handleItemClick = (item: ICategory) => {

}

</script>

<style lang="scss">
.home {
  background-color: $bgGrayColor;
}
</style>