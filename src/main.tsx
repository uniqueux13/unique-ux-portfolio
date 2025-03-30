// src/main.tsx
import { ViteSSG } from 'vite-ssg';
import App from './App';
import './index.css';

const routes = [
  { path: '/', component: () => import('./pages/HomePage') },
  { path: '/about', component: () => import('./pages/AboutPage') },
  { path: '/services', component: () => import('./pages/ServicesPage') },
  { path: '/portfolio', component: () => import('./pages/PortfolioPage') },
  { path: '/project1', component: () => import('./pages/Project1Page') },
  { path: '/project2', component: () => import('./pages/Project2Page') },
  { path: '/sketchbook', component: () => import('./pages/Sketchbook') },
  { path: '/blog', component: () => import('./pages/BlogListPage') },
  { path: '/blog/:slug', component: () => import('./pages/BlogPostPage') },
  { path: '/:pathMatch(.*)*', component: () => import('./pages/NotFoundPage') },
];

export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  // Prefix unused parameters with an underscore
  ({ app: _app, router: _router, routes: _routes, isClient, initialState: _initialState }) => {
    // Optional custom setup
    if (isClient) {
      // You might still use isClient for client-side specific logic later
      // console.log('Running client-side setup');
    }
    // Now _app, _router, _routes, and _initialState are marked as unused
  }
);