// src/components/Navigation/Navigation.tsx (Updated for Settings Dropdown)
import React, { useState, useEffect, useRef } from 'react'; // Added useEffect, useRef
import styles from './Navigation.module.css';
import { Link } from 'react-router-dom';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import SettingsDropdown from '../SettingsDropdown/SettingsDropdown'; // Import new component
import { FaCog } from 'react-icons/fa'; // Import settings icon

interface NavItem {
  label: string;
  path: string;
}

interface NavigationProps {
  navItems?: NavItem[];
}

const Navigation: React.FC<NavigationProps> = ({ navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Sketchbook', path: '/sketchbook' },
] }) => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // --- State for Settings Dropdown ---
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  // State to hold the current primary color for the picker
  const [currentColor, setCurrentColor] = useState('#4a90e2'); // Initialize with default

  const settingsContainerRef = useRef<HTMLDivElement>(null); // Ref for click outside

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsSettingsOpen(false); // Close settings when toggling mobile menu
  };

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const closeMenus = () => {
      setIsMobileMenuOpen(false);
      setIsSettingsOpen(false);
  }

  // --- Color Picker Logic (Moved from Footer) ---
  const applyColor = (colorValue: string) => {
    document.documentElement.style.setProperty('--color-primary', colorValue);
    document.documentElement.style.setProperty('--color-link', colorValue); // Assuming link color matches
    setCurrentColor(colorValue); // Update state for the input value
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value;
    applyColor(newColor);
    try {
        localStorage.setItem('primaryColor', newColor);
    } catch (error) { console.error("Error saving color:", error); }
  };

  // Load saved/initial color on mount
  useEffect(() => {
    let initialColorVal = '#4a90e2'; // Default
    try { const savedColor = localStorage.getItem('primaryColor'); if (savedColor) initialColorVal = savedColor; }
    catch (error) { console.error("Error reading color:", error); }
    applyColor(initialColorVal); // Apply on load
  }, []);
  // --- End Color Picker Logic ---

  // --- Logic to close dropdown when clicking outside ---
   useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (settingsContainerRef.current && !settingsContainerRef.current.contains(event.target as Node)) {
                setIsSettingsOpen(false); // Close if click is outside the settings container
            }
        };
        // Add listener if dropdown is open
        if (isSettingsOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        // Cleanup listener on component unmount or when dropdown closes
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
   }, [isSettingsOpen]); // Re-run effect when isSettingsOpen changes
   // --- End Click Outside Logic ---

  return (
    // Add position relative if needed, or handle in settingsContainer
    <nav className={styles.navigation}>
       {/* Mobile Menu Button */}
      <button className={styles.menuButton} onClick={toggleMobileMenu} aria-label="Toggle menu" aria-expanded={isMobileMenuOpen}>
        <span className={styles.hamburgerIcon}>&#9776;</span>
      </button>

      {/* Navigation List (Mobile slide-in / Desktop row) */}
      <ul className={`${styles.navList} ${isMobileMenuOpen ? styles.open : ''}`}>
        {navItems.map((item, index) => (
          <li key={index} className={styles.navItem}>
            <Link to={item.path} className={styles.navLink} onClick={closeMenus}>{item.label}</Link>
          </li>
        ))}
         {/* Remove DarkModeToggle from here if it's ONLY in settings */}
         {/*
         <li className={styles.navItem}>
            <DarkModeToggle />
         </li>
         */}
      </ul>

       {/* Settings Dropdown Trigger and Panel - Place after UL for desktop layout */}
       {/* Use a ref wrapper for click-outside detection */}
      <div className={styles.settingsContainer} ref={settingsContainerRef}>
         {/* Settings Trigger Button */}
        <button className={styles.settingsButton} onClick={toggleSettings} aria-label="Theme settings" aria-expanded={isSettingsOpen}>
           <FaCog /> {/* Settings Icon */}
        </button>

         {/* Settings Dropdown Panel (Conditionally Rendered) */}
        <SettingsDropdown
           isOpen={isSettingsOpen}
           initialColor={currentColor} // Pass current color state
           onColorChange={handleColorChange} // Pass handler
        />
      </div>

    </nav>
  );
};

export default Navigation;