import React from "react";
import resume from "../assets/SenuthDeSilva Cv.pdf";
import PROFILE_PIC from "../assets/images/profilepic.jpg";
import ICON_1 from "../assets/images/icon-1.png";
import ICON_2 from "../assets/images/icon-2.png";
import ICON_3 from "../assets/images/icon-3.png";
import ICON_4 from "../assets/images/icon-4.png";
import { STATS } from "../utils/data";
import StatInfoCard from "../components/StatInfoCard";

const Hero = () => {
  return (
    <section id="hero" className="container mx-auto px-8">
      <div className="flex flex-col lg:flex-row gap-14 items-center justify-between mt-[80px]">
        <div className="order-2 lg:order-1 text-center lg:text-left mt-16 lg:mt-0">
          <h3 className="text-xl lg:text-2xl font-medium text-black">👋 Hi, I’m Senuth De Silva</h3>
          <h1 className="w-full lg:w-[480px] text-4xl lg:text-5xl font-bold leading-[50px] lg:leading-[60px] mt-3 bg-gradient-primary bg-clip-text text-transparent">Building Scalable & User Centric Web Apps</h1>

          <p className="w-full lg:w-[500px] text-sm lg:text-base mt-4">
            I’m a passionate Ai/ML,Software Engineer,Full Stack Frontend Developer crafting responsive,
            accessible, and dynamic web experiences using React, Node.js, and
            TailwindCSS.
          </p>

          <div className="flex justify-center lg:justify-start gap-4 md:gap-8 mt-6">
            <a href="https://github.com/SenuthDeSilva" target="_blank" rel="noopener noreferrer" className="flex-1 md:flex-none action-btn-outline btn-scale-anim">View My Work</a>
            <a href={resume} download="SenuthDeSilva Cv.pdf" className="flex-1 md:flex-none action-btn btn-scale-anim">Download Resume</a>
          </div>
        </div>

        <div className="w-[300px] md:w-[370px] h-[350px] md:h-[428px] bg-orange-100/50 rounded-3xl relative order-1 lg:order-2">
          <img src={PROFILE_PIC} alt="Profile Pic" className="profile-pic" />

          <img
            src={ICON_1}
            alt="Icon 1"
            className="icon-img -left-10 bottom-20 rotate-[1.75deg]"
          />

          <img
            src={ICON_2}
            alt="Icon 2"
            className="icon-img left-5 md:left-10 -bottom-2 rotate-[2.75deg]"
          />

          <img
            src={ICON_3}
            alt="Icon 3"
            className="icon-img left-[110px] md:left-[150px] -bottom-6 rotate-[3.75deg]"
          />

          <img
            src={ICON_4}
            alt="Icon 4"
            className="icon-img left-[200px] md:left-[255px] -bottom-9 md:-bottom-10 rotate-[4.75deg]"
          />
        </div>
      </div>

      <div className="flex gap-12 mt-16 md:mt-24 flex-wrap">
        {STATS.map((item) => (
          <StatInfoCard key={item.id} count={item.count} label={item.label} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
