import React, { useState } from "react";
import { bikesData } from "../../data/bikesData";
import styles from "./ourbikes.module.css";

const OurBikes = () => {
  const [currentBike, setCurrentBike] = useState(0);
  const [animationClass, setAnimationClass] = useState("");

  const previousBike = () => {
    setAnimationClass(styles["bikes__presentation--right"]);
    setTimeout(() => {
      setAnimationClass("");
      setCurrentBike((currentBike - 1 + bikesData.length) % bikesData.length);
    }, 500);
  };

  const nextBike = () => {
    setAnimationClass(styles["bikes__presentation--left"]);
    setTimeout(() => {
      setAnimationClass("");
      setCurrentBike((currentBike + 1) % bikesData.length);
    }, 500);
  };

  return (
    <div className={styles["container__bikes"]}>
      <span>NASZE ROWERY DO WYPOŻYCZENIA</span>
      <div className={styles["bikes__image"]}>
        <div className={styles["bikes__description"]}>
          <p>Zapoznaj się z naszą ofertą </p>
        </div>
        <div className={styles["bikes__button"]}>
          <span></span>
          <button>Button</button>
        </div>
      </div>
      <div className={styles["bikes__buttons"]}>
        <button
          className={styles["bikes__buttons--prev"]}
          onClick={previousBike}
        ></button>
        <button
          className={styles["bikes__buttons--next"]}
          onClick={nextBike}
        ></button>

        <div className={`${styles["bikes__presentation"]} ${animationClass}`}>
          <img
            src={bikesData[currentBike].image}
            alt="Rower"
            style={{ width: "90%", height: "280px" }}
          />
          <h2>{bikesData[currentBike].name}</h2>

          <div className={styles["bikes__reservation"]}>
            <p>{bikesData[currentBike].type}</p>
            <div>
              <button className={styles["bikes__reservation--button"]}>
                Zarezerwuj
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBikes;
