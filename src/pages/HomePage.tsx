import React from 'react';
import Typography from '../components/Typography/Typography';
import Card from '../components/Card/Card';
import Button from '../components/Button/Button';
import Video from '../components/Video/Video';
import Image from '../components/Image/Image';
import styles from './HomePage.module.css';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <Typography variant="h1" align='center' className={styles.heroTitle}>Understanding Users, Designing Solutions</Typography>
        <Typography variant="subtitle1" align='center' className={styles.heroIntro}>
          Scaling Design Systems One Decision At A Time
        </Typography>
        <Button variant="primary" onClick={() => window.location.href = '/portfolio'} className={styles.heroButton}>
          View My Work
        </Button>

        <div className={styles.videoContainer}>
          <Video
            src="/background-video.mp4"
            width="100%"
            height="100%"
            className={styles.video}
            autoPlay
            muted
            loop
          />
        </div>
      </div>

      {/* Unique UX Manifesto Section */}
      <section className={styles.manifestoSection}>
        <Card className={styles.manifestoCard}>
          <div className={styles.manifestoContent}>
            <Typography variant="h2" className={styles.manifestoTitle}>About Unique UX</Typography>
            <Typography variant="p" className={styles.manifestoText}>
              What if you could control the digital narrative? What if you could shape not just how people *use* technology, but how they *experience* it?
            </Typography>
            <Typography variant='p' className={styles.manifestoText}>
              At Unique UX, we believe you can. We provide the framework, the tools, and the understanding to transform your vision into reality. We believe in the power of systems to empower individuals, to unlock potential, and to create experiences that resonate deeply.
            </Typography>
            <Typography variant="subtitle1"  className={styles.manifestoQuestion}>
              Ready to take control?
            </Typography>
              <Link to="/about">
                <Button variant="primary">Learn More</Button>
              </Link>
          </div>
          <div className={styles.manifestoImageContainer}>
            <Image src="/about-image.png" alt="About Unique UX" className={styles.manifestoImage} />
          </div>
        </Card>
      </section>

      {/* "My Process" Section */}
      <section>
        <Typography variant='h2' className={styles.sectionTitle}>
          My Process
        </Typography>
        <div className={styles.servicesGrid}>
          <Card className={styles.serviceItem}>
            <Typography variant='subtitle1' className={styles.serviceTitle}>1. Research</Typography>
            <Typography variant="p" className={styles.serviceDescription}>
              Understanding user needs, behaviors, and goals through interviews, surveys, and data analysis.
            </Typography>
          </Card>

          <Card className={styles.serviceItem}>
            <Typography variant='subtitle1' className={styles.serviceTitle}>2. Strategize</Typography>
            <Typography variant="p" className={styles.serviceDescription}>
              Developing a clear design strategy based on research insights, defining user flows and information architecture.
            </Typography>
          </Card>

          <Card className={styles.serviceItem}>
            <Typography variant='subtitle1' className={styles.serviceTitle}>3. Design</Typography>
            <Typography variant="p" className={styles.serviceDescription}>
              Creating wireframes, prototypes, and visual designs, iterating based on feedback and testing.
            </Typography>
          </Card>

          <Card className={styles.serviceItem}>
            <Typography variant='subtitle1' className={styles.serviceTitle}>4. Test & Refine</Typography>
            <Typography variant="p" className={styles.serviceDescription}>
             Conducting user testing to validate designs and iterating based on findings to optimize the user experience.
            </Typography>
          </Card>
        </div>
      </section>

        {/* --- Testimonials Section --- */}
      <section className={styles.testimonialsSection}>
        <Typography variant='h2' className={styles.sectionTitle}>What Clients Say</Typography>
        <Card className={styles.testimonialCard}>
          <Typography variant="p" className={styles.testimonialText}>
            "Kyle's talent goes far beyond web design... He is a fantastic copywriter, graphic, and UX designer who can capture and hold his audience's attention..." - Steven Demoya, Digital Marketer at Wix
          </Typography>
        </Card>
      </section>

      {/* Call to Action */}
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
    </div>
  );
};

export default HomePage;