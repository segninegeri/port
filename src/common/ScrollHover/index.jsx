"use client";
import React, { useEffect } from "react";
import styles from "./style.module.css"; // Import the CSS file
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollEffectWrapper = ({ children }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const elements = document.querySelectorAll(`.${styles.text}`);

    elements.forEach((element) => {
      gsap.to(element, {
        backgroundSize: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "center 80%",
          end: "center 20%",
          scrub: true,
        },
      });
    });

    // Cleanup GSAP animation on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return <div className={styles.container}>{children}</div>;
};

export default ScrollEffectWrapper;
