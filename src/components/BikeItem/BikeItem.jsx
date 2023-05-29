import React, { useState } from "react";
import { animated } from "react-spring";
import styles from "./BikeItem.module.css";
import Reservation from "../Reservation/Reservation";

const BikeItem = ({ bike }) => {
  const [showReservation, setShowReservation] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleReservationToggle = () => {
    setShowReservation(!showReservation);
  };

  const handleCloseReservation = () => {
    setShowReservation(false);
  };

  return (
    <animated.div className={styles["bikes__presentation"]}>
      <img
        src={bike.image}
        alt="Rower"
        style={{ width: "100%", height: "280px" }}
      />
      <h2>{bike.name}</h2>

      <div className={styles["bikes__reservation"]}>
        <p>{bike.type}</p>
        <button onClick={handleReservationToggle}>Zarezerwuj</button>
      </div>

      {showReservation && (
        <Reservation
          selectedDate={selectedDate}
          handleDateSelect={handleDateSelect}
          handleClose={handleCloseReservation}
        />
      )}
    </animated.div>
  );
};

export default BikeItem;
