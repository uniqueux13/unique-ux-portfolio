// vite.config.ts (Updated)

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr' // <-- 1. Import the svgr plugin

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr() // <-- 2. Add svgr plugin HERE
  ],
})