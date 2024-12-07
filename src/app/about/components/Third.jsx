import React from "react";
import style from "./second.module.scss";

const ServiceCard = ({ number, title, icon, description }) => (
  <div className="text-center">
    <p className="text-4xl text-white font-bold mb-6">{number}</p>
    <hr className="border-gray-300 mb-12" />
    <h3 className="text-6xl font-bold text-white mb-8">
      {icon} {title}
    </h3>
    <p className="text-white text-3xl leading-normal font-bold">{description}</p>
  </div>
);

function Third() {
  return (
    <div className="py-16 px-8">
      {/* Section Title */}
      <h2 className="text-4xl md:text-7xl font-bold text-white text-center mb-16">
        I can help you with ...
      </h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <ServiceCard
          number="01"
          title="Frontend"
          icon="✦"
          description="I create responsive, dynamic websites using modern frontend technologies like Next.js and React.js. My expertise in animation tools like GSAP and scroll-triggered effects adds smooth, engaging interactions that enhance user experience and make websites come alive."
        />

        <ServiceCard
          number="02"
          title="Backend"
          icon="✦"
          description="I specialize in building secure, scalable backend systems using the MERN stack (MongoDB, Express.js, React.js, Node.js) and Next.js. With a strong focus on user authentication and API development, I ensure smooth user flows, secure data handling, and reliable performance."
        />

        <ServiceCard
          number="03"
          title="The Full Package"
          icon="✦"
          description="I offer complete web solutions, integrating both frontend and backend for a seamless user experience. Whether it's building the architecture or deploying the final product, I ensure high-quality, performant websites that meet every need."
        />
      </div>

      <div className="mt-12 text-center">
        <h2
          className={`${style.stroke} text-white text-5xl md:text-7xl font-bold leading-normal mb-6`}
        >
          You bring the vision, <br /> I help you stand out.
        </h2>
      </div>
    </div>
  );
}

export default Third;
