// src/components/NextStepsSection/NextStepsSection.tsx
import React from "react";
// Assuming your CSS module is named consistently with the component
import styles from "./CtaSection.module.css";
import Typography from "../Typography/Typography";
import Button from "../Button/Button";
// Import BOTH Link (for regular navigation) and HashLink (for navigation + scrolling)
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {
  FaCalendarCheck,
  FaWpforms,
  FaEnvelope,
  FaBriefcase,
} from "react-icons/fa";

interface NextStepsSectionProps {
  className?: string;
}

const NextStepsSection: React.FC<NextStepsSectionProps> = ({
  className = "",
}) => {
  // Removed the unused scrollToForm function

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
          <FaCalendarCheck className={styles.choiceIcon} aria-hidden='true' />
          <Typography variant='h4' className={styles.choiceTitle}>
            Book a Strategy Call
          </Typography>
          <Typography variant='p' className={styles.choiceDescription}>
            Schedule a free 15-min call to discuss your vision and goals
            directly.
          </Typography>
          {/* External link - uses standard <a> */}
          <a
            href='https://calendly.com/kyleranta/15min'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.choiceButtonLink}
          >
            <Button variant='primary' arrow>
              Find a Time
            </Button>
          </a>
        </div>

        {/* Choice 2: Submit Project Details */}
        <div className={`${styles.choiceCard} ${styles.choiceSubmitForm}`}>
          <FaWpforms className={styles.choiceIcon} aria-hidden='true' />
          <Typography variant='h4' className={styles.choiceTitle}>
            Submit Project Details
          </Typography>
          <Typography variant='p' className={styles.choiceDescription}>
            Fill out the project assessment form with your requirements and
            details now.
          </Typography>
          {/* Use HashLink for navigation + smooth scroll */}
          <HashLink
            // Correct path format: /path#id (no extra slash before #)
            // Using the ID mentioned in your original unused function
            to='/services#multi-step-form-top'
            smooth // Enables smooth scrolling
            className={styles.choiceButtonLink}
          >
            <Button variant='secondary' arrow>
              Go to Form
            </Button>
          </HashLink>
        </div>

        {/* Choice 3: See More Work (Optional) */}
        <div className={`${styles.choiceCard} ${styles.choiceSeeWork}`}>
          <FaBriefcase className={styles.choiceIcon} aria-hidden='true' />
          <Typography variant='h4' className={styles.choiceTitle}>
            Explore Examples
          </Typography>
          <Typography variant='p' className={styles.choiceDescription}>
            Not ready yet? See detailed case studies or browse the portfolio
            first.
          </Typography>
          {/* Internal link without hash - uses standard Link */}
          <Link to='/portfolio' className={styles.choiceButtonLink}>
            <Button variant='secondary' arrow>
              View Portfolio
            </Button>
          </Link>
        </div>

        {/* Choice 4: Quick Contact (Optional) */}
        <div className={`${styles.choiceCard} ${styles.choiceQuickContact}`}>
          <FaEnvelope className={styles.choiceIcon} aria-hidden='true' />
          <Typography variant='h4' className={styles.choiceTitle}>
            Quick Question?
          </Typography>
          <Typography variant='p' className={styles.choiceDescription}>
            Have a simple question? Send a direct email for a fast response.
          </Typography>
          {/* Mailto link - uses standard <a> */}
          <a
            href='mailto:hello@uniqueux.com'
            className={styles.choiceButtonLink}
          >
            <Button variant='secondary' arrow>
              Send Email
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NextStepsSection;
