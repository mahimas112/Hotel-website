import React, { useState } from 'react';
import Room from '../../assets/images/Hotel.jpg'; // Replace with your image path
import CheckInCheckOut from '../../components/CheckInCheckOut';

const ConfirmHero = () => {

    // State to toggle form fields
    const [isChecked, setIsChecked] = useState(false);

    // Function to handle the form submission
    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Optionally, you can add logic for handling the form submission here.
    };

    return (
        <section id="home" className="banner_wrapper p-0 relative">
            {/* Hero Image */}
            <div
                className="hero-image relative"
                style={{
                    backgroundImage: `url(${Room})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100vh',
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="text-center text-white px-4 md:px-12">
                        <h1 className="text-3xl md:text-4xl font-bold">
                            Welcome to Hotel in Dubai
                        </h1>
                        <p className="text-lg mt-4 md:text-xl">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConfirmHero;
