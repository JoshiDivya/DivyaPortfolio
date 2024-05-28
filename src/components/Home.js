import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Logo from "../assets/profile.jpg";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* container */}

      <div className="max-w-[1000px] mx-auto px-8 flex h-full">
        {/* container1 */}
        <div className="w-1/2 flex-shrink-0 flex flex-col justify-center">
          <p className="text-[#8892b0] text-xl">Hi, My name is</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
            Divya Joshi
          </h1>
          <h2 className="text-sm py-2 sm:text-lg font-bold text-[#8892b0]">
          Bridging Ideas and Execution Through Expert Design and Development.
          </h2>
          <p className="text-2xl text-[#8892b0] py-3 max-w-[700px]">
            I am a full stack developer. I am dedicated to turning ideas into
            innovative web applications. Explore my latest projects and
            articles, showcasing my expertise in Next.js and web development.
          </p>
          <div>
            <button className=" group text-white border-2 flex items-center px-6 py-3 my-2 hover:text-pink-500 hover:border-white-500 ">
              <Link to="work" smooth={true} duration={500}>
                View work
              </Link>
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </div>
        </div>
        {/* container2 */}
        <div className="w-1/2 flex-shrink-0 flex flex-col justify-center">
          <div className="rounded-full overflow-hidden mx-auto h-64 w-64 bg-gray-300 flex items-center justify-center">
            <img src={Logo}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
