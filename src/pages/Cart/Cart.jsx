// import React from 'react';
// import Room from "../../assets/images/Room.jpg";
// import { Link } from 'react-router-dom';

// const BookingCart = () => {
//     return (
//         <div className="container shadow-lg rounded-lg overflow-hidden border border-gray-300 w-full max-w-4xl mx-auto p-6 sm:p-8 lg:p-10 bg-white mt-8 mb-8">
//             <div className="flex flex-col md:flex-row justify-center h-[600px] md:h-auto max-w-[1100px] mx-auto">
//                 {/* Image Section */}
//                 <div className="w-full md:w-1/2">
//                     <img
//                         src={Room}
//                         alt="Room"
//                         className="w-full h-64 sm:h-80 md:h-full object-cover rounded-lg shadow-md"
//                     />
//                 </div>

//                 {/* Room Details */}
//                 <div className="w-full md:w-1/2 md:pl-8 mt-6 md:mt-0 flex flex-col justify-center">
//                     <h3 className="text-2xl font-bold text-gray-800 mb-2">Deluxe Room</h3>
//                     <p className="text-gray-600 mb-4 text-base font-semibold">Gym, Breakfast, Parking, TV</p>

//                     {/* Price and Button in Flex Column */}
//                     <div className="flex flex-col items-start space-y-4">
//                         {/* Price */}
//                         <p className="text-xl font-bold bg-white hover:bg-[#CAA169] hover:text-white text-gray-700 rounded-xl py-2 px-4 inline-block border border-gray-600 transition-all duration-300">
//                             $150/night
//                         </p>

//                         {/* Book Now Button */}
//                         <Link to='/book'>
//                         <button
//                             className="bg-[#CAA169] hover:bg-[#B68C4E] text-white font-semibold py-3 px-6 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
//                         >
//                             Book Now
//                         </button>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BookingCart;


import React from "react";
import { Link } from "react-router-dom";

const CartBooking = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-gray-50">
      {/* Card Container */}
      <div className="border rounded-lg bg-white shadow-md p-4 lg:flex lg:gap-4">
        {/* Left Section - Image and Overview */}
        <div className="w-full lg:w-2/3">
          {/* Hotel Name and Rating */}
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Hilton Garden Inn Lucknow</h2>
              <div className="text-sm text-gray-500 mt-1">★★★★☆</div>
            </div>
            <div className="text-[#16A34A] text-sm font-semibold">+154 Property Photos</div>
          </div>

          {/* Images Section */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            <img
              src="https://via.placeholder.com/300"
              alt="Hotel"
              className="col-span-2 h-[200px] object-cover rounded-md"
            />
            <div className="flex flex-col gap-2">
              <img
                src="https://via.placeholder.com/150"
                alt="Room"
                className="h-[96px] object-cover rounded-md"
              />
              <img
                src="https://via.placeholder.com/150"
                alt="Guest Room"
                className="h-[96px] object-cover rounded-md"
              />
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-700 mb-4">
            Experience unparalleled luxury at this premium property offering well-appointed rooms,
            an incredible restaurant, a rooftop swimming pool, and world-class amenities.{" "}
            <span className="text-blue-500 cursor-pointer">More</span>
          </p>

          {/* Amenities */}
          <div className="flex gap-4 text-gray-600 mb-4">
            <button className="flex items-center gap-2 text-sm bg-gray-100 px-4 py-2 rounded-lg">
              🥗 Food and Dining
            </button>
            <button className="flex items-center gap-2 text-sm bg-gray-100 px-4 py-2 rounded-lg">
              📍 Location & Surroundings
            </button>
          </div>

          {/* Amenities Icons */}
          <div className="flex flex-wrap gap-4 text-gray-600">
            <span>🏊‍♂️ Swimming Pool</span>
            <span>🏋️ Gym</span>
            <span>🍴 Restaurant</span>
            <span>🎮 Indoor Games</span>
            <span>🛎️ 24-hour Room Service</span>
            <span>🍸 Lounge</span>
            <span>🍹 Bar</span>
            <button className="text-blue-500 font-semibold">+74 Amenities</button>
          </div>
        </div>

        {/* Right Section - Booking Details */}
        <div className="w-full lg:w-1/3 border rounded-lg p-4 bg-gray-100 shadow-inner">
          <div className="border-b pb-4 mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Twin Deluxe Room</h3>
            <p className="text-sm text-gray-600">Fits 2 Adults</p>
            <p className="text-sm text-gray-600">No meals included · Non-Refundable</p>
          </div>

          {/* Pricing */}
          <div className="border-b pb-4 mb-4">
            <h4 className="text-2xl font-bold text-green-600 mb-1">₹20,200</h4>
            <p className="text-sm text-gray-500">+ ₹3,636 taxes & fees</p>
          </div>

          {/* Booking Button */}
          <Link to='/Payment'>
          <button className="w-full bg-[#16A34A] text-white py-3 rounded-lg text-center font-semibold hover:bg-[#16A34A]">
            BOOK THIS NOW
          </button>
          </Link>
          <p className="text-blue-500 text-sm mt-2 text-center cursor-pointer">
            8 More Options
          </p>

          {/* Ratings and Location */}
          <div className="mt-4">
            <div className="flex items-center gap-2 text-[#16A34A]">
              <span className="text-2xl font-bold">4.1</span>
              <div className="text-gray-600">
                <p className="text-sm">Very Good</p>
                <p className="text-xs">(3106 ratings)</p>
              </div>
            </div>
            <p className="text-[#16A34A] text-sm mt-4 cursor-pointer">See All Reviews</p>
          </div>
          <div className="mt-4 flex items-center gap-2 text-gray-600">
            📍 Gomti Nagar
            <button className="text-[#16A34A] text-sm font-semibold">See on Map</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartBooking;
