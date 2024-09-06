import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero1 = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000, // Animation duration (1000ms = 1s)
            once: false, // Whether the animation should happen only once
            easing: 'ease', // Easing function for the animation
        });
        AOS.refresh(); // Refresh AOS after initialization
    }, []);

    return (
        <div className="bg-[#0d051d] text-white relative">
            {/* Top Text Section */}
            <div className="text-center pt-10 pb-16 relative mx-auto">
    <h1 className="text-[55px] font-normal font-roboto" data-aos="fade-left">
        YOUR ROUTE TO A <span className="text-white font-bold">HEDGE FUND</span>
    </h1>
    <div className='absolute w-[600px] top-[230px] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
    <div className="bg-[rgba(22,5,48,1)] text-white px-6 py-4 mt-6 rounded-lg text-[30px] font-robotoflex w-full" data-aos="zoom-in">
        <span>Your success is our success.</span> <span>We’re committed to helping you reach your full potential.</span>
    </div>
    </div>
</div>

            {/* Bottom Section */}
            <div className="flex items-center justify-center bg-cover bg-[url('./Assets/bg1.png')] bg-no-repeat text-black py-16 bg-white h-[500px]">
                <div className="flex justify-center item-start">
                    <div data-aos="fade-left">
                        <div className="flex text-black text-[64px] font-inter">
                            <span className="font-thin">Prop</span>
                            <span className="font-semibold">Trading</span>
                            <span className="font-medium">Labs</span>
                        </div>
                        <div className="flex text-white gap-1 text-[36px] bg-[rgba(22,5,48,1)] rounded-xl px-4 py-1 justify-center items-center transition-transform transform hover:scale-105 ease-in-out duration-300 font-roboto">
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
