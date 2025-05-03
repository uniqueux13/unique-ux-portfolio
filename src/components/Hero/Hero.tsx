// src/components/Hero/Hero.tsx (Updated)
import React, { useMemo } from 'react'; // Removed useRef, useEffect
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaStar } from "react-icons/fa";

import styles from './Hero.module.css';
import Typography from '../Typography/Typography';
import Button from '../Button/Button';

// --- Corrected SVG Imports (using ?react suffix for Vite/modern setups) ---
import ImportedUxSvg from '../../assets/UX.svg?react';

// Assign types explicitly for clarity with ?react suffix
const UxSvg: React.FC<React.SVGProps<SVGSVGElement>> = ImportedUxSvg;

// --- Constants ---
const HERO_KEYWORDS: string[] = [
  "Intuitive Design & UX",
  "High-Performance Web Development",
  "Engaging Content Creation (Video & Written)"
];

// --- Component Props Interface ---
interface HeroProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  showButton?: boolean; // Note: This prop isn't currently used in the logic, consider removing if not needed
  buttonText?: string;
  buttonLink?: string;
  buttonArrow?: boolean;
  className?: string;
  rating?: number | string;
  testimonial?: string;
  testimonialAuthor?: string;
}

// --- Helper Component for Rating Stars ---
interface RatingStarsProps {
  ratingValue: number | string;
}
const RatingStars: React.FC<RatingStarsProps> = React.memo(({ ratingValue }) => {
  const ratingNumber = Number(ratingValue) || 0;
  const fullStars = Math.floor(ratingNumber);
  return (
    <div className={styles.rating}>
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`star-${i}`} className={styles.starIcon} />
      ))}
      <span className={styles.ratingText}>{ratingNumber.toFixed(1)}</span>
    </div>
  );
});

// --- Main Hero Component ---
const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  eyebrow,
  buttonText = 'Schedule a Free Consultation',
  buttonLink = 'https://calendly.com/kyleranta/15min',
  buttonArrow = true,
  className = '',
  rating,
  testimonial,
  testimonialAuthor,
}) => {
  // Removed: heroRef and useEffect for mouse move effect

  // Memoize Keywords List
  const keywordsList = useMemo(() => (
    <ul className={styles.keywordsList}>
      {HERO_KEYWORDS.map((keyword) => (
        <li key={keyword} className={styles.keywordItem}>
          <FaCheckCircle className={styles.keywordIcon} aria-hidden="true" />
          <span>{keyword}</span>
        </li>
      ))}
    </ul>
  ), []); // Empty dependency array is correct here as HERO_KEYWORDS is constant

  // Prepare Social Proof Content
  const socialProofContent = testimonial ? (
    <div className={styles.socialProof}>
      {rating && <RatingStars ratingValue={rating} />}
      {/* Using variant="p" as confirmed valid */}
      <Typography variant="p" className={styles.testimonialText}>
        “{testimonial}”
      </Typography>
      {testimonialAuthor && (
        <Typography variant="caption" className={styles.testimonialAuthor}>
          – {testimonialAuthor}
        </Typography>
      )}
    </div>
  ) : null;

  return (
    // Removed ref={heroRef} from this div
    <div className={`${styles.heroContent} ${className}`}>
      <div className={styles.heroLayoutContainer}>

        {/* === Text Content Column === */}
        <div className={styles.heroTextContent}>
          {eyebrow && (
            <Typography variant="caption" className={styles.heroEyebrow}>
              {eyebrow}
            </Typography>
          )}
          <Typography variant="h1" className={styles.heroTitle}>
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="p" className={styles.heroSubtitle}>
              {subtitle}
            </Typography>
          )}
          {keywordsList}
          <Link
            to={buttonLink}
            {...(buttonLink.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className={styles.heroButtonWrapper}
          >
            <Button variant="primary" arrow={buttonArrow}>
              {buttonText}
            </Button>
          </Link>
        </div>

        {/* === Image Content Column === */}
        <div className={styles.heroImageContent}>
          <div className={styles.imageAndProofWrapper}>
            {/* SVG rendering remains the same, styling handled in CSS */}
            <UxSvg className={styles.heroSvg} aria-label="Visual representation" />
            {/* Social Proof Rendered Here */}
            {socialProofContent}
          </div>
        </div>

      </div> {/* End heroLayoutContainer */}
    </div> // End heroContent
  );
};

export default Hero;