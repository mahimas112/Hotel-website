import React from 'react';
import slider1 from '../../assets/images/slider/slider1.webp'; // Replace with your image path
import CheckInCheckOut from '../../components/CheckInCheckOut';

const HeroSection = () => {
  return (
    <div id="home" className="relative overflow-hidden">
      {/* Hero Image */}
      <div
        className="hero-image relative"
        style={{
          backgroundImage: `url(${slider1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="text-center text-white px-4 md:px-12">
{/*             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Welcome to Hotel in Dubai
            </h1> */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            </p>
          </div>
        </div>
      </div>

      {/* Booking Area Form */}
      <div className="absolute bottom-0 w-full py-8 sm:py-12 lg:py-16 shadow-md">
        <CheckInCheckOut />
      </div>
    </div>
  );
};

export default HeroSection;
