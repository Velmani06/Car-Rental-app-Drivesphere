import React from "react";

function BestRentalService() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-white px-8 lg:px-20 py-16 text-center">
      <h1 className="text-6xl font-extrabold text-gray-900 mb-6 leading-tight max-md:text-5xl max-sm:text-4xl">
        Best Rental Service
      </h1>

      {/* Decorative Lines */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-20 h-[2px] bg-black"></div>
        <div className="w-12 h-[2px] bg-black mt-1"></div>
      </div>

      {/* Description */}
      <p className="text-xl text-gray-700 font-light leading-relaxed max-w-3xl mb-6">
        Experience the pinnacle of convenience and comfort with our premier car
        rental service.
      </p>

      <p className="text-xl text-gray-700 font-light leading-relaxed max-w-3xl">
        From sleek sedans to spacious SUVs, we offer a diverse fleet to suit
        every journey. Enjoy seamless booking, competitive rates, and top-notch
        customer service — ensuring your road trip is not just a drive but an
        unforgettable adventure.
      </p>
    </div>
  );
}

export default BestRentalService;
