// src/components/Footer/Footer.tsx (Cleaned up)
import React from 'react'; // Removed useEffect import
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  // --- Removed handleColorChange function ---
  // --- Removed useEffect hook for loading color ---

  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Unique UX. All rights reserved.</p>
      {/* --- Removed Color Picker Wrapper, Label, and Input --- */}
    </footer>
  );
};

export default Footer;