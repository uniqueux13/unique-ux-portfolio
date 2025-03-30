// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills'; // Import the plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills(), // Add the Node polyfills plugin HERE
  ],
  // You likely don't need ssgOptions here anymore if using getStaticPaths
});