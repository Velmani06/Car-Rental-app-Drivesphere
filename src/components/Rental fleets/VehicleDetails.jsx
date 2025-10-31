import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function VehicleDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const car = location.state; // receives data from navigate()

  if (!car) {
    return (
      <div className="text-center mt-20">
        <p className="text-lg text-gray-700">Car details not found.</p>
        <button
          className="mt-4 bg-[#DD3219] text-white px-4 py-2 rounded"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 mt-8 bg-gray-100 rounded-lg shadow-md">
      {/* Image */}
      <img
        src={car.carImage}
        alt={car.carTitle}
        className="w-full h-[400px] object-cover rounded-md mb-6"
      />

      {/* Vehicle Info */}
      <h2 className="text-3xl font-semibold mb-2">{car.carTitle}</h2>
      <p className="text-lg text-gray-700 mb-1">Year: {car.carYear}</p>
      <p className="text-lg text-gray-700 mb-1">Mileage: {car.carKm}</p>
      <p className="text-lg text-gray-700 mb-1">Fuel: {car.fuelType}</p>
      <p className="text-lg text-gray-700 mb-3">Top Speed: {car.carTopSpeed}</p>

      <p className="text-2xl font-bold text-[#DD3219] mb-6">
        ₹{car.pricePerDay} / day
      </p>

      {/* Booking Section */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-3">Book This Car</h3>
        <p className="text-gray-600 mb-4">
          Select pickup and drop-off dates to check availability.
        </p>
        <button
          className="bg-[#DD3219] text-white px-6 py-2 rounded-md hover:bg-[#bb2b14]"
          onClick={() => alert("This car is available for booking ✅")}
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

export default VehicleDetails;
