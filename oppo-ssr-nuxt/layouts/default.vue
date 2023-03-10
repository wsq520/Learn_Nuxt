<template>
  <div class="layout">
    <app-header></app-header>
    <navbar :navbars="navbars"></navbar>
    <slot></slot>
    <app-footer></app-footer>
  </div>
</template>

<script lang="ts" setup>
import { useHomeStore } from '@/store'
import { storeToRefs } from 'pinia'

const homeStore = useHomeStore()
homeStore.fetchHomeInfoData('oppo')
const { navbars } = storeToRefs(homeStore)

</script>