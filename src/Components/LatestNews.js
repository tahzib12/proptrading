import React, { useState, useRef, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image1 from '../Assets/card1.png';

const slidesData = [
  {
    id: 1,
    title: 'Lorem ipsum dolor',
    description: 'Lorem ipsum dolor sit amet, consectetur.',
    imageUrl: Image1,
    linkText: 'Browse',
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor',
    description: 'Lorem ipsum dolor sit amet, consectetur.',
    imageUrl: Image1,
    linkText: 'Browse',
    pxClass: 'px-[20px]',
    pxClassSm: 'sm:px-0',
    pxClassMd: 'md:px-0',
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor',
    description: 'Lorem ipsum dolor sit amet, consectetur.',
    imageUrl: Image1,
    linkText: 'Browse',
  },
];

const LatestNews = () => {
  const [activeIndex, setActiveIndex] = useState(0); // To track the current slide
  const sliderRef = useRef(null); // To reference the slider container

  const handleDotClick = (index) => {
    setActiveIndex(index);
    // Calculate the scroll position to center the card
    const cardWidth = sliderRef.current.children[0].offsetWidth;
    const containerWidth = sliderRef.current.offsetWidth;
    const scrollPosition = cardWidth * index - (containerWidth - cardWidth) / 2;

    sliderRef.current.scrollTo({
      left: scrollPosition,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    AOS.init({
        duration: 1000, // Animation duration (1000ms = 1s)
        // offset: 100, // Offset (distance in pixels) from the original trigger point
        once: false, // Whether the animation should happen only once
        easing: 'ease', // Easing function for the animation
    });
}, []);

  useEffect(() => {
    // Center the first card on initial load
    handleDotClick(0);
  }, []);

  return (
    <div className='w-full z-100'>
      <div className="w-[80%] px-10 sm:w-[100%] md:w-[100%] py-10 mx-auto">
        <div className='text-start leading-tight mb-10' data-aos="fade-right">
          <div className='text-[16px] font-bold text-[rgba(102,16,242,1)]'>WHAT WE OFFER</div>
          <div className='font-bold text-[50px] sm:text-[25px] md:text-[30px]  text-black'>Agile focused business</div>
          <div className='font-bold text-[50px] sm:text-[25px] md:text-[30px] text-black'>services and more.</div>
        </div>

        {/* Dots for Pagination */}
        <div className="flex justify-start space-x-2 mb-4">
          {slidesData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full ${
                activeIndex === index ? 'bg-purple-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Slider Section */}
        <div
          ref={sliderRef}
          className="relative w-full flex overflow-x-scroll snap-x snap-mandatory sm:gap-3 md:gap-3 scroll-smooth hide-scrollbar boxShadow rounded-lg p-4 px-10"
        >
          {slidesData.map((slide) => (
            <div
              key={slide.id}
              className={`snap-center  flex-shrink-0 w-[45%] sm:w-[100%] md:w-[60%] flex flex-col items-center py-4 ${slide.pxClass || ''} ${slide.pxClassSm || ''}  ${slide.Md || ''}`}  data-aos="fade-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
            >
              <img
                src={slide.imageUrl}
                alt={slide.title}
                className="w-[500px] h-[320px] sm:h-[250px] md:h-[250px] md:w-[350px] object-cover mb-4 rounded-lg"
              />
              <div className='text-start w-full pl-1'>
              <h3 className="font-bold text-lg text-start">{slide.title}</h3>
              <p className="text-gray-600 text-start">{slide.description}</p>
              <a href="#" className="text-black font-bold border-b-[2px] border-[rgba(163,112,247,1)] mt-2 text-start">
                {slide.linkText}
              </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
