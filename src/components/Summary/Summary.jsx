import React from 'react';
import styles from './Summary.module.css';
import ContactTop from 'components/ContactTop/ContactTop';

const Summary = ({ selectedDate, selectedPeriod, price }) => {
  return (
    <div className={styles.summary}>
      <ContactTop />
      <div className={styles.summary__row}>
        <h2>Podsumowanie rezerwacji</h2>
        <p>Data: {selectedDate}</p>
        <p>Okres: {selectedPeriod}</p>
        <p>Cena: {price} zł</p>
        {/* Dodaj dodatkowe elementy podsumowania tutaj */}
      </div>
    </div>
  );
};

export default Summary;
