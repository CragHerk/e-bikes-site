import { useMediaQuery } from "react-responsive";
import React, { useState, useEffect } from "react";
import { bikesData } from "../../data/bikesData";
import styles from "./ourbikes.module.css";
import { useTransition, animated } from "react-spring";
import BikeItem from "../BikeItem/BikeItem";
import BikesHeader from "../BikesHeader/BikesHeader";

const OurBikes = () => {
  const [currentBike, setCurrentBike] = useState(0);
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

  const transitions = useTransition(currentBike, {
    key: currentBike,
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

  const isTablet = useMediaQuery({ minWidth: 768 });

  return (
    <div className={styles["container__bikes"]}>
      <BikesHeader />

      {isTablet ? (
        <div className={styles["bikes__grid"]}>
          <BikeItem bike={bikesData[currentBike]} />
          <BikeItem bike={bikesData[(currentBike + 1) % bikesData.length]} />
        </div>
      ) : (
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
            <animated.div
              key={item}
              className={styles["bikes__presentation"]}
              style={style}
            >
              <BikeItem bike={bikesData[item]} />
            </animated.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OurBikes;
