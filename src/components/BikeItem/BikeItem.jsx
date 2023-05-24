// Komponent BikeItem.jsx

import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { animated } from "react-spring";
import styles from "./BikeItem.module.css";

const BikeItem = ({ bike, selectedDate }) => {
  const handleDateSelect = (date) => {
    console.log("Wybrana data:", date);
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
        <DatePicker
          selected={selectedDate}
          minDate={new Date()}
          onChange={handleDateSelect}
          placeholderText="Wybierz datę"
          wrapperClassName={styles["custom-datepicker-container"]}
        />
      </div>
    </animated.div>
  );
};

export default BikeItem;
