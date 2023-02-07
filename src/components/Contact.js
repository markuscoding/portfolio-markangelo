import React from "react";

const Contact = () => {
  return (
    <>
      <div
        name="contact"
        className="w-full h-screen bg-[#0a192f] flex justify-center items-center  p-4"
      >
        <form
          method="POST"
          action="https://getform.io/f/89b9d27d-1d7d-40cc-9f1b-e78c288cafe1"
          className="flex flex-col max-w-[600px] w-full"
        >
          <div className="max-w-[1240px] mx-auto  px-12 flex flex-col items-center justify-center m-h-screen">
            <p className="text-gray-300 text-4xl font-bold inline border-b-4 border-blue-600">
              Contact Me
            </p>
            <p className="text-gray-300 text-sm mb-8 font-bold text-center py-4">
              You can connect with me by filling out the form below. Thankyou so
              much!
            </p>
          </div>

          <input
            className="my-2 p-2 bg-transparent placeholder-white text-xl border border-solid rounded-xl border-b-gray-300 "
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className=" my-2 p-2 bg-transparent placeholder-white text-xl border border-solid rounded-xl border-b-gray-300"
            type="email"
            placeholder="Email"
            name="email"
          />
          <input
            className="my-2 p-2 bg-transparent  placeholder-white text-xl border border-solid rounded-xl border-b-gray-300"
            type="text"
            placeholder="Phone Number"
            name="phone"
          />
          <textarea
            className="my-2 p-2 bg-transparent  placeholder-white text-xl border border-solid rounded-xl border-b-gray-300"
            name="message"
            rows="5"
            placeholder="Message"
          ></textarea>
          <button className="text-white border-2 rounded-xl hover:bg-blue-600 hover:border-blue-600 px-4 py-3 my-4 mx-auto flex items-center">
            Let's Connect
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
