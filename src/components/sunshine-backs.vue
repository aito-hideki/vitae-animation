<template>
  <transition>
    <div
      v-if="page === 1"
      class="opacity-70"
    >
      <div
        class="overlay-ellipse smaller-ellipse"
        :class="page < 4 ? 'bg-dull-yellow' : 'white'"
      />
      <div
        class="overlay-ellipse larger-ellipse"
        :class="page < 4 ? 'bg-yellow' : 'white'"
      />
    </div>
    <div
      v-else-if="page >= 2"
      class="bg-orange"
    >
      <div class="fixed-screen gradient-overlay" />
    </div>
  </transition>
</template>

<script setup lang="ts">
import { usePages } from '@/use/pages'
import { computed } from 'vue'

const { page, scrollPos } = usePages()
const gradoverOpacity = computed(() => {
  const opacity = (1 - Math.abs(2.5 - scrollPos.value) / 2) * 0.7
  return opacity > 0.3 ? opacity : 0.3
})
</script>

<style scoped>
.gradient-overlay {
  background: radial-gradient(66.36% 66.36% at 50% 33.64%, rgba(22, 21, 31, 0) 0%, #4A1307 100%);
  opacity: v-bind(gradoverOpacity);
}
</style>
