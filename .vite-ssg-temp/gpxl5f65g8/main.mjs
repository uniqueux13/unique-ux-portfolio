import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import { Link, useParams, useLocation, Routes, Route, BrowserRouter } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import matter from "gray-matter";
import { format, parseISO } from "date-fns";
import ReactMarkdown from "react-markdown";
const header = "_header_szmj1_5";
const logoContainer = "_logoContainer_szmj1_27";
const logoImage = "_logoImage_szmj1_39";
const siteTitle = "_siteTitle_szmj1_53";
const styles$k = {
  header,
  logoContainer,
  logoImage,
  siteTitle
};
const navigation = "_navigation_huej5_7";
const menuButton = "_menuButton_huej5_23";
const hamburgerIcon = "_hamburgerIcon_huej5_41";
const navList = "_navList_huej5_49";
const navItem = "_navItem_huej5_63";
const navLink = "_navLink_huej5_71";
const open = "_open_huej5_139";
const styles$j = {
  navigation,
  menuButton,
  hamburgerIcon,
  navList,
  navItem,
  navLink,
  open
};
const toggleButton = "_toggleButton_1he3v_3";
const icon = "_icon_1he3v_37";
const styles$i = {
  toggleButton,
  icon
};
const DarkModeToggle = ({ className = "" }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(prefersDarkMode);
      document.documentElement.setAttribute("data-theme", prefersDarkMode ? "dark" : "light");
    }
  }, []);
  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick: toggleTheme,
      className: `${styles$i.toggleButton} ${className}`,
      "aria-label": isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode",
      "aria-pressed": isDarkMode,
      children: /* @__PURE__ */ jsx("span", { className: styles$i.icon, children: isDarkMode ? /* @__PURE__ */ jsx(FaSun, {}) : /* @__PURE__ */ jsx(FaMoon, {}) })
    }
  );
};
const Navigation = ({ navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Blog", path: "/blog" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Sketchbook", path: "/sketchbook" }
  // Add this line!
] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return /* @__PURE__ */ jsxs("nav", { className: styles$j.navigation, children: [
    /* @__PURE__ */ jsx("button", { className: styles$j.menuButton, onClick: toggleMenu, children: /* @__PURE__ */ jsx("span", { className: styles$j.hamburgerIcon, children: "☰" }) }),
    /* @__PURE__ */ jsxs("ul", { className: `${styles$j.navList} ${isOpen ? styles$j.open : ""}`, children: [
      navItems.map((item, index) => /* @__PURE__ */ jsx("li", { className: styles$j.navItem, children: /* @__PURE__ */ jsx(Link, { to: item.path, className: styles$j.navLink, onClick: () => {
        setIsOpen(false);
      }, children: item.label }) }, index)),
      /* @__PURE__ */ jsx("li", { className: styles$j.navItem, children: /* @__PURE__ */ jsx(DarkModeToggle, {}) })
    ] })
  ] });
};
const logo = "data:image/svg+xml,%3csvg%20width='31'%20height='31'%20viewBox='0%200%2031%2031'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='2.04805'%20height='3.52733'%20fill='white'/%3e%3crect%20x='5.89282'%20width='5.62809'%20height='2.45554'%20fill='%2356D6FF'/%3e%3crect%20x='2.5647'%20y='4.63086'%20width='3.58369'%20height='2.97954'%20fill='white'/%3e%3crect%20x='8.37817'%20y='6.51562'%20width='4.23893'%20height='4.36886'%20fill='white'/%3e%3crect%20x='7.17358'%20y='14.4014'%20width='4.61496'%20height='4.89842'%20fill='%23FFFC5D'/%3e%3crect%20x='15.2427'%20y='8.57715'%20width='5.85969'%20height='6.22231'%20fill='white'/%3e%3crect%20x='15.3635'%20y='2.44141'%20width='2.81561'%20height='2.98652'%20fill='%23FFFC5D'/%3e%3crect%20x='1.54126'%20y='10.6016'%20width='2.81543'%20height='2.98381'%20fill='%2356D6FF'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M30.8469%204.7531V1.24219H30.8468H27.7761L21.3739%201.24219V4.7531L27.7761%204.7531V27.3133L6.26822%2027.3133V20.7855H2.94561V27.3133H2.94556L2.94556%2030.8471H30.8028V30.8408H30.8468V4.7531H30.8469Z'%20fill='white'/%3e%3c/svg%3e";
const Header = ({ siteTitle: siteTitle2 }) => {
  return /* @__PURE__ */ jsxs("header", { className: styles$k.header, children: [
    /* @__PURE__ */ jsxs(Link, { to: "/", children: [
      " ",
      /* @__PURE__ */ jsxs("div", { className: styles$k.logoContainer, children: [
        /* @__PURE__ */ jsx("img", { src: logo, alt: "Unique UX Logo", className: styles$k.logoImage }),
        /* @__PURE__ */ jsx("span", { className: styles$k.siteTitle, children: siteTitle2 })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Navigation, {})
  ] });
};
const footer = "_footer_12qbp_3";
const styles$h = {
  footer
};
const Footer = () => {
  return /* @__PURE__ */ jsx("footer", { className: styles$h.footer, children: /* @__PURE__ */ jsxs("p", { children: [
    "© ",
    (/* @__PURE__ */ new Date()).getFullYear(),
    " Unique UX. All rights reserved."
  ] }) });
};
const h1 = "_h1_1dqtk_7";
const h2 = "_h2_1dqtk_7";
const h3 = "_h3_1dqtk_7";
const h4 = "_h4_1dqtk_7";
const p = "_p_1dqtk_7";
const subtitle1 = "_subtitle1_1dqtk_7";
const subtitle2 = "_subtitle2_1dqtk_7";
const span = "_span_1dqtk_7";
const heroP = "_heroP_1dqtk_7";
const caption = "_caption_1dqtk_7";
const listItem = "_listItem_1dqtk_101";
const styles$g = {
  h1,
  h2,
  h3,
  h4,
  p,
  subtitle1,
  subtitle2,
  span,
  heroP,
  caption,
  listItem,
  "align-left": "_align-left_1dqtk_189",
  "align-center": "_align-center_1dqtk_197",
  "align-right": "_align-right_1dqtk_205",
  "align-justify": "_align-justify_1dqtk_213"
};
const Typography = ({
  variant,
  children,
  className = "",
  align = "left"
}) => {
  let Element = "p";
  let variantClass = styles$g.p;
  switch (variant) {
    case "h1":
      Element = "h1";
      variantClass = styles$g.h1;
      break;
    case "h2":
      Element = "h2";
      variantClass = styles$g.h2;
      break;
    case "h3":
      Element = "h3";
      variantClass = styles$g.h3;
      break;
    case "h4":
      Element = "h4";
      variantClass = styles$g.h4;
      break;
    case "h5":
      Element = "h5";
      variantClass = styles$g.h5;
      break;
    case "h6":
      Element = "h6";
      variantClass = styles$g.h6;
      break;
    case "subtitle1":
      Element = "p";
      variantClass = styles$g.subtitle1;
      break;
    case "subtitle2":
      Element = "p";
      variantClass = styles$g.subtitle2;
      break;
    case "span":
      Element = "span";
      variantClass = styles$g.span;
      break;
    case "p":
      Element = "p";
      variantClass = styles$g.p;
      break;
    case "heroP":
      Element = "p";
      variantClass = styles$g.heroP;
      break;
    case "caption":
      Element = "p";
      variantClass = styles$g.caption;
      break;
    case "listItem":
      Element = "p";
      variantClass = styles$g.listItem;
      break;
    default:
      Element = "p";
      variantClass = styles$g.p;
      break;
  }
  const alignmentClass = styles$g[`align-${align}`];
  return /* @__PURE__ */ jsx(Element, { className: `${variantClass} ${alignmentClass} ${className}`, children });
};
const card = "_card_1g9rj_3";
const styles$f = {
  card
};
const Card = ({ children, className = "" }) => {
  return /* @__PURE__ */ jsx("div", { className: `${styles$f.card} ${className}`, children });
};
const image$1 = "_image_16dpo_3";
const styles$e = {
  image: image$1
};
const Image = ({ src, alt, className, width, height, lazyLoad = true }) => {
  const [imageSrc, setImageSrc] = useState(lazyLoad ? void 0 : src);
  const imageRef = useRef(null);
  useEffect(() => {
    if (lazyLoad) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setImageSrc(src);
              observer.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: "100px"
          // Load a bit before it's visible
        }
      );
      if (imageRef.current) {
        observer.observe(imageRef.current);
      }
      return () => {
        if (imageRef.current) {
          observer.unobserve(imageRef.current);
        }
      };
    }
  }, [lazyLoad, src]);
  return /* @__PURE__ */ jsx(
    "img",
    {
      ref: imageRef,
      src: imageSrc || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E",
      alt,
      className: `${styles$e.image} ${className}`,
      style: { width, height }
    }
  );
};
const button = "_button_fdrje_5";
const primary = "_primary_fdrje_43";
const breatheSunlight = "_breatheSunlight_fdrje_1";
const secondary = "_secondary_fdrje_65";
const breatheBorder = "_breatheBorder_fdrje_1";
const text = "_text_fdrje_89";
const disabled = "_disabled_fdrje_113";
const styles$d = {
  button,
  primary,
  breatheSunlight,
  secondary,
  breatheBorder,
  text,
  disabled
};
const Button = ({
  children,
  onClick,
  variant = "primary",
  disabled: disabled2 = false,
  type = "button",
  className = "",
  arrow = false
  // Default to no arrow
}) => {
  const buttonClassName = `${styles$d.button} ${styles$d[variant]} ${className} ${disabled2 ? styles$d.disabled : ""}`;
  return /* @__PURE__ */ jsxs(
    "button",
    {
      type,
      className: buttonClassName,
      onClick,
      disabled: disabled2,
      children: [
        children,
        arrow && /* @__PURE__ */ jsx("span", { children: " ➔" }),
        " "
      ]
    }
  );
};
const heroTitle$5 = "_heroTitle_1xj9b_5";
const heroSubtitle$5 = "_heroSubtitle_1xj9b_17";
const heroContent$5 = "_heroContent_1xj9b_41";
const heroButton = "_heroButton_1xj9b_87";
const servicesGrid = "_servicesGrid_1xj9b_103";
const serviceItem = "_serviceItem_1xj9b_117";
const sectionTitle$2 = "_sectionTitle_1xj9b_127";
const serviceTitle$1 = "_serviceTitle_1xj9b_135";
const ctaTitle$3 = "_ctaTitle_1xj9b_149";
const ctaSubtitle$3 = "_ctaSubtitle_1xj9b_161";
const styles$c = {
  heroTitle: heroTitle$5,
  heroSubtitle: heroSubtitle$5,
  heroContent: heroContent$5,
  heroButton,
  servicesGrid,
  serviceItem,
  sectionTitle: sectionTitle$2,
  serviceTitle: serviceTitle$1,
  ctaTitle: ctaTitle$3,
  ctaSubtitle: ctaSubtitle$3
};
const section = "_section_gbcrq_3";
const styles$b = {
  section,
  "padding-sm": "_padding-sm_gbcrq_23",
  "padding-md": "_padding-md_gbcrq_31",
  "padding-lg": "_padding-lg_gbcrq_39",
  "padding-xl": "_padding-xl_gbcrq_47",
  "padding-none": "_padding-none_gbcrq_55",
  "margin-bottom-none": "_margin-bottom-none_gbcrq_65",
  "margin-bottom-sm": "_margin-bottom-sm_gbcrq_73",
  "margin-bottom-md": "_margin-bottom-md_gbcrq_81",
  "margin-bottom-lg": "_margin-bottom-lg_gbcrq_89",
  "margin-bottom-xl": "_margin-bottom-xl_gbcrq_97",
  "margin-bottom-xxl": "_margin-bottom-xxl_gbcrq_105"
};
const Section = ({
  children,
  className = "",
  padding = "md",
  marginBottom = "md"
  // Default marginBottom
}) => {
  const sectionClassName = `${styles$b.section} ${styles$b[`padding-${padding}`]} ${className} ${styles$b[`margin-bottom-${marginBottom}`]}`;
  return /* @__PURE__ */ jsx("section", { className: sectionClassName, children });
};
const twoColumnSection = "_twoColumnSection_1piru_5";
const content = "_content_1piru_19";
const imageContainer = "_imageContainer_1piru_31";
const image = "_image_1piru_31";
const contentLeft = "_contentLeft_1piru_89";
const imageLeft = "_imageLeft_1piru_95";
const contentRight = "_contentRight_1piru_101";
const imageRight = "_imageRight_1piru_107";
const styles$a = {
  twoColumnSection,
  content,
  imageContainer,
  image,
  contentLeft,
  imageLeft,
  contentRight,
  imageRight
};
const videoContainer$1 = "_videoContainer_aoc28_5";
const videoIframe = "_videoIframe_aoc28_21";
const video = "_video_aoc28_5";
const styles$9 = {
  videoContainer: videoContainer$1,
  videoIframe,
  video
};
const Video = ({
  src,
  className,
  autoPlay,
  muted,
  loop,
  controls
}) => {
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current && autoPlay) {
      videoRef.current.play().catch((error) => {
        console.error("Autoplay failed:", error);
      });
    }
  }, [autoPlay]);
  const isYouTube = src.includes("youtube.com/embed");
  return /* @__PURE__ */ jsx("div", { className: `${styles$9.videoContainer} ${className || ""}`, children: isYouTube ? /* @__PURE__ */ jsx(
    "iframe",
    {
      className: styles$9.videoIframe,
      src,
      title: "YouTube video player",
      frameBorder: "0",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      allowFullScreen: true
    }
  ) : /* @__PURE__ */ jsxs(
    "video",
    {
      ref: videoRef,
      className: styles$9.video,
      autoPlay,
      muted,
      loop,
      controls,
      children: [
        /* @__PURE__ */ jsx("source", { src, type: "video/mp4" }),
        "Your browser does not support the video tag."
      ]
    }
  ) });
};
const TwoColumnSection = ({
  children,
  imageSrc,
  imageAlt,
  imageOnLeft = false,
  className = ""
}) => {
  const isYouTube = imageSrc.includes("youtube.com/embed");
  return /* @__PURE__ */ jsxs("section", { className: `${styles$a.twoColumnSection} ${className}`, children: [
    /* @__PURE__ */ jsx("div", { className: `${styles$a.content} ${imageOnLeft ? styles$a.contentRight : styles$a.contentLeft}`, children }),
    /* @__PURE__ */ jsx("div", { className: `${styles$a.imageContainer} ${imageOnLeft ? styles$a.imageLeft : styles$a.imageRight}`, children: isYouTube ? /* @__PURE__ */ jsx(Video, { src: imageSrc, controls: true }) : /* @__PURE__ */ jsx("img", { src: imageSrc, alt: imageAlt, className: styles$a.image }) })
  ] });
};
const heroImageAlt = "/assets/hero-image-alt-BjEg3pRR.png";
const uxCertificate = "/assets/google-ux-certificate-CkN3yCkJ.png";
const gromoLogo = "/assets/gromo-logo-B0BXapo6.png";
const nimblebotLogo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUsAAABICAYAAAB/VNeEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANBSURBVHgB7d3vTeNIGAfgCUF8TgeXEviKgBAqODo4rpLjOtgO1tsBHSSXCFHG5jrY+4ZAxDde5QNaxc6bfwsbP4+ELDLOYL8kP43JME4JAAAAAAAAAAAAAAAAAAAAAABoh06CFabT6V9lWd7VtXe73f75+fm/aU/9Z+PBYHCd3tFkMvmcN7cNuxT5GP9MH9RoNOrn39PXFbu9e50/sqMEwErCEiBAWAIECEuAAGEJECAsAQKOE3s3mUzKhuYPPeWEVhk2vFZbP63IyBIgQFgCBAhLgABhCRAgLAEChCVAQOunDo1Go9Nut3uaduz19fX++vr62+Lbom6/sizHi+MYVqv3pA0MBoOirm2x2swwrSkf/ywf/ziy73w+v5lMJv+lNf1Qo43lc+zlc7xJe7BGHfq5BrdpTW/73+T5wZ9xH9kvvxZnnU5nvKwtPz5LLdf6sDw+Pv59xfJgGzk5ORnlzfcgiMyjzG/2P1LzEmBNioZ+h3nzOa0pP6/Im3Fk31y/T2kDb2u0pV7a4Bwj1qjDcPG1Tf97OYeqzs/Pzyv3qwLRnN96LsMBAoQlQICwBAgQlgABwhIgwKpDP0HTlJA1pqYUm/SfP+H8LX9aXaR61ZSbXjps4/w1W9aQazPMNeqnLeU+7i4vL/9e1ha4IRu/AGH5c9ROCYlOTWma0tG0BFwVlE3PzW/kfhUY6YAdHR0VFxcXX5a1Be7aCN8Jy4DFqGD29rE8kqhGZHuZCP2ryfW5rWvLdSoSO6HO70tYBlT/1ZBHZ/+8fWwxIhOW2dXV1Ze6tjxyKxI7oc7vS1hy8Obz+accJnc1zYf+91p2RFjSBr0kFNmSqUMAAcISIEBYAgQIS4AAYQkQICwBAkwdohXKsqxWZF97VfZOp7OLldw5AMKSVsihd++WCWzDZThAgJElW5tOp6O6tnz5m7aV++g9Pj72l7WdnZ3NUkxtH02enp6+Re5AWS1ykeswrGnrpx3Yd51pJizZ2r6XeMuX0KcvLy9fl7U9PDz0I3cuzG5yH2svfLJYQi9y+d7fVSjWOfSl9D46l+EAAcISIEBYAgQIS4AAYQkQICwBAoQlAAAAAAAAAAAAAAAAAAAAAAC0xf+3Pxjkd3NprQAAAABJRU5ErkJggg==";
const ipsLogo = "/assets/ips-logo-2KUQd22I.png";
const bonsaiLogo = "/assets/bonsai-logo-Hx3Ey7T4.png";
const icereamAppsLogo = "/assets/icecream-apps-logo-Cb-ttm0W.png";
const gallaudetLogo = "/assets/gallaudet-logo-DK8TEOsQ.png";
const imageGrid = "_imageGrid_o4qjy_5";
const styles$8 = {
  imageGrid
};
const ImageGrid = ({
  children,
  columns = 3,
  gap = "var(--space-md)",
  className = ""
}) => {
  return /* @__PURE__ */ jsx("div", { className: `${styles$8.imageGrid} ${className}`, style: { "--columns": columns, "--gap": gap }, children });
};
const HomePage = () => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: styles$c.heroContent, children: [
      /* @__PURE__ */ jsx(Typography, { variant: "h1", className: styles$c.heroTitle, children: "Personalization" }),
      /* @__PURE__ */ jsx(Typography, { variant: "subtitle1", className: styles$c.heroSubtitle, children: "Designing Unique Digital Experiences for Every User" }),
      /* @__PURE__ */ jsx(Link, { to: "/portfolio", children: /* @__PURE__ */ jsx(Button, { variant: "primary", className: styles$c.heroButton, arrow: true, children: "View My Work" }) })
    ] }),
    /* @__PURE__ */ jsx(Section, { marginBottom: "xxl", padding: "none", children: /* @__PURE__ */ jsxs(
      TwoColumnSection,
      {
        imageSrc: heroImageAlt,
        imageAlt: "About Unique UX",
        imageOnLeft: false,
        children: [
          /* @__PURE__ */ jsx(Typography, { variant: "h2", className: styles$c.manifestoTitle, children: "About Unique UX" }),
          /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$c.manifestoText, children: "Unique UX empowers you to shape the digital narrative. We provide the framework and tools to transform your vision into impactful, resonant user experiences." })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs(Section, { marginBottom: "xxl", padding: "none", children: [
      /* @__PURE__ */ jsx(Typography, { variant: "h2", className: styles$c.sectionTitle, children: "My Process" }),
      /* @__PURE__ */ jsxs("div", { className: styles$c.servicesGrid, children: [
        /* @__PURE__ */ jsxs(Card, { className: styles$c.serviceItem, children: [
          /* @__PURE__ */ jsx(Typography, { variant: "h4", className: styles$c.serviceTitle, children: "1. Discover" }),
          /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$c.serviceDescription, children: "Understand user needs and project goals through research." })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: styles$c.serviceItem, children: [
          /* @__PURE__ */ jsx(Typography, { variant: "h4", className: styles$c.serviceTitle, children: "2. Define" }),
          /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$c.serviceDescription, children: "Define clear problem statements and strategies." })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: styles$c.serviceItem, children: [
          /* @__PURE__ */ jsx(Typography, { variant: "h4", className: styles$c.serviceTitle, children: "3. Ideate" }),
          /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$c.serviceDescription, children: "Generate and explore a wide range of potential solutions." })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: styles$c.serviceItem, children: [
          /* @__PURE__ */ jsx(Typography, { variant: "h4", className: styles$c.serviceTitle, children: "4. Design" }),
          /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$c.serviceDescription, children: "Create wireframes, prototypes, and visual designs." })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: styles$c.serviceItem, children: [
          /* @__PURE__ */ jsx(Typography, { variant: "h4", className: styles$c.serviceTitle, children: "5. Test" }),
          /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$c.serviceDescription, children: "Validate designs with users and gather feedback." })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: styles$c.serviceItem, children: [
          /* @__PURE__ */ jsx(Typography, { variant: "h4", className: styles$c.serviceTitle, children: "6. Refine" }),
          /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$c.serviceDescription, children: "Iterate on designs based on testing and feedback." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Section, { marginBottom: "xxl", padding: "none", children: [
      /* @__PURE__ */ jsx(Typography, { variant: "h2", className: styles$c.sectionTitle, children: "Trusted by professionals" }),
      /* @__PURE__ */ jsxs(ImageGrid, { children: [
        /* @__PURE__ */ jsx("div", { className: styles$c.imageContainer, children: /* @__PURE__ */ jsx(Image, { src: gromoLogo, alt: "GroMo Agency Logo", className: styles$c.gridImage }) }),
        /* @__PURE__ */ jsx("div", { className: styles$c.imageContainer, children: /* @__PURE__ */ jsx(Image, { src: nimblebotLogo, alt: "Nimblebot Logo", className: styles$c.gridImage }) }),
        /* @__PURE__ */ jsx("div", { className: styles$c.imageContainer, children: /* @__PURE__ */ jsx(Image, { src: ipsLogo, alt: "IPS Logo", className: styles$c.gridImage }) }),
        /* @__PURE__ */ jsx("div", { className: styles$c.imageContainer, children: /* @__PURE__ */ jsx(Image, { src: bonsaiLogo, alt: "Bonsai Logo", className: styles$c.gridImage }) }),
        /* @__PURE__ */ jsx("div", { className: styles$c.imageContainer, children: /* @__PURE__ */ jsx(Image, { src: icereamAppsLogo, alt: "Icecream Apps Logo", className: styles$c.gridImage }) }),
        /* @__PURE__ */ jsx("div", { className: styles$c.imageContainer, children: /* @__PURE__ */ jsx(Image, { src: gallaudetLogo, alt: "Gallaudet University Logo", className: styles$c.gridImage }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Section, { marginBottom: "xxl", padding: "none", children: /* @__PURE__ */ jsxs(
      TwoColumnSection,
      {
        imageSrc: uxCertificate,
        imageAlt: "About Unique UX",
        imageOnLeft: true,
        children: [
          /* @__PURE__ */ jsx(Typography, { variant: "h2", className: styles$c.manifestoTitle, children: "Certificate | Foundations of UX design" }),
          /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$c.manifestoText, children: "During my studies for the Google UX Design Certificate, I delved into the core principles of UX design, refining my skills in user research, prototyping, and interaction design." })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: styles$c.heroContent, children: [
      /* @__PURE__ */ jsx(Typography, { variant: "h2", className: styles$c.ctaTitle, children: "Ready to Create Something Unique?" }),
      /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$c.ctaSubtitle, children: "Let's collaborate to build a digital experience that transforms your business and delights your users." }),
      /* @__PURE__ */ jsx(Link, { to: "https://calendly.com/kyleranta/15min", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(Button, { variant: "primary", arrow: true, children: "Book a Free Consultation" }) }),
      /* @__PURE__ */ jsx(Typography, { variant: "listItem", align: "center", children: "uniqueux13@gmail.com" })
    ] })
  ] });
};
const heroTitle$4 = "_heroTitle_1kbka_7";
const heroSubtitle$4 = "_heroSubtitle_1kbka_19";
const heroContent$4 = "_heroContent_1kbka_41";
const sectionTitle$1 = "_sectionTitle_1kbka_153";
const ctaTitle$2 = "_ctaTitle_1kbka_175";
const ctaSubtitle$2 = "_ctaSubtitle_1kbka_187";
const styles$7 = {
  heroTitle: heroTitle$4,
  heroSubtitle: heroSubtitle$4,
  heroContent: heroContent$4,
  sectionTitle: sectionTitle$1,
  ctaTitle: ctaTitle$2,
  ctaSubtitle: ctaSubtitle$2
};
const working = "/assets/working-DoTiKEBP.png";
const profilePicture = "/assets/kyle-6BbnqwIp.png";
const AboutPage = () => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: styles$7.heroContent, children: [
      /* @__PURE__ */ jsx(Typography, { variant: "h1", className: styles$7.heroTitle, children: "About Kyle" }),
      /* @__PURE__ */ jsx(Typography, { variant: "subtitle1", className: styles$7.heroSubtitle, children: "The man behind the Unique UX brand." })
    ] }),
    /* @__PURE__ */ jsx(Section, { marginBottom: "xl", padding: "none", children: /* @__PURE__ */ jsxs(
      TwoColumnSection,
      {
        imageSrc: profilePicture,
        imageAlt: "About Unique UX",
        imageOnLeft: false,
        children: [
          /* @__PURE__ */ jsx(Typography, { variant: "h2", className: styles$7.manifestoTitle, children: "Design & Content" }),
          /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$7.manifestoText, children: "I design user-centered digital experiences and the content that brings them to life. My skills span UI/UX design, content strategy, video production, and graphic design." })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(Section, { marginBottom: "xl", padding: "none", children: /* @__PURE__ */ jsxs(
      TwoColumnSection,
      {
        imageSrc: working,
        imageAlt: "a collage of hobbies that Kyle from Unique UX enjoys doing including an illustration of a man at a typewriter, card designs from a card game, and interesting black and white UI designs.",
        imageOnLeft: true,
        children: [
          /* @__PURE__ */ jsx(Typography, { variant: "h2", className: styles$7.manifestoTitle, children: "When I'm not working" }),
          /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$7.manifestoText, children: "In my downtime, I channel creativity into writing science fiction narratives, designing card games, and delving into the technical realms of math, science, art, and history." })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(Section, { padding: "md", children: /* @__PURE__ */ jsx(
      TwoColumnSection,
      {
        imageSrc: "https://www.youtube.com/embed/6-hRrKFkAQE?si=pxhLclOcjZ2Ts4pC",
        imageAlt: "A song from my favourite band.",
        imageOnLeft: false,
        children: /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Typography, { variant: "h2", className: styles$7.sectionTitle, children: "I Like This Song" }),
          /* @__PURE__ */ jsx(Typography, { variant: "p", children: "I think the name of the artist, title of the song, and overall, it fits well here." })
        ] })
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: styles$7.heroContent, children: [
      /* @__PURE__ */ jsx(Typography, { variant: "h2", className: styles$7.ctaTitle, children: "Ready to Create Something Unique?" }),
      /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$7.ctaSubtitle, children: "Let's collaborate to build a digital experience that transforms your business and delights your users." }),
      /* @__PURE__ */ jsx(Link, { to: "https://calendly.com/kyleranta/15min", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(Button, { variant: "primary", arrow: true, children: "Book a Free Consultation" }) }),
      /* @__PURE__ */ jsx(Typography, { variant: "listItem", align: "center", children: "uniqueux13@gmail.com" })
    ] })
  ] });
};
const heroTitle$3 = "_heroTitle_5odbv_1";
const heroSubtitle$3 = "_heroSubtitle_5odbv_13";
const heroContent$3 = "_heroContent_5odbv_39";
const projectTitle = "_projectTitle_5odbv_51";
const projectDescription = "_projectDescription_5odbv_61";
const projectLink = "_projectLink_5odbv_69";
const styles$6 = {
  heroTitle: heroTitle$3,
  heroSubtitle: heroSubtitle$3,
  heroContent: heroContent$3,
  projectTitle,
  projectDescription,
  projectLink
};
const caseStudyProject1 = "/assets/caseStudy-project-1-D1LYWBmj.png";
const caseStudyProject2 = "/assets/caseStudy-image-1-4IxAtWZT.png";
const caseStudyProject3 = "/assets/caseStudy-project-3-DKNGtZEH.png";
const PortfolioPage = () => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: styles$6.heroContent, children: [
      /* @__PURE__ */ jsx(Typography, { variant: "h1", className: styles$6.heroTitle, children: "Driving Results Through Design" }),
      /* @__PURE__ */ jsx(Typography, { variant: "subtitle1", className: styles$6.heroSubtitle, children: "Case Studies Demonstrating Impactful UX and Content Solutions" })
    ] }),
    /* @__PURE__ */ jsx(Section, { marginBottom: "xl", padding: "none", children: /* @__PURE__ */ jsx(
      TwoColumnSection,
      {
        imageSrc: caseStudyProject1,
        imageAlt: "Marketing Agency Website Redesign",
        imageOnLeft: true,
        children: /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Typography, { variant: "h2", className: styles$6.projectTitle, children: "Marketing Agency Website Redesign" }),
          /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$6.projectDescription, children: "Developed a comprehensive design system that streamlined the user experience and improved brand consistency.  Resulted in a 27% increase in leads." }),
          /* @__PURE__ */ jsx(Link, { to: "/project1", className: styles$6.projectLink, children: "View Project" }),
          " "
        ] })
      }
    ) }),
    /* @__PURE__ */ jsx(Section, { marginBottom: "xl", padding: "none", children: /* @__PURE__ */ jsx(
      TwoColumnSection,
      {
        imageSrc: caseStudyProject2,
        imageAlt: "Exploring Voice UI: An AR Concept",
        imageOnLeft: false,
        children: /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Typography, { variant: "h2", className: styles$6.projectTitle, children: "Voice-Activated AR Interface Concept" }),
          /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$6.projectDescription, children: "Goal: Understand the Web Speech API and experiment with basic voice commands in a web-based simulation of an AR interface. This is a learning exercise, not a polished UI. Built with React, TypeScript, & Vite." }),
          /* @__PURE__ */ jsx(Link, { to: "/project2", className: styles$6.projectLink, children: "View Project" }),
          " "
        ] })
      }
    ) }),
    /* @__PURE__ */ jsx(Section, { marginBottom: "xl", padding: "none", children: /* @__PURE__ */ jsx(
      TwoColumnSection,
      {
        imageSrc: caseStudyProject3,
        imageAlt: "Card Game Design and Development",
        imageOnLeft: true,
        children: /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Typography, { variant: "h2", className: styles$6.projectTitle, children: "Card Game Design and Development" }),
          /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$6.projectDescription, children: "Dive into the strategic realm of Order & Entropy: Tactical Deckbuilder. Unleash chaos, shape strategies. Case study unveiling soon!" }),
          /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$6.comingSoon, children: "Coming Soon" })
        ] })
      }
    ) })
  ] });
};
const heroTitle$2 = "_heroTitle_aa7l1_5";
const heroSubtitle$2 = "_heroSubtitle_aa7l1_17";
const heroContent$2 = "_heroContent_aa7l1_41";
const categoryTitle = "_categoryTitle_aa7l1_55";
const serviceItems = "_serviceItems_aa7l1_65";
const serviceTitle = "_serviceTitle_aa7l1_79";
const servicePrice = "_servicePrice_aa7l1_89";
const serviceDescription = "_serviceDescription_aa7l1_101";
const styles$5 = {
  heroTitle: heroTitle$2,
  heroSubtitle: heroSubtitle$2,
  heroContent: heroContent$2,
  categoryTitle,
  serviceItems,
  serviceTitle,
  servicePrice,
  serviceDescription
};
const ServicesPage = () => {
  const services = {
    uxui: [
      {
        title: "Starter UX",
        price: "$500",
        description: [
          "🔹 Usability analysis (3 pages)",
          "🔹 Actionable report",
          "🔹 Quick 3-day turnaround"
        ]
      },
      {
        title: "Pro UX",
        price: "$5,000",
        description: [
          "🔹 Full UX analysis & wireframes",
          "🔹 UI redesign for up to 5 pages",
          "🔹 Interactive prototype",
          "🔹 1 revision round"
        ]
      },
      {
        title: "Premium UX",
        price: "$10,000",
        description: [
          "🔹 UX research & competitor analysis",
          "🔹 User journey mapping & wireframes",
          "🔹 High-fidelity UI design for 10+ pages",
          "🔹 Interactive prototype + usability testing",
          "🔹 2 revision rounds"
        ]
      }
    ],
    graphicDesign: [
      {
        title: "Logo & Brand Kit",
        price: "$1,000",
        description: [
          "🔹 Custom logo (3 concepts)",
          "🔹 Brand colors, typography & guide",
          "🔹 Social media profile assets"
        ]
      },
      {
        title: "Social Media Graphics",
        price: "$800",
        description: [
          "🔹 10 custom post templates",
          "🔹 Engaging banner & ad designs",
          "🔹 Consistent branding across platforms"
        ]
      },
      {
        title: "Marketing & Print Design",
        price: "$1,200",
        description: [
          "🔹 Flyers, business cards, or brochures",
          "🔹 Digital & print-ready files",
          "🔹 2 revision rounds"
        ]
      }
    ],
    writing: [
      {
        title: "SEO Blog Writing",
        price: "$300 per article (1,500 words)",
        description: [
          "🔹 Keyword research & SEO optimization",
          "🔹 Engaging, well-researched content",
          "🔹 Edited & formatted for web readability"
        ]
      },
      {
        title: "Website Copywriting",
        price: "$500 per page",
        description: [
          "🔹 Persuasive, conversion-focused copy",
          "🔹 SEO-friendly & brand-aligned",
          "🔹 2 revision rounds"
        ]
      },
      {
        title: "Scriptwriting",
        price: "$400 per script (2-5 min video)",
        description: [
          "🔹 Engaging, structured scriptwriting",
          "🔹 Optimized for audience retention",
          "🔹 CTA integration"
        ]
      }
    ],
    videoAudio: [
      {
        title: "Video Editing",
        price: "$600 per video",
        description: [
          "🔹 Professional cuts, transitions & effects",
          "🔹 aptions & on-screen text",
          "🔹 Music & sound design integration"
        ]
      },
      {
        title: "Music & Sound Design",
        price: "$700 per track",
        description: [
          "🔹 Custom background music or sound effects",
          "🔹 Mixing & mastering included",
          "🔹 Royalty-free for commercial use"
        ]
      }
    ],
    retainers: [
      {
        title: "UX Design Retainer",
        price: "Starting at $2,000/month",
        description: [
          "🔹 Priority access to design services",
          "🔹 Monthly design consultations",
          "🔹 Dedicated support hours"
        ]
      },
      {
        title: "Content Writing Retainer",
        price: "4 blog posts per month at $1,000",
        description: [
          "🔹 Regular content to boost SEO",
          "🔹 Consistent brand voice",
          "🔹 Monthly performance reports"
        ]
      },
      {
        title: "Video Editing Retainer",
        price: "4 videos per month at $2,200",
        description: [
          "🔹 Consistent video production",
          "🔹 Brand-aligned editing style",
          "🔹 Monthly analytics overview"
        ]
      }
    ]
  };
  return /* @__PURE__ */ jsxs(Section, { marginBottom: "xl", padding: "none", children: [
    /* @__PURE__ */ jsxs("div", { className: styles$5.heroContent, children: [
      /* @__PURE__ */ jsx(Typography, { variant: "h1", className: styles$5.heroTitle, children: "Services & Pricing" }),
      /* @__PURE__ */ jsx(Typography, { variant: "subtitle1", className: styles$5.heroSubtitle, children: "Achieve Your Digital Goals with Our Expert Services" }),
      /* @__PURE__ */ jsx(Link, { to: "https://calendly.com/kyleranta/15min", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(Button, { variant: "primary", arrow: true, children: "Book a Free Consultation" }) }),
      /* @__PURE__ */ jsx(Typography, { variant: "listItem", align: "center", children: "uniqueux13@gmail.com" })
    ] }),
    /* @__PURE__ */ jsx(Typography, { variant: "h2", className: styles$5.categoryTitle, children: "UX & UI Design" }),
    /* @__PURE__ */ jsx("div", { className: styles$5.serviceItems, children: services.uxui.map((service, index) => /* @__PURE__ */ jsxs(Card, { className: styles$5.serviceItem, children: [
      " ",
      /* @__PURE__ */ jsx(Typography, { variant: "h4", className: styles$5.serviceTitle, children: service.title }),
      /* @__PURE__ */ jsx(Typography, { variant: "subtitle2", className: styles$5.servicePrice, children: service.price }),
      /* @__PURE__ */ jsx("ul", { className: styles$5.serviceDescription, children: service.description.map((item, i) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Typography, { variant: "listItem", children: item }) }, i)) })
    ] }, index)) }),
    /* @__PURE__ */ jsx(Typography, { variant: "h2", className: styles$5.categoryTitle, children: "Graphic Design & Branding" }),
    /* @__PURE__ */ jsx("div", { className: styles$5.serviceItems, children: services.graphicDesign.map((service, index) => /* @__PURE__ */ jsxs(Card, { className: styles$5.serviceItem, children: [
      /* @__PURE__ */ jsx(Typography, { variant: "h4", className: styles$5.serviceTitle, children: service.title }),
      /* @__PURE__ */ jsx(Typography, { variant: "subtitle2", className: styles$5.servicePrice, children: service.price }),
      /* @__PURE__ */ jsx("ul", { className: styles$5.serviceDescription, children: service.description.map((item, i) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Typography, { variant: "listItem", children: item }) }, i)) })
    ] }, index)) }),
    /* @__PURE__ */ jsx(Typography, { variant: "h2", className: styles$5.categoryTitle, children: "Writing & Content Creation" }),
    /* @__PURE__ */ jsx("div", { className: styles$5.serviceItems, children: services.writing.map((service, index) => /* @__PURE__ */ jsxs(Card, { className: styles$5.serviceItem, children: [
      /* @__PURE__ */ jsx(Typography, { variant: "h4", className: styles$5.serviceTitle, children: service.title }),
      /* @__PURE__ */ jsx(Typography, { variant: "subtitle2", className: styles$5.servicePrice, children: service.price }),
      /* @__PURE__ */ jsx("ul", { className: styles$5.serviceDescription, children: service.description.map((item, i) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Typography, { variant: "listItem", children: item }) }, i)) })
    ] }, index)) }),
    /* @__PURE__ */ jsx(Typography, { variant: "h2", className: styles$5.categoryTitle, children: "Video & Audio Production" }),
    /* @__PURE__ */ jsx("div", { className: styles$5.serviceItems, children: services.videoAudio.map((service, index) => /* @__PURE__ */ jsxs(Card, { className: styles$5.serviceItem, children: [
      /* @__PURE__ */ jsx(Typography, { variant: "h4", className: styles$5.serviceTitle, children: service.title }),
      /* @__PURE__ */ jsx(Typography, { variant: "subtitle2", className: styles$5.servicePrice, children: service.price }),
      /* @__PURE__ */ jsx("ul", { className: styles$5.serviceDescription, children: service.description.map((item, i) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Typography, { variant: "listItem", children: item }) }, i)) })
    ] }, index)) }),
    /* @__PURE__ */ jsx(Typography, { variant: "h2", className: styles$5.categoryTitle, children: "Ongoing Support & Retainers" }),
    /* @__PURE__ */ jsx("div", { className: styles$5.serviceItems, children: services.retainers.map((service, index) => /* @__PURE__ */ jsxs(Card, { className: styles$5.serviceItem, children: [
      /* @__PURE__ */ jsx(Typography, { variant: "h4", className: styles$5.serviceTitle, children: service.title }),
      /* @__PURE__ */ jsx(Typography, { variant: "subtitle2", className: styles$5.servicePrice, children: service.price }),
      /* @__PURE__ */ jsx("ul", { className: styles$5.serviceDescription, children: service.description.map((item, i) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Typography, { variant: "listItem", children: item }) }, i)) })
    ] }, index)) }),
    /* @__PURE__ */ jsxs("div", { className: styles$5.heroContent, children: [
      /* @__PURE__ */ jsx(Typography, { variant: "h2", className: styles$5.heroTitle, children: "Ready to Create Something Unique?" }),
      /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$5.heroSubtitle, children: "Let's collaborate to build a digital experience that transforms your business and delights your users." }),
      /* @__PURE__ */ jsx(Link, { to: "https://calendly.com/kyleranta/15min", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(Button, { variant: "primary", arrow: true, children: "Book a Free Consultation" }) }),
      /* @__PURE__ */ jsx(Typography, { variant: "listItem", align: "center", children: "uniqueux13@gmail.com" })
    ] })
  ] });
};
const pageTitle$1 = "_pageTitle_1a885_1";
const errorMessage = "_errorMessage_1a885_11";
const homeLink = "_homeLink_1a885_21";
const styles$4 = {
  pageTitle: pageTitle$1,
  errorMessage,
  homeLink
};
const NotFoundPage = () => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Typography, { variant: "h1", align: "center", className: styles$4.pageTitle, children: "404 - Page Not Found" }),
    /* @__PURE__ */ jsx(Typography, { variant: "p", align: "center", className: styles$4.errorMessage, children: "Oops! The page you're looking for doesn't exist." }),
    /* @__PURE__ */ jsx(Typography, { align: "center", variant: "p", children: /* @__PURE__ */ jsx(Link, { to: "/", className: styles$4.homeLink, children: "Go back to the homepage" }) })
  ] });
};
const heroTitle$1 = "_heroTitle_rm99j_3";
const heroSubtitle$1 = "_heroSubtitle_rm99j_15";
const heroContent$1 = "_heroContent_rm99j_37";
const narrowContent = "_narrowContent_rm99j_97";
const videoContainer = "_videoContainer_rm99j_145";
const sectionTitle = "_sectionTitle_rm99j_161";
const checkListGrid = "_checkListGrid_rm99j_251";
const checklistItem = "_checklistItem_rm99j_265";
const checklistItemTitle = "_checklistItemTitle_rm99j_281";
const ctaTitle$1 = "_ctaTitle_rm99j_295";
const ctaSubtitle$1 = "_ctaSubtitle_rm99j_307";
const styles$3 = {
  heroTitle: heroTitle$1,
  heroSubtitle: heroSubtitle$1,
  heroContent: heroContent$1,
  narrowContent,
  videoContainer,
  sectionTitle,
  checkListGrid,
  checklistItem,
  checklistItemTitle,
  ctaTitle: ctaTitle$1,
  ctaSubtitle: ctaSubtitle$1
};
const caseStudyImage1 = "/assets/caseStudy-image-1-qifkxLcq.png";
const caseStudyImage2 = "/assets/caseStudy-image-2-C-f-9tzV.png";
const caseStudyImage3 = "/assets/caseStudy-image-3-DOzvbxi0.png";
const caseStudyImage4 = "/assets/caseStudy-image-4-BZ-VBfUV.png";
const caseStudyImage5 = "/assets/caseStudy-image-5-DAuSpl23.png";
const caseStudyImage6 = "/assets/case-study-image-6-eVk-oHtb.png";
const caseStudyImage65 = "/assets/caseStudy-image-6-DH-vjSIz.jpg";
const caseStudyImage7 = "/assets/caseStudy-image-7-BDtqBfAc.png";
const caseStudyImage8 = "/assets/caseStudy-image-8-BD90MYa_.png";
const caseStudyImage9 = "/assets/caseStudy-image-9-BSh5R4CJ.png";
const caseStudyImage10 = "/assets/caseStudy-image-10-BgW38kbw.png";
const caseStudyImage11 = "/assets/caseStudy-image-11-DlBGyGKH.png";
const caseStudyImage12 = "/assets/caseStudy-image-12-DWsIBfVd.png";
const caseStudyImage13 = "/assets/caseStudy-image-13-ZWH1jaiR.png";
const caseStudyImage14 = "/assets/caseStudy-image-14-CQw-kxLD.png";
const caseStudyImage15 = "/assets/caseStudy-image-15-BNUv_TfH.png";
const caseStudyImage16 = "/assets/caseStudy-image-16-GV40FbjQ.png";
const caseStudyImage17 = "/assets/caseStudy-image-17-CkkmrQb9.png";
const caseStudyImage18 = "/assets/caseStudy-image-18-D5UyCqN5.png";
const caseStudyImage19 = "/assets/caseStudy-image-19-DW2AnjoD.png";
const caseStudyImage20 = "/assets/caseStudy-image-20-Dnyugdf9.png";
const caseStudyImage21 = "/assets/caseStudy-image-21-CSwXoneF.png";
const caseStudyImage22 = "/assets/caseStudy-image-22-CEhct_lO.png";
const caseStudyImage23 = "/assets/caseStudy-image-23-npJZ8b_4.png";
const caseStudyImage24 = "/assets/caseStudy-image-24-C5vy0oq8.png";
const Project1Page = () => {
  return /* @__PURE__ */ jsxs("div", { className: styles$3.project1Page, children: [
    /* @__PURE__ */ jsxs(Section, { marginBottom: "xl", padding: "none", className: styles$3.heroContent, children: [
      /* @__PURE__ */ jsx(Typography, { variant: "h1", className: styles$3.heroTitle, children: "Marketing Agency Website Redesign" }),
      /* @__PURE__ */ jsx(Typography, { variant: "subtitle1", className: styles$3.heroSubtitle, children: "Case Study: Enhancing User Engagement and Lead Generation for GroMo" })
    ] }),
    /* @__PURE__ */ jsx(Section, { marginBottom: "xl", padding: "none", children: /* @__PURE__ */ jsxs(
      TwoColumnSection,
      {
        imageSrc: caseStudyImage1,
        imageAlt: "'Step-by-step' design from project inspiration board",
        imageOnLeft: true,
        children: [
          /* @__PURE__ */ jsx(Typography, { variant: "h3", className: styles$3.manifestoTitle, children: "A step-by-step case study" }),
          /* @__PURE__ */ jsxs(Typography, { variant: "p", className: styles$3.manifestoText, children: [
            "From ideation to implementation, This case study details my ",
            /* @__PURE__ */ jsx("strong", { children: "step-by-step design process" }),
            ", for a marketing agency's digital transformation."
          ] }),
          /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$3.manifestoText, children: "My role included information architecture refinement, wireframing, design system development, and creating a ten-page website showcasing GroMo's updated services.            " })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs(Section, { marginBottom: "sm", padding: "none", children: [
      /* @__PURE__ */ jsx(Typography, { variant: "h2", className: styles$3.sectionTitle, children: "The Challenge" }),
      /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$3.narrowContent, children: "The client, a marketing agency, was struggling with low website engagement and poor lead generation. Their existing website was outdated, difficult to navigate, and didn't effectively communicate their services." })
    ] }),
    /* @__PURE__ */ jsx(Section, { marginBottom: "sm", padding: "none", children: /* @__PURE__ */ jsxs(
      TwoColumnSection,
      {
        imageSrc: caseStudyImage2,
        imageAlt: "'Step-by-step' design from project inspiration board",
        imageOnLeft: false,
        children: [
          /* @__PURE__ */ jsx(Typography, { variant: "h3", className: styles$3.manifestoTitle, children: "Meeting Insight:" }),
          /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$3.manifestoText, children: "The project began with a recorded meeting to document client needs and project specifications." }),
          /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$3.manifestoText, children: "Discussions with GroMo's team focused on future offerings, expectations, and initial project ideas." })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(Section, { marginBottom: "xl", padding: "none", children: /* @__PURE__ */ jsx(
      TwoColumnSection,
      {
        imageSrc: caseStudyImage3,
        imageAlt: "'Step-by-step' design from project inspiration board",
        imageOnLeft: true,
        children: /* @__PURE__ */ jsxs("div", { children: [
          " ",
          /* @__PURE__ */ jsx(Typography, { variant: "h3", className: styles$3.manifestoTitle, children: "Project specifications:" }),
          /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$3.sectionText, children: "My primary responsibilities were copywriting, graphic design, and UI design." }),
          /* @__PURE__ */ jsxs(Typography, { variant: "p", className: styles$3.sectionText, children: [
            "Key service pages identified:",
            /* @__PURE__ */ jsxs("ul", { children: [
              /* @__PURE__ */ jsx("li", { children: "ABM" }),
              /* @__PURE__ */ jsx("li", { children: "Digital Paid Media" }),
              /* @__PURE__ */ jsx("li", { children: "Sales & Marketing Alignment" }),
              /* @__PURE__ */ jsx("li", { children: "CRM Automation Support" }),
              /* @__PURE__ */ jsx("li", { children: "Inbound" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Typography, { variant: "p", className: styles$3.sectionText, children: [
            "Targeted industry verticals:",
            /* @__PURE__ */ jsxs("ul", { children: [
              /* @__PURE__ */ jsx("li", { children: "SAAS" }),
              /* @__PURE__ */ jsx("li", { children: "Medical" }),
              /* @__PURE__ */ jsx("li", { children: "Manufacturing" }),
              /* @__PURE__ */ jsx("li", { children: "Commercial Real Estate" }),
              /* @__PURE__ */ jsx("li", { children: "Financial" })
            ] })
          ] })
        ] })
      }
    ) }),
    /* @__PURE__ */ jsxs(Section, { marginBottom: "sm", padding: "none", children: [
      /* @__PURE__ */ jsx(Typography, { variant: "h2", className: styles$3.sectionTitle, children: "Planning" }),
      /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$3.narrowContent, children: "The planning phase included competitive analysis, user persona development, and creating a visual inspiration board." })
    ] }),
    /* @__PURE__ */ jsx(Section, { marginBottom: "sm", padding: "none", children: /* @__PURE__ */ jsxs(
      TwoColumnSection,
      {
        imageSrc: caseStudyImage4,
        imageAlt: "''collaboration' visual from approved design",
        imageOnLeft: false,
        children: [
          /* @__PURE__ */ jsx(Typography, { variant: "h3", className: styles$3.manifestoTitle, children: "Competitive Analysis" }),
          /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$3.manifestoText, children: "Competitive audits provided insights to inform a distinctive and competitive design strategy. This analysis directly addressed the client's target audience needs." })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(Section, { marginBottom: "xl", padding: "none", children: /* @__PURE__ */ jsxs(
      TwoColumnSection,
      {
        imageSrc: caseStudyImage5,
        imageAlt: "''User personas from the planning phase",
        imageOnLeft: true,
        children: [
          /* @__PURE__ */ jsx(Typography, { variant: "h3", className: styles$3.manifestoTitle, children: "Persona Development" }),
          /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$3.manifestoText, children: "User personas were developed to represent key audience segments, informing design decisions and ensuring user-centricity." })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs(Section, { marginBottom: "none", padding: "md", children: [
      /* @__PURE__ */ jsx(Typography, { variant: "h2", className: styles$3.sectionTitle, children: "Pain Points" }),
      /* @__PURE__ */ jsxs("div", { className: styles$3.imageContainer, children: [
        /* @__PURE__ */ jsx(Image, { src: caseStudyImage6, alt: "Pain points design for marketing landing page", className: styles$3.centeredImage }),
        " "
      ] })
    ] }),
    /* @__PURE__ */ jsx(Section, { marginBottom: "none", padding: "none", children: /* @__PURE__ */ jsxs(
      TwoColumnSection,
      {
        imageSrc: caseStudyImage65,
        imageAlt: "''Gromo Inspiration Board visual",
        imageOnLeft: false,
        children: [
          /* @__PURE__ */ jsx(Typography, { variant: "h3", className: styles$3.manifestoTitle, children: "Visual Blueprint" }),
          /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$3.manifestoText, children: "An inspiration board, incorporating colors, patterns, and imagery, established a visual direction and served as a reference point throughout the project." })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(Section, { marginBottom: "xl", padding: "none", children: /* @__PURE__ */ jsxs(
      TwoColumnSection,
      {
        imageSrc: caseStudyImage7,
        imageAlt: "''This user flow visually represents the steps a user takes to accomplish a specific task within a system or application.",
        imageOnLeft: true,
        children: [
          /* @__PURE__ */ jsx(Typography, { variant: "h3", className: styles$3.manifestoTitle, children: "User Flow Design" }),
          /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$3.manifestoText, children: "A multi-step form user flow was meticulously mapped to optimize the user journey, ensuring a seamless and intuitive experience." })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs(Section, { marginBottom: "sm", padding: "none", children: [
      /* @__PURE__ */ jsx(Typography, { variant: "h2", className: styles$3.sectionTitle, children: "UX + Copywriting" }),
      /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$3.narrowContent, children: "Extensive research informed the tone and scope of the website copy, ensuring seamless integration with the overall design." })
    ] }),
    /* @__PURE__ */ jsx(Section, { marginBottom: "sm", padding: "none", children: /* @__PURE__ */ jsxs(
      TwoColumnSection,
      {
        imageSrc: caseStudyImage8,
        imageAlt: "'''market analysis' visual from approved design",
        imageOnLeft: false,
        children: [
          /* @__PURE__ */ jsx(Typography, { variant: "h3", className: styles$3.manifestoTitle, children: "Ideation and Research" }),
          /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$3.manifestoText, children: "This phase involved extensive brainstorming and research to create copy that resonated with user needs and aligned with brand values, ensuring a consistent user experience." })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(Section, { marginBottom: "sm", padding: "none", children: /* @__PURE__ */ jsxs(
      TwoColumnSection,
      {
        imageSrc: caseStudyImage9,
        imageAlt: "''Copywriting section from GroMo home page",
        imageOnLeft: true,
        children: [
          /* @__PURE__ */ jsx(Typography, { variant: "h3", className: styles$3.manifestoTitle, children: "Collaborative Copy" }),
          /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$3.manifestoText, children: "A collaborative approach was taken to craft a narrative that connected with the target audience, refining language, tone, and clarity." })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(Section, { marginBottom: "xl", padding: "none", children: /* @__PURE__ */ jsxs(
      TwoColumnSection,
      {
        imageSrc: caseStudyImage10,
        imageAlt: "''Copywriting section from GroMo home page",
        imageOnLeft: false,
        children: [
          /* @__PURE__ */ jsx(Typography, { variant: "h3", className: styles$3.manifestoTitle, children: "Client Alignment" }),
          /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$3.manifestoText, children: "Continuous communication and alignment with the client were crucial throughout the copywriting phase, ensuring the vision was realized and key content decisions were informed." })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs(Section, { marginBottom: "lg", padding: "none", children: [
      /* @__PURE__ */ jsx(Typography, { variant: "h2", className: styles$3.sectionTitle, children: "IA + wireframes" }),
      /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$3.narrowContent, children: "Close collaboration with decision-makers shaped the information architecture and wireframes, transitioning the project from concept to a visual framework." })
    ] }),
    /* @__PURE__ */ jsx(Section, { marginBottom: "none", padding: "none", children: /* @__PURE__ */ jsxs(
      TwoColumnSection,
      {
        imageSrc: caseStudyImage11,
        imageAlt: "''Information Architect diagram",
        imageOnLeft: true,
        children: [
          /* @__PURE__ */ jsx(Typography, { variant: "h3", className: styles$3.manifestoTitle, children: "Frameworks and workflows" }),
          /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$3.manifestoText, children: "Tools like Adobe Suite, UI software, and AI were used to curate inspiration and client concepts into the Information Architecture IA and wireframes." })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(Section, { marginBottom: "none", padding: "none", children: /* @__PURE__ */ jsxs(
      TwoColumnSection,
      {
        imageSrc: caseStudyImage12,
        imageAlt: "''Information Architect diagram",
        imageOnLeft: false,
        children: [
          /* @__PURE__ */ jsx(Typography, { variant: "h3", className: styles$3.manifestoTitle, children: "Client Collaboration" }),
          /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$3.manifestoText, children: "Close collaboration with the client during the wireframing process ensured every detail aligned with the project goals." })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(Section, { marginBottom: "xl", padding: "none", children: /* @__PURE__ */ jsxs(
      TwoColumnSection,
      {
        imageSrc: caseStudyImage13,
        imageAlt: "''Visual conceptualization of marketing results for the 'client'",
        imageOnLeft: true,
        children: [
          /* @__PURE__ */ jsx(Typography, { variant: "h3", className: styles$3.manifestoTitle, children: "Visual Conceptualization" }),
          /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$3.manifestoText, children: "The Design phase used Adobe software and stock images to create custom visuals for a cohesive and engaging user experience." })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Typography, { variant: "h2", className: styles$3.sectionTitle, children: "Design" }),
      /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$3.narrowContent, children: "A comprehensive design system was implemented, and through client validation and iterative processes, a 10-page website was developed." })
    ] }),
    /* @__PURE__ */ jsx(Section, { marginBottom: "xl", padding: "none", children: /* @__PURE__ */ jsx("div", { className: styles$3.videoContainer, children: /* @__PURE__ */ jsx(
      Video,
      {
        src: "/background-video.mp4",
        className: styles$3.video,
        autoPlay: true,
        muted: true,
        loop: true
      }
    ) }) }),
    /* @__PURE__ */ jsx(Section, { marginBottom: "xl", padding: "none", children: /* @__PURE__ */ jsxs(
      TwoColumnSection,
      {
        imageSrc: caseStudyImage14,
        imageAlt: "Segment of GroMo's design system",
        imageOnLeft: true,
        children: [
          /* @__PURE__ */ jsx(Typography, { variant: "h3", className: styles$3.manifestoTitle, children: "Figma Design Iterations" }),
          /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$3.manifestoText, children: "Figma was used to bring the wireframes to life, creating design elements such as icons, colors, typography, spacers, forms, buttons, inputs, hero sections, and lead magnets." })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs(Section, { padding: "md", children: [
      /* @__PURE__ */ jsx(Typography, { variant: "h2", className: styles$3.sectionTitle, children: "Design Examples" }),
      /* @__PURE__ */ jsxs(ImageGrid, { children: [
        /* @__PURE__ */ jsx("div", { className: styles$3.imageContainer, children: /* @__PURE__ */ jsx(Image, { src: caseStudyImage15, alt: "Image 1", className: styles$3.gridImage }) }),
        /* @__PURE__ */ jsx("div", { className: styles$3.imageContainer, children: /* @__PURE__ */ jsx(Image, { src: caseStudyImage16, alt: "Image 2", className: styles$3.gridImage }) }),
        /* @__PURE__ */ jsx("div", { className: styles$3.imageContainer, children: /* @__PURE__ */ jsx(Image, { src: caseStudyImage17, alt: "Image 3", className: styles$3.gridImage }) }),
        /* @__PURE__ */ jsx("div", { className: styles$3.imageContainer, children: /* @__PURE__ */ jsx(Image, { src: caseStudyImage18, alt: "Image 4", className: styles$3.gridImage }) }),
        /* @__PURE__ */ jsx("div", { className: styles$3.imageContainer, children: /* @__PURE__ */ jsx(Image, { src: caseStudyImage19, alt: "Image 5", className: styles$3.gridImage }) }),
        /* @__PURE__ */ jsx("div", { className: styles$3.imageContainer, children: /* @__PURE__ */ jsx(Image, { src: caseStudyImage20, alt: "Image 6", className: styles$3.gridImage }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Section, { marginBottom: "sm", padding: "none", children: /* @__PURE__ */ jsxs(
      TwoColumnSection,
      {
        imageSrc: caseStudyImage21,
        imageAlt: "Segment of GroMo's design system",
        imageOnLeft: false,
        children: [
          /* @__PURE__ */ jsx(Typography, { variant: "h3", className: styles$3.manifestoTitle, children: "Client Validation" }),
          /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$3.manifestoText, children: "A collaborative process with the client ensured the design aligned with their vision, with feedback incorporated at key stages." })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(Section, { marginBottom: "xl", padding: "none", children: /* @__PURE__ */ jsxs(ImageGrid, { children: [
      /* @__PURE__ */ jsx("div", { className: styles$3.imageContainer, children: /* @__PURE__ */ jsx(Image, { src: caseStudyImage22, alt: "Image 1", className: styles$3.gridImage }) }),
      /* @__PURE__ */ jsx("div", { className: styles$3.imageContainer, children: /* @__PURE__ */ jsx(Image, { src: caseStudyImage23, alt: "Image 2", className: styles$3.gridImage }) }),
      /* @__PURE__ */ jsx("div", { className: styles$3.imageContainer, children: /* @__PURE__ */ jsx(Image, { src: caseStudyImage24, alt: "Image 3", className: styles$3.gridImage }) })
    ] }) }),
    /* @__PURE__ */ jsxs(Section, { marginBottom: "xl", padding: "none", children: [
      /* @__PURE__ */ jsx(Typography, { variant: "h2", className: styles$3.sectionTitle, children: "Hand-off + Extras" }),
      /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$3.narrowContent, children: "In the Hand-off phase, a comprehensive review with the client illuminates design choices, and accessibility is prioritized for ongoing support to the client's team. Through knowledge transfer, a seamless hand-off is facilitated, providing essential insights for future maintenance and development." })
    ] }),
    /* @__PURE__ */ jsx(Section, { marginBottom: "xl", padding: "none", children: /* @__PURE__ */ jsxs("div", { className: styles$3.checkListGrid, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: styles$3.checklistItem, children: /* @__PURE__ */ jsx(Typography, { variant: "h3", className: styles$3.checklistItemTitle, children: "Comprehensive Review" }) }),
        /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$3.checklistItemDescription, children: "Conducted a thorough review of the project, leaving no aspect unexamined." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: styles$3.checklistItem, children: /* @__PURE__ */ jsx(Typography, { variant: "h3", className: styles$3.checklistItemTitle, children: "Accessibility" }) }),
        /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$3.checklistItemDescription, children: "Made sure the website met WCAG 2.1 AA standards, ensuring it's usable for everyone." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: styles$3.checklistItem, children: /* @__PURE__ */ jsx(Typography, { variant: "h3", className: styles$3.checklistItemTitle, children: "Knowledge Transfer" }) }),
        /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$3.checklistItemDescription, children: "Facilitated seamless handoff with comprehensive documentation and training." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: styles$3.checklistItem, children: /* @__PURE__ */ jsx(Typography, { variant: "h3", className: styles$3.checklistItemTitle, children: "Post-Handoff Support" }) }),
        /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$3.checklistItemDescription, children: "Provided ongoing support after the project launch, ensuring a smooth transition." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs(Section, { marginBottom: "xl", padding: "none", children: [
      /* @__PURE__ */ jsx(Typography, { variant: "h2", className: styles$3.sectionTitle, children: "I learned a lot!" }),
      /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$3.narrowContent, children: "This project was a testament to user-centered design, leveraging iterative refinement, client collaboration, and a flexible approach to deliver a successful and adaptable solution." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles$3.heroContent, children: [
      /* @__PURE__ */ jsx(Typography, { variant: "h2", className: styles$3.ctaTitle, children: "Ready to Create Something Unique?" }),
      /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$3.ctaSubtitle, children: "Let's collaborate to build a digital experience that transforms your business and delights your users." }),
      /* @__PURE__ */ jsx(Link, { to: "https://calendly.com/kyleranta/15min", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(Button, { variant: "primary", arrow: true, children: "Book a Free Consultation" }) }),
      /* @__PURE__ */ jsx(Typography, { variant: "listItem", align: "center", children: "uniqueux13@gmail.com" })
    ] })
  ] });
};
const heroTitle = "_heroTitle_rm99j_3";
const heroSubtitle = "_heroSubtitle_rm99j_15";
const heroContent = "_heroContent_rm99j_37";
const ctaTitle = "_ctaTitle_rm99j_295";
const ctaSubtitle = "_ctaSubtitle_rm99j_307";
const styles$2 = {
  heroTitle,
  heroSubtitle,
  heroContent,
  ctaTitle,
  ctaSubtitle
};
const vuiImage1 = "/assets/caseStudy-image-1-4IxAtWZT.png";
const vuiImage2 = "/assets/caseStudy-image-2-BxJKNIwK.png";
const vuiImage3 = "/assets/caseStudy-image-3-k9Ddb245.png";
const vuiImage4 = "/assets/caseStudy-image-4-CPG93j56.png";
const vuiImage5 = "/assets/caseStudy-image-5-C-uhS-gI.png";
const vuiImage6 = "/assets/caseStudy-image-6-CVLC6S-H.png";
const vuiImage7 = "/assets/caseStudy-image-7-bS17eldq.png";
const Project2Page = () => {
  return /* @__PURE__ */ jsxs("div", { className: styles$2.project2Page, children: [
    " ",
    /* @__PURE__ */ jsxs(Section, { marginBottom: "xl", padding: "none", className: styles$2.heroContent, children: [
      /* @__PURE__ */ jsx(Typography, { variant: "h1", className: styles$2.heroTitle, children: "Voice-Activated AR Interface Concept" }),
      /* @__PURE__ */ jsx(Typography, { variant: "subtitle1", className: styles$2.heroSubtitle, children: "Case Study: Exploring Voice UI for Hands-Free AR Interaction" }),
      /* @__PURE__ */ jsx("a", { href: "https://voice-activated-ar-interface.netlify.app/", target: "_blank", rel: "noopener noreferrer", className: styles$2.projectLink, children: /* @__PURE__ */ jsx(Button, { variant: "primary", arrow: true, children: "View Live Prototype" }) })
    ] }),
    /* @__PURE__ */ jsx(Section, { marginBottom: "xl", padding: "none", children: /* @__PURE__ */ jsxs(
      TwoColumnSection,
      {
        imageSrc: vuiImage1,
        imageAlt: "Overview of VUI AR Concept",
        imageOnLeft: true,
        children: [
          /* @__PURE__ */ jsx(Typography, { variant: "h3", className: styles$2.manifestoTitle, children: "Project Overview & Goals" }),
          /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$2.manifestoText, children: "This project explores the feasibility of a voice-activated user interface within a simulated Augmented Reality context, built using React and the Web Speech API." }),
          /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$2.manifestoText, children: "The primary goal was to prototype core voice command interactions (navigation, selection, actions) and assess the potential user experience benefits and challenges." })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(Section, { marginBottom: "xl", padding: "none", children: /* @__PURE__ */ jsxs(
      TwoColumnSection,
      {
        imageSrc: vuiImage2,
        imageAlt: "Diagram showing VUI/AR research analysis",
        imageOnLeft: false,
        children: [
          /* @__PURE__ */ jsx(Typography, { variant: "h3", className: styles$2.manifestoTitle, children: "Initial Layout Concept" }),
          /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$2.manifestoText, children: "Considering an AR overlay, the user's main view shouldn't be blocked. I explored placing the core content in a defined panel on the left, simulating a secondary display within the field of view." })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(Section, { marginBottom: "xl", padding: "none", children: /* @__PURE__ */ jsxs(
      TwoColumnSection,
      {
        imageSrc: vuiImage3,
        imageAlt: "Mood board for VUI AR concept",
        imageOnLeft: true,
        children: [
          /* @__PURE__ */ jsx(Typography, { variant: "h3", className: styles$2.manifestoTitle, children: "Handling Voice Commands" }),
          /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$2.manifestoText, children: 'Implemented the Web Speech API to capture speech. The "Start Listening" button initiates capture. This API provides the foundation for speech recognition in the browser.' }),
          /* @__PURE__ */ jsx("a", { href: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API", target: "_blank", rel: "noopener noreferrer", className: styles$2.ctaButtonLink, children: /* @__PURE__ */ jsx(Button, { variant: "secondary", arrow: true, children: "View Documentation" }) })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(Section, { marginBottom: "xl", padding: "none", children: /* @__PURE__ */ jsxs(
      TwoColumnSection,
      {
        imageSrc: vuiImage4,
        imageAlt: "User flow diagram for voice commands",
        imageOnLeft: false,
        children: [
          /* @__PURE__ */ jsx(Typography, { variant: "h3", className: styles$2.manifestoTitle, children: "Feedback Considerations" }),
          /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$2.manifestoText, children: 'How does the user know the command was heard or is processing? Added the "Last Command" display for immediate confirmation.' })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(Section, { marginBottom: "xl", padding: "none", children: /* @__PURE__ */ jsxs(
      TwoColumnSection,
      {
        imageSrc: vuiImage5,
        imageAlt: "Information architecture for VUI AR",
        imageOnLeft: true,
        children: [
          /* @__PURE__ */ jsx(Typography, { variant: "h3", className: styles$2.manifestoTitle, children: "Under the Hood: Basic Logic" }),
          /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$2.manifestoText, children: 'Once speech is transcribed, how does it trigger an action? A JavaScript function checks the text for keywords ("next", "back", "show", etc.) and calls the corresponding function (e.g., changing the slide).' })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(Section, { marginBottom: "xl", padding: "none", children: /* @__PURE__ */ jsxs(
      TwoColumnSection,
      {
        imageSrc: vuiImage6,
        imageAlt: "Visual mockups of the AR interface",
        imageOnLeft: false,
        children: [
          /* @__PURE__ */ jsx(Typography, { variant: "h3", className: styles$2.manifestoTitle, children: "Tech Stack Used" }),
          /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$2.manifestoText, children: "This experiment was built using: React, TypeScript, Vite, Web Speech API, CSS, Netlify (for deployment), and GitHub (for version control)." })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(Section, { marginBottom: "xl", padding: "none", children: /* @__PURE__ */ jsxs(
      TwoColumnSection,
      {
        imageSrc: vuiImage7,
        imageAlt: "Figma design system snippets for VUI AR",
        imageOnLeft: true,
        children: [
          /* @__PURE__ */ jsx(Typography, { variant: "h3", className: styles$2.manifestoTitle, children: "Learnings & Next Steps" }),
          /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$2.manifestoText, children: "This was a valuable first step into VUI using web tech. Key learning: Web Speech API is accessible, but context-awareness and truly seamless AR interaction are complex challenges! Next steps could involve better UI design, incorporating AI, or exploring WebXR." })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: styles$2.heroContent, children: [
      " ",
      /* @__PURE__ */ jsx(Typography, { variant: "h2", className: styles$2.ctaTitle, children: "Ready to Create Something Unique?" }),
      /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$2.ctaSubtitle, children: "Let's collaborate to build digital experiences that innovate and engage users." }),
      /* @__PURE__ */ jsxs("a", { href: "https://calendly.com/kyleranta/15min", target: "_blank", rel: "noopener noreferrer", className: styles$2.ctaButtonLink, children: [
        " ",
        /* @__PURE__ */ jsx(Button, { variant: "primary", arrow: true, children: "Book a Free Consultation" })
      ] }),
      /* @__PURE__ */ jsxs(Typography, { variant: "listItem", align: "center", className: styles$2.ctaEmail, children: [
        " ",
        "uniqueux13@gmail.com"
      ] })
    ] })
  ] });
};
const beachscape = "/assets/beachscape-CXU6RMBh.png";
const cityscape = "/assets/cityscape-D6u1qlPS.png";
const countryscape = "/assets/countryscape-B3m3-E5D.png";
const desertscape = "/assets/desertscape-C1n69SjT.png";
const winterscape = "/assets/winterscape-urbqCn5y.png";
const fastfood = "/assets/fastfood-Bu7aSPjL.png";
const food = "/assets/food-BvMuqXAL.png";
const junglescape = "/assets/junglescape-Ff3UOpX8.png";
const mooncat1 = "/assets/mooncat1-DIWm-7bp.png";
const mooncat2 = "/assets/mooncat2-LwHrzq82.png";
const mooncat3 = "/assets/mooncat3-DsnEu_3y.png";
const pizza1 = "/assets/pizza1-Y7Og7Nfw.png";
const pizza2 = "/assets/pizza2-Bg5b9Oo0.png";
const pizza3 = "/assets/pizza3-CIIEJOcD.png";
const pizza4 = "/assets/pizza4-ojQsU-4o.png";
const kids = "/assets/kids-K4kBg7Ts.png";
const kidsFull = "/assets/kids-full-CqATRXjM.png";
const kidsHalloween = "/assets/kids-halloween-B46Ix7YS.png";
const halloween = "/assets/halloween-C9RkT9I3.png";
const halloween2 = "/assets/halloween2-6ZlFoPBD.png";
const halloween3 = "/assets/halloween3-BUQG7dZI.png";
const Sketchbook = () => {
  return /* @__PURE__ */ jsxs("div", { className: styles$3.project1Page, children: [
    /* @__PURE__ */ jsxs(Section, { marginBottom: "xl", padding: "none", className: styles$3.heroContent, children: [
      /* @__PURE__ */ jsx(Typography, { variant: "h1", className: styles$3.heroTitle, children: "Sketchbook" }),
      /* @__PURE__ */ jsx(Typography, { variant: "subtitle1", className: styles$3.heroSubtitle, children: "Design Playground For Quick Ideas" })
    ] }),
    /* @__PURE__ */ jsx(Section, { marginBottom: "xl", padding: "none", children: /* @__PURE__ */ jsxs(ImageGrid, { children: [
      /* @__PURE__ */ jsx("div", { className: styles$3.imageContainer, children: /* @__PURE__ */ jsx(Image, { src: cityscape, alt: "Image 1", className: styles$3.gridImage }) }),
      /* @__PURE__ */ jsx("div", { className: styles$3.imageContainer, children: /* @__PURE__ */ jsx(Image, { src: beachscape, alt: "Image 2", className: styles$3.gridImage }) }),
      /* @__PURE__ */ jsx("div", { className: styles$3.imageContainer, children: /* @__PURE__ */ jsx(Image, { src: countryscape, alt: "Image 3", className: styles$3.gridImage }) }),
      /* @__PURE__ */ jsx("div", { className: styles$3.imageContainer, children: /* @__PURE__ */ jsx(Image, { src: desertscape, alt: "Image 4", className: styles$3.gridImage }) }),
      /* @__PURE__ */ jsx("div", { className: styles$3.imageContainer, children: /* @__PURE__ */ jsx(Image, { src: junglescape, alt: "Image 5", className: styles$3.gridImage }) }),
      /* @__PURE__ */ jsx("div", { className: styles$3.imageContainer, children: /* @__PURE__ */ jsx(Image, { src: winterscape, alt: "Image 6", className: styles$3.gridImage }) })
    ] }) }),
    /* @__PURE__ */ jsx(Section, { marginBottom: "xl", padding: "none", children: /* @__PURE__ */ jsxs(ImageGrid, { children: [
      /* @__PURE__ */ jsx("div", { className: styles$3.imageContainer, children: /* @__PURE__ */ jsx(Image, { src: food, alt: "Image 1", className: styles$3.gridImage }) }),
      /* @__PURE__ */ jsx("div", { className: styles$3.imageContainer, children: /* @__PURE__ */ jsx(Image, { src: fastfood, alt: "Image 2", className: styles$3.gridImage }) }),
      /* @__PURE__ */ jsx("div", { className: styles$3.imageContainer, children: /* @__PURE__ */ jsx(Image, { src: pizza1, alt: "Image 3", className: styles$3.gridImage }) })
    ] }) }),
    /* @__PURE__ */ jsx(Section, { marginBottom: "xl", padding: "none", children: /* @__PURE__ */ jsxs(ImageGrid, { children: [
      /* @__PURE__ */ jsx("div", { className: styles$3.imageContainer, children: /* @__PURE__ */ jsx(Image, { src: pizza2, alt: "Image 1", className: styles$3.gridImage }) }),
      /* @__PURE__ */ jsx("div", { className: styles$3.imageContainer, children: /* @__PURE__ */ jsx(Image, { src: pizza3, alt: "Image 2", className: styles$3.gridImage }) }),
      /* @__PURE__ */ jsx("div", { className: styles$3.imageContainer, children: /* @__PURE__ */ jsx(Image, { src: pizza4, alt: "Image 3", className: styles$3.gridImage }) })
    ] }) }),
    /* @__PURE__ */ jsx(Section, { marginBottom: "xl", padding: "none", children: /* @__PURE__ */ jsxs(ImageGrid, { children: [
      /* @__PURE__ */ jsx("div", { className: styles$3.imageContainer, children: /* @__PURE__ */ jsx(Image, { src: mooncat1, alt: "Image 1", className: styles$3.gridImage }) }),
      /* @__PURE__ */ jsx("div", { className: styles$3.imageContainer, children: /* @__PURE__ */ jsx(Image, { src: mooncat2, alt: "Image 2", className: styles$3.gridImage }) }),
      /* @__PURE__ */ jsx("div", { className: styles$3.imageContainer, children: /* @__PURE__ */ jsx(Image, { src: mooncat3, alt: "Image 3", className: styles$3.gridImage }) })
    ] }) }),
    /* @__PURE__ */ jsx(Section, { marginBottom: "xl", padding: "none", children: /* @__PURE__ */ jsxs(ImageGrid, { children: [
      /* @__PURE__ */ jsx("div", { className: styles$3.imageContainer, children: /* @__PURE__ */ jsx(Image, { src: kids, alt: "Image 1", className: styles$3.gridImage }) }),
      /* @__PURE__ */ jsx("div", { className: styles$3.imageContainer, children: /* @__PURE__ */ jsx(Image, { src: kidsFull, alt: "Image 2", className: styles$3.gridImage }) }),
      /* @__PURE__ */ jsx("div", { className: styles$3.imageContainer, children: /* @__PURE__ */ jsx(Image, { src: kidsHalloween, alt: "Image 3", className: styles$3.gridImage }) }),
      /* @__PURE__ */ jsx("div", { className: styles$3.imageContainer, children: /* @__PURE__ */ jsx(Image, { src: halloween, alt: "Image 4", className: styles$3.gridImage }) }),
      /* @__PURE__ */ jsx("div", { className: styles$3.imageContainer, children: /* @__PURE__ */ jsx(Image, { src: halloween2, alt: "Image 5", className: styles$3.gridImage }) }),
      /* @__PURE__ */ jsx("div", { className: styles$3.imageContainer, children: /* @__PURE__ */ jsx(Image, { src: halloween3, alt: "Image 6", className: styles$3.gridImage }) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: styles$3.heroContent, children: [
      /* @__PURE__ */ jsx(Typography, { variant: "h2", className: styles$3.ctaTitle, children: "Ready to Create Something Unique?" }),
      /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$3.ctaSubtitle, children: "Let's collaborate to build a digital experience that transforms your business and delights your users." }),
      /* @__PURE__ */ jsx(Link, { to: "https://calendly.com/kyleranta/15min", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(Button, { variant: "primary", arrow: true, children: "Book a Free Consultation" }) }),
      /* @__PURE__ */ jsx(Typography, { variant: "listItem", align: "center", children: "uniqueux13@gmail.com" })
    ] })
  ] });
};
const __vite_glob_2_0 = `---\r
title: "Exploring Voice User Interfaces and the Future of Voice-Controlled Applications"\r
date: "2025-03-29"\r
slug: "exploring-voice-user-interfaces"\r
excerpt: "A comprehensive exploration of Voice User Interfaces (VUIs), their history, technology, applications, advantages, limitations, future trends, and ethical considerations."\r
author: "Kyle Ranta"\r
tags: ["VUI", "UX", "Voice Control", "AI", "Technology", "Future"]\r
---\r
\r
The way humans interact with technology is undergoing a profound transformation, with voice emerging as an increasingly significant modality. Once relegated to the realm of science fiction, the ability to converse with machines is rapidly becoming a commonplace reality. This shift marks a departure from traditional human-computer interaction methods that have long relied on physical interfaces such as punch cards, keyboards, mice, and touchscreens. The evolution of Voice User Interfaces (VUIs) is not merely an incremental improvement; it represents a fundamental change in how we engage with the digital world, potentially as impactful as the transitions from command-line interfaces to graphical user interfaces. Given the innate human capacity for speech, this technology aligns with our most natural form of communication, positioning voice as a potentially dominant interface in the years to come. This report aims to provide a comprehensive exploration of Voice User Interfaces and the burgeoning future of voice-controlled applications, delving into their definition, historical evolution, underlying technologies, current applications, advantages, limitations, emerging trends, societal impact, and ethical considerations.\r
\r
## Decoding the Dialogue: Defining Voice User Interfaces (VUIs)\r
\r
At its core, a Voice User Interface (VUI) is a technology that empowers individuals to interact with computers and various devices through spoken commands. Essentially, VUIs enable spoken human interaction with computers, utilizing speech recognition to comprehend spoken commands and questions, and often employing text-to-speech to deliver responses. This form of interaction stands in stark contrast to traditional Graphical User Interfaces (GUIs), which necessitate visual attention and manual input. VUIs offer a hands-free and often eyes-free mode of operation, providing a unique value proposition in numerous contexts. As the primary interface for speech applications, VUIs are becoming increasingly integral to a wide array of technologies, from virtual assistants like Siri, Google Assistant, and Alexa, to voice-controlled systems embedded in smart homes and automobiles. The definition of VUI extends beyond the simple recognition of spoken words; it encompasses the understanding of the user's intent and the generation of appropriate and contextually relevant responses, highlighting the inherent complexity of this technology. The growing prevalence of VUIs can be attributed to their inherent value in facilitating hands-free and eyes-free interaction across a multitude of scenarios.\r
\r
## Echoes of the Past: A Historical Journey of VUI Development and Evolution\r
\r
The journey of Voice User Interfaces began in the 1950s with the advent of rudimentary speech recognition systems capable of recognizing only a limited set of words and requiring precise enunciation. A significant early milestone was Bell Labs' creation of "Audrey" in 1952, a system designed to decode spoken digits, marking the first demonstration of automatic digit recognition. A decade later, in 1962, IBM introduced "Shoebox," a machine that could recognize a small vocabulary of 16 words and digits, showcasing further progress in the field. The 1960s and 1970s witnessed advancements in phoneme recognition, laying the groundwork for more sophisticated systems. The 1980s marked a turning point with the emergence of Hidden Markov Models (HMMs), a statistical method that significantly improved the accuracy of speech recognition. This technological leap paved the way for the development of commercial products in the 1990s, most notably Dragon NaturallySpeaking, which brought viable speech recognition to personal computers.\r
\r
The 2000s heralded a new era for VUIs with the introduction of smartphone-based virtual assistants, bringing voice interfaces to a wider audience. Apple's launch of Siri in 2011 was a pivotal moment, popularizing voice interaction on mobile devices. Google followed suit with Google Now in 2012, which later evolved into the more comprehensive Google Assistant. In 2014, Amazon introduced Alexa through its Echo smart speaker, which significantly popularized voice control for home automation and a multitude of other tasks. Beyond smartphones and smart speakers, VUIs have increasingly been integrated into cars, home appliances, and various Internet of Things (IoT) devices, making voice control a ubiquitous feature in daily life. It is also important to acknowledge the role of Interactive Voice Response (IVR) systems in the late 20th and early 21st centuries. These systems, capable of understanding human speech over the telephone to carry out tasks, represented an early widespread application of VUI technology and laid the foundation for many of the conversational paradigms used today. The historical progression of VUIs demonstrates a remarkable evolution from recognizing isolated digits to comprehending continuous natural language, a feat largely driven by the exponential growth in computing power and the significant advancements in artificial intelligence.\r
\r
**Table 1: Milestones in VUI History**\r
\r
| Year | Event/Milestone        | Key Feature/Significance                                                        |\r
| :--- | :--------------------- | :------------------------------------------------------------------------------ |\r
| 1952 | Bell Labs' Audrey      | First system to recognize spoken digits (0-9).                                  |\r
| 1962 | IBM's Shoebox          | Recognized 16 spoken words in English and digits.                               |\r
| 1980s | Hidden Markov Models | Significantly improved speech recognition accuracy.                               |\r
| 1990s | Dragon NaturallySpeaking | First commercially successful speech recognition product for consumers.       |\r
| 2011 | Apple's Siri           | Introduced a sophisticated virtual assistant to smartphones, popularizing voice. |\r
| 2012 | Google Now (Assistant) | Expanded voice capabilities and proactive information delivery on mobile.       |\r
| 2014 | Amazon's Alexa         | Popularized smart speakers and voice control for home automation.               |\r
\r
## The Symphony of Speech: Core Technologies Powering Voice Interaction\r
\r
The seamless interaction experienced with VUIs is underpinned by a sophisticated interplay of three core technologies: Speech Recognition, Natural Language Understanding, and Speech Synthesis.\r
\r
### Speech Recognition (ASR)\r
\r
Speech Recognition (Automatic Speech Recognition - ASR) serves as the crucial first step, converting spoken words into a textual format that computers can process. This process typically involves capturing the audio input through a microphone, breaking down the speech into individual sounds or phonemes, and then analyzing these sounds using complex algorithms and acoustic models. The system then transcribes these analyzed sounds into written text. Key components that enable this conversion include acoustic models, which contain statistical representations of the sounds in a language; a pronunciation dictionary or lexicon, which provides the phonetic pronunciation of words; and language models, such as N-grams and neural networks, which predict the likelihood of word sequences to ensure grammatical and semantic plausibility. It is important to distinguish between speech recognition, which focuses on identifying the words spoken, and voice recognition, which aims to identify the individual speaker based on their unique vocal characteristics.\r
\r
### Natural Language Understanding (NLU)\r
\r
Once the spoken words are converted into text, Natural Language Understanding (NLU) takes over to interpret the meaning and intent behind the user's request. NLU systems analyze the linguistic structure of the text, including its semantics (meaning), syntax (grammar), and pragmatics (context), to identify the user's intent – their goal or what they want the system to do – and to extract relevant entities, which are the key pieces of information needed to fulfill that intent. For instance, if a user says, "Set an alarm for 7 AM tomorrow," the NLU component would identify the intent as "set alarm" and the entities as "7 AM" and "tomorrow." Machine learning models, including neural networks and pre-trained language models like BERT, play a vital role in enabling NLU systems to understand the nuances of human language. Ultimately, NLU transforms unstructured natural language data into a structured, machine-readable format that other computer systems can utilize.\r
\r
### Speech Synthesis (TTS)\r
\r
The final piece of this technological symphony is Speech Synthesis (Text-to-Speech - TTS), which converts digital text back into spoken audio, allowing the VUI to respond to the user. The TTS process typically involves a front-end and a back-end. The front-end is responsible for text normalization, converting raw text into written-out words, and for assigning phonetic transcriptions and prosody, which includes the rhythm, stress, and intonation of speech. The back-end, often referred to as the synthesizer, then converts this symbolic linguistic representation into actual sound. Key considerations in speech synthesis are the naturalness of the generated speech, how closely it resembles human voice, and its intelligibility, the ease with which it can be understood. Significant advancements have been made in creating more human-like and expressive synthetic voices, enhancing the overall user experience. These three core technologies – speech recognition as the ears, NLU as the brain, and speech synthesis as the voice – work in concert to create a seamless and conversational interaction between humans and computers through Voice User Interfaces. The accuracy and sophistication of each component are paramount to the overall effectiveness and the quality of the user experience.\r
\r
**Table 2: Comparison of VUI Core Technologies**\r
\r
| Technology                    | Function                             | Key Processes                                                            | Example Applications                                        |\r
| :---------------------------- | :----------------------------------- | :----------------------------------------------------------------------- | :---------------------------------------------------------- |\r
| Speech Recognition (ASR)      | Converts spoken words into text      | Audio capture, phoneme analysis, acoustic modeling, language modeling    | Virtual assistants, dictation software, voice search        |\r
| Natural Language Understanding (NLU) | Interprets meaning and intent of text | Semantic analysis, syntactic analysis, intent identification, entity extraction | Chatbots, voice assistants, sentiment analysis              |\r
| Speech Synthesis (TTS)        | Converts text into spoken audio      | Text normalization, phonetic transcription, prosody assignment, sound generation | Virtual assistants, screen readers, automated customer service |\r
\r
## Voice Unleashed: Current Applications of VUIs Across Industries\r
\r
Voice User Interfaces have permeated a vast array of industries, transforming how users interact with technology in numerous aspects of their lives.\r
\r
In **smart homes**, VUIs have become central to creating more intuitive and responsive living environments. Users can effortlessly control various aspects of their homes, including lighting, thermostats, security systems, and entertainment devices, using simple voice commands. Popular examples include Amazon Echo, Google Home, and Apple HomePod. ADT, for instance, offers smart home integration controlled through voice assistants like Alexa and Google Assistant, allowing users to manage security, lighting, locks, and thermostats hands-free. VUIs also enable homeowners to manage daily routines, set reminders, and even create shopping lists through voice commands.\r
\r
The **automotive industry** has embraced VUIs to enhance safety and convenience for drivers. Voice navigation systems allow drivers to get directions without taking their hands off the wheel or eyes off the road, while voice commands can also control entertainment, make calls, send messages, and manage other vehicle functions. Sensory AI, for example, provides on-device voice and vision AI for automotive applications, focusing on safety through features like driver distraction detection. The Vehicle Information Service (VIS) API is also being developed to standardize access to vehicle signals through voice interfaces.\r
\r
**Healthcare** is another sector where VUIs are making significant strides in improving efficiency and patient care. Healthcare professionals can use voice commands for hands-free access to patient information, scheduling appointments, and even providing medical advice in certain contexts. Voice recognition also aids in medical transcription and clinical documentation, streamlining workflows and allowing clinicians to focus more on patient interaction. Furthermore, VUIs are being explored for remote patient monitoring and enhancing patient engagement through AI-powered virtual assistants.\r
\r
In **customer service**, Voice AI agents and voicebots are increasingly being deployed to provide round-the-clock support, answer frequently asked questions, and handle routine customer inquiries. These AI-powered systems can offer personalized interactions based on a customer's past history and preferences. They can automate tasks such as order status lookups and appointment scheduling, reducing wait times and freeing up human agents for more complex issues. Integration with CRM data allows voice AI agents to tailor conversations and provide more relevant assistance.\r
\r
The **retail and e-commerce** industries are leveraging VUIs to transform the shopping experience. Customers can use voice commands to search for products, create shopping lists, track orders, and receive personalized recommendations. Voice-activated payments and hands-free shopping experiences are also becoming more prevalent, offering added convenience to consumers.\r
\r
**Education** is another domain where VUIs are finding valuable applications. Voice assistants can aid students with research, provide personalized learning experiences, and help improve pronunciation in language learning. For students with disabilities, VUIs can offer hands-free access to learning materials and tools, promoting inclusivity in the classroom.\r
\r
In **manufacturing**, VUIs are being implemented to streamline operations and enhance worker safety. Voice commands can be used for hands-free control of machinery, accessing equipment manuals, and conducting quality control inspections. Voice recognition also facilitates real-time reporting and data logging on the factory floor, improving efficiency and accuracy. The versatility of VUIs is evident in their expanding presence across diverse sectors, indicating a significant and ongoing trend in technology adoption. A key driver behind this widespread adoption is the fundamental advantage of hands-free operation, which enhances safety, boosts efficiency, and provides unparalleled convenience in a multitude of applications.\r
\r
## The Power of Voice: Advantages of Embracing Voice User Interfaces\r
\r
The increasing adoption of Voice User Interfaces is fueled by a multitude of compelling advantages that enhance user experience and streamline interactions with technology.\r
\r
* **Accessibility:** VUIs provide an alternative interaction method for individuals who may face challenges with traditional interfaces (visual or motor impairments). They also support multilingual interactions.\r
* **Convenience:** Speaking is often faster than typing, simplifying tasks, enabling multitasking, and offering an "anytime, anywhere" mode of communication.\r
* **Hands-free Operation:** Essential in situations requiring focused attention elsewhere (driving, cooking), enhancing both convenience and safety.\r
* **Natural Communication:** Leverages the familiarity of natural language, reducing the learning curve associated with complex interfaces.\r
* **Personalization:** VUIs can learn user preferences and adapt responses, tailoring the experience and enhancing satisfaction.\r
* **Efficiency:** Enables faster task execution and streamlines workflows by reducing time spent on manual tasks.\r
\r
The accessibility benefits of VUIs extend beyond aiding individuals with disabilities to also providing significant convenience for everyday multitasking. The naturalness of voice interaction fosters a more engaging and satisfying user experience compared to traditional interfaces.\r
\r
**Table 3: Advantages and Limitations of VUIs**\r
\r
| Category              | Advantage                                                                          | Limitation                                                                       |\r
| :-------------------- | :--------------------------------------------------------------------------------- | :------------------------------------------------------------------------------- |\r
| Accessibility         | Enables interaction for impaired users; supports multilingualism.                    | May struggle with diverse speech patterns/impairments.                         |\r
| Convenience           | Faster than typing; simplifies tasks; multitasking; anytime/anywhere use.           | Requires clear speech; challenging in noise.                                  |\r
| Hands-free Operation  | Useful when hands/eyes are busy; improves safety.                                | Not ideal for fine-grained control tasks.                                      |\r
| Natural Communication | Intuitive; reduces learning curve; mimics conversation.                             | Language ambiguity can lead to misunderstandings.                              |\r
| Personalization       | Learns preferences; adapts responses; tailors experience.                         | Relies on data collection, raising privacy concerns.                             |\r
| Efficiency            | Faster tasks; streamlines workflows; reduces manual effort.                         | Accuracy issues can cause frustration and inefficiency.                         |\r
| Discoverability       |                                                                                    | Lack of visual cues makes understanding capabilities difficult.                  |\r
| Privacy               |                                                                                    | "Always listening" raises data collection concerns and potential misuse.         |\r
| Public Use            |                                                                                    | Challenging due to noise and privacy concerns.                                 |\r
| Connectivity          |                                                                                    | Many devices require internet, limiting use in poor connectivity areas.       |\r
\r
## The Silent Challenges: Limitations and Obstacles in VUI Technology\r
\r
Despite the numerous advantages, Voice User Interface technology still faces several challenges and limitations that need to be addressed for its continued advancement and widespread adoption.\r
\r
**Accuracy issues** remain a significant hurdle. VUIs can sometimes misinterpret basic commands, and voice dictation may produce errors. These systems often struggle with the nuances of human speech, including variations in accents, dialects, and individual speech patterns. Furthermore, noise interference from ambient sounds, echoes, and reverberation can significantly impact the accuracy of speech recognition, making it difficult for VUIs to function reliably in noisy environments. VUIs also face challenges in distinguishing between multiple speakers in a conversation, which can lead to errors in command execution and personalization.\r
\r
**Security** is another critical concern. Voice recognition systems are vulnerable to voice spoofing and impersonation, where malicious actors can attempt to mimic a user's voice to gain unauthorized access. The potential for hackers to intercept voice data, especially in cloud-based systems, and gain access to personal information or control over devices is a significant risk. Researchers have even demonstrated the possibility of concealing voice commands within white noise or in frequencies beyond human hearing, posing new security threats. Additionally, third-party voice applications or "skills" can be susceptible to skill-squatting attacks, where malicious apps with similar names can trick users.\r
\r
**User privacy** remains a paramount concern with VUIs. The "always listening" nature of many smart devices raises anxieties about the potential for unintended data collection and the recording of private conversations without explicit consent. Users are often uncertain about how companies store, collect, and utilize their voice data, leading to mistrust. The risk of data breaches and unauthorized access to voice data stored in the cloud further compounds these privacy concerns.\r
\r
**Discoverability** of features and functionalities can also be a limitation. Unlike graphical interfaces with visual cues, VUIs often lack clear indications of what the system can do. Enumerating all available options through audio can be tedious or even infeasible, leading to user confusion about the system's capabilities. Furthermore, the usability of VUIs in public can be challenging due to background noise and privacy considerations, limiting their practicality in certain environments. Finally, many voice-activated devices depend on a consistent internet connection to function, which can be a limitation in areas with poor or unreliable connectivity. While accuracy has improved considerably over time, it remains a key challenge, particularly in the presence of real-world noise and with the diversity of human speech patterns. The inherent "always listening" nature of many VUI devices creates a fundamental trade-off between the convenience they offer and the privacy of their users.\r
\r
## Whispers of Tomorrow: Emerging Trends and Future Directions in Voice Control\r
\r
The field of voice control is dynamic and continues to evolve at a rapid pace, driven by several emerging trends and future directions.\r
\r
* **AI and Machine Learning Advancements:** Improved accuracy, understanding (NLP), generation (NLG), smarter assistants, enhanced dialogue, emotion recognition, and LLM integration promise more natural and intelligent interactions.\r
* **Personalized Voice Experiences:** Tailoring interactions to individual preferences, behaviors, and emotions, possibly including voice cloning and hyper-personalization based on mood and context.\r
* **Integration with AR/VR/IoT:** Enabling hands-free interaction in AR/VR, voice control of connected devices, and multimodal interactions (combining voice with gestures, touch, etc.).\r
* **Ambient Computing and Contextual Awareness:** VUIs anticipating user needs and providing proactive assistance without explicit commands, seamlessly integrated into the environment.\r
* **Enhanced Security and Privacy:** Advancements in voice biometrics, increased on-device processing to minimize cloud data transfer, and improved user privacy controls.\r
* **Multilingual and Cross-Lingual Capabilities:** Better support for diverse languages and dialects, alongside more seamless real-time voice translation.\r
\r
The future of voice control is undeniably intertwined with the ongoing advancements in AI, which will enable more natural, intelligent, and highly personalized interactions. The integration of voice control with AR and VR holds immense potential for creating truly immersive and intuitive user experiences. Addressing user concerns regarding security and privacy will be crucial for fostering widespread trust and adoption of voice-controlled applications.\r
\r
**Table 4: Emerging Trends in Voice Control**\r
\r
| Trend                                   | Key Characteristics/Advancements                                                            | Potential Impact                                                                    |\r
| :-------------------------------------- | :------------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------- |\r
| AI and Machine Learning Advancements    | Improved accuracy, NLP, NLG; smarter assistants; emotion recognition; LLM integration.    | More natural, intelligent, context-aware interactions; handles complex tasks.     |\r
| Personalized Voice Experiences          | Tailoring to preferences, behaviors, emotions; voice cloning; hyper-personalization.       | More engaging experiences; enhanced branding; proactive, relevant assistance.        |\r
| Integration with AR/VR/IoT              | Hands-free interaction in AR/VR; control of connected devices; multimodal interactions. | Immersive experiences; seamless tech control; enhanced accessibility.               |\r
| Ambient Computing & Contextual Awareness | VUIs anticipating needs; proactive assistance; environmental integration.                 | Intuitive, less obtrusive tech; personalized assistance without explicit commands. |\r
| Enhanced Security and Privacy           | Voice biometrics; on-device processing; improved user controls.                           | Secure authentication; reduced data breach risk; increased user trust & control.    |\r
| Multilingual & Cross-Lingual Capabilities | Better support for diverse languages; real-time translation.                                | Breaking language barriers; enhanced global accessibility & communication.        |\r
\r
## Reshaping Our World: The Potential Impact of Widespread VUI Adoption\r
\r
The widespread adoption of voice-controlled applications holds the potential to significantly reshape society, technology, and the very nature of human-computer interaction.\r
\r
**Societally,** VUIs promise enhanced accessibility for individuals with disabilities and older adults, potentially changing communication patterns and how information is consumed. **Technologically,** proliferation will drive further AI/NLP innovation and deeper integration across devices (especially IoT), leading towards more natural interfaces and boosting voice search/commerce. **In HCI,** this accelerates the shift to conversational and multimodal interactions, potentially making technology more personalized and emotionally intelligent, rebalancing interfaces towards auditory experiences and democratizing technology access.\r
\r
## Navigating the Ethical Maze: Societal Implications and Concerns of VUIs\r
\r
The increasing use of Voice User Interfaces brings forth a range of ethical considerations and societal implications that warrant careful evaluation.\r
\r
* **Job Displacement:** Automation risks replacing human roles in customer service and routine tasks, necessitating workforce retraining.\r
* **Data Privacy:** Collection and use of voice data raise significant concerns, requiring transparency, consent, robust security, and regulatory compliance (GDPR, CCPA).\r
* **Bias and Discrimination:** Training data biases can lead to lower accuracy for certain demographics, perpetuating societal biases. Mitigation requires diverse data and inclusive design.\r
* **Ethical Design:** Transparency, accountability, fairness, informed consent, accessibility, and mitigation of misuse are crucial for building trust.\r
* **Impact on Children:** Potential negative effects on social, emotional, and cognitive development due to interaction with voice devices warrant further research and age-appropriate guidelines.\r
\r
The increasing sophistication of voice AI necessitates careful consideration of these ethical questions and proactive solutions to ensure responsible development and deployment. Addressing bias is paramount for equitable access.\r
\r
**Table 5: Ethical Considerations and Societal Implications of VUIs**\r
\r
| Ethical Consideration/Societal Implication | Description                                                                 | Potential Solutions/Mitigation Strategies                                                       |\r
| :--------------------------------------- | :-------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------- |\r
| Job Displacement                         | Automation causing job losses in routine roles.                             | Retraining programs, upskilling, exploration of new AI-related job roles.                     |\r
| Data Privacy Concerns                    | Collection, storage, potential misuse of voice data; lack of transparency. | Encryption, clear policies, user control, regulatory compliance, on-device processing.        |\r
| Bias and Discrimination                  | Lower accuracy for certain demographics; perpetuation of societal biases.      | Diverse training data, inclusive design, bias audits, bias-mitigation algorithms.            |\r
| Ethical Design and Development           | Need for transparency, accountability, fairness, consent, accessibility.      | Embedding ethics in development, clear consent, user-centric design, harm evaluation.        |\r
| Impact on Children's Development         | Potential negative effects on social, cognitive skills; hindering critical thinking. | Further research, age-appropriate guidelines, parental controls and guidance.                |\r
\r
## Conclusion: Envisioning a Voice-Controlled Future\r
\r
Voice User Interfaces have emerged as a transformative technology, evolving from simple recognition systems to sophisticated AI assistants integrated into daily life. This exploration covered their definition, history, core technologies (ASR, NLU, TTS), diverse applications, advantages (accessibility, convenience, efficiency), and limitations (accuracy, security, privacy). While emerging trends like advanced AI, personalization, and AR/VR integration promise a future of more natural and intelligent voice control, widespread adoption necessitates careful navigation of ethical considerations. Addressing job displacement, ensuring data privacy, mitigating bias, and understanding the impact on vulnerable populations are crucial for responsibly harnessing the power of VUIs and creating a truly beneficial voice-controlled future where technology meets us where we are.`;
function getSortedPostsData() {
  const postsModules = /* @__PURE__ */ Object.assign({
    "../posts/exploring-voice-user-interfaces.md": __vite_glob_2_0
  });
  const postsData = Object.entries(postsModules).map(([path, rawContent]) => {
    const contentString = typeof rawContent === "string" ? rawContent : "";
    const { data } = matter(contentString);
    if (!data.title || !data.date || !data.slug) {
      console.warn(`Post at ${path} is missing required frontmatter (title, date, slug)`);
      return null;
    }
    return data;
  }).filter((post) => post !== null);
  return postsData.sort((a, b) => a.date < b.date ? 1 : -1);
}
function getPostData(slug) {
  try {
    const postsModules = /* @__PURE__ */ Object.assign({
      "../posts/exploring-voice-user-interfaces.md": __vite_glob_2_0
    });
    const postPath = `../posts/${slug}.md`;
    const rawContent = postsModules[postPath];
    if (!rawContent) {
      console.error(`Post not found for slug: ${slug} (expected path: ${postPath})`);
      return null;
    }
    const contentString = typeof rawContent === "string" ? rawContent : "";
    const { data, content: content2 } = matter(contentString);
    if (!data.title || !data.date || !data.slug) {
      console.warn(`Post at ${postPath} is missing required frontmatter (title, date, slug)`);
      return null;
    }
    return {
      ...data,
      content: content2
    };
  } catch (error) {
    console.error(`Error getting post data for slug: ${slug}`, error);
    return null;
  }
}
const pageTitle = "_pageTitle_z8rby_1";
const postList = "_postList_z8rby_9";
const postItem = "_postItem_z8rby_17";
const postLink = "_postLink_z8rby_37";
const postTitle = "_postTitle_z8rby_43";
const postDate = "_postDate_z8rby_59";
const postExcerpt = "_postExcerpt_z8rby_69";
const styles$1 = {
  pageTitle,
  postList,
  postItem,
  postLink,
  postTitle,
  postDate,
  postExcerpt
};
const BlogListPage = () => {
  const allPostsData = getSortedPostsData();
  return /* @__PURE__ */ jsxs(Section, { padding: "md", children: [
    /* @__PURE__ */ jsx(Typography, { variant: "h1", className: styles$1.pageTitle, children: "Blog" }),
    /* @__PURE__ */ jsxs("ul", { className: styles$1.postList, children: [
      allPostsData.length === 0 && /* @__PURE__ */ jsx(Typography, { variant: "p", children: "No posts found yet. Check back soon!" }),
      allPostsData.map(({ slug, date, title, excerpt }) => /* @__PURE__ */ jsxs("li", { className: styles$1.postItem, children: [
        /* @__PURE__ */ jsx(Link, { to: `/blog/${slug}`, className: styles$1.postLink, children: /* @__PURE__ */ jsx(Typography, { variant: "h3", className: styles$1.postTitle, children: title }) }),
        /* @__PURE__ */ jsxs(Typography, { variant: "caption", className: styles$1.postDate, children: [
          format(parseISO(date), "MMMM d, yyyy"),
          " "
        ] }),
        excerpt && /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$1.postExcerpt, children: excerpt })
      ] }, slug))
    ] })
  ] });
};
const postContent = "_postContent_1iiff_3";
const styles = {
  postContent
};
const BlogPostPage = () => {
  const { slug } = useParams();
  if (!slug) {
    return /* @__PURE__ */ jsx(Section, { padding: "md", children: /* @__PURE__ */ jsx(Typography, { variant: "p", children: "Loading post..." }) });
  }
  const post = getPostData(slug);
  if (!post) {
    return /* @__PURE__ */ jsxs(Section, { padding: "md", children: [
      /* @__PURE__ */ jsx(Typography, { variant: "h2", children: "Post Not Found" }),
      /* @__PURE__ */ jsx(Typography, { variant: "p", children: "Sorry, the post you are looking for does not exist." }),
      /* @__PURE__ */ jsx(Link, { to: "/blog", children: "Back to Blog" })
    ] });
  }
  return /* @__PURE__ */ jsxs(Section, { padding: "md", className: styles.blogPost, children: [
    /* @__PURE__ */ jsx(Typography, { variant: "h1", className: styles.postTitle, children: post.title }),
    /* @__PURE__ */ jsxs(Typography, { variant: "caption", className: styles.postMeta, children: [
      post.author && `By ${post.author} `,
      "on ",
      format(parseISO(post.date), "MMMM d,<x_bin_534>")
    ] }),
    /* @__PURE__ */ jsx("article", { className: styles.postContent, children: /* @__PURE__ */ jsx(ReactMarkdown, { children: post.content }) }),
    /* @__PURE__ */ jsx(Link, { to: "/blog", className: styles.backLink, children: "← Back to Blog" })
  ] });
};
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
      // Optional: Use "instant" for immediate scroll, "smooth" for smooth scrolling
    });
  }, [pathname]);
  return null;
}
const App = () => {
  return (
    // Use a React Fragment <>...</> instead of the <Router>
    /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(Header, { siteTitle: "Unique UX" }),
      /* @__PURE__ */ jsx(ScrollToTop, {}),
      /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsxs(Routes, { children: [
        " ",
        /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(HomePage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/about", element: /* @__PURE__ */ jsx(AboutPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/portfolio", element: /* @__PURE__ */ jsx(PortfolioPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/services", element: /* @__PURE__ */ jsx(ServicesPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/blog", element: /* @__PURE__ */ jsx(BlogListPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/blog/:slug", element: /* @__PURE__ */ jsx(BlogPostPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/project1", element: /* @__PURE__ */ jsx(Project1Page, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/project2", element: /* @__PURE__ */ jsx(Project2Page, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/sketchbook", element: /* @__PURE__ */ jsx(Sketchbook, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(NotFoundPage, {}) })
      ] }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  );
};
ReactDOM.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsxs(BrowserRouter, { children: [
    " ",
    /* @__PURE__ */ jsx(App, {})
  ] }) })
);
