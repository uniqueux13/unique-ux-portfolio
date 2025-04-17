// src/components/MultiStepContactForm/MultiStepContactForm.tsx
import React, { useState } from 'react';
import styles from './MultiStepContactForm.module.css';

// Import reusable components
import StepProgressBar from '../StepProgressBar/StepProgressBar'; // Adjust path
import Typography from '../Typography/Typography';             // Adjust path
import Button from '../Button/Button';                       // Assuming you have a Button component

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

// Define props if needed
interface MultiStepContactFormProps {
    formName?: string; // Name for Netlify form
}

// --- Configuration ---
const TOTAL_STEPS = 7;

const MultiStepContactForm: React.FC<MultiStepContactFormProps> = ({ formName = "contactMultiStep" }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    // Initialize with default values
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
  });
  // --- NEW State for Submission Status ---
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  // --- End New State ---

  // --- Handlers ---
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
        // --- Handle Checkbox Groups ---
        const checkbox = e.target as HTMLInputElement;
        const listName = name as keyof FormData; // e.g., "challenges" or "collaborationStyle"
        // Ensure the target property exists and is an array
        const currentList = Array.isArray(formData[listName]) ? formData[listName] as string[] : [];

        let newList: string[];
        if (checkbox.checked) {
            // Add value if it's not already there
            newList = currentList.includes(value) ? currentList : [...currentList, value];
        } else {
            // Remove value
            newList = currentList.filter(item => item !== value);
        }
        setFormData(prev => ({ ...prev, [listName]: newList }));
        // --- End Handle Checkbox Groups ---
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };


  const nextStep = () => {
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

  // --- Helper Function to Encode Data ---
  const encode = (data: { [key: string]: any }): string => {
    return Object.keys(data)
      .map(key => {
        // Handle array values (like checkboxes) by repeating the key
        if (Array.isArray(data[key])) {
          return data[key].map((value: string) => `${encodeURIComponent(key)}[]=${encodeURIComponent(value)}`).join('&');
        }
        return `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`;
      })
      .join('&');
  };
  // --- End Helper Function ---


  // --- UPDATED handleSubmit Function ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Keep this!

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    const body = encode({
      'form-name': formName, // Crucial: Send form name with the data
      ...formData,          // Spread the rest of your form data
    });

    try {
      const response = await fetch('/', { // POST to the same path
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body,
      });

      if (response.ok) {
        console.log('Form submission successful!');
        setSubmitStatus('success');
        setSubmitMessage('Thank you! Your inquiry has been submitted successfully. We\'ll be in touch soon.');
        // Optionally reset form or redirect after a delay
        // setTimeout(() => {
        //   setCurrentStep(1); // Reset to first step
        //   setFormData({...initialFormData}); // Reset form data if you define initialFormData
        // }, 3000);
      } else {
        console.error('Form submission error:', response);
        setSubmitStatus('error');
        setSubmitMessage(`Submission failed. Status: ${response.statusText}. Please try again or contact us directly.`);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setSubmitMessage('An unexpected error occurred. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };
  // --- End UPDATED handleSubmit ---

  const stepLabels = [
    "Goal", "Details", "Challenges", "Success", "Logistics", "Collaboration", "Contact",
  ];

  // --- Render Logic ---
  // Show success/error message instead of form if submitted
  if (submitStatus === 'success' || submitStatus === 'error') {
    return (
      <div className={styles.formContainer}> {/* Optional: Reuse container style */}
         <div className={`${styles.submissionStatus} ${submitStatus === 'success' ? styles.success : styles.error}`}>
            <Typography variant="h3">
                {submitStatus === 'success' ? 'Submission Successful!' : 'Submission Failed'}
            </Typography>
            <Typography variant="h5">{submitMessage}</Typography>
            {/* Optional: Add a button to reset or go back */}
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

        <form
            name={formName}
            method="POST"
            data-netlify="true" // Keep for Netlify detection
            netlify-honeypot="bot-field" // Keep
            onSubmit={handleSubmit} // Triggers our fetch logic
            className={styles.formElement}
            // NO action attribute needed when submitting via JS
        >
            {/* Hidden Netlify inputs */}
            <input type="hidden" name="form-name" value={formName} />
            <p className={styles.hidden}>
                <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
                {/* Removed onChange - not needed for honeypot */}
                </label>
            </p>

            {/* Step Fields - Unchanged */}
            <div className={styles.stepContainer}>
                {currentStep === 1 && (<Step1Goal formData={formData} handleChange={handleChange} />)}
                {currentStep === 2 && (<Step2Details formData={formData} handleChange={handleChange} />)}
                {currentStep === 3 && (<Step3Challenges formData={formData} handleChange={handleChange} />)}
                {currentStep === 4 && (<Step4Success formData={formData} handleChange={handleChange} />)}
                {currentStep === 5 && (<Step5Logistics formData={formData} handleChange={handleChange} />)}
                {currentStep === 6 && (<Step6Collaboration formData={formData} handleChange={handleChange} />)}
                {currentStep === 7 && (<Step7Contact formData={formData} handleChange={handleChange} />)}
            </div>

            {/* Navigation Buttons - Add disabled state for submit */}
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


// --- Step Field Components (Keep these as they were) ---

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
const Step7Contact: React.FC<StepProps> = ({ formData, handleChange }) => { return ( <div className={styles.stepFields}> <Typography variant="h3" className={styles.stepHeadline}>Your Contact Information</Typography> <div className={styles.formGroup}> <label htmlFor="name" className={styles.formLabel}>Full Name</label> <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={styles.formInput} required autoComplete="name" /> </div> <div className={styles.formGroup}> <label htmlFor="email" className={styles.formLabel}>Email Address</label> <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={styles.formInput} required autoComplete="email" /> </div> <div className={styles.formGroup}> <label htmlFor="company" className={styles.formLabel}>Company (Optional)</label> <input type="text" id="company" name="company" value={formData.company || ''} onChange={handleChange} className={styles.formInput} autoComplete="organization" /> </div> <div className={styles.formGroup}> <label htmlFor="website" className={styles.formLabel}>Website (Optional)</label> <input type="url" id="website" name="website" value={formData.website || ''} onChange={handleChange} className={styles.formInput} placeholder="https://" autoComplete="url" /> </div> <Typography variant="h5" className={styles.privacyNote}> Your information will be kept confidential and used solely for contacting you about your inquiry. </Typography> </div> ); };


export default MultiStepContactForm;