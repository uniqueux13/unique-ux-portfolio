// src/components/Navigation/Navigation.tsx (Complete - Includes hexToRgba & sets transparent scroller bg)
import React, { useState, useEffect, useRef } from 'react';
import styles from './Navigation.module.css';
import { Link } from 'react-router-dom';
import SettingsDropdown from '../SettingsDropdown/SettingsDropdown';
import { FaCog } from 'react-icons/fa';

// --- Utility Function defined directly in this file ---
/**
 * Converts a HEX color value to RGBA format.
 * @param hex The hex color string (e.g., "#RRGGBB" or "#RGB").
 * @param alpha The desired alpha value (0 to 1). Defaults to 1.
 * @returns The color in RGBA string format (e.g., "rgba(r, g, b, alpha)").
 */
function hexToRgba(hex: string, alpha: number = 1): string {
  // Remove '#' if present
  let cleanHex = hex.startsWith('#') ? hex.slice(1) : hex;

  let r: number = 0, g: number = 0, b: number = 0;

  // Handle shorthand hex (#RGB)
  if (cleanHex.length === 3) {
    r = parseInt(cleanHex[0] + cleanHex[0], 16);
    g = parseInt(cleanHex[1] + cleanHex[1], 16);
    b = parseInt(cleanHex[2] + cleanHex[2], 16);
  }
  // Handle standard hex (#RRGGBB)
  else if (cleanHex.length === 6) {
    r = parseInt(cleanHex.substring(0, 2), 16);
    g = parseInt(cleanHex.substring(2, 4), 16);
    b = parseInt(cleanHex.substring(4, 6), 16);
  }
  // Handle invalid format
  else {
    console.warn(`Invalid HEX color format received: ${hex}. Falling back to black.`);
    // Keep r, g, b as 0 (black)
  }

  // Ensure alpha is within 0-1 range
  const clampedAlpha = Math.max(0, Math.min(1, alpha));

  return `rgba(${r}, ${g}, ${b}, ${clampedAlpha})`;
}
// --- End Utility Function ---


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

const Navigation: React.FC<NavigationProps> = ({ navItems = defaultNavItems }) => {

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

  // --- Color Application and Saving Logic (Includes More Transparent Scroller Bg) ---
  const applyColor = (colorValue: string) => {
    if (!colorValue) return;
    const root = document.documentElement; // Get root element

    // 1. Set primary opaque colors
    root.style.setProperty('--color-primary', colorValue);
    root.style.setProperty('--color-link', colorValue); // Using --color-link for hover below

    // --- 2. Set the transparent scroller background ---
    const scrollerAlpha = 0.08; // <<< Using more transparent value (8% opaque)
    const scrollerRgbaColor = hexToRgba(colorValue, scrollerAlpha); // Use function defined above
    root.style.setProperty('--scroller-background', scrollerRgbaColor);
    // --- End scroller background logic ---

    // 3. Update state
    setCurrentColor(colorValue);

    // 4. Save to localStorage
    try { localStorage.setItem('primaryColor', colorValue); }
    catch (error) { console.error("Error saving color:", error); }
  };
  // --- End Color Application Logic ---

  // Load saved/initial color on mount
  useEffect(() => {
    let initialColorVal = '#4a90e2'; // Default
    try { const savedColor = localStorage.getItem('primaryColor'); if (savedColor) initialColorVal = savedColor; }
    catch (error) { console.error("Error reading color:", error); }
    // Apply color (which now also sets the --scroller-background)
    applyColor(initialColorVal);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run only once on mount

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
      <ul className={`${styles.navList} ${isMobileMenuOpen ? styles.open : ''}`}>
        {navItems.map((item) => (
          <li key={item.path} className={styles.navItem}>
            <Link to={item.path} className={styles.navLink} onClick={closeMenus}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      {/* --- End Navigation List --- */}


      {/* Settings Dropdown Trigger and Panel */}
      <div className={styles.settingsContainer} ref={settingsContainerRef}>
         {/* Settings Trigger Button */}
        <button className={styles.settingsButton} onClick={toggleSettings} aria-label="Theme settings" aria-expanded={isSettingsOpen}>
           <FaCog /> {/* Settings Icon */}
        </button>

        {/* Settings Dropdown Panel */}
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