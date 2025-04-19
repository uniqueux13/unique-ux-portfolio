// src/pages/HomePage.tsx
import React from 'react';
import Typography from '../components/Typography/Typography';
import Section from '../components/Section/Section';
import TwoColumnSection from '../components/TwoColumnSection/TwoColumnSection';
import Hero from '../components/Hero/Hero';
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

const youtubeEmbedUrl = "https://www.youtube.com/embed/bIwTsAEJNF8?si=iP1RKxSzdA7MwotO";

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


      {/* Trusted By / Scroller Section */}
      <div className={styles.trustedSection}>
          <HorizontalImageScroller
              images={trustedLogos}
              speed="50s" // Adjust speed as desired
              imageMaxHeight="55px" // Adjusted from previous example, tweak as needed
          />
      </div>

    {/* --- START: Latest Video Section --- */}
    <Section padding="sm" marginBottom="md"> {/* Adjust padding/margin as needed */}
        {/* Responsive Video Wrapper */}
        <div className={styles.videoWrapper}>
            <iframe
                src={youtubeEmbedUrl} // Use the correct embed URL
                title="YouTube video player" // Keep a descriptive title
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                // width/height/frameborder are handled by CSS now
            ></iframe>
        </div>
      </Section>
      {/* --- END: Latest Video Section --- */}

      {/* Certificate Section */}
      <Section padding="none" marginBottom="md"> {/* Ensure standard padding */}
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


      {/* Process Section / Scroll Highlight Text */}
      <Section padding="sm" marginBottom="none">
        <ScrollHighlightText
          baseColor="var(--color-text-muted)"
          highlightColor="var(--color-text)"
          triggerPoint={0.7}
        >
          Intuitive Design. Powerful Results. Unique UX leverages expert user understanding to craft digital experiences that <span className={styles.highlightBox}>
             solve problems
          </span> engage users, and
          <span className={styles.highlightBox}>
             accelerate your growth.
          </span>
          <br /><br />
          Ready to see the difference <span className={styles.highlightBox}>expert UX</span> can make? Let's collaborate to turn your vision into a seamless and effective user experience. To get started, describe your project below – tell us about your objectives, <span className={styles.highlightBox}>target audience,</span> and any specific hurdles you're facing. We're excited to learn more.
        </ScrollHighlightText>
      </Section>

      {/* Multi-Step Form Section */}
      <Section padding="none" marginBottom="lg">
        <MultiStepContactForm/>
      </Section>

    </>
  );
};

export default HomePage;