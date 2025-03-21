// src/pages/Project1Page.tsx
import React from 'react';
import Typography from '../components/Typography/Typography';
import Card from '../components/Card/Card';
import Image from '../components/Image/Image';
import Button from '../components/Button/Button';
import Section from '../components/Section/Section'; // Import Section
import TwoColumnSection from '../components/TwoColumnSection/TwoColumnSection'; // Import
import styles from './Project1Page.module.css';
import { Link } from 'react-router-dom';

const Project1Page: React.FC = () => {
  return (
    <div className={styles.project1Page}>
      {/* Hero Section */}
      <Section padding="md" className={styles.hero}>
            <Typography variant="h1" className={styles.projectTitle}>Marketing Agency Website Redesign</Typography>
            <Typography variant="subtitle1" className={styles.projectSubtitle}>
            Improving User Engagement and Lead Generation
            </Typography>
            <Typography variant="p" className={styles.keyResult}>
            Resulted in a 25% increase in lead generation.
            </Typography>
            <Image src="/project1-hero.jpg" alt="Project 1 Hero Image" className={styles.heroImage} />
      </Section>

      {/* The Challenge */}
      <Section padding="md">
        <Card className={styles.sectionCard}>
            <Typography variant="h2" className={styles.sectionTitle}>The Challenge</Typography>
            <Typography variant="p">
                The client, a marketing agency, was struggling with low website engagement and poor lead generation.  Their existing website was outdated, difficult to navigate, and didn't effectively communicate their services.
            </Typography>
        </Card>
      </Section>

      {/* My Role */}
      <Section padding="md">
        <Card className={styles.sectionCard}>
            <Typography variant="h2" className={styles.sectionTitle}>My Role</Typography>
            <Typography variant="p">
            UX Designer, Content Strategist, UI Designer
            </Typography>
        </Card>
     </Section>

      {/* Process Sections */}
      <Section padding="md">
        <Typography variant="h2" className={styles.sectionTitle}>The Process</Typography>

        <Typography variant="h3" className={styles.processStepTitle}>1. User Research</Typography>
        <TwoColumnSection imageSrc="/project1-research-1.jpg" imageAlt="User Research Example" >
            <div>
                <Typography variant="p">
                We began by conducting extensive user research to understand the target audience's needs, behaviors, and pain points. This included:
                </Typography>
                <ul>
                <li>
                    <Typography variant='p'>User interviews with 15 potential clients.</Typography>
                    </li>
                <li>
                    <Typography variant='p'>Online surveys with over 100 respondents.</Typography>
                    </li>
                <li>
                    <Typography variant='p'>Competitive analysis of 5 leading marketing agency websites.</Typography>
                    </li>
                <li>
                    <Typography variant='p'>Heuristic evaluation of the existing website.</Typography>
                </li>
                </ul>
            </div>
            <div>
                <Typography variant="p" className={styles.imageCaption}>User interview findings summary.</Typography>
            </div>
        </TwoColumnSection>
        <hr className={styles.sectionDivider}/>
     </Section>

        <Section padding="md">
            <Typography variant='h3' className={styles.processStepTitle}> 2. Strategy and Planning</Typography>
            <Typography variant='p'>
                Based off my findings, I created a series of steps to reach goals.
            </Typography>
            <Image src="/project1-image2.png" alt='Project 1 Image' className={styles.fullWidthImage}/>
             <hr className={styles.sectionDivider}/>
        </Section>

        <Section>
            <Typography variant='h3' className={styles.processStepTitle}>3. Wireframing and Prototyping</Typography>
            <TwoColumnSection imageSrc='/project1-image3.png' imageAlt='Project 1 Image'>
                <div>
                    <Typography variant='p'>
                        I created detailed wireframes to define the layout and interactions.
                    </Typography>
                </div>
                <div>
                    <Typography variant='p'>
                        I tested with real people.
                    </Typography>
                </div>
            </TwoColumnSection>
             <hr className={styles.sectionDivider}/>
        </Section>

        <Section padding="md">
            <Typography variant='h3' className={styles.processStepTitle}> 4. Design and Testing</Typography>
            <Typography variant='p'>
                This is text for section four.
            </Typography>
             <hr className={styles.sectionDivider}/>
        </Section>

      {/* Results Section */}
      <Section padding="md">
        <Typography variant="h2" className={styles.sectionTitle}>Results & Impact</Typography>
        <Typography variant="p">
          The redesigned website resulted in a 25% increase in lead generation, a 15% improvement in user engagement metrics, and positive feedback from both the client and their users.
        </Typography>
      </Section>

      {/* Call to Action */}
      <Section padding="md">
        <Card className={styles.sectionCard}>
        <Link to='/contact'>
            <Button variant='secondary'>Let's Talk</Button>
        </Link>
        </Card>
    </Section>
    </div>
  );
};

export default Project1Page;