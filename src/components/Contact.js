import React from "react";

const Contact = () => {
  return (
    <>
      <div
        name="contact"
        className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
      >
        <form
          method="POST"
          action="https://getform.io/f/89b9d27d-1d7d-40cc-9f1b-e78c288cafe1"
          className="flex flex-col max-w-[600px] w-full"
        >
          <div className="max-w-[1240px] mx-auto px-12 flex flex-col items-center justify-center m-h-screen">
            <p className="text-gray-300 text-4xl font-bold inline border-b-4 border-blue-600">
              Contact
            </p>
            <p className="text-gray-300 font-bold text-center py-4">
              Hit me up on my email -{" "}
              <a href="https://gmail.com" target={"_blank"}>
                markangelomagnayon65@gmail.com
              </a>
            </p>
          </div>

          <input
            className="bg-transparent p-2"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="my-4 p-2 bg-[#f2f2f2]"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-[#f2f2f2] p-2"
            name="message"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button className="text-white border-2 rounded-xl hover:bg-blue-600 hover:border-blue-600 px-4 py-3 my-8 mx-auto flex items-center">
            Let's Collaborate
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
