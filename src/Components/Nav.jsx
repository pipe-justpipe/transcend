import React from 'react'
import TranscendLogo from '../assets/svgs/transcendlogo.svg'

export const Nav = () => {
  return (
    <nav className='flex justify-between mt-[50px] w-[80%] mx-auto'> 
        <img src={TranscendLogo} alt='logo' className='w-[221px] h-[54px]'/>
        <div className='flex gap-[41px]'>
          <ul className='w-[568px] items-center justify-end text-[#1C0F30] text-[20px] leading-[30px] font-medium flex gap-[41px]'>
              <li><a href="#/premium" >Home</a></li>
              <li><a href="#/support">About</a></li>
              <li><a href="#/download">Pricing</a></li>
              <li><a href="#/signup">Contact</a></li>
              {/* <li ><a href="#/login"></a></li> */}
          </ul>
          <button className='py-[12px] rounded-[12px] text-[12] w-[150px] px-[14px] text-[#ffffff] bg-gradient-to-br from-purple-600 to-indigo-600'>Get the App</button>
          </div>
    </nav>
  )
}
