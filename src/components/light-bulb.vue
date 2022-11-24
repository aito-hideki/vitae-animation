<template>
  <img
    class="fixed-screen w-screen h-screen object-cover opacity-60"
    src="/images/noisetop-1.webp"
    loading="lazy"
  >
  <img
    class="light-bulb mix-blend-overlay fixed-center w-80 h-110 2xl:w-120 2xl:h-160"
    :class="{
      'light-bulb--started': phase === 'started',
      'light-bulb--floating': phase === 'floating',
    }"
    src="/images/new-vitae-bulb-PNG.png"
    alt="light bulb"
    width="320"
    height="440"
  >
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const phase = ref('started')
onMounted(() => {
  setTimeout(() => {
    phase.value = 'floating'
  }, 3900)
})
</script>

<style scoped>
.light-bulb {
  position: fixed;
  left: 50%;
  transform: translate(-50%, -50%);
}
.light-bulb--started {
  animation-name: light-bulb-starting;
  animation-duration: 4s;
  animation-timing-function: ease;
}
.light-bulb--floating {
  top: 45%;
  animation-name: light-bulb-floating;
  animation-duration: 6s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
}

@keyframes light-bulb-starting {
  0% { top: 100%; transform: translate(-50%, 0); }
  100% { top: 45%; transform: translate(-50%, -50%); }
}
@keyframes light-bulb-floating {
  0% { transform: translate(-50%, -50%) }
  50% { transform: translate(-50%, calc(10px - 50%)) }
  100% { transform: translate(-50%, -50%) }
}
</style>
