import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/postcss7-compat'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/lubrimas/' : '/',
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer
      ]
    }
  },
  server: {
    headers: {
      'Permissions-Policy': 'interest-cohort=()'
    }
  }
})
