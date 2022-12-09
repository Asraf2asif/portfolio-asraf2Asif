import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaEnvelope, FaPhone, FaSms } from "react-icons/fa";
import "./SocialMedia.scss";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a
        href="mailto:client.asraf2asif@gmail.com"
        target="_blank"
        rel="noreferrer"
        className="squere"
      >
        <FaEnvelope />
      </a>
      <a href="tel:+880-1794-207760" target="_blank" rel="noreferrer">
        <FaPhone />
      </a>
      <a href="sms:+880-1794-207760" target="_blank" rel="noreferrer">
        <FaSms />
      </a>
      <a
        href="https://github.com/Asraf2asif"
        target="_blank"
        rel="noreferrer"
        className="squere"
      >
        <BsLinkedin />
      </a>
    </div>
  );
};

export default SocialMedia;
