import React, { useState } from 'react';
import styles from './Navigation.module.css';
import { Link } from 'react-router-dom'; // Import Link
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'; // Import it!

interface NavItem {
  label: string;
  path: string;
}

interface NavigationProps {
    navItems?: NavItem[]; //Array of Nav Items
}

const Navigation: React.FC<NavigationProps> = ({navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Contact', path: '/contact' },
  ]}) => {  //Provide Default Value

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navigation}>
      <button className={styles.menuButton} onClick={toggleMenu}>
        {/* Hamburger Icon or "Menu" text */}
        <span className={styles.hamburgerIcon}>&#9776;</span>
      </button>

      <ul className={`${styles.navList} ${isOpen ? styles.open : ''}`}>
        {navItems.map((item, index) => (
          <li key={index} className={styles.navItem}>
           <Link to={item.path} className={styles.navLink} onClick={()=>{setIsOpen(false)}}>{item.label}</Link>
          </li>
        ))}
      </ul>
      <DarkModeToggle className={styles.darkModeToggle} />
    </nav>
  );
};

export default Navigation;