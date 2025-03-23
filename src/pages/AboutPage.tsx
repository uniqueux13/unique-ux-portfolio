// AboutPage.tsx (Example)
import React from 'react';
import Typography from '../components/Typography/Typography';
import Button from '../components/Button/Button';
import styles from './AboutPage.module.css';
import { Link } from 'react-router-dom';
import Section from '../components/Section/Section'; // Import
import TwoColumnSection from '../components/TwoColumnSection/TwoColumnSection';
import working from '../assets/working.png'
import profilePicture from '../assets/kyle.png'

const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section - No padding */}
      <div className={styles.heroContent}>
            <Typography variant="h1" className={styles.heroTitle}>About Kyle</Typography>
            <Typography variant="subtitle1" className={styles.heroSubtitle}>
                The man behind the Unique UX brand.
            </Typography>
      </div>

    {/* Unique UX About Section - Large padding */}
    <Section marginBottom="xl" padding="none">
        <TwoColumnSection
            imageSrc={profilePicture}
            imageAlt="About Unique UX"
            imageOnLeft={false}
        >
           <Typography variant="h2" className={styles.manifestoTitle}>Design & Content</Typography>
            <Typography variant="p" className={styles.manifestoText}>
            I design user-centered digital experiences and the content that brings them to life. My skills span UI/UX design, content strategy, video production, and graphic design.
            </Typography>
        </TwoColumnSection>
    </Section>

          {/* When I'm not working Section */}
      <Section marginBottom="xl" padding="none">
        <TwoColumnSection
            imageSrc={working}
            imageAlt="a collage of hobbies that Kyle from Unique UX enjoys doing including an illustration of a man at a typewriter, card designs from a card game, and interesting black and white UI designs."
            imageOnLeft={true}
        >
           <Typography variant="h2" className={styles.manifestoTitle}>When I'm not working</Typography>
            <Typography variant="p" className={styles.manifestoText}>
            In my downtime, I channel creativity into writing science fiction narratives, designing card games, and delving into the technical realms of math, science, art, and history.
            </Typography>
        </TwoColumnSection>
      </Section>

      {/* I like this song Section*/}
      <Section padding="md">
            <TwoColumnSection
                imageSrc='https://www.youtube.com/embed/6-hRrKFkAQE?si=pxhLclOcjZ2Ts4pC'
                imageAlt="A song from my favourite band."
                imageOnLeft={false}
            >
            <div>
              <Typography variant='h2' className={styles.sectionTitle}>
                  I Like This Song
              </Typography>
              <Typography variant='p'>
                I think the name of the artist, title of the song, and overall, it fits well here.
              </Typography>
            </div>
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

export default AboutPage;