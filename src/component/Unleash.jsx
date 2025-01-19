
import "../Header.css";
import React from 'react';

function Unleash() {
  return (
    <div className='flex font-[Poppins] flex-col lg:flex-row bg-black/80 justify-between items-center py-8 px-6 lg:px-20 xl:px-56 my-10 lg:my-14 space-y-6 lg:space-y-0'>
      <p className='text-white text-lg md:text-xl lg:text-2xl w-full lg:w-[500px] text-center lg:text-left'>
        Unleash the best opportunities to gear up your startup journey with Hubnex!
      </p>
      <button className='py-2 px-8 md:px-12 lg:px-14 bg-white text-black rounded-md font-medium text-sm md:text-base'>
        Apply
      </button>
    </div>
  );
}

export default Unleash;
