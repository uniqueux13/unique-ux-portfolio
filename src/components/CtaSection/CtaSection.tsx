// src/components/NextStepsSection/NextStepsSection.tsx
import React from "react";
import styles from "./CtaSection.module.css"; // Rename CSS module too
import Typography from "../Typography/Typography";
import Button from "../Button/Button";
import { Link } from "react-router-dom"; // For internal links like Portfolio
import { FaCalendarCheck, FaWpforms, FaEnvelope, FaBriefcase } from "react-icons/fa"; // Example Icons

interface NextStepsSectionProps {
  className?: string;
}

const NextStepsSection: React.FC<NextStepsSectionProps> = ({ className = "" }) => {

  // Smooth scroll handler (if needed for Form link)
  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const formElement = document.getElementById('multi-step-form-top'); // Use ID from form section
    formElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className={`${styles.nextStepsContainer} ${className}`}>
      <Typography variant='h2' className={styles.nextStepsTitle}>
        Ready to Start Your Project?
      </Typography>
      <Typography variant='subtitle1' className={styles.nextStepsSubtitle}>
        Choose the next step that works best for you:
      </Typography>

      {/* Grid/Flex container for the choices */}
      <div className={styles.choicesGrid}>

        {/* Choice 1: Book Strategy Call */}
        <div className={`${styles.choiceCard} ${styles.choiceBookCall}`}>
           <FaCalendarCheck className={styles.choiceIcon} aria-hidden="true" />
           <Typography variant='h4' className={styles.choiceTitle}>
             Book a Strategy Call
           </Typography>
           <Typography variant='p' className={styles.choiceDescription}>
             Schedule a free 15-min call to discuss your vision and goals directly.
           </Typography>
           {/* Link Button */}
           <a href='https://calendly.com/kyleranta/15min' target='_blank' rel='noopener noreferrer' className={styles.choiceButtonLink}>
             <Button variant='primary' arrow>
               Find a Time
             </Button>
           </a>
        </div>

        {/* Choice 2: Submit Project Details */}
        <div className={`${styles.choiceCard} ${styles.choiceSubmitForm}`}>
           <FaWpforms className={styles.choiceIcon} aria-hidden="true" />
           <Typography variant='h4' className={styles.choiceTitle}>
             Submit Project Details
           </Typography>
           <Typography variant='p' className={styles.choiceDescription}>
             Fill out the project assessment form with your requirements and details now.
           </Typography>
           {/* Scroll-to-Form Button/Link */}
           {/* Using an anchor link that triggers scroll */}
           <a href="#multi-step-form-top" onClick={scrollToForm} className={styles.choiceButtonLink}>
              <Button variant='secondary' arrow>
                Go to Form
              </Button>
           </a>
        </div>

         {/* Choice 3: See More Work (Optional) */}
         <div className={`${styles.choiceCard} ${styles.choiceSeeWork}`}>
           <FaBriefcase className={styles.choiceIcon} aria-hidden="true" />
           <Typography variant='h4' className={styles.choiceTitle}>
             Explore Examples
           </Typography>
           <Typography variant='p' className={styles.choiceDescription}>
              Not ready yet? See detailed case studies or browse the portfolio first.
           </Typography>
           {/* Link to Portfolio Page */}
           <Link to='/portfolio' className={styles.choiceButtonLink}> {/* Adjust link */}
              <Button variant='secondary' arrow>
                View Portfolio
              </Button>
           </Link>
        </div>

         {/* Choice 4: Quick Contact (Optional) */}
        <div className={`${styles.choiceCard} ${styles.choiceQuickContact}`}>
           <FaEnvelope className={styles.choiceIcon} aria-hidden="true" />
           <Typography variant='h4' className={styles.choiceTitle}>
             Quick Question?
           </Typography>
           <Typography variant='p' className={styles.choiceDescription}>
              Have a simple question? Send a direct email for a fast response.
           </Typography>
           {/* Mailto Link Button */}
           <a href='mailto:hello@uniqueux.com' className={styles.choiceButtonLink}>
              <Button variant='secondary' arrow>
                Send Email
              </Button>
           </a>
        </div>

      </div>
    </div>
  );
};

export default NextStepsSection; // Remember to rename export/import