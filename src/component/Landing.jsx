import React from 'react'
import "../Header.css"
import "../index.css"
import img from "../assets/Landing4.png"

function Landing() {
  return (
    <div>
      <ul className='flex justify-between text-white bg-black'>
        <li><img src={img} alt="" className='w-fit h-[700px] animate__animated animate__fadeIn animate__delay-1s animate__slower animate-pulse'/></li>
        <ul className='flex flex-col gap-4 text-center max-w-xl pt-64 pr-14 '>
        <li><p className='text-5xl font-bold'>Are you ready to turn your entrepreneurial dreams into reality?</p></li>
        <li><button className='bg-white text-black py-2 px-14 font-bold rounded-md mt-4'>Apply</button></li>
        </ul>
      </ul>
    </div>

  )
}

export default Landing
