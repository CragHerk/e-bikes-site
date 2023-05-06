import React from "react";
import examplebikeImage from "../assets/images/examplebike.jpg";
const OurBikes = () => {
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
        <img src={examplebikeImage} alt="Rower" style={{ width: "100%" }} />
        <h2>Nagłówek</h2>
        <div>
          <p>Akapit</p>
          <div>
            <span>Podpis</span>
            <button>Zarezerwuj</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurBikes;
