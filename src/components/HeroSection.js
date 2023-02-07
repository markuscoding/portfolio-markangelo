import React, { useEffect } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Aos from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div name="home" className="flex flex-col w-full h-screen bg-[#0a192f] ">
      {/* Container */}
      <div
        className="relative text-gray-300 max-w-[1000px]  mx-auto px-12 flex flex-col items-center justify-center h-full"
        data-aos="slide-up"
      >
        <div className="absolute top-[330px] left-[20px] md:left-[90px] md:top-[300px]">
          <img
            className="h-10 md:h-20"
            src="./svgs/css3.svg"
            alt="logo"
            data-aos="slide-right"
          />
        </div>

        <div className="absolute top-[120px] left-[60px] md:left-[250px] md:top-[150px] ">
          <img
            className="h-10 md:h-20"
            src="./svgs/code.svg"
            alt="logo"
            data-aos="slide-right"
          />
        </div>

        <div className="absolute top-[110px] right-[70px] md:right-[240px] md:top-[480px] ">
          <img
            className="h-10 md:h-20 "
            src="./svgs/html5.svg"
            alt="logo"
            data-aos="slide-left"
          />
        </div>
        <div className="absolute top-[300px] right-[20px] md:right-[240px] md:top-[155px] ">
          <img
            className="h-10 md:h-20 "
            src="./svgs/react.svg"
            alt="logo"
            data-aos="slide-left"
          />
        </div>
        <div className="absolute top-[480px] right-[80px]  md:right-[90px] md:top-[280px]">
          <img
            className="h-10 md:h-20"
            src="./svgs/githublogo.svg"
            alt="logo"
            data-aos="slide-left"
          />
        </div>
        <div className="absolute top-[560px] left-[80px] md:left-[255px] md:top-[500px] ">
          <img
            className="h-10 md:h-20"
            src="./svgs/js.svg"
            alt="logo"
            data-aos="slide-right"
          />
        </div>
        <p className="text-gray-300 font-bold uppercase">Hi, my name is</p>
        <h1 className="text-5xl sm:text-7xl font-bold bg-gradient-to-r from-blue-600 via-green-600 to-indigo-400 inline-block text-transparent bg-clip-text">
          Mark Angelo
        </h1>
        <h2
          className=" text-center text-5xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-300 inline-block text-transparent bg-clip-text
        md:text-5xl md:mt-4  "
        >
          I'm a Front End Developer
        </h2>
        <p className="text-center mt-4 mb-8 ">
          As a front-end web developer, I am passionate about creating visually
          appealing and user-friendly web applications.I am constantly learning
          new skills and staying up-to-date with the latest trends and best
          practices in the industry.
        </p>
        <div>
          <button className="text-white group border-2 rounded-xl mt-5 px-6 py-3 my-2 flex items-center hover:bg-blue-600 hover:border-blue-300">
            View Work
            <span className="group-hover:rotate-90 duration-500">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
