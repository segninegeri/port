"use client";
import styles from "./style.module.scss";
import { projects } from "./Tools/data";
import Card from "./Tools/index";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import Image from "next/image";

export default function Home() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container, // Make sure container is the scroll target
    offset: ["start start", "end end"],
  });

  // Apply transforms for x, y, and rotation based on scroll progress
  const x = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <motion.div
        ref={container}
        style={{ x }}
        className={`${styles.work} font-ablition text-center  bg-black text-white z-[1] stroke flex justify-center items-center -space-x-3`}
      >
        <p className="m-0 p-0">Selected W</p>
        <div className={`${styles.imageContainer}`}>
          <Image src="/images/O.png" alt="" fill className="p-0 m-0" />
        </div>
        <p className="m-0 p-0"> rk</p>
      </motion.div>

      <main className={styles.main}>
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </main>
    </>
  );
}
