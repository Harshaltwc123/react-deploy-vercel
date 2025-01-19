import React from "react";
import amazon from "../assets/amazon.png";
import zoom from "../assets/zoom.png";
import Ideo from "../assets/ideo.png";
import brightwheel from "../assets/brightwheel.png";
import shopify from "../assets/shopify.png";
import slack from "../assets/slack_symbol.png.png";

function Brands() {
  return (
    <>
      <h1 className="text-center font-bold text-2xl sm:text-3xl pt-6 pb-3">
        Hubnex Tech Funds Trusted Brands
      </h1>
      <div className="px-4 sm:px-48 lg:px-52 pb-7">
        <marquee
          behavior="scroll"
          direction="left"
          scrollamount="5"
          className="mx-4 sm:mx-8 lg:mx-16"
        >
          <div className="flex gap-6 items-center">
            <img
              src={amazon}
              alt="Amazon Logo"
              className="h-12 sm:h-16 md:h-20 object-contain"
            />
            <img
              src={zoom}
              alt="Zoom Logo"
              className="h-12 sm:h-16 md:h-20 object-contain"
            />
            <img
              src={Ideo}
              alt="IDEO Logo"
              className="h-12 sm:h-16 md:h-20 object-contain"
            />
            <img
              src={brightwheel}
              alt="Brightwheel Logo"
              className="h-12 sm:h-16 md:h-20 object-contain"
            />
            <img
              src={shopify}
              alt="Shopify Logo"
              className="h-12 sm:h-16 md:h-20 object-contain"
            />
            <img
              src={slack}
              alt="Slack Logo"
              className="h-12 sm:h-16 md:h-20 object-contain"
            />
          </div>
        </marquee>
      </div>
    </>
  );
}

export default Brands;
