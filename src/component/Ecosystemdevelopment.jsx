import React from "react";
import img from "../assets/Ecosystem1.png";
import img2 from "../assets/Ecosystem2.png";
import img3 from "../assets/Ecosystem3.png";
import img4 from "../assets/Ecosystem4.png";
import img5 from "../assets/Ecosytem5.png";
import banner from "../assets/banner.png";
import images1 from "../assets/images1.png";
import images2 from "../assets/images2.png";

function Ecosystemdevelopment() {
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
            Ecosystem Development
          </h1>
          <p className="text-sm sm:text-base md:text-lg">
            Create a thriving ecosystem that supports sustainable growth and
            long-term success!
          </p>
          <button className="bg-black text-white py-2 px-8 sm:px-10 md:px-12 rounded-md mt-4 hover:bg-purple-600 hover:border hover:border-white">
            Apply
          </button>
        </div>
      </div>

      <div className="flex justify-evenly flex-wrap gap-10 my-20">
        
        <div className="flex flex-col justify-center items-center gap-4 bg-white max-w-80 rounded-md px-4 py-12 border border-gray-200 shadow-xl">
          <img src={img2} alt="" className="rounded h-24 w-28" />
          <h1 className="text-xl font-medium">Collaborative efforts</h1>
          <p className="text-[16px] text-center">
            Startups partnering with Hubnex Invest benefit from seasoned
            technologists and industry experts who understand cutting-edge
            technologies and trends.
          </p>
        </div>

        
        <div className="flex flex-col justify-center text-center items-center gap-4 bg-white max-w-80 rounded-md px-4 py-12 border border-gray-200 shadow-xl">
          <img src={img3} alt="" className="rounded h-24 w-28" />
          <h1 className="text-xl font-medium">
            Partnerships with Accelerators & Incubators
          </h1>
          <p className="text-[16px] text-center">
            Hubnex Invest partners with accelerators and incubators to offer
            startups all opportunities, accelerating their growth and scaling
            their businesses.
          </p>
        </div>
      </div>

      <div className="flex justify-evenly flex-wrap gap-10 my-20">
        
        <div className="flex flex-col justify-center text-center items-center gap-4 bg-white max-w-80 rounded-md px-4 py-12 border border-gray-200 shadow-xl">
          <img src={img4} alt="" className="rounded h-24 w-28" />
          <h1 className="text-xl font-semibold">
            Venture Capital Partnerships
          </h1>
          <p className="text-[16px] text-center">
            Hubnex Invest partners with venture capital firms to co-invest in
            startups, providing capital and leveraging industry expertise to
            support their growth and success.
          </p>
        </div>

        
        <div className="flex flex-col justify-center text-center items-center gap-4 bg-white max-w-80 rounded-md px-4 py-12 border border-gray-200 shadow-xl">
          <img src={img5} alt="" className="rounded h-24 w-28" />
          <h1 className="text-xl font-semibold">
            GIndustry Associations and Agencies
          </h1>
          <p className="text-[16px] text-center">
            Hubnex Invest collaborates with industry associations and government
            agencies to advocate for policies supporting startup growth and
            innovation
          </p>
        </div>
      </div>

      <div className="relative max-h-full">
        <img src={banner} alt="" className="w-full" />

        <div className="text-center text-white py-10 absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-0 justify-center items-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl xl:text-3xl font-bold px-1 md:px-0 ">
            Join our dynamic ecosystem to accelerate your growth!
          </h1>
          <h2 className="text-sm sm:text-base md:text-lg px-4 md:px-0">
            Fostering a Dynamic Network for Collaborative Growth at Hubnex
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

export default Ecosystemdevelopment;
