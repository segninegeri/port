"use client";
import Image from "next/image";
import styles from "./style.module.scss";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Button from "@/common/BtnW";
const Card = ({
  i,
  title,
  description,
  src,
  live,
  color,
  progress,
  range,
  targetScale,
  code,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);

  const handleNavigate = () => {
    if (code) {
      window.open(code, "_blank");
    }
  };
  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={styles.card}
      >
        <motion.h2 ref={container} style={{ y }}>
          {title}
        </motion.h2>
        <div className={styles.body}>
          <div className={`${styles.description} text-[16px] lg:text-xl`}>
            <p>{description}</p>
            <span className="mt-4">
              <Button href={live}>Take a look</Button>
            </span>
          </div>

          <div onClick={handleNavigate} className={styles.imageContainer}>
            <motion.div className={styles.inner} style={{ scale: imageScale }}>
              <Image fill src={`/images/proImage/${src}`} alt="image" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
