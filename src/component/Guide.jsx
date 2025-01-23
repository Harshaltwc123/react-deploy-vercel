import React from "react";
import "../Header.css";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom"; // Import Link
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";

function Guide() {
  return (
    <>
      <div>
        <h1 className="text-5xl font-bold text-center">
          What we guide you with
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-10 flex-wrap">
          {/* card1 */}
          <div className="bg-white px-4 max-w-64 mx-auto border-2 rounded-lg shadow-2xl py-4">
            <h1 className="text-xl font-bold mb-4">
              Strategic <br />
              Guidance
            </h1>
            <img src={card1} alt="" className="mb-4" />
            <p>
              Hubnex defines their vision, strategy, and roadmap for success.
            </p>
            <Link to="/strategic-guidance">
              <button className="bg-[#1B1B1B] rounded-lg text-white flex mt-3">
                Read More{" "}
                <span>
                  <MdOutlineArrowOutward className="text-white w-8 h-6" />
                </span>
              </button>
            </Link>
          </div>

          {/* card2 */}
          <div className="bg-white px-4 max-w-64 mx-auto border-2 rounded-lg shadow-2xl py-4">
            <h1 className="text-xl font-bold mb-4">
              Technology <br /> Enablement
            </h1>
            <img src={card2} alt="" className="mb-4" />
            <p>
              Hubnex provides technology enablement services to turn ideas into
              scalable solutions.
            </p>
            <Link to="/technology-enablement">
              <button className="bg-[#1B1B1B] rounded-lg text-white flex mt-3">
                Read More{" "}
                <span>
                  <MdOutlineArrowOutward className="text-white w-8 h-6" />
                </span>
              </button>
            </Link>
          </div>

          {/* card3 */}
          <div className="bg-white px-4 max-w-64 mx-auto border-2 rounded-lg shadow-2xl py-4">
            <h1 className="text-xl font-bold mb-4">
              Investment <br /> Opportunity
            </h1>
            <img src={card3} alt="" className="mb-4" />
            <p>
              Hubnex provides investment opportunities for startups with
              promising ideas and growth.
            </p>
            <Link to="/investment-opportunity">
              <button className="bg-[#1B1B1B] rounded-lg text-white flex mt-3">
                Read More{" "}
                <span>
                  <MdOutlineArrowOutward className="text-white w-8 h-6" />
                </span>
              </button>
            </Link>
          </div>

          {/* card4 */}
          <div className="bg-white px-4 max-w-64 mx-auto border-2 rounded-lg shadow-2xl py-4">
            <h1 className="text-xl font-bold mb-4">
              Ecosystem <br /> Development
            </h1>
            <img src={card4} alt="" className="mb-4" />
            <p>
              Hubnex builds ecosystems for startups to thrive and grow
              sustainably.
            </p>
            <Link to="/ecosystem-development">
              <button className="bg-[#1B1B1B] rounded-lg text-white flex mt-3">
                Read More{" "}
                <span>
                  <MdOutlineArrowOutward className="text-white w-8 h-6" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Guide;
