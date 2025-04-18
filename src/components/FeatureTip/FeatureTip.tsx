// src/components/FeatureTip/FeatureTip.tsx
import React, { useRef } from 'react';
import styles from './FeatureTip.module.css';
import { FaTimes } from 'react-icons/fa';
import {
    useFloating,
    offset, // Add space between target and tip
    flip,   // Flip placement (e.g., top to bottom) if needed
    shift,  // Shift along axis to prevent overflow
    arrow,  // Manage the arrow position
    autoUpdate, // Automatically update on scroll/resize
    FloatingPortal, // Render tip in document body (optional but recommended)
} from '@floating-ui/react';

interface FeatureTipProps {
    title: string;
    message: string;
    isVisible: boolean;
    onDismiss: () => void;
    /** A ref pointing to the element the tip should anchor to */
    targetRef: React.RefObject<HTMLElement | null>; // <<<--- Target Ref is now required
    id?: string;
    /** Initial preferred placement */
    placement?: 'top' | 'bottom' | 'left' | 'right'; // Changed from 'position'
    className?: string;
}

const FeatureTip: React.FC<FeatureTipProps> = ({
    title,
    message,
    isVisible,
    onDismiss,
    targetRef, // <<<--- Get targetRef from props
    id,
    placement = 'bottom', // Default placement
    className = '',
}) => {
    const arrowRef = useRef<HTMLDivElement>(null); // Ref for the arrow element

    const { refs, floatingStyles, context, middlewareData } = useFloating({
        // Assign the target element ref
        elements: {
          reference: targetRef.current, // Use the ref passed from parent
        },
        // Control visibility
        open: isVisible,
        // Set preferred placement
        placement: placement,
        // Keep position updated automatically on scroll/resize etc.
        whileElementsMounted: autoUpdate,
        // Middleware adjusts position based on constraints
        middleware: [
            offset(10), // Offset by 10px (arrow height + gap)
            flip(),     // Allow flipping placement if not enough space
            shift({ padding: 8 }), // Shift along axis to stay in view (8px padding from viewport edge)
            arrow({ element: arrowRef, padding: 5 }), // Connect arrow ref, add padding
        ],
    });

    // --- Arrow Positioning ---
    // Get arrow data calculated by the middleware
    const arrowX = middlewareData.arrow?.x;
    const arrowY = middlewareData.arrow?.y;
    // Determine which side the arrow should be on based on actual calculated placement
    const staticSide = {
        top: 'bottom',
        right: 'left',
        bottom: 'top',
        left: 'right',
    }[context.placement.split('-')[0]] ?? 'bottom'; // Default to bottom if needed

    const arrowStyles: React.CSSProperties = {
        position: 'absolute',
        left: arrowX != null ? `${arrowX}px` : '',
        top: arrowY != null ? `${arrowY}px` : '',
        [staticSide]: '-4px', // Pull arrow slightly back into the tooltip body (-half its height/width)
    };
    // --- End Arrow Positioning ---


    if (!isVisible) {
        return null;
    }

    // Combine base class and any extra classes
    const wrapperClasses = `${styles.tipWrapper} ${className}`;

    return (
        // FloatingPortal renders the tooltip at the document root, avoiding
        // parent overflow/z-index issues. Remove if not desired.
        <FloatingPortal>
            <div
                id={id}
                ref={refs.setFloating} // Assign floating element ref
                style={floatingStyles}  // Apply calculated styles
                className={wrapperClasses}
                role="tooltip"
                aria-live="polite"
            >
                {/* Content */}
                <div className={styles.tipContent}>
                    {title && <strong className={styles.tipTitle}>{title}</strong>}
                    <p className={styles.tipMessage}>{message}</p>
                </div>

                {/* Dismiss Button */}
                <button
                    className={styles.closeButton}
                    onClick={onDismiss}
                    aria-label="Dismiss tip"
                >
                    <FaTimes />
                </button>

                {/* Arrow Element */}
                {/* Use Floating UI's calculated position for the arrow */}
                <div
                    ref={arrowRef} // Assign arrow ref
                    className={styles.tipArrow}
                    style={arrowStyles} // Apply calculated arrow styles
                ></div>

            </div>
        </FloatingPortal>
    );
};

export default FeatureTip;