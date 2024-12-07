import Image from "next/image";
import React from "react";
import style from "./second.module.scss";
function Second() {
  return (
    <div className="px-12 flex gap-12 h-[50vh] my-12 ">
      <div className={`${style.imageContainer} hidden md:block w-[30rem] h-[30rem]`}>
        <Image alt="" fill src={"/images/photo_2024-11-24_07-10-34.jpg"} />
      </div>
      <div className="self-center border-b border-white mb-12">
        <p className="text-white text-3xl  md:text-5xl mb-16 text-justify ">
          For me, coding is not just a career—it’s a craft. I love solving
          complex problems and continuously exploring new technologies to stay
          ahead in this ever-evolving field. I’m driven by curiosity and enjoy
          turning challenges into opportunities to learn and innovate.
        </p>
      </div>
    </div>
  );
}

export default Second;
