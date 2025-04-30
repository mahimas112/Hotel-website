import React from "react";
import Room1 from "../../assets/images/Room.jpg";
import Room2 from "../../assets/images/room2.jpg";
import { Link } from "react-router-dom";

const RoomBooking = () => {
  const rooms = [
    {
      id: 1,
      title: "Super Townhouse Mukut Bazar",
      location: "Sharda Nagar, Lucknow",
      rating: 4.4,
      reviews: 557,
      description: "Very Good",
      price: 687,
      originalPrice: 3804,
      discount: 77,
      additionalPrice: 163,
      amenities: ["Free Wifi", "Geyser", "Power backup", "7 more"],
      image: Room1,
      tag: "Company-Serviced",
      bookingsToday: 18,
    },
    {
      id: 2,
      title: "Super Hotel O Banthara near Airport",
      location: "Near Banthara Police Station, Lucknow",
      rating: 4.7,
      reviews: 255,
      description: "Excellent",
      price: 591,
      originalPrice: 2782,
      discount: 74,
      additionalPrice: 106,
      amenities: ["Elevator", "Free Wifi", "Geyser", "4 more"],
      image: Room2,
      tag: "Company-Serviced",
      bookingsToday: null,
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {rooms.map((room) => (
        <div
          key={room.id}
          className="flex flex-wrap lg:flex-nowrap border rounded-lg p-4 mb-6 bg-white shadow-md"
        >
          {/* Image Section */}
          <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
            <img
              src={room.image}
              alt={room.title}
              className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[250px] object-cover rounded-lg"
            />
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-2/3 px-4">
            {/* Header */}
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                {room.title}
              </h3>
              {room.bookingsToday && (
                <p className="text-red-600 text-sm sm:text-base">
                  🔥 {room.bookingsToday} people booked this hotel today
                </p>
              )}
            </div>
            <p className="text-gray-600 text-sm sm:text-base mb-2">
              {room.location}
            </p>

            {/* Ratings */}
            <div className="flex items-center mb-2">
              <span className="text-green-600 font-bold mr-2 text-sm sm:text-base">
                {room.rating} ⭐
              </span>
              <span className="text-gray-500 text-sm sm:text-base">
                ({room.reviews} Ratings) - {room.description}
              </span>
            </div>

            {/* Amenities */}
            <div className="flex flex-wrap items-center gap-2 mb-4 text-gray-600">
              {room.amenities.map((amenity, index) => (
                <span
                  key={index}
                  className="flex items-center gap-1 text-xs sm:text-sm bg-gray-100 px-2 py-1 rounded-md"
                >
                  {amenity}
                </span>
              ))}
            </div>

            {/* Pricing */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
              <div>
                <h4 className="text-lg font-bold text-green-700">
                  ₹{room.price}{" "}
                  <span className="line-through text-gray-500 text-sm sm:text-base">
                    ₹{room.originalPrice}
                  </span>
                  <span className="ml-2 text-red-500">{room.discount}% off</span>
                </h4>
                <p className="text-gray-500 text-xs sm:text-sm">
                  + ₹{room.additionalPrice} taxes & fees · per room per night
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-bold hover:bg-gray-300 text-sm sm:text-base">
                View Details
              </button>
              <Link to='/cart'>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 text-sm sm:text-base">
                Book Now
              </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoomBooking;
