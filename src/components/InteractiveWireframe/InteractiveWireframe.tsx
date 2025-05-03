// src/components/InteractiveWireframe/InteractiveWireframe.tsx
import React from 'react';
// Import necessary icons
import {
  FaYoutube, FaTiktok, FaLinkedin, FaFigma, FaReact, FaDesktop
} from "react-icons/fa";
import styles from './InteractiveWireframe.module.css'; // Make sure path is correct

// Props might be added later for animation refinement if needed
interface InteractiveWireframeProps {
  className?: string;
}

const InteractiveWireframe: React.FC<InteractiveWireframeProps> = ({ className = '' }) => {
  return (
    // Main container to position elements within
    <div className={`${styles.wireframeContainer} ${className}`}>

      {/* --- Desktop Card representation --- */}
      <div className={`${styles.element} ${styles.card}`}>
        {/* Inside the card: Image Placeholder */}
        <div className={`${styles.element} ${styles.imagePlaceholder}`}>
          <div className={styles.placeholderIcon}></div>
        </div>
        {/* Inside the card: Text Lines */}
        <div className={styles.textBlock}>
            <div className={`${styles.element} ${styles.textLine} ${styles.textLineMedium}`}></div>
            <div className={`${styles.element} ${styles.textLine} ${styles.textLineLong}`}></div>
            <div className={`${styles.element} ${styles.textLine} ${styles.textLineShort}`}></div>
        </div>
        {/* Inside the card: Button Placeholder */}
        <div className={`${styles.element} ${styles.button}`}>
            Submit
        </div>
      </div>

       {/* --- Mobile Frame representation --- */}
       <div className={`${styles.element} ${styles.mobileFrame}`}>
         <div className={styles.mobileScreen}>
           <div className={`${styles.mobileElement} ${styles.mobileHeader}`}></div>
           <div className={`${styles.mobileElement} ${styles.mobileImage}`}></div>
           <div className={`${styles.mobileElement} ${styles.mobileText}`}></div>
           <div className={`${styles.mobileElement} ${styles.mobileText} ${styles.short}`}></div>
         </div>
       </div>

      {/* --- Floating Chip elements --- */}
      <div className={`${styles.element} ${styles.chip} ${styles.chip1}`}>
         <span>UX</span>
      </div>
      <div className={`${styles.element} ${styles.chip} ${styles.chip2}`}>
         <span>Content</span>
      </div>

       {/* --- Floating Icon Circles --- */}
       <div className={`${styles.element} ${styles.iconCircle} ${styles.iconCircle1}`}>✓</div>
       <div className={`${styles.element} ${styles.iconCircle} ${styles.iconCircle2}`}>+</div>

       {/* --- Floating Platform & Tool Icons --- */}
       {/* Using a wrapper div for easier styling and positioning */}

       {/* Platform Icons */}
       <div className={`${styles.element} ${styles.iconWrapper} ${styles.platformIcon} ${styles.youtubeIcon}`}>
         <FaYoutube title="YouTube Icon" aria-hidden="true" /> {/* Added aria-hidden */}
       </div>
       <div className={`${styles.element} ${styles.iconWrapper} ${styles.platformIcon} ${styles.tiktokIcon}`}>
         <FaTiktok title="TikTok Icon" aria-hidden="true" />
       </div>
       <div className={`${styles.element} ${styles.iconWrapper} ${styles.platformIcon} ${styles.linkedinIcon}`}>
         <FaLinkedin title="LinkedIn Icon" aria-hidden="true" />
       </div>

       {/* Tool Icons */}
       <div className={`${styles.element} ${styles.iconWrapper} ${styles.toolIcon} ${styles.figmaIcon}`}>
         <FaFigma title="Figma Icon" aria-hidden="true" />
       </div>
       <div className={`${styles.element} ${styles.iconWrapper} ${styles.toolIcon} ${styles.reactIcon}`}>
         <FaReact title="React Icon" aria-hidden="true" />
       </div>
       <div className={`${styles.element} ${styles.iconWrapper} ${styles.toolIcon} ${styles.webflowIcon}`}>
         {/* Using FaDesktop as placeholder for Webflow */}
         <FaDesktop title="Webflow/Web Icon" aria-hidden="true" />
       </div>

    </div> // End wireframeContainer
  );
};

export default InteractiveWireframe;