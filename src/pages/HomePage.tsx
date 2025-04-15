import React from 'react';
import { Link } from 'react-router-dom';

// Component Imports
import Typography from '../components/Typography/Typography';
import Image from '../components/Image/Image';
import Section from '../components/Section/Section';
import TwoColumnSection from '../components/TwoColumnSection/TwoColumnSection';
import ImageGrid from '../components/ImageGrid/ImageGrid';
import Hero from '../components/Hero/Hero';
import ProcessAccordion from '../components/ProcessAccordion/ProcessAccordion';
import CtaSection from '../components/CtaSection/CtaSection'; // Import the CTA component

// Style Imports
import styles from './HomePage.module.css'; // Keep styles for sections not in components

// Asset Imports
import heroImageAlt from '../assets/hero-image-alt.png';
import uxCertificate from '../assets/google-ux-certificate.png';
import gromoLogo from '../assets/Clients/gromo-logo.png';
import nimblebotLogo from '../assets/Clients/nimblebot-logo.png';
import ipsLogo from '../assets/Clients/ips-logo.png';
import bonsaiLogo from '../assets/Clients/bonsai-logo.png';
import icereamAppsLogo from '../assets/Clients/icecream-apps-logo.png';
import gallaudetLogo from '../assets/Clients/gallaudet-logo.png';

// --- React Icons Import (For Process Data) ---
import { FaSearch, FaBullseye, FaRegLightbulb, FaPencilRuler, FaVial, FaTools } from "react-icons/fa";

// --- Define/Import Process Data and Interface ---
export interface ProcessStep {
  id: number; title: string; shortDesc: string; longDesc?: React.ReactNode;
  methods?: string[]; outcome?: string; iterationNote?: string; icon: React.ElementType;
}
const processStepsData: ProcessStep[] = [
    { id: 1, title: '1. Discover', icon: FaSearch, shortDesc: 'Understand user needs and project goals through research.', outcome: 'Clear understanding of user pain points, business goals, and technical constraints.', longDesc: 'In this phase, I focus on empathy...', methods: ['User Interviews', 'Surveys', 'Competitive Analysis', 'Heuristic Evaluation', 'Stakeholder Interviews'] },
    { id: 2, title: '2. Define', icon: FaBullseye, shortDesc: 'Define clear problem statements and strategies.', outcome: 'Actionable problem statements, user personas, and journey maps.', longDesc: <>Synthesizing research findings... <Link to="/project1">The GroMo Case Study</Link>.</>, methods: ['Personas', 'Journey Mapping', 'Problem Statements', 'Affinity Diagramming', 'Value Proposition Canvas'] },
    { id: 3, title: '3. Ideate', icon: FaRegLightbulb, shortDesc: 'Generate and explore a wide range of potential solutions.', outcome: 'Diverse set of potential solutions and initial information architecture.', longDesc: 'Time for creative exploration! Techniques like brainstorming...', methods: ['Brainstorming', 'Crazy 8s', 'Information Architecture', 'User Flows', 'Card Sorting'] },
    { id: 4, title: '4. Design', icon: FaPencilRuler, shortDesc: 'Create wireframes, prototypes, and visual designs.', outcome: 'Low & high-fidelity wireframes, interactive prototypes, and UI mockups.', longDesc: <>Translating ideas into tangible forms... <Link to="/portfolio/update-this-link">View Case Study</Link>.</>, methods: ['Sketching', 'Wireframing', 'Prototyping (Figma)', 'UI Design', 'Design Systems', 'Accessibility Checks'] },
    { id: 5, title: '5. Test', icon: FaVial, shortDesc: 'Validate designs with users and gather feedback.', outcome: 'Validated design decisions and prioritized list of usability issues.', longDesc: <>Usability testing is crucial... <Link to="/project2">View Case Study</Link>.</>, methods: ['Usability Testing (Moderated/Unmoderated)', 'A/B Testing', 'Preference Testing', 'Feedback Synthesis', 'Analytics Review'] , iterationNote: 'Insights often lead back to the Design or Ideate phases.' },
    { id: 6, title: '6. Refine', icon: FaTools, shortDesc: 'Iterate on designs based on testing and feedback.', outcome: 'Improved final designs and developer handoff documentation.', longDesc: 'Based on testing insights and feedback, I iterate...', methods: ['Iteration', 'Design Adjustments', 'Handoff Documentation', 'QA Support'], iterationNote: 'Refinement is ongoing and can loop back as needed.' },
];


const HomePage: React.FC = () => {
  return (
    <>
      <Hero
        title="Build Powerful Products People Love&nbsp;to&nbsp;Use&nbsp;"
        subtitle="Powerful UX strategies to help visionary teams build, launch, and grow products that users enjoy." // Keep updated subtitle
      />

      <Section marginBottom="xxl" padding="none">
        <TwoColumnSection
            imageSrc={heroImageAlt}
            imageAlt="About Unique UX"
            imageOnLeft={false}
        >
            <Typography variant="h2" className={styles.manifestoTitle}>About Unique UX</Typography>
            <Typography variant="p" className={styles.manifestoText}>
            Unique UX empowers you to shape the digital narrative. We provide the framework and tools to transform your vision into impactful, resonant user experiences.
            </Typography>
        </TwoColumnSection>
      </Section>

      <ProcessAccordion steps={processStepsData} />

      <Section marginBottom="xxl" padding="none">
        <Typography variant="h2" className={styles.sectionTitle}>Trusted by professionals</Typography>
        <ImageGrid>
            <div className={styles.imageContainer}><Image src={gromoLogo} alt="GroMo Agency Logo" className={styles.gridImage} /></div>
            <div className={styles.imageContainer}><Image src={nimblebotLogo} alt="Nimblebot Logo" className={styles.gridImage} /></div>
            <div className={styles.imageContainer}><Image src={ipsLogo} alt="IPS Logo" className={styles.gridImage} /></div>
            <div className={styles.imageContainer}><Image src={bonsaiLogo} alt="Bonsai Logo" className={styles.gridImage} /></div>
            <div className={styles.imageContainer}><Image src={icereamAppsLogo} alt="Icecream Apps Logo" className={styles.gridImage} /></div>
            <div className={styles.imageContainer}><Image src={gallaudetLogo} alt="Gallaudet University Logo" className={styles.gridImage} /></div>
        </ImageGrid>
      </Section>

      <Section marginBottom="xxl" padding="none">
         <TwoColumnSection
            imageSrc={uxCertificate}
            imageAlt="Google UX Design Certificate"
            imageOnLeft={true}
         >
             <Typography variant="h2" className={styles.manifestoTitle}>Certificate | Foundations of UX design</Typography>
             <Typography variant="p" className={styles.manifestoText}>
             During my studies for the Google UX Design Certificate, I delved into the core principles of UX design, refining my skills in user research, prototyping, and interaction design through hands-on projects.
             </Typography>
        </TwoColumnSection>
      </Section>

      <CtaSection />
    </>
  );
};

export default HomePage;