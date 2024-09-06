import React from 'react';
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <nav className="bg-white flex items-center justify-between text-black border-b-[1px] border-gray-200 w-full">
      {/* Left side (Logo) */}
      <div className="bg-cover bg-[url('./Assets/bg5.png')] bg-no-repeat bg-center w-[420px] h-[80px]">
        <div className="flex items-center text-[40px] ml-10 mt-3 font-inter text-[rgba(0,0,0,1)]">
          <span className="font-thin">Prop</span>
          <span className="font-bold">Trading</span>
          <span className="font-medium">Labs</span>
        </div>
      </div>
      
      {/* Center (Nav Items) */}
      <div className="flex space-x-16 text-[25px] font-anton font-normal">
        <a href="#" className="relative group">
          ABOUT US
          <span className="absolute left-0 bottom-0 w-full h-[3px] bg-purple-600 transition-transform scale-x-0 group-hover:scale-x-100"></span>
        </a>
        <a href="#" className="relative group">
          CHALLENGES
          <span className="absolute left-0 bottom-0 w-full h-[3px] bg-purple-600 transition-transform scale-x-0 group-hover:scale-x-100"></span>
        </a>
        <a href="#" className="relative group">
          HEDGE FUND
          <span className="absolute left-0 bottom-0 w-full h-[3px] bg-purple-600 transition-transform scale-x-0 group-hover:scale-x-100"></span>
        </a>
        <a href="#" className="relative group">
          FAQ
          <span className="absolute left-0 bottom-0 w-full h-[3px] bg-purple-600 transition-transform scale-x-0 group-hover:scale-x-100"></span>
        </a>
      </div>
      
      {/* Right side (Button) */}
      <div className='mr-[100px]'>
        <button className="bg-transparent border-[2px] flex items-center border-purple-600 text-purple-600 px-2 py-2 font-bold rounded-full hover:bg-purple-500 hover:text-white transition">
          <CgProfile className='text-[30px]'/>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
