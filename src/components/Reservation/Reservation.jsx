import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './Reservation.module.css';
import callendarImage from '../../assets/svg/calendar-week.svg';

const Reservation = ({ selectedDate, handleDateSelect, handleClose }) => {
  const [isDateReserved, setIsDateReserved] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState('4h');
  const [price, setPrice] = useState(100);

  const handlePeriodSelect = event => {
    const period = event.target.value;
    setSelectedPeriod(period);
    setPrice(calculatePrice(period));
  };

  const handleReservationSubmit = () => {
    console.log('Zarezerwowano!');
  };

  const handleCancel = () => {
    handleClose();
  };

  const checkIfDateIsReserved = async () => {
    const isReserved = await checkDateReservationFromDatabase(selectedDate);
    setIsDateReserved(isReserved);
    setPrice(calculatePrice(selectedPeriod));
  };

  const checkDateReservationFromDatabase = async date => {
    // Kod do sprawdzania rezerwacji w bazie danych
  };

  const calculatePrice = period => {
    switch (period) {
      case '4h':
        return 100;
      case '1d':
        return 200;
      case '2d':
        return 400;
      default:
        return 0;
    }
  };

  const getSpanStyle = () => {
    if (isDateReserved) {
      return { backgroundColor: 'red' };
    }
    return null;
  };

  return (
    <div className={`${styles.reservation} ${styles.fullWidth}`}>
      <button className={styles.closeButton} onClick={handleCancel}></button>
      <h3>Wybierz daty:</h3>
      <DatePicker
        selected={selectedDate}
        minDate={new Date()}
        onChange={handleDateSelect}
        className={styles.datepicker}
        onClick={checkIfDateIsReserved}
        placeholderText="od kiedy:"
      />

      <h3>Wybierz okres:</h3>
      <div className={styles.h3container}>
        <select
          className={styles.periodOptions}
          onChange={handlePeriodSelect}
          value={selectedPeriod}
        >
          <option className={styles.option} value="4h">
            4 godziny
          </option>
          <option className={styles.option} value="1d">
            1 dzień
          </option>
          <option className={styles.option} value="2d">
            2 dni
          </option>
        </select>
        <img className={styles.calendar} src={callendarImage} alt="calendar" />
      </div>

      <div className={styles.overview}>
        {isDateReserved && (
          <span style={getSpanStyle()}>Data zarezerwowana</span>
        )}
        {!isDateReserved && (
          <span className={styles.price}>Cena: {price} zł</span>
        )}
      </div>

      <button onClick={handleReservationSubmit} className={styles.submitButton}>
        Rezerwuj teraz
      </button>
    </div>
  );
};

export default Reservation;
