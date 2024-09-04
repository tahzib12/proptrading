import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white  flex items-center justify-between text-black border-b-[1px] border-gray-200 w-full">
      {/* Left side (Logo) */}
      <div className="bg-cover bg-[url('./Assets/bg5.png')] bg-[200%] bg-no-repeat bg-center w-[440px] h-[80px]">
        <div className="flex items-center space-x-2 text-[40px] ml-10 mt-2" >
        <span className="font-thin  ">Prop</span>
        <span className="font-bold  ">Trading</span>
        <span className="font-normal ">Labs</span>
        </div>
      </div>
      
      {/* Center (Nav Items) */}
      <div className="flex space-x-8 text-[30px]">
        <a href="#" className="font-bold">ABOUT US</a>
        <a href="#" className="font-bold">CHALLENGES</a>
        <a href="#" className="font-bold">HEDGE FUND</a>
        <a href="#" className="font-bold">FAQ</a>
      </div>
      
      {/* Right side (Button) */}
      <div className='mr-[100px]'>
        <button className="bg-transparent border border-purple-600 text-purple-600 px-4 py-2 font-bold rounded-full hover:bg-purple-500 hover:text-white transition">
          Contact us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
