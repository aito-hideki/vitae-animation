<template>
  <div
    class="duration-500"
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
          :from="1.5"
          :to="2.2"
        />
      </div>
      <div class="relative container h-screen px-5 mx-auto">
        <floating-text
          class="text-black"
          title="Work mode: activated."
          description="Inspired by natural daylight and with strengthened blue/cyan emission, the white Vitae light helps boost your productivity and alertness during the day, ideal for work and study."
          :from="2.5"
          :to="3.2"
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

const { scrollPos } = usePages()
const colorClass = computed(() => {
  if (scrollPos.value < 0.5) { return 'bg-sun' }
  if (scrollPos.value < 1.5) { return 'bg-orange' }
  if (scrollPos.value < 2.5) { return 'bg-warm-white' }
  return 'bg-daylight-white'
})
</script>
