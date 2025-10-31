import React from "react";
import { useLocation, useParams } from "react-router-dom";
import VechicleHero from "../components/VechicleListins/Hero Section/VechicleHero";
import VechicleContent from "../components/VechicleListins/Vehicle Listing Content/VechicleContent";
import CarsData from "../Data/RentalFleets";

function VechicleListing() {
  const location = useLocation();
  const { id } = useParams();

  // If navigating with an id, get that car; otherwise show all cars
  const car =
    location.state || (id ? CarsData.find((c) => c.id === parseInt(id)) : null);

  return (
    <>
      <VechicleHero />

      {/* Pass either single car or full list */}
      <VechicleContent car={car} allCars={!car ? CarsData : null} />
    </>
  );
}

export default VechicleListing;
