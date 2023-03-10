import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className='w-full h-[80px] flex justify-between items-center py-8 px-4 bg-[#0a192f] text-gray-300"'>
        <div className="mx-auto">
          <div
            className="flex items-center justify-center
          text-gray-300  gap-5 text-4xl mb-5 cursor-pointer"
          >
            <a
              href="https://www.linkedin.com/in/mark-angelo-magnayon-5911251b2/"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a href="https://github.com/markuscoding" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/MarkMagnayon"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
          <div className=" text-gray-300 text-center font-bold p4">
            {" "}
            2023 | Developed and Designed by Mark Angelo
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
