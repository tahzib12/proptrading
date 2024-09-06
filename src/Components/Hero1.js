import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import person from '../Assets/proppreson.png';

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
            <div className="text-center pt-10 pb-16 relative">
                <h1 className="text-[64px] font-normal font-roboto" data-aos="fade-left">
                    YOUR ROUTE TO A <span className="text-white font-bold">HEDGE FUND</span>
                </h1>
                <div className="absolute bg-[rgba(22,5,48,1)] text-white px-6 py-4 mt-6 mx-auto inline-block rounded-lg top-[130px] left-1/2 transform -translate-x-1/2 text-[35px] transition-transform hover:scale-105 ease-in-out duration-300 font-robotoflex w-[799px]">
                    Your success is our success. We’re committed to helping you reach your full potential.
                </div>
            </div>

            {/* Bottom Section */}
            <div className="flex items-center justify-between bg-cover bg-[url('./Assets/bg1.png')] bg-no-repeat text-black py-16 bg-white h-[400px]">
                <div className="flex w-1/2 pt-[100px] items-center">
                   
                    {/* <div className="w-[200px]" data-aos="zoom-in-right">
                        <img src={person} alt="CEO" className="w-full h-auto" />
                    </div>
                   
                    <div className="pl-10 w-[400px]" data-aos="fade-right">
                        <div className="text-[22px] font-normal text-black text-start font-roboto">
                            "We're different from other prop firms because we offer a clear path from evaluation to managing assets in an affiliated hedge fund. Your success with us can lead to a career managing millions."
                        </div>
                        <p className="mt-4 font-semibold text-black text-start text-[18px] font-roboto">
                            Dr Bill Kolubayev - CEO
                        </p>
                    </div> */}
                </div>
                <div className="w-1/2 flex justify-center item-start">
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
