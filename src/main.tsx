// src/main.tsx (Corrected - Simplified ViteSSG options)
import { ViteSSG } from 'vite-ssg';
import App from './App';
import './index.css';

// No need to define routes array here for ViteSSG options

// Create the app using ViteSSG
export const createApp = ViteSSG(
  App, // Your root component

  // Minimal router options - just base URL (or {} if base is not needed)
  // This avoids the object structure causing the implicit 'any' for initialState
  { base: import.meta.env.BASE_URL },

  // Optional: Custom setup function
  // Prefix unused parameters with underscore
  ({ app: _app, router: _router, routes: _routes, isClient, initialState: _initialState }) => {
    if (isClient) {
      // Client-side only setup
      // console.log('Running client-side setup');
    }
  }
);