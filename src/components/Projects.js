import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiRadio } from "react-icons/fi";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full bg-[#0a192f] text-gray-300 py-28 px-4 "
    >
      <div
        className="max-w-[1240px] mx-auto mt-[20rem] md:mt-0 px-12 flex flex-col items-center justify-center h-full "
        data-aos="slide-up"
      >
        <p className="text-4xl mb-8 font-bold inline border-b-4 border-blue-600">
          Projects
        </p>
      </div>
      <div className="w-[80%] mx-auto mb-8 grid grid-cols sm:grid-cols-3 gap-4 text-center  py-8">
        {/* -- Project 1 -- */}
        <div
          className="rounded-lg text-center bg-transparent max-w-sm"
          data-aos="slide-right"
        >
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
                href={"https://github.com/markuscoding/portfolio-markangelo"}
                target={"_blank"}
                rel="noopener noreferrer"
                className="inline-block px-10 py-3 bg-blue-600 text-white font-medium text-xl leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                <FaGithub />
              </a>
              <a
                href={"https://markangelo.netlify.app/"}
                target={"_blank"}
                rel="noopener noreferrer"
                className="inline-block px-10 py-3 bg-blue-600 text-white font-medium text-xl leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                <FiRadio />
              </a>
            </div>
          </div>
        </div>
        {/* -- Project 2 -- */}
        <div
          className="rounded-lg text-center bg-transparent max-w-sm"
          data-aos="slide-up"
        >
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
                href={"https://github.com/markuscoding/project-explore-isa"}
                target={"_blank"}
                rel="noopener noreferrer"
                className="inline-block px-10 py-3 bg-blue-600 text-white font-medium text-xl leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                <FaGithub />
              </a>
              <a
                href={"https://explore-isa.netlify.app/"}
                target={"_blank"}
                rel="noopener noreferrer"
                className="inline-block px-10 py-3 bg-blue-600 text-white font-medium text-xl leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                <FiRadio />
              </a>
            </div>
          </div>
        </div>
        {/* -- Project 3 -- */}
        <div
          className="rounded-lg center bg-transparent max-w-sm"
          data-aos="slide-left"
        >
          <img
            src="./images/project-2.jpg"
            alt=""
            className="hover:scale-105 duration-200 rounded-xl"
          />
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-2">BMI Calculator</h1>
            <p className="text-xl mb-4">
              I use Tailwindcss and React js on building this small project
            </p>
            <div className="flex items-center justify-between mt-5">
              <a
                href={"https://github.com/markuscoding/bmi-calculator-app"}
                target={"_blank"}
                rel="noopener noreferrer"
                className="inline-block px-10 py-3 bg-blue-600 text-white font-medium text-xl leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                <FaGithub />
              </a>
              <a
                href={"https://project-bmi-app-calculator.netlify.app/"}
                target={"_blank"}
                rel="noopener noreferrer"
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
