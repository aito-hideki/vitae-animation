import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import components from 'unplugin-vue-components/vite'
import viteESLint from '@ehutch79/vite-eslint'
import windiCSS from 'vite-plugin-windicss'
import fs from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    windiCSS(),
    vue(),
    components({
      directoryAsNamespace: true,
      dts: true
    }),
    // Turn on Dev ESLint for development mode only
    ...(process.env.NODE_ENV === 'development'
      ? [viteESLint({ include: ['src/**/*.vue', 'src/**/*.ts'] })]
      : []
    ),
    {
      name: 'fix-swipper-css',
      enforce: 'pre',
      resolveId (id) {
        if (id === 'swiper.css') return 'fix-swiper.css'
      },
      async load (id) {
        if (id === 'fix-swiper.css') {
          return await fs.readFileSync(
            './node_modules/swiper/swiper.min.css',
            'utf-8'
          )
        }
      }
    },
    {
      name: 'fix-swipper-scrollbar-css',
      enforce: 'pre',
      resolveId (id) {
        if (id === 'scrollbar.css') return 'fix-swiper-scrollbar.css'
      },
      async load (id) {
        if (id === 'fix-swiper-scrollbar.css') {
          return await fs.readFileSync(
            './node_modules/swiper/modules/scrollbar/scrollbar.min.css',
            'utf-8'
          )
        }
      }
    }
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    chunkSizeWarningLimit: 1024
  },
  server: {
    port: 3000
  }
})
