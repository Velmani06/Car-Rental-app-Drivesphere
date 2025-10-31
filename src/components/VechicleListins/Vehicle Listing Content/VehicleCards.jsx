import React, { useState, useMemo } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

function VehicleCards({ cars = [], onView, sortType }) {
  const [selectedCar, setSelectedCar] = useState(null);
  const [showPayment, setShowPayment] = useState(false);

  // 🧠 Sort cars based on sortType received from parent
  const sortedCars = useMemo(() => {
    const sorted = [...cars];
    switch (sortType) {
      case "cheap":
        return sorted.sort(
          (a, b) =>
            parseInt(a.pricePerDay.replace(/\D/g, "")) -
            parseInt(b.pricePerDay.replace(/\D/g, ""))
        );
      case "expensive":
        return sorted.sort(
          (a, b) =>
            parseInt(b.pricePerDay.replace(/\D/g, "")) -
            parseInt(a.pricePerDay.replace(/\D/g, ""))
        );
      case "old":
        return sorted.sort((a, b) => a.carYear - b.carYear);
      case "new":
        return sorted.sort((a, b) => b.carYear - a.carYear);
      default:
        return sorted;
    }
  }, [cars, sortType]);

  // Handle "Read More"
  const handleReadMore = (car) => {
    if (onView) onView(car.id);
    setSelectedCar(car);
    setShowPayment(false);
  };

  const handleBookNow = () => setShowPayment(true);
  const handleConfirmBooking = () => {
    alert("✅ You have successfully booked the car!");
    setSelectedCar(null);
    setShowPayment(false);
  };

  return (
    <>
      {/* Main Container */}
      <div className="vehicle-card-container mt-20 w-[45rem] min-h-[100vh] overflow-hidden bg-white flex flex-col gap-10 max-lg:w-[50rem] max-[570px]:w-[25rem] max-[500px]:w-[20rem]">
        {sortedCars.map((car, index) => (
          <div
            key={index}
            className="card-container h-48 flex max-lg:h-80 justify-center max-md:flex-col max-md:h-auto shadow-xl bg-white"
          >
            {/* Left Image */}
            <div className="card-left w-[15rem] h-full max-lg:h-auto max-lg:w-[35rem] max-[500px]:w-[20rem]">
              <img
                className="w-[100%] h-[100%] object-cover"
                src={car.carImage}
                alt={car.carTitle}
              />
            </div>

            {/* Car Info Section */}
            <div className="card-right w-[30rem] h-full pl-8 pt-2 flex flex-col justify-center items-start">
              <h1 className="text-base font-medium uppercase max-md:font-semibold max-md:text-xl">
                {car.carTitle}
              </h1>

              <div className="car-dets flex justify-center items-center gap-4 mt-6 max-lg:flex-col max-lg:items-start max-lg:gap-0 max-md:flex-row max-md:gap-10 max-[500px]:gap-2">
                {/* Left Details */}
                <div className="left-dets">
                  <p className="font-semibold text-sm mt-2">
                    Year: <span className="font-light">{car.carYear}</span>
                  </p>
                  <p className="font-semibold text-sm mt-2">
                    Fuel: <span className="font-light">{car.Fuel}</span>
                  </p>
                  <p className="font-semibold text-sm mt-2">
                    Horsepower: <span className="font-light">200 hp</span>
                  </p>
                  <p className="font-semibold text-sm mt-2">
                    Condition: <span className="font-light">Excellent</span>
                  </p>
                </div>

                {/* Center Details */}
                <div className="center-dets">
                  <p className="font-semibold text-sm mt-2">
                    Mileage: <span className="font-light">{car.carKm}</span>
                  </p>
                  <p className="font-semibold text-sm mt-2">
                    Engine: <span className="font-light">1900 cm³</span>
                  </p>
                  <p className="font-semibold text-sm mt-2">
                    Drive: <span className="font-light">4x4</span>
                  </p>
                  <p className="font-semibold text-sm mt-2">
                    Stock Status: <span className="font-light">In Stock</span>
                  </p>
                </div>

                {/* Right Side (Price + Read More) */}
                <div className="right-dets flex flex-col justify-center items-start max-lg:hidden max-md:flex max-[570px]:hidden">
                  <p className="text-sm">Price:</p>
                  <p className="text-base font-semibold text-[#E50914]">
                    ₹{car.pricePerDay}{" "}
                    <span className="text-sm font-light text-black">
                      / per day
                    </span>
                  </p>

                  <p
                    onClick={() => handleReadMore(car)}
                    className="flex justify-center items-center gap-2 text-sm text-[#E50914] font-bold cursor-pointer hover:underline transition-all duration-150 ease-linear"
                  >
                    READ MORE <FaAngleDoubleRight className="w-3 h-3" />
                  </p>
                </div>
              </div>
            </div>

            {/* Price (for smaller screens) */}
            <div className="right-dets hidden flex-col justify-center w-[20rem] items-start max-lg:flex max-md:hidden">
              <p className="text-sm">Price:</p>
              <p className="text-xl font-semibold text-[#E50914]">
                ₹{car.pricePerDay}{" "}
                <span className="text-sm font-light text-black">/ per day</span>
              </p>
              <p
                onClick={() => handleReadMore(car)}
                className="flex justify-center items-center gap-2 text-sm text-[#E50914] font-bold cursor-pointer hover:underline transition-all duration-150 ease-linear"
              >
                READ MORE <FaAngleDoubleRight className="w-3 h-3" />
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCar && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-[400px] shadow-lg text-center">
            <h2 className="text-2xl font-semibold mb-2">
              {selectedCar.carTitle}
            </h2>
            <img
              src={selectedCar.carImage}
              alt={selectedCar.carTitle}
              className="rounded-lg w-full h-40 object-cover mb-4"
            />
            <p className="text-gray-600 text-sm mb-3 leading-relaxed">
              The <b>{selectedCar.carTitle}</b> offers a premium driving
              experience with excellent comfort and performance. This{" "}
              {selectedCar.Fuel}-powered model provides great fuel efficiency
              and reliability.
            </p>
            <ul className="text-sm text-left text-gray-700 mb-3">
              <li>• Year: {selectedCar.carYear}</li>
              <li>• Mileage: {selectedCar.carKm}</li>
              <li>• Engine: 1900 cm³</li>
              <li>• Transmission: Automatic</li>
              <li>• Drive Type: 4x4</li>
            </ul>
            <p className="text-lg font-semibold text-[#E50914] mb-3">
              Price: ₹{selectedCar.pricePerDay} / day
            </p>

            {!showPayment ? (
              <button
                onClick={handleBookNow}
                className="bg-[#E50914] text-white px-5 py-2 rounded-lg hover:bg-[#b4080f]"
              >
                Book Now
              </button>
            ) : (
              <>
                <h3 className="text-lg font-semibold mt-4 mb-2">
                  Payment Details
                </h3>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleConfirmBooking();
                  }}
                  className="flex flex-col gap-2 text-left"
                >
                  <label className="text-sm font-medium">Name on Card</label>
                  <input
                    type="text"
                    required
                    className="border rounded-md p-2 text-sm"
                    placeholder="Enter your name"
                  />
                  <label className="text-sm font-medium">Card Number</label>
                  <input
                    type="text"
                    required
                    maxLength="16"
                    className="border rounded-md p-2 text-sm"
                    placeholder="1234 5678 9012 3456"
                  />
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <label className="text-sm font-medium">Expiry</label>
                      <input
                        type="text"
                        required
                        className="border rounded-md p-2 text-sm w-full"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="text-sm font-medium">CVV</label>
                      <input
                        type="password"
                        required
                        maxLength="3"
                        className="border rounded-md p-2 text-sm w-full"
                        placeholder="123"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-5 py-2 rounded-lg mt-4 hover:bg-green-700"
                  >
                    Confirm Booking
                  </button>
                </form>
              </>
            )}
            <button
              onClick={() => {
                setSelectedCar(null);
                setShowPayment(false);
              }}
              className="block mt-4 text-gray-500 hover:text-black"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default VehicleCards;
