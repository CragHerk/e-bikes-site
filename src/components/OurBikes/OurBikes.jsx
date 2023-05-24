import React, { useState, useEffect } from "react";
import { bikesData } from "../../data/bikesData";
import styles from "./ourbikes.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useTransition, animated } from "react-spring";

const OurBikes = () => {
  const [currentBike, setCurrentBike] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [direction, setDirection] = useState("left");
  const [refreshed, setRefreshed] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (refreshed) {
      setLoaded(false);
      setTimeout(() => {
        setLoaded(true);
        setRefreshed(false);
      }, 0);
    }
  }, [refreshed]);

  const previousBike = () => {
    setCurrentBike((currentBike - 1 + bikesData.length) % bikesData.length);
    setDirection("right");
  };

  const nextBike = () => {
    setCurrentBike((currentBike + 1) % bikesData.length);
    setDirection("left");
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    console.log("Wybrana data:", date);
  };

  const transitions = useTransition(currentBike, {
    config: { duration: 1000 },
    from: {
      opacity: 0,
      transform: `translateX(${direction === "left" ? "-" : ""}100%)`,
    },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: {
      opacity: 0,
      transform: `translateX(${direction === "left" ? "-" : ""}100%)`,
    },
    immediate: !loaded,
  });

  const handleRefresh = () => {
    setRefreshed(true);
  };

  return (
    <div className={styles["container__bikes"]}>
      <span>NASZE ROWERY DO WYPOŻYCZENIA</span>
      <div className={styles["bikes__image"]}>
        <div className={styles["bikes__description"]}>
          <p>Zapoznaj się z naszą ofertą</p>
        </div>
      </div>
      <div className={styles["bikes__buttons"]}>
        <button
          className={`${styles["bikes__buttons--prev"]} ${
            direction === "left" ? styles["left"] : styles["right"]
          }`}
          onClick={previousBike}
        ></button>
        <button
          className={`${styles["bikes__buttons--next"]} ${
            direction === "left" ? styles["left"] : styles["right"]
          }`}
          onClick={nextBike}
        ></button>

        {transitions((style, item) => (
          <animated.div className={styles["bikes__presentation"]} style={style}>
            <img
              src={bikesData[item].image}
              alt="Rower"
              style={{ width: "100%", height: "280px" }}
            />
            <h2>{bikesData[item].name}</h2>

            <div className={styles["bikes__reservation"]}>
              <p>{bikesData[item].type}</p>
              <DatePicker
                selected={selectedDate}
                minDate={new Date()}
                onChange={handleDateSelect}
                placeholderText="Wybierz datę"
                wrapperClassName={styles["custom-datepicker-container"]}
              />
            </div>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default OurBikes;
