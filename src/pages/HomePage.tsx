// Example from HomePage.tsx (Corrected)
import React from 'react';
import Typography from '../components/Typography/Typography';
import Card from '../components/Card/Card';
import Button from '../components/Button/Button';
import Video from '../components/Video/Video';
import { FaUserCog, FaPencilAlt, FaBrain } from 'react-icons/fa';
import styles from './HomePage.module.css'; // Import CSS Module

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section with Background Video */}
      <div className={styles.heroContainer}>
        <Video
          src="/background-video.mp4"
          width="100%"
          height="100%"
          className={styles.video}
          autoPlay
          muted
          loop
        />
        <div className={styles.heroContent}>
          <Typography variant="h1" align='center' className={styles.heroTitle}>Beyond UI: Building Holistic Design Systems</Typography>
           <Typography variant="p" className={styles.heroIntro}>
              I'm Kyle, a Google Certified UX Designer, writer, and creative strategist. I don't just design interfaces; I craft complete design systems that connect with users on every level.
            </Typography>
          <Button variant="primary" onClick={() => window.location.href = '/portfolio'} className={styles.heroButton}>
            View My Work
          </Button>
        </div>
      </div>

      {/* "What I Do" Section */}
      <Card>
        <Typography variant='h2'>
          What I Do
        </Typography>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceItem}>
            <FaUserCog className={styles.icon} />
            <Typography variant='subtitle1'>UX Design & Strategy</Typography>
            <Typography variant="p">
              I create user-centered designs that are intuitive, accessible, and impactful.  From user research to prototyping and testing, I cover the full UX spectrum.
            </Typography>
          </div>

          <div className={styles.serviceItem}>
            <FaPencilAlt className={styles.icon} />
            <Typography variant='subtitle1'>Content Design & Copywriting</Typography>
            <Typography variant="p">
              I craft compelling narratives that resonate with your audience, whether it's website copy, marketing materials, or creative writing.
            </Typography>
          </div>

          <div className={styles.serviceItem}>
            <FaBrain className={styles.icon}/>
            <Typography variant='subtitle1'>Creative Problem Solving</Typography>
            <Typography variant="p"> I think outside the box to deliver innovative solutions that go beyond the expected. I'm also a musician, video editor, sci-fi writer, and game creator - bringing a unique perspective to every project.
            </Typography>
          </div>
        </div>
        <Typography variant='h3'>Testimonial</Typography>
        <Typography variant='p' align='justify'>
          "Kyle's talent goes far beyond web design. He is a fantastic copywriter, graphic, and UX designer who can capture and hold his audience's attention..." - Steven Demoya, Digital Marketer at Wix
        </Typography>
      </Card>

      {/* Call to Action */}
      <Card>
        <Button variant='primary' onClick={() => window.location.href = '/contact'}>
          Let's Talk
        </Button>
      </Card>
    </div>
  );
};

export default HomePage;