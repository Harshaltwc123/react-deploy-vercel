import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import "../Header.css";
import "../index.css";

const faqs = [
  {
    question: "What is Hubnex Tech Fund ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "How does Hubnex Tech Fund support Startup ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "What type of startups does Hubnex Tech Fund work with  ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "Does Hubnex Invest provide financial investment  ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "What is the application process for Hubnex Invest  ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-6 py-24 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="max-w-5xl mx-auto ">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="mb-4 bg-white shadow-md rounded-lg overflow-hidden py-6"
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-4 text-lg font-medium text-gray-800  flex justify-between items-center"
            >
              {faq.question}
              <span className="ml-4 text-xl">
                {openIndex === index ? (
                  <FaChevronDown className="bg-black text-white rounded-2xl p-2 h-8 w-8" />
                ) : (
                  <IoIosArrowForward />
                )}
              </span>
            </button>

            {/* Answer */}
            {openIndex === index && (
              <div className="px-6 py-4 bg-gray-50 text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
