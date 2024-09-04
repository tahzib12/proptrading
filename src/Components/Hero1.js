import React from 'react';
import person from '../Assets/proppreson.png';

const Hero1 = () => {
    return (
        
        <div className="bg-[#0d051d] text-white relative">
            {/* Top Text Section */}
            <div className="text-center pt-10 pb-16 relative">
                <h1 className="text-[50px] font-normal">
                    YOUR ROUTE TO A <span className="text-white font-bold">HEDGE FUND</span>
                </h1>
                <div className=" absolute bg-purple-600 text-white px-6 py-4 mt-6 mx-auto inline-block rounded-lg top-[130px] right-1/2 transform translate-x-1/2 text-[25px]">
                    <p>
                        Your success is our success. We’re committed to helping you reach your full potential.
                    </p>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="flex items-center justif-between bg-cover bg-[url('./Assets/bg1.png')] bg-[200%] bg-no-repeat text-black py-16 bg-white">
            
                <div className="flex w-1/2 pt-[100px] items-center">
                    {/* Left: Image */}
                    <div className="w-[200px]">
                        <img
                            src={person} // Replace with the actual image path
                            alt="CEO"
                            className="w-full h-auto"
                        />
                    </div>
                    {/* Right: Text */}
                    <div className=" pl-10 w-[400px]">
                        <div className="text-[22px] font-normal text-black text-start font-san">
                            "We're different from other prop firms because we offer a clear path from evaluation to managing assets in an affiliated hedge fund. Your success with us can lead to a career managing millions."
                        </div>
                        <p className="mt-4 font-semibold text-black text-start text-[18px]">Dr Bill Kolubayev - CEO</p>
                    </div>
                </div>
                <div className=" w-1/2 flex justify-center item-start">
                <div>
                    <div className="flex text-black text-[55px] ">
                        <span className="font-thin">Prop</span>
                        <span className="font-bold">Trading</span>
                        <span className="font-normal">Labs</span>
                        </div>
                    <div className='flex text-black gap-1 text-[25px] bg-purple-600 rounded-xl px-4 py-1 justify-center items-center '>
                        <span className="font-thin">A</span>
                        <span className="font-bold">Prop Firm</span>
                        <span className="font-thin">with progression</span>
                    </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Hero1;
