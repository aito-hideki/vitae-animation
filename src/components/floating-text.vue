<template>
  <transition>
    <div
      v-if="scrollPos >= from && scrollPos <= to"
      class="absolute top-0 left-0 right-0 bottom-0"
    >
      <div class="floating-text">
        <div class="text-5xl mb-8">
          {{ title }}
        </div>
        <div class="text-2xl">
          {{ description }}
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { usePages } from '@/use/pages'
import { computed } from 'vue'

const props = defineProps<{
  title: string,
  description: string,
  from: number
  to: number
}>()

const { scrollPos } = usePages()
const textOpacity = computed(() => (props.to - scrollPos.value) * 3)
const paddingBottom = computed(() => textOpacity.value * 160 + 80 + 'px')
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
