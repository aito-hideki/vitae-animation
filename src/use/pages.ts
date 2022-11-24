import { computed } from 'vue'
import { useScroll, useWindowSize } from '@vueuse/core'

export const usePages = () => {
  const { height } = useWindowSize()
  const { y } = useScroll(document)

  const scrollPos = computed(() => y.value / height.value)
  const page = computed(() => Math.floor(scrollPos.value + 0.25) + 1)

  return {
    scrollPos,
    page
  }
}
