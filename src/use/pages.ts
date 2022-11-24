import { computed } from 'vue'
import { useScroll, useWindowSize } from '@vueuse/core'

export const usePages = () => {
  const { height } = useWindowSize()
  const { y } = useScroll(document)

  const page = computed(() => Math.floor(y.value / height.value) + 1)

  return {
    page
  }
}
