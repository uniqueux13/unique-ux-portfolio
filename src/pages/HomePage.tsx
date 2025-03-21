// HomePage.tsx (Example)
import React from 'react';
import Typography from '../components/Typography/Typography';
import Card from '../components/Card/Card';
import Button from '../components/Button/Button';
import Video from '../components/Video/Video';
import Image from '../components/Image/Image';
import styles from './HomePage.module.css';
import { Link } from 'react-router-dom';
import Section from '../components/Section/Section'; // Import
import TwoColumnSection from '../components/TwoColumnSection/TwoColumnSection';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section - No padding */}
      <section className={styles.heroSection}>
         <Typography variant="h1" align='center' className={styles.heroTitle}>Hi, Welcome to Unique UX</Typography>
        <Typography variant="heroP" align='center' className={styles.heroIntro}>
          Scaling Design Systems One Decision At A Time
        </Typography>
        <Button variant="primary" onClick={() => window.location.href = '/portfolio'} className={styles.heroButton}>
          View My Work
        </Button>
      </section>

      {/* Unique UX About Section - Large padding */}
      <Section marginBottom="sm" padding="none">
        <TwoColumnSection
            imageSrc="/about-image.png"
            imageAlt="About Unique UX"
            imageOnLeft={false}
        >
           <Typography variant="h2" className={styles.manifestoTitle}>About Unique UX</Typography>
            <Typography variant="p" className={styles.manifestoText}>
              What if you could control the digital narrative? What if you could shape not just how people *use* technology, but how they *experience* it?
            </Typography>
            <Typography variant='p' className={styles.manifestoText}>
              At Unique UX, we believe you can. We provide the framework, the tools, and the understanding to transform your vision into reality. We believe in the power of systems to empower individuals, to unlock potential, and to create experiences that resonate deeply.
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
    <Typography variant='subtitle1' className={styles.serviceTitle}>1. Discover</Typography>
    <Typography variant="p" className={styles.serviceDescription}>
      Understand user needs and project goals through research.
    </Typography>
  </Card>

  <Card className={styles.serviceItem}>
    <Typography variant='subtitle1' className={styles.serviceTitle}>2. Define</Typography>
    <Typography variant="p" className={styles.serviceDescription}>
      Define clear problem statements and strategies.
    </Typography>
  </Card>

  <Card className={styles.serviceItem}>
    <Typography variant='subtitle1' className={styles.serviceTitle}>3. Ideate</Typography>
    <Typography variant="p" className={styles.serviceDescription}>
     Generate and explore a wide range of potential solutions.
    </Typography>
  </Card>

  <Card className={styles.serviceItem}>
    <Typography variant='subtitle1' className={styles.serviceTitle}>4. Design</Typography>
    <Typography variant="p" className={styles.serviceDescription}>
      Create wireframes, prototypes, and visual designs.
    </Typography>
  </Card>

  <Card className={styles.serviceItem}>
    <Typography variant='subtitle1' className={styles.serviceTitle}>5. Test</Typography>
    <Typography variant="p" className={styles.serviceDescription}>
      Validate designs with users and gather feedback.
    </Typography>
  </Card>

  <Card className={styles.serviceItem}>
    <Typography variant='subtitle1' className={styles.serviceTitle}>6. Refine</Typography>
    <Typography variant="p" className={styles.serviceDescription}>
      Iterate on designs based on testing and feedback.
    </Typography>
  </Card>
</div>
    </Section>

      {/* Call to Action - Large padding */}
      <Section marginBottom="xl" padding="none">
        <Card>
        <Typography variant="h3" align="center">Let's Build Something Extraordinary</Typography>
        <Typography variant="p" align="center" className={styles.ctaText}>
        I'm here to help create a plan to take you from concept to reality.
        </Typography>
        <ul className={styles.ctaBenefits}>
            <li><Typography variant='p'>User-Centered Design Expertise</Typography></li>
            <li><Typography variant='p'>Strategic Content & Copywriting</Typography></li>
            <li><Typography variant='p'>Measurable Results & Continuous Improvement</Typography></li>
        </ul>
        <Link to="/contact">
            <Button variant='secondary'>Let's Talk</Button>
        </Link>
        </Card>
    </Section>
    </div>
  );
};

export default HomePage;