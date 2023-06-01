import React from 'react';
import { Link } from 'react-scroll';
import styles from './front-container.module.css';
import bikeicon from 'assets/svg/bicycle.svg';

const FrontContainer = () => {
  return (
    <div className={styles.container}>
      <Link
        to="targetBikes"
        smooth={true}
        duration={500}
        className={styles.container__button}
      >
        <img src={bikeicon} alt="bike icon" /> Wypożycz rower
      </Link>
    </div>
  );
};

export default FrontContainer;
