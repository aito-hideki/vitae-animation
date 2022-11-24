<template>
  <div class="opacity-70">
    <div
      class="overlay-ellipse smaller-ellipse"
      :class="page < 4 ? 'bg-dull-yellow' : 'white'"
    />
    <div
      class="overlay-ellipse larger-ellipse"
      :class="page < 4 ? 'bg-yellow' : 'white'"
    />
  </div>
</template>

<script setup lang="ts">
import { usePages } from '@/use/pages'

const { page } = usePages()
</script>
