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

const Project1Page: React.FC = () => {
  return (
    <div className={styles.project1Page}>
      {/* Hero Section */}
      <Section marginBottom="xl" padding="none" className={styles.hero}>
            <Typography variant="h1" className={styles.projectTitle}>Marketing Agency</Typography>
            <Typography variant="subtitle1" className={styles.projectSubtitle}>
            GroMo is an ABM-focused creative design agency dedicated to helping ambitious leaders discover effective strategies for brand and business growth.
            </Typography>
      </Section>
    
    <Section marginBottom="xl" padding="none">
        <TwoColumnSection
            imageSrc="src\assets\GromoCaseStudy\caseStudy-image-1.png"
            imageAlt="'Step-by-step' design from project inspiration board"
            imageOnLeft={true}
        >
           <Typography variant="h3" className={styles.manifestoTitle}>A step-by-step case study</Typography>
            <Typography variant="p" className={styles.manifestoText}>
            From ideation to implementation, This case study explains my <strong>step-by-step design process</strong>, tailored for a marketing agency seeking a digital reboot.            </Typography>
            <Typography variant='p' className={styles.manifestoText}>
            My work included refining the information architecture, crafting detailed wireframes, building design systems and bringing to life a <strong>ten-page website</strong> that beautifully highlighted this marketing company's fresh offerings.            </Typography>
        </TwoColumnSection>
    </Section>

    {/* Discovery */}
    <Section marginBottom="sm" padding="none">
        <Typography variant="h2" className={styles.sectionTitle}>Discovery</Typography>
        <Typography variant="p" className={styles.narrowContent}> 
            The Discovery phase serves as the foundation of our purpose-driven UX journey, uncovering key insights and client needs.
        </Typography>
    </Section>

    {/* Meeting Insights */}
    <Section marginBottom="sm" padding="none">
        <TwoColumnSection
            imageSrc="src\assets\GromoCaseStudy\caseStudy-image-2.png"
            imageAlt="'Step-by-step' design from project inspiration board"
            imageOnLeft={false}
        >
           <Typography variant="h3" className={styles.manifestoTitle}>Meeting Insight:</Typography>
            <Typography variant="p" className={styles.manifestoText}>
            Commenced the project by meticulously documenting client needs and specifications through a recorded meeting.</Typography>
            <Typography variant='p' className={styles.manifestoText}>
            During our discussions, key members of the GroMo team and I explored the company's future offerings, clarified expectations, and exchanged ideas for the project. Overall, the meeting was fun and informative.</Typography>
        </TwoColumnSection>
    </Section>

    <Section marginBottom="xl" padding="none">
        <TwoColumnSection
            imageSrc="src\assets\GromoCaseStudy\caseStudy-image-3.png" // Corrected path
            imageAlt="'Step-by-step' design from project inspiration board"
            imageOnLeft={true}
        >
            <div> {/* Added wrapper div */}
            <Typography variant="h3" className={styles.manifestoTitle}>Project specifications:</Typography>
            <Typography variant="p" className={styles.sectionText}>
            My primary objectives were to develop copy, graphic designs, and UI designs.
            </Typography>
            <Typography variant='p' className={styles.sectionText}>
            Subsequently, we identified essential service pages:
            <ul>
                <li>ABM</li>
                <li>Digital Paid Media</li>
                <li>Sales & Marketing Alignment</li>
                <li>CRM Automation Support</li>
                <li>Inbound</li>
            </ul>
            </Typography>
            <Typography variant='p' className={styles.sectionText}>
            Vertical Focus: Insights & case studies:
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
        For the planning phase, I viewed competitive analysis, crafted user personas and established a visual blueprint with an inspiration board.        </Typography>
    </Section>

    {/* Competitive Analysis */}
    <Section marginBottom="sm" padding="none">
        <TwoColumnSection
            imageSrc="src\assets\GromoCaseStudy\caseStudy-image-4.png"
            imageAlt="''collaboration' visual from approved design"
            imageOnLeft={false}
        >
            <Typography variant="h3" className={styles.manifestoTitle}>Competitive Analysis</Typography>
            <Typography variant="p" className={styles.manifestoText}>
                Thorough competitive audits were conducted to extract insights that informed a unique and competitive design strategy. The findings from this analysis became integral in creating a design that not only stood out but also addressed the specific needs of our client's target audience.
            </Typography>
        </TwoColumnSection>
    </Section>

    {/* Persona Development */}
    <Section marginBottom="xl" padding="none">
        <TwoColumnSection
            imageSrc="src\assets\GromoCaseStudy\caseStudy-image-5.png"
            imageAlt="''User personas from the planning phase"
            imageOnLeft={true}
        >
            <Typography variant="h3" className={styles.manifestoTitle}>Persona Development</Typography>
            <Typography variant="p" className={styles.manifestoText}>
                Thorough competitive audits were conducted to extract insights that informed a unique and competitive design strategy. The findings from this analysis became integral in creating a design that not only stood out but also addressed the specific needs of our client's target audience.
            </Typography>
        </TwoColumnSection>
    </Section>

    {/* Pain Points */}
    <Section marginBottom="none" padding="md">
        <Typography variant="h2" className={styles.sectionTitle}>Pain Points</Typography>
        <div className={styles.imageContainer}>
            <Image src="src\assets\GromoCaseStudy\case-study-image-6.png" alt="Pain points design for marketing landing page" className={styles.centeredImage} />
        </div>
    </Section>

    {/* Visual Blueprint */}
    <Section marginBottom="none" padding="none">
        <TwoColumnSection
            imageSrc="src\assets\GromoCaseStudy\caseStudy-image-6.jpg"
            imageAlt="''Gromo Inspiration Board visual"
            imageOnLeft={false}
        >
            <Typography variant="h3" className={styles.manifestoTitle}>Visual Blueprint</Typography>
            <Typography variant="p" className={styles.manifestoText}>
            Establishing an inspiration board integrated colors, patterns, and imagery, providing a visual blueprint for the project. This not only set the tone for the design aesthetics but also served as a reference point for decision-making throughout the project.
            </Typography>
        </TwoColumnSection>
    </Section>

    {/* User Flow Design */}
    <Section marginBottom="xl" padding="none">
        <TwoColumnSection
            imageSrc="src\assets\GromoCaseStudy\caseStudy-image-7.png"
            imageAlt="''This user flow visually represents the steps a user takes to accomplish a specific task within a system or application."
            imageOnLeft={true}
        >
            <Typography variant="h3" className={styles.manifestoTitle}>User Flow Design</Typography>
            <Typography variant="p" className={styles.manifestoText}>
                To optimize the user journey, we meticulously mapped out a user flow for a multi-step form. This step ensured that the design not only looked visually appealing but also prioritized a seamless and intuitive experience for the end-users.            
            </Typography>
        </TwoColumnSection>
    </Section>

    {/* UX + Copywriting */}
    <Section marginBottom="sm" padding="none">
        <Typography variant="h2" className={styles.sectionTitle}>UX + Copywriting</Typography>
        <Typography variant="p" className={styles.narrowContent}> 
            My extensive research informed the tone and scope, ensuring a seamless integration of solutions into the narrative.       
        </Typography>
    </Section>

    {/* Ideation and Research */}
    <Section marginBottom="sm" padding="none">
        <TwoColumnSection
            imageSrc="src\assets\GromoCaseStudy\caseStudy-image-8.png"
            imageAlt="'''market analysis' visual from approved design"
            imageOnLeft={false}
        >
            <Typography variant="h3" className={styles.manifestoTitle}>Ideation and Research</Typography>
            <Typography variant="p" className={styles.manifestoText}>
            In this phase, we're not just throwing words together; we're brainstorming and researching extensively. We want our copy to go beyond information—it should resonate with our users' needs and desires. The result is more than just words; it's a narrative that not only speaks directly to our audience but also aligns with our brand values, ensuring a consistent and unified user experience across all our pages.           
            </Typography>
        </TwoColumnSection>
    </Section>

    {/* Collaborative Copy */}
    <Section marginBottom="sm" padding="none">
        <TwoColumnSection
            imageSrc="src\assets\GromoCaseStudy\caseStudy-image-9.png"
            imageAlt="''Copywriting section from GroMo home page"
            imageOnLeft={true}
        >
            <Typography variant="h3" className={styles.manifestoTitle}>Collaborative Copy</Typography>
            <Typography variant="p" className={styles.manifestoText}>
                In the Writing phase, we take a collaborative approach to craft a narrative that truly connects with our audience. We kick off this phase by working together with project members in a shared space, ensuring that the words we choose not only convey information but also resonate with our users. We're not just writing; we're tailoring language, tone, and clarity to make sure our users have a seamless and engaging experience.            
            </Typography>
        </TwoColumnSection>
    </Section>
    
    {/* Client Alignment */}
    <Section marginBottom="xl" padding="none">
        <TwoColumnSection
            imageSrc="src\assets\GromoCaseStudy\caseStudy-image-10.png"
            imageAlt="''Copywriting section from GroMo home page"
            imageOnLeft={false}
        >
            <Typography variant="h3" className={styles.manifestoTitle}>Client Alignment</Typography>
            <Typography variant="p" className={styles.manifestoText}>
                In the collaborative copywriting phase, we initiate a dynamic process of constant communication and alignment. This not only ensures that our vision seamlessly resonates but also plays a crucial role in shaping specific content decisions.            
            </Typography>
        </TwoColumnSection>
    </Section>

    {/* IA + wireframes */}
    <Section marginBottom="none" padding="none">
        <Typography variant="h2" className={styles.sectionTitle}>IA + wireframes</Typography>
        <Typography variant="p" className={styles.narrowContent}> 
            Collaborating closely with decision-makers, I shape the information architecture and wireframes, marking a transition from conceptualization to a visual framework.       
        </Typography>
    </Section>

    {/* Frameworks and workflows */}
    <Section marginBottom="none" padding="none">
        <TwoColumnSection
            imageSrc="src\assets\GromoCaseStudy\caseStudy-image-11.png"
            imageAlt="''Information Architect diagram"
            imageOnLeft={true}
        >
            <Typography variant="h3" className={styles.manifestoTitle}>Frameworks and workflows</Typography>
            <Typography variant="p" className={styles.manifestoText}>
                Embark on a journey through the UX designer's toolbox, where creativity meets strategy. From Adobe Suite and UI software to the wizardry of AI, witness the artful curation of inspiration and client concepts into the architectural masterpieces of Information Architecture (IA) and wireframes. It's the alchemy of ideas, meticulously crafted for a user experience that feels both magical and seamless.            </Typography>
        </TwoColumnSection>
    </Section>

    {/* Client Collaboration */}
    <Section marginBottom="none" padding="none">
        <TwoColumnSection
            imageSrc="src\assets\GromoCaseStudy\caseStudy-image-12.png"
            imageAlt="''Information Architect diagram"
            imageOnLeft={false}
        >
            <Typography variant="h3" className={styles.manifestoTitle}>Client Collaboration</Typography>
            <Typography variant="p" className={styles.manifestoText}>
                Throughout this process, our valued client was at the forefront. We worked closely with decision-makers during the creation of wireframes, ensuring that every detail aligns seamlessly with the project goals we've set.
            </Typography>
        </TwoColumnSection>
    </Section>

    {/* Visual Conceptualization */}
    <Section marginBottom="xl" padding="none">
        <TwoColumnSection
            imageSrc="src\assets\GromoCaseStudy\caseStudy-image-13.png"
            imageAlt="''Visual conceptualization of marketing results for the 'client'"
            imageOnLeft={true}
        >
            <Typography variant="h3" className={styles.manifestoTitle}>Visual Conceptualization</Typography>
            <Typography variant="p" className={styles.manifestoText}>
                Moving forward into the Design phase, we extended our visual conceptualization using Adobe software and stock image sites. This step allowed us to design and implement customized visuals that go beyond aesthetics—they contribute to a cohesive and engaging user experience. As we transition into the Design phase, we're not just creating visuals; we're crafting an immersive journey for our users.
            </Typography>
        </TwoColumnSection>
    </Section>

    {/* Design */}
        <div>
        <Typography variant="h2" className={styles.sectionTitle}>Design</Typography>
        <Typography variant="p" className={styles.narrowContent}> 
            I bring the vision to life using a design system. Through client validation and iterative processes, we create a 10-page website.        
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
            imageSrc="src\assets\GromoCaseStudy\caseStudy-image-14.png"
            imageAlt="Segment of GroMo's design system"
            imageOnLeft={true}
        >
            <Typography variant="h3" className={styles.manifestoTitle}>Figma Design Iterations</Typography>
            <Typography variant="p" className={styles.manifestoText}>
                Employed Figma to bring the wireframes to life, designing icons, colors, typography, spacers, forms, buttons, inputs, hero sections, and lead magnets.
            </Typography>
        </TwoColumnSection>
    </Section>
    
    {/* Image Grid Section */}
    <Section marginBottom="none" padding="none">
        <ImageGrid>
          <div className={styles.imageContainer}>
            <Image src="src\assets\GromoCaseStudy\caseStudy-image-15.png" alt="Image 1" className={styles.gridImage} />
          </div>
          <div className={styles.imageContainer}>
            <Image src="src\assets\GromoCaseStudy\caseStudy-image-16.png" alt="Image 2" className={styles.gridImage} />
          </div>
          <div className={styles.imageContainer}>
            <Image src="/src\assets\GromoCaseStudy\caseStudy-image-17.png" alt="Image 3" className={styles.gridImage} />
          </div>
          <div className={styles.imageContainer}>
            <Image src="src\assets\GromoCaseStudy\caseStudy-image-18.png" alt="Image 4" className={styles.gridImage} />
          </div>
          <div className={styles.imageContainer}>
            <Image src="src\assets\GromoCaseStudy\caseStudy-image-19.png" alt="Image 5" className={styles.gridImage} />
          </div>
          <div className={styles.imageContainer}>
            <Image src="src\assets\GromoCaseStudy\caseStudy-image-20.png" alt="Image 6" className={styles.gridImage} />
          </div>
        </ImageGrid>
      </Section>

    {/* Client Validation */}
    <Section marginBottom="sm" padding="none">
        <TwoColumnSection
            imageSrc="src\assets\GromoCaseStudy\caseStudy-image-21.png"
            imageAlt="Segment of GroMo's design system"
            imageOnLeft={false}
        >
            <Typography variant="h3" className={styles.manifestoTitle}>Client Validation</Typography>
            <Typography variant="p" className={styles.manifestoText}>
                I engaged in a collaborative process with the client to ensure that the design aligns seamlessly with their vision and goals. This involved presenting design iterations and receiving feedback at key stages, fostering a dynamic dialogue that contributed to the refinement of the visual elements.
            </Typography>
        </TwoColumnSection>
    </Section>

    {/* Image Grid Section */}
    <Section marginBottom="none" padding="none">
        <ImageGrid>
          <div className={styles.imageContainer}>
            <Image src="src\assets\GromoCaseStudy\caseStudy-image-22.png" alt="Image 1" className={styles.gridImage} />
          </div>
          <div className={styles.imageContainer}>
            <Image src="src\assets\GromoCaseStudy\caseStudy-image-23.png" alt="Image 2" className={styles.gridImage} />
          </div>
          <div className={styles.imageContainer}>
            <Image src="/src\assets\GromoCaseStudy\caseStudy-image-24.png" alt="Image 3" className={styles.gridImage} />
          </div>
        </ImageGrid>
      </Section>

      {/* Call to Action */}
      <Section marginBottom="none" padding="none">
        <Card className={styles.sectionCard}>
        <Link to='/contact'>
            <Button variant='secondary'>Let's Talk</Button>
        </Link>
        </Card>
    </Section>
    </div>
  );
};

export default Project1Page;