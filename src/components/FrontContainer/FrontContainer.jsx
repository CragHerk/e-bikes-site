import styles from "./front-container.module.css";

const FrontContainer = () => {
  return (
    <div className={styles.container}>
      <button className={styles.container__button}>
        <img src="../src/assets/svg/bicycle.svg" /> Wypożycz rower
      </button>
    </div>
  );
};
export default FrontContainer;
