// src/components/Section/Section.tsx
import React from 'react';
import styles from './Section.module.css';

interface SectionProps {
  children: React.ReactNode;
  className?: string; // Allow for custom styling
  padding?: 'sm' | 'md' | 'lg' | 'xl' | 'none'; // Optional padding prop
}

const Section: React.FC<SectionProps> = ({ children, className = '', padding = 'md' }) => {
  const sectionClassName = `${styles.section} ${styles[`padding-${padding}`]} ${className}`;

  return (
    <section className={sectionClassName}>
      {children}
    </section>
  );
};

export default Section;