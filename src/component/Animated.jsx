import React from 'react'
import img from "../assets/Animate1.gif"
import Card from './Card'

function Animated() {
  return (
   <>
   
   <div className='text-center flex flex-col justify-center items-center relative'>
    <div className='bg-blue-50 bg-opacity/20  h-[500px] w-[500px] my-52 rounded-full pl-24 pt-14 '>
        <img src={img} alt="" className='w-80 h-80'/>
    </div>
    {/* row1 */}
    <div className='absolute top-[48%] left-1/2 grid grid-cols-2 grid-rows-2 gap-96 transform -translate-x-1/2 -translate-y-1/2 pr-20 z-10'>
    <div className='flex flex-col justify-start items-start w-52 gap-2 p-4 border bg-white border-gray-200 shadow-xl rounded-md '>
      <h1 className='font-bold text-start'>Workshops and Training</h1>
      <p className='text-sm text-start'>Workshops provide tools for MVP development and scaling operations efficiently.</p>
    </div>
    <div className='flex flex-col justify-start items-start w-52 gap-2 p-4 border bg-white border-gray-200 shadow-xl rounded-md '>
      <h1 className='font-bold text-start'>Growth Hacking and Marketing</h1>
      <p className='text-sm text-start'>Achieve growth through compelling narratives and optimized digital presence strategies.</p>
    </div>
    </div>

     {/* row2 */}
     <div className='absolute top-[90%] left-1/2 grid grid-cols-2 grid-rows-2 gap-[600px] transform -translate-x-1/2 -translate-y-1/2 pr-52 z-10'>
    <div className='flex flex-col justify-start items-start w-52 gap-2 p-4 border bg-white border-gray-200 shadow-xl rounded-md '>
      <h1 className='font-bold text-start'>Networking and Community</h1>
      <p className='text-sm text-start'>Join a community fostering collaboration, sparking ideas, and opening opportunities.</p>
    </div>
    <div className='flex flex-col justify-start items-start w-52 gap-2 p-4 border bg-white border-gray-200 shadow-xl rounded-md '>
      <h1 className='font-bold text-start'>Continuous Support</h1>
      <p className='text-sm text-start'>Our support continues beyond funding, helping you scale, pivot, and grow.</p>
    </div>
    </div>

    {/* row1 */}
    <div className='absolute top-[110%] left-1/2 grid grid-cols-2 grid-rows-2 gap-96 transform -translate-x-1/2 -translate-y-1/2 pr-20 z-10'>
    <div className='flex flex-col justify-start items-start w-52 gap-2 p-4 border bg-white border-gray-200 shadow-xl rounded-md '>
      <h1 className='font-bold text-start'>Legal and Administrative Support</h1>
      <p className='text-sm text-start'>Expert Legal Support ensure your startup stays compliant and protected.</p>
    </div>
    <div className='flex flex-col justify-start items-start w-52 gap-2 p-4 border bg-white border-gray-200 shadow-xl rounded-md '>
      <h1 className='font-bold text-start'>Investment and Funding</h1>
      <p className='text-sm text-start'>Connect with investors for seed funding and capital to scale successfully.</p>
    </div>
    </div>
   </div>
   </>
  )
}

export default Animated
