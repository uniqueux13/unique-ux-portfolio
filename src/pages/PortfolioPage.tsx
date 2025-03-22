import React from 'react';
import Typography from '../components/Typography/Typography';
import {Link} from 'react-router-dom';
import styles from './PortfolioPage.module.css'; 
import Section from '../components/Section/Section'; 
import TwoColumnSection from '../components/TwoColumnSection/TwoColumnSection';
import caseStudyProject1 from '../assets/GromoCaseStudy/caseStudy-project-1.png';
import caseStudyProject2 from '../assets/GromoCaseStudy/caseStudy-project-2.png'; 
import caseStudyProject3 from '../assets/GromoCaseStudy/caseStudy-project-3.png'; 



const PortfolioPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className={styles.heroContent}>
            <Typography variant="h1" className={styles.heroTitle}>Driving Results Through Design</Typography>
            <Typography variant="subtitle1" className={styles.heroSubtitle}>
            Case Studies Demonstrating Impactful UX and Content Solutions            
            </Typography>
      </div>

      <Section marginBottom="xl" padding="none">
        <TwoColumnSection
            imageSrc= {caseStudyProject1}
            imageAlt="'Step-by-step' design from project inspiration board"
            imageOnLeft={true}
        >
           <Typography variant="h2" className={styles.projectTitle}>Marketing Agency</Typography>
        <Typography variant="p" className={styles.projectDescription}>
          Developed a comprehensive design system that streamlined the user experience and improved brand consistency.  Resulted in a 27% increase in leads.
        </Typography>
          <Link to='/project1' className={styles.projectLink}>View Project</Link> {/* Link to detail page (create later) */}
        </TwoColumnSection>
    </Section>

      <Section marginBottom="xl" padding="none">
        <TwoColumnSection
            imageSrc={caseStudyProject2}
            imageAlt="'Step-by-step' design from project inspiration board"
            imageOnLeft={false}
        >
           <Typography variant="h2" className={styles.projectTitle}>Plumbing Company</Typography>
        <Typography variant="p" className={styles.projectDescription}>
        Revitalized a plumbing company's digital presence with UX expertise from brand identity & UI design to company policy creation.        </Typography>
          <Link to='/project2' className={styles.projectLink}>View Project</Link> {/* Link to detail page (create later) */}
        </TwoColumnSection>
    </Section>

    <Section marginBottom="xl" padding="none">
        <TwoColumnSection
            imageSrc={caseStudyProject3}
            imageAlt="'Step-by-step' design from project inspiration board"
            imageOnLeft={true}
        >
           <Typography variant="h2" className={styles.projectTitle}>Card Game</Typography>
        <Typography variant="p" className={styles.projectDescription}>
        Dive into the strategic realm of Order & Entropy: Tactical Deckbuilder. Unleash chaos, shape strategies. Case study unveiling soon!        </Typography>
          <Link to='/project3' className={styles.projectLink}>View Project</Link> {/* Link to detail page (create later) */}
        </TwoColumnSection>
    </Section>

    </div>
  );
};

export default PortfolioPage;