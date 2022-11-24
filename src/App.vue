<template>
  <div
    class="duration-300"
    :class="colorClass"
  >
    <sunshine-backs />
    <div class="mix-blend-overlay">
      <sunshine />
      <light-bulb />
    </div>
    <sunshine-overlay />
    <div class="relative">
      <section-hero />
      <section-texts />
      <div
        v-for="i in 3"
        :key="i"
        class="h-screen"
      />
    </div>
    <pagination />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { usePages } from './use/pages'

const { page } = usePages()
const colorClass = computed(() => {
  switch (page.value) {
    case 1:
      return 'bg-sun'
    case 2:
      return 'bg-orange'
    case 3:
      return 'bg-warm-white'
    default:
      return 'bg-daylight-white'
  }
})
</script>
