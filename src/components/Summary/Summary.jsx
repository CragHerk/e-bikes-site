import React, { useState, useEffect } from 'react';
import styles from './Summary.module.css';
import ContactTop from 'components/ContactTop/ContactTop';

const Summary = ({
  selectedDate,
  selectedPeriod,
  price,
  bikeName,
  bikeType,
  bikeImage,
}) => {
  const [paymentChecked, setPaymentChecked] = useState(false);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [endDate, setEndDate] = useState(null);

  const handlePaymentChange = () => {
    setPaymentChecked(!paymentChecked);
  };

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handlePhoneNumberChange = e => {
    setPhoneNumber(e.target.value);
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Wykonaj odpowiednie operacje z wartościami pól formularza
    // np. przekaż je do serwera, zapisz itp.
  };

  useEffect(() => {
    // Aktualizuj datę zakończenia po zmianie daty początkowej lub okresu
    const updateEndDate = () => {
      let startDate = new Date(selectedDate);
      startDate.setHours(9, 0, 0, 0); // Ustaw godzinę rozpoczęcia na 9:00

      if (selectedPeriod === '4h') {
        const endDate = new Date(startDate.getTime() + 4 * 60 * 60 * 1000); // Dodaj 4 godziny do daty rozpoczęcia
        setEndDate(endDate);
      } else if (selectedPeriod === '1d') {
        const endDate = new Date(startDate.getTime() + 24 * 60 * 60 * 1000); // Dodaj 1 dzień do daty rozpoczęcia
        setEndDate(endDate);
      } else if (selectedPeriod === '2d') {
        const endDate = new Date(startDate.getTime() + 2 * 24 * 60 * 60 * 1000); // Dodaj 2 dni do daty rozpoczęcia
        setEndDate(endDate);
      }
    };

    updateEndDate();
  }, [selectedDate, selectedPeriod]);

  return (
    <div className={styles.summary}>
      <ContactTop />
      <form onSubmit={handleSubmit}>
        <div className={styles.summary__row}>
          <h2>Podsumowanie rezerwacji</h2>
          <label className={styles.label}>
            Data startu: {selectedDate.toLocaleDateString()} 9:00
          </label>
          <label className={styles.label}>
            Data zakończenia:{' '}
            {endDate &&
              endDate.toLocaleString(undefined, {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: 'numeric',
                minute: 'numeric',
                hour12: false,
              })}
          </label>

          <label className={styles.label}>Okres: {selectedPeriod}</label>
          <label className={styles.label}>Cena: {price} zł</label>
          <img src={bikeImage} alt="Rower" className={styles.bikeImage} />
          <div className={styles.fieldset}>
            <label className={styles.type}> {bikeName}</label>
            <label className={styles.type}> {bikeType}</label>
          </div>

          <label className={styles.label}>
            Imię:
            <input
              className={styles.input}
              type="text"
              value={name}
              onChange={handleNameChange}
              required
            />
          </label>

          <label className={styles.label}>
            Numer telefonu:
            <input
              className={styles.input}
              type="tel"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              required
            />
          </label>

          <label className={styles.label}>
            Adres email:
            <input
              className={styles.input}
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </label>

          <label className={styles.label__payment}>
            Płatność na miejscu
            <input
              className={styles.checkbox}
              type="checkbox"
              checked={paymentChecked}
              onChange={handlePaymentChange}
            />
          </label>

          <button className={styles.sumbit} type="submit">
            Rezerwuję
          </button>
        </div>
      </form>
    </div>
  );
};

export default Summary;
