import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/postcss7-compat'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  plugins: [react()],
  base: '/lubrimas/', //line for GitHub Pages
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer
      ]
    }
  }
})
