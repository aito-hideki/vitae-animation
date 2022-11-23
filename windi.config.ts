import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  attributify: {
    prefix: 'wnd'
  },
  theme: {
    extend: {
      colors: {
        sun: '#C32F00',
        orange: '#D35100',
        'warm-white': '#FFA641',
        'daylight-white': '#CFE3E5'
      }
    }
  },
  shortcuts: {
    'flex-center': 'items-center justify-center',
    'fixed-screen': 'fixed top-0 left-0 right-0 bottom-0',
    'fixed-center': 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
  }
})
