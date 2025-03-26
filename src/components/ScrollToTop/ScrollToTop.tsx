// src/components/ScrollToTop/ScrollToTop.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation(); // Get the current location object

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional: Use "instant" for immediate scroll, "smooth" for smooth scrolling
    });
  }, [pathname]); // Dependency array: run effect only when pathname changes

  return null; // This component doesn't render anything visual
}

export default ScrollToTop;