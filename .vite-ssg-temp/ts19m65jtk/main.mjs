import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import { Link, useParams, useLocation, Routes, Route, BrowserRouter } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import matter from "gray-matter";
import { parseISO, format } from "date-fns";
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
title: "Beyond the Smart Speaker: The Next Wave of Voice Interaction"\r
date: "2025-03-30" # Use the date you plan to publish\r
slug: "next-wave-voice-interaction"\r
excerpt: "Voice control is moving beyond simple commands. Explore how AI, AR/VR integration, and ambient computing are shaping the future of how we talk to tech."\r
author: "Kyle Ranta"\r
tags: ["VUI", "Future of UX", "AI", "AR", "VR", "Ambient Computing"]\r
---\r
\r
## Beyond the Smart Speaker: The Next Wave of Voice Interaction\r
\r
We've gotten used to asking smart speakers for the weather or telling our phones to set timers. Voice User Interfaces (VUIs) like Alexa, Siri, and Google Assistant have become commonplace. But this is just the beginning. The way we interact with technology through voice is evolving rapidly, moving towards experiences that are far more intelligent, personalized, and seamlessly integrated into our lives.\r
\r
### Smarter Conversations Fueled by AI\r
\r
The real game-changer is the advancement in Artificial Intelligence (AI) and Natural Language Processing (NLP). Forget rigid commands. Future VUIs, powered by smarter AI and Large Language Models (LLMs), will understand more complex requests, grasp context across multiple interactions, and even recognize user emotions. Imagine having a genuinely natural conversation with your devices, where they don't just react, but understand and even anticipate your needs.\r
\r
### Voice Meets Sight: Integration with AR and VR\r
\r
One of the most exciting frontiers is the fusion of voice with Augmented Reality (AR) and Virtual Reality (VR). Imagine navigating complex AR interfaces entirely hands-free using voice commands, or interacting intuitively within a VR environment without cumbersome controllers. This combination promises truly immersive and accessible experiences, breaking down barriers between the digital and physical worlds. Multimodal interactions – combining voice with gestures or gaze – will likely become the norm.\r
\r
### Fading into the Background: Ambient Computing\r
\r
The ultimate goal? Technology that disappears. Ambient computing envisions a future where voice control is seamlessly woven into our surroundings. Your environment could proactively offer assistance based on context, without you even having to ask explicitly. Think lights adjusting automatically when you enter a room and say you're tired, or your calendar proactively suggesting meeting times based on a spoken conversation. Voice becomes less of a command interface and more of a natural dialogue with your environment.\r
\r
### The Road Ahead\r
\r
Of course, challenges remain. Ensuring robust security, protecting user privacy in an "always listening" world, and eliminating bias in recognition are critical hurdles we must overcome responsibly.\r
\r
But the direction is clear: voice interaction is moving beyond simple question-and-answer. It's becoming more intelligent, more personalized, and more deeply integrated with other technologies. The next wave isn't just about talking *to* our devices; it's about creating a genuine dialogue *with* our digital world.`;
function getSortedPostsData() {
  console.log("Attempting to get sorted posts data...");
  const postsModules = /* @__PURE__ */ Object.assign({
    "../posts/next-wave-voice-interaction.md": __vite_glob_2_0
  });
  console.log("Raw Posts Modules Found:", postsModules);
  const postsData = Object.entries(postsModules).map(([path, rawContent]) => {
    console.log(`Processing file: ${path}`);
    const contentString = typeof rawContent === "string" ? rawContent : "";
    const { data } = matter(contentString);
    if (!data.title || !data.date || !data.slug) {
      console.warn(`Post at ${path} is missing required frontmatter (title, date, slug)`);
      return null;
    }
    return data;
  }).filter((post) => post !== null);
  console.log("Processed Posts Frontmatter (Before Sort):", postsData);
  const sortedData = postsData.sort((a, b) => a.date < b.date ? 1 : -1);
  console.log("Sorted Posts Frontmatter:", sortedData);
  return sortedData;
}
function getPostData(slug) {
  console.log(`Attempting to get post data for slug: ${slug}`);
  try {
    const postsModules = /* @__PURE__ */ Object.assign({
      "../posts/next-wave-voice-interaction.md": __vite_glob_2_0
    });
    console.log("Raw Modules in getPostData:", postsModules);
    const postPath = `../posts/${slug}.md`;
    console.log(`Looking for post path: ${postPath}`);
    const rawContent = postsModules[postPath];
    if (!rawContent) {
      console.error(`Post not found for slug: ${slug} (expected path: ${postPath})`);
      return null;
    }
    console.log(`Found raw content for ${slug}`);
    const contentString = typeof rawContent === "string" ? rawContent : "";
    const { data, content: content2 } = matter(contentString);
    console.log(`Parsed data for ${slug}:`, data);
    if (!data.title || !data.date || !data.slug) {
      console.warn(`Post at ${postPath} is missing required frontmatter (title, date, slug)`);
      return null;
    }
    const postResult = {
      ...data,
      // Spread frontmatter data
      content: content2
      // Include the Markdown content
    };
    console.log(`Returning post data for ${slug}:`, postResult);
    return postResult;
  } catch (error) {
    console.error(`Error getting post data for slug: ${slug}`, error);
    return null;
  }
}
const pageTitle = "_pageTitle_11vi7_1";
const postList = "_postList_11vi7_9";
const postItem = "_postItem_11vi7_17";
const postLink = "_postLink_11vi7_37";
const postTitle = "_postTitle_11vi7_43";
const postDate = "_postDate_11vi7_59";
const styles$1 = {
  pageTitle,
  postList,
  postItem,
  postLink,
  postTitle,
  postDate
};
const BlogListPage = () => {
  console.log("Rendering BlogListPage");
  let allPostsData = [];
  try {
    allPostsData = getSortedPostsData();
    console.log("Data fetched in BlogListPage:", allPostsData);
  } catch (error) {
    console.error("Error fetching posts in BlogListPage:", error);
  }
  return /* @__PURE__ */ jsxs(Section, { padding: "md", children: [
    /* @__PURE__ */ jsx(Typography, { variant: "h1", className: styles$1.pageTitle, children: "Blog" }),
    /* @__PURE__ */ jsxs("ul", { className: styles$1.postList, children: [
      " ",
      allPostsData.length === 0 && /* @__PURE__ */ jsx(Typography, { variant: "p", children: "No posts found yet. Check back soon!" }),
      allPostsData.map(({ slug, date, title, excerpt }) => {
        let dateObject = null;
        let isValidDate = false;
        try {
          dateObject = parseISO(date);
          isValidDate = !isNaN(dateObject.getTime());
          console.log(`BlogList - Slug: ${slug}, Date String: "${date}", Parsed Date:`, dateObject, "Is Valid:", isValidDate);
        } catch (parseError) {
          console.error(`BlogList - Error parsing date for slug ${slug}: "${date}"`, parseError);
        }
        return /* @__PURE__ */ jsxs("li", { className: styles$1.postItem, children: [
          " ",
          /* @__PURE__ */ jsxs(Link, { to: `/blog/${slug}`, className: styles$1.postLink, children: [
            " ",
            /* @__PURE__ */ jsx(Typography, { variant: "h3", className: styles$1.postTitle, children: title }),
            " "
          ] }),
          /* @__PURE__ */ jsxs(Typography, { variant: "caption", className: styles$1.postDate, children: [
            " ",
            isValidDate && dateObject ? format(dateObject, "MMMM d, yyyy") : "Invalid Date"
          ] }),
          excerpt && /* @__PURE__ */ jsx(Typography, { variant: "p", className: styles$1.postExcerpt, children: excerpt }),
          " "
        ] }, slug);
      })
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
  let dateObject = null;
  let isValidDate = false;
  try {
    dateObject = parseISO(post.date);
    isValidDate = !isNaN(dateObject.getTime());
    console.log(`BlogPost - Slug: ${slug}, Date String: "${post.date}", Parsed Date:`, dateObject, "Is Valid:", isValidDate);
  } catch (parseError) {
    console.error(`BlogPost - Error parsing date for slug ${slug}: "${post.date}"`, parseError);
  }
  return /* @__PURE__ */ jsxs(Section, { padding: "md", className: styles.blogPost, children: [
    /* @__PURE__ */ jsx(Typography, { variant: "h1", className: styles.postTitle, children: post.title }),
    /* @__PURE__ */ jsxs(Typography, { variant: "caption", className: styles.postMeta, children: [
      post.author && `By ${post.author} `,
      "on ",
      isValidDate && dateObject ? format(dateObject, "MMMM d, yyyy") : "Invalid Date"
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
