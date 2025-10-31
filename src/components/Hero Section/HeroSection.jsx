import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const [pickupDate, setPickupDate] = useState(null);
  const [dropoffDate, setDropoffDate] = useState(null);
  const [carModel, setCarModel] = useState(""); // Track selected car model
  const navigate = useNavigate();

  const handleFindItNow = () => {
    if (!pickupDate || !dropoffDate || !carModel) {
      alert("Please select all fields before proceeding!");
      return;
    }

    // Navigate to vehicle listing page and pass selected data
    navigate("/vechileListing", {
      state: {
        pickupDate,
        dropoffDate,
        carModel,
      },
    });
  };

  return (
    <div className="hero-container w-full h-[100vh] -z-50 top-0">
      <div className="hero-bg w-full h-screen bg-hero-pattern bg-no-repeat bg-center bg-cover">
        <div className="hero-content bg-[#000000a2] w-full h-screen flex flex-col justify-center items-center text-center px-4">
          {/* Hero Heading */}
          <div className="hero-heading flex flex-col justify-center items-center">
            <h1 className="text-8xl text-white font-extrabold tracking-wide leading-tight drop-shadow-[0_5px_10px_rgba(0,0,0,0.7)]">
              Best Car Rental Prices
            </h1>
            <p className="text-3xl text-white mt-4 font-semibold">
              Practical & Convenient Auto Hire, As Low As $15 / day
            </p>
          </div>

          {/* Input Fields */}
          <div className="inputs w-full mt-14 flex justify-center items-center gap-10 max-md:flex-col">
            <form className="flex items-center gap-10 justify-center max-md:flex-col max-md:w-full">
              {/* Pick-up Date */}
              <div className="date w-64 max-md:w-[90%] flex flex-col items-center">
                <DatePicker
                  className="w-64 h-12 px-4 text-lg rounded-md text-gray-800 font-medium"
                  placeholderText="Select Date"
                  selected={pickupDate}
                  onChange={(date) => setPickupDate(date)}
                  dateFormat={"dd/MM/yyyy"}
                  minDate={new Date()}
                  showMonthDropdown
                  showYearDropdown
                />
                <p className="text-white text-base mt-3 font-bold">
                  PICK-UP DATE
                </p>
              </div>

              {/* Drop-off Date */}
              <div className="date w-64 max-md:w-[90%] flex flex-col items-center">
                <DatePicker
                  className="w-64 h-12 px-4 text-lg rounded-md text-gray-800 font-medium"
                  placeholderText="Select Date"
                  selected={dropoffDate}
                  onChange={(date) => setDropoffDate(date)}
                  dateFormat={"dd/MM/yyyy"}
                  minDate={pickupDate || new Date()}
                  showMonthDropdown
                  showYearDropdown
                />
                <p className="text-white text-base mt-3 font-bold">
                  DROP-OFF DATE
                </p>
              </div>

              {/* Car Model Select */}
              <div className="select w-64 max-md:w-[90%] flex flex-col items-center">
                <select
                  className="w-64 h-12 px-4 text-lg rounded-md text-gray-800 font-medium"
                  value={carModel}
                  onChange={(e) => setCarModel(e.target.value)}
                >
                  <option value="" disabled>
                    ALL MODELS
                  </option>
                  <option value="TATA">TATA</option>
                  <option value="Mahindra">Mahindra</option>
                  <option value="Maruti Suzuki">Maruti Suzuki</option>
                  <option value="Hyundai">Hyundai</option>
                  <option value="Honda">Honda</option>
                  <option value="Toyota">Toyota</option>
                  <option value="Ford">Ford</option>
                  <option value="Kia">Kia</option>
                </select>
                <p className="text-white text-base mt-3 font-bold">
                  MAKERS OF VEHICLES
                </p>
              </div>
            </form>

            {/* Find It Now Button */}
            <button
              className="text-white px-12 py-4 mb-8 bg-[#DC2D13] text-lg font-bold rounded-md hover:bg-[#FFA500] transition-all duration-200"
              type="button"
              onClick={handleFindItNow}
            >
              FIND IT NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
