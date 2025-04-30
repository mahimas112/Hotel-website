import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // Main styles
import "react-date-range/dist/theme/default.css"; // Default theme
import { format } from "date-fns";

const CheckInCheckOut = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [showRooms, setShowRooms] = useState(false);

  // State for date range
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  // State for other form fields
  const [formData, setFormData] = useState({
    adults: 1,
    children: 0,
    name: "",
    email: "",
    contactNumber: "",
  });

  const [showDateRangePicker, setShowDateRangePicker] = useState(false);

  const calendarRef = useRef(null);

  // Close date picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target)
      ) {
        setShowDateRangePicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckAvailability = () => {
    if (!dateRange[0].startDate || !dateRange[0].endDate) {
      alert("Please select the check-in and check-out dates.");
      return;
    }
    setIsChecked(true);
    setShowRooms(true);

    // Redirect to /roombooking path
    navigate("/roombooking");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    console.log("Form Data:", formData);
    console.log("Date Range:", dateRange);
  };

  return (
    <div className="container mx-auto px-4">
      <form
        onSubmit={handleFormSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-center"
      >
        {/* If isChecked is false, show the date and guest inputs */}
        {!isChecked ? (
          <>
            {/* Check-in and Check-out */}
            <div className="relative col-span-1 sm:col-span-2 lg:col-span-2 bg-white">
              <button
                type="button"
                onClick={() => setShowDateRangePicker(!showDateRangePicker)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#CAA169] focus:outline-none"
              >
                {`${format(dateRange[0].startDate, "dd/MM/yyyy")} - ${format(
                  dateRange[0].endDate,
                  "dd/MM/yyyy"
                )}`}
              </button>
              {showDateRangePicker && (
                <div
                  ref={calendarRef}
                  className="absolute z-10 mt-2 bg-white border border-gray-300 rounded-md shadow-md"
                >
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDateRange([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dateRange}
                    rangeColors={["#CAA169"]}
                  />
                </div>
              )}
            </div>

            {/* Adults */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-1">
              <select
                name="adults"
                value={formData.adults}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#CAA169] focus:outline-none"
              >
                <option value="1">1 Adult</option>
                <option value="2">2 Adults</option>
                <option value="3">3 Adults</option>
                <option value="4">4 Adults</option>
              </select>
            </div>

            {/* Children */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-1">
              <select
                name="children"
                value={formData.children}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#CAA169] focus:outline-none"
              >
                <option value="0">No Children</option>
                <option value="1">1 Child</option>
                <option value="2">2 Children</option>
                <option value="3">3 Children</option>
              </select>
            </div>

            {/* Button */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-1">
              <button
                type="button"
                onClick={handleCheckAvailability}
                className="w-full px-4 py-2 bg-[#CAA169] text-white font-bold rounded-md hover:bg-[#B68C4E] focus:outline-none focus:ring-2 focus:ring-[#CAA169]"
              >
                Check Availability
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Name */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-1">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#CAA169] focus:outline-none"
              />
            </div>

            {/* Email */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-1">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#CAA169] focus:outline-none"
              />
            </div>

            {/* Contact Number */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-1">
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleInputChange}
                placeholder="Your Contact Number"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#CAA169] focus:outline-none"
              />
            </div>

            {/* Submit Button */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-1">
              <button
                type="submit"
                className="w-full px-4 py-2 bg-[#CAA169] text-white font-bold rounded-md hover:bg-[#B68C4E] focus:outline-none focus:ring-2 focus:ring-[#CAA169]"
              >
                Submit
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default CheckInCheckOut;
