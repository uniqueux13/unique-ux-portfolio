// src/pages/HomePage.tsx
import React from "react"; // No need for other hooks here anymore for this feature

// Component Imports
import Section from "../components/Section/Section";
import Hero from "../components/Hero/Hero";
import Card from "../components/Card/Card";
import CtaSection from "../components/CtaSection/CtaSection";
import ScrollHighlightText from "../components/ScrollHighlightText/ScrollHighlightText";
import Typography from "../components/Typography/Typography";
import HorizontalImageScroller from "../components/HorizontalImageScroller/HorizontalImageScroller";
import AnimatedHighlight from "../components/AnimatedHighlight/AnimatedHighlight"; // <-- Import the new component
import styles from "./HomePage.module.css";

// Icon Imports
import {
  FaBullseye,
  FaPencilAlt,
  FaChartLine,
  FaUsers,
  FaPuzzlePiece,
  FaMobileAlt,
  FaPaintBrush,
  FaVideo,
} from "react-icons/fa";

// Asset Imports
import gromoLogo from "../assets/Clients/gromo-logo.png";
import nimblebotLogo from "../assets/Clients/nimblebot-logo.png";
import ipsLogo from "../assets/Clients/ips-logo.png";
import bonsaiLogo from "../assets/Clients/bonsai-logo.png";
import icereamAppsLogo from "../assets/Clients/icecream-apps-logo.png";
import gallaudetLogo from "../assets/Clients/gallaudet-logo.png";
import documintLogo from "../assets/Clients/documint-logo.png";
import jdiLogo from "../assets/Clients/jdi-logo.png";
import portifyLogo from "../assets/Clients/portify-logo.png";

const HomePage: React.FC = () => {
  const trustedLogos = [
    { src: gromoLogo, alt: "GroMo Agency Logo" },
    { src: nimblebotLogo, alt: "Nimblebot Logo" },
    { src: jdiLogo, alt: "JDI Logo" },
    { src: ipsLogo, alt: "IPS Logo" },
    { src: bonsaiLogo, alt: "Bonsai Logo" },
    { src: icereamAppsLogo, alt: "Icecream Apps Logo" },
    { src: gallaudetLogo, alt: "Gallaudet University Logo" },
    { src: documintLogo, alt: "Documint Logo" },
    { src: portifyLogo, alt: "Portify Logo" }, // Corrected alt text potentially
  ];

  return (
    <>
      <div className={styles.heroBackground}>
        <Hero
          eyebrow='CONTENT STUDIO'
          title='Create A Digital Presence That Performs.'
          subtitle='We design intuitive interfaces, build cutting-edge web applications, and create targeted, often viral content – delivering unified solutions built for impact and reach.'
          rating='5.0'
          testimonial='It is a pleasure to work with Unique UX, they are really good at what they do and they have great ideas!'
          testimonialAuthor='Nimblebot'
        />
      </div>

      <Section padding='md' marginBlock='xs'>
        <Typography
          variant='subtitle1'
          className={styles.centerP}
        >
          Trusted By Professionals
        </Typography>
      </Section>

      <div className={styles.trustedSection}>
        <HorizontalImageScroller
          images={trustedLogos}
          speed='50s'
          imageMaxHeight='55px'
        />
      </div>

      {/* === First Highlighted Text === */}
      <Section marginBottom="md">
        <ScrollHighlightText
          baseColor='var(--color-text-muted)'
          highlightColor='var(--color-text)'
          triggerPoint={0.7}
          align="center"
        >
          Transforming <AnimatedHighlight>Your Vision</AnimatedHighlight> into a high-performing digital reality requires diverse capabilities. Explore the core services we offer to make it happen:
        </ScrollHighlightText>
      </Section>

      {/* ============================== */}
      {/* === NEW Services Section === */}
      {/* ============================== */}
      <Section
        marginBottom='md'
        padding='sm'
        aria-labelledby='services-section-title'
      >
        <h2
          id='services-section-title'
          style={{ textAlign: "center", marginBottom: "var(--space-sm)" }}
        >
          Our Core Services
        </h2>
        <Section
          className={styles.stepCards}
          padding='none'
          aria-label='Service Categories'
        >
          {/* Service Card 1: UX & UI Design */}
          <Card className={styles.outcomeCard}>
            <FaMobileAlt className={styles.cardIcon} aria-hidden='true' />
            <Typography variant='h3' className={styles.cardTitle}>
              UX & UI Design
            </Typography>
            <Typography variant='p' className={styles.cardDescription}>
              Intuitive interfaces & seamless user flows for web and mobile applications.
            </Typography>
          </Card>
          {/* Service Card 2: Graphic Design & Branding */}
          <Card className={styles.outcomeCard}>
            <FaPaintBrush className={styles.cardIcon} aria-hidden='true' />
            <Typography variant='h3' className={styles.cardTitle}>
              Graphic Design & Branding
            </Typography>
            <Typography variant='p' className={styles.cardDescription}>
              Memorable logos, complete brand identities, and engaging visual assets.
            </Typography>
          </Card>
          {/* Service Card 3: Writing & Content Creation */}
          <Card className={styles.outcomeCard}>
            <FaPencilAlt className={styles.cardIcon} aria-hidden='true' />
            <Typography variant='h3' className={styles.cardTitle}>
              Writing & Content Creation
            </Typography>
            <Typography variant='p' className={styles.cardDescription}>
              Compelling website copy, SEO-driven articles, and effective scriptwriting.
            </Typography>
          </Card>
          {/* Service Card 4: Video & Audio Production */}
          <Card className={styles.outcomeCard}>
            <FaVideo className={styles.cardIcon} aria-hidden='true' />
            <Typography variant='h3' className={styles.cardTitle}>
              Video & Audio Production
            </Typography>
            <Typography variant='p' className={styles.cardDescription}>
              Professional video editing, custom music, and sound design services.
            </Typography>
          </Card>
        </Section>
      </Section>
      {/* === End NEW Services Section === */}

      {/* === Second Highlighted Text === */}
      <Section marginBottom="lg">
        <ScrollHighlightText
          baseColor='var(--color-text-muted)'
          highlightColor='var(--color-text)'
          triggerPoint={0.7}
          align="center"
        >
          Applying these services with strategic focus is key. Our commitment to <AnimatedHighlight>Expert Execution</AnimatedHighlight> ensures every detail aligns with your goals.
        </ScrollHighlightText>
      </Section>

      {/* Process Section / Narrative & Deliverables */}
      <Section marginBottom='xl' padding='sm'>
        <h2
          // Note: Duplicate ID 'services-section-title'. IDs should be unique.
          // Consider renaming this one (e.g., 'outcomes-section-title')
          id='outcomes-section-title'
          style={{ textAlign: "center", marginBottom: "var(--space-lg)" }}
        >Key Service Outcomes
        </h2>
        <Section
          className={styles.stepCards}
          padding='sm'
          aria-label='Key Service Outcomes'
        >
          {/* Card 1: Example Outcome/Deliverable */}
          <Card className={styles.outcomeCard}>
            <FaBullseye className={styles.cardIcon} aria-hidden='true' />
            <Typography variant='h4' className={styles.cardTitle}>
              High-Converting Landing Pages
            </Typography>
            <Typography variant='p' className={styles.cardDescription}>
              Receive pages meticulously designed not just for aesthetics, but to guide users effectively towards your key business objectives.
            </Typography>
          </Card>
          {/* Card 2: Example Outcome/Deliverable */}
          <Card className={styles.outcomeCard}>
            <FaUsers className={styles.cardIcon} aria-hidden='true' />
            <Typography variant='h4' className={styles.cardTitle}>
              Audience-Focused Content
            </Typography>
            <Typography variant='p' className={styles.cardDescription}>
              Get compelling content engineered to attract, engage, and resonate deeply with your specific target audience's needs and motivations.
            </Typography>
          </Card>
          {/* Card 3: Example Outcome/Deliverable */}
          <Card className={styles.outcomeCard}>
            <FaPuzzlePiece className={styles.cardIcon} aria-hidden='true' />
            <Typography variant='h4' className={styles.cardTitle}>
              Seamless Digital Experiences
            </Typography>
            <Typography variant='p' className={styles.cardDescription}>
              Benefit from intuitive interfaces and user flows across web and content, eliminating friction for a cohesive brand journey.
            </Typography>
          </Card>
          {/* Card 4: Example Outcome/Deliverable (Optional) */}
          <Card className={styles.outcomeCard}>
            <FaChartLine className={styles.cardIcon} aria-hidden='true' />
            <Typography variant='h4' className={styles.cardTitle}>
              Measurable Impact & Growth
            </Typography>
            <Typography variant='p' className={styles.cardDescription}>
              Leverage data-driven insights and continuous optimization to ensure your digital presence delivers tangible results and growth.
            </Typography>
          </Card>
        </Section>
      </Section>

      {/* === Third Highlighted Text === */}
      <Section marginBottom="xxl">
        <ScrollHighlightText
          baseColor='var(--color-text-muted)'
          highlightColor='var(--color-text)'
          triggerPoint={0.7}
          align="center"
        >
          When a landing page feels intuitive and tailor-made, it drives <AnimatedHighlight>Real Results.</AnimatedHighlight> Ready to build yours? Choose your next step below.
        </ScrollHighlightText>
      </Section>

      <div className={styles.wrapper}>
        <CtaSection>
          {/* Assuming CtaSection handles its own content */}
        </CtaSection>
      </div>

      {/* Comments for potentially unused sections are kept */}
      {/* <Section padding='sm' marginBottom='md'> ... video ... </Section> */}
      {/* <Section padding='none' marginBottom='md'> ... TwoColumnSection ... </Section> */}
      {/* <Section marginBottom='xl'> <CtaSection></CtaSection> </Section> */}
    </>
  );
};

export default HomePage;