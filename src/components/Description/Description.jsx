import React from "react";
import styles from "./description.module.css";

function MyComponent() {
  return (
    <div className={styles.description}>
      <h2 className={styles.description__header}>Nagłówek</h2>
      <p className={styles.descritpion__p}>Tutaj jest jakiś akapit.</p>
      <ul className={styles.description__ul}>
        <li className={styles.description__li}>Pierwszy element listy</li>
        <li className={styles.description__li}>Drugi element listy</li>
        <li className={styles.description__li}>Trzeci element listy</li>
      </ul>
    </div>
  );
}

export default MyComponent;
