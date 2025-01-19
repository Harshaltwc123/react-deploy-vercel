import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons
import logo from "../assets/logo.png";
import "../Header.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-between px-2 py-3 sm:px-6 md:px-6 lg:px-10 xl:px-10 2xl:px-14 bg-white shadow-md fixed top-0 left-0 right-0 z-50">
     
      <div className="flex items-center gap-2">
        <img
          src={logo}
          alt="Logo"
          className="h-12 sm:h-12 w-32 sm:w-32 object-contain"
        />
      </div>

     
      <ul className="hidden md:flex md:gap-3 font-[Poppins] text-sm lg:text-base md:items-center">
        <li className="hover:font-medium cursor-pointer flex items-center gap-1">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:font-medium cursor-pointer flex items-center gap-1">
          <Link to="/what-we-offer">What we offer?</Link>
        </li>
        <li className="hover:font-medium cursor-pointer flex items-center gap-1">
          <Link to="/events">Events</Link>
        </li>
        <li className="hover:font-medium cursor-pointer flex items-center gap-1">
          <Link to="/hubnexlabs">HubnexLabs</Link>
        </li>
        <li className="hover:font-medium cursor-pointer flex items-center gap-1">
          <Link to="/get-in-touch">Get in Touch</Link>
        </li>
        <li className="hover:font-medium cursor-pointer flex items-center gap-1">
          <Link to="/about-us">About Us</Link>
        </li>
      </ul>


      <div
        className="md:hidden flex items-center justify-center p-2 rounded bg-gray-200 cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <FaTimes className="text-gray-600 text-xl" />
        ) : (
          <FaBars className="text-gray-600 text-xl" />
        )}
      </div>

    
      <button className="hidden md:inline-block py-2 px-4 rounded bg-black text-white text-sm lg:text-base">
        <Link to="/apply-now">Apply Now</Link>
      </button>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden z-50">
          <ul className="flex flex-col gap-4 px-6 py-4 font-[Poppins] text-gray-800">
            <li className="hover:font-medium cursor-pointer flex items-center gap-1">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:font-medium cursor-pointer flex items-center gap-1">
              <Link to="/what-we-offer">What we offer?</Link>
            </li>
            <li className="hover:font-medium cursor-pointer flex items-center gap-1">
              <Link to="/events">Events</Link>
            </li>
            <li className="hover:font-medium cursor-pointer flex items-center gap-1">
              <Link to="/hubnexlabs">HubnexLabs</Link>
            </li>
            <li className="hover:font-medium cursor-pointer flex items-center gap-1">
              <Link to="/get-in-touch">Get in Touch</Link>
            </li>
            <li className="hover:font-medium cursor-pointer flex items-center gap-1">
              <Link to="/about-us">About Us</Link>
            </li>
            <button className="py-2 px-4 rounded bg-black text-white text-sm">
              <Link to="/apply-now">Apply Now</Link>
            </button>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
