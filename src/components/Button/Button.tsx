// src/components/Button/Button.tsx (No Changes)
import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void; // Optional click handler
  variant?: 'primary' | 'secondary' | 'text'; // Different button styles
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  type = 'button',
  className = '',
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
    </button>
  );
};

export default Button;