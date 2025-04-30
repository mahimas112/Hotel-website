import React from 'react'

const About = () => {
    return (
        <>
        <div className="container mx-auto px-4 mt-24">
            <div className="text-center mb-8 ">
                <h1 className="font-bold text-gray-600 text-6xl inline-block w-[400px]">
                    About Us
                </h1>
            </div>
            <div className="text-center mb-8 ">
                <h4 className="font-bold text-5xl text-gray-400 py-2 inline-block w-[400px]">
                    Get In Touch With Us
                </h4>
                <div className='mx-auto flex justify-center w-[500px] lg:w-[1000px]'>
                    <p className="text-lg font-normal text-gray-700 mt-10">Dolor sit amet consectetur, adipisicing elit. Ipsam, beatae maxime. Vel animi eveniet doloremque reiciendis soluta iste provident non rerum illum perferendis earum est architecto dolores vitae quia vero quod incidunt culpa corporis, porro doloribus. Voluptates nemo doloremque cum.</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default About