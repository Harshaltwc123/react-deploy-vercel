
import React from "react";
import "../index.css";
import logo from "../assets/logo.png";
import mail from "../assets/material-symbols_mail.png";
import twitter from "../assets/mdi_twitter.png";
import linkedin from "../assets/mdi_linkedin.png";
import facebook from "../assets/ic_baseline-facebook.png";
import instagram from "../assets/ri_instagram-fill.png";
import phone from "../assets/ph_phone-fill.png";
import "../Header.css";

function Footer() {
  return (
    <div>
      <footer className="overflow-hidden font-[Poppins] bg-gray-100 text-gray-800">
        <div className="footer1 flex flex-wrap justify-between px-10 pt-10 pb-7 gap-10">
          <ul className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <li className="mb-6">
              <img src={logo} alt="Hubnex Logo" className="w-[179px] h-[67px]" />
            </li>
            <li>
              <p className="text-sm">
                Let us help you with an all-in-one startup program and navigate
                the journey from concept to market success.
              </p>
            </li>
            <li>
              <button className="py-2 px-4 bg-[#232323] text-[#FFFFFF] rounded mt-5 text-sm hover:bg-gray-700">
                Apply Now
              </button>
            </li>
          </ul>

          <ul className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6">
            <li className="font-bold mb-2">Learn More</li>
            <li className="text-sm hover:text-gray-600 cursor-pointer">Career</li>
            <li className="text-sm hover:text-gray-600 cursor-pointer">Browse</li>
            <li className="text-sm hover:text-gray-600 cursor-pointer">Service</li>
            <li className="text-sm hover:text-gray-600 cursor-pointer">Events</li>
          </ul>

          <ul className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6">
            <li className="font-bold mb-2">Privacy and Legal</li>
            <li className="text-sm hover:text-gray-600 cursor-pointer">Privacy Policy</li>
            <li className="text-sm hover:text-gray-600 cursor-pointer">Governance</li>
            <li className="text-sm hover:text-gray-600 cursor-pointer">Cookie Notice</li>
          </ul>

          <ul className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <li className="font-bold text-lg mb-3">Connect with Us</li>
            <ul className="flex gap-4 mb-6">
              <li>
                <img
                  src={linkedin}
                  alt="LinkedIn"
                  className="h-10 w-10 hover:opacity-80 cursor-pointer"
                />
              </li>
              <li>
                <img
                  src={instagram}
                  alt="Instagram"
                  className="h-10 w-10 hover:opacity-80 cursor-pointer"
                />
              </li>
              <li>
                <img
                  src={facebook}
                  alt="Facebook"
                  className="h-10 w-10 hover:opacity-80 cursor-pointer"
                />
              </li>
              <li>
                <img
                  src={twitter}
                  alt="Twitter"
                  className="h-10 w-10 hover:opacity-80 cursor-pointer"
                />
              </li>
            </ul>
            <li className="font-bold text-lg mb-4">Get in Touch</li>
            <ul className="flex items-center gap-2 mb-2">
              <li>
                <img src={phone} alt="Phone" className="h-6 w-6" />
              </li>
              <li className="text-sm">+916392750561</li>
            </ul>
            <ul className="flex items-center gap-2">
              <li>
                <img src={mail} alt="Mail" className="h-6 w-6" />
              </li>
              <li className="text-sm">info@hubnex.in</li>
            </ul>
          </ul>
        </div>

        <hr className="w-[95%] mx-auto font-bold bg-black text-black" />
        <div className="text-center mt-4 text-sm">
          © 2024 Hubnex. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
