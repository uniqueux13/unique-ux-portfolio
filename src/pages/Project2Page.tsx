// src/pages/Project2Page.tsx
import React from 'react';
import Typography from '../components/Typography/Typography';
import Button from '../components/Button/Button';
import Section from '../components/Section/Section'; // Import Section
import TwoColumnSection from '../components/TwoColumnSection/TwoColumnSection'; // Import
import CtaSection from '../components/CtaSection/CtaSection'
// Ensure all your image assets are correctly pathed
import vuiImage1 from '../assets/VUICaseStudy/caseStudy-image-1.png';
import vuiImage2 from '../assets/VUICaseStudy/caseStudy-image-2.png';
import vuiImage3 from '../assets/VUICaseStudy/caseStudy-image-3.png';
import vuiImage4 from '../assets/VUICaseStudy/caseStudy-image-4.png';
import vuiImage5 from '../assets/VUICaseStudy/caseStudy-image-5.png';
import vuiImage6 from '../assets/VUICaseStudy/caseStudy-image-6.png';
import vuiImage7 from '../assets/VUICaseStudy/caseStudy-image-7.png';
import styles from './Project2Page.module.css';

const Project2Page: React.FC = () => {
  return (
    <div className={styles.project2Page}>
      {/* Hero Section */}
      <Section marginBottom="xxl" padding="none" className={styles.heroContent}>
        <Typography variant="h1" className={styles.heroTitle}>
          Building Voice-Controlled Experiences: From Concept to Code
        </Typography>
        <Typography variant="subtitle1" className={styles.heroSubtitle}>
          Case Study: A Voice-Activated AR Interface & Tutorial on Creating Your Own with React, Web Speech API & OpenAI.
        </Typography>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1rem' }}>
          <a href="https://voice-activated-ar-interface.netlify.app/" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
            <Button variant="primary" arrow>View AR Prototype</Button> {/* App #2 */}
          </a>
          {/* Link to the video embed section or directly to YouTube if preferred */}
          <a href="#video-tutorial" className={styles.projectLink}>
             <Button variant="secondary" arrow>Watch The Tutorial</Button>
          </a>
        </div>
      </Section>

      {/* Video Tutorial Section */}
      <Section marginBottom="none">
        <Typography variant="h2" align="center">Video Tutorial: React Voice Control App</Typography>
        <div className={styles.videoContainer} style={{ display: 'flex', justifyContent: 'center' }}>
          <iframe 
            width="896" // Larger width for a main section video
            height="504" // 16:9 aspect ratio
            src="https://www.youtube.com/embed/bIwTsAEJNF8?si=Ais_7fWY5_0tkjZk" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
            style={{ maxWidth: '100%' }} // Ensure responsiveness
          ></iframe>
        </div>
      </Section>

      {/* Introduction & Project Evolution */}
<Section marginBottom="xxl" className={styles.evolutionSection}>
  <Typography variant="h2" className={`${styles.manifestoTitle} ${styles.evolutionTitle}`} align="center">
    The Journey: From AR Concept to Interactive Voice Apps
  </Typography>
  <br />
  <Typography variant="p" className={`${styles.manifestoText} ${styles.evolutionIntroText}`}>
    This project began as an exploration into voice-activated user interfaces within an Augmented Reality context. It evolved into a broader investigation of voice control capabilities using web technologies, culminating in a tutorial and several application prototypes that showcase different stages of development and integration.
  </Typography>
  
  <div className={styles.evolutionAppGrid}>
    <a href="https://voice-portfolio-project.netlify.app/" target="_blank" rel="noopener noreferrer" className={styles.evolutionAppCard}>
      <Button variant="secondary" >Core Voice Demo</Button> {/* Added fullWidth for consistency in card */}
    </a>
    <a href="https://voice-activated-ar-interface.netlify.app/" target="_blank" rel="noopener noreferrer" className={styles.evolutionAppCard}>
      <Button variant="secondary" >AR Interface</Button> {/* Added fullWidth */}
    </a>
    <a href="https://uniqueux-voice.netlify.app/" target="_blank" rel="noopener noreferrer" className={styles.evolutionAppCard}>
      <Button variant="secondary" >AI Integrated Voice</Button> {/* Added fullWidth */}
    </a>
  </div>
</Section>

      {/* Project Deep Dive: Voice-Activated AR Interface (App #2) */}
      <Section marginBottom="xl" padding="none">
        <Typography variant="h2" align="center">Deep Dive: Voice-Activated AR Interface Concept</Typography>
        <TwoColumnSection
          imageSrc={vuiImage1} 
          imageAlt="Overview of VUI AR Concept"
          imageOnLeft={true}
        >
          <Typography variant="h3" className={styles.manifestoTitle}>Project Overview & Goals (AR Prototype)</Typography>
          <Typography variant="p" className={styles.manifestoText}>
            This specific project explores the feasibility of a voice-activated user interface within a simulated Augmented Reality context, built using React and the Web Speech API.
          </Typography>
          <Typography variant='p' className={styles.manifestoText}>
            The primary goal was to prototype core voice command interactions (navigation, selection, actions) for hands-free operation and assess the potential user experience benefits and challenges. This project also served as the foundation for the tutorial video above.
          </Typography>
        </TwoColumnSection>
      </Section>

      <Section marginBottom="xl" padding="none">
        <TwoColumnSection
          imageSrc={vuiImage2}
          imageAlt="Diagram showing VUI/AR research analysis"
          imageOnLeft={false}
        >
          <Typography variant="h3" className={styles.manifestoTitle}>Initial Layout Concept (AR)</Typography>
          <Typography variant="p" className={styles.manifestoText}>
            Considering an AR overlay, the user's main view shouldn't be blocked. I explored placing the core content in a defined panel on the left, simulating a secondary display within the field of view, navigable by voice.
          </Typography>
        </TwoColumnSection>
      </Section>

      <Section marginBottom="xl" padding="none">
        <TwoColumnSection
          imageSrc={vuiImage4} // Changed from vuiImage3 to vary images
          imageAlt="User flow diagram for voice commands"
          imageOnLeft={true}
        >
          <Typography variant="h3" className={styles.manifestoTitle}>Feedback & Interaction Flow (AR)</Typography>
          <Typography variant="p" className={styles.manifestoText}>
            How does the user know a voice command was heard or is processing? The AR prototype incorporates a "Last Command" display for immediate visual confirmation, crucial for a seamless hands-free experience.
          </Typography>
        </TwoColumnSection>
      </Section>
      
      {/* Core Technologies & Implementation */}
      <Section marginBottom="xl">
         <Typography variant="h2" align="center">Core Technologies & Implementation</Typography>
        <TwoColumnSection
          imageSrc={vuiImage3} 
          imageAlt="Conceptual foundation for VUI AR"
          imageOnLeft={false} 
        >
          <Typography variant="h3" className={styles.manifestoTitle}>Handling Voice Commands: Web Speech API</Typography>
          <Typography variant="p" className={styles.manifestoText}>
            The foundation of these projects, particularly the AR prototype and the initial app, is the Web Speech API. It captures speech directly in the browser, providing the basis for voice recognition. The "Start Listening" button typically initiates this capture.
          </Typography>
          <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API" target="_blank" rel="noopener noreferrer" className={styles.ctaButtonLink} style={{ marginTop: '1rem', display: 'inline-block' }}>
            <Button variant="secondary" arrow>View Web Speech API Docs</Button>
          </a>
        </TwoColumnSection>
      </Section>
      <Section marginBottom="xl" padding="none">
        <TwoColumnSection
          imageSrc={vuiImage5} 
          imageAlt="Information architecture for VUI AR"
          imageOnLeft={true} 
        >
          <Typography variant="h3" className={styles.manifestoTitle}>Under the Hood: Logic & AI Integration</Typography>
          <Typography variant="p" className={styles.manifestoText}>
            Once speech is transcribed, JavaScript functions check the text for keywords ("next", "back", "show", etc.) to trigger corresponding actions (e.g., changing slides). For more advanced interactions, as shown in App #3 and discussed in the tutorial, OpenAI's API can be integrated for natural language understanding, allowing for more flexible and intelligent responses.
          </Typography>
        </TwoColumnSection>
      </Section>
      <Section marginBottom="xl" padding="none">
        <TwoColumnSection
          imageSrc={vuiImage6} 
          imageAlt="Visual mockups of the AR interface"
          imageOnLeft={false} 
        >
          <Typography variant="h3" className={styles.manifestoTitle}>Tech Stack Utilized</Typography>
          <Typography variant="p" className={styles.manifestoText}>
            Across these experiments and the tutorial, the primary technologies include: React, TypeScript, Vite, Web Speech API, OpenAI API, CSS (Modules), Netlify (for deployment), and GitHub (for version control).
          </Typography>
        </TwoColumnSection>
      </Section>

      {/* Learnings & Next Steps */}
      <Section marginBottom="xl">
        <Typography variant="h2" align="center">Learnings & Next Steps</Typography>
        <TwoColumnSection
          imageSrc={vuiImage7} 
          imageAlt="Figma design system snippets for VUI AR"
          imageOnLeft={true} 
        >
          <Typography variant="h3" className={styles.manifestoTitle}>Key Takeaways and Future Directions</Typography>
          <Typography variant="p" className={styles.manifestoText}>
            These projects were a valuable step into VUI development using web technologies. Key learning: The Web Speech API is highly accessible for developers, but achieving true context-awareness and seamless AR/voice interaction presents complex challenges. Creating the tutorial further highlighted the potential for these tools.
          </Typography>
          <Typography variant="p" className={styles.manifestoText}>
            Next steps could involve deeper UI/UX refinement for voice interactions, exploring advanced context management, or integrating other powerful APIs and libraries for voice technology such as those mentioned in the video (e.g., Pipecat, Voice Flow, Deepgram, 11 Labs, Google Cloud Speech-to-Text/Text-to-Speech).
          </Typography>
        </TwoColumnSection>
      </Section>

      {/* Call to Action */}
      <CtaSection></CtaSection>
    </div>
  );
};

export default Project2Page;