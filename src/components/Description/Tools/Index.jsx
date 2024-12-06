"use client";
import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./animation";

export default function Index() {
  const phrase =
    "Elevating brands to thrive in the digital age. Together, we’ll set new benchmarks of excellence. No compromises—only bold, cutting-edge innovation.";
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <div
      data-scroll
      data-scroll-speed={0.2}
      ref={description}
      className={styles.description}
    >
      <div className={`${styles.body} text-3xl`}>
        <p>
          {phrase.split(" ").map((word, index) => {
            return (
              <span key={index} className={styles.mask}>
                <motion.span
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                  key={index}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
}
