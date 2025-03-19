import React from 'react';
import styles from './Typography.module.css';

interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'subtitle1' | 'subtitle2';
  children: React.ReactNode;
  className?: string; // Allow for additional custom styling
  align?: 'left' | 'center' | 'right' | 'justify';
}

const Typography: React.FC<TypographyProps> = ({ variant, children, className = '', align = 'left' }) => {

  // Correctly map variants to HTML tags
  const getTag = (variant: TypographyProps['variant']) => {
    switch (variant) {
      case 'h1': return 'h1';
      case 'h2': return 'h2';
      case 'h3': return 'h3';
      case 'h4': return 'h4';
      case 'h5': return 'h5';
      case 'h6': return 'h6';
      case 'p': return 'p';
      case 'span': return 'span';
      case 'subtitle1': return 'h6'; // Use h6 for subtitles (or p, div, etc. - your choice)
      case 'subtitle2': return 'h6'; // Use h6 for subtitles (or p, div, etc. - your choice)
      default: return 'p'; // Fallback to paragraph
    }
  };

  const Tag = getTag(variant);

  const combinedClassName = `${styles[variant]} ${className} ${styles[`align-${align}`]}`;


  return (
    <Tag className={combinedClassName}>
      {children}
    </Tag>
  );
};

export default Typography;