<template>
  <div class="texts-section container h-screen flex justify-between px-5 mx-auto">
    <div class="lg:text-2xl">
      We know
    </div>
    <div class="text-3xl sm:text-6xl lg:text-8xl">
      Lighting has<br>
      the power to
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { usePages } from '@/use/pages'

const { scrollPos } = usePages()
const textOpacity = computed(() => scrollPos.value <= 1 ? 2 - scrollPos.value * 2 : 0)
</script>

<style scoped>
.texts-section {
  opacity: v-bind(textOpacity);
}
</style>
