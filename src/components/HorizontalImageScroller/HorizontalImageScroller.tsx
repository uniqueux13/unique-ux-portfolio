import React from "react";
// Import YOUR Image component - Adjust path if needed
import Image from "../Image/Image";
import styles from "./HorizontalImageScroller.module.css";

// Define the structure for each image item
interface ImageItem {
  // Use string for src, as standard image imports usually resolve to paths
  src: string;
  alt: string;
}

// Define the props for the component
interface HorizontalImageScrollerProps {
  images: ImageItem[];
  speed?: string; // Optional: control speed (e.g., '40s', '60s')
  imageMaxHeight?: string; // Optional: control image height (e.g., '50px')
}

const HorizontalImageScroller: React.FC<HorizontalImageScrollerProps> = ({
  images = [],
  speed = "20s",
  imageMaxHeight = "50px",
}) => {
  if (!images || images.length === 0) {
    return null;
  }

  const duplicatedImages = [...images, ...images];

  return (
    <div
      className={styles.scrollerContainer}
      style={{ "--animation-duration": speed } as React.CSSProperties}
    >
      <div className={styles.scrollerInner}>
        {duplicatedImages.map((image, index) => (
          <div
            key={`${image.alt}-${index}`}
            className={styles.imageWrapper}
            style={
              { "--image-max-height": imageMaxHeight } as React.CSSProperties
            }
          >
            {/* Use YOUR Image component */}
            <Image
              src={image.src}
              alt={image.alt}
              className={styles.scrollerImage}
              // Pass any other props YOUR Image component might need
              // Remove any props specific to next/image like layout, objectFit (unless your component uses them)
              // Sizing is handled by CSS (.scrollerImage and .imageWrapper)
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalImageScroller;
