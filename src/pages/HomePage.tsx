// src/pages/HomePage.tsx
import React from "react";
import Section from "../components/Section/Section";
import Hero from "../components/Hero/Hero";
import Card from "../components/Card/Card";
import CtaSection from "../components/CtaSection/CtaSection"
// import TwoColumnSection from "../components/TwoColumnSection/TwoColumnSection";
import ScrollHighlightText from "../components/ScrollHighlightText/ScrollHighlightText";
// import CtaSection from "../components/CtaSection/CtaSection";
import Typography from "../components/Typography/Typography";
import HorizontalImageScroller from "../components/HorizontalImageScroller/HorizontalImageScroller";
// import ScrollHighlightText from "../components/ScrollHighlightText/ScrollHighlightText";
import styles from "./HomePage.module.css";
// import MultiStepContactForm from "../components/MultiStepContactForm/MultiStepContactForm";
import {
  FaBullseye,
  FaPencilAlt,
  FaChartLine,
  FaUsers,
  FaPuzzlePiece,
  FaMobileAlt,
  FaPaintBrush,
  FaVideo, // Add icons for services
} from "react-icons/fa"; // Choose icons

// Asset Imports
import gromoLogo from "../assets/Clients/gromo-logo.png";
import nimblebotLogo from "../assets/Clients/nimblebot-logo.png";
import ipsLogo from "../assets/Clients/ips-logo.png";
import bonsaiLogo from "../assets/Clients/bonsai-logo.png";
import icereamAppsLogo from "../assets/Clients/icecream-apps-logo.png";
import gallaudetLogo from "../assets/Clients/gallaudet-logo.png";
import documintLogo from "../assets/Clients/documint-logo.png";
import jdiLogo from "../assets/Clients/jdi-logo.png";
import portifyLogo from "../assets/Clients/portify-logo.png"; // Example logo, adjust as needed
// import uxCertificate from "../assets/google-ux-certificate.png";

// const youtubeEmbedUrl =
//   "https://www.youtube.com/embed/bIwTsAEJNF8?si=iP1RKxSzdA7MwotO";

const HomePage: React.FC = () => {
  // Define the logos for the scroller
  const trustedLogos = [
    { src: gromoLogo, alt: "GroMo Agency Logo" },
    { src: nimblebotLogo, alt: "Nimblebot Logo" },
    { src: jdiLogo, alt: "JDI Logo" },
    { src: ipsLogo, alt: "IPS Logo" },
    { src: bonsaiLogo, alt: "Bonsai Logo" },
    { src: icereamAppsLogo, alt: "Icecream Apps Logo" },
    { src: gallaudetLogo, alt: "Gallaudet University Logo" },
    { src: documintLogo, alt: "Documint Logo" },
    { src: portifyLogo, alt: "JDI Logo" },
  ];

  return (
    <>
      <div className={styles.heroBackground}>
        <Hero
          eyebrow='INTEGRATED CONTENT STUDIO'
          title='Create A Cohesive Digital Presence That Performs.'
          subtitle='We design intuitive interfaces, build cutting-edge web applications, and create targeted, often viral content – delivering unified solutions built for impact and reach.'
          // --- Add Social Proof Data ---
          rating='5.0' // Or use a number: 5
          testimonial='It is a pleasure to work with Unique UX, they are really good at what they do and they have great ideas!'
          testimonialAuthor='Nimblebot'
        />
      </div>

      {/* Trusted By / Scroller Section */}
      <Section padding='md' marginBottom='none'>
        <Typography
          variant='subtitle1'
          className={styles.centerP} // Or maybe "eyebrow", "subtitle2" depending on your variants
        >
          Trusted By Professionals
          {/* Or shorter: "Trusted By" */}
          {/* Or: "Powering Success For" */}
        </Typography>
      </Section>

      <div className={styles.trustedSection}>
        <HorizontalImageScroller
          images={trustedLogos}
          speed='50s' // Adjust speed as desired
          imageMaxHeight='55px' // Adjusted from previous example, tweak as needed
        />
      </div>

      <Section marginBottom="md">
        <ScrollHighlightText
          baseColor='var(--color-text-muted)'
          highlightColor='var(--color-text)'
          triggerPoint={0.7} // Adjust trigger point if needed
          align="center"
        >
          
          Transforming<span className={styles.highlightBox}>Your Vision</span>into a high-performing digital reality requires diverse capabilities. Explore the core services we offer to make it happen:
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
        {/* Title for the Services Section */}
        <h2
          id='services-section-title' // For accessibility
          style={{ textAlign: "center", marginBottom: "var(--space-sm)" }} // Center align title
        >
          Our Core Services
        </h2>

        {/* <p style={{ marginTop: 0, marginBottom: 0, marginLeft: "auto", marginRight: "auto", textAlign: "center", maxWidth: '800px' }}>
          You can find all of our core offerings below – from UX & UI design to content creation and branding. Each service is tailored to help you build a unified, high-impact digital presence.
        </p> */}

        {/* Container for the Service Cards - Reusing layout class */}
        <Section
          className={styles.stepCards} // Reusing the same layout style
          padding='none' // Let the outer Section handle overall padding
          aria-label='Service Categories'
        >
          {/* Service Card 1: UX & UI Design */}
          <Card className={styles.outcomeCard}>
            {" "}
            {/* Reusing card style */}
            <FaMobileAlt className={styles.cardIcon} aria-hidden='true' />{" "}
            {/* Icon */}
            <Typography variant='h3' className={styles.cardTitle}>
              {" "}
              {/* Title */}
              UX & UI Design
            </Typography>
            <Typography variant='p' className={styles.cardDescription}>
              {" "}
              {/* Description */}
              Intuitive interfaces & seamless user flows for web and mobile
              applications.
            </Typography>
            {/* You can wrap this Card in a <Link> later */}
          </Card>

          {/* Service Card 2: Graphic Design & Branding */}
          <Card className={styles.outcomeCard}>
            <FaPaintBrush className={styles.cardIcon} aria-hidden='true' />
            <Typography variant='h3' className={styles.cardTitle}>
              Graphic Design & Branding
            </Typography>
            <Typography variant='p' className={styles.cardDescription}>
              Memorable logos, complete brand identities, and engaging visual
              assets.
            </Typography>
            {/* You can wrap this Card in a <Link> later */}
          </Card>

          {/* Service Card 3: Writing & Content Creation */}
          <Card className={styles.outcomeCard}>
            <FaPencilAlt className={styles.cardIcon} aria-hidden='true' />
            <Typography variant='h3' className={styles.cardTitle}>
              Writing & Content Creation
            </Typography>
            <Typography variant='p' className={styles.cardDescription}>
              Compelling website copy, SEO-driven articles, and effective
              scriptwriting.
            </Typography>
            {/* You can wrap this Card in a <Link> later */}
          </Card>

          {/* Service Card 4: Video & Audio Production */}
          <Card className={styles.outcomeCard}>
            <FaVideo className={styles.cardIcon} aria-hidden='true' />
            <Typography variant='h3' className={styles.cardTitle}>
              Video & Audio Production
            </Typography>
            <Typography variant='p' className={styles.cardDescription}>
              Professional video editing, custom music, and sound design
              services.
            </Typography>
            {/* You can wrap this Card in a <Link> later */}
          </Card>
        </Section>
        {/* --- End Service Cards Container --- */}

      </Section>
      {/* === End NEW Services Section === */}

      <Section marginBottom="lg">
        <ScrollHighlightText
          baseColor='var(--color-text-muted)'
          highlightColor='var(--color-text)'
          triggerPoint={0.7} // Adjust trigger point if needed
          align="center"
        >
          Applying these services with strategic focus is key. Our commitment to
          <span className={styles.highlightBox}>Expert Execution</span>ensures every detail aligns with your goals.
        </ScrollHighlightText>
      </Section>

      {/* Process Section / Narrative & Deliverables */}
      <Section marginBottom='xxl' padding='none'>
        {/* Title for the Services Section */}
        <h2
          id='services-section-title' // For accessibility
          style={{ textAlign: "center", marginBottom: "var(--space-lg)" }} // Center align title
        >Key Service Outcomes
        </h2>
        {/* Narrative Text */}
        {/* --- NEW Card Section --- */}
        {/* Use className for styling card layout (e.g., flexbox/grid) */}
        <Section
          className={styles.stepCards}
          padding='sm'
          aria-label='Key Service Outcomes'
        >
          {/* Card 1: Example Outcome/Deliverable */}
          <Card className={styles.outcomeCard}>
            {" "}
            {/* Optional: Add class for card-specific styles */}
            <FaBullseye className={styles.cardIcon} aria-hidden='true' />{" "}
            {/* Icon */}
            <Typography variant='h4' className={styles.cardTitle}>
              {" "}
              {/* Title */}
              High-Converting Landing Pages
            </Typography>
            <Typography variant='p' className={styles.cardDescription}>
              {" "}
              {/* Description */}
              Receive pages meticulously designed not just for aesthetics, but
              to guide users effectively towards your key business objectives.
            </Typography>
          </Card>

          {/* Card 2: Example Outcome/Deliverable */}
          <Card className={styles.outcomeCard}>
            {/* Use FaUsers for audience focus, FaPencilAlt for creation */}
            <FaUsers className={styles.cardIcon} aria-hidden='true' />
            <Typography variant='h4' className={styles.cardTitle}>
              Audience-Focused Content
            </Typography>
            <Typography variant='p' className={styles.cardDescription}>
              Get compelling content engineered to attract, engage, and resonate
              deeply with your specific target audience's needs and motivations.
            </Typography>
          </Card>

          {/* Card 3: Example Outcome/Deliverable */}
          <Card className={styles.outcomeCard}>
            {/* FaSitemap or FaRoute for flow, FaPuzzlePiece for fitting together */}
            <FaPuzzlePiece className={styles.cardIcon} aria-hidden='true' />
            <Typography variant='h4' className={styles.cardTitle}>
              Seamless Digital Experiences
            </Typography>
            <Typography variant='p' className={styles.cardDescription}>
              Benefit from intuitive interfaces and user flows across web and
              content, eliminating friction for a cohesive brand journey.
            </Typography>
          </Card>

          {/* Card 4: Example Outcome/Deliverable (Optional) */}
          <Card className={styles.outcomeCard}>
            <FaChartLine className={styles.cardIcon} aria-hidden='true' />
            <Typography variant='h4' className={styles.cardTitle}>
              Measurable Impact & Growth
            </Typography>
            <Typography variant='p' className={styles.cardDescription}>
              Leverage data-driven insights and continuous optimization to
              ensure your digital presence delivers tangible results and growth.
            </Typography>
          </Card>
        </Section>
        {/* --- End NEW Card Section --- */}
      </Section>

      {/* <Section padding='sm' marginBottom='md'>
        <div className={styles.videoWrapper}>
          <iframe
            src={youtubeEmbedUrl} // Use the correct embed URL
            title='YouTube video player' // Keep a descriptive title
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
            // width/height/frameborder are handled by CSS now
          ></iframe>
        </div>
      </Section> */}

      {/* <Section padding='none' marginBottom='md'>
        {" "}
        <TwoColumnSection
          imageSrc={uxCertificate}
          imageAlt='Google UX Design Certificate'
          imageOnLeft={true}
        >
          <Typography variant='h2' className={styles.manifestoTitle}>
            Certificate | Foundations of UX design
          </Typography>
          <Typography variant='p' className={styles.manifestoText}>
            During my studies for the Google UX Design Certificate, I delved
            into the core principles of UX design, refining my skills in user
            research, prototyping, and interaction design through hands-on
            projects.
          </Typography>
        </TwoColumnSection>
      </Section> */}

<Section marginBottom="lg">
        <ScrollHighlightText
          baseColor='var(--color-text-muted)'
          highlightColor='var(--color-text)'
          triggerPoint={0.7} // Adjust trigger point if needed
          align="center"
        >
          When a landing page feels intuitive and tailor-made, it drives  
          <span className={styles.highlightBox}>Real Results.</span>Ready to build yours? Choose your next step below.
        </ScrollHighlightText>
      </Section>

        <div className={styles.wrapper}>
        <CtaSection>

        </CtaSection>
        </div>
        

      {/* <Section marginBottom='xl'>
        <CtaSection></CtaSection>
      </Section> */}
    </>
  );
};

export default HomePage;
