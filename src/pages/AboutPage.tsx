import React from 'react';
import Typography from '../components/Typography/Typography';
import Card from '../components/Card/Card';
import Image from '../components/Image/Image';
import styles from './AboutPage.module.css'; // Import CSS Module


const AboutPage: React.FC = () => {
  return (
    <div>
      <Typography variant="h1" align='center' className={styles.pageTitle}>About Me</Typography>
      <Card>
        <Typography variant="p" className={styles.aboutIntro}>
          I'm a multidisciplinary designer and creator with a passion for building impactful experiences.  My background spans UX design, content strategy, copywriting, video editing, music, and even game design.  This diverse skillset allows me to approach projects from a holistic perspective, crafting solutions that are not only visually appealing but also strategically sound and emotionally resonant.
        </Typography>
        <Image src="/about-me-image.jpg" alt="About Kyle"  /> {/*Remove inline styling*/}
      </Card>
      <Card>
        <Typography variant="h2" className={styles.sectionTitle}>Experience</Typography>
        <Typography variant="subtitle1" className={styles.subSectionTitle}>Key Roles:</Typography>
        <ul>
            <li>UX Designer (Google Certified)</li>
            <li>Content Strategist & Copywriter</li>
            <li>Design System Specialist</li>
            <li>Creative Consultant</li>
        </ul>

        <Typography variant="subtitle1" className={styles.subSectionTitle}>Clients & Collaborations (Partial List):</Typography>
          <ul>
            <li>Wix</li>
            <li>JDI Integrated Experts</li>
            <li>Hello Bonsai</li>
            <li>Pixl Labs</li>
            <li>Icecream Apps</li>
            {/* Add more as needed, perhaps linking to case studies */}
          </ul>
        </Card>
        <Card>
            <Typography variant="h2" className={styles.sectionTitle}>Testimonials</Typography>

            <Typography variant='p' align='justify' className={styles.testimonial}>
                "Working with Kyle was a great experience. He totally exceeded my expectations... I'd highly recommend him and will be using him for future projects!" - Josh, CEO at Pixl Labs
            </Typography>

            <Typography variant='p' align='justify' className={styles.testimonial}>
                "Working with Kyle is easy and stress-free. He has a great work ethic and can meet even the tightest deadlines... I would highly recommend Kyle to anyone looking for creative services." - Daniel Catullo, CEO at City Drive Studios
            </Typography>
            {/* Add more testimonials here */}
        </Card>

    </div>
  );
};

export default AboutPage;