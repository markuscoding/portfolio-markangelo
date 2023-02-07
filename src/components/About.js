import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full bg-[#0a192f] text-gray-300 py-8 px-5">
      <div className="max-w-[1000px] mt-16 mx-auto px-12 flex flex-col items-center justify-center h-full">
        <p className="text-4xl font-bold inline mb-16 border-b-4 border-blue-600">
          About
        </p>
      </div>
      <div className="max-w-[1000px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[300px] mx-auto my-4 rounded-3xl"
          src="./images/hero.jpg"
          alt="/"
          data-aos="slide-right"
        />
        <div
          className="flex flex-col justify-center text-center"
          data-aos="slide-left"
        >
          <h1 className="md:text-5xl sm:text-3xl text-2xl font-bold py-2 px-6 bg-gradient-to-r from-blue-600 via-green-600 to-indigo-400 inline-block text-transparent bg-clip-text">
            Hi. I'm Mark Angelo, nice to meet you. Please take a look around.
          </h1>
          <p>
            I am passionate about building excellent software that improves the
            lives of those around me. I specialize in creating software for
            clients ranging from individuals and small-businesses all the way to
            large enterprise corporations. What would you do if you had a
            software expert available at your fingertips?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
