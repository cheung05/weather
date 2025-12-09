import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // 替換成您的儲存庫名稱
  base: 'https://github.com/cheung05/weather/',
  plugins: [react()],
})
