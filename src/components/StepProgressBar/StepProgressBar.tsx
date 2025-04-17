// src/components/StepProgressBar/StepProgressBar.tsx
import React from 'react';
import styles from './StepProgressBar.module.css';

interface StepProgressBarProps {
  /** Total number of steps in the process. */
  totalSteps: number;
  /** The current active step (1-based index). Steps <= currentStep are considered completed/active. */
  currentStep: number;
  /** Optional array of labels for each step. Length should match totalSteps. */
  stepLabels?: string[];
  /** Optional: Makes labels clickable to go to a step (requires onClickStep prop). */
  clickableLabels?: boolean;
  /** Optional: Function to call when a step label/dot is clicked. Receives step number (1-based). */
  onClickStep?: (stepNumber: number) => void;
}

const StepProgressBar: React.FC<StepProgressBarProps> = ({
  totalSteps,
  currentStep,
  stepLabels,
  clickableLabels = false,
  onClickStep,
}) => {
  // Create an array representing the steps [1, 2, ..., totalSteps]
  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1);

  const handleStepClick = (stepNumber: number) => {
    if (clickableLabels && onClickStep) {
      onClickStep(stepNumber);
    }
  };

  return (
    <div className={styles.progressContainer} aria-label={`Progress: Step ${currentStep} of ${totalSteps}`}>
      <div className={styles.progressDotsContainer}>
        {steps.map((stepNumber, index) => {
          const isActive = stepNumber <= currentStep; // Dot is active if current or completed
          const isLineActive = stepNumber < currentStep; // Line is active if step before it is completed
          const isClickable = clickableLabels && onClickStep;

          return (
            <div key={stepNumber} className={styles.progressStep}>
              <button
                type="button"
                className={`${styles.progressDot} ${isActive ? styles.active : ''}`}
                onClick={() => handleStepClick(stepNumber)}
                disabled={!isClickable} // Disable button if not clickable
                aria-label={stepLabels?.[index] ? `Step ${stepNumber}: ${stepLabels[index]}` : `Step ${stepNumber}`}
                aria-current={stepNumber === currentStep ? 'step' : undefined} // Indicate current step
                title={`Step ${stepNumber}${stepLabels?.[index] ? ': ' + stepLabels[index] : ''}`}
              >
                {/* Optional: Show step number inside */}
                {/* {stepNumber} */}
                 {/* Or show checkmark for completed steps */}
                 {isActive && stepNumber < currentStep && <span className={styles.checkIcon}>&#10003;</span>}
                 {isActive && stepNumber === currentStep && <span className={styles.currentDotIndicator}></span>}
              </button>
              {/* Render connecting line if not the last step */}
              {index < steps.length - 1 && (
                <div
                  className={`${styles.progressLine} ${isLineActive ? styles.active : ''}`}
                ></div>
              )}
            </div>
          );
        })}
      </div>

      {/* Render Step Labels if provided */}
      {stepLabels && stepLabels.length === totalSteps && (
        <div className={styles.progressLabelsContainer}>
          {stepLabels.map((label, index) => {
             const stepNumber = index + 1;
             const isLabelActive = stepNumber === currentStep;
             const isClickable = clickableLabels && onClickStep;
             return (
                <button
                    type="button"
                    key={stepNumber}
                    className={`${styles.progressLabel} ${isLabelActive ? styles.activeLabel : ''}`}
                    onClick={() => handleStepClick(stepNumber)}
                    disabled={!isClickable}
                >
                    {label}
                </button>
             );
          })}
        </div>
      )}
    </div>
  );
};

export default StepProgressBar;