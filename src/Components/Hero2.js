import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Hero2 = () => {
    useEffect(() => {
        AOS.init({
          duration: 700, // Animation duration (1000ms = 1s)
        //   offset: 200, // Offset (distance in pixels) from the original trigger point
          once: false, // Whether the animation should happen only once
          easing: 'ease', // Easing function for the animation
        });
      }, []);



  return (
    <div className="bg-[rgba(22,5,48,1)] text-center py-16 ">
      <h1 className="text-white text-[60px] sm:text-[30px] md:text-[35px] font-bold " data-aos="fade-up">
        Become a better 
      </h1>
      <h1 className="text-white text-[60px] sm:text-[30px] md:text-[35px] font-bold mb-4" data-aos="fade-up">business with us.</h1>
      <p className="text-gray-300 mb-8 max-w-[500px] sm:max-w-[300px] mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam turpis
        tortor, ultricies ut justo eu.
      </p>
      <div className="flex justify-center space-x-4 text-[22px] sm:text-[14px] md:text-[16px]">
        <button className="bg-purple-600 text-white py-2 px-14 sm:px-10 rounded-full font-medium hover:bg-purple-700">
          Services
        </button>
        <button className="border border-purple-600 text-purple-600 py-2 px-14 sm:px-10 rounded-full font-medium hover:bg-purple-600 hover:text-white">
          Features
        </button>
      </div>
    </div>
  );
};

export default Hero2;
