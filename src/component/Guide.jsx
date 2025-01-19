
import React from "react";
import "../Header.css";
import { MdOutlineArrowOutward } from "react-icons/md";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";

const cards = [
  {
    title: "Strategics Guidancess",
    description: "Hubnex defines their vision, strategy, and roadmap for success.",
    img: card1,
    link: "#strategic-guidance",
  },
  {
    title: "Technology Enablement",
    description: "Hubnex provides technology enablement services to turn ideas into scalable solutions.",
    img: card2,
    link: "#technology-enablement", 
  },
  {
    title: "Investment Opportunity",
    description: "Hubnex provides investment for startups with promising ideas and growth.",
    img: card3,
    link: "#investment-opportunity",
  },
  {
    title: "Ecosystem Development",
    description: "Hubnex builds ecosystems for startups to thrive and grow sustainably.",
    img: card4,
    link: "#ecosystem-development", 
  },
];

function Guide() {
  return (
    <div className="font-poppins mb-14">
      <h1 className="text-2xl font-medium text-center pt-9">What we guide you with</h1>
      <div className="flex justify-evenly flex-wrap mt-14 gap-9 px-28">
        {cards.map((card, index) => (
          <div key={index} className="max-w-64 bg-white border border-gray-200 rounded-lg shadow-xl">
            <div className="px-5">
              <h5 className="mb-2 text-2xl font-medium tracking-tight text-gray-900">{card.title}</h5>
              <img className="rounded-t-lg" src={card.img} alt={card.title} />
            </div>
            <div className="p-5">
              <p className="mb-3 font-normal text-gray-700">{card.description}</p>
              <ul className="bg-black flex w-32 rounded-lg">
                <li>
                  <a
                    href={card.link}
                    className="text-white px-1 py-1 hover:underline"
                  >
                    Know more
                  </a>
                </li>
                <li>
                  <MdOutlineArrowOutward className="text-white w-8 h-6" />
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Guide;


