import React from 'react';
import styles from './ImageGrid.module.css';
import Image from '../Image/Image';

interface ImageGridProps {
  children: React.ReactNode; // Accept children instead of an images array
  columns?: number;
  gap?: string | number;
  className?: string;
}

const ImageGrid: React.FC<ImageGridProps> = ({
  children,
  columns = 3,
  gap = 'var(--space-md)',
  className = '',
}) => {
  return (
    <div className={`${styles.imageGrid} ${className}`} style={{'--columns': columns, '--gap': gap} as React.CSSProperties}>
      {/* No mapping - directly render children */}
      {children}
    </div>
  );
};

export default ImageGrid;