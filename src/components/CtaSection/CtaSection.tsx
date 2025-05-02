// src/components/CtaSection/CtaSection.tsx
import React from 'react';
import styles from './CtaSection.module.css'; // Use local CSS Module
import Typography from '../Typography/Typography';
import Button from '../Button/Button';
import { Link } from 'react-router-dom'; // Keep for Calendly Button

interface CtaSectionProps {
  // Add props here later if you need to customize title, text, link, email etc.
  className?: string;
}

// Consider renaming this component to ContactSection if it fits better
const CtaSection: React.FC<CtaSectionProps> = ({ className = '' }) => {
  return (
    // Renaming the class might be good too, e.g., styles.contactSection
    <div className={`${styles.ctaSection} ${className}`}>
      {/* --- Contact Information Sub-section --- */}
      <Typography variant="h3" className={styles.contactHeading}>
        Contact Information
      </Typography>
      <Typography variant="p" className={styles.contactIntro}>
        Fill out the form or contact me directly using the information below.
      </Typography>

      {/* Grid for Contact Details */}
      <div className={styles.contactGrid}>
        <div className={styles.contactItem}>
          <Typography variant="caption" className={styles.contactLabel}>Location</Typography>
          <Typography variant="p" className={styles.contactValue}>San Francisco, CA</Typography>
        </div>
        <div className={styles.contactItem}>
          <Typography variant="caption" className={styles.contactLabel}>Email</Typography>
          <Typography variant="p" className={styles.contactValue}>
            {/* Make email clickable */}
            <a href="mailto:hello@uniqueux.com" className={styles.contactLink}>
              hello@uniqueux.com
            </a>
          </Typography>
        </div>
        <div className={styles.contactItem}>
          <Typography variant="caption" className={styles.contactLabel}>Phone</Typography>
          <Typography variant="p" className={styles.contactValue}>
             {/* Make phone clickable */}
             <a href="tel:+11234567890" className={styles.contactLink}>
               +1 (123) 456-7890
             </a>
          </Typography>
        </div>
      </div>


      {/* --- Original CTA Button --- */}
      <Link
        to="https://calendly.com/kyleranta/15min"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.ctaButtonLink} // Use for margin/spacing if needed
      >
        <Button variant="primary" arrow>Book a Discovery Call</Button>
      </Link>

      {/* Removed the old uniqueux13@gmail.com Typography element */}

    </div>
  );
};

export default CtaSection;