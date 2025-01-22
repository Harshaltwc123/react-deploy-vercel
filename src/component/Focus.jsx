import React from "react";
import img1 from "../assets/Focus.gif";
import img2 from "../assets/Focus1.png";
import img3 from "../assets/Mission.gif";
import img4 from "../assets/Mission1.png";

function Focus() {
  return (
    <>
      <div className=" text-center mt-36 mb-9 flex flex-col justify-center items-center px-9 ">
        <h1 className="text-5xl font-bold text-center">Our Focus</h1>
        <div className="flex max-w-6xl gap-5 mt-14">
          <img src={img1} alt="" />
          <div>
            <ul className="flex flex-row gap-4 mt-24">
              <li>
                <img src={img2} alt="" />
              </li>
              <li>
                <h4>Access to experienced guidance and expertise</h4>
              </li>
            </ul>
            <ul className="flex flex-row gap-4 mt-7">
              <li>
                <img src={img2} alt="" />
              </li>
              <li>
                <h4>Investment opportunities for growth and expansion</h4>
              </li>
            </ul>
            <ul className="flex flex-row gap-4 mt-7">
              <li>
                <img src={img2} alt="" />
              </li>
              <li>
                <h4>Technology Enablement for building scalable solutions</h4>
              </li>
            </ul>
            <ul className="flex flex-row gap-4 mt-7">
              <li>
                <img src={img2} alt="" />
              </li>
              <li>
                <h4>
                  Collaboration and networking opportunities in the startup
                  ecosystem
                </h4>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className=" text-center mt-36 mb-9 flex flex-col justify-center items-center px-9 ">
        <h1 className="text-5xl font-bold text-center">Our Mission</h1>
        <div className="flex max-w-6xl gap-5 mt-14">
          <img src={img3} alt="" />
          <div>
            <ul className="flex flex-row gap-4 mt-24">
              <li>
                <img src={img4} alt="" />
              </li>
              <li>
                <h4>
                  We offer them strategic partner who invested in their success
                  and growth
                </h4>
              </li>
            </ul>
            <ul className="flex flex-row gap-4 mt-7">
              <li>
                <img src={img4} alt="" />
              </li>
              <li>
                <h4>
                  We empower startups through strategic support and investment.
                </h4>
              </li>
            </ul>
            <ul className="flex flex-row gap-4 mt-7 justify-center items-center">
              <li>
                <img src={img4} alt="" className="w-8 h-5"/>
              </li>
              <li>
                <h4 className="text-start">
                  We offer startups have access to experience guidance
                  technology enablement, investment opportunities to fuel their
                  journey to success
                </h4>
              </li>
            </ul>
            <ul className="flex flex-row gap-4 mt-7">
              <li>
                <img src={img4} alt="" />
              </li>
              <li>
                <h4>
                  We believe in the power of startups to drive innovation and
                  change in the world
                </h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Focus;
