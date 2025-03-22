// AboutPage.tsx (Example)
import React from 'react';
import Typography from '../components/Typography/Typography';
import Button from '../components/Button/Button';
import styles from './AboutPage.module.css';
import { Link } from 'react-router-dom';
import Section from '../components/Section/Section'; // Import
import TwoColumnSection from '../components/TwoColumnSection/TwoColumnSection';

interface WorkExperience {
    title: string;
    company: string;
    dates: string;
  }

const AboutPage: React.FC = () => {
    const workExperience: WorkExperience[] = [
        { title: 'UX Designer', company: '@GroMo', dates: '2022' },
        { title: 'UX Designer', company: '@PS', dates: '2019 & 2023' },
        { title: 'UX Designer', company: '@Hello Bonsai', dates: '2022' },
        { title: 'Writer', company: '@Icecream Apps', dates: '2022-2023' },
        { title: 'Writer | UX Designer', company: '@Labs', dates: '2022' },
        { title: 'UX Designer', company: '@OneBoard', dates: '2022' },
        { title: 'Writer', company: '@Bnatural Media', dates: '2022' },
        { title: 'Writer', company: '@Integrated Experts', dates: '2021-2022' },
        { title: 'UX Designer', company: '@Manor Publishing', dates: '2020-2021' },
        { title: 'Writer', company: '@Kind Organics', dates: '2021' },
        { title: 'Writer', company: '@Gallaudet University', dates: '2020-2021' },
        { title: 'Writer | UX Designer', company: '@Artifact Content', dates: '2017-2020' },
        { title: 'Writer | UX Designer', company: '@Bay in the Castle', dates: '2017-2019' },
        { title: 'Writer | Designer', company: '@The City Drive Group', dates: '2018-20xx' },
        // ... add the rest of your work experience
      ];
  return (
    <div>
      {/* Hero Section - No padding */}
      <div className={styles.heroContent}>
            <Typography variant="h1" className={styles.heroTitle}>About Kyle</Typography>
            <Typography variant="subtitle1" className={styles.heroSubtitle}>
                Content Designer
            </Typography>
      </div>

    {/* Unique UX About Section - Large padding */}
    <Section marginBottom="xl" padding="none">
        <TwoColumnSection
            imageSrc="/src\assets\kyle.png"
            imageAlt="About Unique UX"
            imageOnLeft={false}
        >
           <Typography variant="h2" className={styles.manifestoTitle}>Design & Content Creation</Typography>
            <Typography variant="p" className={styles.manifestoText}>
            I design user-centered digital experiences and the content that brings them to life. My skills span UI/UX design, content strategy, video production, and graphic design.
            </Typography>
        </TwoColumnSection>
    </Section>

    <Section padding="md">
        <Typography variant="h2" className={styles.sectionTitle}>
          Work Experience
        </Typography>
        <div className={styles.experienceContainer}>
          {workExperience.map((job, index) => (
            <div key={index} className={styles.experienceItem}>
              <Typography variant="subtitle1" className={styles.jobTitle}>{job.title}</Typography>
              <Typography variant="subtitle2" className={styles.company}>{job.company}</Typography>
              <Typography variant="p" className={styles.dates}>{job.dates}</Typography>
            </div>
          ))}
        </div>
      </Section>

    {/* Call to Action */}
    <div className={styles.heroContent}>
            <Typography variant="h2" className={styles.ctaTitle}>Ready to Create Something Unique?</Typography>
            <Typography variant="p" className={styles.ctaSubtitle}>
            Let's collaborate to build a digital experience that transforms your business and delights your users.
            </Typography>
            <Button variant="primary" onClick={() => window.location.href = '/contact'} className={styles.heroButton}>
          Let's Talk
        </Button>
      </div>
    </div>
  );
};

export default AboutPage;