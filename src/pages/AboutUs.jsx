import React from 'react'
import img from "../assets/Aboutus1.png"

function AboutUs() {
  return (
    <div className='mt-28'>
      <div className='relative'>
        <img src={img} alt="" className='w-full h-full' />
        <div className='absolute top-[40%] w-2/4 pl-28'>
        <h1 className='text-5xl font-medium'> Exceptional IT services, delivering innovative solutions</h1>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
