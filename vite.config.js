import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/blinkr/', // 👈 مهم جداً لأن اسم المشروع في GitHub هو blinkr
})
