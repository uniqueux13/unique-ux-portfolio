import React from 'react';
import styles from './ChatInvitation.module.css';
import Logo from '../../assets/logo.svg'; // Assuming your logo is an SVG
import avatar from '../../assets/kyle.png'; // Correctly imported

interface ChatInvitationProps {
  // Consider adding optional props for customization:
  // textColor?: string;
  // backgroundColor?: string;
}

const ChatInvitation: React.FC<ChatInvitationProps> = ({
  // ... potential props
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={Logo} alt="Unique UX Logo" />
      </div>

      <div className={styles.infoContainer}>
        <div className={styles.avatarContainer}>
          <img
            src={avatar} // <<< Use the imported variable
            alt="Kyle - Unique UX"
            className={styles.avatar}
          />
          <div className={styles.onlineStatus}>
            {/* Using a div for easier styling than span */}
            <div className={styles.onlineDot}></div>
          </div>
        </div>
        <div className={styles.message}>
          {/* Using Typography or simple p tags */}
          <p className={styles.greeting}>Hi, I'm Kyle, Founder of Unique UX.</p>
          <p className={styles.prompt}>Let's talk UX strategy.</p>
        </div>
      </div>
      {/* Consider making the button trigger an action */}
      <button className={styles.chatButton}>Chat Now</button>
    </div>
  );
};

export default ChatInvitation;