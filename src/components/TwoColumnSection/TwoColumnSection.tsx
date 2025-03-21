// src/components/TwoColumnSection/TwoColumnSection.tsx
import React from 'react';
import styles from './TwoColumnSection.module.css';

interface TwoColumnSectionProps {
  children: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  imageOnLeft?: boolean; // Prop to control image placement
  className?: string;
}

const TwoColumnSection: React.FC<TwoColumnSectionProps> = ({
  children,
  imageSrc,
  imageAlt,
  imageOnLeft = false, // Default: image on the right
  className = '',
}) => {
  return (
    <section className={`${styles.twoColumnSection} ${className}`}>
      <div className={`${styles.content} ${imageOnLeft ? styles.contentRight : styles.contentLeft}`}>
        {children}
      </div>
      <div className={`${styles.imageContainer}  ${imageOnLeft ? styles.imageLeft : styles.imageRight}`}>
        <img src={imageSrc} alt={imageAlt} className={styles.image} />
      </div>
    </section>
  );
};

export default TwoColumnSection;