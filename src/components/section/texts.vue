<template>
  <div class="texts-section container h-screen flex justify-between px-5 mx-auto">
    <div class="texts-section__labels lg:text-2xl">
      We know
    </div>
    <div class="texts-section__labels text-3xl sm:text-6xl lg:text-7xl">
      Lighting has<br>
      the power to
    </div>
    <floating-text
      title="Avoid Blue Light."
      description="Use Vitae lighting 90 minutes before sleep, as it doesn't surpress melatonin production and allows you to fall asleep easily and be well rested."
      :pos-start="2.5"
    />
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
  position: relative;
}
.texts-section__labels {
  opacity: v-bind(textOpacity);
}
</style>
