import React from 'react';
import msgLogo from '../Assets/msglogo.png';

const Footer = () => {
    return (
        <footer className="bg-[rgba(22,5,48,1)] text-white py-12">
            <div className='w-[90%] mx-auto '>
                <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
                    <div className="lg:w-1/2 text-start">
                        <h2 className="text-4xl sm:text-[22px] md:text-[25px] font-bold mb-4 sm:mb-0 md:mb-0">Let’s start working</h2>
                        <h2 className="text-4xl sm:text-[22px] md:text-[25px] font-bold mb-4 sm:mb-0 md:mb-0">to build a brighter.</h2>
                        <h2 className="text-4xl sm:text-[22px] md:text-[25px] font-bold mb-4 sm:mb-0 md:mb-0">future.</h2>
                        <p className="mb-4 sm:text-[12px] md:text-[16px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum posuere eget elementum vulputate elementum viverra sapien tellus aenean.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-gray-300">Fb</a>
                            <a href="#" className="hover:text-gray-300">In</a>
                            <a href="#" className="hover:text-gray-300">Tw</a>
                            <a href="#" className="hover:text-gray-300">Ln</a>
                        </div>
                    </div>
                    <div className="lg:w-1/3 mt-8 lg:mt-0 sm:w-full sm:text-[14px]">
                        <div className="flex border border-gray-500 p-2">
                            <input
                                type="text"
                                placeholder="Join our mailing list"
                                className="bg-transparent flex-grow outline-none px-2"
                            />
                            <button className="bg-transparent text-white px-6 py-2 hover:border-b hover:border-white">Submit</button>
                        </div>
                    </div>
                </div>
                <div className="container  text-center mt-8 flex sm:flex-col justify-between md:mx-auto md:items-center">
                    <span>
                        <img src={msgLogo} alt="logo" className="inline-block mb-2 sm:w-[150px] md:w-[150px]" />
                    </span>
                    <p className="text-sm">Copyright 2021. All rights reserved.</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
