"use client";
import Image from "next/image";
import React from "react";
import Text from "./Tools/Index";
function Index() {
  return (
    <div className=" h-[80vh] bg-black flex items-center">
      <div
        data-scroll
        data-scroll-speed={0.3}
        className="hidden md:flex h-96 flex-1  items-center justify-end relative -top-24 z-10"
      >
        <p className="relative -right-8 text-4xl z-30 text-white text-center ">
          Wanna know <br /> 'bout me?
        </p>
      </div>
      <div
        data-scroll
        data-scroll-speed={0.5}
        className="hidden md:block h-96 flex-1 relative"
      >
        <Image
          data-scroll
          data-scroll-speed={0.1}
          src="/images/photo_2024-11-24_07-10-34.jpg"
          alt="Office Studio"
          layout="fill"
          objectFit="cover"
          className="h-full "
        />
      </div>
      <div
        data-scroll
        data-scroll-speed={0.5}
        className="h-96 md:w-1/2  md:self-center flex md:items-end items-center text-white text-xl md:mb-48 mx-12"
      >
        <Text />
      </div>
    </div>
  );
}

export default Index;
