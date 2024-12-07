import React from "react";
import ScrollHover from "@/common/ScrollHover/index";
import styles from "@/common/ScrollHover/style.module.css";

function index() {
  return (
    <div className=" flex-col justify-around hidden md:flex">
      <div>
        <ScrollHover>
          <a
            href="mailto:falalgirma33@gmail.com"
            className={`${styles.text} font-extrabold bg-white text-black hover:bg-black hover:text-white`}
          >
            <p>Email</p>
            <p>jalalgirma.dev@gmail.com</p>

            <span className={`${styles.span} font-extrabold max bg-black text-white`}>
              100% chance I read it
            </span>
          </a>
        </ScrollHover>
      </div>

      <div className="mt-4">
        <ScrollHover>
          <div className="flex flex-col">
            <a
              href="tel:+251917643045"
              className={`${styles.text} font-extrabold bg-white text-black hover:bg-black hover:text-white`}
            >
              <p>Phone</p>
              <p>+251 917 643 045</p>
              <span className={`${styles.span} font-extrabold bg-black text-white`}>
                100% chance I pick up
              </span>
            </a>
          </div>
        </ScrollHover>
      </div>
    </div>
  );
}

export default index;
