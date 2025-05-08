// src/pages/Project1Page.tsx
import React from "react";
import Typography from "../components/Typography/Typography";
import Image from "../components/Image/Image";
// import Button from "../components/Button/Button";
import CtaSection from "../components/CtaSection/CtaSection"
import Section from "../components/Section/Section"; // Import Section
import styles from "./Project1Page.module.css";
// import { Link } from "react-router-dom";
import ImageGrid from "../components/ImageGrid/ImageGrid";
import beachscape from "../assets/Sketchbook-images/beachscape.png";
import cityscape from "../assets/Sketchbook-images/cityscape.png";
import countryscape from "../assets/Sketchbook-images/countryscape.png";
import desertscape from "../assets/Sketchbook-images/desertscape.png";
import winterscape from "../assets/Sketchbook-images/winterscape.png";
import fastfood from "../assets/Sketchbook-images/fastfood.png";
import food from "../assets/Sketchbook-images/food.png";
import junglescape from "../assets/Sketchbook-images/junglescape.png";
import mooncat1 from "../assets/Sketchbook-images/mooncat1.png";
import mooncat2 from "../assets/Sketchbook-images/mooncat2.png";
import mooncat3 from "../assets/Sketchbook-images/mooncat3.png";
import pizza1 from "../assets/Sketchbook-images/pizza1.png";
import pizza2 from "../assets/Sketchbook-images/pizza2.png";
import pizza3 from "../assets/Sketchbook-images/pizza3.png";
import pizza4 from "../assets/Sketchbook-images/pizza4.png";
import kids from "../assets/Sketchbook-images/kids.png";
import kidsFull from "../assets/Sketchbook-images/kids-full.png";
import kidsHalloween from "../assets/Sketchbook-images/kids-halloween.png";
import halloween from "../assets/Sketchbook-images/halloween.png";
import halloween2 from "../assets/Sketchbook-images/halloween2.png";
import halloween3 from "../assets/Sketchbook-images/halloween3.png";

const Sketchbook: React.FC = () => {
  return (
    <div className={styles.project1Page}>
      {/* --- Hero Section --- */}
      <Section className={styles.heroWrapper} marginBottom='lg' padding='sm'>
        <div className={styles.heroContent}>
          <Typography variant='h1' className={styles.heroTitle}>
            SketchBook{" "}
          </Typography>
          <Typography variant='subtitle1' className={styles.heroSubtitle}>
            Design Playground For Quick Ideas{" "}
          </Typography>
        </div>
      </Section>

      {/* Image Grid Section - Design Examples */}
      <Section marginBottom='xl' padding='none'>
        <ImageGrid>
          <div className={styles.imageContainer}>
            <Image src={cityscape} alt='Image 1' className={styles.gridImage} />
          </div>
          <div className={styles.imageContainer}>
            <Image
              src={beachscape}
              alt='Image 2'
              className={styles.gridImage}
            />
          </div>
          <div className={styles.imageContainer}>
            <Image
              src={countryscape}
              alt='Image 3'
              className={styles.gridImage}
            />
          </div>
          <div className={styles.imageContainer}>
            <Image
              src={desertscape}
              alt='Image 4'
              className={styles.gridImage}
            />
          </div>
          <div className={styles.imageContainer}>
            <Image
              src={junglescape}
              alt='Image 5'
              className={styles.gridImage}
            />
          </div>
          <div className={styles.imageContainer}>
            <Image
              src={winterscape}
              alt='Image 6'
              className={styles.gridImage}
            />
          </div>
        </ImageGrid>
      </Section>

      {/* Image Grid Section */}
      <Section marginBottom='xl' padding='none'>
        <ImageGrid>
          <div className={styles.imageContainer}>
            <Image src={food} alt='Image 1' className={styles.gridImage} />
          </div>
          <div className={styles.imageContainer}>
            <Image src={fastfood} alt='Image 2' className={styles.gridImage} />
          </div>
          <div className={styles.imageContainer}>
            <Image src={pizza1} alt='Image 3' className={styles.gridImage} />
          </div>
        </ImageGrid>
      </Section>

      {/* Image Grid Section */}
      <Section marginBottom='xl' padding='none'>
        <ImageGrid>
          <div className={styles.imageContainer}>
            <Image src={pizza2} alt='Image 1' className={styles.gridImage} />
          </div>
          <div className={styles.imageContainer}>
            <Image src={pizza3} alt='Image 2' className={styles.gridImage} />
          </div>
          <div className={styles.imageContainer}>
            <Image src={pizza4} alt='Image 3' className={styles.gridImage} />
          </div>
        </ImageGrid>
      </Section>

      {/* Image Grid Section */}
      <Section marginBottom='xl' padding='none'>
        <ImageGrid>
          <div className={styles.imageContainer}>
            <Image src={mooncat1} alt='Image 1' className={styles.gridImage} />
          </div>
          <div className={styles.imageContainer}>
            <Image src={mooncat2} alt='Image 2' className={styles.gridImage} />
          </div>
          <div className={styles.imageContainer}>
            <Image src={mooncat3} alt='Image 3' className={styles.gridImage} />
          </div>
        </ImageGrid>
      </Section>

      {/* Image Grid Section - Design Examples */}
      <Section marginBottom='xl' padding='none'>
        <ImageGrid>
          <div className={styles.imageContainer}>
            <Image src={kids} alt='Image 1' className={styles.gridImage} />
          </div>
          <div className={styles.imageContainer}>
            <Image src={kidsFull} alt='Image 2' className={styles.gridImage} />
          </div>
          <div className={styles.imageContainer}>
            <Image
              src={kidsHalloween}
              alt='Image 3'
              className={styles.gridImage}
            />
          </div>
          <div className={styles.imageContainer}>
            <Image src={halloween} alt='Image 4' className={styles.gridImage} />
          </div>
          <div className={styles.imageContainer}>
            <Image
              src={halloween2}
              alt='Image 5'
              className={styles.gridImage}
            />
          </div>
          <div className={styles.imageContainer}>
            <Image
              src={halloween3}
              alt='Image 6'
              className={styles.gridImage}
            />
          </div>
        </ImageGrid>
      </Section>

      <div className={styles.wrapper}>
        <CtaSection>
          {/* Assuming CtaSection handles its own content */}
        </CtaSection>
      </div>
    </div>
  );
};

export default Sketchbook;
