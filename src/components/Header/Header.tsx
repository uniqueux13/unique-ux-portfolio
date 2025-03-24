// src/components/Header/Header.tsx
import React from 'react';
import styles from './Header.module.css';
import Navigation from '../Navigation/Navigation';
import logo from '../../assets/logo.svg'; // Make sure this path is correct
import { Link } from 'react-router-dom';

interface HeaderProps {
  siteTitle: string;
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => {
  return (
    <header className={styles.header}>
       <Link to="/"> {/* Wrap the logo and title in a Link */}
      <div className={styles.logoContainer}>
          <img src={logo} alt="Unique UX Logo" className={styles.logoImage} />
          <span className={styles.siteTitle}>{siteTitle}</span>
      </div>
      </Link>
      <Navigation />
    </header>
  );
};

export default Header;