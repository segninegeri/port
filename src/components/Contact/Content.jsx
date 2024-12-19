import React from "react";
import Footer from "../FHeader/Footer";
import Image from "next/image";
import styles from "./style.module.scss";
import Button from "../../common/BtnB";
import Magnet from "@/common/Magnetic";
import Link from "next/link";

// SocialLinks Component
const SocialLinks = ({ links }) => (
  <div className="flex justify-around">
    {links.map((link) => (
      <Magnet key={link.href}>
        <div className={`${styles.imageContainer} invert w-16 h-16 my-4`}>
          <a href={link.href} target="_blank" rel="noopener noreferrer">
            <Image src={link.src} alt={link.alt} fill />
          </a>
        </div>
      </Magnet>
    ))}
  </div>
);

// Title Section Component
const TitleSection = ({ title, subtitle, imageSrc }) => (
  <div className="flex gap-4 items-center pointer-events-none">
    <div className={`${styles.imageContainer} ${styles.resImg}`}>
      <Image fill={true} alt={"image"} src={imageSrc}  />
    </div>
    <div>
      <h2 className={`${styles.resText}`}>{title}</h2>
      <h2 className={`${styles.resText}`}>{subtitle}</h2>
    </div>
  </div>
);

// Main Content Component
export default function Content() {
   const socialLinks = [
     {
       src: "/images/socials/telegram.svg",
       alt: "Telegram",
       href: "https://t.me/theglitch2025",
     },
     {
       src: "/images/socials/linkedin.svg",
       alt: "LinkedIn",
       href: "https://www.linkedin.com/in/jalalgirma2025/",
     },
     {
       src: "/images/socials/twitter.svg",
       alt: "Twitter",
       href: "https://twitter.com/jalalgirma",
     },
     {
       src: "/images/socials/github.svg",
       alt: "GitHub",
       href: "https://github.com/jalalgirma",
     },
   ];

  return (
    <div className="bg-white text-black h-full w-full flex flex-col justify-evenly font-ablition overflow-y-hidden">
      <div className={`${styles.pad} font-extrabold`}>
        <TitleSection
          title="Let's work"
          subtitle="together"
          imageSrc="/images/contact.webp"
        />
      </div>

      <div className="px-[9rem] flex flex-row justify-evenly">
        <div>
          <Footer />
        </div>
        <div>
          <Link href={"/contact"}>
            <Button href={"#"}>Get in hand</Button>
          </Link>
        </div>
      </div>

      <footer>
        <SocialLinks links={socialLinks} />
      </footer>
    </div>
  );
}
