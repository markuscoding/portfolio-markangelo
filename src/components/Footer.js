import React from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className='w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300"'>
        <div className="mx-auto">
          <div
            className="flex items-center justify-center
          text-gray-300  gap-5 text-4xl mb-5 cursor-pointer"
          >
            <FaFacebook />
            <FaLinkedin />
            <FaGithub />
            <FaTwitter />
          </div>
          <div className=" text-gray-300 text-center font-bold p4">
            {" "}
            © 2023 Copyright: Mark Angelo
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
