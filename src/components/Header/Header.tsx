// src/components/Header/Header.tsx
import React from 'react';
import styles from './Header.module.css';
import Navigation from '../Navigation/Navigation';
import logo from '../../assets/logo.svg'; // Make sure this path is correct

interface HeaderProps {
  siteTitle: string;
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}> {/* Use logoContainer */}
        <img src={logo} alt="Unique UX Logo" className={styles.logoImage} />
        <span className={styles.siteTitle}>{siteTitle}</span> {/* Add siteTitle span */}
      </div>
      <Navigation />
    </header>
  );
};

export default Header;