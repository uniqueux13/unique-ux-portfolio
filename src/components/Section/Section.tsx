// src/components/Section/Section.tsx
import React from 'react';
import styles from './Section.module.css';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg' | 'xl' | 'none';
  marginBottom?: 'sm' | 'md' | 'lg' | 'xl' | 'none'; // Add marginBottom prop
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  padding = 'md',
  marginBottom = 'md', // Default marginBottom
}) => {
  const sectionClassName = `${styles.section} ${
    styles[`padding-${padding}`]
  } ${className} ${styles[`margin-bottom-${marginBottom}`]}`; // Add marginBottom class

  return (
    <section className={sectionClassName}>
      {children}
    </section>
  );
};

export default Section;