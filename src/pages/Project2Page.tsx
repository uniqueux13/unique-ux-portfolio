// src/pages/Project2Page.tsx
import React from 'react';
import Typography from '../components/Typography/Typography';
import Button from '../components/Button/Button';
import Section from '../components/Section/Section'; // Import Section
import TwoColumnSection from '../components/TwoColumnSection/TwoColumnSection'; // Import
// Remove unused Video import
// Remove unused ImageGrid import
import styles from './Project2Page.module.css'; // Make sure this CSS file exists

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
             <Typography variant="h3" className={styles.manifestoTitle}>Initial Layout Concept</Typography>
             <Typography variant="p" className={styles.manifestoText}>
             Considering an AR overlay, the user's main view shouldn't be blocked. I explored placing the core content in a defined panel on the left, simulating a secondary display within the field of view.
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
             <Typography variant="h3" className={styles.manifestoTitle}>Handling Voice Commands</Typography>
             <Typography variant="p" className={styles.manifestoText}>
             Implemented the Web Speech API to capture speech. The "Start Listening" button initiates capture. This API provides the foundation for speech recognition in the browser.
             </Typography>
             <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API" target="_blank" rel="noopener noreferrer" className={styles.ctaButtonLink}>
              <Button variant="secondary" arrow>View Documentation</Button>
          </a>
          </TwoColumnSection>
      </Section>

      {/* TwoColumnSection 4: Voice Command Flow */}
      <Section marginBottom="xl" padding="none">
          <TwoColumnSection
              imageSrc={vuiImage4} // REPLACE with actual image import/path
              imageAlt="User flow diagram for voice commands" // REPLACE alt text
              imageOnLeft={false} // Example: Switch side
          >
             <Typography variant="h3" className={styles.manifestoTitle}>Feedback Considerations</Typography>
             <Typography variant="p" className={styles.manifestoText}>
             How does the user know the command was heard or is processing? Added the "Last Command" display for immediate confirmation.
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
             <Typography variant="h3" className={styles.manifestoTitle}>Under the Hood: Basic Logic</Typography>
             <Typography variant="p" className={styles.manifestoText}>
             Once speech is transcribed, how does it trigger an action? A JavaScript function checks the text for keywords ("next", "back", "show", etc.) and calls the corresponding function (e.g., changing the slide).
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
             <Typography variant="h3" className={styles.manifestoTitle}>Tech Stack Used</Typography>
             <Typography variant="p" className={styles.manifestoText}>
             This experiment was built using: React, TypeScript, Vite, Web Speech API, CSS, Netlify (for deployment), and GitHub (for version control).
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
             <Typography variant="h3" className={styles.manifestoTitle}>Learnings & Next Steps</Typography>
             <Typography variant="p" className={styles.manifestoText}>
             This was a valuable first step into VUI using web tech. Key learning: Web Speech API is accessible, but context-awareness and truly seamless AR interaction are complex challenges! Next steps could involve better UI design, incorporating AI, or exploring WebXR.
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