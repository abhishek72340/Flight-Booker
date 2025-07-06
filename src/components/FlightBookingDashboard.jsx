import React, { useState } from "react";

const FlightBookingDashboard = () => {
  const [returnFlight, setReturnFlight] = useState("departureFlight");
  const [selectedDate, setSelectedDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const handleChange = (e) => {
    setReturnFlight(e.target.value);
  };

  const dateChange = (e) => {
    setSelectedDate(e.target.value);
  };
  const returnDateChange = (e) => {
    setReturnDate(e.target.value);
  };
  const today = new Date().toISOString().split("T")[0];
  const minReturnDate = selectedDate ? selectedDate : today;

  const bookedTicketHandler = (e) => {
    e.preventDefault();
    if (selectedDate && !returnDate) {
      alert(`You have booked a one-way flight on ${selectedDate}`);
    } else if (selectedDate && returnDate) {
      alert(
        `You have booked a one-way flight on ${selectedDate} to ${returnDate}`
      );
    }
  };

  const disabled1 =
    returnFlight === "departureFlight" ? selectedDate : returnDate;

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Flight Booking</h2>

      <label>
        <input
          name='direction'
          id='departureFlight'
          value='departureFlight'
          onChange={handleChange}
          checked={returnFlight === "departureFlight"}
          type='radio'
        />{" "}
        One-Way Flight
      </label>
      <label>
        <input
          name='direction'
          onChange={handleChange}
          value='returnFlight'
          id='returnFlight'
          checked={returnFlight === "returnFlight"}
          type='radio'
        />
        Return Flight
      </label>

      <label>
        {" "}
        <input
          type='date'
          id='date'
          value={selectedDate}
          onChange={dateChange}
          min={today}
        />
        Departure Date
      </label>
      {returnFlight === "returnFlight" && (
        <label>
          {" "}
          <input
            type='date'
            min={minReturnDate}
            value={returnDate}
            onChange={returnDateChange}
          />
          Return Date
        </label>
      )}

      <button onClick={bookedTicketHandler} disabled={!disabled1}>
        Booked Ticked
      </button>
    </div>
  );
};

export default FlightBookingDashboard;
