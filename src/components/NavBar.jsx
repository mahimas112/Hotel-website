import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoMenu, IoClose } from 'react-icons/io5';
import { FaHotel, FaBed, FaCalendarAlt, FaInfoCircle, FaImage, FaEnvelope, FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  // Navigation links with icons for better visual representation
  const navLinks = [
    { to: '/', label: 'Home', icon: <FaHotel /> },
    { to: '/room', label: 'Rooms', icon: <FaBed /> },
    // { to: '/reservations', label: 'Reservations', icon: <FaCalendarAlt /> },
    { to: '/services', label: 'Services', icon: <FaInfoCircle /> },
    { to: '/gallery', label: 'Gallery', icon: <FaImage /> },
    { to: '/contact', label: 'Contact', icon: <FaEnvelope /> },
    { to: '/cart', label: 'Cart', icon: <FaShoppingCart /> },  // Added Cart link
  ];

  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-300 ${
      isActive
        ? 'bg-[#CAA169] text-white font-semibold'
        : 'text-white hover:bg-[#f1e6d0] hover:text-[#CAA169] font-semibold'
    }`;

  return (
    <nav className="w-full bg-transparent absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <NavLink to="/" className="flex items-center">
            <img
              alt="Hotel Logo"
              src="path-to-your-logo.png" // Add the correct path to the logo image
              className="h-10 w-auto object-contain"
            />
            <span className="hidden md:block text-xl font-bold text-white ml-3">
              Luxury Hotel
            </span>
          </NavLink>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden"> {/* Only visible on smaller screens */}
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6"> {/* Only visible on md and larger screens */}
            {navLinks.map((link, index) => (
              <NavLink key={index} to={link.to} className={linkClass}>
                {link.icon}
                {link.label}
              </NavLink>
            ))}

            {/* Book Now Button */}
            <NavLink
              to="/book"
              className="px-4 py-2 bg-[#CAA169] text-white rounded-md hover:bg-[#B68C4E] transition-all"
            >
              Book Now
            </NavLink>
          </div>

          {/* Mobile Dropdown Menu */}
          {isOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-lg "> {/* Only visible on small screens */}
              <div className="flex flex-col space-y-2 p-4">
                {navLinks.map((link, index) => (
                  <NavLink
                    key={index}
                    to={link.to}
                    className="flex items-center gap-3 px-4 py-3 rounded-md text-gray-800 hover:bg-[#f1e6d0] hover:text-[#CAA169] md:flex"
                    onClick={toggleMenu}
                  >
                    {link.icon}
                    {link.label}
                  </NavLink>
                ))}

                {/* Mobile Book Now Button */}
                <div className="mt-4">
                  <NavLink
                    to="/book"
                    className="w-full text-center py-2 bg-[#CAA169] text-white rounded-md hover:bg-[#B68C4E]"
                    onClick={toggleMenu}
                  >
                    Book Now
                  </NavLink>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
