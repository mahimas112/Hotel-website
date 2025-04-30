import React from 'react';
import room1 from "../../assets/images/room1.webp";
import room2 from "../../assets/images/room2.jpg";
import room3 from "../../assets/images/room3.jpg";

const Rooms = () => {
    return (
        <div className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-5">
                    <h6 className="text-lg font-semibold">What I Can Do for You</h6>
                    <h3 className="text-3xl font-bold">Our Favorite Rooms</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[room1, room2, room3].map((room, index) => (
                        <div key={index} className="relative overflow-hidden group">
                            <img
                                src={room}
                                alt={`Room ${index + 1}`}
                                className="w-full transition-transform duration-400 ease-in-out transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out transform translate-y-10 group-hover:translate-y-0 bg-black bg-opacity-50">
                                <div className="bg-white p-6 mx-10 rounded-md text-center">
                                    <h5 className="text-xl font-semibold mb-4 underline">Royal Suite</h5>
                                    <p className="mb-4">
                                        Discover five of our favourite dresses from our new collection that are destined to be worn and loved immediately
                                    </p>
                                    <p className="font-bold text-lg mb-4">$220 / Per Night</p>
                                    <a
                                        href="/cart"
                                        className="inline-block bg-[#CAA169] hover:bg-[#9e8a4e] text-white font-bold py-2 px-4 rounded transition duration-300"
                                    >
                                        Book Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Rooms;
