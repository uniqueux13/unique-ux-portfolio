// src/components/Hero/Hero.tsx (Mouse Following Gradient Spotlight)
import React, { useRef, useEffect } from 'react'; // Added useRef, useEffect back
import styles from './Hero.module.css';
import Typography from '../Typography/Typography';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

// REMOVED Particle Imports

// SVG Import (Keep)
import ImportedUxSvg from '../../assets/UX.svg?react';
const UxSvg: React.FC<React.SVGProps<SVGSVGElement>> = ImportedUxSvg;

// Keep Checkmark Import
import { FaCheckCircle } from "react-icons/fa";

// Props Interface
interface HeroProps {
  title: string;
  subtitle?: string;
  showButton?: boolean;
  buttonText?: string;
  buttonLink?: string;
  buttonArrow?: boolean;
  className?: string;
  // Removed currentTheme prop as it's not needed for this effect
}

// Keep Keywords
const heroKeywords = ["Actionable UX consulting that unlocks growth.", "Future-ready AI features that elevate experience.", "Strategic content design that builds brand trust."];

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  buttonText = 'Book a Free Consultation', // Keep updated defaults
  buttonLink = 'https://calendly.com/kyleranta/15min',
  buttonArrow = true,
  className = '',
}) => {
  // --- Re-added Ref for mouse tracking ---
  const heroRef = useRef<HTMLDivElement>(null);

  // --- Re-added useEffect for Mouse Listener ---
  useEffect(() => {
    const heroElement = heroRef.current;
    if (!heroElement) return;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = heroElement.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) - 0.5;
      const y = ((event.clientY - rect.top) / rect.height) - 0.5;
      // Update CSS variables controlling the gradient position
      heroElement.style.setProperty('--mouse-x', x.toFixed(2));
      heroElement.style.setProperty('--mouse-y', y.toFixed(2));
    };

    const handleMouseLeave = () => {
      // Reset position when mouse leaves
      heroElement.style.setProperty('--mouse-x', '0');
      heroElement.style.setProperty('--mouse-y', '0');
    };

    heroElement.addEventListener('mousemove', handleMouseMove);
    heroElement.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup function
    return () => {
      heroElement.removeEventListener('mousemove', handleMouseMove);
      heroElement.removeEventListener('mouseleave', handleMouseLeave);
      
    };
  }, []); // Empty dependency array means this effect runs only once

  // --- Removed particle state and init logic ---

  return (
    // Attach the ref to the main div
    <div className={`${styles.heroContent} ${styles.heroLayoutContainer} ${className}`} ref={heroRef}>

      {/* --- Removed Conditional Particle Rendering --- */}

      {/* Text Content Column */}
      <div className={styles.heroTextContent}>
        <Typography variant="h1" className={styles.heroTitle}> {title} </Typography>
        {subtitle && ( <Typography variant="subtitle1" className={styles.heroSubtitle}> {subtitle} </Typography> )}
        <ul className={styles.keywordsList}>
            {heroKeywords.map((keyword) => (
                <li key={keyword} className={styles.keywordItem}>
                    <FaCheckCircle className={styles.keywordIcon} aria-hidden="true" />
                    <span>{keyword}</span>
                </li>
            ))}
        </ul>
        <Link
            to={buttonLink}
            {...(buttonLink.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className={styles.heroButtonWrapper}
        >
            <Button variant="primary" arrow={buttonArrow}> {buttonText} </Button>
        </Link>
      </div>

            
      {/* Image Content Column */}
      <div className={styles.heroImageContent}>
        <UxSvg className={styles.heroSvg} aria-label="UX logo mark" />
      </div>

    </div>
  );
};

export default Hero;