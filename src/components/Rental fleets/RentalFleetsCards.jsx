import React, { useState, useMemo } from "react";
import CarsData from "../../Data/RentalFleets";
import { RiSteeringLine } from "react-icons/ri";
import { TbRoad } from "react-icons/tb";
import { IoMdSpeedometer } from "react-icons/io";
import { FaAnglesRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function RentalFleetsCards({ isButton, sortType }) {
  const navigate = useNavigate();
  const [filterType, setFilterType] = useState("all");

  // ✅ Move helper functions outside useMemo so JSX can access them
  const getPrice = (val) => {
    if (typeof val === "string") return parseFloat(val.replace(/\D/g, ""));
    return val;
  };

  const getYear = (val) => parseInt(val) || 0;

  // ✅ Filter + Sort Cars
  const filteredCars = useMemo(() => {
    let cars = [...CarsData];

    // 🔹 Filter by type
    if (filterType !== "all") {
      cars = cars.filter((car) =>
        car.carImage.toLowerCase().includes(filterType.toLowerCase())
      );
    }

    // 🔹 Sort based on selected type
    cars.sort((a, b) => {
      const priceA = getPrice(a.pricePerDay);
      const priceB = getPrice(b.pricePerDay);
      const yearA = getYear(a.carYear);
      const yearB = getYear(b.carYear);

      switch (sortType) {
        case "cheap":
          return priceA - priceB;
        case "expensive":
          return priceB - priceA;
        case "old":
          return yearA - yearB;
        case "new":
          return yearB - yearA;
        default:
          return 0;
      }
    });

    return cars;
  }, [filterType, sortType]);

  return (
    <div
      className={`cars-container overflow-hidden ${
        isButton
          ? "h-[270vh] max-lg:h-[250vh] max-md:h-[300vh]"
          : "min-h-[500vh]"
      }`}
    >
      {/* 🔹 Filter Buttons */}
      <div className="flex justify-center gap-3 mt-6 flex-wrap">
        {["all", "hatchback", "muv", "sedan", "suv_sports"].map((type) => (
          <button
            key={type}
            onClick={() => setFilterType(type)}
            className={`px-4 py-2 rounded-md text-white text-sm font-medium ${
              filterType === type
                ? "bg-[#DD3219]"
                : "bg-gray-600 hover:bg-[#DD3219]"
            }`}
          >
            {type === "all"
              ? "All"
              : type.charAt(0).toUpperCase() + type.slice(1).replace("_", " ")}
          </button>
        ))}

        {/* Reset Button */}
        <button
          onClick={() => setFilterType("all")}
          className="px-4 py-2 rounded-md text-white text-sm font-medium bg-black hover:bg-gray-700"
        >
          Reset Filter
        </button>
      </div>

      {/* 🔹 Cars Grid */}
      <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1 place-items-center">
        {filteredCars.map((car) => (
          <div
            key={car.id}
            className="rental-fleet-card-container bg-yellow-600 w-80 h-auto overflow-hidden shadow-2xl mt-16 max-lg:w-60 max-md:w-[90vw]"
          >
            {/* Car Image */}
            <div className="cars-image w-full h-[220px] overflow-hidden relative">
              <img
                className="w-full h-full object-cover"
                src={car.carImage}
                alt={car.carTitle}
              />
              <div className="price-tag absolute top-36 right-4 bg-[#DD3219] text-white py-1 px-3 rounded-md flex flex-col justify-center items-center">
                <p className="text-sm font-medium">
                  ₹{getPrice(car.pricePerDay)}
                </p>
                <p className="text-[11px]">per day</p>
              </div>
            </div>

            {/* Car Title */}
            <div className="cars-name flex flex-col justify-center items-center mt-4">
              <p className="text-2xl font-semibold">{car.carTitle}</p>
            </div>

            {/* Car Details */}
            <div className="cars-details flex justify-center items-center gap-8 mt-2">
              <div className="car-year flex flex-col items-center">
                <RiSteeringLine className="w-6 h-6" />
                <p className="text-sm font-light">{car.carYear}</p>
              </div>
              <div className="car-km flex flex-col items-center">
                <TbRoad className="w-6 h-6" />
                <p className="text-sm font-light">{car.carKm}</p>
              </div>
              <div className="car-speed flex flex-col items-center">
                <IoMdSpeedometer className="w-6 h-6" />
                <p className="text-sm font-light">{car.carTopSpeed}</p>
              </div>
            </div>

            {/* View Details Button */}
            <button
              className="flex justify-center items-center bg-[#555555] w-full h-10 uppercase gap-2 font-bold text-sm mt-6 text-white hover:bg-[#DD3219]"
              onClick={() => navigate(`/vehicle/${car.id}`, { state: car })}
            >
              View Details <FaAnglesRight />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RentalFleetsCards;
