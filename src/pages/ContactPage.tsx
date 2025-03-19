import React, {useState} from 'react';
import Typography from '../components/Typography/Typography';
import Card from '../components/Card/Card';
import Button from '../components/Button/Button';
import styles from './ContactPage.module.css' //Import Styles

const ContactPage: React.FC = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [formErrors, setFormErrors] = useState({name: '', email: '', message: ''});
    const [formSuccess, setFormSuccess] = useState(false);


    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        let errors = {name: '', email: '', message: ''};
        let hasErrors = false;

        if (name.trim() === '') {
            errors.name = 'Name is required';
            hasErrors = true;
        }

        if (email.trim() === '') {
            errors.email = 'Email is required';
            hasErrors = true;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email is invalid';
            hasErrors = true;
        }

        if (message.trim() === '') {
            errors.message = 'Message is required';
            hasErrors = true;
        }

        setFormErrors(errors);

        if (!hasErrors) {
            // In a real application, you'd send the data to a server here.
            // For this example, we'll just simulate success.
            console.log('Form Data:', { name, email, message });
              // Reset form and show success message
                setName('');
                setEmail('');
                setMessage('');
                setFormSuccess(true);
                setFormErrors({name: '', email: '', message: ''}); //Clear prev errors

            // You could use a serverless function (Netlify Functions, Vercel, AWS Lambda)
            // or a backend service (Node.js, Python, etc.) to handle the email sending.
        }
    };


  return (
    <div>
      <Typography variant="h1" align='center' className={styles.pageTitle}>Contact Me</Typography>
      <Card>
        <Typography variant="p" className={styles.contactIntro}>
          Let's discuss your next project!  Fill out the form below, and I'll get back to you within 24-48 hours.
        </Typography>

        {formSuccess && (
            <Typography variant="p" className={styles.successMessage}>
                Thank you for your message! I'll be in touch soon.
            </Typography>
        )}

          {/* Basic Contact Form Structure with validation feedback*/}
          <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                  <label htmlFor='name' className={styles.label}>Name:</label>
                  <input type='text' id='name' name='name' value={name} onChange={(e) => setName(e.target.value)} className={styles.input}/>
                  {formErrors.name && <Typography variant="span" className={styles.errorMessage}>{formErrors.name}</Typography>}
              </div>
              <div className={styles.formGroup}>
                  <label htmlFor='email' className={styles.label}>Email:</label>
                  <input type='email' id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} className={styles.input}/>
                  {formErrors.email && <Typography variant="span" className={styles.errorMessage}>{formErrors.email}</Typography>}

              </div>
              <div className={styles.formGroup}>
                  <label htmlFor='message' className={styles.label}>Message:</label>
                  <textarea id='message' name='message' value={message} onChange={(e) => setMessage(e.target.value)} className={styles.textarea}></textarea>
                  {formErrors.message && <Typography variant="span" className={styles.errorMessage}>{formErrors.message}</Typography>}

              </div>
              <Button type='submit'  variant='primary'>Send Message</Button>
          </form>
      </Card>
    </div>
  );
};

export default ContactPage;