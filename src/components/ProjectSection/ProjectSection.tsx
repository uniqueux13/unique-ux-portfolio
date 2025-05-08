// src/components/TwoColumnSection/TwoColumnSection.tsx
import React from 'react';
import styles from './ProjectSection.module.css';
import Video from '../Video/Video'; // Import Video Component

interface ProjectSectionProps {
  children: React.ReactNode;
  imageSrc: string;  // Keep imageSrc - now handles video URLs too
  imageAlt: string;
  imageOnLeft?: boolean;
  className?: string;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({
  children,
  imageSrc,
  imageAlt,
  imageOnLeft = false,
  className = '',
}) => {
  const isYouTube = imageSrc.includes('youtube.com/embed'); // Check for YouTube URL

  return (
    <section className={`${styles.ProjectSection} ${className}`}>
      <div className={`${styles.content} ${imageOnLeft ? styles.contentRight : styles.contentLeft}`}>
        {children}
      </div>
      <div className={`${styles.imageContainer} ${imageOnLeft ? styles.imageLeft : styles.imageRight}`}>
        {/* Conditionally render Video or img based on isYouTube */}
        {isYouTube ? (
          <Video src={imageSrc} controls /> // Use Video component for YouTube
        ) : (
          <img src={imageSrc} alt={imageAlt} className={styles.image} /> // Use img for images
        )}
      </div>
    </section>
  );
};

export default ProjectSection;