// src/components/MultiStepContactForm/MultiStepContactForm.tsx
import React, { useState } from 'react';
import styles from './MultiStepContactForm.module.css';

// --- Import reusable components ---
// Adjust these paths according to your project structure
import StepProgressBar from '../StepProgressBar/StepProgressBar';
import Typography from '../Typography/Typography';
import Button from '../Button/Button';

// --- Define the structure for your form data ---
interface FormData {
  painPoint: string;
  painPointOther?: string;
  concernsDetails: string;
  challenges?: string[];
  successLookLike: string;
  timeline: string;
  budgetRange?: string;
  collaborationStyle?: string[];
  name: string;
  email: string;
  company?: string;
  website?: string;
}

// --- Define props if needed ---
interface MultiStepContactFormProps {
    formName?: string; // Name for Netlify form
}

// --- Configuration ---
const TOTAL_STEPS = 7;
const INITIAL_FORM_DATA: FormData = {
  painPoint: '',
  painPointOther: '',
  concernsDetails: '',
  challenges: [],
  timeline: '',
  budgetRange: '',
  successLookLike: '',
  collaborationStyle: [],
  name: '',
  email: '',
  company: '',
  website: '',
};

const MultiStepContactForm: React.FC<MultiStepContactFormProps> = ({ formName = "contactMultiStep" }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  // --- Handlers ---
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      const listName = name as keyof FormData;
      const currentList = Array.isArray(formData[listName]) ? formData[listName] as string[] : [];

      let newList: string[];
      if (checkbox.checked) {
        newList = currentList.includes(value) ? currentList : [...currentList, value];
      } else {
        newList = currentList.filter(item => item !== value);
      }
      setFormData(prev => ({ ...prev, [listName]: newList }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const nextStep = () => {
    // TODO: Add validation for the current step if needed
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(prev => prev + 1);
      const formTop = document.getElementById('multi-step-form-top');
      formTop?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      const formTop = document.getElementById('multi-step-form-top');
      formTop?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // --- Helper Function to Encode Data for Netlify ---
  const encode = (data: { [key: string]: any }): string => {
    return Object.keys(data)
      .map(key => {
        if (Array.isArray(data[key])) {
          // Handle array values (like checkboxes) by repeating the key with []
          return data[key].map((value: string) => `${encodeURIComponent(key)}[]=${encodeURIComponent(value)}`).join('&');
        }
        // Handle single values
        return `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`;
      })
      .join('&');
  };

  // --- AJAX handleSubmit for Netlify ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default browser submission

    // TODO: Add final validation if needed before submitting
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    const body = encode({
      'form-name': formName, // Send form name with the data
      ...formData,          // Spread the rest of your form data
    });

    try {
      // POST to the same path the form is on (adjust if form is not on '/')
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body,
      });

      if (response.ok) {
        console.log('Form submission successful!');
        setSubmitStatus('success');
        setSubmitMessage('Thank you! Your inquiry has been submitted successfully. We\'ll be in touch soon.');
        // Optional: Reset form after success (e.g., after a delay)
        // setTimeout(() => {
        //   setCurrentStep(1);
        //   setFormData(INITIAL_FORM_DATA);
        //   setSubmitStatus('idle'); // Allow new submission
        // }, 5000);
      } else {
        // Handle HTTP errors (like 404, 500 etc.)
        console.error('Form submission error - Response not OK:', response);
        setSubmitStatus('error');
        setSubmitMessage(`Submission failed. Server responded with status: ${response.status} ${response.statusText || ''}. Please try again or contact us directly.`);
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error('Form submission error - Exception caught:', error);
      setSubmitStatus('error');
      setSubmitMessage('An unexpected network error occurred. Please check your connection and try again, or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- Labels for the progress bar ---
  const stepLabels = [
    "Goal", "Details", "Challenges", "Success", "Logistics", "Collaboration", "Contact",
  ];

  // --- Render Logic ---

  // Show success/error message after submission attempt
  if (submitStatus === 'success' || submitStatus === 'error') {
    return (
      <div id="multi-step-form-top" className={styles.formContainer}>
         <div className={`${styles.submissionStatus} ${submitStatus === 'success' ? styles.success : styles.error}`}>
            <Typography variant="h3" className={styles.statusTitle}>
                {submitStatus === 'success' ? 'Submission Successful!' : 'Submission Failed'}
            </Typography>
            <Typography variant="h2" className={styles.statusMessage}>{submitMessage}</Typography>
            {/* Optional: Add a button to start over */}
            {/* {submitStatus === 'error' && (
                 <Button onClick={() => setSubmitStatus('idle')} variant="secondary" style={{ marginTop: '1rem' }}>
                    Try Again
                 </Button>
            )} */}
         </div>
      </div>
    );
  }

  // --- Render Form ---
  return (
    <div id="multi-step-form-top" className={styles.formContainer}>
        <Typography variant="h2" className={styles.formTitle}>Let's Start Solving Your Challenge</Typography>
        <div className={styles.progressBarWrapper}>
             <StepProgressBar
               totalSteps={TOTAL_STEPS}
               currentStep={currentStep}
               stepLabels={stepLabels}
             />
        </div>

        {/* Netlify requires the form tag for detection, even with JS submit */}
        <form
            name={formName}
            method="POST" // Still useful fallback/indicator, though JS handles it
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit} // Use our JS handler
            className={styles.formElement}
            // No 'action' attribute needed
        >
            {/* Hidden Netlify inputs required for detection */}
            <input type="hidden" name="form-name" value={formName} />
            <p className={styles.hidden} aria-hidden="true">
                <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
                </label>
            </p>

            {/* Render Current Step's Fields */}
            <div className={styles.stepContainer}>
                {currentStep === 1 && (<Step1Goal formData={formData} handleChange={handleChange} />)}
                {currentStep === 2 && (<Step2Details formData={formData} handleChange={handleChange} />)}
                {currentStep === 3 && (<Step3Challenges formData={formData} handleChange={handleChange} />)}
                {currentStep === 4 && (<Step4Success formData={formData} handleChange={handleChange} />)}
                {currentStep === 5 && (<Step5Logistics formData={formData} handleChange={handleChange} />)}
                {currentStep === 6 && (<Step6Collaboration formData={formData} handleChange={handleChange} />)}
                {currentStep === 7 && (<Step7Contact formData={formData} handleChange={handleChange} />)}
            </div>

            {/* Navigation Buttons */}
            <div className={styles.navigationButtons}>
                {currentStep > 1 && (
                    <Button type="button" onClick={prevStep} variant="secondary" className={styles.prevButton} disabled={isSubmitting}>
                        Previous
                    </Button>
                )}
                {currentStep < TOTAL_STEPS && (
                     <Button type="button" onClick={nextStep} variant="primary" className={styles.nextButton} disabled={isSubmitting}>
                        Next
                     </Button>
                )}
                {currentStep === TOTAL_STEPS && (
                    <Button type="submit" variant="primary" className={styles.submitButton} disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit Inquiry & View Next Steps'}
                    </Button>
                )}
            </div>
        </form>
    </div>
  );
};

// --- Step Field Components ---
// Consider moving each Step component into its own file for better organization

interface StepProps {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

// Step 1: Primary Goal
const Step1Goal: React.FC<StepProps> = ({ formData, handleChange }) => {
    const painPoints = [ { value: 'improve', label: "Improve My Existing Product's Performance" }, { value: 'develop', label: "Develop a New Product/Feature Idea" }, { value: 'strategy', label: "Content, Brand, Strategy & Creative Direction" }, { value: 'other', label: "Something Else..." }, ];
    return ( <div className={styles.stepFields}> <Typography variant="h3" className={styles.stepHeadline}>What's your primary goal?</Typography> <div className={styles.radioGroup}> {painPoints.map(p => ( <label key={p.value} className={styles.radioLabel}> <input type="radio" name="painPoint" value={p.value} checked={formData.painPoint === p.value} onChange={handleChange} required /> <span>{p.label}</span> </label> ))} </div> {formData.painPoint === 'other' && ( <div className={styles.formGroup}> <label htmlFor="painPointOther" className={styles.formLabel}>Please specify:</label> <input type="text" id="painPointOther" name="painPointOther" value={formData.painPointOther || ''} onChange={handleChange} className={styles.formInput} required /> </div> )} </div> );
};
// Step 2: Detailed Description
const Step2Details: React.FC<StepProps> = ({ formData, handleChange }) => { return ( <div className={styles.stepFields}> <Typography variant="h3" className={styles.stepHeadline}>Tell me more about the project</Typography> <div className={styles.formGroup}> <label htmlFor="concernsDetails" className={styles.formLabel}> What specific problems are you facing? What have you tried already? (The more detail, the better!) </label> <textarea id="concernsDetails" name="concernsDetails" rows={6} value={formData.concernsDetails} onChange={handleChange} className={styles.formTextarea} placeholder="e.g., Our checkout process has a high drop-off rate, especially on mobile. We tried changing button colors last quarter with no luck..." required /> </div> </div> ); };
// Step 3: Specific Challenges
const Step3Challenges: React.FC<StepProps> = ({ formData, handleChange }) => { const commonChallenges = ["Low Conversion", "User Confusion", "Technical Debt", "Unclear Requirements", "Outdated Design", "Unsure Where to Start"]; return ( <div className={styles.stepFields}> <Typography variant="h3" className={styles.stepHeadline}>Any specific challenges apply?</Typography> <div className={styles.formGroup}> <div className={styles.checkboxGroup}> {commonChallenges.map(challenge => ( <label key={challenge} className={styles.checkboxLabel}> <input type="checkbox" name="challenges" value={challenge} checked={formData.challenges?.includes(challenge)} onChange={handleChange} /> <span>{challenge}</span> </label> ))} </div> </div> </div> ); };
// Step 4: Defining Success
const Step4Success: React.FC<StepProps> = ({ formData, handleChange }) => { return ( <div className={styles.stepFields}> <Typography variant="h3" className={styles.stepHeadline}>What does success look like?</Typography> <div className={styles.formGroup}> <label htmlFor="successLookLike" className={styles.formLabel}>Describe the ideal outcome or key metrics for success.</label> <textarea id="successLookLike" name="successLookLike" rows={4} value={formData.successLookLike} onChange={handleChange} className={styles.formTextarea} placeholder="e.g., Increased conversion rate by 15%, positive user feedback within 3 months, a clear product roadmap for the next year..." required /> </div> </div> ); };
// Step 5: Project Logistics
const Step5Logistics: React.FC<StepProps> = ({ formData, handleChange }) => { const timelines = ["ASAP (<1 Month)", "1-3 Months", "3-6 Months", "6+ Months", "Flexible / Unsure"]; const budgets = ["<$5,000", "$5,000 - $10,000", "$10,000 - $25,000", "$25,000 - $50,000", "$50,000+", "Let's Discuss"]; return ( <div className={styles.stepFields}> <Typography variant="h3" className={styles.stepHeadline}>Project Logistics</Typography> <div className={styles.formGroup}> <label htmlFor="timeline" className={styles.formLabel}>Ideal Project Timeline?</label> <select id="timeline" name="timeline" value={formData.timeline} onChange={handleChange} className={styles.formSelect} required > <option value="" disabled>Select a timeline...</option> {timelines.map(tl => <option key={tl} value={tl}>{tl}</option>)} </select> </div> <div className={styles.formGroup}> <label htmlFor="budgetRange" className={styles.formLabel}>Estimated Budget Range? (Optional, but helpful)</label> <select id="budgetRange" name="budgetRange" value={formData.budgetRange} onChange={handleChange} className={styles.formSelect} > <option value="">Select a range (optional)...</option> {budgets.map(b => <option key={b} value={b}>{b}</option>)} </select> </div> </div> ); };
// Step 6: Collaboration Style
const Step6Collaboration: React.FC<StepProps> = ({ formData, handleChange }) => { const collaborationStyles = ["Highly Collaborative (Frequent Interaction)", "Provide Direction, You Execute", "Regular Check-ins are Sufficient", "Mix of Collaboration & Autonomy"]; return ( <div className={styles.stepFields}> <Typography variant="h3" className={styles.stepHeadline}>How do you prefer to collaborate?</Typography> <div className={styles.formGroup}> <div className={styles.checkboxGroup}> {collaborationStyles.map(style => ( <label key={style} className={styles.checkboxLabel}> <input type="checkbox" name="collaborationStyle" value={style} checked={formData.collaborationStyle?.includes(style)} onChange={handleChange} /> <span>{style}</span> </label> ))} </div> </div> </div> ); };
// Step 7: Contact Information
const Step7Contact: React.FC<StepProps> = ({ formData, handleChange }) => { return ( <div className={styles.stepFields}> <Typography variant="h3" className={styles.stepHeadline}>Your Contact Information</Typography> <div className={styles.formGroup}> <label htmlFor="name" className={styles.formLabel}>Full Name</label> <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={styles.formInput} required autoComplete="name" /> </div> <div className={styles.formGroup}> <label htmlFor="email" className={styles.formLabel}>Email Address</label> <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={styles.formInput} required autoComplete="email" /> </div> <div className={styles.formGroup}> <label htmlFor="company" className={styles.formLabel}>Company (Optional)</label> <input type="text" id="company" name="company" value={formData.company || ''} onChange={handleChange} className={styles.formInput} autoComplete="organization" /> </div> <div className={styles.formGroup}> <label htmlFor="website" className={styles.formLabel}>Website (Optional)</label> <input type="url" id="website" name="website" value={formData.website || ''} onChange={handleChange} className={styles.formInput} placeholder="https://" autoComplete="url" /> </div> <Typography variant="h2" className={styles.privacyNote}> Your information will be kept confidential and used solely for contacting you about your inquiry. </Typography> </div> ); };

export default MultiStepContactForm;