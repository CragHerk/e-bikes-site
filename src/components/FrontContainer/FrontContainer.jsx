import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useTransition, animated } from 'react-spring';
import styles from './front-container.module.css';
import bikeicon from 'assets/svg/bicycle.svg';
import hamburgerIcon from '../../assets/svg/list.svg';
import phoneIcon from '../../assets/svg/phone.svg';
import emailIcon from '../../assets/svg/email.svg';
import facebookIcon from '../../assets/svg/facebook.svg';
import instagramIcon from '../../assets/svg/instagram.svg';

const FrontContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const transitions = useTransition(isOpen && windowWidth <= 1200, {
    from: { opacity: 0, transform: 'translateX(-100%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(-100%)' },
  });

  return (
    <div className={styles.container}>
      <Link
        to="targetBikes"
        smooth={true}
        duration={500}
        className={`${styles.container__button} ${isOpen ? styles.hidden : ''}`}
      >
        <img src={bikeicon} alt="bike icon" /> Wypożycz rower
      </Link>

      {windowWidth <= 1200 && (
        <button
          className={`${styles.hamburger} fixed-button`}
          onClick={isOpen ? handleClose : handleOpen}
        >
          <img
            className={styles.hamburger__img}
            src={hamburgerIcon}
            alt="hamburger icon"
          />
        </button>
      )}

      {transitions(
        (style, item) =>
          item && (
            <animated.div
              className={styles.overlay}
              onClick={handleClose}
              style={style}
            >
              <animated.div className={styles.card} style={style}>
                <div className={styles.cardContent}>
                  <h4 className={styles.contact}>Skontaktuj się z nami !</h4>
                  <div className={styles.contactitem}>
                    <img src={phoneIcon} alt="Phone Icon" id="icon-top" />
                    <a href="tel:+48123456789">Zadzwoń: xxx-xxx-xxx</a>
                  </div>
                  <div className={styles.contactitem}>
                    <img src={emailIcon} alt="Email Icon" id="icon-top" />
                    <a href="mailto:adres@example.com">
                      Email: adres@example.com
                    </a>
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
                  <span className={styles.adress}>Adres</span>
                </div>
              </animated.div>
            </animated.div>
          )
      )}
    </div>
  );
};

export default FrontContainer;
