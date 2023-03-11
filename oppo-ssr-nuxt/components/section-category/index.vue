<template>
  <div class="section-category">
    <section-title :title="category.title"></section-title>
    <grid-view :category-url="category.url" :productDetails="category.productDetailss">
    </grid-view>
  </div>
</template>

<script lang="ts" setup>
import type { ICategory } from '@/store'
export interface IProps {
  category: ICategory
}

const props = withDefaults(defineProps<IProps>(), {
  category: () => ({})
})
</script>

<style lang="scss">
.section-category {}
</style>