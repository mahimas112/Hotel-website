// import React from 'react';

// const ContactForm = () => {
//   return (
//     <div className="our-location">
//       <h2 className="text-2xl font-bold mb-6">Explore Our Office Worldwide</h2>

//       <div className="contact-info flex justify-between mb-8">
//         <div className="location">
//           <span className="font-medium">Location</span>
//           <p>New Hyde Park, NY 11040</p>
//         </div>

//         <div className="phone">
//           <span className="font-medium">Phone No</span>
//           <p>(+91) 333 666 0021</p>
//         </div>

//         <div className="email">
//           <span className="font-medium">Email</span>
//           <p>support@example.com</p>
//         </div>
//       </div>

//       <form className="contact-form bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//         <div className="form-group mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
//             Your Name
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="name"
//             type="text"
//             placeholder="Enter your name"
//             required
//           />
//         </div>

//         <div className="form-group mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
//             Your Email
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="email"
//             type="email"
//             placeholder="Enter your email"
//             required
//           />
//         </div>

//         <div className="form-group mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="subject">
//             Subject
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="subject"
//             type="text"
//             placeholder="Enter the subject"
//             required
//           />
//         </div>

//         <div className="form-group mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
//             Message
//           </label>
//           <textarea
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="message"
//             rows="5"
//             placeholder="Enter your message"
//             required
//           ></textarea>
//         </div>

//         <div className="flex items-center justify-between">
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="button"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;



import React, { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        checkIn: "",
        checkOut: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        alert("Thank you for contacting us! We will get back to you soon.");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#1C3766] to-[#0F1E3C] flex items-center justify-center p-4">
            <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
                {/* Header */}
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
                    Contact Us
                </h2>
                <p className="text-gray-600 text-center mb-8">
                    Fill in the details below to book your stay or ask any questions.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Enter your full name"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Enter your phone number"
                            required
                        />
                    </div>

                    {/* Dates */}
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full">
                            <label className="block text-gray-700 font-medium mb-2">
                                Check-In Date
                            </label>
                            <input
                                type="date"
                                name="checkIn"
                                value={formData.checkIn}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                required
                            />
                        </div>
                        <div className="w-full">
                            <label className="block text-gray-700 font-medium mb-2">
                                Check-Out Date
                            </label>
                            <input
                                type="date"
                                name="checkOut"
                                value={formData.checkOut}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                required
                            />
                        </div>
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            Additional Message
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Enter any additional requests or questions"
                            rows="4"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-3 px-4 rounded-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
