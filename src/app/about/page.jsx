"use client";
import React, { useState, useEffect } from "react";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
// import Fourth from './components/Fourth'
import Contact from "../../components/Contact/index";

function Index() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <div className="pt-24 bg-black font-ablition">
      <First />
      <Second />
      <Third />
      <Contact />
    </div>
  );
}

export default Index;
