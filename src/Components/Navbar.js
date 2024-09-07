import React, { useState } from 'react';
import { CgProfile, CgMenuRight, CgClose } from "react-icons/cg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white flex items-center justify-between text-black border-b-[1px] border-gray-200 w-full relative">
      {/* Left side (Logo) */}
      <div className="bg-cover bg-[url('./Assets/bg5.png')] sm:max-w-[246px] sm:h-[50px] md:w-[300px] md:h-[60px] bg-no-repeat bg-center w-[420px] h-[80px]">
        <div className="flex items-center text-[40px] sm:text-[22px] md:text-[30px] ml-10 mt-3 font-inter text-[rgba(0,0,0,1)]">
          <span className="josefin-slab">Prop</span>
          <span className="font-bold">Trading</span>
          <span className="font-medium">Labs</span>
        </div>
      </div>
      
      {/* Hamburger Menu Button */}
      <div className="block lg:hidden mr-5 z-10">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-purple-600 text-[30px]">
          {isMenuOpen ? <CgClose /> : <CgMenuRight />}
        </button>
      </div>

      {/* Center (Nav Items) */}
      <div
        className={`transition-transform duration-300 ease-in-out ${
          isMenuOpen
            ? 'flex flex-col items-start boxShadow1 rounded-lg space-y-4 absolute top-[40px] md:top-[50px] sm:w-[140px] md:w-[150px] sm:text-[16px] md:text-[16px] right-0 bg-white shadow-lg p-4 !z-10'
            : 'hidden lg:flex lg:space-x-10'
        } text-[25px] font-anton font-normal lg:relative w-2/3 lg:pl-20`}
      >
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

        {/* Right side (Button) */}
        <div className="sm:w-full md:w-full lg:right-20 lg:absolute">
          <button className="bg-transparent border-[2px] flex items-center justify-center border-purple-600 text-purple-600 px-2 py-2 font-bold rounded-full hover:bg-purple-500 hover:text-white transition w-full sm:w-[50%] sm:mx-auto md:w-[45%] md:mx-auto">
            <CgProfile className='text-[30px]'/>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
