import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/lubrimas/' : '/',
  build: {
    assetsDir:`assets/${process.env.TIMESTAMP || 'build'}`,
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  }
})
