import React from "react";
import img from "../assets/Investment1.png";
import img2 from "../assets/Investment2.png";
import img3 from "../assets/Investment3.png";
import img4 from "../assets/Investment4.png";
import img5 from "../assets/Investment5.png";
import banner from "../assets/banner.png";
import images1 from "../assets/images1.png";
import images2 from "../assets/images2.png";

function Investmentopportunity() {
  return (
    <>
      <div className="relative mb-10">
        <img
          src={img}
          alt="Strategic Guidance"
          className="w-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-white/50 backdrop-blur-md py-6 sm:py-8 md:py-10 flex flex-col justify-center items-center gap-2 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Investment Opportunity
          </h1>
          <p className="text-sm sm:text-base md:text-lg">
            Partner with us and fuel the next wave of groundbreaking technology
            and growth!
          </p>
          <button className="bg-black text-white py-2 px-8 sm:px-10 md:px-12 rounded-md mt-4 hover:bg-purple-600 hover:border hover:border-white">
            Apply
          </button>
        </div>
      </div>

      <div className="flex justify-evenly flex-wrap gap-10 my-20">
        {/* card1 */}
        <div className="flex flex-col justify-center items-center gap-4 bg-white max-w-80 rounded-md px-4 py-12 border border-gray-200 shadow-xl">
          <img src={img2} alt="" className="rounded h-24 w-28" />
          <h1 className="text-xl font-medium">Flexible Investment Approach</h1>
          <p className="text-[16px] text-center">
            Hubnex Invest offers tailored investment strategies, providing seed
            funding, early-stage investment, or growth capital to meet the
            unique needs and goals of each startup.
          </p>
        </div>

        {/* card2 */}
        <div className="flex flex-col justify-center items-center gap-4 bg-white max-w-80 rounded-md px-4 py-12 border border-gray-200 shadow-xl">
          <img src={img3} alt="" className="rounded h-24 w-28" />
          <h1 className="text-2xl font-medium">Investment in Startup</h1>
          <p className="text-[16px] text-center">
            Hubnex Invest supports diverse startups across various industries,
            focusing on those driving innovation and positive change.
          </p>
        </div>
      </div>

      <div className="flex justify-evenly flex-wrap gap-10 my-20">
        {/* card3 */}
        <div className="flex flex-col justify-center items-center gap-4 bg-white max-w-80 rounded-md px-4 py-12 border border-gray-200 shadow-xl">
          <img src={img4} alt="" className="rounded h-24 w-28" />
          <h1 className="text-2xl font-semibold">Strategic Partnership</h1>
          <p className="text-[16px] text-center">
            Beyond financial support, we form strategic partnerships with
            startups, offering mentorship and access to industry connections to
            accelerate growth and unlocking opportunities
          </p>
        </div>

        {/* card4 */}
        <div className="flex flex-col justify-center items-center gap-4 bg-white max-w-80 rounded-md px-4 py-12 border border-gray-200 shadow-xl">
          <img src={img5} alt="" className="rounded h-24 w-28" />
          <h1 className="text-xl font-semibold">Government Grants & Funds</h1>
          <p className="text-[16px] text-center">
            We assists startups in accessing government grants and non-dilutive
            funding, guiding them through the application process to maximize
            their chances of growth.
          </p>
        </div>
      </div>

      <div className="relative max-h-full">
        <img src={banner} alt="" className="w-full" />

        <div className="text-center text-white py-10 absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-0 justify-center items-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl xl:text-3xl font-bold px-1 md:px-0 ">
          Unlock potential and drive success with strategic investments! 
          </h1>
          <h2 className="text-sm sm:text-base md:text-lg px-4 md:px-0">
          Discover Lucrative Investment Opportunities to Fuel the Next Wave of Innovation at Hubnex!
          </h2>

          <ul className="flex flex-wrap justify-center gap-4 mt-4 sm:mt-6">
            <li>
              <img src={images1} alt="" className="h-6 sm:h-7 md:h-8" />
            </li>
            <li>
              <img src={images2} alt="" className="h-6 sm:h-7 md:h-8" />
            </li>
          </ul>

          <button className="bg-white text-black py-2 px-10 sm:px-12 md:px-16 font-bold rounded-md mt-4 hover:bg-gray-200 transition duration-300">
            Apply
          </button>
        </div>
      </div>
    </>
  );
}

export default Investmentopportunity;
