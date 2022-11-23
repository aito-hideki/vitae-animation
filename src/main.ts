import { createApp } from 'vue'
import Vue3Lottie from 'vue3-lottie'

import 'virtual:windi.css'
import '@mdi/font/css/materialdesignicons.min.css'

import App from './App.vue'
import './styles/index.css'

createApp(App).use(Vue3Lottie).mount('#app')
