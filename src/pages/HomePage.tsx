// HomePage.tsx (Example)
import React from 'react';
import Typography from '../components/Typography/Typography';
import Card from '../components/Card/Card';
import Image from '../components/Image/Image';
import Button from '../components/Button/Button';
import styles from './HomePage.module.css';
import { Link } from 'react-router-dom';
import Section from '../components/Section/Section'; // Import
import TwoColumnSection from '../components/TwoColumnSection/TwoColumnSection';
import heroImageAlt from '../assets/hero-image-alt.png'
import clientLogos from '../assets/Client-logos.png'
import uxCertificate from '../assets/google-ux-certificate.png'

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className={styles.heroContent}>
            <Typography variant="h1" className={styles.heroTitle}>Personalization</Typography>
            <Typography variant="subtitle1" className={styles.heroSubtitle}>
            Designing Unique Digital Experiences for Every User
            </Typography>
            <Link to="/portfolio">
            <Button variant="primary" className={styles.heroButton} arrow>
              View My Work
            </Button>
        </Link>
      </div>

      {/* Unique UX About Section - Large padding */}
      <Section marginBottom="xl" padding="none">
        <TwoColumnSection
            imageSrc={heroImageAlt}
            imageAlt="About Unique UX"
            imageOnLeft={false}
        >
           <Typography variant="h2" className={styles.manifestoTitle}>About Unique UX</Typography>
            <Typography variant="p" className={styles.manifestoText}>
            Unique UX empowers you to shape the digital narrative. We provide the framework and tools to transform your vision into impactful, resonant user experiences.
            </Typography>
        </TwoColumnSection>
      </Section>

      {/* "My Process" Section - Medium padding */}
      <Section marginBottom="xl" padding="none">
        <Typography variant='h2' className={styles.sectionTitle}>
          My Process
        </Typography>
        <div className={styles.servicesGrid}>
  <Card className={styles.serviceItem}>
    <Typography variant='h4' className={styles.serviceTitle}>1. Discover</Typography>
    <Typography variant="p" className={styles.serviceDescription}>
      Understand user needs and project goals through research.
    </Typography>
  </Card>

  <Card className={styles.serviceItem}>
    <Typography variant='h4' className={styles.serviceTitle}>2. Define</Typography>
    <Typography variant="p" className={styles.serviceDescription}>
      Define clear problem statements and strategies.
    </Typography>
  </Card>

  <Card className={styles.serviceItem}>
    <Typography variant='h4' className={styles.serviceTitle}>3. Ideate</Typography>
    <Typography variant="p" className={styles.serviceDescription}>
     Generate and explore a wide range of potential solutions.
    </Typography>
  </Card>

  <Card className={styles.serviceItem}>
    <Typography variant='h4' className={styles.serviceTitle}>4. Design</Typography>
    <Typography variant="p" className={styles.serviceDescription}>
      Create wireframes, prototypes, and visual designs.
    </Typography>
  </Card>

  <Card className={styles.serviceItem}>
    <Typography variant='h4' className={styles.serviceTitle}>5. Test</Typography>
    <Typography variant="p" className={styles.serviceDescription}>
      Validate designs with users and gather feedback.
    </Typography>
  </Card>

  <Card className={styles.serviceItem}>
    <Typography variant='h4' className={styles.serviceTitle}>6. Refine</Typography>
    <Typography variant="p" className={styles.serviceDescription}>
      Iterate on designs based on testing and feedback.
    </Typography>
  </Card>
</div>
    </Section>

        {/* Trusted by professionals */}
    <Section marginBottom="xl" padding="md">
      <Typography variant="h2" className={styles.sectionTitle}>Trusted by professionals</Typography>
      <div className={styles.imageContainer}>
        <Image src={clientLogos} alt="Client Logos" className={styles.centeredImage} /> {/* ADD alt attribute */}
      </div>
    </Section>

    {/* Unique UX About Section - Large padding */}
    <Section marginBottom="xl" padding="none">
        <TwoColumnSection
            imageSrc={uxCertificate}
            imageAlt="About Unique UX"
            imageOnLeft={true}
        >
           <Typography variant="h2" className={styles.manifestoTitle}>Certificate | Foundations of UX design</Typography>
            <Typography variant="p" className={styles.manifestoText}>
            During my studies for the Google UX Design Certificate, I delved into the core principles of UX design, refining my skills in user research, prototyping, and interaction design.
            </Typography>
        </TwoColumnSection>
      </Section>


    {/* Call to Action */}
    <div className={styles.heroContent}>
        <Typography variant="h2" className={styles.ctaTitle}>Ready to Create Something Unique?</Typography>
        <Typography variant="p" className={styles.ctaSubtitle}>
          Let's collaborate to build a digital experience that transforms your business and delights your users.
        </Typography>
      {/* Use a Link component for external links */}
        <Link to="https://calendly.com/kyleranta/15min" target="_blank" rel="noopener noreferrer">
            <Button variant="primary" arrow>Book a Free Consultation</Button>
        </Link>
        <Typography variant="listItem" align="center">
         uniqueux13@gmail.com
    </Typography>
    </div>
    </div>
  );
};

export default HomePage;