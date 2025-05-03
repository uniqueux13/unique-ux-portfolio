// src/components/Hero/Hero.tsx (Final Version with InteractiveWireframe)

// Added useRef, useEffect back for mouse tracking
import React, { useMemo, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaStar } from "react-icons/fa";

import styles from './Hero.module.css';
import Typography from '../Typography/Typography';
import Button from '../Button/Button';

// --- REMOVED SVG Imports ---
// import ImportedUxSvg from '../../assets/UX.svg?react';
// const UxSvg: React.FC<React.SVGProps<SVGSVGElement>> = ImportedUxSvg;

// --- IMPORT New Component ---
// Make sure the path to your new component is correct
import InteractiveWireframe from '../InteractiveWireframe/InteractiveWireframe';

// --- Constants (Unchanged) ---
const HERO_KEYWORDS: string[] = [
    "Intuitive Design & UX",
    "High-Performance Web Development",
    "Engaging Content Creation (Video & Written)"
];

// --- Component Props Interface (Unchanged) ---
interface HeroProps {
    title: string;
    subtitle?: string;
    eyebrow?: string;
    showButton?: boolean; // Note: This prop isn't currently used in the logic
    buttonText?: string;
    buttonLink?: string;
    buttonArrow?: boolean;
    className?: string;
    rating?: number | string;
    testimonial?: string;
    testimonialAuthor?: string;
}

// --- Helper Component for Rating Stars (Unchanged) ---
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
    // Add ref for mouse tracking on the hero container
    const heroRef = useRef<HTMLDivElement>(null);

    // --- Add Effect for Mouse Coordinate Tracking (Sets CSS Variables) ---
    useEffect(() => {
        const heroElement = heroRef.current;
        if (!heroElement) return; // Guard clause if ref is not attached yet

        const handleMouseMove = (event: MouseEvent) => {
            if (!heroElement) return; // Check ref inside handler too
            const rect = heroElement.getBoundingClientRect();
            // Calculate normalized coordinates (-0.5 to 0.5) relative to the hero center
            const x = ((event.clientX - rect.left) / rect.width) - 0.5;
            const y = ((event.clientY - rect.top) / rect.height) - 0.5;

            // Set CSS custom properties on the hero element itself
            heroElement.style.setProperty('--hero-mouse-x', x.toFixed(3));
            heroElement.style.setProperty('--hero-mouse-y', y.toFixed(3));
        };

        const handleMouseLeave = () => {
             if (!heroElement) return;
            // Reset CSS custom properties when mouse leaves
            heroElement.style.setProperty('--hero-mouse-x', '0');
            heroElement.style.setProperty('--hero-mouse-y', '0');
        };

        // Add event listeners
        heroElement.addEventListener('mousemove', handleMouseMove);
        heroElement.addEventListener('mouseleave', handleMouseLeave);

        // Cleanup function to remove event listeners when component unmounts
        return () => {
            heroElement?.removeEventListener('mousemove', handleMouseMove);
            heroElement?.removeEventListener('mouseleave', handleMouseLeave);
            // Optional: Reset styles explicitly on unmount
            // heroElement?.style.removeProperty('--hero-mouse-x');
            // heroElement?.style.removeProperty('--hero-mouse-y');
        };
    }, []); // Empty dependency array ensures this effect runs only once on mount/unmount


    // Memoize Keywords List (Unchanged)
    const keywordsList = useMemo(() => (
        <ul className={styles.keywordsList}>
            {HERO_KEYWORDS.map((keyword) => (
                <li key={keyword} className={styles.keywordItem}>
                    <FaCheckCircle className={styles.keywordIcon} aria-hidden="true" />
                    <span>{keyword}</span>
                </li>
            ))}
        </ul>
    ), []);

    // Prepare Social Proof Content (Unchanged)
    const socialProofContent = testimonial ? (
        <div className={styles.socialProof}>
            {rating && <RatingStars ratingValue={rating} />}
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
        // Add ref to the main container for mouse tracking
        <div className={`${styles.heroContent} ${className}`} ref={heroRef}>
            <div className={styles.heroLayoutContainer}>

                {/* === Text Content Column (Unchanged) === */}
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
                        // Using 'p' variant as per your last provided code
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

                {/* === Image Content Column (Updated) === */}
                <div className={styles.heroImageContent}>
                    <div className={styles.imageAndProofWrapper}>

                        {/* <<< RENDER NEW COMPONENT INSTEAD OF SVG >>> */}
                        {/* Added a className for potential specific styling via Hero.module.css */}
                        <InteractiveWireframe className={styles.heroIllustration} />
                        {/* The animation logic inside InteractiveWireframe would later need to */}
                        {/* read the --hero-mouse-x and --hero-mouse-y CSS variables set above, */}
                        {/* or receive coordinates as props if you prefer that method. */}

                        {/* Social Proof Rendered Here (Unchanged) */}
                        {socialProofContent}
                    </div>
                </div>

            </div> {/* End heroLayoutContainer */}
        </div> // End heroContent
    );
};

export default Hero;