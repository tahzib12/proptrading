import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero1 = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000, 
            once: false, 
            easing: 'ease', 
        });
        AOS.refresh();
    }, []);

    return (
        <div className="bg-[#0d051d] text-white relative overflow-x-hidden"> {/* Prevent horizontal scrolling */}
            {/* Top Text Section */}
            <div className="text-center pt-10 pb-16 relative mx-auto">
                <h1 className="text-[55px] sm:text-[22px] md:text-[30px] font-normal font-roboto" data-aos="fade-left">
                    YOUR ROUTE TO A <span className="text-white font-bold">HEDGE FUND</span>
                </h1>
                <div className='absolute sm:max-w-[270px] md:max-w-[370px] w-full max-w-[600px] top-[140px] sm:top-[90px] md:top-[100px] left-1/2 transform -translate-x-1/2'>
                    <div className="bg-[rgba(22,5,48,1)] text-white flex flex-col px-6 py-4 mt-6 rounded-lg text-[30px] sm:text-[16px]  md:text-[18px] font-robotoflex w-full" data-aos="zoom-in">
                        <div>Your success is our success.</div>
                        <div>We’re committed to helping you reach your full potential.</div>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="flex items-center justify-center bg-cover bg-[url('./Assets/bg1.png')] bg-no-repeat text-black py-16 bg-white h-[500px] sm:h-[250px] md:h-[350px] sm:pt-24 md:pt-20">
                <div className="flex justify-center item-start">
                    <div data-aos="fade-left">
                        <div className="flex text-black text-[64px] sm:text-[20px] md:text-[40px] sm:justify-center">
                            <span className="josefin-slab">Prop</span>
                            <span className="font-semibold font-inter">Trading</span>
                            <span className="font-medium font-inter">Labs</span>
                        </div>
                        <div className="flex text-white gap-1 text-[36px] sm:text-[16px] md:text-[20px] bg-[rgba(22,5,48,1)] rounded-xl px-4 py-1 justify-center items-center transition-transform transform hover:scale-105 ease-in-out duration-300 font-roboto">
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
