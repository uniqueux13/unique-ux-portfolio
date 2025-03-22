// HomePage.tsx (Example)
import React from 'react';
import Typography from '../components/Typography/Typography';
import Card from '../components/Card/Card';
import Button from '../components/Button/Button';
import styles from './HomePage.module.css';
import { Link } from 'react-router-dom';
import Section from '../components/Section/Section'; // Import
import TwoColumnSection from '../components/TwoColumnSection/TwoColumnSection';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className={styles.heroContent}>
            <Typography variant="h1" className={styles.heroTitle}>Design Experiences That Connect</Typography>
            <Typography variant="subtitle1" className={styles.heroSubtitle}>
            I'm Kyle, a Google Certified UX Designer blending data, strategy, and creative vision to build impactful design systems.            
            </Typography>
            <Button onClick={() => window.location.href = '/portfolio'} variant="primary" arrow>View Portfolio</Button>
      </div>

      {/* Unique UX About Section - Large padding */}
      <Section marginBottom="xl" padding="none">
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

    <div className={styles.heroContent}>
            <Typography variant="h2" className={styles.ctaTitle}>Ready to Create Something Unique?</Typography>
            <Typography variant="p" className={styles.ctaSubtitle}>
            Let's collaborate to build a digital experience that transforms your business and delights your users.
            </Typography>
            <Button onClick={() => window.location.href = '/portfolio'} variant="primary" arrow>Book a Free Consultation</Button>
      </div>
    </div>
  );
};

export default HomePage;