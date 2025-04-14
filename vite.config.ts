// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [
    react(),
    svgr()
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) { // Removed { getModuleInfo } parameter
          if (id.includes('/node_modules/@tsparticles/')) {
            return 'tsparticles-vendor';
          }
        }
      }
    }
  },
})