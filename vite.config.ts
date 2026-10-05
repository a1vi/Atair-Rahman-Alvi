import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Atair-Rahman-Alvi/',
  server: { port: 5173 },
})
