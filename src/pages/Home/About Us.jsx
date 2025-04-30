import React from 'react';
import about from '../../assets/images/about-img.svg';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h6 className="text-lg font-semibold text-gray-600">Who We Are</h6>
        <h3 className="text-3xl font-bold text-gray-800">About Us</h3>
      </div>

      {/* Content Section (Text & Image) */}
      <div className="flex flex-col-reverse lg:flex-row items-center">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left lg:pr-8 mb-8 lg:mb-0">
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-4">
            Welcome to <span className="text-[#CAA169]">Hotel<br className="hidden lg:block" />the Haven</span> of Your Weekend
          </h3>
          <p className="text-gray-600 mb-6 text-base sm:text-lg md:text-xl lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, explicabo eaque. Quos, maiores illum! Sint labore numquam beatae odit?
          </p>
          <a 
            href="#"
            className="inline-block text-center bg-white hover:bg-[#CAA169] hover:text-white text-black font-bold py-2 px-4 rounded-2xl w-[150px] border border-gray-500 transition duration-300 ease-in-out"
          >
            Explore
          </a>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 mb-6 lg:mb-0 text-center">
          <img 
            src={about} 
            alt="About Us" 
            className="w-full max-w-md mx-auto h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
