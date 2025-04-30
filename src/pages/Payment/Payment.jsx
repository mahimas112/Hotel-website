import React from "react";
import { Link } from "react-router-dom";

const PaymentComponent = () => {
    return (
        <div className="w-full h-full bg-gray-50 flex justify-center items-center p-2">
            <div className="flex flex-col md:flex-row gap-6 w-full max-w-5xl bg-white shadow-md rounded-lg overflow-hidden p-2 mt-5">
                {/* Left Section - Form */}
                <div className="flex-1 p-6">
                    {/* Title */}
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">
                        <span className="text-black font-bold">1</span> Enter your details
                    </h2>
                    <p className="text-gray-500 mb-6">
                        We will use these details to share your booking information
                    </p>

                    <form className="space-y-6">
                        {/* Full Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                Full Name
                            </label>
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Email Address */}
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="Example@gmail.com"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Mobile Number */}
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                Mobile Number
                            </label>
                            <div className="flex items-center gap-2">
                                <select className="border border-gray-300 rounded-md px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option value="+91">+91</option>
                                    <option value="+1">+1</option>
                                    <option value="+44">+44</option>
                                </select>
                                <input
                                    type="text"
                                    placeholder="9876543210"
                                    className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button className="text-green-500 font-medium">Verify</button>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <Link to='/Confirm'>
                            <button
                                type="submit"
                                className="w-full bg-green-500 text-white py-3 rounded-md text-center font-medium hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                            >
                                Continue
                            </button>
                        </Link>
                    </form>
                </div>

                {/* Right Section - Booking Summary */}
                <div className="flex-1 p-6 bg-gray-100">
                    {/* Booking Summary Title */}
                    <div className="border-b pb-4 mb-4">
                        <h2 className="text-lg font-semibold text-gray-800">
                            Super Townhouse Mukut Bazar
                        </h2>
                        <p className="text-sm text-gray-500">1 Night</p>
                    </div>

                    {/* Booking Details */}
                    <div className="space-y-4">
                        <div className="flex justify-between text-gray-600">
                            <span>Room price for 1 Night X 1 Guest</span>
                            <span>₹3936</span>
                        </div>
                        <div className="flex justify-between text-gray-600">
                            <span>Instant discount</span>
                            <span className="text-red-500">-₹1471</span>
                        </div>
                        <div className="flex justify-between text-gray-600">
                            <span>54% Coupon Discount</span>
                            <span className="text-red-500">-₹1331</span>
                        </div>
                        <div className="flex justify-between text-gray-600">
                            <span>Wizard discount 5%</span>
                            <span className="text-red-500">-₹57</span>
                        </div>
                        <div className="flex justify-between text-gray-600">
                            <span>Wizard Blue membership charge</span>
                            <span>₹57</span>
                        </div>
                        <div className="flex justify-between text-gray-600">
                            <span>OYO Money Applied</span>
                            <span className="text-red-500">-₹226</span>
                        </div>
                    </div>

                    {/* Payable Amount */}
                    <div className="mt-4 border-t pt-4">
                        <div className="flex justify-between font-semibold text-lg text-gray-800">
                            <span>Payable Amount</span>
                            <span>₹908</span>
                        </div>
                    </div>

                    {/* Booking Alert */}
                    <div className="mt-6 text-center text-sm text-red-500 font-medium">
                        ⚡ 18 people booked this hotel today
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentComponent;
