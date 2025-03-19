// src/components/Header/Header.tsx
import React from 'react';
import styles from './Header.module.css';
import Navigation from '../Navigation/Navigation';
import logo from '../../assets/logo.svg'; // Import your logo.  Adjust path if needed.

interface HeaderProps{
    siteTitle: string;
}

const Header: React.FC<HeaderProps> = ({siteTitle}) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Unique UX Logo" className={styles.logoImage} /> {/* Use the imported logo */}
      </div>
      <Navigation />
    </header>
  );
};

export default Header;