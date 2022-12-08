import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build:{
    rollupOptions:{
      input:{
        main:resolve(__dirname,'index.html'),
        college:resolve(__dirname,'pages/college/index.html'),
        Elementary:resolve(__dirname,'pages/Elementary/index.html'),
        preSchool:resolve(__dirname,'pages/pre-school/index.html')
      }
    }
  }
})
