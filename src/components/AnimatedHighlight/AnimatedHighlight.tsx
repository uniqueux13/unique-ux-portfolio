// src/components/AnimatedHighlight/AnimatedHighlight.tsx
import React, { useRef, useState, useEffect, ReactNode } from 'react';
// Assuming your highlightBox styles are in HomePage.module.css
// Adjust the import path if necessary
import styles from '../../pages/HomePage.module.css';

interface AnimatedHighlightProps {
  children: ReactNode; // To wrap the text content
}

const AnimatedHighlight: React.FC<AnimatedHighlightProps> = ({ children }) => {
  // 1. Create a ref for the span element
  const elementRef = useRef<HTMLSpanElement>(null);

  // 2. State to track visibility for animation trigger
  const [isVisible, setIsVisible] = useState(false);

  // 3. useEffect for Intersection Observer setup
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          // --- Add this log ---
          console.log('IntersectionObserver entry:', entry.target, 'isIntersecting:', entry.isIntersecting);
          // --------------------
          if (entry.isIntersecting) {
            // --- Add this log ---
            console.log('Setting isVisible to true for:', entry.target);
            // --------------------
            setIsVisible(true);
            if (elementRef.current) {
              observer.unobserve(elementRef.current);
            }
          }
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.1,
        }
      );

    // Start observing the element
    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Cleanup observer on component unmount
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <span
      ref={elementRef}
      // Combine base highlight style with conditional animation style
      className={`${styles.highlightBox} ${isVisible ? styles.animateIn : ''}`}
    >
      {children} {/* Render the text passed to the component */}
    </span>
  );
};

export default AnimatedHighlight;