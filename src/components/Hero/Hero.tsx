// src/components/Hero/Hero.tsx (Simplified - No Theme Prop Needed)
import React, { useState, useCallback, useEffect } from 'react'; // Keep hooks for particles
import styles from './Hero.module.css';
import Typography from '../Typography/Typography';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

// Particle Imports
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Engine, ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import particlesDarkConfig from './particles-dark.config';

// SVG Import
import ImportedUxSvg from '../../assets/UX.svg?react';
const UxSvg: React.FC<React.SVGProps<SVGSVGElement>> = ImportedUxSvg;

// Props Interface (REMOVED currentTheme)
interface HeroProps {
  title: string;
  subtitle?: string;
  showButton?: boolean;
  buttonText?: string;
  buttonLink?: string;
  buttonArrow?: boolean;
  className?: string;
  // currentTheme prop is removed
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  showButton = true,
  buttonText = 'Learn More',
  buttonLink = '/',
  buttonArrow = true,
  className = '',
  // currentTheme prop removed from parameters
}) => {
  const [particlesInitialized, setParticlesInitialized] = useState(false);

  // Initialize Particle Engine (Unchanged)
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

   // Ensures engine loads only once (Unchanged)
   useEffect(() => {
       initParticlesEngine(particlesInit).then(() => {
           setParticlesInitialized(true);
       });
   }, [particlesInit]);

  return (
    // Main container div
    <div className={`${styles.heroContent} ${styles.heroLayoutContainer} ${className}`}>

       {/* Render Particles IF Initialized (No theme check needed in JS) */}
       {/* Visibility is controlled by CSS rule: [data-theme="light"] .particlesCanvas { display: none; } */}
      {particlesInitialized && (
         <Particles
            id="tsparticles-hero"
            options={particlesDarkConfig as ISourceOptions}
            className={styles.particlesCanvas}
         />
      )}

      {/* Text Content Column */}
      <div className={styles.heroTextContent}>
        <Typography variant="h1" className={styles.heroTitle}> {title} </Typography>
        {subtitle && ( <Typography variant="subtitle1" className={styles.heroSubtitle}> {subtitle} </Typography> )}
        {showButton && buttonLink && ( <Link to={buttonLink} className={styles.heroButtonWrapper}> <Button variant="primary" arrow={buttonArrow}> {buttonText} </Button> </Link> )}
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