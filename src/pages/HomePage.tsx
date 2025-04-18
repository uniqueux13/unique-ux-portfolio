import React from 'react';
import Typography from '../components/Typography/Typography';
import Section from '../components/Section/Section';
import TwoColumnSection from '../components/TwoColumnSection/TwoColumnSection';
import Hero from '../components/Hero/Hero';
// Process component imports are removed as it's replaced below
import HorizontalImageScroller from '../components/HorizontalImageScroller/HorizontalImageScroller';
import ScrollHighlightText from '../components/ScrollHighlightText/ScrollHighlightText';
import styles from './HomePage.module.css';
import MultiStepContactForm from '../components/MultiStepContactForm/MultiStepContactForm';

// Asset Imports
import uxCertificate from '../assets/google-ux-certificate.png';
import gromoLogo from '../assets/Clients/gromo-logo.png';
import nimblebotLogo from '../assets/Clients/nimblebot-logo.png';
import ipsLogo from '../assets/Clients/ips-logo.png';
import bonsaiLogo from '../assets/Clients/bonsai-logo.png';
import icereamAppsLogo from '../assets/Clients/icecream-apps-logo.png';
import gallaudetLogo from '../assets/Clients/gallaudet-logo.png';

// Icons related to the old process steps are no longer needed here
// import { FaSearch, FaBullseye, FaRegLightbulb, FaPencilRuler, FaVial, FaTools } from "react-icons/fa";

// ProcessStep interface and processStepsData constant are no longer needed here.

const HomePage: React.FC = () => {

  // Define the logos for the scroller
  const trustedLogos = [
    { src: gromoLogo, alt: 'GroMo Agency Logo' },
    { src: nimblebotLogo, alt: 'Nimblebot Logo' },
    { src: ipsLogo, alt: 'IPS Logo' },
    { src: bonsaiLogo, alt: 'Bonsai Logo' },
    { src: icereamAppsLogo, alt: 'Icecream Apps Logo' },
    { src: gallaudetLogo, alt: 'Gallaudet University Logo' },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero 
        title="Build Powerful Products People Love&nbsp;to&nbsp;Use&nbsp;"
        subtitle="Powerful UX strategies to help visionary teams build, launch, and grow products that users enjoy."
      />
  
    
    
  <div className={styles.trustedSection}>
        <HorizontalImageScroller 
            images={trustedLogos}
            speed="50s" // Adjust speed as desired
            imageMaxHeight="55px" // Adjusted from previous example, tweak as needed
        />
      </div>

      {/* Certificate Section */}
      <Section padding="sm" marginBottom="xxl"> {/* Ensure standard padding */}
         <TwoColumnSection
           imageSrc={uxCertificate}
           imageAlt="Google UX Design Certificate"
           imageOnLeft={true} // Or false depending on desired layout
         >
           <Typography variant="h2" className={styles.manifestoTitle}>Certificate | Foundations of UX design</Typography>
           <Typography variant="p" className={styles.manifestoText}>
           During my studies for the Google UX Design Certificate, I delved into the core principles of UX design, refining my skills in user research, prototyping, and interaction design through hands-on projects.
           </Typography>
        </TwoColumnSection>
      </Section>
      
        {/* Process Section */}
<Section padding="sm" marginBottom="md">
    {/* Other intro text if needed */}
    <ScrollHighlightText
      baseColor="var(--color-text-muted)" // Optional: Customize colors
      highlightColor="var(--color-text)"  // Optional: Customize colors
      triggerPoint={0.7} // Optional: Adjust trigger point
    >
      {/* --- PASTE YOUR LARGE PARAGRAPH TEXT HERE --- */}
      Intuitive Design. Powerful Results. Unique UX leverages expert user understanding to craft digital experiences that <span className={styles.highlightBox}>
          solve problems
      </span> engage users, and 
      <span className={styles.highlightBox}>
          accelerate your growth.
      </span>


Ready to see the difference expert UX can make? Describe your project below.
      {/* --- END LARGE PARAGRAPH TEXT --- */}
    </ScrollHighlightText>
</Section>

      <Section padding="none" marginBottom="xxl">
        <MultiStepContactForm/>
      </Section>

      {/* Call to Action Section */}
    </>
  );
};

export default HomePage;