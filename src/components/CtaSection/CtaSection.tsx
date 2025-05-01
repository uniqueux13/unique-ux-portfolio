// src/components/CtaSection/CtaSection.tsx
// Updated with specific Calendly URL

import React, { useEffect } from 'react';
import styles from './CtaSection.module.css';
import Typography from '../Typography/Typography';
// Button/Link components are removed as the embed replaces the link

interface CtaSectionProps {
  className?: string;
  calendlyUrl?: string; // Prop allows overriding if needed elsewhere
}

// --- UPDATED Default Calendly URL ---
const DEFAULT_CALENDLY_URL = "https://calendly.com/unique-ux"; // <<<--- Your specific URL
// ------------------------------------

const CtaSection: React.FC<CtaSectionProps> = ({
  className = '',
  calendlyUrl = DEFAULT_CALENDLY_URL // Use prop or updated default
}) => {

  // --- Dynamically Load Calendly Widget Script ---
  useEffect(() => {
    const scriptId = 'calendly-widget-script';
    if (document.getElementById(scriptId)) {
      return;
    }
    const script = document.createElement('script');
    script.id = scriptId;
    script.type = 'text/javascript';
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    // Optional cleanup function (usually not needed)
    // return () => { /* ... remove script ... */ };
  }, []);
  // --- End Script Loading ---


  return (
    <div className={`${styles.ctaSection} ${className}`}>

      {/* --- Heading and Intro --- */}
      <Typography variant="h2" className={styles.ctaTitle}>
        Get In Touch
      </Typography>
      <Typography variant="p" className={styles.ctaSubtitle}>
        Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you!
      </Typography>

      {/* --- Two-Column Layout Container --- */}
      <div className={styles.contentColumns}>

        {/* --- Column 1: Information --- */}
        <div className={styles.infoColumn}>
          <Typography variant="h3" className={styles.contactHeading}>
            Contact Information
          </Typography>
          <Typography variant="p" className={styles.contactIntro}>
            Fill out the form or contact me directly using the information below.
          </Typography>

          <div className={styles.contactGrid}>
            {/* Location */}
            <div className={styles.contactItem}>
              <Typography variant="caption" className={styles.contactLabel}>Location</Typography>
              <Typography variant="p" className={styles.contactValue}>San Francisco, CA</Typography>
            </div>
            {/* Email */}
            <div className={styles.contactItem}>
              <Typography variant="caption" className={styles.contactLabel}>Email</Typography>
              <Typography variant="p" className={styles.contactValue}>
                <a href="mailto:hello@uniqueux.com" className={styles.contactLink}>
                  hello@uniqueux.com
                </a>
              </Typography>
            </div>
            {/* Phone */}
            <div className={styles.contactItem}>
              <Typography variant="caption" className={styles.contactLabel}>Phone</Typography>
              <Typography variant="p" className={styles.contactValue}>
                 <a href="tel:+11234567890" className={styles.contactLink}>
                   +1 (123) 456-7890
                 </a>
              </Typography>
            </div>
          </div>

          {/* Availability */}
          <Typography variant="h3" className={styles.contactHeading}>
            Availability
          </Typography>
          <div className={styles.availabilityInfo}>
            <Typography variant="p" className={styles.availabilityText}>
              I'm currently available for freelance work and new opportunities.
            </Typography>
            <span className={styles.availabilityBadge}>
                Available for hire
            </span>
          </div>
        </div>
        {/* --- End Column 1 --- */}


        {/* --- Column 2: Calendly Embed --- */}
        <div className={styles.calendlyColumn}>
           <Typography variant="h3" className={styles.contactHeading}>
             Schedule a Meeting
           </Typography>
           {/* The Calendly inline widget div */}
           {/* Uses the calendlyUrl prop (defaults to your URL) */}
           {/* Retains default inline style from Calendly, can be overridden via CSS module */}
           <div
             className={styles.calendlyInlineWidget} // Use local class
             data-url={calendlyUrl}
             style={{ minWidth: '320px', height: '700px' }}
           ></div>
        </div>
        {/* --- End Column 2 --- */}

      </div>
      {/* --- End Two-Column Layout --- */}

    </div>
  );
};

export default CtaSection;