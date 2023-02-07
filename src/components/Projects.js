import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiRadio } from "react-icons/fi";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full bg-[#0a192f] text-gray-300 md:py-[15rem] py-[18rem] px-16 "
    >
      <div
        className="max-w-[1440px]
         mx-auto px-12 flex md:mt-0 mt-[10rem] flex-col items-center justify-center h-full"
      >
        <p className="text-4xl mb-8 font-bold inline border-b-4 border-blue-600">
          Projects
        </p>
      </div>
      <div className="max-w-[1000px] mt-8 mx-auto grid grid-cols sm:grid-cols-3 gap-12 text-center ">
        {/* -- Project 1 -- */}
        <div className="rounded-lg text-center bg-transparent max-w-sm">
          <img
            src="./images/portfolio.jpg"
            alt=""
            className="hover:scale-105 duration-200 rounded-xl"
          />
          <div className="p-6 ">
            <h1 className="text-2xl font-bold mb-2">My Portfolio</h1>
            <p className="text-xl mb-4">
              Still in progress adding some features and polishing the code 🏗️
            </p>
            <div className="flex items-center justify-between mt-5">
              <a
                href={"https://github.com/markuscoding/react-travel-web"}
                target={"_blank"}
                className="inline-block px-10 py-3 bg-blue-600 text-white font-medium text-xl leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                <FaGithub />
              </a>
              <a
                href={"https://markuscoding.github.io/react-travel-web/"}
                target={"_blank"}
                className="inline-block px-10 py-3 bg-blue-600 text-white font-medium text-xl leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                <FiRadio />
              </a>
            </div>
          </div>
        </div>
        {/* -- Project 2 -- */}
        <div className="rounded-lg text-center bg-transparent max-w-sm">
          <img
            src="./images/project-1.jpg"
            alt=""
            className="hover:scale-105 duration-200 rounded-xl"
          />
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-2">Project Landing Page</h1>
            <p className="text-xl mb-4">
              Still in progress adding some features and polishing the code 🏗️
            </p>
            <div className="flex items-center justify-between mt-5">
              <a
                href={"https://github.com/markuscoding/react-travel-web"}
                target={"_blank"}
                className="inline-block px-10 py-3 bg-blue-600 text-white font-medium text-xl leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                <FaGithub />
              </a>
              <a
                href={"https://markuscoding.github.io/react-travel-web/"}
                target={"_blank"}
                className="inline-block px-10 py-3 bg-blue-600 text-white font-medium text-xl leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                <FiRadio />
              </a>
            </div>
          </div>
        </div>
        {/* -- Project 3 -- */}
        <div className="rounded-lg center bg-transparent max-w-sm">
          <img
            src="./images/project-2.jpg"
            alt=""
            className="hover:scale-105 duration-200 rounded-xl"
          />
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-2">BMI Calculator</h1>
            <p className="text-xl mb-4">
              I use Tailwindcss and React js on building this small and simple
              project
            </p>
            <div className="flex items-center justify-between mt-5">
              <a
                href={"https://github.com/markuscoding/bmi-calculator-app"}
                target={"_blank"}
                className="inline-block px-10 py-3 bg-blue-600 text-white font-medium text-xl leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                <FaGithub />
              </a>
              <a
                href={"https://project-bmi-app-calculator.netlify.app/"}
                target={"_blank"}
                className="inline-block px-10 py-3 bg-blue-600 text-white font-medium text-xl leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                <FiRadio />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
