// src/components/Hero/Hero.tsx (Simplified)
import React from 'react'; // Removed useRef, useEffect
import styles from './Hero.module.css';
import Typography from '../Typography/Typography';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

// SVG Import (Keep the working import)
import ImportedUxSvg from '../../assets/UX.svg?react';
const UxSvg: React.FC<React.SVGProps<SVGSVGElement>> = ImportedUxSvg;

// Props Interface (Unchanged)
interface HeroProps {
  title: string;
  subtitle?: string;
  showButton?: boolean;
  buttonText?: string;
  buttonLink?: string;
  buttonArrow?: boolean;
  className?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  showButton = true,
  buttonText = 'Learn More',
  buttonLink = '/',
  buttonArrow = true,
  className = '',
}) => {
  // Removed heroRef
  // Removed useEffect for mouse listeners

  return (
    // Removed ref from div
    <div className={`${styles.heroContent} ${styles.heroLayoutContainer} ${className}`}>

      {/* Text Content Column */}
      <div className={styles.heroTextContent}>
        <Typography variant="h1" className={styles.heroTitle}>
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="subtitle1" className={styles.heroSubtitle}>
            {subtitle}
          </Typography>
        )}
        {showButton && buttonLink && (
          <Link to={buttonLink} className={styles.heroButtonWrapper}>
            <Button variant="primary" arrow={buttonArrow}>
              {buttonText}
            </Button>
          </Link>
        )}
      </div>

      {/* Image Content Column */}
      <div className={styles.heroImageContent}>
        <UxSvg
            className={styles.heroSvg}
            aria-label="UX logo mark"
        />
      </div>

    </div>
  );
};

export default Hero;