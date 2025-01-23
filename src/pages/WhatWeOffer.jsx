import React from "react";
import Fund from "../component/Fund";
import img from "../assets/Fund4.png";
import Animated from "../component/Animated";

function WhatWeOffer() {
  return (
    <>
      <div className="flex flex-col justify-center items-center relative">
        <img
          src={img}
          className="w-full h-auto object-cover"
          alt="What We Offer"
        />

        <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col justify-center items-center gap-4 px-4">
          <h1 className="text-1xl md:text-2xl lg:text-3xl font-bold text-white max-w-5xl">
            Empowering Startups from Ideation to Success
          </h1>

          <p className="text-white text-sm md:text-base lg:text-sm max-w-2xl">
            Hubnex Tech Fund offers expert support and tailored solutions to
            accelerate growth
          </p>
        </div>
      </div>
      <div>
        <Fund/>
        <Animated/>
      </div>
    </>
  );
}

export default WhatWeOffer;
