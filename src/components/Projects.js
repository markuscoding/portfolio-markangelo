import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiRadio } from "react-icons/fi";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full bg-[#0a192f] text-gray-300 py-28 px-4 "
    >
      <div className="max-w-[1240px] mx-auto mt-[20rem] md:mt-0 px-12 flex flex-col items-center justify-center h-full ">
        <p className="text-4xl mb-8 font-bold inline border-b-4 border-blue-600">
          Projects
        </p>
        <div className="max-w-[1220px] gap-[10rem] py-[6rem] mx-auto grid md:grid-cols-2">
          <img
            className="w-[600px]  mx-auto my-4 rounded-3xl"
            src="./images/Project1.jpg"
            alt="/"
          />
          <div
            className="flex flex-col justify-center text-center"
            data-aos="slide-left"
          >
            <h1 className="md:text-5xl sm:text-3xl text-2xl font-bold py-2 px-6 bg-gradient-to-r from-blue-600 via-green-600 to-indigo-400 inline-block text-transparent bg-clip-text">
              My Portfolio Project.
            </h1>
            <p className="text-center py-2 text-xl">
              I built this portfolio project using React, a popular JavaScript
              library for building user interfaces, and Tailwind CSS, a
              utility-first CSS framework that helps streamline the styling
              process. By leveraging the power of React and Tailwind CSS, I was
              able to create a sleek and modern portfolio that showcases my
              skills and projects in an organized and visually appealing way.
              Whether you're a recruiter, employer, or fellow developer, I hope
              you find my portfolio informative and engaging!
            </p>
            <div className="flex items-center justify-center gap-8 mt-5">
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
        <div className="max-w-[1220px] gap-[10rem] py-[6rem] mx-auto grid md:grid-cols-2">
          <div
            className="flex flex-col justify-center text-center"
            data-aos="slide-right"
          >
            <h1 className="md:text-5xl sm:text-3xl text-2xl font-bold py-2 px-6 bg-gradient-to-r from-blue-600 via-green-600 to-indigo-400 inline-block text-transparent bg-clip-text">
              International Student Ally Project Landing Page
            </h1>
            <p className="text-center py-2 text-lg">
              I designed and developed this ISA Project Landing Page using
              React, Tailwind CSS, and HTML to give aspiring international
              students the opportunity to engage with the project and learn more
              about how to find allies in their academic journey. With a sleek
              and user-friendly design, this landing page provides visitors with
              information about the project's mission, values, and resources, as
              well as ways to get involved and contribute to the cause. As a
              developer and advocate for international students, I am excited to
              use my skills to create meaningful change and support this
              important cause.
            </p>
            <div className="flex items-center justify-center gap-8 mt-5">
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
          <img
            className="w-[630px] h-[400px] mx-auto my-4 rounded-3xl"
            src="./images/project-1.jpg"
            alt="/"
          />
        </div>
        <div className="max-w-[1220px] gap-[10rem] py-[6rem] mx-auto grid md:grid-cols-2">
          <img
            className="w-[630px] h-[400px] mx-auto my-4 rounded-3xl"
            src="./images/project-2.jpg"
            alt="/"
          />
          <div
            className="flex flex-col justify-center text-center"
            data-aos="slide-left"
          >
            <h1 className="md:text-5xl sm:text-3xl text-2xl font-bold py-2 px-6 bg-gradient-to-r from-blue-600 via-green-600 to-indigo-400 inline-block text-transparent bg-clip-text">
              BMI Calculator Project
            </h1>
            <p className="text-center py-2 text-lg">
              I created this BMI Calculator Project using React, Tailwind CSS,
              and HTML to provide users with a quick and easy way to determine
              their body mass index (BMI) and assess their overall health
              status. With a clean and intuitive interface, this calculator
              takes the user's height and weight inputs and calculates their
              BMI, providing them with personalized feedback on their health
              status and potential risk factors. By leveraging the power of
              React and Tailwind CSS, I was able to create a responsive and
              accessible tool that empowers users to take control of their
              health and make informed decisions about their lifestyle choices.
            </p>
            <div className="flex items-center justify-center gap-8 mt-5">
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
