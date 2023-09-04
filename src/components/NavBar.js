import React, { useState } from "react";
import { FaBars, FaTimes ,FaGithub,FaLinkedin} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { Link } from "react-scroll";
import logo from '../assets/logo.png'
import logo1 from '../assets/logo1.png'


const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[100px] items-center flex justify-between bg-[#0a192f] text-gray-300">
      <div>
        <img src={logo1} alt="Logo" style={{ width: "80px",height:'80px' }}></img>
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li> <Link  to="home"  smooth={true} duration={500}>
          Home
        </Link></li>
        <li> <Link  to="about"  smooth={true} duration={500}>
          About
        </Link></li>
        <li> <Link  to="skills"  smooth={true} duration={500}>
          Skills
        </Link></li>
        <li> <Link  to="work"  smooth={true} duration={500}>
          Work
        </Link></li>
        <li> <Link  to="contact"  smooth={true} duration={500}>
          Contact
        </Link></li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleNav} className="md:hidden z-10">
       {!nav ?  <FaBars /> : <FaTimes/>}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 flex flex-col justify-center items-center w-full h-screen bg-[#0a192f] "
        }
      >
        <li className="py-6 text-2xl hover:text-pink-500"> <Link className="hover:text-pink-500" onClick={handleNav}  to="home"  smooth={true} duration={500}>
          Home
        </Link></li>
        <li className="py-6 text-2xl hover:bg-pink-300"> <Link onClick={handleNav}   to="about"  smooth={true} duration={500}>
          About
        </Link></li>
        <li className="py-6 text-2xl"> <Link onClick={handleNav}   to="skills"  smooth={true} duration={500}>
          Skills
        </Link></li>
        <li className="py-6 text-2xl"> <Link onClick={handleNav}   to="work"  smooth={true} duration={500}>
          Work
        </Link></li>
        <li className="py-6 text-2xl"> <Link onClick={handleNav}   to="contact"  smooth={true} duration={500}>
          Contact
        </Link></li>
      </ul>

{/* social media links */}
      <div className="hidden lg:flex fixed flex-col top-[40%] left-0">
        <ul>
            <li className="flex w-[165px] h-[40px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600"> 
                <a className="flex justify-between items-center w-full text-gray-300" href="/">
                    linkedin  <FaLinkedin size={30}/>
                </a>
            </li>
            <li className="flex w-[165px] h-[40px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]"> 
                <a className="flex justify-between items-center w-full text-gray-300" href="/">
                    github  <FaGithub size={30}/>
                </a>
            </li>
            <li className="flex w-[165px] h-[40px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#65c2b0]"> 
                <a className="flex justify-between items-center w-full text-gray-300" href="/">
                    Email  <HiOutlineMail size={30}/>
                </a>
            </li>
            <li className="flex w-[165px] h-[40px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]"> 
                <a className="flex justify-between items-center w-full text-gray-300" href="/">
                    Resume  <BsFillPersonLinesFill size={30}/>
                </a>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
