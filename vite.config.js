import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/weather/', // 確保這裡設定為您的儲存庫名稱，且前後有斜線
})