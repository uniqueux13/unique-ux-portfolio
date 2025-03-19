import React from 'react';
import Typography from '../components/Typography/Typography';
import Card from '../components/Card/Card';
import Image from '../components/Image/Image';
import {Link} from 'react-router-dom';
import styles from './PortfolioPage.module.css'; // Import CSS Module


const PortfolioPage: React.FC = () => {
  return (
    <div>
      <Typography variant="h1" align='center' className={styles.pageTitle}>Portfolio</Typography>

      <Card>
        <Typography variant="h2" className={styles.projectTitle}>Design System for [Client/Project Name]</Typography>
        <Typography variant="p" className={styles.projectDescription}>
          Developed a comprehensive design system that streamlined the user experience and improved brand consistency.  Resulted in a [quantifiable result, e.g., 15% reduction in user errors].
        </Typography>
        <Image src="/project-1-image.jpg" alt="Project 1 Screenshot"  /> {/*Remove inline styling*/}
          <Link to='/project1' className={styles.projectLink}>View Project</Link> {/* Link to detail page (create later) */}

      </Card>

      <Card>
        <Typography variant="h2" className={styles.projectTitle}>Website Redesign for [Client/Project Name]</Typography>
        <Typography variant="p" className={styles.projectDescription}>
          Led the redesign of [Client]'s website, focusing on user-centered design principles and improved information architecture.
        </Typography>
        <Image src="/project-2-image.jpg" alt="Project 2 Screenshot" />{/*Remove inline styling*/}
        <Link to='/project2' className={styles.projectLink}>View Project</Link>
      </Card>

      <Card>
        <Typography variant="h2" className={styles.projectTitle}>Content Strategy for [Client/Project Name]</Typography>
        <Typography variant="p" className={styles.projectDescription}>
            Created and implemented a content strategy which improved [Client]'s SEO.
        </Typography>
        <Image src="/project-3-image.jpg" alt="Project 3 Screenshot"  />{/*Remove inline styling*/}
        <Link to='/project3' className={styles.projectLink}>View Project</Link>

      </Card>

      {/* Add more projects as needed */}
    </div>
  );
};

export default PortfolioPage;