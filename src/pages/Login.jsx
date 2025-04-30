import React, { useState } from "react";
import Hotel from "../assets/images/room1.webp";
import { Link } from "react-router-dom";

const LoginPage = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login attempt:", formData);
    };

    return (
        <div className="min-h-screen flex">
            {/* Login Form Section */}
            <div className="w-full md:w-[60%] bg-gradient-to-br from-[#1C3766] to-[#0F1E3C] p-8 flex items-center justify-center">
                <div className="relative z-10 max-w-lg w-full mx-auto"> {/* Expanded width */}
                    {/* Logo Section */}
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-[#CAA169] font-serif mb-2">
                            Luxury Hotel
                        </h1>
                    </div>

                    {/* Login Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
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

                        <div className="flex items-center justify-between">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className="mr-2 text-[#CAA169] focus:ring-[#CAA169] rounded"
                                />
                                <span className="text-white text-sm">Remember me</span>
                            </label>
                            <button
                                type="button"
                                className="text-[#CAA169] text-sm hover:underline"
                            >
                                Forgot password?
                            </button>
                        </div>
                        <div className="text-center">
                            <Link to="/Signup" className="font-semibold text-sm text-[#CAA169]">
                                Don’t have an account? Signup
                            </Link>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-[#CAA169] to-[#B68C4E] text-black font-bold py-3 px-4 rounded-lg hover:from-[#B68C4E] hover:to-[#CAA169] transition-all duration-300"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>

            {/* Image Section */}
            <div className="hidden md:block md:w-7/12 relative">
                <div
                    className="absolute inset-0 bg-black/30"
                    style={{
                        backgroundImage: `url(${Hotel})`, // Correct syntax to embed the image path
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                ></div>
            </div>
        </div>
    );
};

export default LoginPage;
