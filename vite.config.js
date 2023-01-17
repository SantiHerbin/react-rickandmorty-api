import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://santiherbin.github.io/rick-morty-api/",
  plugins: [react()],
})
