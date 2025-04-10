// src/components/Navigation/Navigation.tsx (Full Version with Nav Links & Settings)
import React, { useState, useEffect, useRef } from 'react';
import styles from './Navigation.module.css';
import { Link } from 'react-router-dom';
import SettingsDropdown from '../SettingsDropdown/SettingsDropdown'; // Import SettingsDropdown
import { FaCog } from 'react-icons/fa'; // Import settings icon

// Interface for individual navigation items
interface NavItem {
  label: string;
  path: string;
}

// Interface for the component's props
interface NavigationProps {
  navItems?: NavItem[]; // Allow passing navItems as a prop (optional)
}

// Define the default navigation items right here
const defaultNavItems: NavItem[] = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Sketchbook', path: '/sketchbook' },
    // Add any other top-level pages here
];

const Navigation: React.FC<NavigationProps> = ({ navItems = defaultNavItems }) => { // Use the default array

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  // State holds the current primary color string (initialized/updated in useEffect)
  const [currentColor, setCurrentColor] = useState('#4a90e2');

  const settingsContainerRef = useRef<HTMLDivElement>(null); // Ref for click outside

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsSettingsOpen(false); // Close settings when toggling mobile menu
  };

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  // Close both menus (used when clicking a nav link)
  const closeMenus = () => {
      setIsMobileMenuOpen(false);
      setIsSettingsOpen(false);
  }

  // --- Color Application and Saving Logic ---
  const applyColor = (colorValue: string) => {
    if (!colorValue) return;
    document.documentElement.style.setProperty('--color-primary', colorValue);
    document.documentElement.style.setProperty('--color-link', colorValue);
    setCurrentColor(colorValue); // Update state
    try { localStorage.setItem('primaryColor', colorValue); }
    catch (error) { console.error("Error saving color:", error); }
  };
  // --- End Color Application Logic ---

  // Load saved/initial color on mount
  useEffect(() => {
    let initialColorVal = '#4a90e2'; // Default
    try { const savedColor = localStorage.getItem('primaryColor'); if (savedColor) initialColorVal = savedColor; }
    catch (error) { console.error("Error reading color:", error); }
    applyColor(initialColorVal);
  }, []);

  // Click outside logic for settings dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
        if (settingsContainerRef.current && !settingsContainerRef.current.contains(event.target as Node)) {
            setIsSettingsOpen(false);
        }
    };
    if (isSettingsOpen) { document.addEventListener('mousedown', handleClickOutside); }
    else { document.removeEventListener('mousedown', handleClickOutside); }
    return () => { document.removeEventListener('mousedown', handleClickOutside); };
   }, [isSettingsOpen]);

  return (
    <nav className={styles.navigation}>
       {/* Mobile Menu Button */}
      <button className={styles.menuButton} onClick={toggleMobileMenu} aria-label="Toggle menu" aria-expanded={isMobileMenuOpen}>
        <span className={styles.hamburgerIcon}>&#9776;</span>
      </button>

      {/* --- Navigation List --- */}
      {/* This ul contains your main page links */}
      <ul className={`${styles.navList} ${isMobileMenuOpen ? styles.open : ''}`}>
        {/* Map over the navItems array to create list items and links */}
        {navItems.map((item) => (
          <li key={item.path} className={styles.navItem}>
            {/* Use Link component for navigation, close menus on click */}
            <Link to={item.path} className={styles.navLink} onClick={closeMenus}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      {/* --- End Navigation List --- */}


      {/* Settings Dropdown Trigger and Panel */}
      {/* Use a ref wrapper for click-outside detection */}
      <div className={styles.settingsContainer} ref={settingsContainerRef}>
         {/* Settings Trigger Button */}
        <button className={styles.settingsButton} onClick={toggleSettings} aria-label="Theme settings" aria-expanded={isSettingsOpen}>
           <FaCog /> {/* Settings Icon */}
        </button>

         {/* Settings Dropdown Panel (Conditionally Rendered) */}
         {/* Make sure SettingsDropdown component exists and is imported */}
        <SettingsDropdown
           isOpen={isSettingsOpen}
           currentColor={currentColor} // Pass current color state
           onColorSelect={applyColor}   // Pass the combined apply/save function
        />
      </div>

    </nav>
  );
};

export default Navigation;