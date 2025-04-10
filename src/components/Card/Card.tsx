// src/components/Card/Card.tsx (Updated)
import React from 'react';
import styles from './Card.module.css';

// --- MODIFICATION START ---
// Update CardProps to include all standard HTML attributes for a div element.
// This automatically includes onClick, onKeyPress, aria-*, data-*, etc.
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  // children is already part of HTMLAttributes, but defining it explicitly is fine.
  children: React.ReactNode;
  // className is also part of HTMLAttributes, kept for clarity.
  className?: string;
  // You can add any other Card-specific custom props here if needed in the future
}
// --- MODIFICATION END ---

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  // --- MODIFICATION START ---
  // Use the rest operator (...) to gather all other props passed to the Card
  ...rest
  // --- MODIFICATION END ---
}) => {
  // Combine the base card style with any custom className provided
  const cardClasses = `${styles.card} ${className}`;

  return (
    // --- MODIFICATION START ---
    // Spread the collected 'rest' props onto the underlying div element.
    // This passes down onClick, onKeyPress, aria-*, etc.
    <div className={cardClasses} {...rest}>
    {/* --- MODIFICATION END --- */}
      {children}
    </div>
  );
};

export default Card;