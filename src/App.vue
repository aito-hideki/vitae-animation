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
      <div class="relative container h-screen px-5 mx-auto">
        <floating-text
          title="Wind you down, naturally."
          description="Use our warm-white mode in the evenings after work to wind down, until 90 min before sleep when the pure orange mode should be used."
          :pos-start="4.5"
        />
      </div>
      <div class="relative container h-screen px-5 mx-auto">
        <floating-text
          class="text-black"
          title="Work mode: activated."
          description="Inspired by natural daylight and with strengthened blue/cyan emission, the white Vitae light helps boost your productivity and alertness during the day, ideal for work and study."
          :pos-start="6.5"
        />
      </div>
      <div class="h-screen" />
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
