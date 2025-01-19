// import React from "react";
// import "../Header.css";
// import card1 from "../assets/card1.png";
// import card2 from "../assets/card2.png";
// import card3 from "../assets/card3.png";
// import card4 from "../assets/card4.png";
// import { MdOutlineArrowOutward } from "react-icons/md";

// function Guide() {
//   return (
//     <div>
//       <div className="font-poppins mb-14">
//         <h1 className="text-2xl font-medium text-center pt-9">
//           What we guide you with
//         </h1>

//         <div className="flex justify-evenly flex-wrap mt-14 gap-9 px-28">
//           {/* card1 */}
//           <div className="flex justify-center items-center">
//             <div class="max-w-64 bg-white border border-gray-200 rounded-lg  shadow-xl dark:bg-gray-800 dark:border-gray-700">
//               <div className="px-5">
//                 <a href="#">
//                   <h5 className="mb-2 text-2xl font-medium tracking-tight text-gray-900 dark:text-white">
//                     Strategic <br /> Guidance
//                   </h5>
//                 </a>
//                 <a href="#">
//                   <img className="rounded-t-lg" src={card1} alt="" />
//                 </a>
//               </div>
//               <div className="p-5">
//                 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                   Hubnex defines their vision, strategy, and roadmap for
//                   success.
//                 </p>
//                 <ul className="bg-black flex w-28 rounded-lg">
//                   <li>
//                     <button href="#" class="text-white">
//                       add More
//                     </button>
//                   </li>
//                   <li className="">
//                     <MdOutlineArrowOutward className="text-white w-8 h-6" />
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>


//             {/* card2 */}
//           <div className="flex justify-center items-center mt">
//             <div class="max-w-64 bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
//               <div className="px-5">
//                 <a href="#">
//                   <h5 className="mb-2 text-2xl font-medium tracking-tight text-gray-900 dark:text-white">
//                     Technology <br /> Enablement
//                   </h5>
//                 </a>
//                 <a href="#">
//                   <img className="rounded-t-lg" src={card2} alt="" />
//                 </a>
//               </div>
//               <div className="p-5">
//                 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                 Hubnex  provides technology enablement services to turn ideas into scalable solutions
//                 </p>
//                 <ul className="bg-black flex w-28 rounded-lg">
//                   <li>
//                     <button href="#" class="text-white">
//                       know more
//                     </button>
//                   </li>
//                   <li className="">
//                     <MdOutlineArrowOutward className="text-white w-8 h-6" />
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//             {/* card3 */}
//           <div className="flex justify-center items-center mt">
//             <div class="max-w-64 bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
//               <div className="px-5">
//                 <a href="#">
//                   <h5 className="mb-2 text-2xl font-medium tracking-tight text-gray-900 dark:text-white">
//                     Investment <br /> Opportunity
//                   </h5>
//                 </a>
//                 <a href="#">
//                   <img className="rounded-t-lg" src={card3} alt="" />
//                 </a>
//               </div>
//               <div className="p-5">
//                 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                 Hubnex provides investment for startups with promising ideas and growth.
//                 </p>
//                 <ul className="bg-black flex w-28 rounded-lg">
//                   <li>
//                     <button href="#" class="text-white">
//                       gets data
//                     </button>
//                   </li>
//                   <li className="">
//                     <MdOutlineArrowOutward className="text-white w-8 h-6" />
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>


//             {/* card4 */}
//           <div className="flex justify-center items-center mt">
//             <div class="max-w-64 bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
//               <div className="px-5">
//                 <a href="#">
//                   <h5 className="mb-2 text-2xl font-medium tracking-tight text-gray-900 dark:text-white">
//                     Ecosystem <br /> Development
//                   </h5>
//                 </a>
//                 <a href="#">
//                   <img className="rounded-t-lg" src={card4} alt="" />
//                 </a>
//               </div>
//               <div className="p-5">
//                 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                 Hubnex provides investment for startups with promising ideas and growth
//                 </p>
//                 <ul className="bg-black flex w-28 rounded-lg">
//                   <li>
//                     <button href="#" class="text-white">
//                       data gets
//                     </button>
//                   </li>
//                   <li className="">
//                     <MdOutlineArrowOutward className="text-white w-8 h-6" />
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>



//         </div>
//       </div>
//     </div>
//   );
// }

// export default Guide;

// import React from "react";
// import "../Header.css";
// import { MdOutlineArrowOutward } from "react-icons/md";
// import card1 from "../assets/card1.png";
// import card2 from "../assets/card2.png";
// import card3 from "../assets/card3.png";
// import card4 from "../assets/card4.png";

// const cards = [
//   {
//     title: "Strategics  Guidancess",
//     description: "Hubnex defines their vision, strategy, and roadmap for success.",
//     img: card1,
//   },
//   {
//     title: "Technology Enablement",
//     description: "Hubnex provides technology enablement services to turn ideas into scalable solutions.",
//     img: card2,
//   },
//   {
//     title: "Investment Opportunity",
//     description: "Hubnex provides investment for startups with promising ideas and growth.",
//     img: card3,
//   },
//   {
//     title: "Ecosystem Development",
//     description: "Hubnex builds ecosystems for startups to thrive and grow sustainably.",
//     img: card4,
//   },
// ];

// function Guide() {
//   return (
//     <div className="font-poppins mb-14">
//       <h1 className="text-2xl font-medium text-center pt-9">What we guide you with</h1>
//       <div className="flex justify-evenly flex-wrap mt-14 gap-9 px-28">
//         {cards.map((card, index) => (
//           <div key={index} className="max-w-64 bg-white border border-gray-200 rounded-lg shadow-xl">
//             <div className="px-5">
//               <h5 className="mb-2 text-2xl font-medium tracking-tight text-gray-900">{card.title}</h5>
//               <img className="rounded-t-lg" src={card.img} alt={card.title} />
//             </div>
//             <div className="p-5">
//               <p className="mb-3 font-normal text-gray-700">{card.description}</p>
//               <ul className="bg-black flex w-28 rounded-lg">
//                 <li>
//                   <button href="#" className="text-white">know more</button>
//                 </li>
//                 <li>
//                   <MdOutlineArrowOutward className="text-white w-8 h-6" />
//                 </li>
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Guide;


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
    link: "#strategic-guidance", // Example link
  },
  {
    title: "Technology Enablement",
    description: "Hubnex provides technology enablement services to turn ideas into scalable solutions.",
    img: card2,
    link: "#technology-enablement", // Example link
  },
  {
    title: "Investment Opportunity",
    description: "Hubnex provides investment for startups with promising ideas and growth.",
    img: card3,
    link: "#investment-opportunity", // Example link
  },
  {
    title: "Ecosystem Development",
    description: "Hubnex builds ecosystems for startups to thrive and grow sustainably.",
    img: card4,
    link: "#ecosystem-development", // Example link
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


