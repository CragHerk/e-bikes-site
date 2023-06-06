import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import styles from './BikeItem.module.css';
import Reservation from '../Reservation/Reservation';

const BikeItem = ({ bike }) => {
  const [showReservation, setShowReservation] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [buttonVisible, setButtonVisible] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleDateSelect = date => {
    setSelectedDate(date);
  };

  const handleReservationToggle = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowReservation(true);
      setButtonVisible(false);
    }, 1000);
  };

  const handleCloseReservation = () => {
    setShowReservation(false);
    setButtonVisible(true);
  };

  const buttonAnimation = useSpring({
    opacity: buttonVisible ? 1 : 0,
    transform: buttonVisible ? 'scale(1)' : 'scale(0)',
    config: { duration: 300 },
  });

  const reservationAnimation = useSpring({
    opacity: showReservation ? 1 : 0,
    config: { duration: 300 },
  });

  return (
    <div className={styles['bikes__presentation']}>
      <img
        src={bike.image}
        alt="Rower"
        style={{ width: '100%', height: '280px' }}
      />
      <h2 className={styles.bikename}>{bike.name}</h2>

      <div className={styles['bikes__reservation']}>
        <p>{bike.type}</p>
        <animated.div
          className={styles['bikes__reservation-container']}
          style={reservationAnimation}
        >
          {showReservation && (
            <Reservation
              selectedDate={selectedDate}
              handleDateSelect={handleDateSelect}
              handleClose={handleCloseReservation}
              bikeName={bike.name}
              bikeType={bike.type}
              bikeImage={bike.image}
            />
          )}
        </animated.div>
        <animated.button
          onClick={handleReservationToggle}
          className={styles['bikes__reservation-button']}
          style={buttonAnimation}
          disabled={loading || showReservation}
        >
          {loading ? 'Ładowanie...' : 'Zarezerwuj'}
        </animated.button>
      </div>
    </div>
  );
};

export default BikeItem;
