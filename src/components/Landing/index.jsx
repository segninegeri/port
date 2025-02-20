"use client";
import Image from "next/image";
import styles from "./style.module.scss";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { slideUp } from "./animation";
import { useScroll, useTransform, motion } from "framer-motion";
import Text from "./Text";
import Magnet from "@/common/Magnetic";

export default function Home() {
  
const container = useRef(null);

const { scrollYProgress } = useScroll({
  target: container, // Make sure container is the scroll target
  offset: ["start start", "end end"],
});

// Apply transforms for x, y, and rotation based on scroll progress
const x = useTransform(scrollYProgress, [0, 1], [-100,0]);
const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);

   const socialLinks = [
     {
       src: "/images/socials/telegram.svg",
       alt: "Telegram",
       href: "https://t.me/machiavellijg",
     },
     {
       src: "/images/socials/linkedin.svg",
       alt: "LinkedIn",
       href: "https://www.linkedin.com/in/segni-negeri-02a3b6290/",
     },
     {
       src: "/images/socials/twitter.svg",
       alt: "Twitter",
       href: "https://x.com/jalalgirma",
     },
     {
       src: "/images/socials/github.svg",
       alt: "GitHub",
       href: "https://github.com/segninegeri/",
     },
   ];

  const slider = useRef(null);
  let direction = -1;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
  }, []);

  return (
    <>
      <motion.main
        initial="initial"
        animate="enter"
        className={styles.landing}
      >
        <motion.div
          ref={container}
          style={{ x }}
          variants={slideUp}
          className="absolute bottom-2 left-8 "
        >
          {socialLinks.map((link) => (
            <Magnet key={link.href}>
              <motion.div
                variants={slideUp}
                className={`${styles.imageContainer} w-12 h-12 my-12`}
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <Image src={link.src} alt={link.alt} fill />
                </a>
              </motion.div>
            </Magnet>
          ))}
        </motion.div>

        <Text />
      </motion.main>
    </>
  );
}
