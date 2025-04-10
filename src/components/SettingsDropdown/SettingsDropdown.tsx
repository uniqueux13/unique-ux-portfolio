// src/components/SettingsDropdown/SettingsDropdown.tsx
import React from 'react';
import styles from './SettingsDropdown.module.css';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'; // Assuming path is correct

interface SettingsDropdownProps {
  isOpen: boolean;
  initialColor: string; // Pass the initial/current color
  onColorChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Pass handler down
  // Add props for DarkModeToggle if needed (e.g., current theme)
}

const SettingsDropdown: React.FC<SettingsDropdownProps> = ({
  isOpen,
  initialColor,
  onColorChange
}) => {

  return (
    // Apply 'open' class based on isOpen prop
    <div className={`${styles.settingsDropdown} ${isOpen ? styles.open : ''}`}
         aria-hidden={!isOpen} // Hide from screen readers when closed
    >
      <div className={styles.dropdownContent}>

        {/* Dark Mode Setting */}
        <div className={styles.settingItem}>
            <span className={styles.settingLabel}>Dark Mode:</span>
            <DarkModeToggle />
        </div>

        {/* Color Picker Setting */}
        <div className={styles.settingItem}>
          <label htmlFor="primaryColorPickerDropdown" className={styles.settingLabel}>Theme Color:</label>
          <input
            type="color"
            id="primaryColorPickerDropdown" // Unique ID
            className={styles.colorPickerInput}
            value={initialColor} // Control value via prop (updates from useEffect in parent)
            onChange={onColorChange} // Use handler from parent
            aria-label="Select primary theme color"
          />
        </div>

         {/* Add more settings here in the future */}

      </div>
    </div>
  );
};

export default SettingsDropdown;