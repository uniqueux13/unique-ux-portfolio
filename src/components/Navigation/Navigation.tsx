// src/components/Navigation/Navigation.tsx
import React, { useState } from 'react';
import styles from './Navigation.module.css';
import { Link } from 'react-router-dom';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';

interface NavItem {
  label: string;
  path: string;
}

interface NavigationProps {
    navItems?: NavItem[];
}

const Navigation: React.FC<NavigationProps> = ({navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Sketchbook', path: '/sketchbook' }, // Add this line!
  ]}) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navigation}>
      <button className={styles.menuButton} onClick={toggleMenu}>
        <span className={styles.hamburgerIcon}>&#9776;</span>
      </button>

      <ul className={`${styles.navList} ${isOpen ? styles.open : ''}`}>
        {navItems.map((item, index) => (
          <li key={index} className={styles.navItem}>
           <Link to={item.path} className={styles.navLink} onClick={()=>{setIsOpen(false)}}>{item.label}</Link>
          </li>
        ))}
        {/* --- ADD THE TOGGLE INSIDE THE ul --- */}
        <li className={styles.navItem}>
            <DarkModeToggle />
        </li>

      </ul>
        {/* REMOVE DarkModeToggle from here */}
      {/*<DarkModeToggle className={styles.darkModeToggle} /> */}
    </nav>
  );
};

export default Navigation;