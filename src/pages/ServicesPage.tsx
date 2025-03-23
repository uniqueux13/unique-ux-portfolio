import React from 'react';
import Typography from '../components/Typography/Typography';
import Card from '../components/Card/Card'; // Import Card
import Section from '../components/Section/Section';
import Button from '../components/Button/Button';
import styles from './ServicesPage.module.css';
import { Link } from 'react-router-dom';


const ServicesPage: React.FC = () => {
  const services = {
     uxui: [
      {
        title: 'Starter UX',
        price: '$500',
        description: [
          '🔹 Usability analysis (3 pages)',
          '🔹 Actionable report',
          '🔹 Quick 3-day turnaround',
        ],
      },
      {
        title: 'Pro UX',
        price: '$5,000',
        description: [
          '🔹 Full UX analysis & wireframes',
          '🔹 UI redesign for up to 5 pages',
          '🔹 Interactive prototype',
          '🔹 1 revision round',
        ],
      },
      {
        title: 'Premium UX',
        price: '$10,000',
        description: [
          '🔹 UX research & competitor analysis',
          '🔹 User journey mapping & wireframes',
          '🔹 High-fidelity UI design for 10+ pages',
          '🔹 Interactive prototype + usability testing',
          '🔹 2 revision rounds',
        ],
      },
    ],
    graphicDesign: [
      {
        title: 'Logo & Brand Kit',
        price: '$1,000',
        description: [
          '🔹 Custom logo (3 concepts)',
          '🔹 Brand colors, typography & guide',
          '🔹 Social media profile assets',
        ],
      },
      {
        title: 'Social Media Graphics',
        price: '$800',
        description: [
          '🔹 10 custom post templates',
          '🔹 Engaging banner & ad designs',
          '🔹 Consistent branding across platforms',
        ],
      },
        {
            title: 'Marketing & Print Design',
            price: '$1,200',
            description: [
                '🔹 Flyers, business cards, or brochures',
                '🔹 Digital & print-ready files',
                '🔹 2 revision rounds',
            ]
        }
    ],
    writing: [
        {
            title: 'SEO Blog Writing',
            price: '$300 per article (1,500 words)',
            description: [
                '🔹 Keyword research & SEO optimization',
                '🔹 Engaging, well-researched content',
                '🔹 Edited & formatted for web readability',
            ]
        },
        {
            title: 'Website Copywriting',
            price: '$500 per page',
            description:[
                '🔹 Persuasive, conversion-focused copy',
                '🔹 SEO-friendly & brand-aligned',
                '🔹 2 revision rounds',
            ]
        },
        {
            title: 'Scriptwriting',
            price: '$400 per script (2-5 min video)',
            description: [
                '🔹 Engaging, structured scriptwriting',
                '🔹 Optimized for audience retention',
                '🔹 CTA integration',
            ]
        }
    ],
      videoAudio: [
          {
              title: 'Video Editing',
              price: '$600 per video',
              description: [
                '🔹 Professional cuts, transitions & effects',
                '🔹 aptions & on-screen text',
                '🔹 Music & sound design integration',
              ]
          },
          {
            title: 'Music & Sound Design',
            price: '$700 per track',
            description: [
                '🔹 Custom background music or sound effects',
                '🔹 Mixing & mastering included',
                '🔹 Royalty-free for commercial use',
            ]
          }
      ],
    retainers: [
        {
          title: 'UX Design Retainer',
          price: 'Starting at $2,000/month',
          description: [
            '🔹 Priority access to design services',
            '🔹 Monthly design consultations',
            '🔹 Dedicated support hours',
          ],
        },
        {
          title: 'Content Writing Retainer',
          price: '4 blog posts per month at $1,000',
          description: [
            '🔹 Regular content to boost SEO',
            '🔹 Consistent brand voice',
            '🔹 Monthly performance reports',
          ],
        },
        {
            title: 'Video Editing Retainer',
            price: '4 videos per month at $2,200',
            description: [
                '🔹 Consistent video production',
                '🔹 Brand-aligned editing style',
                '🔹 Monthly analytics overview',
            ]
        }
      ],
  };

  return (
    <Section marginBottom="xl" padding="none">
      {/* Hero Section */}
      <div className={styles.heroContent}>
            <Typography variant="h1" className={styles.heroTitle}>Services & Pricing</Typography>
            <Typography variant="subtitle1" className={styles.heroSubtitle}>
            Achieve Your Digital Goals with Our Expert Services            
            </Typography>
            <Link to="https://calendly.com/kyleranta/15min" target="_blank" rel="noopener noreferrer">
            <Button variant="primary" arrow>Book a Free Consultation</Button>
        </Link>
        <Typography variant="listItem" align="center">
         uniqueux13@gmail.com
    </Typography>
      </div>

      {/* UX/UI Design Services */}
        <Typography variant="h2" className={styles.categoryTitle}>UX & UI Design</Typography>
        <div className={styles.serviceItems}>
          {services.uxui.map((service, index) => (
            <Card key={index} className={styles.serviceItem}> {/* Wrap each item in a Card */}
              <Typography variant="h4" className={styles.serviceTitle}>{service.title}</Typography>
              <Typography variant="subtitle2" className={styles.servicePrice}>{service.price}</Typography>
              <ul className={styles.serviceDescription}>
                {service.description.map((item, i) => (
                  <li key={i}><Typography variant='listItem'>{item}</Typography></li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Graphic Design Services */}
            <Typography variant="h2" className={styles.categoryTitle}>Graphic Design & Branding</Typography>
            <div className={styles.serviceItems}>
                {services.graphicDesign.map((service, index) =>(
                    <Card key={index} className={styles.serviceItem}>
                        <Typography variant='h4' className={styles.serviceTitle}>{service.title}</Typography>
                        <Typography variant='subtitle2' className={styles.servicePrice}>{service.price}</Typography>
                        <ul className={styles.serviceDescription}>
                            {service.description.map((item, i) => (
                                <li key={i}><Typography variant='listItem'>{item}</Typography></li>
                            ))}
                        </ul>
                    </Card>
                ))}
            </div>

        {/* Writing and Content Creation Services*/ }
            <Typography variant='h2' className={styles.categoryTitle}>Writing & Content Creation</Typography>
            <div className={styles.serviceItems}>
                {services.writing.map((service, index) => (
                  <Card key={index} className={styles.serviceItem}>
                    <Typography variant='h4' className={styles.serviceTitle}>{service.title}</Typography>
                    <Typography variant='subtitle2' className={styles.servicePrice}>{service.price}</Typography>
                    <ul className={styles.serviceDescription}>
                        {service.description.map((item, i) => (
                            <li key={i}><Typography variant='listItem'>{item}</Typography></li>
                        ))}
                    </ul>
                    </Card>
                ))}
            </div>
        {/* Video and Audio Production Services*/}
            <Typography variant='h2' className={styles.categoryTitle}>Video & Audio Production</Typography>
            <div className={styles.serviceItems}>
                {services.videoAudio.map((service, index) => (
                  <Card key={index} className={styles.serviceItem}>
                    <Typography variant='h4' className={styles.serviceTitle}>{service.title}</Typography>
                    <Typography variant='subtitle2' className={styles.servicePrice}>{service.price}</Typography>
                    <ul className={styles.serviceDescription}>
                        {service.description.map((item, i) => (
                            <li key={i}><Typography variant='listItem'>{item}</Typography></li>
                        ))}
                    </ul>
                    </Card>
                ))}
            </div>

        {/*Retainer Services*/}

            <Typography variant='h2' className={styles.categoryTitle}>Ongoing Support & Retainers</Typography>
            <div className={styles.serviceItems}>
                {services.retainers.map((service, index) => (
                  <Card key={index} className={styles.serviceItem}>
                    <Typography variant='h4' className={styles.serviceTitle}>{service.title}</Typography>
                    <Typography variant='subtitle2' className={styles.servicePrice}>{service.price}</Typography>
                    <ul className={styles.serviceDescription}>
                        {service.description.map((item, i) => (
                            <li key={i}><Typography variant='listItem'>{item}</Typography></li>
                        ))}
                    </ul>
                    </Card>
                ))}
            </div>

      {/* Call to Action */}
    <div className={styles.heroContent}>
        <Typography variant="h2" className={styles.heroTitle}>Ready to Create Something Unique?</Typography>
        <Typography variant="p" className={styles.heroSubtitle}>
          Let's collaborate to build a digital experience that transforms your business and delights your users.
        </Typography>
      {/* Use a Link component for external links */}
        <Link to="https://calendly.com/kyleranta/15min" target="_blank" rel="noopener noreferrer">
            <Button variant="primary" arrow>Book a Free Consultation</Button>
        </Link>
        <Typography variant="listItem" align="center">
         uniqueux13@gmail.com
    </Typography>
    </div>
    </Section>
  );
};

export default ServicesPage;