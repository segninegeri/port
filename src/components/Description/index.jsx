"use client";
import Image from "next/image";
import React from "react";
import Text from "./Tools/Index";
import styles from "./style.module.scss";
function Index() {
  return (
    <div className="font-ablition h-screen border-b text-white text-4xl flex items-center justify-center px-12">
      <div
        data-scroll
        data-scroll-speed={0.1}
        className="hidden md:block relative -top-96 text-5xl left-32 z-10 font-extrabold"
      >
        'wanna know <br />
        about me?{" "}
      </div>
      <div className="hidden md:flex h-full  w-1/4 items-center relative bottom-24 ">
        <div
          data-scroll
          data-scroll-speed={1}
          className={`${styles.imageContainer}  h-3/4 flex-1 `}
        >
          <Image
            src={"/images/photo_2024-11-24_07-10-34.jpg"}
            alt=""
            fill
            className="object-cover "
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
