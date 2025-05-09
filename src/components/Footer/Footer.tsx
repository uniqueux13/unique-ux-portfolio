import React from "react";
import { Link } from "react-router-dom"; // Assuming you use React Router for internal links
import styles from "./Footer.module.css";
import Typography from "../Typography/Typography"; // Assuming you have this component
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa"; // Example icons, adjust as needed

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Column 1: Brand & Brief Description (Optional but good) */}
        <div className={`${styles.footerColumn} ${styles.brandColumn}`}>
          <Typography variant='h5' className={styles.footerHeading}>
            Unique UX
          </Typography>
          <Typography variant='p' className={styles.footerText}>
            Crafting intuitive digital experiences that drive results. Based in
            Dayton, Ohio.
          </Typography>
          {/* Optional: Add Logo Image here */}
          {/* <img src="/path/to/your/logo-footer.png" alt="Unique UX Logo" className={styles.footerLogo} /> */}
        </div>

        {/* Column 2: Quick Links/Navigation */}
        <div className={styles.footerColumn}>
          <Typography variant='h5' className={styles.footerHeading}>
            Quick Links
          </Typography>
          <ul className={styles.linkList}>
            <li>
              <Link to='/' className={styles.footerLink}>
                Home
              </Link>
            </li>
            <li>
              <Link to='/services' className={styles.footerLink}>
                Services
              </Link>
            </li>
            <li>
              <Link to='/portfolio' className={styles.footerLink}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to='/about' className={styles.footerLink}>
                About
              </Link>
            </li>{" "}
          </ul>
        </div>

        {/* Column 3: Contact Information */}
        <div className={styles.footerColumn}>
          <Typography variant='h5' className={styles.footerHeading}>
            Get In Touch
          </Typography>
          <ul className={styles.linkList}>
            <li>
              <a
                href='mailto:uniqueux13@gmail.com'
                className={styles.footerLink}
              >
                {" "}
                {/* Replace with your actual email */}
                <FaEnvelope
                  className={styles.contactIcon}
                  aria-hidden='true'
                />{" "}
                uniqueux13@gmail
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Social Media */}
        <div className={styles.footerColumn}>
          <Typography variant='h5' className={styles.footerHeading}>
            Connect
          </Typography>
          <div className={styles.socialIcons}>
            {/* Replace '#' with your actual profile URLs */}
            <a
              href='https://www.linkedin.com/company/unique-ux/'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.socialLink}
              aria-label='LinkedIn Profile'
            >
              <FaLinkedin />
            </a>
            <a
              href='https://github.com/uniqueux13'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.socialLink}
              aria-label='GitHub Profile'
            >
              <FaGithub />
            </a>
            {/* Add other relevant social media icons/links */}
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright and Legal Links */}
      <div className={styles.footerBottom}>
        <Typography variant='p' className={styles.copyRight}>
          &copy; {currentYear} Unique UX. All rights reserved.
        </Typography>
        <div className={styles.legalLinks}>
          <Link to='/privacy-policy' className={styles.footerLink}>
            Privacy Policy
          </Link>{" "}
          {/* Create this page */}
          <span className={styles.legalSeparator}>|</span>
          <Link to='/terms-of-service' className={styles.footerLink}>
            Terms of Service
          </Link>{" "}
          {/* Create this page */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
