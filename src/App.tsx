import React from 'react';
import './index.css'; // Global styles
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';         //Create These Pages
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import NotFoundPage from './pages/NotFoundPage';
import Project1Page from './pages/Project1Page';
import ServicesPage from './pages/ServicesPage';
import Sketchbook from './pages/Sketchbook';


const App: React.FC = () => {
  return (
    <Router>
      <Header siteTitle="Unique UX" />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/project1" element={<Project1Page />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/sketchbook" element={<Sketchbook />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;