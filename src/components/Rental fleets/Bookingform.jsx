import React, { useState } from "react";

function BookingForm({ selectedCar }) {
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [availabilityMsg, setAvailabilityMsg] = useState("");

  // 🧩 Mock unavailable dates (sample data)
  const unavailableDates = ["2025-11-02", "2025-11-03", "2025-11-05"];

  const checkAvailability = () => {
    if (!pickupDate || !returnDate) {
      setAvailabilityMsg("⚠️ Please select both pickup and return dates!");
      return;
    }

    const pickup = new Date(pickupDate);
    const drop = new Date(returnDate);
    if (pickup > drop) {
      setAvailabilityMsg("⚠️ Return date cannot be before pickup date!");
      return;
    }

    const current = new Date(pickup);
    let unavailableFound = false;
    while (current <= drop) {
      const dateStr = current.toISOString().split("T")[0];
      if (unavailableDates.includes(dateStr)) {
        unavailableFound = true;
        break;
      }
      current.setDate(current.getDate() + 1);
    }

    if (unavailableFound) {
      setAvailabilityMsg(
        "🚫 This car is not available for your selected dates!"
      );
    } else {
      setAvailabilityMsg("✅ Car is available! You can proceed to booking.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">
        Book {selectedCar.carTitle}
      </h2>

      {/* Pickup Date */}
      <label className="block mb-2 font-medium">Pickup Date:</label>
      <input
        type="date"
        value={pickupDate}
        onChange={(e) => setPickupDate(e.target.value)}
        className="w-full border p-2 rounded mb-4"
      />

      {/* Return Date */}
      <label className="block mb-2 font-medium">Return Date:</label>
      <input
        type="date"
        value={returnDate}
        onChange={(e) => setReturnDate(e.target.value)}
        className="w-full border p-2 rounded mb-4"
      />

      {/* Availability Button */}
      <button
        onClick={checkAvailability}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
      >
        Check Availability
      </button>

      {/* Message */}
      {availabilityMsg && (
        <p
          className={`mt-4 text-sm font-medium ${
            availabilityMsg.includes("🚫")
              ? "text-red-600"
              : availabilityMsg.includes("⚠️")
              ? "text-yellow-600"
              : "text-green-600"
          }`}
        >
          {availabilityMsg}
        </p>
      )}
    </div>
  );
}

export default BookingForm;
