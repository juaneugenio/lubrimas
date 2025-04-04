import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/lubrimas/' : '/',
  build: {
    assetsDir: 'assets',
    outDir: 'dist',
    emptyOutDir: true
  },
  css: {
    postcss: './postcss.config.cjs'
  },
  server: {
    headers: {
      'Permissions-Policy': 'geolocation=(self)'
    }
  }
})
