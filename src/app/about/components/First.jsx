import Image from "next/image";
import React, { useRef } from "react";
import style from "./second.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";

function First() {
  const containerRef = useRef(null);

  // useScroll needs a valid `target` element
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["end start", "end end"],
  });

  // Motion values for animations
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const yTransform = useTransform(scrollYProgress, [0, 1], [-500, 0]);

  // Reusable Motion Image Component
  const MotionImage = ({ styleProps, className, src, alt, size }) => (
    <motion.div style={styleProps} className={className}>
      <div className={`${style.imageContainer} ${size}`}>
        <Image src={src} alt={alt} fill />
      </div>
    </motion.div>
  );

  return (
    <main
      ref={containerRef}
      className="relative h-screen overflow-hidden pt-16"
    >
      {/* Rotating Image */}
      <MotionImage
        styleProps={{ rotate }}
        className=" absolute top-[6rem] right-24"
        src="/images/Abstract Shape 64 (white on black).png"
        alt="Rotating Abstract Shape"
        size="w-64 h-64 md:w-72 md:h-72"
      />

      {/* Moving Image */}
      <MotionImage
        styleProps={{ y: yTransform }}
        className="hidden lg:block absolute bottom-[6rem] left-[20px]"
        src="/images/Abstract Shape 81 (white on black).png"
        alt="Moving Abstract Shape"
        size="w-72 h-72"
      />

      {/* Text Section */}
      <div className="h-screen  flex justify-center items-center">
        <div className="text-white text-center">
          {["Creative", "Front-end", "&", "backend", "developer"].map(
            (word, idx) => (
              <span key={idx} className="text-custom block lg:text-custom2">
                {word}
              </span>
            )
          )}
        </div>
      </div>
    </main>
  );
}

export default First;
