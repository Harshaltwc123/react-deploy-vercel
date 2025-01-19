import React from "react";
import img from "../assets/herohubnex1.png";

function Flipcard() {
  return (
    <>
      <div className="relative w-full">
        {/* Image Section */}
        <img
          src={img}
          alt="Hero Hubnex"
          className="w-full object-cover h-[60vh] md:h-[70vh]"
        />

        {/* Content Section (Overlay Text) */}
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

// import React from "react";
// import img from "../assets/herohubnex1.png";

// function Flipcard() {
//   return (
//     <>
//       <div className="relative w-full">
//         {/* Image Section */}
//         <img
//           src={img}
//           alt="Hero Hubnex"
//           className="w-full object-cover h-[60vh] md:h-[70vh]"
//         />

//         {/* Content Section (Overlay at Bottom) */}
//         <div className="absolute bottom-0 w-full flex flex-col justify-center items-center gap-4 bg-white/70 backdrop-blur-md px-4 py-6">
//           <h1 className="text-2xl md:text-4xl font-semibold max-w-xl md:max-w-2xl text-center">
//             Unlocking Investment Opportunities with Hubnex Tech Fund
//           </h1>
//           <p className="text-sm md:text-base text-center">
//             Empowering startups with Hubnex Tech Fund
//           </p>
//           <button className="px-8 md:px-14 py-2 bg-black text-white rounded">
//             Apply
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Flipcard;
