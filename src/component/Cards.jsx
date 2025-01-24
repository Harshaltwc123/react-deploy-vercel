import React from "react";
import img1 from "../assets/Animate2.png";
import img2 from "../assets/Animate3.png";
import img3 from "../assets/Animate4.png";
import banner from "../assets/banner.png";
import images1 from "../assets/images1.png";
import images2 from "../assets/images2.png";

function Cards() {
  return (
<>
<div className="bg-blue-50 py-10">
      <h1 className="text-xl text-center">Why Choose Hubnex Tech Fund?</h1>
      <div className="flex justify-evenly item-center flex-wrap">
        {/* card1 */}
        <div className=" text-start my-6 max-w-64 p-5">
          <img src={img1} alt="" />
          <h1 className="font-bold my-4 ">Dedicated Expertise</h1>
          <p className="text-sm">
            We are dedicated to helping startups succeed in a competitive
            technology landscape.
          </p>
        </div>
        {/* card2 */}
        <div className="text-start my-6 max-w-64 p-5">
          <img src={img2} alt="" />
          <h1 className="font-bold my-4 ">Proven Track Record</h1>
          <p className="text-sm">
            Our experienced team drives growth through successful investments
            and partnerships
          </p>
        </div>
        {/* card3 */}
        <div className=" text-start  my-6 max-w-64 p-5">
          <img src={img3} alt="" />
          <h1 className="font-bold my-4 ">Collaborative Approach</h1>
          <p className="text-sm">
            We collaborate closely with partners to achieve mutual success and
            advance the industry
          </p>
        </div>
      </div>
    </div>

    <div className="relative max-h-full">
            <img src={banner} alt="" className="w-full" />
    
            <div className="text-center text-white py-10 absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-0 justify-center items-center">
              <h1 className="text-xl sm:text-2xl md:text-3xl xl:text-3xl font-bold px-1 md:px-0 ">
              Partner with Hubnex Tech Fund & Accelerate your Journey from Startup to Industry Leader!
              </h1>
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

export default Cards;
