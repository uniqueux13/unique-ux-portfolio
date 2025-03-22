import React, { useState, useEffect } from 'react';
import styles from './DarkModeToggle.module.css';
import { FaSun, FaMoon } from 'react-icons/fa';

interface DarkModeToggleProps {
    className?: string; //For adding to parent
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({className = ""}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDarkMode);
      document.documentElement.setAttribute('data-theme', prefersDarkMode ? 'dark' : 'light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className={`${styles.toggleButton} ${className}`} //Added classname
      aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"} // ARIA label
      aria-pressed={isDarkMode} // Indicate pressed state
    >
      <span className={styles.icon}>
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </span>
      <span className={styles.labelText}>
        {isDarkMode ? 'Light' : 'Dark'} {/* Text label */}
      </span>
    </button>
  );
};

export default DarkModeToggle;