<template>
  <div class="hero-section container h-screen flex flex-col justify-end px-5 mx-auto">
    <div class="text-5xl sm:text-8xl lg:text-9xl xl:text-10xl mb-2">
      Sunlight,<br>
      re-imagined.
    </div>
    <div class="mb-3">
      Circadian rhythmn aligned lighting by Vitae.
    </div>
    <arrow-down class="h-38 -mb-8" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { usePages } from '@/use/pages'

const { scrollPos } = usePages()
const textOpacity = computed(() => scrollPos.value <= 0.5 ? 1 - scrollPos.value * 2 : 0)
</script>

<style scoped>
.hero-section {
  opacity: v-bind(textOpacity);
}
</style>
