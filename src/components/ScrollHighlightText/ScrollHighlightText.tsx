// src/components/ScrollHighlightText/ScrollHighlightText.tsx
// Updated: Added 'align' prop and dynamic alignment class

import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  ReactNode,
} from "react"; // Added ReactNode
import styles from "./ScrollHighlightText.module.css";

interface ScrollHighlightTextProps {
  children: ReactNode; // Use ReactNode for children type
  /** Base text color (the un-highlighted part) */
  baseColor?: string;
  /** Highlighted text color */
  highlightColor?: string;
  /** Adjusts the scroll trigger point. 0.5 = middle of viewport, 1 = bottom, 0 = top */
  triggerPoint?: number;
  /** Allow passing external class names */
  className?: string; // << ADDED className prop
  /** Text alignment */
  align?: "left" | "center" | "right"; // << ADDED align prop
}

const ScrollHighlightText: React.FC<ScrollHighlightTextProps> = ({
  children,
  baseColor = "var(--color-text-muted, #555)", // Default base color (consistent with previous CSS)
  highlightColor = "var(--color-text, #FFF)", // Default highlight color (consistent with previous CSS)
  triggerPoint = 0.7,
  className = "", // << ADDED default for className
  align = "left", // << ADDED default for align
}) => {
  const [highlightPercent, setHighlightPercent] = useState(0);
  const elementRef = useRef<HTMLParagraphElement>(null);

  // Keep user's existing handleScroll logic
  const handleScroll = useCallback(() => {
    if (!elementRef.current) return;

    const rect = elementRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const highlightEndPosition = viewportHeight * triggerPoint;
    const elementTop = rect.top;
    const elementHeight = rect.height;

    if (elementHeight === 0) return;

    const scrolledRatio = (highlightEndPosition - elementTop) / elementHeight;
    const percent = Math.min(1, Math.max(0, scrolledRatio)) * 100;
    setHighlightPercent(percent);
  }, [triggerPoint]);

  // Keep user's existing useEffect logic for scroll/resize listeners
  useEffect(() => {
    handleScroll(); // Initial check

    window.addEventListener("scroll", handleScroll, { passive: true }); // Add passive for performance
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [handleScroll]);

  // Keep user's inline style logic for passing variables
  const inlineStyles = {
    "--highlight-percent": `${highlightPercent}%`,
    "--base-text-color": baseColor,
    "--highlight-text-color": highlightColor,
  } as React.CSSProperties;

  // --- << NEW: Construct combined className with alignment >> ---
  // Generates 'textAlignLeft', 'textAlignCenter', or 'textAlignRight'
  const alignmentClass =
    styles[`textAlign${align.charAt(0).toUpperCase() + align.slice(1)}`];
  // Combine base, alignment, and any external className passed in props
  const combinedClassName =
    `${styles.highlightText} ${alignmentClass} ${className}`.trim();

  return (
    <p // Keep as <p> based on user's original code
      ref={elementRef}
      // Apply the combined class name
      className={combinedClassName}
      style={inlineStyles}
    >
      {children}
    </p>
  );
};

export default ScrollHighlightText;
