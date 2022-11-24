<template>
  <div class="pagination container px-5">
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
  justify-content: end;
}
.pagination__bullet {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: white;
  transition: opacity .3s;
}
</style>
