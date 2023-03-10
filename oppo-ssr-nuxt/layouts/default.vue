<template>
  <div class="layout">
    <app-header></app-header>
    <navbar></navbar>
    <slot></slot>
    <app-footer></app-footer>
  </div>
</template>

<script lang="ts" setup>
import { useHomeStore } from '@/store'

const homeStore = useHomeStore()
homeStore.fetchHomeInfoData('oppo')

</script>