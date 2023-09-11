import React from 'react'
import Background from '../assets/backgroundline.svg'
import { HiOutlineTruck } from 'react-icons/hi'

const Hero = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row items-center justify-center gap-20'>
      <div className='w-full flex flex-col justify-center gap-[20px] md:w-[600px]'>
        <p className='font-bold text-[30px] md:text-[45px]'>Revolutionizing The Way You Ship, With Speed And Precision</p>
        <p className='text-white opacity-60 text-[12px] md:text-[15px]'>We offer fast, reliable, and secure delivery services for packages of all sizes, anywhere in the world.</p>
        <div className='flex gap-10'>
          <button className='w-full md:w-[200px] bg-purple p-0 md:p-4 rounded-full shadow hover:shadow-white'>
            <p className='font-semibold text-[13px]'>Request a Pickup</p>
          </button>
          <button className='w-full md:w-[200px] flex items-center gap-2 p-0 md:p-4 rounded-full shadow hover:shadow-white'>
            <HiOutlineTruck size={25}/>
            <p className='font-semibold'>Track Shipment</p>
          </button>
        </div>
      </div>
      <div>
        <img src={Background} />
      </div>
    </div>
  )
}

export default Hero