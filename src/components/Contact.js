import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center text-gray-300 items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/084f17a0-c0e8-465d-9531-97b342977da8"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="py-8">
          <p className="text-4xl inline font-bold border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or shoot me an email -
            divyajoshics09@gmail.com
          </p>
        </div>
        <input
          className="p-2 bg-[#ccd6f6]"
          type="text"
          placeholder="name"
          name="name"
        ></input>
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="email"
          name="email"
        ></input>
        <textarea
          className="bg-[#ccd6f6] p-2"
          type="text"
          rows="10"
          placeholder="message"
          name="Message"
        ></textarea>
        <button
          type="submit"
          className="text-2xl my-8 mx-auto  px-4 py-3 flex flex-auto items-center border-2 hover:text-pink-600 hover:border-white-600 text-white"
        >
          Let's collabarate
        </button>
      </form>
    </div>
  );
};

export default Contact;
