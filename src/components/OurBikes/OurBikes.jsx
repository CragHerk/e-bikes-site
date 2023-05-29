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
    config: { duration: 500 },
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

  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1299 });
  const isDesktop = useMediaQuery({ minWidth: 1300 });

  return (
    <div className={styles["container__bikes"]}>
      <BikesHeader />

      {isTablet && (
        <div className={styles["bikes__container--tablet"]}>
          <button
            className={`${styles["bikes__buttons--prev--tablet"]} ${
              direction === "left" ? styles["left"] : styles["right"]
            }`}
            onClick={previousBike}
          ></button>
          <div className={styles["bikes__grid"]}>
            {transitions((style, item) => (
              <animated.div key={item} style={style}>
                <div className={styles["bikes__presentation"]}>
                  <BikeItem bike={bikesData[item]} />
                </div>
              </animated.div>
            ))}
          </div>
          <button
            className={`${styles["bikes__buttons--next--tablet"]} ${
              direction === "left" ? styles["left"] : styles["right"]
            }`}
            onClick={nextBike}
          ></button>
        </div>
      )}

      {isDesktop && (
        <div className={styles["bikes__container--desktop"]}>
          <div className={styles["bikes__grid"]}>
            {bikesData.map((bike, index) => (
              <div className={styles["bikes__presentation"]} key={index}>
                <BikeItem bike={bike} />
              </div>
            ))}
          </div>
        </div>
      )}

      {!isTablet && !isDesktop && (
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
              <div className={styles["bikes__presentation-inner"]}>
                <BikeItem bike={bikesData[item]} />
              </div>
            </animated.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OurBikes;
