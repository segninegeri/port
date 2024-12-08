"use client";
import Image from "next/image";
import React from "react";
import Text from "./Tools/Index";
import styles from "./style.module.scss";
function Index() {
  return (
    <div className="font-ablition h-screen text-white text-4xl flex items-center justify-center px-12">
      <div
        data-scroll
        data-scroll-speed={0.1}
        className="hidden md:block relative -top-96 text-5xl left-32 z-10 font-extrabold"
      >
        &apos;wanna know <br />
        about me?{" "}
      </div>
      <div className="hidden md:flex h-full  w-1/3 items-center relative bottom-24 ">
        <div
          data-scroll
          data-scroll-speed={1}
          className={`${styles.imageContainer}  h-3/4 flex-1 `}
        >
          <Image
            src={"/images/main.webp"}
            alt=""
            fill
            className="object-cover transform rotate-[4deg]"
          />
        </div>
      </div>
      <div
        data-scroll
        data-scroll-speed={1}
        className="md:w-1/2 relative md:self-center mx-6 "
      >
        <Text />
      </div>
    </div>
  );
}

export default Index;
