// src/components/CtaSection/CtaSection.tsx
import React from 'react';
import styles from './CtaSection.module.css'; // Use local CSS Module
import Typography from '../Typography/Typography';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

interface CtaSectionProps {
  // Add props here later if you need to customize title, text, link, email etc.
  className?: string;
}

const CtaSection: React.FC<CtaSectionProps> = ({ className = '' }) => {
  return (
    <div className={`${styles.ctaSection} ${className}`}>
      <Typography variant="h2" className={styles.ctaTitle}>
        Ready to Create Something Unique?
      </Typography>
      <Typography variant="p" className={styles.ctaSubtitle}>
        Let's collaborate to build a digital experience that transforms your business and delights your users.
      </Typography>
      <Link
        to="https://calendly.com/kyleranta/15min"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.ctaButtonLink} // Add class for potential spacing
      >
        <Button variant="primary" arrow>Let’s Talk UX Strategy</Button>
      </Link>
      <Typography variant="listItem" align="center" className={styles.emailContact}>
        uniqueux13@gmail.com
      </Typography>
    </div>
  );
};

export default CtaSection;