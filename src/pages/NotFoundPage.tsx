import React from 'react';
import Typography from '../components/Typography/Typography';
import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css'; // Import CSS Module

const NotFoundPage: React.FC = () => {
  return (
    <div>
      <Typography variant="h1" align='center' className={styles.pageTitle}>404 - Page Not Found</Typography>
      <Typography variant="p" align='center' className={styles.errorMessage}>
        Oops! The page you're looking for doesn't exist.
      </Typography>

        <Typography align='center' variant='p' >
            <Link to="/" className={styles.homeLink}>Go back to the homepage</Link>
        </Typography>

    </div>
  );
};

export default NotFoundPage;