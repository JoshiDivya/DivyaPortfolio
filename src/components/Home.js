import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-500">Hi, My name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Divya Joshi
        </h1>
        <h2 className="text-3xl sm:text-5xl font-bold text-[#8892b0]">
          Full Stack developer
        </h2>
        <p className="text-2xl text-[#8892b0] py-4 max-w-[700px]">
          I am a full stack developer specializing in building (and occasionally
          design) exceptional digital experience. Currently I am focusing on
          building Responsive web application.
        </p>
        <div>
          <button className=" group text-white border-2 flex items-center px-6 py-3 my-2 hover:bg-pink-500 hover:border-pink-500 ">
          <Link to="work" smooth={true} duration={500}>
          View work
        </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
