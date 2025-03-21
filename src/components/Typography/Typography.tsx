// src/components/Typography/Typography.tsx
import React from 'react';
import styles from './Typography.module.css';

interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'subtitle1' | 'subtitle2' | 'span' | 'heroP' | 'caption'; // Add heroP and caption
  children: React.ReactNode;
  className?: string;
  align?: 'left' | 'center' | 'right' | 'justify';
}

const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  className = '',
  align = 'left',
}) => {
  let Element: React.ElementType = 'p'; // Default to <p>
  let variantClass = styles.p;    // Default class

  switch (variant) {
    case 'h1':
      Element = 'h1';
      variantClass = styles.h1;
      break;
    case 'h2':
      Element = 'h2';
      variantClass = styles.h2;
      break;
    case 'h3':
      Element = 'h3';
      variantClass = styles.h3;
      break;
    case 'h4':
        Element = 'h4';
        variantClass = styles.h4;
        break;
    case 'h5':
        Element = 'h5';
        variantClass = styles.h5;
        break;
    case 'h6':
        Element = 'h6';
        variantClass = styles.h6;
        break;
    case 'subtitle1':
      Element = 'p'; //  Use <p> for subtitles
      variantClass = styles.subtitle1;
      break;
    case 'subtitle2':
      Element = 'p';
      variantClass = styles.subtitle2;
      break;
    case 'span':
      Element = 'span';
      variantClass = styles.span;
      break;
    case 'p':
        Element = 'p';
        variantClass = styles.p;
        break;
    case 'heroP':
        Element = 'p';  // Still a paragraph element
        variantClass = styles.heroP; // Use the heroP class
        break;
    case 'caption':
        Element = 'p'; //Captions are p tags
        variantClass = styles.caption;
        break;
    default: //If no variant given.
        Element = 'p';
        variantClass = styles.p;
        break;
  }

  const alignmentClass = styles[`align-${align}`]; // Dynamic alignment class

  return (
    <Element className={`${variantClass} ${alignmentClass} ${className}`}>
      {children}
    </Element>
  );
};

export default Typography;