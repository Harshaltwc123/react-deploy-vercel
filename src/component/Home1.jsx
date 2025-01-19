

import React from "react";
import image1 from "../assets/image1.jpg";

function Home1() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div>
        <h1 className="text-center font-bold text-2xl sm:text-3xl py-4">
          Hubnex’s Process of Evaluation
        </h1>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <h4 className="hover:underline hover:font-medium text-sm sm:text-base">
            Pitch Screening
          </h4>
          <h4 className="hover:underline hover:font-medium text-sm sm:text-base">
            HR Meet
          </h4>
          <h4 className="hover:underline hover:font-medium text-sm sm:text-base">
            Company Analysis
          </h4>
          <h4 className="hover:underline hover:font-medium text-sm sm:text-base">
            Hubnex’s Demo
          </h4>
          <h4 className="hover:underline hover:font-medium text-sm sm:text-base">
            Panel Discussion
          </h4>
        </div>

        <div className="flex flex-col items-center justify-center mt-8 mb-8">
          <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-full max-w-4xl">
            <h1 className="text-center text-2xl sm:text-3xl font-semibold py-4">
              Pitch Screening
            </h1>
            <a href="#">
              <img
                src={image1}
                alt="Pitch Screening"
                className="w-full h-auto object-cover"
              />
            </a>
            <div className="p-4 sm:p-6">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed sm:leading-8">
                Dive deep into your business model with dedicated mentors.
                They'll help you identify strengths, weaknesses, opportunities, and threats (SWOT analysis) to ensure
                your startup is on the right track.
              </p>

              <div className="text-center flex flex-wrap gap-4 justify-center items-center mt-6">
                <a
                  href="#"
                  className="bg-black text-white py-2 px-4 rounded text-xs sm:text-sm md:text-base"
                >
                  Innovative Solutions
                </a>
                <a
                  href="#"
                  className="bg-black text-white py-2 px-4 rounded text-xs sm:text-sm md:text-base"
                >
                  Team Expertise & Capabilities
                </a>
                <a
                  href="#"
                  className="bg-black text-white py-2 px-4 rounded text-xs sm:text-sm md:text-base"
                >
                  Market Potential
                </a>
              </div>
              <div className="text-center flex flex-wrap gap-4 justify-center items-center mt-4">
                <a
                  href="#"
                  className="bg-black text-white py-2 px-4 rounded text-xs sm:text-sm md:text-base"
                >
                  Feasibility and Scalability
                </a>
                <a
                  href="#"
                  className="bg-black text-white py-2 px-4 rounded text-xs sm:text-sm md:text-base"
                >
                  User-Centric Design
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home1;
