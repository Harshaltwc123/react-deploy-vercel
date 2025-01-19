import React from "react";
import img from "../assets/herohubnex1.png";

function Flipcard() {
  return (
    <>
      <div className="relative w-full">
       
        <img
          src={img}
          alt="Hero Hubnex"
          className="w-full object-cover h-[60vh] md:h-[70vh]"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 bg-black/50 text-white px-4">
          <h1 className="text-2xl md:text-4xl font-semibold text-center">
            Unlocking Investment Opportunities with Hubnex Tech Fund
          </h1>
          <p className="text-sm md:text-base text-center">
            Empowering startups with Hubnex Tech Fund
          </p>
          <button className="px-8 md:px-14 py-2 bg-white text-black rounded">
            Apply
          </button>
        </div>
      </div>
    </>
  );
}

export default Flipcard;

