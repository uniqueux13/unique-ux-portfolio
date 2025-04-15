import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Typography from '../Typography/Typography';
import Card from '../Card/Card';
import Section from '../Section/Section';

import { FaChevronDown, FaArrowRight } from "react-icons/fa";

import styles from './ProcessAccordion.module.css';

import type { ProcessStep } from '../../pages/HomePage'; // Adjust path if needed

interface ProcessAccordionProps {
  steps: ProcessStep[];
}

const containerVariants = { hidden: { opacity: 1 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }, };
const itemVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 13 } }, };
const contentVariants = { collapsed: { height: 0, opacity: 0, marginTop: 0, paddingTop: 0, transition: { duration: 0.25, ease: "circOut" } }, expanded: { height: 'auto', opacity: 1, marginTop: 'var(--space-sm)', paddingTop: 'var(--space-sm)', transition: { duration: 0.35, ease: "circIn" } } };

const ProcessAccordion: React.FC<ProcessAccordionProps> = ({ steps }) => {
  const [activeStepId, setActiveStepId] = useState<number | null>(1);

  const handleCardClick = useCallback((id: number) => {
    const nextActiveStepId = activeStepId === id ? null : id;
    const isOpening = nextActiveStepId !== null && activeStepId !== id;
    setActiveStepId(nextActiveStepId);
    if (isOpening) {
      const cardElement = document.getElementById(`step-card-${id}`);
      if (cardElement) {
        const fixedHeaderHeight = 80;
        const elementRect = cardElement.getBoundingClientRect();
        const elementTopRelativeToDocument = elementRect.top + window.pageYOffset;
        const targetScrollPosition = elementTopRelativeToDocument - fixedHeaderHeight - 20;
        window.scrollTo({ top: targetScrollPosition < 0 ? 0 : targetScrollPosition, behavior: "smooth" });
      }
    }
  }, [activeStepId]);

  const handleKeyPress = useCallback((e: React.KeyboardEvent, id: number) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleCardClick(id); }
  }, [handleCardClick]);

  const getNextStepTitle = useCallback((currentId: number): string | undefined => {
    const nextStep = steps.find(step => step.id === currentId + 1);
    return nextStep?.title.substring(nextStep.title.indexOf('.') + 1).trim();
  }, [steps]);

  return (
    <Section marginBottom="xxl" padding="none">
      <Typography variant='h2' className={styles.sectionTitle}> My Process </Typography>
      <Typography variant='p' className={styles.processIntroText}> While often presented linearly, my design process is flexible and adapts to each project's unique needs. Phases may overlap, repeat, or change order based on discoveries and testing feedback. Click a step header to explore or close. </Typography>
      <motion.div className={styles.processStepper} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} >
        {steps.map((step) => {
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
                          {step.id < steps.length && nextStepTitle && ( <div className={styles.nextStepContainer}> <button className={styles.nextStepButton} onClick={(e) => { e.stopPropagation(); handleCardClick(step.id + 1); }} > Next: {nextStepTitle} <FaArrowRight style={{ marginLeft: '8px', verticalAlign: 'middle' }}/> </button> </div> )}
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
  );
};

export default ProcessAccordion;