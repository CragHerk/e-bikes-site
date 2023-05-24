import React from "react";
import styles from "./BikesHeader.module.css";

const BikesHeader = () => {
  return (
    <>
      <span>NASZE ROWERY DO WYPOŻYCZENIA</span>
      <div className={styles["bikes__image"]}>
        <div className={styles["bikes__description"]}>
          <p>Zapoznaj się z naszą ofertą</p>
        </div>
      </div>
    </>
  );
};

export default BikesHeader;
