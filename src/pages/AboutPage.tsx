// src/pages/AboutPage.tsx
import React from "react";
// import { Link } from 'react-router-dom';

// Component Imports
import Typography from "../components/Typography/Typography";
import Section from "../components/Section/Section";
import TwoColumnSection from "../components/TwoColumnSection/TwoColumnSection";
import Card from "../components/Card/Card";
import CtaSection from "../components/CtaSection/CtaSection";
// import Button from '../components/Button/Button';
// Removed Card import if not used here anymore

// Style Imports
import styles from "./AboutPage.module.css";

// Asset Imports
import working from "../assets/Frame 1.png"; // Consider using this for Philosophy/Approach section

// Example Icons for Philosophy/Values (replace as needed)
import {
  FaUsers,
  FaHandshake,
  FaCheckCircle,
} from "react-icons/fa";

const AboutPage: React.FC = () => {
  return (
    <div>
      {/* --- Hero Section --- */}
      <Section marginBottom='lg' padding='sm'>
        <div className={styles.heroContent}>
          <Typography variant='h1' className={styles.heroTitle}>
            About Unique UX
          </Typography>
          <Typography variant='subtitle1' className={styles.heroSubtitle}>
            We craft integrated digital experiences where design and content
            unite to achieve your vision. This is Unique UX.
          </Typography>
        </div>
      </Section>

      {/* --- Our Story / The "Why" --- */}
      <Section padding='md' marginBottom='lg'>
        <Typography variant='h2' align='center' className={styles.sectionTitle}>
          Our Genesis
        </Typography>
        <Typography variant='p' align='center' className={styles.storyText}>
          Unique UX was founded on the belief that truly effective digital
          platforms require more than just aesthetics or code. They need a soul
          – a seamless fusion of intuitive design and purposeful content that
          speaks directly to the user. We saw a gap where these two critical
          elements often worked in isolation, and built Unique UX to bridge it.
        </Typography>
      </Section>

      {/* --- Our Philosophy / Approach --- */}
      <Section
        padding='none'
        marginBottom='xl'
        className={styles.philosophySection}
      >
        {/* Using TwoColumnSection to visually represent the approach */}
        <TwoColumnSection
          imageSrc={working} // Use the 'working' image here
          imageAlt='Conceptual illustration representing the integration of design, content, and strategy.'
          imageOnLeft={true} // Image on Left
        >
          <Typography variant='h2' className={styles.sectionTitle}>
            Our Integrated Approach
          </Typography>
          <Typography variant='p' className={styles.sectionText}>
            We don't just build websites or write copy. We architect digital
            experiences. Our approach interweaves user-centric design principles
            with data-informed content strategy from day one.
          </Typography>
        </TwoColumnSection>
      </Section>

      <Section
        className={styles.stepCards}
        padding='sm'
        aria-label='Key Service Outcomes'
      >
        {/* Card 1: Example Outcome/Deliverable */}
        <Card className={styles.outcomeCard}>
          <FaUsers className={styles.cardIcon} aria-hidden='true' />
          <Typography variant='h4' className={styles.cardTitle}>
            User-Obsessed
          </Typography>
          <Typography variant='p' className={styles.cardDescription}>
            Deeply understanding user needs guides every decision.{" "}
          </Typography>
        </Card>
        {/* Card 2: Example Outcome/Deliverable */}
        <Card className={styles.outcomeCard}>
          <FaCheckCircle className={styles.cardIcon} aria-hidden='true' />
          <Typography variant='h4' className={styles.cardTitle}>
          Content-Led Design
          </Typography>
          <Typography variant='p' className={styles.cardDescription}>
          Content informs structure and design, ensuring clarity and purpose.
          </Typography>
        </Card>
        {/* Card 3: Example Outcome/Deliverable */}
        <Card className={styles.outcomeCard}>
          <FaHandshake className={styles.cardIcon} aria-hidden='true' />
          <Typography variant='h4' className={styles.cardTitle}>
          Collaborative Partnership
          </Typography>
          <Typography variant='p' className={styles.cardDescription}>
          We work closely with you, becoming an extension of your team.
          </Typography>
        </Card>
      </Section>

      {/* --- (Commented Out) About Video Section Placeholder --- */}
      {/*
      <Section padding="md" marginBottom="lg" className={styles.videoPlaceholder}>
         <Typography variant="h2" align="center" className={styles.sectionTitle}>See Our Process in Action</Typography>
         <div className={styles.videoEmbedContainer}>
            <p style={{textAlign: 'center', padding: 'var(--space-xl)', border: '1px dashed var(--color-border-subtle)'}}>
              Video coming soon!
            </p>
         </div>
       </Section>
      */}

      <div className={styles.wrapper}>
        <CtaSection>
          {/* Assuming CtaSection handles its own content */}
        </CtaSection>
      </div>
    </div>
  );
};

export default AboutPage;
