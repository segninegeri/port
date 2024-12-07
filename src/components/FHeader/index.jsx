"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import { usePathname } from "next/navigation";
import TransitionLink from "./TransitionLink";
import Jalal from "./Logo/Jalal";

export default function Index() {
  const header = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  return (
    <>
      <div ref={header} className={`${styles.header} font-ablition`}>
        <div className={styles.logo}>
          <TransitionLink href="/" label={<Jalal />} />
        </div>
        <div className={styles.nav}>
          <div className={styles.line}>
            <TransitionLink href="/about" label="About" />
          </div>
          <div className={styles.line}>
            <TransitionLink href="/contact" label="Contact" />
          </div>
        </div>
      </div>
    </>
  );
}
