// src/pages/Project2Page.tsx
import React from 'react';
import Typography from '../components/Typography/Typography';
import Button from '../components/Button/Button';
import Section from '../components/Section/Section'; // Import Section
import TwoColumnSection from '../components/TwoColumnSection/TwoColumnSection'; // Import
// Remove unused Video import
// Remove unused ImageGrid import
import styles from './Project2Page.module.css'; // Make sure this CSS file exists
import { Link } from 'react-router-dom';

// --- IMPORTANT: Replace these with your actual image imports for Project 2 ---
import vuiImage1 from '../assets/VUICaseStudy/caseStudy-image-1.png'; // Example
import vuiImage2 from '../assets/VUICaseStudy/caseStudy-image-2.png'; // Example
import vuiImage3 from '../assets/VUICaseStudy/caseStudy-image-3.png'; // Example
import vuiImage4 from '../assets/VUICaseStudy/caseStudy-image-4.png'; // Example
import vuiImage5 from '../assets/VUICaseStudy/caseStudy-image-5.png'; // Example
import vuiImage6 from '../assets/VUICaseStudy/caseStudy-image-6.png'; // Example
import vuiImage7 from '../assets/VUICaseStudy/caseStudy-image-7.png'; // Example
// --- Add other necessary image imports ---

const Project2Page: React.FC = () => {
  return (
    <div className={styles.project2Page}> {/* Ensure CSS module matches */}
      {/* Hero Section */}
      <Section marginBottom="xl" padding="none" className={styles.heroContent}>
        <Typography variant="h1" className={styles.heroTitle}>Voice-Activated AR Interface Concept</Typography>
        <Typography variant="subtitle1" className={styles.heroSubtitle}>
          Case Study: Exploring Voice UI for Hands-Free AR Interaction
        </Typography>

        {/* --- ADD THIS LINK AND BUTTON --- */}
        <a href="https://voice-activated-ar-interface.netlify.app/" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
            <Button variant="primary" arrow>View Live Prototype</Button>
        </a>
        {/* --- END OF ADDED LINK AND BUTTON --- */}

      </Section>

      {/* TwoColumnSection 1: Project Overview & Goals */}
      <Section marginBottom="xl" padding="none">
          <TwoColumnSection
              imageSrc={vuiImage1} // REPLACE with actual image import/path
              imageAlt="Overview of VUI AR Concept" // REPLACE alt text
              imageOnLeft={true}
          >
             <Typography variant="h3" className={styles.manifestoTitle}>Project Overview & Goals</Typography>
             <Typography variant="p" className={styles.manifestoText}>
               This project explores the feasibility of a voice-activated user interface within a simulated Augmented Reality context, built using React and the Web Speech API.
             </Typography>
             <Typography variant='p' className={styles.manifestoText}>
               The primary goal was to prototype core voice command interactions (navigation, selection, actions) and assess the potential user experience benefits and challenges.
             </Typography>
          </TwoColumnSection>
      </Section>

      {/* TwoColumnSection 2: Existing VUI & AR Research */}
      <Section marginBottom="xl" padding="none">
          <TwoColumnSection
              imageSrc={vuiImage2} // REPLACE with actual image import/path
              imageAlt="Diagram showing VUI/AR research analysis" // REPLACE alt text
              imageOnLeft={false} // Example: Switch side
          >
             <Typography variant="h3" className={styles.manifestoTitle}>Existing VUI & AR Research</Typography>
             <Typography variant="p" className={styles.manifestoText}>
              Analyzed existing voice interfaces (like Siri, Alexa) and AR applications to understand current interaction patterns, identify best practices, and pinpoint opportunities for improvement.
             </Typography>
          </TwoColumnSection>
      </Section>

      {/* TwoColumnSection 3: Conceptual Foundation */}
      <Section marginBottom="xl" padding="none">
          <TwoColumnSection
              imageSrc={vuiImage3} // REPLACE with actual image import/path
              imageAlt="Mood board for VUI AR concept" // REPLACE alt text
              imageOnLeft={true} // Example: Switch side
          >
             <Typography variant="h3" className={styles.manifestoTitle}>Conceptual Foundation</Typography>
             <Typography variant="p" className={styles.manifestoText}>
              Focused on creating an intuitive and responsive feel for the voice interaction, aiming for a clean, futuristic aesthetic suitable for an AR overlay.
             </Typography>
          </TwoColumnSection>
      </Section>

      {/* TwoColumnSection 4: Voice Command Flow */}
      <Section marginBottom="xl" padding="none">
          <TwoColumnSection
              imageSrc={vuiImage4} // REPLACE with actual image import/path
              imageAlt="User flow diagram for voice commands" // REPLACE alt text
              imageOnLeft={false} // Example: Switch side
          >
             <Typography variant="h3" className={styles.manifestoTitle}>Voice Command Flow</Typography>
             <Typography variant="p" className={styles.manifestoText}>
              Mapped the primary interaction flows, defining how users would navigate menus, select items, and trigger actions using specific voice commands.
             </Typography>
          </TwoColumnSection>
      </Section>

      {/* TwoColumnSection 5: Interface Structure & Voice Mapping */}
      <Section marginBottom="xl" padding="none">
          <TwoColumnSection
              imageSrc={vuiImage5} // REPLACE with actual image import/path
              imageAlt="Information architecture for VUI AR" // REPLACE alt text
              imageOnLeft={true} // Example: Switch side
          >
             <Typography variant="h3" className={styles.manifestoTitle}>Interface Structure & Voice Mapping</Typography>
             <Typography variant="p" className={styles.manifestoText}>
              Outlined the basic structure of the simulated AR interface and mapped specific voice commands to corresponding UI elements and actions using React and the Web Speech API.
             </Typography>
          </TwoColumnSection>
      </Section>

      {/* TwoColumnSection 6: AR Interface Visual Design */}
       <Section marginBottom="xl" padding="none">
          <TwoColumnSection
              imageSrc={vuiImage6} // REPLACE with actual image import/path
              imageAlt="Visual mockups of the AR interface" // REPLACE alt text
              imageOnLeft={false} // Example: Switch side
          >
             <Typography variant="h3" className={styles.manifestoTitle}>AR Interface Visual Design</Typography>
             <Typography variant="p" className={styles.manifestoText}>
              Developed mockups defining the visual style for the AR overlay, focusing on clarity, minimal distraction, and clear feedback mechanisms for voice interactions.
             </Typography>
          </TwoColumnSection>
      </Section>

      {/* TwoColumnSection 7: UI Mockups & VUI Logic */}
      <Section marginBottom="xl" padding="none">
          <TwoColumnSection
              imageSrc={vuiImage7} // REPLACE with actual image import/path
              imageAlt="Figma design system snippets for VUI AR" // REPLACE alt text
              imageOnLeft={true} // Example: Switch side
          >
             <Typography variant="h3" className={styles.manifestoTitle}>UI Mockups & VUI Logic</Typography>
             <Typography variant="p" className={styles.manifestoText}>
              Created visual mockups in Figma and defined the underlying logic for interpreting voice commands and triggering the appropriate UI responses within the React application.
             </Typography>
          </TwoColumnSection>
      </Section>

      {/* Call to Action */}
      <div className={styles.heroContent}> {/* Reuse heroContent style for CTA or create a new one */}
          <Typography variant="h2" className={styles.ctaTitle}>Ready to Create Something Unique?</Typography>
          <Typography variant="p" className={styles.ctaSubtitle}>
            Let's collaborate to build digital experiences that innovate and engage users.
          </Typography>
        {/* Link to external Calendly */}
          <a href="https://calendly.com/kyleranta/15min" target="_blank" rel="noopener noreferrer" className={styles.ctaButtonLink}> {/* Added class for potential styling */}
              <Button variant="primary" arrow>Book a Free Consultation</Button>
          </a>
          <Typography variant="listItem" align="center" className={styles.ctaEmail}> {/* Added class for potential styling */}
           uniqueux13@gmail.com
         </Typography>
      </div>
    </div>
  );
};

export default Project2Page;