import React, { useState } from 'react'

import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [menu, setMenu] = useState(true);
  const toggleMenu = () => {
    setMenu(!menu);
  }
  const toggleClose = () => {
    setMenu(!menu);
  }

  return (
    <div>
      <div className='flex items-center justify-between mx-[30px] md:mx-[100px] pt-[80px] md:pt-[80px] '>
        <div>
          <p className='italic font-semibold text-[25px]'>SWIFTSHIP</p>
        </div>
        <div className='cursor-pointer' onClick={toggleMenu}>
          {!menu ? <HiMenu size={40} /> : <HiMenu size={40} />}
        </div>
      </div>
      <div>
        <div className={!menu ? 'fixed flex flex-col gap-10 pt-[80px] top-0 w-full h-full bg-primary opacity-80 ease-in-out duration-300 z-10': 'fixed top-[-100%]'}>
          <div className='flex items-center justify-between mx-[30px] md:mx-[100px]'>
            <div>
            </div>
            <div className='cursor-pointer' onClick={toggleClose}>
              {menu ? '' : <HiX size={40} /> }
            </div>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <a href="/home" className="w-[250px] p-4 font-semibold text-white text-[18px]">Home</a>
            <a href="/aboutus" className="w-[250px] p-4 font-semibold text-white text-[18px]">About Us</a>
            <a href="/package" className="w-[250px] p-4 font-semibold text-white text-[18px]">Package</a>
            <a href="/facilities" className="w-[250px] p-4 font-semibold text-white text-[18px]">Facilities</a>
            <a href="/gallery" className="w-[250px] p-4 font-semibold text-white text-[18px]">Gallery</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar