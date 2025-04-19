// src/components/MultiStepContactForm/MultiStepContactForm.tsx
import React, { useState, useMemo, FormEvent, ChangeEvent } from 'react';
import styles from './MultiStepContactForm.module.css';

// --- Import reusable components ---
// Adjust these paths according to your project structure
// Assuming these components exist and work as expected
import StepProgressBar from '../StepProgressBar/StepProgressBar'; // Example path
import Typography from '../Typography/Typography'; // Example path
import Button from '../Button/Button'; // Example path

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
    successLookLike: '',
    timeline: '',
    budgetRange: '',
    collaborationStyle: [],
    name: '',
    email: '',
    company: '',
    website: '',
};

// Define which steps require validation to proceed
// Steps: 1:Goal, 2:Details, 3:Challenges, 4:Success, 5:Logistics, 6:Collaboration, 7:Contact
const REQUIRED_STEPS = new Set([2, 4, 5, 7]); // Details, Success, Logistics, Contact are mandatory

// Validation function to check if required fields for a specific step are filled
const isStepDataValid = (step: number, data: FormData): boolean => {
    switch (step) {
        case 2: // Details
            return data.concernsDetails.trim() !== '';
        case 4: // Success
            return data.successLookLike.trim() !== '';
        case 5: // Logistics
            return data.timeline.trim() !== ''; // Budget is optional
        case 7: // Contact Info
            // Basic email check (contains '@' and '.') - enhance if needed
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return data.name.trim() !== '' &&
                   data.email.trim() !== '' &&
                   emailPattern.test(data.email);
        // Steps 1, 3, 6 are skippable (always valid for proceeding)
        default:
            // If it's not an explicitly required step, it's considered valid for navigation
            return !REQUIRED_STEPS.has(step);
    }
};


const MultiStepContactForm: React.FC<MultiStepContactFormProps> = ({ formName = "contactMultiStep" }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [submitMessage, setSubmitMessage] = useState('');

    // --- Calculate Button Disabled State using useMemo ---
    const isNextDisabled = useMemo(() => {
        if (isSubmitting) return true; // Always disable during submission

        // If the current step requires validation
        if (REQUIRED_STEPS.has(currentStep)) {
            // Disable if the step data is NOT valid
            return !isStepDataValid(currentStep, formData);
        }

        // Otherwise (skippable step), the button is enabled
        return false;

    }, [currentStep, formData, isSubmitting]);

    // Specific check for the final submit button (only relevant on Step 7)
    const isSubmitDisabled = useMemo(() => {
        if (isSubmitting) return true;
        // Disable if not on the last step OR if the last step's data is invalid
        return currentStep !== TOTAL_STEPS || !isStepDataValid(TOTAL_STEPS, formData);
    }, [currentStep, formData, isSubmitting]);


    // --- Handlers ---
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;

        if (type === 'checkbox') {
            const checkbox = e.target as HTMLInputElement;
            // Ensure the name is a key that holds string[] or undefined
            const listName = name as keyof Pick<FormData, 'challenges' | 'collaborationStyle'>;
            const currentList = formData[listName] || [];

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
        // Basic check just in case, though button state should prevent invalid progression
        if (currentStep < TOTAL_STEPS && !isNextDisabled) {
            setCurrentStep(prev => prev + 1);
            document.getElementById('multi-step-form-top')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(prev => prev - 1);
            document.getElementById('multi-step-form-top')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // --- Helper Function to Encode Data for Netlify ---
    const encode = (data: { [key: string]: any }): string => {
        return Object.keys(data)
          .map(key => {
            const value = data[key];
            if (Array.isArray(value)) {
              // Handle array values by repeating the key
              return value.map((item: string) => `${encodeURIComponent(key)}[]=${encodeURIComponent(item ?? '')}`).join('&');
            }
            // Handle single values (encode null/undefined as empty string)
            return `${encodeURIComponent(key)}=${encodeURIComponent(value ?? '')}`;
          })
          .filter(pair => pair) // Filter out empty pairs if any array was empty initially
          .join('&');
     };

    // --- AJAX handleSubmit for Netlify ---
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault(); // Prevent default browser submission

        // Final validation check, though button state should cover this
        if (!isStepDataValid(TOTAL_STEPS, formData)) {
            console.warn("Submit blocked by validation check.");
            setSubmitStatus('error');
            setSubmitMessage('Please ensure all required fields are filled correctly.');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');
        setSubmitMessage('');

        const body = encode({
          'form-name': formName, // Send form name with the data
          ...formData,          // Spread the rest of your form data
        });

        try {
          // POST to the same path the form is on (usually root '/')
          const response = await fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: body,
          });

          if (response.ok) {
            console.log('Form submission successful!');
            setSubmitStatus('success');
            setSubmitMessage('Thank you! Your inquiry has been submitted successfully. We\'ll be in touch soon.');
            // Optionally reset form after success (consider if needed)
            // setTimeout(() => {
            //   setCurrentStep(1);
            //   setFormData(INITIAL_FORM_DATA);
            //   setSubmitStatus('idle');
            // }, 5000);
          } else {
            console.error('Form submission error - Response not OK:', response);
            setSubmitStatus('error');
            setSubmitMessage(`Submission failed. Server responded with status: ${response.status} ${response.statusText || ''}. Please try again or contact us directly.`);
          }
        } catch (error) {
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
                    <Typography variant="p" className={styles.statusMessage}>{submitMessage}</Typography> {/* Use body1 or similar */}
                    {/* Optional: Add a button to try again on error */}
                    {submitStatus === 'error' && (
                         <Button onClick={() => {
                            setSubmitStatus('idle');
                            // Optional: Go back to the last step? Or stay on message?
                            // setCurrentStep(TOTAL_STEPS);
                         }} variant="secondary" >
                           Review Form
                         </Button>
                    )}
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

            {/* Netlify requires the form tag */}
            <form
                name={formName}
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className={styles.formElement}
                noValidate // Prevent browser default validation popups if you rely solely on JS
            >
                {/* Hidden Netlify inputs */}
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
                        <Button
                            type="button"
                            onClick={nextStep}
                            variant="primary"
                            className={styles.nextButton}
                            // Apply calculated disabled state for NEXT
                            disabled={isNextDisabled}
                            aria-disabled={isNextDisabled} // Good for accessibility
                        >
                            Next
                        </Button>
                    )}
                    {currentStep === TOTAL_STEPS && (
                        <Button
                            type="submit"
                            variant="primary"
                            className={styles.submitButton}
                            // Apply calculated disabled state for SUBMIT
                            disabled={isSubmitDisabled}
                            aria-disabled={isSubmitDisabled} // Good for accessibility
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit Inquiry & View Next Steps'}
                        </Button>
                    )}
                </div>
            </form>
        </div>
    );
};

// --- Step Field Components ---
// (Keep all Step component definitions as provided previously, ensuring 'required'
// attributes are present on mandatory HTML elements like inputs/textareas/selects
// within steps 2, 4, 5, 7 for accessibility and browser cues)

interface StepProps {
    formData: FormData;
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

// Step 1: Primary Goal (Skippable step - button always enabled)
const Step1Goal: React.FC<StepProps> = ({ formData, handleChange }) => {
    const painPoints = [ { value: 'improve', label: "Improve My Existing Product's Performance" }, { value: 'develop', label: "Develop a New Product/Feature Idea" }, { value: 'strategy', label: "Content, Brand, Strategy & Creative Direction" }, { value: 'other', label: "Something Else..." }, ];
    return ( <div className={styles.stepFields}> <Typography variant="h3" className={styles.stepHeadline}>What's your primary goal?</Typography> <div className={styles.radioGroup}> {painPoints.map(p => ( <label key={p.value} className={styles.radioLabel}> <input type="radio" name="painPoint" value={p.value} checked={formData.painPoint === p.value} onChange={handleChange} required /> <span>{p.label}</span> </label> ))} </div> {formData.painPoint === 'other' && ( <div className={styles.formGroup}> <label htmlFor="painPointOther" className={styles.formLabel}>Please specify:</label> <input type="text" id="painPointOther" name="painPointOther" value={formData.painPointOther || ''} onChange={handleChange} className={styles.formInput} required={formData.painPoint === 'other'} /> </div> )} </div> );
};
// Step 2: Detailed Description (Mandatory step)
const Step2Details: React.FC<StepProps> = ({ formData, handleChange }) => { return ( <div className={styles.stepFields}> <Typography variant="h3" className={styles.stepHeadline}>Tell me more about the project</Typography> <div className={styles.formGroup}> <label htmlFor="concernsDetails" className={styles.formLabel}> What specific problems are you facing? What have you tried already? (The more detail, the better!) </label> <textarea id="concernsDetails" name="concernsDetails" rows={6} value={formData.concernsDetails} onChange={handleChange} className={styles.formTextarea} placeholder="e.g., Our checkout process has a high drop-off rate, especially on mobile. We tried changing button colors last quarter with no luck..." required /> </div> </div> ); };
// Step 3: Specific Challenges (Skippable step)
const Step3Challenges: React.FC<StepProps> = ({ formData, handleChange }) => { const commonChallenges = ["Low Conversion", "User Confusion", "Technical Debt", "Unclear Requirements", "Outdated Design", "Unsure Where to Start"]; return ( <div className={styles.stepFields}> <Typography variant="h3" className={styles.stepHeadline}>Any specific challenges apply?</Typography> <div className={styles.formGroup}> <div className={styles.checkboxGroup}> {commonChallenges.map(challenge => ( <label key={challenge} className={styles.checkboxLabel}> <input type="checkbox" name="challenges" value={challenge} checked={formData.challenges?.includes(challenge)} onChange={handleChange} /> <span>{challenge}</span> </label> ))} </div> </div> </div> ); };
// Step 4: Defining Success (Mandatory step)
const Step4Success: React.FC<StepProps> = ({ formData, handleChange }) => { return ( <div className={styles.stepFields}> <Typography variant="h3" className={styles.stepHeadline}>What does success look like?</Typography> <div className={styles.formGroup}> <label htmlFor="successLookLike" className={styles.formLabel}>Describe the ideal outcome or key metrics for success.</label> <textarea id="successLookLike" name="successLookLike" rows={4} value={formData.successLookLike} onChange={handleChange} className={styles.formTextarea} placeholder="e.g., Increased conversion rate by 15%, positive user feedback within 3 months, a clear product roadmap for the next year..." required /> </div> </div> ); };
// Step 5: Project Logistics (Mandatory step - timeline required)
const Step5Logistics: React.FC<StepProps> = ({ formData, handleChange }) => { const timelines = ["ASAP (<1 Month)", "1-3 Months", "3-6 Months", "6+ Months", "Flexible / Unsure"]; const budgets = ["<$5,000", "$5,000 - $10,000", "$10,000 - $25,000", "$25,000 - $50,000", "$50,000+", "Let's Discuss"]; return ( <div className={styles.stepFields}> <Typography variant="h3" className={styles.stepHeadline}>Project Logistics</Typography> <div className={styles.formGroup}> <label htmlFor="timeline" className={styles.formLabel}>Ideal Project Timeline?</label> <select id="timeline" name="timeline" value={formData.timeline} onChange={handleChange} className={styles.formSelect} required > <option value="" disabled>Select a timeline...</option> {timelines.map(tl => <option key={tl} value={tl}>{tl}</option>)} </select> </div> <div className={styles.formGroup}> <label htmlFor="budgetRange" className={styles.formLabel}>Estimated Budget Range? (Optional, but helpful)</label> <select id="budgetRange" name="budgetRange" value={formData.budgetRange || ''} onChange={handleChange} className={styles.formSelect} > <option value="">Select a range (optional)...</option> {budgets.map(b => <option key={b} value={b}>{b}</option>)} </select> </div> </div> ); };
// Step 6: Collaboration Style (Skippable step)
const Step6Collaboration: React.FC<StepProps> = ({ formData, handleChange }) => { const collaborationStyles = ["Highly Collaborative (Frequent Interaction)", "Provide Direction, You Execute", "Regular Check-ins are Sufficient", "Mix of Collaboration & Autonomy"]; return ( <div className={styles.stepFields}> <Typography variant="h3" className={styles.stepHeadline}>How do you prefer to collaborate?</Typography> <div className={styles.formGroup}> <div className={styles.checkboxGroup}> {collaborationStyles.map(style => ( <label key={style} className={styles.checkboxLabel}> <input type="checkbox" name="collaborationStyle" value={style} checked={formData.collaborationStyle?.includes(style)} onChange={handleChange} /> <span>{style}</span> </label> ))} </div> </div> </div> ); };
// Step 7: Contact Information (Mandatory step - name & email required)
const Step7Contact: React.FC<StepProps> = ({ formData, handleChange }) => { return ( <div className={styles.stepFields}> <Typography variant="h3" className={styles.stepHeadline}>Your Contact Information</Typography> <div className={styles.formGroup}> <label htmlFor="name" className={styles.formLabel}>Full Name</label> <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={styles.formInput} required autoComplete="name" /> </div> <div className={styles.formGroup}> <label htmlFor="email" className={styles.formLabel}>Email Address</label> <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={styles.formInput} required autoComplete="email" pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" title="Please enter a valid email address" /> </div> <div className={styles.formGroup}> <label htmlFor="company" className={styles.formLabel}>Company (Optional)</label> <input type="text" id="company" name="company" value={formData.company || ''} onChange={handleChange} className={styles.formInput} autoComplete="organization" /> </div> <div className={styles.formGroup}> <label htmlFor="website" className={styles.formLabel}>Website (Optional)</label> <input type="url" id="website" name="website" value={formData.website || ''} onChange={handleChange} className={styles.formInput} placeholder="https://" autoComplete="url" /> </div> <Typography variant="p" className={styles.privacyNote}> Your information will be kept confidential and used solely for contacting you about your inquiry. </Typography> </div> ); }; // Used body2 for note


export default MultiStepContactForm;