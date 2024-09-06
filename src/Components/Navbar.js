import React from 'react';
import { CgProfile } from "react-icons/cg";


const Navbar = () => {
  return (
    <nav className="bg-white  flex items-center justify-between text-black border-b-[1px] border-gray-200 w-full">
      {/* Left side (Logo) */}
      <div className="bg-cover bg-[url('./Assets/bg5.png')] bg-no-repeat bg-center w-[500px] h-[100px]">
        <div className="flex items-center  text-[48px] ml-10 mt-3 font-inter text-[rgba(0,0,0,1)]" >
        <span className="font-thin" >Prop</span>
        <span className="font-bold ">Trading</span>
        <span className="font-medium ">Labs</span>
        </div>
      </div>
      
      {/* Center (Nav Items) */}
      <div className="flex space-x-20 text-[30px] font-anton font-normal">
        <a href="#" className="">ABOUT US</a>
        <a href="#" className="">CHALLENGES</a>
        <a href="#" className="">HEDGE FUND</a>
        <a href="#" className="">FAQ</a>
      </div>
      
      {/* Right side (Button) */}
      <div className='mr-[100px]'>
        <button className="bg-transparent border-[2px] flex items-center border-purple-600 text-purple-600 px-4 py-2 font-bold rounded-full hover:bg-purple-500 hover:text-white transition font-inter w-[168px] h-[60px]">
        <CgProfile  className='mr-2 text-[40px]'/>
         <span className='text-[16px]'> Contact us</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
