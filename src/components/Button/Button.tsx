// src/components/Button/Button.tsx
import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'text';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  arrow?: boolean; // Add the arrow prop
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  type = 'button',
  className = '',
  arrow = false, // Default to no arrow
}) => {
  const buttonClassName = `${styles.button} ${styles[variant]} ${className} ${
    disabled ? styles.disabled : ''
  }`;

  return (
    <button
      type={type}
      className={buttonClassName}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      {arrow && <span> &#10132;</span>} {/* Conditionally render the arrow */}
      {/* OR, using the Unicode character directly: */}
      {/* {arrow && <span> ➔</span>} */}
    </button>
  );
};

export default Button;