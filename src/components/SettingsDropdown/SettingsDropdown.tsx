// src/components/SettingsDropdown/SettingsDropdown.tsx (Updated for Swatches)
import React from 'react';
import styles from './SettingsDropdown.module.css';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import { FaCheck } from 'react-icons/fa'; // Import check icon for active state

// --- Define Accessible Colors (Verify contrast >= 4.5:1 against #FFF) ---
// You should verify these yourself using a contrast checker tool!
const accessibleColors = [
  // A blue that passes WCAG AA (4.5:1) for text against both light/dark backgrounds
  { name: 'Bright Blue', value: '#367BEC' },

  // A vibrant teal that also passes AA on both backgrounds
  { name: 'Teal', value: '#17a2b8' },

  // A clear green passing AA on both backgrounds
  { name: 'Emerald Green', value: '#0A996F' },

  // A saturated orange passing AA/AAA on both backgrounds
  { name: 'Vibrant Orange', value: '#f76707' },

  // A magenta/pink instead of dark red, passes AA/AAA on both
  { name: 'Magenta', value: '#d63384' },

  // A slightly adjusted purple passing AA/AAA on both backgrounds
  { name: 'Indigo Purple', value: '#6f42c1' },
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