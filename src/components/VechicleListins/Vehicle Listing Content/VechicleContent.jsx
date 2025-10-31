import React, { useState, useEffect } from "react";
import SortingMenu from "./SortingMenu";
import VehicleCards from "./VehicleCards";
import VehicleListingSidebar from "./VehicleListingSidebar";
import data from "../../../Data/RentalFleets.js";

function VechicleContent() {
  const [cars, setCars] = useState([...data]);
  const [sortOption, setSortOption] = useState("Default");

  // ✅ Handle sorting changes
  const handleSortChange = (option) => {
    setSortOption(option);
  };
  useEffect(() => {
    let sortedCars = [...cars];
    switch (sortOption) {
      case "Cheap First":
        sortedCars.sort((a, b) => a.pricePerDay - b.pricePerDay);
        break;
      case "Expensive First":
        sortedCars.sort((a, b) => b.pricePerDay - a.pricePerDay);
        break;
      case "Old First":
        sortedCars.sort((a, b) => a.carYear - b.carYear);
        break;
      case "New First":
        sortedCars.sort((a, b) => b.carYear - a.carYear);
        break;
      case "First Viewed":
        sortedCars.sort((a, b) => (a.viewedAt || 0) - (b.viewedAt || 0));
        break;
      default:
        sortedCars = [...data]; // Default order (original)
    }
    setCars(sortedCars);
  }, [sortOption]);

  // ✅ Track first viewed (for “First Viewed” sorting)
  const handleView = (carId) => {
    setCars((prevCars) =>
      prevCars.map((car) =>
        car.id === carId
          ? { ...car, viewedAt: car.viewedAt || Date.now() }
          : car
      )
    );
  };

  return (
    <div className="vehicle-content-container bg-[#F5F5F5] w-full min-h-screen mb-20">
      <div className="content-container w-[65rem] m-auto flex justify-between items-start max-lg:flex-col">
        {/* LEFT SIDE - Sort Menu + Cars */}
        <div className="left-container">
          {/* Sorting Menu */}
          <div className="flex justify-start items-center px-10 mt-10 w-[45rem] bg-[#FAFAFA] shadow-xl">
            <SortingMenu onSortChange={handleSortChange} />
          </div>

          {/* Vehicle Cards */}
          <VehicleCards cars={cars} onView={handleView} />
        </div>

        {/* RIGHT SIDE - Sidebar */}
        <div className="right-container min-h-[100vh] w-[20rem] mt-20 sticky top-0 max-lg:mt-0">
          <VehicleListingSidebar />
        </div>
      </div>
    </div>
  );
}

export default VechicleContent;
