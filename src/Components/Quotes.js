import React, { useEffect } from 'react';
import Profile1 from '../Assets/Profile1.png'
import Profile2 from '../Assets/Profile2.png'
import Profile3 from '../Assets/Profile3.png'
import AOS from 'aos';
import 'aos/dist/aos.css';


const testimonials = [
  {
    id: 1,
    name: 'Person 1',
    image: Profile1, // Replace with actual image URLs
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec eu mattis tincidunt viverra eu. Lacus turpis felis',
  },
  {
    id: 2,
    name: 'Person 2',
    image: Profile2, // Replace with actual image URLs
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec eu mattis tincidunt viverra eu. Lacus turpis felis',
  },
  {
    id: 3,
    name: 'Person 3',
    image: Profile3, // Replace with actual image URLs
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec eu mattis tincidunt viverra eu. Lacus turpis felis',
  },
];





const Quotes = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (1000ms = 1s)
      // offset: 100, // Offset (distance in pixels) from the original trigger point
      once: false, // Whether the animation should happen only once
      easing: 'ease', // Easing function for the animation
    });
  }, []);


  return (
    <section className="text-center py-12 w-full">
      <div className='lg:!w-[80%] sm:w-[100%] md:w-[100%] px-10 lg:mx-auto'>
        {/* Header Section */}
        <div className="mb-10 text-start leading-tight" data-aos="fade-right">
          <p className="text-purple-600 text-[16px] font-bold">OUR CUSTOMERS</p>
          <h2 className="text-[50px] font-bold sm:text-[25px] md:text-[30px]">Agile focused business</h2>
          <h2 className="text-[50px] font-bold sm:text-[25px] md:text-[30px]">services and more.</h2>
        </div>

        {/* Testimonials Section */}
        <div className="flex justify-center sm:flex-col md:flex-col sm:items-center md:items-center sm:gap-6 space-x-8 sm:space-x-0 md:space-x-0 sm:mx-auto md:mx-auto md:gap-6">
          {testimonials.map(({ id, name, image, text }) => (
            <div key={id} className="max-w-sm sm:max-w-[300px] sm:h-[250px] rounded-lg boxShadow p-6 md:flex-row md:flex md:max-w-full md:gap-6"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine">
              {/* Image with purple border */}
              <div className=" w-24 h-24 sm:w-20 sm:h-20 mb-6 bg-[url('./Assets/profileback.png')] rounded-full relative bg-cover">
                <img
                  className="rounded-full w-full h-full object-cover  absolute right-4"
                  src={image}
                  alt={name}
                />
              </div>

              {/* Testimonial Text */}
              <div className="text-gray-500 italic mb-4 flex">
                <span className='text-[rgba(102,16,242,1)] text-[60px] sm:text-[40px] md:text-[40px] font-normal font-tinos mr-4'>“</span> <p className='text-start text-[18px] sm:text-[14px] md:text-[18px] md:max-w-[420px] md:pt-4'>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Quotes;
