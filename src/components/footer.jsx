
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import vcs from "../assets/images/vcs.png";

const Footer = () => {
    const [date, setDate] = useState();

    const getYear = () => setDate(new Date().getFullYear());

    useEffect(() => {
        getYear();
    }, []);

    return (
        <>
            <div className='bg-[#f7f3fe] text-black p-8'>
                <div className='max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16'>
                    
                    <div className='flex-shrink-0 flex items-center justify-center'>
                        {/* <img src="" alt="Luxary Hotels" className='max-w-[200px] md:max-w-[230px] bg-blue-950' /> */}
                    </div>

                    <div className='flex-1'>
                        <h1 className='font-extrabold text-xl md:text-2xl lg:text-3xl mb-5'>Our Services</h1>
                        <div className='flex flex-col space-y-4'>
                            <Link className='text-base hover:text-[#f6729e]' to="/services">Gym & Fitness</Link>
                            <Link className='text-base hover:text-[#f6729e]' to="/services">Food & Baberage</Link>
                            <Link className='text-base hover:text-[#f6729e]' to="/services">Room Services</Link>
                        </div>
                    </div>

                    <div className='flex-1'>
                        <h1 className='font-extrabold text-xl md:text-2xl lg:text-3xl mb-5'>Rooms</h1>
                        <div className='flex flex-col space-y-4'>
                            <Link className='text-base hover:text-[#f6729e]' to="/room">Delux Room</Link>
                            <Link className='text-base hover:text-[#f6729e]' to="/room">Luxurious room</Link>
                            <Link className='text-base hover:text-[#f6729e]' to="/room">Classic Rooms</Link>
                        </div>
                    </div>

                    <div className='flex-1'>
                        <h1 className='font-extrabold text-xl md:text-2xl lg:text-3xl mb-5'>Quick Menu</h1>
                        <div className='flex flex-col space-y-4'>
                            <Link className='text-base hover:text-[#f6729e]' to="/contact">Get Enquiry</Link>
                        </div>
                    </div>
                
                </div>
            </div>

            <div className='bg-[#353f4f] text-white p-8'>
                <div className='max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-center'>
                    <div className='flex items-center space-x-4'>
                        <img src="" alt="Luxary Hotels" className='max-w-[100px]' />
                        <div className='font-bold text-base md:text-lg'>
                            <p>Luxary Hotels</p>
                        </div>
                    </div>
                    <div className='text-center lg:text-left mt-4 lg:mt-0'>
                        <p>©{date} Luxary Hotels</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;

