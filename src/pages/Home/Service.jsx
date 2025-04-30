import React from 'react';
import service1 from "../../assets/images/services/service1.webp";
import service2 from "../../assets/images/services/service2.webp";
import service3 from "../../assets/images/services/service3.webp";

const Service = () => {
    return (
        <section id="services" className="services_wrapper py-20 bg-[var(--bg-color)]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-5">
                    <h6 className="text-lg font-semibold">What I Can Do for You</h6>
                    <h3 className="text-3xl font-bold">Our Services</h3>
                </div>

                {/* Services Cards with Flexbox Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Service 1 */}
                    <div className="service-item w-full">
                        <div className="overflow-hidden bg-[var(--bg-color)]">
                            <img
                                src={service1}
                                className="w-full h-auto transition-transform duration-400 ease-in-out transform hover:scale-105"
                                alt="Room Service"
                            />
                            <div className="service-content p-6 bg-white">
                                <h5 className="text-xl font-semibold mb-4">Room Service</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, explicabo eaque. Quos, maiores illum! Sint labore numquam beatae odit?</p>
                            </div>
                        </div>
                    </div>

                    {/* Service 2 */}
                    <div className="service-item w-full">
                        <div className="overflow-hidden bg-[var(--bg-color)]">
                            <img
                                src={service2}
                                className="w-full h-auto transition-transform duration-400 ease-in-out transform hover:scale-105"
                                alt="Spa & Wellness"
                            />
                            <div className="service-content p-6 bg-white">
                                <h5 className="text-xl font-semibold mb-4">Spa & Wellness</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, explicabo eaque. Quos, maiores illum! Sint labore numquam beatae odit?</p>
                            </div>
                        </div>
                    </div>

                    {/* Service 3 */}
                    <div className="service-item w-full">
                        <div className="overflow-hidden bg-[var(--bg-color)]">
                            <img
                                src={service3}
                                className="w-full h-auto transition-transform duration-400 ease-in-out transform hover:scale-105"
                                alt="Gym & Fitness"
                            />
                            <div className="service-content p-6 bg-white">
                                <h5 className="text-xl font-semibold mb-4">Gym & Fitness</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, explicabo eaque. Quos, maiores illum! Sint labore numquam beatae odit?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;
