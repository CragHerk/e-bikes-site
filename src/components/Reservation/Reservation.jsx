import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Reservation.module.css";

const Reservation = ({ selectedDate, handleDateSelect, handleClose }) => {
  const handlePeriodSelect = (period) => {
    console.log("Wybrany okres:", period);
  };

  const handleReservationSubmit = () => {
    console.log("Zarezerwowano!");
  };

  const handleCancel = () => {
    handleClose();
  };

  return (
    <div className={`${styles.reservation} ${styles.fullWidth}`}>
      <button className={styles.closeButton} onClick={handleCancel}>
        Zamknij
      </button>
      <h3>Wybierz datę</h3>
      <DatePicker
        selected={selectedDate}
        minDate={new Date()}
        onChange={handleDateSelect}
        placeholderText="Wybierz datę"
        className={styles.datepicker}
      />

      <h3>Wybierz okres</h3>
      <div className={styles.periodOptions}>
        <button onClick={() => handlePeriodSelect("1h")}>1 godzina</button>
        <button onClick={() => handlePeriodSelect("4h")}>4 godziny</button>
        <button onClick={() => handlePeriodSelect("1d")}>1 dzień</button>
        <button onClick={() => handlePeriodSelect("2d")}>2 dni</button>
      </div>

      <button onClick={handleReservationSubmit} className={styles.submitButton}>
        Rezerwuj teraz
      </button>
    </div>
  );
};

export default Reservation;
