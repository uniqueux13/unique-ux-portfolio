// src/components/ScrollHighlightText/ScrollHighlightText.tsx
import React, { useState, useRef, useEffect, useCallback } from 'react';
import styles from './ScrollHighlightText.module.css'; // We'll create this

interface ScrollHighlightTextProps {
  children: React.ReactNode;
  /** Base text color (the un-highlighted part) */
  baseColor?: string;
  /** Highlighted text color */
  highlightColor?: string;
  /** Adjusts the scroll trigger point. 0.5 = middle of viewport, 1 = bottom, 0 = top */
  triggerPoint?: number;
}

const ScrollHighlightText: React.FC<ScrollHighlightTextProps> = ({
  children,
  baseColor = 'var(--color-text-muted, #888)', // Default to a muted variable or gray
  highlightColor = 'var(--color-text, #FFF)', // Default to primary text variable or white
  triggerPoint = 0.7, // Trigger highlighting as text approaches bottom 70% of viewport
}) => {
  const [highlightPercent, setHighlightPercent] = useState(0);
  const elementRef = useRef<HTMLParagraphElement>(null);

  const handleScroll = useCallback(() => {
    if (!elementRef.current) return;

    const rect = elementRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // Calculate the vertical position where highlighting should be complete
    const highlightEndPosition = viewportHeight * triggerPoint;

    // Calculate the element's top and bottom relative to the viewport
    const elementTop = rect.top;
    const elementHeight = rect.height;

    if (elementHeight === 0) return; // Avoid division by zero

    // Calculate how much of the element (relative to its height)
    // has passed the highlightEndPosition
    // Formula explanation:
    // (highlightEndPosition - elementTop) = how far the trigger point is below the element's top
    // Divide by elementHeight to get a ratio (0 to 1+) of how much of the element is above the trigger point
    const scrolledRatio = (highlightEndPosition - elementTop) / elementHeight;

    // Clamp the ratio between 0 and 1 and convert to percentage
    const percent = Math.min(1, Math.max(0, scrolledRatio)) * 100;

    setHighlightPercent(percent);

  }, [triggerPoint]); // Re-create handler if triggerPoint changes

  useEffect(() => {
    // Initial check in case the element is already in view on load
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); // Re-calculate on resize

    // Debounce or throttle handleScroll if performance becomes an issue
    // Example (requires a debounce library like lodash.debounce):
    // const debouncedScroll = debounce(handleScroll, 50);
    // window.addEventListener('scroll', debouncedScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      // window.removeEventListener('scroll', debouncedScroll); // If using debounce
    };
  }, [handleScroll]); // Run effect when handleScroll updates

  // Pass CSS variables inline for dynamic styling
  const inlineStyles = {
    '--highlight-percent': `${highlightPercent}%`,
    '--base-text-color': baseColor,
    '--highlight-text-color': highlightColor,
  } as React.CSSProperties;

  return (
    <p ref={elementRef} className={styles.highlightText} style={inlineStyles}>
      {children}
    </p>
  );
};

export default ScrollHighlightText;