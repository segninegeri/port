"use client";
import React from "react";
import Magnet from "@/common/Magnetic";
import styles from "./page.module.scss";
import Image from "next/image";
import ScrollHover from "@/common/ScrollHover/index";
import style from "@/common/ScrollHover/style.module.css";

// SocialLinks Component
const SocialLinks = ({ links }) => (
  <div className="flex justify-around mb-12">
    {links.map((link) => (
      <Magnet key={link.href}>
        <div className={`${styles.imageContainer}`}>
          <a href={link.href} target="_blank" rel="noopener noreferrer">
            <Image src={link.src} alt={link.alt} fill />
          </a>
        </div>
      </Magnet>
    ))}
  </div>
);

// SectionHeader Component
const SectionHeader = ({ title }) => (
  <h1 className="text-3xl flex items-center justify-center mb-6">
    <svg width="150px" height="2" xmlns="http://www.w3.org/2000/svg">
      <line x1="0" y1="1" x2="150" y2="1" stroke="white" strokeWidth="2" />
    </svg>
    <span className="mx-4">{title}</span>
    <svg width="150px" height="2" xmlns="http://www.w3.org/2000/svg">
      <line x1="0" y1="1" x2="150" y2="1" stroke="white" strokeWidth="2" />
    </svg>
  </h1>
);

// Info Component
const Info = () => {
  const socialLinks = [
    {
      src: "/images/socials/telegram.svg",
      alt: "Telegram",
      href: "https://t.me/theglitch2025",
    },
    {
      src: "/images/socials/instagram.svg",
      alt: "Instagram",
      href: "https://www.instagram.com/jalalgirma",
    },
    {
      src: "/images/socials/linkedin.svg",
      alt: "LinkedIn",
      href: "https://www.linkedin.com/in/jalal-girma-663090340/",
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
    <div className="flex flex-col justify-between bg-black pt-44 px-12 text-white h-screen">
      {/* Contact Details Section */}
      <div className="text-2xl leading-10">
        <SectionHeader title="Contact Details" />

        <div>
          <ScrollHover>
            <a
              href="mailto:falalgirma33@gmail.com"
              className={`${style.text} font-bold  bg-black text-xl text-white hover:bg-white hover:text-black`}
            >
              <p>Email</p>
              <p>jalalgirma.dev@gmail.com</p>
              <span
                className={`${style.span} font-bold  bg-white text-xl text-black`}
              >
                100% chance I read it
              </span>
            </a>
          </ScrollHover>
        </div>

        <div>
          <ScrollHover>
            <a
              href="tel:+251917643045"
              className={`${style.text} font-bold   bg-black text-xl text-white hover:bg-white hover:text-black`}
            >
              <p>Give Me a Call Anytime</p>
              <p>+251 917 643 045</p>
              <span
                className={`${style.span} font-bold  bg-white text-xl text-black`}
              >
                100% chance I pick up
              </span>
            </a>
          </ScrollHover>
        </div>
      </div>

      {/* Socials Section */}
      <SectionHeader title="Socials" />
      <SocialLinks links={socialLinks} />

      {/* Work Together Section */}
      <div className="overflow-y-hidden">
        <h1 className="text-custom2 p-0">Let's work</h1>
        <h1 className="text-custom2 text-right">together</h1>
      </div>
    </div>
  );
};

export default Info;
