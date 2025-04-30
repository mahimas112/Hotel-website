import React, { useState } from "react";
import Hotel from "../assets/images/slider/slider2.webp";

const SignupPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        console.log("Signup attempt:", formData);
    };

    return (
        <div className="min-h-screen flex">
            {/* Signup Form Section */}
            <div className="w-full md:w-[60%] bg-gradient-to-br from-[#1C3766] to-[#0F1E3C] p-8 flex items-center justify-center">
                <div className="relative z-10 max-w-[500px] w-full mx-auto"> {/* Expanded form */}
                    {/* Logo Section */}
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-[#CAA169] font-serif mb-2">
                            Luxury Hotel
                        </h1>
                    </div>

                    {/* Signup Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-[#CAA169] text-sm font-medium mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-transparent border border-[#B68C4E] rounded-lg p-3 text-white focus:border-[#CAA169] focus:outline-none"
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-[#CAA169] text-sm font-medium mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-transparent border border-[#B68C4E] rounded-lg p-3 text-white focus:border-[#CAA169] focus:outline-none"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-[#CAA169] text-sm font-medium mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border border-[#B68C4E] rounded-lg p-3 text-white focus:border-[#CAA169] focus:outline-none"
                                    placeholder="Enter your password"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#CAA169]"
                                >
                                    {showPassword ? "👁️" : "👁️‍🗨️"}
                                </button>
                            </div>
                        </div>

                        <div>
                            <label className="block text-[#CAA169] text-sm font-medium mb-2">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="w-full bg-transparent border border-[#B68C4E] rounded-lg p-3 text-white focus:border-[#CAA169] focus:outline-none"
                                placeholder="Confirm your password"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-[#CAA169] to-[#B68C4E] text-black font-bold py-3 px-4 rounded-lg hover:from-[#B68C4E] hover:to-[#CAA169] transition-all duration-300"
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>

            {/* Image Section */}
            <div className="hidden md:block md:w-[40%] relative">
                <div
                    className="absolute inset-0 bg-black/30"
                    style={{
                        backgroundImage: `url(${Hotel})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                ></div>
            </div>
        </div>
    );
};

export default SignupPage;
