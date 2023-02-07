import React from "react";

const Skills = () => {
  return (
    <div
      name="skills"
      className="flex flex-col w-full h-screen bg-[#0a192f] text-gray-300 py-8 px-4"
    >
      <div
        className="max-w-[1240px] mx-auto mt-14 px-12 flex flex-col items-center justify-center h-full "
        data-aos="slide-up"
      >
        <p className="text-4xl font-bold inline border-b-4 border-blue-600">
          My Skills
        </p>
        <p className="mt-10 mb-10 font-bold">
          These are the technologies i've worked with
        </p>
      </div>
      <div
        className="w-[80%] mx-auto mb-8 grid grid-cols-2 sm:grid-cols-3 gap-4 text-center  py-8"
        data-aos="slide-up"
      >
        <div className="hover:scale-110 duration-500">
          <img
            className="w-20 mx-auto"
            src="./images/html.png"
            alt="HTML icon"
          />
          <p className="my-4">HTML5</p>
          <p className="my-4">
            I used HTML5 for structuring the content of the webpage
          </p>
        </div>
        <div className=" hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src="./images/css.png" alt="css icon" />
          <p className="my-4">CSS</p>
          <p className="my-4">
            I used CSS3 for designing the content of the webpage
          </p>
        </div>
        <div className=" hover:scale-110 duration-500">
          <img
            className="w-20 mx-auto"
            src="./images/javascript.png"
            alt="javascript icon"
          />
          <p className="my-4">JAVASCRIPT</p>
          <p className="my-4">
            I used Javascript to add an interactive on the webpage
          </p>
        </div>
        <div className="hover:scale-110 duration-500">
          <img
            className="w-20 mx-auto"
            src="./images/github.png"
            alt="github icon"
          />
          <p className="my-4">GITHUB</p>
          <p className="my-4">
            I used Github to track the changes of my code easily
          </p>
        </div>
        <div className="hover:scale-110 duration-500">
          <img
            className="w-20 mx-auto"
            src="./images/react.png"
            alt="HTML icon"
          />
          <p className="my-4">REACT</p>
          <p className="my-4">
            I used React framework to develop a webpage easily
          </p>
        </div>
        <div className="hover:scale-110 duration-500">
          <img
            className="w-20 mx-auto"
            src="./images/tailwind.png"
            alt="HTML icon"
          />
          <p className="my-4">TAILWIND CSS</p>
          <p className="my-4">
            I used Tailwindcss framework to design a webpage easily
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
