import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Hero2 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (1000ms = 1s)
      //   offset: 200, // Offset (distance in pixels) from the original trigger point
      once: false, // Whether the animation should happen only once
      easing: 'ease', // Easing function for the animation
    });
  }, []);



  return (
    <div className="bg-[rgba(22,5,48,1)] text-center py-16 max-w-full h-[600px]">
      <h1 className="text-white text-[60px] sm:text-[30px] md:text-[35px] font-bold " data-aos="fade-up" data-aos-delay="1000">
        OUR SIMPLE PROVEN PROCESS
      </h1>
      <div className='flex justify-between mx-auto max-w-[90%] gap-3 mt-20'>
        <div className='flex flex-col bg-purple-800 rounded-3xl max-w-[300px] p-4' data-aos="fade-down" data-aos-delay="1500">
          <span className='text-white text-[25px] font-bold'>Step 1 :</span>
          <span className='text-white text-[25px] font-bold'>Evaluation</span>
          <span className='text-white text-[20px] mt-14'>Showcase your trading</span>
          <span className='text-white text-[20px]'> skills and risk</span>
          <span className='text-white text-[20px]'>management capabilities</span>
          <span className='text-white text-[20px]'> in a structured evaluation.</span>
        </div>
        <div className='flex flex-col bg-purple-800 rounded-3xl max-w-[300px] p-4' data-aos="fade-up" data-aos-delay="1500">
          <span className='text-white text-[25px] font-bold'>Step 2:</span>
          <span className='text-white text-[25px] font-bold'>Risk Verification</span>
          <span className='text-white text-[25px] font-bold'>Verification</span>
          <span className='text-white text-[20px] mt-4'>Verify your understanding</span>
          <span className='text-white text-[20px]'>  of risks involved in trading </span>
          <span className='text-white text-[20px]'> to ensure responsible </span>
          <span className='text-white text-[20px]'> management of capital.</span>
        </div>

        <div className='flex flex-col bg-purple-800 rounded-3xl max-w-[300px] p-4' data-aos="fade-down" data-aos-delay="1500">
          <span className='text-white text-[25px] font-bold'>Step 3 :</span>
          <span className='text-white text-[25px] font-bold'>Monetized Training</span>
          <span className='text-white text-[25px] font-bold'>Training</span>
          <span className='text-white text-[20px] mt-4'>Start earning real profits</span>
          <span className='text-white text-[20px]'>  while you continue to</span>
          <span className='text-white text-[20px]'> learn. Apply your skills in a</span>
          <span className='text-white text-[20px]'>real-world setting.</span>
          
        </div>

        <div className='flex flex-col bg-purple-800 rounded-3xl max-w-[300px] p-4' data-aos="fade-up" data-aos-delay="1500">
          <span className='text-white text-[25px] font-bold'>Step 4 :</span>
          <span className='text-white text-[25px] font-bold'>Manage Hedge</span>
            <span className='text-white text-[25px] font-bold'>Fund Capital</span>
          <span className='text-white text-[20px] mt-4 text-center'>Top performers transition</span>
          <span className='text-white text-[20px]'>to managing significant</span>
          <span className='text-white text-[20px]'> assets in an affiliated</span>
          <span className='text-white text-[20px]'> hedge fund.</span>
        </div>

      </div>
      {/* <p className="text-gray-300 mb-8 max-w-[500px] sm:max-w-[300px] mx-auto">
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
      </div> */}
    </div>
  );
};

export default Hero2;
