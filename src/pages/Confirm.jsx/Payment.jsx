import React, { useState } from "react";

const PaymentConfirm = () => {
    const [selectedMethod, setSelectedMethod] = useState(""); // Selected payment method
    const [showBookBox, setShowBookBox] = useState(false); // Show "Book Now" box

    const paymentMethods = [
        { name: "Google Pay", icon: "🟢" },
        { name: "PhonePe/Paytm/BHIM/UPI", icon: "🟠" },
        { name: "Credit/Debit/ATM Cards", icon: "💳" },
        { name: "Wallets", icon: "👜" },
        { name: "Netbanking", icon: "🌐" },
    ];

    const handleBookNow = () => {
        if (!selectedMethod) {
            alert("Please select a payment method.");
            return;
        }
        setShowBookBox(true); // Show the confirmation modal
    };

    return (
        <div className="container mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column: User Details & Payment Methods */}
            <div className="col-span-2 bg-white rounded-lg shadow p-4">
                {/* User Details */}
                <div className="border-b pb-4">
                    <div className="flex justify-between items-center">
                        <div>
                            <h3 className="font-bold text-lg">Your details</h3>
                            <p>XYZ</p>
                            <p>XYZ@gmail.com</p>
                            <p>123456789</p>
                        </div>
                        <button className="text-blue-500 font-semibold">Modify</button>
                    </div>
                </div>

                {/* Payment Methods */}
                <div className="mt-6">
                    <h3 className="font-bold text-lg">Choose payment method to pay</h3>
                    <p className="text-gray-500 text-sm">100% safe and secure payments</p>

                    {/* Pay At Hotel Option */}
                    <div
                        className={`border rounded-md p-4 flex justify-between items-center cursor-pointer mb-4 ${selectedMethod === "Pay At Hotel" ? "border-green-500 shadow-md" : "border-gray-300"
                            }`}
                        onClick={() => setSelectedMethod("Pay At Hotel")}
                    >
                        <div>
                            <p className="font-bold text-gray-800">Pay At Hotel</p>
                        </div>
                        <span className="text-lg">{selectedMethod === "Pay At Hotel" ? "✔" : ">"}</span>
                    </div>

                    {/* Explanation Section for Pay At Hotel */}
                    {selectedMethod === "Pay At Hotel" && (
                        <div className="bg-gray-100 p-4 rounded-md mb-4">
                            <p className="text-yellow-500 font-bold flex items-center">
                                <span className="mr-2">⭐</span> No payment needed today
                            </p>
                            <p className="text-sm text-gray-600">
                                We will confirm your stay without any charge. Pay directly at the hotel during your stay.
                            </p>
                        </div>
                    )}

                    {/* Pay Now Option */}
                    <div
                        className={`border rounded-md p-4 flex justify-between items-center cursor-pointer mb-4 ${selectedMethod === "Pay Now" ? "border-green-500 shadow-md" : "border-gray-300"
                            }`}
                        onClick={() => setSelectedMethod("Pay Now")}
                    >
                        <div>
                            <p className="font-bold text-gray-800">Pay Now</p>
                        </div>
                        <span className="text-lg">{selectedMethod === "Pay Now" ? "✔" : ">"}</span>
                    </div>

                    {/* Explanation Section for Pay Now */}
                    {selectedMethod === "Pay Now" && (
                        <div className="bg-gray-100 p-4 rounded-md mb-4">
                            <p className="text-green-500 font-bold flex items-center">
                                <span className="mr-2">💳</span> Secure Online Payment
                            </p>
                            <p className="text-sm text-gray-600">
                                Complete your booking by paying now via secure online payment methods.
                            </p>
                        </div>
                    )}

                    {/* Book Now Button */}
                    <button
                        className="w-full bg-green-500 text-white py-3 rounded-md font-bold text-center hover:bg-green-600"
                        onClick={handleBookNow}
                    >
                        Book Now
                    </button>
                </div>
            </div>

            {/* Right Column: Summary */}
            <div className="bg-white rounded-lg shadow p-4">
                <h3 className="font-extrabold text-xl">Summary</h3>

                {/* Booking Details */}
                <div className="mt-4">
                    <p className="text-base font-bold">Tue, 10 Dec – Wed, 11 Dec</p>
                    <p className="text-base font-bold">1 Room, 1 Guest</p>
                </div>

                {/* Pricing Details */}
                <div className="mt-4 text-sm">
                    <p className="flex justify-between">
                        <span className="font-bold text-lg">Room price for 1 Night x 1 Guest</span>
                        <span className="font-bold text-lg">₹3936</span>
                    </p>
                    <p className="flex justify-between text-green-600">
                        <span className="font-bold text-lg">Instant discount</span>
                        <span className="font-bold text-lg">-₹1471</span>
                    </p>
                    <p className="flex justify-between text-green-600">
                        <span className="font-bold text-lg">54% Coupon Discount</span>
                        <span className="font-bold text-lg">-₹1331</span>
                    </p>
                    <p className="flex justify-between">
                        <span className="font-bold text-lg">Wizard discount 5%</span>
                        <span className="font-bold text-lg">-₹57</span>
                    </p>
                    <p className="flex justify-between">
                        <span className="font-bold text-lg">Wizard Blue membership charge</span>
                        <span className="font-bold text-lg">₹57</span>
                    </p>
                    <p className="flex justify-between text-green-600">
                        <span className="font-bold text-lg">OYO Money Applied</span>
                        <span className="font-bold text-lg">-₹226</span>
                    </p>
                </div>

                {/* Payable Amount */}
                <div className="mt-6 border-t pt-4">
                    <h3 className="text-lg font-bold flex justify-between">
                        <span>Payable Amount</span>
                        <span>₹908</span>
                    </h3>
                    <p className="text-xs text-red-500 mt-2">
                        ⚡ 18 people booked this hotel today
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PaymentConfirm;
