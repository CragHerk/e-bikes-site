import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import Notiflix from 'notiflix';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './Reservation.module.css';
import callendarImage from '../../assets/svg/calendar-week.svg';
import { animated, useSpring } from 'react-spring';
import ReactDOM from 'react-dom';
import Summary from 'components/Summary/Summary';

const Reservation = ({ selectedDate, handleDateSelect, handleClose }) => {
  const [isDateReserved, setIsDateReserved] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState('4h');
  const [price, setPrice] = useState(100);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const [showSummary, setShowSummary] = useState(false);

  const handlePeriodSelect = event => {
    const period = event.target.value;
    setSelectedPeriod(period);
    setPrice(calculatePrice(period));
  };

  const handleReservationSubmit = async () => {
    if (!selectedDate) {
      // Wyświetl powiadomienie, jeśli data nie została wybrana
      Notiflix.Notify.warning('Wybierz datę przed złożeniem rezerwacji!', {
        customClass: 'fixed-notification',
      });

      return;
    }
    setIsSubmitting(true);

    // Tutaj można dodać odpowiednią logikę związaną z rezerwacją

    // Symulowanie opóźnienia dla animacji ładowania
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Zmiana stanu, aby wyświetlić komponent Summary i ukryć komponent Reservation
    setShowContent(false);
    setShowSummary(true);

    // Tutaj można wywołać odpowiednie funkcje lub metody po zakończeniu rezerwacji
  };

  const handleCancel = () => {
    setShowContent(false);
    setTimeout(() => {
      handleClose();
    }, 300);
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

  const contentAnimation = useSpring({
    opacity: showContent ? 1 : 0,
    transform: showContent ? 'translateY(0)' : 'translateY(-20px)',
  });

  return (
    <>
      <animated.div
        style={contentAnimation}
        className={`${styles.reservation} ${styles.fullWidth}`}
      >
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
          <img
            className={styles.calendar}
            src={callendarImage}
            alt="calendar"
          />
        </div>

        <div className={styles.overview}>
          {isDateReserved && (
            <span style={{ backgroundColor: 'red' }}>Data zarezerwowana</span>
          )}
          {!isDateReserved && (
            <span className={styles.price}>Cena: {price} zł</span>
          )}
        </div>

        {showContent && (
          <button
            onClick={isSubmitting ? null : handleReservationSubmit}
            className={`${styles.submitButton} ${
              isSubmitting && styles.loading
            }`}
          >
            {isSubmitting ? 'Ładowanie...' : 'Rezerwuj teraz'}
          </button>
        )}
      </animated.div>

      {showSummary &&
        selectedDate &&
        ReactDOM.createPortal(
          <div className={styles.fullScreen}>
            <Summary
              selectedDate={selectedDate.toLocaleDateString()} // Przekonwertuj datę na tekst
              selectedPeriod={selectedPeriod}
              price={price}
            />
          </div>,
          document.body
        )}
    </>
  );
};

export default Reservation;
