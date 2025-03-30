// src/App.tsx
import React from 'react';
import './index.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// REMOVE BrowserRouter import from here
import { Routes, Route } from 'react-router-dom'; // Keep Routes and Route
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ServicesPage from './pages/ServicesPage';
import NotFoundPage from './pages/NotFoundPage';
import Project1Page from './pages/Project1Page';
import Project2Page from './pages/Project2Page';
import SketchbookPage from './pages/Sketchbook';
import BlogListPage from './pages/BlogListPage';
import BlogPostPage from './pages/BlogPostPage';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const App: React.FC = () => {
  return (
    // Use a React Fragment <>...</> instead of the <Router>
    <>
      <Header siteTitle="Unique UX" />
      <ScrollToTop />
      <main>
        <Routes> {/* The Routes component needs to be rendered directly */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/project1" element={<Project1Page />} />
          <Route path="/project2" element={<Project2Page />} />
          <Route path="/sketchbook" element={<SketchbookPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;