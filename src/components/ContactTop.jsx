import React from "react";
import phoneIcon from "../assets/svg/phone.svg";
import emailIcon from "../assets/svg/email.svg";
import facebookIcon from "../assets/svg/facebook.svg";
import instagramIcon from "../assets/svg/instagram.svg";

function contactTop() {
  return (
    <div className="container__top">
      <div className="contacts-top">
        <div className="contact-item">
          <img src={phoneIcon} alt="Phone Icon" id="icon-top" />
          <a href="tel:+48123456789">Zadzwoń: xxx-xxx-xxx</a>
        </div>
        <div className="contact-item">
          <img src={emailIcon} alt="Email Icon" id="icon-top" />
          <a href="mailto:adres@example.com">Email: adres@example.com</a>
        </div>
        <div className="social-media-icons">
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
