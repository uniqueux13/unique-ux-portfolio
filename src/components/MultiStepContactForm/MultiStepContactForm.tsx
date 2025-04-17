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
  challenges?: string[]; // Moved to Step 3
  successLookLike: string; // Moved to Step 4
  timeline: string; // Moved to Step 5
  budgetRange?: string; // Moved to Step 5
  collaborationStyle?: string[]; // Moved to Step 6
  name: string; // Moved to Step 7
  email: string; // Moved to Step 7
  company?: string; // Moved to Step 7
  website?: string; // Moved to Step 7
}

// Define props if needed
interface MultiStepContactFormProps {
    formName?: string; // Name for Netlify form
}

// --- Configuration ---
const TOTAL_STEPS = 7; // Updated total steps

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

  // --- Handlers (No changes needed here) ---
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      const listName = name as keyof FormData;
      const currentList = (formData[listName] as string[] | undefined) || [];

      if (checkbox.checked) {
        setFormData(prev => ({
          ...prev,
          [listName]: [...currentList, value]
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          [listName]: currentList.filter(item => item !== value)
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const nextStep = () => {
    // Add validation logic here if needed before proceeding
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

  // --- FIX APPLIED HERE ---
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default browser form submission
    // ----------------------
    console.log("Form Data Submitted (to Netlify):", formData);
    // Netlify handles submission via attributes, but preventDefault is still good practice
    // If you needed additional JS logic before Netlify takes over, it would go here.
  };

  // --- Labels for the progress bar (Updated) ---
  const stepLabels = [
    "Goal",         // Step 1
    "Details",      // Step 2
    "Challenges",   // Step 3
    "Success",      // Step 4
    "Logistics",    // Step 5
    "Collaboration",// Step 6
    "Contact",      // Step 7
  ];

  return (

        <div id="multi-step-form-top" className={styles.formContainer}>
            <Typography variant="h2" className={styles.formTitle}>Let's Start Solving Your Challenge</Typography>

            {/* Progress Bar */}
            <div className={styles.progressBarWrapper}>
                 <StepProgressBar
                   totalSteps={TOTAL_STEPS}
                   currentStep={currentStep}
                   stepLabels={stepLabels}
                 />
            </div>

             {/* Netlify Form */}
            <form
                name={formName}
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit} // Still useful to attach, e.g., for preventDefault
                className={styles.formElement}
            >
                {/* Hidden Netlify inputs */}
                <input type="hidden" name="form-name" value={formName} />
                <p className={styles.hidden}> {/* Add .hidden { display: none; } to CSS */}
                    <label>
                    Don’t fill this out if you’re human: <input name="bot-field" onChange={handleChange} />
                    </label>
                </p>

                {/* --- Render Current Step's Fields (Updated) --- */}
                <div className={styles.stepContainer}>
                    {currentStep === 1 && (
                        <Step1Goal formData={formData} handleChange={handleChange} />
                    )}
                    {currentStep === 2 && (
                        <Step2Details formData={formData} handleChange={handleChange} />
                    )}
                    {currentStep === 3 && (
                        <Step3Challenges formData={formData} handleChange={handleChange} />
                    )}
                    {currentStep === 4 && (
                        <Step4Success formData={formData} handleChange={handleChange} />
                    )}
                    {currentStep === 5 && (
                        <Step5Logistics formData={formData} handleChange={handleChange} />
                    )}
                    {currentStep === 6 && (
                        <Step6Collaboration formData={formData} handleChange={handleChange} />
                    )}
                    {currentStep === 7 && (
                         <Step7Contact formData={formData} handleChange={handleChange} />
                    )}
                </div>


                {/* --- Navigation Buttons (Logic adjusts automatically via TOTAL_STEPS) --- */}
                <div className={styles.navigationButtons}>
                    {currentStep > 1 && (
                        <Button
                            type="button"
                            onClick={prevStep}
                            variant="secondary"
                            className={styles.prevButton}
                        >
                            Previous
                        </Button>
                    )}
                    {currentStep < TOTAL_STEPS && (
                         <Button
                            type="button"
                            onClick={nextStep}
                            variant="primary"
                            className={styles.nextButton}
                         >
                            Next
                         </Button>
                    )}
                    {currentStep === TOTAL_STEPS && (
                        <Button
                            type="submit" // This button now triggers the form's onSubmit
                            variant="primary"
                            className={styles.submitButton}
                        >
                            Submit Inquiry & View Next Steps
                        </Button>
                    )}
                </div>
            </form>
        </div>
  );
};

// --- Step Field Components (Refactored and New Placeholders) ---
// Ideally, each of these would be in its own file (e.g., Step1Goal.tsx)

interface StepProps {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

// Step 1: Primary Goal (Previously Step1PainPoint)
const Step1Goal: React.FC<StepProps> = ({ formData, handleChange }) => {
    const painPoints = [
        { value: 'improve', label: "Improve My Existing Product's Performance" },
        { value: 'develop', label: "Develop a New Product/Feature Idea" },
        { value: 'strategy', label: "Content, Brand, Strategy & Creative Direction" },
        { value: 'other', label: "Something Else..." },
    ];
    return (
        <div className={styles.stepFields}>
            <Typography variant="h3" className={styles.stepHeadline}>What's your primary goal?</Typography>
            <div className={styles.radioGroup}>
                {painPoints.map(p => (
                    <label key={p.value} className={styles.radioLabel}>
                        <input
                            type="radio"
                            name="painPoint"
                            value={p.value}
                            checked={formData.painPoint === p.value}
                            onChange={handleChange}
                            required
                        />
                        <span>{p.label}</span>
                    </label>
                ))}
            </div>
            {formData.painPoint === 'other' && (
                 <div className={styles.formGroup}>
                    <label htmlFor="painPointOther" className={styles.formLabel}>Please specify:</label>
                    <input
                        type="text"
                        id="painPointOther"
                        name="painPointOther"
                        value={formData.painPointOther || ''}
                        onChange={handleChange}
                        className={styles.formInput}
                        required
                    />
                 </div>
            )}
        </div>
    );
};

// Step 2: Detailed Description (Previously part of Step2Details)
const Step2Details: React.FC<StepProps> = ({ formData, handleChange }) => {
     return (
        <div className={styles.stepFields}>
             <Typography variant="h3" className={styles.stepHeadline}>Tell me more about the project</Typography>
             <div className={styles.formGroup}>
                 <label htmlFor="concernsDetails" className={styles.formLabel}>
                    What specific problems are you facing? What have you tried already? (The more detail, the better!)
                 </label>
                <textarea
                    id="concernsDetails"
                    name="concernsDetails"
                    rows={6} // Increased rows slightly
                    value={formData.concernsDetails}
                    onChange={handleChange}
                    className={styles.formTextarea}
                    placeholder="e.g., Our checkout process has a high drop-off rate, especially on mobile. We tried changing button colors last quarter with no luck..."
                    required
                />
            </div>
        </div>
    );
};

// Step 3: Specific Challenges (Previously part of Step2Details)
const Step3Challenges: React.FC<StepProps> = ({ formData, handleChange }) => {
    const commonChallenges = ["Low Conversion", "User Confusion", "Technical Debt", "Unclear Requirements", "Outdated Design", "Unsure Where to Start"]; // Added more examples
     return (
        <div className={styles.stepFields}>
            <Typography variant="h3" className={styles.stepHeadline}>Any specific challenges apply?</Typography>
             <div className={styles.formGroup}>
                {/* <Typography variant="h5" className={styles.formLabel}>Select any that apply (Optional)</Typography> */}
                <div className={styles.checkboxGroup}>
                    {commonChallenges.map(challenge => (
                        <label key={challenge} className={styles.checkboxLabel}>
                            <input
                                type="checkbox"
                                name="challenges" // Same name for all checkboxes in group
                                value={challenge}
                                checked={formData.challenges?.includes(challenge)}
                                onChange={handleChange}
                            />
                            <span>{challenge}</span>
                         </label>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Step 4: Defining Success (Previously part of Step3Logistics)
const Step4Success: React.FC<StepProps> = ({ formData, handleChange }) => {
    return (
        <div className={styles.stepFields}>
            <Typography variant="h3" className={styles.stepHeadline}>What does success look like?</Typography>
            <div className={styles.formGroup}>
                 <label htmlFor="successLookLike" className={styles.formLabel}>Describe the ideal outcome or key metrics for success.</label>
                <textarea
                    id="successLookLike"
                    name="successLookLike"
                    rows={4}
                    value={formData.successLookLike}
                    onChange={handleChange}
                    className={styles.formTextarea}
                    placeholder="e.g., Increased conversion rate by 15%, positive user feedback within 3 months, a clear product roadmap for the next year..."
                    required
                />
            </div>
        </div>
    );
};

// Step 5: Project Logistics (Previously part of Step3Logistics)
const Step5Logistics: React.FC<StepProps> = ({ formData, handleChange }) => {
    const timelines = ["ASAP (<1 Month)", "1-3 Months", "3-6 Months", "6+ Months", "Flexible / Unsure"];
    const budgets = ["<$5,000", "$5,000 - $10,000", "$10,000 - $25,000", "$25,000 - $50,000", "$50,000+", "Let's Discuss"]; // Adjusted ranges

    return (
        <div className={styles.stepFields}>
             <Typography variant="h3" className={styles.stepHeadline}>Project Logistics</Typography>

             <div className={styles.formGroup}>
                 <label htmlFor="timeline" className={styles.formLabel}>Ideal Project Timeline?</label>
                 <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className={styles.formSelect}
                    required
                 >
                    <option value="" disabled>Select a timeline...</option>
                    {timelines.map(tl => <option key={tl} value={tl}>{tl}</option>)}
                 </select>
             </div>

             <div className={styles.formGroup}>
                <label htmlFor="budgetRange" className={styles.formLabel}>Estimated Budget Range? (Optional, but helpful)</label>
                 <select
                    id="budgetRange"
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleChange}
                    className={styles.formSelect}
                 >
                    <option value="">Select a range (optional)...</option>
                    {budgets.map(b => <option key={b} value={b}>{b}</option>)}
                 </select>
             </div>
        </div>
    );
};

// Step 6: Collaboration Style (Previously part of Step3Logistics)
const Step6Collaboration: React.FC<StepProps> = ({ formData, handleChange }) => {
    const collaborationStyles = ["Highly Collaborative (Frequent Interaction)", "Provide Direction, You Execute", "Regular Check-ins are Sufficient", "Mix of Collaboration & Autonomy"]; // Added one

    return (
        <div className={styles.stepFields}>
            <Typography variant="h3" className={styles.stepHeadline}>How do you prefer to collaborate?</Typography>
            <div className={styles.formGroup}>
                 {/* <Typography variant="h5" className={styles.formLabel}>Select your preferred style(s) (Optional)</Typography> */}
                 <div className={styles.checkboxGroup}>
                    {collaborationStyles.map(style => (
                        <label key={style} className={styles.checkboxLabel}>
                             <input
                                type="checkbox"
                                name="collaborationStyle"
                                value={style}
                                checked={formData.collaborationStyle?.includes(style)}
                                onChange={handleChange}
                             />
                            <span>{style}</span>
                         </label>
                    ))}
                 </div>
            </div>
        </div>
    );
};

// Step 7: Contact Information (Previously Step4Contact)
const Step7Contact: React.FC<StepProps> = ({ formData, handleChange }) => {
    return (
        <div className={styles.stepFields}>
             <Typography variant="h3" className={styles.stepHeadline}>Your Contact Information</Typography>
             <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>Full Name</label>
                 <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.formInput}
                    required
                    autoComplete="name"
                 />
             </div>
             <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>Email Address</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.formInput}
                    required
                    autoComplete="email"
                />
             </div>
             <div className={styles.formGroup}>
                <label htmlFor="company" className={styles.formLabel}>Company (Optional)</label>
                 <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company || ''}
                    onChange={handleChange}
                    className={styles.formInput}
                    autoComplete="organization"
                 />
             </div>
             <div className={styles.formGroup}>
                <label htmlFor="website" className={styles.formLabel}>Website (Optional)</label>
                 <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website || ''}
                    onChange={handleChange}
                    className={styles.formInput}
                    placeholder="https://"
                    autoComplete="url"
                 />
             </div>
             <Typography variant="h5" className={styles.privacyNote}> {/* Changed to body2 for standard text */}
                Your information will be kept confidential and used solely for contacting you about your inquiry.
             </Typography>
        </div>
    );
};


export default MultiStepContactForm;