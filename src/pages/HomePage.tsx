// HomePage.tsx (Correctly using imported Hero component)
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Component Imports
import Typography from '../components/Typography/Typography';
import Card from '../components/Card/Card';
import Image from '../components/Image/Image';
import Button from '../components/Button/Button';
import Section from '../components/Section/Section';
import TwoColumnSection from '../components/TwoColumnSection/TwoColumnSection';
import ImageGrid from '../components/ImageGrid/ImageGrid'; // Make sure this import is correct
import Hero from '../components/Hero/Hero'; // Correctly imported

// Style Imports
import styles from './HomePage.module.css';

// Asset Imports
import uxCertificate from '../assets/google-ux-certificate.png';
import gromoLogo from '../assets/Clients/gromo-logo.png';
import nimblebotLogo from '../assets/Clients/nimblebot-logo.png';
import ipsLogo from '../assets/Clients/ips-logo.png';
import bonsaiLogo from '../assets/Clients/bonsai-logo.png';
import icereamAppsLogo from '../assets/Clients/icecream-apps-logo.png';
import gallaudetLogo from '../assets/Clients/gallaudet-logo.png';

// --- React Icons Import ---
import {
  FaSearch, FaBullseye, FaRegLightbulb, FaPencilRuler, FaVial, FaTools, FaChevronDown, FaArrowRight
} from "react-icons/fa";

// --- Animation Variants ---
const containerVariants = { hidden: { opacity: 1 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }, };
const itemVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 13 } }, };
const contentVariants = { collapsed: { height: 0, opacity: 0, marginTop: 0, paddingTop: 0, transition: { duration: 0.25, ease: "circOut" } }, expanded: { height: 'auto', opacity: 1, marginTop: 'var(--space-sm)', paddingTop: 'var(--space-sm)', transition: { duration: 0.35, ease: "circIn" } } };

// --- Data for the Process Steps ---
interface ProcessStep { /* ... Interface definition ... */ id: number; title: string; shortDesc: string; longDesc?: React.ReactNode; methods?: string[]; outcome?: string; iterationNote?: string; icon: React.ElementType; }
const processStepsData: ProcessStep[] = [
  {
    id: 1, title: '1. Discover', icon: FaSearch,
    shortDesc: 'Understand user needs and project goals through research.',
    outcome: 'Clear understanding of user pain points, business goals, and technical constraints.',
    // Full text restored
    longDesc: 'In this phase, I focus on empathy. Activities include stakeholder interviews, user interviews, surveys, competitive analysis, and defining target audiences to grasp the core problem and context.',
    methods: ['User Interviews', 'Surveys', 'Competitive Analysis', 'Heuristic Evaluation', 'Stakeholder Interviews']
  },
  {
    id: 2, title: '2. Define', icon: FaBullseye,
    shortDesc: 'Define clear problem statements and strategies.',
    outcome: 'Actionable problem statements, user personas, and journey maps.',
    // Full text restored, includes existing Link
    longDesc: <>Synthesizing research findings, I create personas, user journey maps, and define key pain points and opportunities. This leads to a clear problem statement and project goals, ensuring we solve the right problem. See how personas were developed for <Link to="/project1">The GroMo Case Study</Link>.</>,
    methods: ['Personas', 'Journey Mapping', 'Problem Statements', 'Affinity Diagramming', 'Value Proposition Canvas']
  },
  {
    id: 3, title: '3. Ideate', icon: FaRegLightbulb,
    shortDesc: 'Generate and explore a wide range of potential solutions.',
    outcome: 'Diverse set of potential solutions and initial information architecture.',
     // Full text restored
    longDesc: 'Time for creative exploration! Techniques like brainstorming, Crazy 8s, storyboarding, and developing information architecture help generate diverse ideas before converging on promising directions.',
    methods: ['Brainstorming', 'Crazy 8s', 'Information Architecture', 'User Flows', 'Card Sorting']
  },
  {
    id: 4, title: '4. Design', icon: FaPencilRuler,
    shortDesc: 'Create wireframes, prototypes, and visual designs.',
    outcome: 'Low & high-fidelity wireframes, interactive prototypes, and UI mockups.',
    // Full text restored, includes existing placeholder Link - UPDATE THIS LINK
    longDesc: <>Translating ideas into tangible forms, starting with low-fidelity sketches or wireframes, moving to interactive prototypes (often in Figma), and finally creating high-fidelity visual designs and potentially contributing to design systems. See an example in the <Link to="/portfolio/update-this-link">View Case Study</Link>.</>,
    methods: ['Sketching', 'Wireframing', 'Prototyping (Figma)', 'UI Design', 'Design Systems', 'Accessibility Checks']
  },
  {
    id: 5, title: '5. Test', icon: FaVial,
    shortDesc: 'Validate designs with users and gather feedback.',
    outcome: 'Validated design decisions and prioritized list of usability issues.',
    // Full text restored, includes existing Link
    longDesc: <>Usability testing is crucial. I observe real users interacting with prototypes to identify pain points, validate design decisions, and gather actionable feedback for refinement. Testing early and often reduces risk. Read about the usability testing process for <Link to="/project2">View Case Study</Link>.</>,
    methods: ['Usability Testing (Moderated/Unmoderated)', 'A/B Testing', 'Preference Testing', 'Feedback Synthesis', 'Analytics Review'] ,
    iterationNote: 'Insights often lead back to the Design or Ideate phases.'
  },
  {
    id: 6, title: '6. Refine', icon: FaTools,
    shortDesc: 'Iterate on designs based on testing and feedback.',
    outcome: 'Improved final designs and developer handoff documentation.',
     // Full text restored
    longDesc: 'Based on testing insights and feedback, I iterate on the designs, addressing usability issues and improving the overall experience. This phase also includes preparing assets and documentation for developer handoff.',
    methods: ['Iteration', 'Design Adjustments', 'Handoff Documentation', 'QA Support'],
    iterationNote: 'Refinement is ongoing and can loop back as needed.'
  },
];

const HomePage: React.FC = () => {
  const [activeStepId, setActiveStepId] = useState<number | null>(1);

  const handleCardClick = (id: number) => {
    const nextActiveStepId = activeStepId === id ? null : id;
    const isOpening = nextActiveStepId !== null && activeStepId !== id;
    setActiveStepId(nextActiveStepId);
    if (isOpening) {
      const cardElement = document.getElementById(`step-card-${id}`);
      if (cardElement) {
        const fixedHeaderHeight = 80; // Adjust if needed
        const elementRect = cardElement.getBoundingClientRect();
        const elementTopRelativeToDocument = elementRect.top + window.pageYOffset;
        const targetScrollPosition = elementTopRelativeToDocument - fixedHeaderHeight - 20;
        window.scrollTo({ top: targetScrollPosition < 0 ? 0 : targetScrollPosition, behavior: "smooth" });
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent, id: number) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleCardClick(id); }
  };

  const getNextStepTitle = (currentId: number): string | undefined => {
    const nextStep = processStepsData.find(step => step.id === currentId + 1);
    return nextStep?.title.substring(nextStep.title.indexOf('.') + 1).trim();
  };

  return (
    <>
      {/* --- Correctly Using Hero Component with Props --- */}
      <Hero
        title="Personalization" // Title is required
        subtitle="Designing Unique Digital Experiences for Every User"
        buttonText="View My Work"
        buttonLink="/portfolio"
        showButton={true}
        buttonArrow={true}
      />
      {/* --- End Hero Component Usage --- */}

      {/* "My Process" Section - Animated Stepper */}
      <Section marginBottom="xxl" padding="none">
        <Typography variant='h2' className={styles.sectionTitle}> My Process </Typography>
        <Typography variant='p' className={styles.processIntroText}> While often presented linearly, my design process is flexible... Click a step header to explore or close. </Typography>
        <motion.div className={styles.processStepper} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} >
          {processStepsData.map((step) => { // ... Stepper Card mapping logic ...
                const isActive = activeStepId === step.id;
                const StepIcon = step.icon;
                const nextStepTitle = getNextStepTitle(step.id);
                return (
                  <motion.div key={step.id} variants={itemVariants}>
                    <Card id={`step-card-${step.id}`} className={`${styles.serviceItem} ${isActive ? styles.activeStep : ''}`} onClick={() => handleCardClick(step.id)} aria-expanded={isActive} aria-controls={`process-step-details-${step.id}`} tabIndex={0} onKeyPress={(e) => handleKeyPress(e, step.id)} >
                      <div className={styles.cardHeader}> <div className={styles.titleGroup}> <StepIcon className={styles.stepIcon} aria-hidden="true" /> <Typography variant='h4' className={styles.serviceTitle}>{step.title}</Typography> </div> <FaChevronDown className={`${styles.chevron} ${isActive ? styles.chevronExpanded : ''}`} aria-hidden="true" /> </div>
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div key="content" variants={contentVariants} initial="collapsed" animate="expanded" exit="collapsed" style={{ overflow: 'hidden' }} >
                            <>
                              <Typography variant="p" className={styles.serviceDescription}> {step.shortDesc} </Typography>
                              <div id={`process-step-details-${step.id}`} className={styles.expandedContent} >
                                {step.longDesc && ( <Typography variant="p" className={styles.longDescription}>{step.longDesc}</Typography> )}
                                {step.outcome && ( <div className={styles.outcomeSection}> <Typography variant='h6' className={styles.outcomeTitle}>Key Outcome:</Typography> <Typography variant='p' className={styles.outcomeText}>{step.outcome}</Typography> </div> )}
                                {step.methods && step.methods.length > 0 && ( <div className={styles.methodsSection}> <Typography variant="h5" className={styles.methodsTitle}>Common Methods/Tools:</Typography> <ul className={styles.methodsList}> {step.methods.map((method, index) => ( <li key={index}>{method}</li> ))} </ul> </div> )}
                                {step.iterationNote && ( <Typography variant="caption" className={styles.iterationNote}> <FaArrowRight size="0.85em" style={{ marginRight: '5px', verticalAlign: 'middle' }} /> {step.iterationNote} </Typography> )}
                                {step.id < processStepsData.length && nextStepTitle && ( <div className={styles.nextStepContainer}> <button className={styles.nextStepButton} onClick={(e) => { e.stopPropagation(); handleCardClick(step.id + 1); }} > Next: {nextStepTitle} <FaArrowRight style={{ marginLeft: '8px', verticalAlign: 'middle' }}/> </button> </div> )}
                              </div>
                            </>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Card>
                  </motion.div>
                );
          })}
        </motion.div>
      </Section>

      {/* Image Grid Section - Client Logos */}
      <Section marginBottom="xxl" padding="none">
        <Typography variant="h2" className={styles.sectionTitle}>Trusted by professionals</Typography>
        <ImageGrid>
             {/* Client logos... */}
            <div className={styles.imageContainer}><Image src={gromoLogo} alt="GroMo Agency Logo" className={styles.gridImage} /></div>
            <div className={styles.imageContainer}><Image src={nimblebotLogo} alt="Nimblebot Logo" className={styles.gridImage} /></div>
            <div className={styles.imageContainer}><Image src={ipsLogo} alt="IPS Logo" className={styles.gridImage} /></div>
            <div className={styles.imageContainer}><Image src={bonsaiLogo} alt="Bonsai Logo" className={styles.gridImage} /></div>
            <div className={styles.imageContainer}><Image src={icereamAppsLogo} alt="Icecream Apps Logo" className={styles.gridImage} /></div>
            <div className={styles.imageContainer}><Image src={gallaudetLogo} alt="Gallaudet University Logo" className={styles.gridImage} /></div>
        </ImageGrid>
      </Section>

      {/* Certificate Section */}
      <Section marginBottom="xxl" padding="none">
         <TwoColumnSection imageSrc={uxCertificate} imageAlt="Google UX Design Certificate" imageOnLeft={true} >
             <Typography variant="h2" className={styles.manifestoTitle}>Certificate | Foundations of UX design</Typography>
             <Typography variant="p" className={styles.manifestoText}> During my studies for the Google UX Design Certificate... </Typography>
        </TwoColumnSection>
      </Section>

      {/* Call to Action */}
      {/* Note: This still uses styles.heroContent. Rename if desired */}
      <div className={styles.heroContent}>
        <Typography variant="h2" className={styles.ctaTitle}>Ready to Create Something Unique?</Typography>
        <Typography variant="p" className={styles.ctaSubtitle}> Let's collaborate... </Typography>
        <Link to="https://calendly.com/kyleranta/15min" target="_blank" rel="noopener noreferrer"> <Button variant="primary" arrow>Book a Free Consultation</Button> </Link>
        <Typography variant="listItem" align="center" className={styles.emailContact}> uniqueux13@gmail.com </Typography>
      </div>
    </>
  );
};

export default HomePage;