<template>
  <img
    class="light-bulb fixed-center"
    :class="{
      'light-bulb--started': phase === 'started',
      'light-bulb--floating': phase === 'floating',
    }"
    src="/images/new-vitae-bulb-PNG.png"
    alt="light bulb"
    width="338"
    height="450"
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
  top: 40%;
  animation-name: light-bulb-floating;
  animation-duration: 8s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
}

@keyframes light-bulb-starting {
  0% { top: calc(40% + 450px); }
  100% { top: 40%; }
}
@keyframes light-bulb-floating {
  0% { transform: translate(-50%, -50%) }
  50% { transform: translate(-50%, calc(10px - 50%)) }
  100% { transform: translate(-50%, -50%) }
}
</style>
