// import React, { useState } from "react";

// const FlightBookingDashboard = () => {
//   const [returnFlight, setReturnFlight] = useState("departureFlight");
//   const [selectedDate, setSelectedDate] = useState("");
//   const [returnDate, setReturnDate] = useState("");

//   const handleChange = (e) => {
//     setReturnFlight(e.target.value);
//   };

//   const dateChange = (e) => {
//     setSelectedDate(e.target.value);
//   };
//   const returnDateChange = (e) => {
//     setReturnDate(e.target.value);
//   };
//   const today = new Date().toISOString().split("T")[0];
//   const minReturnDate = selectedDate ? selectedDate : today;

//   const bookedTicketHandler = (e) => {
//     e.preventDefault();
//     if (selectedDate && !returnDate) {
//       alert(`You have booked a one-way flight on ${selectedDate}`);
//     } else if (selectedDate && returnDate) {
//       alert(
//         `You have booked a one-way flight on ${selectedDate} to ${returnDate}`
//       );
//     }
//   };

//   const disabled1 =
//     returnFlight === "departureFlight" ? selectedDate : returnDate;

//   return (
//     <div>
//       <h2 style={{ textAlign: "center" }}>Flight Booking</h2>

//       <label>
//         <input
//           name='direction'
//           id='departureFlight'
//           value='departureFlight'
//           onChange={handleChange}
//           checked={returnFlight === "departureFlight"}
//           type='radio'
//         />{" "}
//         One-Way Flight
//       </label>
//       <label>
//         <input
//           name='direction'
//           onChange={handleChange}
//           value='returnFlight'
//           id='returnFlight'
//           checked={returnFlight === "returnFlight"}
//           type='radio'
//         />
//         Return Flight
//       </label>

//       <label>
//         {" "}
//         <input
//           type='date'
//           id='date'
//           value={selectedDate}
//           onChange={dateChange}
//           min={today}
//         />
//         Departure Date
//       </label>
//       {returnFlight === "returnFlight" && (
//         <label>
//           {" "}
//           <input
//             type='date'
//             min={minReturnDate}
//             value={returnDate}
//             onChange={returnDateChange}
//           />
//           Return Date
//         </label>
//       )}

//       <button onClick={bookedTicketHandler} disabled={!disabled1}>
//         Booked Ticked
//       </button>
//     </div>
//   );
// };

// export default FlightBookingDashboard;




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
  const minReturnDate = selectedDate || today;

  const bookedTicketHandler = (e) => {
    e.preventDefault();
    if (selectedDate && !returnDate) {
      alert(`🎉 You have booked a one-way flight on ${selectedDate}`);
    } else if (selectedDate && returnDate) {
      alert(
        `🎉 You have booked a round-trip flight from ${selectedDate} to ${returnDate}`
      );
    }
  };

  const disabled1 =
    returnFlight === "departureFlight" ? selectedDate : returnDate;

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "50px auto",
        padding: "30px",
        borderRadius: "20px",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
        background: "linear-gradient(to bottom right, #f0f4ff, #dbeafe)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        animation: "fadeIn 1s ease-in",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "25px",
          color: "#1e3a8a",
          fontSize: "24px",
        }}
      >
        ✈️ Book Your Flight
      </h2>

      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <label
          style={{
            marginRight: "20px",
            cursor: "pointer",
            fontWeight: "500",
            color: returnFlight === "departureFlight" ? "#1e3a8a" : "#444",
            transition: "color 0.3s",
          }}
        >
          <input
            type='radio'
            name='direction'
            value='departureFlight'
            checked={returnFlight === "departureFlight"}
            onChange={handleChange}
            style={{ marginRight: "6px", accentColor: "#1e3a8a" }}
          />
          One-Way
        </label>
        <label
          style={{
            cursor: "pointer",
            fontWeight: "500",
            color: returnFlight === "returnFlight" ? "#1e3a8a" : "#444",
            transition: "color 0.3s",
          }}
        >
          <input
            type='radio'
            name='direction'
            value='returnFlight'
            checked={returnFlight === "returnFlight"}
            onChange={handleChange}
            style={{ marginRight: "6px", accentColor: "#1e3a8a" }}
          />
          Round-Trip
        </label>
      </div>

      <div style={{ marginBottom: "18px" }}>
        <label style={{ display: "block", marginBottom: "6px", color: "#374151" }}>
          🛫 Departure Date
        </label>
        <input
          type='date'
          min={today}
          value={selectedDate}
          onChange={dateChange}
          style={{
            width: "100%",
            padding: "10px 12px",
            borderRadius: "10px",
            border: "1px solid #c7d2fe",
            fontSize: "14px",
            outline: "none",
            transition: "box-shadow 0.3s",
          }}
          onFocus={(e) => (e.target.style.boxShadow = "0 0 5px #93c5fd")}
          onBlur={(e) => (e.target.style.boxShadow = "none")}
        />
      </div>

      {returnFlight === "returnFlight" && (
        <div style={{ marginBottom: "18px" }}>
          <label style={{ display: "block", marginBottom: "6px", color: "#374151" }}>
            🛬 Return Date
          </label>
          <input
            type='date'
            min={minReturnDate}
            value={returnDate}
            onChange={returnDateChange}
            style={{
              width: "100%",
              padding: "10px 12px",
              borderRadius: "10px",
              border: "1px solid #c7d2fe",
              fontSize: "14px",
              outline: "none",
              transition: "box-shadow 0.3s",
            }}
            onFocus={(e) => (e.target.style.boxShadow = "0 0 5px #93c5fd")}
            onBlur={(e) => (e.target.style.boxShadow = "none")}
          />
        </div>
      )}

      <button
        onClick={bookedTicketHandler}
        disabled={!disabled1}
        style={{
          width: "100%",
          padding: "12px",
          fontSize: "16px",
          backgroundColor: disabled1 ? "#2563eb" : "#cbd5e1",
          color: "white",
          border: "none",
          borderRadius: "10px",
          cursor: disabled1 ? "pointer" : "not-allowed",
          transition: "background-color 0.4s, transform 0.2s",
          transform: disabled1 ? "scale(1)" : "scale(0.98)",
        }}
        onMouseEnter={(e) => {
          if (disabled1) e.target.style.backgroundColor = "#1e40af";
        }}
        onMouseLeave={(e) => {
          if (disabled1) e.target.style.backgroundColor = "#2563eb";
        }}
      >
        🎟️ Book Ticket
      </button>
    </div>
  );
};

export default FlightBookingDashboard;
