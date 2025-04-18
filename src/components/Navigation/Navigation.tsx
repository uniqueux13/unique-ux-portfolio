// src/components/Navigation/Navigation.tsx
// (Complete - Includes Floating UI integration for FeatureTip)

import React, { useState, useEffect, useRef } from 'react';
import styles from './Navigation.module.css';
import { Link } from 'react-router-dom';
import SettingsDropdown from '../SettingsDropdown/SettingsDropdown';
import FeatureTip from '../FeatureTip/FeatureTip'; // Import FeatureTip
import { FaCog } from 'react-icons/fa';

// --- Utility Function (hexToRgba - kept as is) ---
function hexToRgba(hex: string, alpha: number = 1): string {
  let cleanHex = hex.startsWith('#') ? hex.slice(1) : hex;
  let r: number = 0, g: number = 0, b: number = 0;
  if (cleanHex.length === 3) {
    r = parseInt(cleanHex[0] + cleanHex[0], 16);
    g = parseInt(cleanHex[1] + cleanHex[1], 16);
    b = parseInt(cleanHex[2] + cleanHex[2], 16);
  } else if (cleanHex.length === 6) {
    r = parseInt(cleanHex.substring(0, 2), 16);
    g = parseInt(cleanHex.substring(2, 4), 16);
    b = parseInt(cleanHex.substring(4, 6), 16);
  } else {
    console.warn(`Invalid HEX color format received: ${hex}. Falling back to black.`);
  }
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
  const [currentColor, setCurrentColor] = useState('#4a90e2');

  // Ref for dropdown click outside logic (targets the outer container)
  const settingsContainerRef = useRef<HTMLDivElement>(null);
  // Ref for the settings button itself (to anchor the FeatureTip)
  const settingsButtonRef = useRef<HTMLButtonElement>(null); // <<<--- Ref for the button

  // --- State and Logic for the Feature Tip ---
  const [showSettingsTip, setShowSettingsTip] = useState(false);

  useEffect(() => {
    // Check localStorage only once on mount
    try {
      const hasSeenTip = localStorage.getItem('seenSettingsTip_v1'); // Use versioned key
      if (!hasSeenTip) {
        setShowSettingsTip(true);
      }
    } catch (error) {
      console.error("Error reading from localStorage:", error);
      // setShowSettingsTip(true); // Optional: Show tip even if localStorage fails
    }
  }, []); // Empty dependency array ensures this runs only once

  const handleDismissSettingsTip = () => {
    try {
      localStorage.setItem('seenSettingsTip_v1', 'true'); // Mark as seen
      setShowSettingsTip(false);
    } catch (error) {
      console.error("Error writing to localStorage:", error);
      setShowSettingsTip(false); // Still hide visually
    }
  };
  // --- End Feature Tip Logic ---


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsSettingsOpen(false);
    // Also hide the tip if the mobile menu is toggled
    if (showSettingsTip) {
        handleDismissSettingsTip();
    }
  };

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
    // Dismiss the tip when the settings button is clicked to open the dropdown
    if (showSettingsTip) {
        handleDismissSettingsTip();
    }
  };

  // Close both menus (used when clicking a nav link)
  const closeMenus = () => {
      setIsMobileMenuOpen(false);
      setIsSettingsOpen(false);
      // Optional: Dismiss tip if a nav link is clicked
      // if (showSettingsTip) { handleDismissSettingsTip(); }
  }

  // --- Color Application and Saving Logic ---
  const applyColor = (colorValue: string) => {
    if (!colorValue) return;
    const root = document.documentElement;
    root.style.setProperty('--color-primary', colorValue);
    root.style.setProperty('--color-link', colorValue);
    const scrollerRgbaColor = hexToRgba(colorValue, 0.08);
    root.style.setProperty('--scroller-background', scrollerRgbaColor);
    setCurrentColor(colorValue);
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run only once on mount

  // Click outside logic for settings dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
        // Use the container ref which holds both button and dropdown
        if (settingsContainerRef.current && !settingsContainerRef.current.contains(event.target as Node)) {
            setIsSettingsOpen(false);
            // NOTE: We don't necessarily dismiss the tip on outside clicks,
            // only when interacting with settings or explicitly dismissing.
        }
    };
    if (isSettingsOpen) { document.addEventListener('mousedown', handleClickOutside); }
    else { document.removeEventListener('mousedown', handleClickOutside); }
    return () => { document.removeEventListener('mousedown', handleClickOutside); };
    }, [isSettingsOpen]); // Re-run if dropdown visibility changes


  return (
    <nav className={styles.navigation}>
      {/* Mobile Menu Button */}
      <button className={styles.menuButton} onClick={toggleMobileMenu} aria-label="Toggle menu" aria-expanded={isMobileMenuOpen}>
        <span className={styles.hamburgerIcon}>&#9776;</span>
      </button>

      {/* Navigation List */}
      <ul className={`${styles.navList} ${isMobileMenuOpen ? styles.open : ''}`}>
        {navItems.map((item) => (
          <li key={item.path} className={styles.navItem}>
            <Link to={item.path} className={styles.navLink} onClick={closeMenus}>
              {item.label}
            </Link>
          </li>
        ))}
        {/* Potentially add settings toggle inside mobile menu here if needed */}
      </ul>
      {/* End Navigation List */}


      {/* Settings Area: Includes Dropdown Trigger/Panel and Feature Tip */}
      {/* Ref for click-outside remains here */}
      <div className={styles.settingsContainer} ref={settingsContainerRef}>

          {/* Wrapper Div for Tip Positioning */}
          <div className={styles.settingsTriggerWrapper}>
              {/* Settings Trigger Button - Attach ref */}
              <button
                  ref={settingsButtonRef} // <<<--- Attach button ref
                  className={styles.settingsButton}
                  onClick={toggleSettings}
                  aria-label="Theme settings"
                  aria-expanded={isSettingsOpen}
                  // Link tip via aria-describedby when visible
                  aria-describedby={showSettingsTip ? "settings-feature-tip" : undefined}
              >
                  <FaCog /> {/* Settings Icon */}
              </button>

              {/* Render the Feature Tip, passing the button ref */}
              <FeatureTip
                  id="settings-feature-tip" // ID for aria-describedby
                  targetRef={settingsButtonRef} // <<<--- Pass button ref
                  title="Theme & Brightness Settings"
                  message="Click to customize your view."
                  isVisible={showSettingsTip}
                  onDismiss={handleDismissSettingsTip}
                  placement="bottom" // Preferred placement ('bottom', 'top', 'left', 'right')
              />
          </div>
          {/* End Wrapper Div */}

          {/* Settings Dropdown Panel */}
          {/* This is positioned relative to settingsContainer */}
          <SettingsDropdown
            isOpen={isSettingsOpen}
            currentColor={currentColor}
            onColorSelect={applyColor}
          />
      </div>

    </nav>
  );
};

export default Navigation;