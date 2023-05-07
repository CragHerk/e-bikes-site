import React, { useState } from "react";
import { bikesData } from "./bikesData";

const OurBikes = () => {
  const [currentBike, setCurrentBike] = useState(0);

  const previousBike = () => {
    setCurrentBike((currentBike - 1 + bikesData.length) % bikesData.length);
  };

  const nextBike = () => {
    setCurrentBike((currentBike + 1) % bikesData.length);
  };

  return (
    <div className="container__bikes">
      <h2>NASZE ROWERY DO WYPOŻYCZENIA</h2>
      <div className="bikes__image">
        <div className="bikes__description">
          <p>Zapoznaj się z naszą ofertą </p>
        </div>
        <div className="bikes__button">
          <span></span>
          <button>Button</button>
        </div>
      </div>
      <div className="bikes__presentation">
        <img
          src={bikesData[currentBike].image}
          alt="Rower"
          style={{ width: "90%", height: "280px" }}
        />
        <h2>{bikesData[currentBike].name}</h2>
        <div className="bikes__buttons">
          <button
            className="bikes__buttons--prev"
            onClick={previousBike}
          ></button>
          <button className="bikes__buttons--next" onClick={nextBike}></button>
        </div>
        <div className="bikes__reservation">
          <p>{bikesData[currentBike].type}</p>
          <div>
            <button className="bikes__reservation--button">Zarezerwuj</button>
          </div>
        </div>
      </div>
      <div className="bikes__buttons"></div>
    </div>
  );
};

export default OurBikes;
