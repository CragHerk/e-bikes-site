import React from 'react';
import phoneIcon from '../../assets/svg/phone.svg';
import emailIcon from '../../assets/svg/email.svg';
import facebookIcon from '../../assets/svg/facebook.svg';
import instagramIcon from '../../assets/svg/instagram.svg';
import styles from './contacttop.module.css';

function contactTop() {
  return (
    <div className={styles.container__top}>
      <div className={styles.contactstop}>
        <div className={styles.contactitem}>
          <img src={phoneIcon} alt="Phone Icon" id="icon-top" />
          <a href="tel:+48123456789">Zadzwoń: xxx-xxx-xxx</a>
        </div>
        <div className={styles.contactitem}>
          <img src={emailIcon} alt="Email Icon" id="icon-top" />
          <a href="mailto:adres@example.com">Email: adres@example.com</a>
        </div>
        <div className={styles.socialmediaicons}>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebookIcon} alt="Facebook Icon" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="Instagram Icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default contactTop;
