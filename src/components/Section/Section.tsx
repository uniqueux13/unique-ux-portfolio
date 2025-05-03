// src/components/Section/Section.tsx (Updated based on your provided code)
import React from 'react';
import styles from './Section.module.css'; // Assuming './Section.module.css' is correct

// Define allowed size values for props - ensure it includes all needed values
type Size = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  padding?: Size; // Use updated Size type
  marginBottom?: Size; // Use updated Size type
  marginBlock?: Size; // Use updated Size type (already defined in your interface)
 // Add other props like 'as', 'id' etc. here if needed later
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  padding = 'md',
  marginBottom = 'md', // Default marginBottom
  marginBlock = 'none', // << 1. ADDED: Accept marginBlock prop, default it to 'none'
}) => {

  // 2. MODIFY: Construct className to include the marginBlock style
  // Note: If marginBlock ('md') and marginBottom ('md') are both used,
  // the actual bottom margin might be larger. Consider using only one for clarity.
  const sectionClassName = `${styles.section} ${
    styles[`padding-${padding}`]
  } ${styles[`margin-bottom-${marginBottom}`]} ${ // Keep existing marginBottom class
    styles[`margin-block-${marginBlock}`]      // << ADD the marginBlock class here
  } ${className}`.replace(/\s+/g, ' ').trim(); // Combine classes and clean up potential extra spaces

  return (
    <section className={sectionClassName}>
      {children}
    </section>
  );
};

export default Section;