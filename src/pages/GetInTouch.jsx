import React from "react";
import img1 from "../assets/email2.png";
import img2 from "../assets/phone1.png";
import img3 from "../assets/location1.png";

function GetInTouch() {
  const cards = [
    {
      img: img1,
      title: "Get In Touch",
      description:
        "For any questions or concerns, you can reach us via email at",
    },
    {
      img: img2,
      title: "Call Us",
      description:
        "We're available by phone at +91 788989900 during business hours",
    },
    {
      img: img3,
      title: "Currently Remote",
      description: "Gurugram, Haryana\nCurrently Online",
    },
  ];

  return (
    <>
      <div className="relative mt-14 mb-48">
        {/* Top Section */}
        <div className="w-full h-96 flex flex-col justify-center items-center bg-gradient-to-t from-gray-300">
          <h1 className="text-4xl font-bold">Get In Touch!</h1>
          <p className="text-base mt-2">Ready to grow your startup faster?</p>
        </div>

        {/* Cards Section */}
        <div className="absolute top-[60%] left-0 right-0 flex flex-wrap justify-center gap-4 px-4 mt-6 mb-24">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white flex flex-col justify-start items-start px-6 pt-4 w-52 h-48 shadow-lg rounded-lg"
            >
              <img src={card.img} alt={card.title} className="w-12 h-12 mb-4" />
              <h1 className="text-lg font-medium mb-2">{card.title}</h1>
              <p className="text-sm whitespace-pre-line">{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center flex-col gap-16">
        <h1 className="text-4xl font-bold">We’re here to help</h1>
        <h4 className="text-xl">
          {" "}
          Have a question, idea, or ready to invest in your startup? Reach out.
        </h4>
      </div>
    </>
  );
}

export default GetInTouch;


