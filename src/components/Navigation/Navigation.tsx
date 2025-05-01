// src/components/Navigation/Navigation.tsx
// (Complete - Includes Mobile Nav Icons and separate Mobile Settings Trigger)
// Updated: 2025-05-01 (Based on location: Dayton, Ohio, United States)

import React, { useState, useEffect, useRef } from 'react';
import styles from './Navigation.module.css';
import { Link } from 'react-router-dom';
import SettingsDropdown from '../SettingsDropdown/SettingsDropdown';
import FeatureTip from '../FeatureTip/FeatureTip';

// Import IconType and specific icons for nav items
import { IconType } from 'react-icons';
import { FaCog, FaHome, FaInfoCircle, FaCogs, FaImages, FaPencilAlt } from 'react-icons/fa'; // Add/change icons as needed

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

// Updated Interface for individual navigation items (includes icon)
interface NavItem {
  label: string;
  path: string;
  icon?: IconType; // Added optional icon property
}

// Interface for the component's props
interface NavigationProps {
  navItems?: NavItem[]; // Allow passing navItems as a prop (optional)
}

// Updated default navigation items with icons
const defaultNavItems: NavItem[] = [
    { label: 'Home', path: '/', icon: FaHome },
    { label: 'About', path: '/about', icon: FaInfoCircle },
    { label: 'Services', path: '/services', icon: FaCogs }, // Example
    { label: 'Portfolio', path: '/portfolio', icon: FaImages }, // Example
    { label: 'Sketchbook', path: '/sketchbook', icon: FaPencilAlt }, // Example
    // Add any other top-level pages here, assigning icons
];

const Navigation: React.FC<NavigationProps> = ({ navItems = defaultNavItems }) => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [currentColor, setCurrentColor] = useState('#4a90e2');

  // Ref for dropdown click outside logic (targets the DESKTOP container)
  const settingsContainerRef = useRef<HTMLDivElement>(null);
  // Ref for the DESKTOP settings button itself (to anchor the FeatureTip)
  const settingsButtonRef = useRef<HTMLButtonElement>(null);

  // --- State and Logic for the Feature Tip (Targets DESKTOP button) ---
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
    setIsSettingsOpen(false); // Close settings when toggling mobile menu
    // Also hide the tip if the mobile menu is toggled (although tip is desktop only now)
    if (showSettingsTip) {
        handleDismissSettingsTip();
    }
  };

  // This function toggles the state for the SINGLE dropdown panel
  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
    // Dismiss the tip when the settings button (desktop or mobile) is clicked
    if (showSettingsTip) {
        handleDismissSettingsTip();
    }
  };

  // Close both menus (used when clicking a nav link)
  const closeMenus = () => {
      setIsMobileMenuOpen(false);
      setIsSettingsOpen(false);
  }

  // --- Color Application and Saving Logic (Existing) ---
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

  // Load saved/initial color on mount (Existing)
  useEffect(() => {
    let initialColorVal = '#4a90e2'; // Default
    try { const savedColor = localStorage.getItem('primaryColor'); if (savedColor) initialColorVal = savedColor; }
    catch (error) { console.error("Error reading color:", error); }
    applyColor(initialColorVal);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run only once on mount

  // Click outside logic for settings dropdown (Now checks DESKTOP container ref)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
        // Check clicks outside the DESKTOP settings container
        // The dropdown panel is visually detached on mobile, but logically associated here
        if (settingsContainerRef.current && !settingsContainerRef.current.contains(event.target as Node)) {
            // Also check if the click was inside the mobile trigger button - if so, don't close
             const mobileSettingsButton = document.querySelector(`.${styles.settingsMobileButton}`);
             if (!mobileSettingsButton || !mobileSettingsButton.contains(event.target as Node)) {
                 setIsSettingsOpen(false);
             }
        }
    };
    if (isSettingsOpen) { document.addEventListener('mousedown', handleClickOutside); }
    else { document.removeEventListener('mousedown', handleClickOutside); }
    return () => { document.removeEventListener('mousedown', handleClickOutside); };
    // Dependency includes isSettingsOpen and the CSS class name used for mobile button selector
  }, [isSettingsOpen, styles.settingsMobileButton]);


  return (
    <nav className={styles.navigation}>
      {/* Mobile Menu Button */}
      <button
        className={styles.menuButton}
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
        aria-expanded={isMobileMenuOpen}
        aria-controls="main-nav-list"
      >
        <span className={styles.hamburgerIcon}>&#9776;</span>
      </button>

      {/* Navigation List (Includes mobile settings trigger) */}
      <ul id="main-nav-list" className={`${styles.navList} ${isMobileMenuOpen ? styles.open : ''}`}>
        {/* Map Nav Items */}
        {navItems.map((item) => (
          <li key={item.path} className={styles.navItem}>
            <Link to={item.path} className={styles.navLink} onClick={closeMenus}>
              {item.icon && (
                <item.icon className={styles.navIcon} aria-hidden="true" />
              )}
              <span>{item.label}</span>
            </Link>
          </li>
        ))}

        {/* --- Settings Trigger for Mobile Menu --- */}
        {/* This li will be hidden on desktop via CSS */}
        <li className={`${styles.navItem} ${styles.settingsMobileItem}`}>
          <button
            className={`${styles.settingsButton} ${styles.settingsMobileButton}`}
            onClick={() => {
                toggleSettings(); // Open/close the dropdown
                // Optionally close the mobile menu when settings is clicked:
                // setIsMobileMenuOpen(false);
            }}
            aria-label="Theme settings"
          >
            <FaCog />
            {/* Optional: Add text label visible only on mobile */}
            <span className={styles.settingsMobileLabel}>Settings</span>
          </button>
        </li>
        {/* --- End Mobile Settings Trigger --- */}

      </ul>
      {/* End Navigation List */}


      {/* --- Settings Area for Desktop --- */}
      {/* This container holds the desktop button, the feature tip, and the dropdown panel */}
      {/* It is hidden entirely on mobile via CSS */}
      <div
        className={`${styles.settingsContainer} ${styles.settingsDesktopContainer}`}
        ref={settingsContainerRef} // Ref for click outside detection
      >
          <div className={styles.settingsTriggerWrapper}>
              {/* Desktop settings button - has ref */}
              <button
                  ref={settingsButtonRef} // Ref for FeatureTip anchor
                  className={styles.settingsButton}
                  onClick={toggleSettings} // Same toggle function
                  aria-label="Theme settings"
                  aria-expanded={isSettingsOpen} // Reflects shared state
                  aria-describedby={showSettingsTip ? "settings-feature-tip" : undefined}
              >
                  <FaCog />
              </button>

              {/* FeatureTip is ONLY rendered/anchored relative to the desktop button */}
              <FeatureTip
                  id="settings-feature-tip"
                  targetRef={settingsButtonRef}
                  title="Theme & Brightness Settings"
                  message="Click to customize your view."
                  isVisible={showSettingsTip}
                  onDismiss={handleDismissSettingsTip}
                  placement="bottom"
              />
          </div>

          {/* SettingsDropdown is ONLY rendered here, its visibility controlled by isOpen */}
          {/* Its positioning is relative to this container on desktop, but overridden */}
          {/* to position:fixed on mobile via CSS */}
          <SettingsDropdown
            isOpen={isSettingsOpen}
            currentColor={currentColor}
            onColorSelect={applyColor}
          />
      </div>
      {/* --- End Desktop Settings Area --- */}

    </nav>
  );
};

export default Navigation;