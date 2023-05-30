import styles from './front-container.module.css';
import bikeicon from 'assets/svg/bicycle.svg';

const FrontContainer = () => {
  return (
    <div className={styles.container}>
      <button className={styles.container__button}>
        <img src={bikeicon} alt="bike icon" /> Wypożycz rower
      </button>
    </div>
  );
};
export default FrontContainer;
