// src/pages/Project1Page.tsx
import React from 'react';
import Typography from '../components/Typography/Typography';
import Card from '../components/Card/Card';
import Image from '../components/Image/Image';
import Button from '../components/Button/Button';
import Section from '../components/Section/Section'; // Import Section
import TwoColumnSection from '../components/TwoColumnSection/TwoColumnSection'; // Import
import Video from '../components/Video/Video';
import styles from './Project1Page.module.css';
import { Link } from 'react-router-dom';
import ImageGrid from '../components/ImageGrid/ImageGrid';
import caseStudyImage1 from'../assets/GromoCaseStudy/caseStudy-image-1.png';
import caseStudyImage2 from'../assets/GromoCaseStudy/caseStudy-image-2.png';
import caseStudyImage3 from'../assets/GromoCaseStudy/caseStudy-image-3.png';
import caseStudyImage4 from'../assets/GromoCaseStudy/caseStudy-image-4.png';
import caseStudyImage5 from'../assets/GromoCaseStudy/caseStudy-image-5.png';
import caseStudyImage6 from '../assets/GromoCaseStudy/case-study-image-6.png';
import caseStudyImage65 from '../assets/GromoCaseStudy/caseStudy-image-6.jpg';
import caseStudyImage7 from '../assets/GromoCaseStudy/caseStudy-image-7.png';
import caseStudyImage8 from '../assets/GromoCaseStudy/caseStudy-image-8.png';
import caseStudyImage9 from '../assets/GromoCaseStudy/caseStudy-image-9.png';
import caseStudyImage10 from '../assets/GromoCaseStudy/caseStudy-image-10.png';
import caseStudyImage11 from '../assets/GromoCaseStudy/caseStudy-image-11.png';
import caseStudyImage12 from '../assets/GromoCaseStudy/caseStudy-image-12.png';
import caseStudyImage13 from '../assets/GromoCaseStudy/caseStudy-image-13.png';
import caseStudyImage14 from '../assets/GromoCaseStudy/caseStudy-image-14.png';
import caseStudyImage15 from '../assets/GromoCaseStudy/caseStudy-image-15.png';
import caseStudyImage16 from '../assets/GromoCaseStudy/caseStudy-image-16.png';
import caseStudyImage17 from '../assets/GromoCaseStudy/caseStudy-image-17.png';
import caseStudyImage18 from '../assets/GromoCaseStudy/caseStudy-image-18.png';
import caseStudyImage19 from '../assets/GromoCaseStudy/caseStudy-image-19.png';
import caseStudyImage20 from '../assets/GromoCaseStudy/caseStudy-image-20.png';
import caseStudyImage21 from '../assets/GromoCaseStudy/caseStudy-image-21.png';
import caseStudyImage22 from '../assets/GromoCaseStudy/caseStudy-image-22.png';
import caseStudyImage23 from '../assets/GromoCaseStudy/caseStudy-image-23.png';
import caseStudyImage24 from '../assets/GromoCaseStudy/caseStudy-image-24.png';



const Project1Page: React.FC = () => {
    const images = [
        { src: caseStudyImage15, alt: 'Image 1' },  // Use imported images
        { src: caseStudyImage16, alt: 'Image 2' },
        { src: caseStudyImage17, alt: 'Image 3' },
        { src: caseStudyImage18, alt: 'Image 4' },
        { src: caseStudyImage19, alt: 'Image 5' },
        { src: caseStudyImage20, alt: 'Image 6' },
    ];
  return (
    <div className={styles.project1Page}>
      {/* Hero Section */}
      <Section marginBottom="xl" padding="none" className={styles.heroContent}>
            <Typography variant="h1" className={styles.heroTitle}>Marketing Agency Website Redesign</Typography>
            <Typography variant="subtitle1" className={styles.heroSubtitle}>
            Case Study: Enhancing User Engagement and Lead Generation for GroMo
            </Typography>
      </Section>
    
    <Section marginBottom="xl" padding="none">
        <TwoColumnSection
            imageSrc={caseStudyImage1}
            imageAlt="'Step-by-step' design from project inspiration board"
            imageOnLeft={true}
        >
           <Typography variant="h3" className={styles.manifestoTitle}>A step-by-step case study</Typography>
            <Typography variant="p" className={styles.manifestoText}>
                From ideation to implementation, This case study details my <strong>step-by-step design process</strong>, for a marketing agency's digital transformation.            
            </Typography>
            <Typography variant='p' className={styles.manifestoText}>
            My role included information architecture refinement, wireframing, design system development, and creating a ten-page website showcasing GroMo's updated services.            </Typography>
        </TwoColumnSection>
    </Section>

    {/* Discovery */}
    <Section marginBottom="sm" padding="none">
        <Typography variant="h2" className={styles.sectionTitle}>The Challenge</Typography>
        <Typography variant="p" className={styles.narrowContent}> 
            The client, a marketing agency, was struggling with low website engagement and poor lead generation. Their existing website was outdated, difficult to navigate, and didn't effectively communicate their services.
        </Typography>
    </Section>

    {/* Meeting Insights */}
    <Section marginBottom="sm" padding="none">
        <TwoColumnSection
            imageSrc={caseStudyImage2}
            imageAlt="'Step-by-step' design from project inspiration board"
            imageOnLeft={false}
        >
           <Typography variant="h3" className={styles.manifestoTitle}>Meeting Insight:</Typography>
            <Typography variant="p" className={styles.manifestoText}>
                The project began with a recorded meeting to document client needs and project specifications.</Typography>
            <Typography variant='p' className={styles.manifestoText}>
                Discussions with GroMo's team focused on future offerings, expectations, and initial project ideas.
            </Typography>
        </TwoColumnSection>
    </Section>

    <Section marginBottom="xl" padding="none">
        <TwoColumnSection
            imageSrc={caseStudyImage3}
            imageAlt="'Step-by-step' design from project inspiration board"
            imageOnLeft={true}
        >
            <div> {/* Added wrapper div */}
            <Typography variant="h3" className={styles.manifestoTitle}>Project specifications:</Typography>
            <Typography variant="p" className={styles.sectionText}>
            My primary responsibilities were copywriting, graphic design, and UI design.
            </Typography>
            <Typography variant='p' className={styles.sectionText}>
            Key service pages identified:
            <ul>
                <li>ABM</li>
                <li>Digital Paid Media</li>
                <li>Sales & Marketing Alignment</li>
                <li>CRM Automation Support</li>
                <li>Inbound</li>
            </ul>
            </Typography>
            <Typography variant='p' className={styles.sectionText}>
            Targeted industry verticals:
            <ul>
                <li>SAAS</li>
                <li>Medical</li>
                <li>Manufacturing</li>
                <li>Commercial Real Estate</li>
                <li>Financial</li>
            </ul>
            </Typography>

                </div>
        </TwoColumnSection>
    </Section>

    {/* Planning */}
    <Section marginBottom="sm" padding="none">
        <Typography variant="h2" className={styles.sectionTitle}>Planning</Typography>
        <Typography variant="p" className={styles.narrowContent}> 
        The planning phase included competitive analysis, user persona development, and creating a visual inspiration board.        
        </Typography>
    </Section>

    {/* Competitive Analysis */}
    <Section marginBottom="sm" padding="none">
        <TwoColumnSection
            imageSrc={caseStudyImage4}
            imageAlt="''collaboration' visual from approved design"
            imageOnLeft={false}
        >
            <Typography variant="h3" className={styles.manifestoTitle}>Competitive Analysis</Typography>
            <Typography variant="p" className={styles.manifestoText}>
            Competitive audits provided insights to inform a distinctive and competitive design strategy. This analysis directly addressed the client's target audience needs.
            </Typography>
        </TwoColumnSection>
    </Section>

    {/* Persona Development */}
    <Section marginBottom="xl" padding="none">
        <TwoColumnSection
            imageSrc={caseStudyImage5}
            imageAlt="''User personas from the planning phase"
            imageOnLeft={true}
        >
            <Typography variant="h3" className={styles.manifestoTitle}>Persona Development</Typography>
            <Typography variant="p" className={styles.manifestoText}>
            User personas were developed to represent key audience segments, informing design decisions and ensuring user-centricity.
            </Typography>
        </TwoColumnSection>
    </Section>

    {/* Pain Points */}
    <Section marginBottom="none" padding="md">
      <Typography variant="h2" className={styles.sectionTitle}>Pain Points</Typography>
      <div className={styles.imageContainer}>
        <Image src={caseStudyImage6} alt="Pain points design for marketing landing page" className={styles.centeredImage} /> {/* Use the imported variable */}
      </div>
    </Section>

    {/* Visual Blueprint */}
    <Section marginBottom="none" padding="none">
        <TwoColumnSection
            imageSrc={caseStudyImage65}
            imageAlt="''Gromo Inspiration Board visual"
            imageOnLeft={false}
        >
            <Typography variant="h3" className={styles.manifestoTitle}>Visual Blueprint</Typography>
            <Typography variant="p" className={styles.manifestoText}>
            An inspiration board, incorporating colors, patterns, and imagery, established a visual direction and served as a reference point throughout the project.
            </Typography>
        </TwoColumnSection>
    </Section>

    {/* User Flow Design */}
    <Section marginBottom="xl" padding="none">
        <TwoColumnSection
            imageSrc={caseStudyImage7}
            imageAlt="''This user flow visually represents the steps a user takes to accomplish a specific task within a system or application."
            imageOnLeft={true}
        >
            <Typography variant="h3" className={styles.manifestoTitle}>User Flow Design</Typography>
            <Typography variant="p" className={styles.manifestoText}>
            A multi-step form user flow was meticulously mapped to optimize the user journey, ensuring a seamless and intuitive experience.            
            </Typography>
        </TwoColumnSection>
    </Section>

    {/* UX + Copywriting */}
    <Section marginBottom="sm" padding="none">
        <Typography variant="h2" className={styles.sectionTitle}>UX + Copywriting</Typography>
        <Typography variant="p" className={styles.narrowContent}> 
        Extensive research informed the tone and scope of the website copy, ensuring seamless integration with the overall design.       
        </Typography>
    </Section>

    {/* Ideation and Research */}
    <Section marginBottom="sm" padding="none">
        <TwoColumnSection
            imageSrc={caseStudyImage8}
            imageAlt="'''market analysis' visual from approved design"
            imageOnLeft={false}
        >
            <Typography variant="h3" className={styles.manifestoTitle}>Ideation and Research</Typography>
            <Typography variant="p" className={styles.manifestoText}>
            This phase involved extensive brainstorming and research to create copy that resonated with user needs and aligned with brand values, ensuring a consistent user experience.           
            </Typography>
        </TwoColumnSection>
    </Section>

    {/* Collaborative Copy */}
    <Section marginBottom="sm" padding="none">
        <TwoColumnSection
            imageSrc={caseStudyImage9}
            imageAlt="''Copywriting section from GroMo home page"
            imageOnLeft={true}
        >
            <Typography variant="h3" className={styles.manifestoTitle}>Collaborative Copy</Typography>
            <Typography variant="p" className={styles.manifestoText}>
            A collaborative approach was taken to craft a narrative that connected with the target audience, refining language, tone, and clarity.            
            </Typography>
        </TwoColumnSection>
    </Section>
    
    {/* Client Alignment */}
    <Section marginBottom="xl" padding="none">
        <TwoColumnSection
            imageSrc={caseStudyImage10}
            imageAlt="''Copywriting section from GroMo home page"
            imageOnLeft={false}
        >
            <Typography variant="h3" className={styles.manifestoTitle}>Client Alignment</Typography>
            <Typography variant="p" className={styles.manifestoText}>
            Continuous communication and alignment with the client were crucial throughout the copywriting phase, ensuring the vision was realized and key content decisions were informed.            
            </Typography>
        </TwoColumnSection>
    </Section>

    {/* IA + wireframes */}
    <Section marginBottom="lg" padding="none">
        <Typography variant="h2" className={styles.sectionTitle}>IA + wireframes</Typography>
        <Typography variant="p" className={styles.narrowContent}> 
        Close collaboration with decision-makers shaped the information architecture and wireframes, transitioning the project from concept to a visual framework.       
        </Typography>
    </Section>

    {/* Frameworks and workflows */}
    <Section marginBottom="none" padding="none">
        <TwoColumnSection
            imageSrc={caseStudyImage11}
            imageAlt="''Information Architect diagram"
            imageOnLeft={true}
        >
            <Typography variant="h3" className={styles.manifestoTitle}>Frameworks and workflows</Typography>
            <Typography variant="p" className={styles.manifestoText}>
            Tools like Adobe Suite, UI software, and AI were used to curate inspiration and client concepts into the Information Architecture IA and wireframes.            
            </Typography>
        </TwoColumnSection>
    </Section>

    {/* Client Collaboration */}
    <Section marginBottom="none" padding="none">
        <TwoColumnSection
            imageSrc={caseStudyImage12}
            imageAlt="''Information Architect diagram"
            imageOnLeft={false}
        >
            <Typography variant="h3" className={styles.manifestoTitle}>Client Collaboration</Typography>
            <Typography variant="p" className={styles.manifestoText}>
            Close collaboration with the client during the wireframing process ensured every detail aligned with the project goals.
            </Typography>
        </TwoColumnSection>
    </Section>

    {/* Visual Conceptualization */}
    <Section marginBottom="xl" padding="none">
        <TwoColumnSection
            imageSrc={caseStudyImage13}
            imageAlt="''Visual conceptualization of marketing results for the 'client'"
            imageOnLeft={true}
        >
            <Typography variant="h3" className={styles.manifestoTitle}>Visual Conceptualization</Typography>
            <Typography variant="p" className={styles.manifestoText}>
            The Design phase used Adobe software and stock images to create custom visuals for a cohesive and engaging user experience.
            </Typography>
        </TwoColumnSection>
    </Section>

    {/* Design */}
        <div>
        <Typography variant="h2" className={styles.sectionTitle}>Design</Typography>
        <Typography variant="p" className={styles.narrowContent}> 
        A comprehensive design system was implemented, and through client validation and iterative processes, a 10-page website was developed.        
        </Typography>
        </div>
   <Section marginBottom="xl" padding="none">
    <div className={styles.videoContainer}>
          <Video
            src="/background-video.mp4"
            width="100%"
            height="100%"
            className={styles.video}
            autoPlay
            muted
            loop
          />
        </div>
   </Section>
      

    {/* Figma Design Iterations */}
    <Section marginBottom="xl" padding="none">
        <TwoColumnSection
            imageSrc={caseStudyImage14}
            imageAlt="Segment of GroMo's design system"
            imageOnLeft={true}
        >
            <Typography variant="h3" className={styles.manifestoTitle}>Figma Design Iterations</Typography>
            <Typography variant="p" className={styles.manifestoText}>
            Figma was used to bring the wireframes to life, creating design elements such as icons, colors, typography, spacers, forms, buttons, inputs, hero sections, and lead magnets.
            </Typography>
        </TwoColumnSection>
    </Section>
    
    {/* Image Grid Section - Design Examples */}
    <Section padding="md">
        <Typography variant="h2" className={styles.sectionTitle}>Design Examples</Typography>
        <ImageGrid>
          <div className={styles.imageContainer}>
            <Image src={caseStudyImage15} alt="Image 1" className={styles.gridImage} />
          </div>
          <div className={styles.imageContainer}>
            <Image src={caseStudyImage16} alt="Image 2" className={styles.gridImage} />
          </div>
          <div className={styles.imageContainer}>
            <Image src={caseStudyImage17} alt="Image 3" className={styles.gridImage} />
          </div>
          <div className={styles.imageContainer}>
            <Image src={caseStudyImage18} alt="Image 4" className={styles.gridImage} />
          </div>
          <div className={styles.imageContainer}>
            <Image src={caseStudyImage19} alt="Image 5" className={styles.gridImage} />
          </div>
          <div className={styles.imageContainer}>
            <Image src={caseStudyImage20} alt="Image 6" className={styles.gridImage} />
          </div>
        </ImageGrid>
      </Section>

    {/* Client Validation */}
    <Section marginBottom="sm" padding="none">
        <TwoColumnSection
            imageSrc={caseStudyImage21}
            imageAlt="Segment of GroMo's design system"
            imageOnLeft={false}
        >
            <Typography variant="h3" className={styles.manifestoTitle}>Client Validation</Typography>
            <Typography variant="p" className={styles.manifestoText}>
            A collaborative process with the client ensured the design aligned with their vision, with feedback incorporated at key stages.
            </Typography>
        </TwoColumnSection>
    </Section>

    {/* Image Grid Section */}
    <Section marginBottom="xl" padding="none">
        <ImageGrid>
          <div className={styles.imageContainer}>
            <Image src={caseStudyImage22} alt="Image 1" className={styles.gridImage} />
          </div>
          <div className={styles.imageContainer}>
            <Image src={caseStudyImage23} alt="Image 2" className={styles.gridImage} />
          </div>
          <div className={styles.imageContainer}>
            <Image src={caseStudyImage24} alt="Image 3" className={styles.gridImage} />
          </div>
        </ImageGrid>
      </Section>

    {/* Hand-off + Extras */}
    <Section marginBottom="xl" padding="none">
        <Typography variant="h2" className={styles.sectionTitle}>Hand-off + Extras</Typography>
        <Typography variant="p" className={styles.narrowContent}> 
        In the Hand-off phase, a comprehensive review with the client illuminates design choices, and accessibility is prioritized for ongoing support to the client's team. Through knowledge transfer, a seamless hand-off is facilitated, providing essential insights for future maintenance and development.       
        </Typography>
    </Section>

    <Section marginBottom="xl" padding="none">
  <div className={styles.checkListGrid}>
    <div>
        <div className={styles.checklistItem}>
            
            <Typography variant="h3" className={styles.checklistItemTitle}>Comprehensive Review</Typography>
         </div>
        <Typography variant="p" className={styles.checklistItemDescription}>
          Conducted a thorough review of the project, leaving no aspect unexamined.
        </Typography>
    </div>

    <div>
        <div className={styles.checklistItem}>
            
            <Typography variant="h3" className={styles.checklistItemTitle}>Accessibility</Typography>
        </div>
        <Typography variant="p" className={styles.checklistItemDescription}>
          Made sure the website met WCAG 2.1 AA standards, ensuring it's usable for everyone.
        </Typography>
    </div>

    <div>
      <div className={styles.checklistItem}>
        
        <Typography variant="h3" className={styles.checklistItemTitle}>Knowledge Transfer</Typography>
      </div>
        <Typography variant="p" className={styles.checklistItemDescription}>
        Facilitated seamless handoff with comprehensive documentation and training.
        </Typography>
    </div>

    <div>
        <div className={styles.checklistItem}>
            
            <Typography variant="h3" className={styles.checklistItemTitle}>Post-Handoff Support</Typography>
        </div>
        <Typography variant="p" className={styles.checklistItemDescription}>
          Provided ongoing support after the project launch, ensuring a smooth transition.
        </Typography>
    </div>
  </div>
</Section>


    {/* I learned a lot! */}
    <Section marginBottom="xl" padding="none">
        <Typography variant="h2" className={styles.sectionTitle}>I learned a lot!</Typography>
        <Typography variant="p" className={styles.narrowContent}> 
        This project was a testament to user-centered design, leveraging iterative refinement, client collaboration, and a flexible approach to deliver a successful and adaptable solution.      
        </Typography>
        
    </Section>

    <div className={styles.heroContent}>
            <Typography variant="h2" className={styles.ctaTitle}>Ready to Create Something Unique?</Typography>
            <Typography variant="p" className={styles.ctaSubtitle}>
            Let's collaborate to build a digital experience that transforms your business and delights your users.
            </Typography>
            <Button onClick={() => window.location.href = '/portfolio'} variant="primary" arrow>Book a Free Consultation</Button>
      </div>
    </div>
  );
};

export default Project1Page;