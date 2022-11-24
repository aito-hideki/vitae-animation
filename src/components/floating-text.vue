<template>
  <div class="floating-text">
    <div class="text-5xl mb-8">
      {{ title }}
    </div>
    <div class="text-2xl">
      {{ description }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePages } from '@/use/pages'
import { computed } from 'vue'

const props = defineProps<{
  title: string,
  description: string,
  posStart: number
}>()

const { scrollPos } = usePages()
const textOpacity = computed(() => Math.min(1, props.posStart - scrollPos.value * 2))
const paddingBottom = computed(() => textOpacity.value * 160 + 'px')
</script>

<style scoped>
.floating-text {
  position: absolute;
  bottom: v-bind(paddingBottom);
  left: 50%;
  transform: translateX(-50%);

  text-align: center;
  opacity: v-bind(textOpacity);
  max-width: 580px;
}
</style>
