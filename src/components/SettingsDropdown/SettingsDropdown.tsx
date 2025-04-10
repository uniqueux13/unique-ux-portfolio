// src/components/SettingsDropdown/SettingsDropdown.tsx (Updated for Swatches)
import React from 'react';
import styles from './SettingsDropdown.module.css';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import { FaCheck } from 'react-icons/fa'; // Import check icon for active state

// --- Define Accessible Colors (Verify contrast >= 4.5:1 against #FFF) ---
// You should verify these yourself using a contrast checker tool!
const accessibleColors = [
    { name: 'Default Blue', value: '#4a90e2' },
    { name: 'Teal', value: '#0b7285' },
    { name: 'Green', value: '#1a7f37' },
    { name: 'Dark Orange', value: '#d9480f' },
    { name: 'Dark Red', value: '#c92a2a' },
    { name: 'Deep Purple', value: '#7048e8' },
];
// --- End Accessible Colors ---

interface SettingsDropdownProps {
  isOpen: boolean;
  currentColor: string; // Pass the current color to highlight active swatch
  onColorSelect: (colorValue: string) => void; // Handler expects the color value string
}

const SettingsDropdown: React.FC<SettingsDropdownProps> = ({
  isOpen,
  currentColor,
  onColorSelect
}) => {

  // Helper to compare colors roughly (case-insensitive)
  const isActiveColor = (colorValue: string) => {
    return currentColor.toLowerCase() === colorValue.toLowerCase();
  };

  return (
    <div className={`${styles.settingsDropdown} ${isOpen ? styles.open : ''}`}
         aria-hidden={!isOpen}
    >
      <div className={styles.dropdownContent}>

        {/* Dark Mode Setting */}
        <div className={styles.settingItem}>
            <span className={styles.settingLabel}>Dark Mode:</span>
            <DarkModeToggle />
        </div>

        {/* Color Picker Setting */}
        <div className={styles.settingItem}>
          <span className={styles.settingLabel}>Theme Color:</span>
          {/* --- Swatch Buttons --- */}
          <div className={styles.swatchGrid}>
            {accessibleColors.map(color => (
              <button
                key={color.name}
                title={color.name}
                className={`${styles.colorSwatch} ${isActiveColor(color.value) ? styles.activeSwatch : ''}`}
                style={{ backgroundColor: color.value }}
                onClick={() => onColorSelect(color.value)}
                aria-label={`Set primary color to ${color.name}`}
                aria-pressed={isActiveColor(color.value)} // Indicate active state
              >
                {/* Show checkmark if active */}
                {isActiveColor(color.value) && <FaCheck className={styles.checkIcon} />}
              </button>
            ))}
          </div>
          {/* --- End Swatch Buttons --- */}
        </div>

      </div>
    </div>
  );
};

export default SettingsDropdown;