import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function VehicleListingSidebar() {
  const [pickupDate, setPickupDate] = useState(null);
  const [dropoffDate, setDropoffDate] = useState(null);
  const [sliderValue, setSliderValue] = useState(5000);
  const [selectedType, setSelectedType] = useState(null);

  const handleValueChange = (event) => {
    const value = parseInt(event.target.value) * 100; // range *100 = ₹
    setSliderValue(value);
  };

  const handleTypeSelect = (type) => {
    setSelectedType((prev) => (prev === type ? null : type)); // toggle selection
  };

  const handleReset = () => {
    setPickupDate(null);
    setDropoffDate(null);
    setSliderValue(5000);
    setSelectedType(null);
  };

  return (
    <div className="sidebar-container w-[18rem] bg-white p-8 shadow-2xl min-h-[100vh] sticky top-0 rounded-xl max-lg:w-[50rem] max-md:w-[35rem] max-[570px]:w-[25rem] max-[500px]:w-[20rem]">
      {/* BOOKING TIME */}
      <div className="booking-time mt-6">
        <h1 className="font-semibold text-lg text-gray-800 border-b pb-2 mb-6">
          BOOKING TIME
        </h1>

        <div className="flex flex-col space-y-5">
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Pick-up Date
            </label>
            <DatePicker
              className="w-full h-10 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DC2D13]"
              placeholderText="Select pick-up date"
              selected={pickupDate}
              onChange={(date) => setPickupDate(date)}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              showMonthDropdown
              showYearDropdown
              popperPlacement="bottom"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Drop-off Date
            </label>
            <DatePicker
              className="w-full h-10 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DC2D13]"
              placeholderText="Select drop-off date"
              selected={dropoffDate}
              onChange={(date) => setDropoffDate(date)}
              dateFormat="dd/MM/yyyy"
              minDate={pickupDate || new Date()}
              showMonthDropdown
              showYearDropdown
              popperPlacement="bottom"
            />
          </div>
        </div>
      </div>

      {/* PRICE RANGE */}
      <div className="price-range mt-12">
        <h1 className="font-semibold text-lg text-gray-800 border-b pb-2 mb-4">
          PRICE RANGE
        </h1>
        <input
          type="range"
          min="0"
          max="100"
          onChange={handleValueChange}
          className="w-full accent-[#DC2D13] cursor-pointer"
        />
        <div className="text-center mt-4">
          <p className="inline-block text-white text-sm font-bold bg-[#DC2D13] px-4 py-1 rounded-md">
            ₹{sliderValue.toLocaleString()}
          </p>
        </div>
      </div>

      {/* VEHICLE BODY TYPE */}
      <div className="vehicle-body-type mt-12">
        <h1 className="font-semibold text-lg text-gray-800 border-b pb-2 mb-6 uppercase">
          Vehicle Body Type
        </h1>
        <div className="grid grid-cols-2 gap-4">
          {["SUV", "SEDAN", "HATCHBACK", "MUV"].map((type) => (
            <button
              key={type}
              onClick={() => handleTypeSelect(type)}
              className={`uppercase text-xs font-semibold py-2 rounded-md transition-all duration-150 ${
                selectedType === type
                  ? "bg-[#DC2D13] text-white"
                  : "bg-[#555555] text-white hover:bg-[#DC2D13]"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* RESET FILTER */}
      <div className="reset-filter mt-12">
        <button
          onClick={handleReset}
          className="w-full bg-[#DC2D13] text-white font-bold py-2 rounded-md hover:bg-[#FFA500] transition-all duration-150 ease-in-out"
        >
          RESET FILTER
        </button>
      </div>
    </div>
  );
}

export default VehicleListingSidebar;
