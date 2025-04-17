// src/components/LinearProgressBar/LinearProgressBar.tsx
import React from 'react';
import styles from './LinearProgressBar.module.css';

interface LinearProgressBarProps {
  /** Current progress value (e.g., percentage from 0 to max). */
  value: number;
  /** Maximum possible value (defaults to 100). */
  max?: number;
  /** Optional label displayed above the bar. */
  label?: string;
  /** Whether to display the numeric value (e.g., "50%") inside or near the bar. */
  showValue?: boolean;
  /** Accessible label for screen readers (required). */
  ariaLabel: string;
  /** Optional fixed width for the progress bar container */
  width?: string;
}

const LinearProgressBar: React.FC<LinearProgressBarProps> = ({
  value,
  max = 100,
  label,
  showValue = false,
  ariaLabel,
  width,
}) => {
  // Ensure value doesn't exceed max or go below 0
  const clampedValue = Math.min(Math.max(value, 0), max);
  const percent = max > 0 ? (clampedValue / max) * 100 : 0;

  return (
    <div className={styles.progressBarWrapper} style={{ width: width }}>
      {label && (
        <div className={styles.labelContainer}>
          <span className={styles.labelText}>{label}</span>
          {showValue && <span className={styles.valueText}>{`${Math.round(percent)}%`}</span>}
        </div>
      )}
      <div
        className={styles.progressBarContainer}
        role="progressbar"
        aria-valuenow={clampedValue}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={ariaLabel}
        title={showValue ? undefined : `${Math.round(percent)}%`} // Tooltip if value isn't shown
      >
        <div className={styles.progressBarTrack}>
          <div
            className={styles.progressBarFill}
            style={{ width: `${percent}%` }} // Use width for simplicity, transform: scaleX(${percent / 100}) is another option
          >
             {/* Optionally show value inside the bar if label isn't present */}
             {showValue && !label && <span className={styles.valueTextInside}>{`${Math.round(percent)}%`}</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinearProgressBar;