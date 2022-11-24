<template>
  <div class="pagination container px-5">
    <div class="flex mr-auto">
      <div class="relative text-sm sm:text-lg transform rotate-270 uppercase">
        <transition>
          <div
            v-if="page === 2"
            class="absolute left-0 whitespace-nowrap"
          >
            Orange
          </div>
          <div
            v-else-if="page === 3"
            class="absolute left-0 whitespace-nowrap"
          >
            Warm White
          </div>
          <div
            v-else-if="page === 4 || page === 5"
            class="absolute left-0 whitespace-nowrap"
          >
            Daylight white
          </div>
        </transition>
      </div>
    </div>
    <div class="flex flex-col">
      <div
        class="pagination__bullet mb-10"
        :class="{ 'opacity-40': page !== 1 }"
      />
      <div
        class="pagination__bullet mb-10"
        :class="{ 'opacity-40': page !==2 }"
      />
      <div
        class="pagination__bullet mb-10"
        :class="{ 'opacity-40': page !== 3 }"
      />
      <div
        class="pagination__bullet"
        :class="{ 'opacity-40': page < 4 }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePages } from '@/use/pages'

const { page } = usePages()
</script>

<style scoped>
.pagination {
  position: fixed;
  top: 0;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);

  display: flex;
  align-items: center;
  justify-content: between;
}
.pagination__bullet {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: white;
  transition: opacity .3s;
}
</style>
