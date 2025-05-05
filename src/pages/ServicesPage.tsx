// src/pages/ServicesPage.tsx
// Updated: Implemented conditional featured styling for service cards

import React from "react";
import Typography from "../components/Typography/Typography";
import Card from "../components/Card/Card"; // Import Card component
import Section from "../components/Section/Section";
import Button from "../components/Button/Button";
import styles from "./ServicesPage.module.css"; // Styles for this page
import { Link } from "react-router-dom"; // For linking buttons if needed
import CtaSection from "../components/CtaSection/CtaSection"; // Your final CTA/Contact section component
import MultiStepContactForm from "../components/MultiStepContactForm/MultiStepContactForm";

// Define a type for individual service items for clarity
interface ServiceItem {
  id: string; // Unique ID for React key prop
  title: string;
  price: string;
  description: string[];
  isFeatured?: boolean; // Optional flag to highlight the card
}

// Define the structure for the main services object
interface ServicesData {
  uxui: ServiceItem[];
  graphicDesign: ServiceItem[];
  writing: ServiceItem[];
  videoAudio: ServiceItem[];
  retainers: ServiceItem[];
}

const ServicesPage: React.FC = () => {
  // --- Service Data ---
  // Includes 'id' for keys and 'isFeatured' flags
  const services: ServicesData = {
    uxui: [
      {
        id: "ux-starter",
        title: "Starter UX",
        price: "$500",
        description: [
          " Usability analysis (3 pages)",
          " Actionable report",
          " Quick 3-day turnaround",
        ],
        isFeatured: false,
      },
      {
        id: "ux-pro",
        title: "Pro UX",
        price: "$5,000",
        description: [
          " Full UX analysis & wireframes",
          " UI redesign for up to 5 pages",
          " Interactive prototype",
          " 1 revision round",
        ],
        isFeatured: true,
      }, // Featured
      {
        id: "ux-premium",
        title: "Premium UX",
        price: "$10,000",
        description: [
          " UX research & competitor analysis",
          " User journey mapping & wireframes",
          " High-fidelity UI design for 10+ pages",
          " Interactive prototype + usability testing",
          " 2 revision rounds",
        ],
        isFeatured: false,
      },
    ],
    graphicDesign: [
      {
        id: "gd-logo",
        title: "Logo & Brand Kit",
        price: "$1,000",
        description: [
          " Custom logo (3 concepts)",
          " Brand colors, typography & guide",
          " Social media profile assets",
        ],
        isFeatured: false,
      },
      {
        id: "gd-social",
        title: "Social Media Graphics",
        price: "$800",
        description: [
          " 10 custom post templates",
          " Engaging banner & ad designs",
          " Consistent branding across platforms",
        ],
        isFeatured: false,
      },
      {
        id: "gd-marketing",
        title: "Marketing & Print Design",
        price: "$1,200",
        description: [
          " Flyers, business cards, or brochures",
          " Digital & print-ready files",
          " 2 revision rounds",
        ],
        isFeatured: true,
      }, // Featured
    ],
    writing: [
      {
        id: "w-seo",
        title: "SEO Blog Writing",
        price: "$300 per article (1,500 words)",
        description: [
          " Keyword research & SEO optimization",
          " Engaging, well-researched content",
          " Edited & formatted for web readability",
        ],
        isFeatured: false,
      },
      {
        id: "w-copy",
        title: "Website Copywriting",
        price: "$500 per page",
        description: [
          " Persuasive, conversion-focused copy",
          " SEO-friendly & brand-aligned",
          " 2 revision rounds",
        ],
        isFeatured: true,
      }, // Featured
      {
        id: "w-script",
        title: "Scriptwriting",
        price: "$400 per script (2-5 min video)",
        description: [
          " Engaging, structured scriptwriting",
          " Optimized for audience retention",
          " CTA integration",
        ],
        isFeatured: false,
      },
    ],
    videoAudio: [
      {
        id: "va-edit",
        title: "Video Editing",
        price: "$600 per video",
        description: [
          " Professional cuts, transitions & effects",
          " Captions & on-screen text",
          " Music & sound design integration",
        ],
        isFeatured: false,
      },
      {
        id: "va-music",
        title: "Music & Sound Design",
        price: "$700 per track",
        description: [
          " Custom background music or sound effects",
          " Mixing & mastering included",
          " Royalty-free for commercial use",
        ],
        isFeatured: false,
      },
    ],
    retainers: [
      {
        id: "r-ux",
        title: "UX Design Retainer",
        price: "Starting at $2,000/month",
        description: [
          " Priority access to design services",
          " Monthly design consultations",
          " Dedicated support hours",
        ],
        isFeatured: true,
      }, // Featured
      {
        id: "r-content",
        title: "Content Writing Retainer",
        price: "4 blog posts per month at $1,000",
        description: [
          "🔹 Regular content to boost SEO",
          " Consistent brand voice",
          " Monthly performance reports",
        ],
        isFeatured: false,
      },
      {
        id: "r-video",
        title: "Video Editing Retainer",
        price: "4 videos per month at $2,200",
        description: [
          " Consistent video production",
          " Brand-aligned editing style",
          " Monthly analytics overview",
        ],
        isFeatured: false,
      },
    ],
  };

  // --- Helper function to render a category section ---
  // This avoids repeating the mapping logic for each category
  const renderServiceCategory = (title: string, serviceList: ServiceItem[]) => (
    <React.Fragment key={title}>
      {" "}
      {/* Use Fragment for grouping without extra divs */}
      <Typography variant='h2' className={styles.categoryTitle}>
        {title}
      </Typography>
      <div className={styles.serviceItems}>
        {serviceList.map((service) => (
          // Card component handles its base styles (shadow, radius, bg) via Card.module.css
          // We conditionally add the 'featuredService' class from THIS page's module for overrides
          <Card
            key={service.id} // Use unique ID for key
            className={service.isFeatured ? styles.featuredService : ""}
          >
            <Typography variant='h4' className={styles.serviceTitle}>
              {service.title}
            </Typography>
            <Typography variant='subtitle2' className={styles.servicePrice}>
              {service.price}
            </Typography>
            <ul className={styles.serviceDescription}>
              {service.description.map((item, i) => (
                <li key={i}>
                  {/* Using Typography ensures consistent list item styling if defined */}
                  <Typography variant='p'>{item}</Typography>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </React.Fragment>
  );

  // --- Main Page Return ---
  return (
    <>
      {/* --- Hero Section --- */}
      <Section className={styles.wrapper} marginBottom='none' padding='sm'>
        <div className={styles.heroContent}>
          <Typography variant='h1' className={styles.heroTitle}>
            Services & Pricing
          </Typography>
          <Typography variant='subtitle1' className={styles.heroSubtitle}>
            Achieve Your Digital Goals with Our Expert Services
          </Typography>
          {/* Link wraps the Button for navigation */}
          <Link
            to='https://calendly.com/kyleranta/15min'
            target='_blank'
            rel='noopener noreferrer'
            style={{ textDecoration: "none" }}
          >
            <Button variant='primary' arrow>
              Book Your Free Strategy Call
            </Button>
          </Link>
        </div>
      </Section>

      {/* --- Main Services Listing Section --- */}
      {/* This outer Section provides overall padding for the service listings */}
      <Section padding='md' marginBlock='none'>
        {renderServiceCategory("UX & UI Design", services.uxui)}
        {renderServiceCategory(
          "Graphic Design & Branding",
          services.graphicDesign
        )}
        {renderServiceCategory("Writing & Content Creation", services.writing)}
        {renderServiceCategory("Video & Audio Production", services.videoAudio)}
        {renderServiceCategory(
          "Ongoing Support & Retainers",
          services.retainers
        )}
      </Section>

      {/* Multi-Step Form Section */}
      <div className={styles.multistepformtop}  id='multi-step-form-top'>
      </div>

      <Section padding='none' marginBottom='xxl'>
          <MultiStepContactForm />
        </Section>

      {/* --- Final CTA Section --- */}
      {/* The wrapper div might be for full-width background color */}
      <div className={styles.wrapper}>
        {/* Assuming CtaSection is the renamed NextStepsSection or similar final contact/action component */}
        <CtaSection />
      </div>
    </>
  );
};

export default ServicesPage;
