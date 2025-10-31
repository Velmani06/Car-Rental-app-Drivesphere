import React from "react";
import { FaQuoteRight } from "react-icons/fa";

function ReviewsCardDetails({ name, review, img }) {
  return (
    <div className="review-card-details-container w-full max-w-md flex flex-col justify-center items-center text-center p-6 bg-white shadow-lg rounded-lg mx-auto">
      <FaQuoteRight className="w-10 h-10 text-[#DD3219]" />
      <p className="mt-6 text-lg italic max-[550px]:text-sm">{review}</p>
      <div className="user-dets mt-6 flex flex-col justify-center items-center">
        <p className="mt-4 tracking-widest uppercase font-bold">{name}</p>
      </div>
    </div>
  );
}

export default ReviewsCardDetails;
