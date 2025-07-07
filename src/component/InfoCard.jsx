import React from "react";
import "./InfoCard.css";

const InfoCard = ({ logo, title, text1, text2, buttonText, image }) => {
  return (
    <div className="info-card">
      <div className="info-left">
        <img src={image} alt="Illustration" className="illustration" />
      </div>
      <div className="info-right">
        <img src={logo} alt="Logo" className="logo" />
        <h4>{title}</h4>
        <p>{text1}</p>
        <p>{text2}</p>
        <button className="learn-btn">{buttonText}</button>
      </div>
    </div>
  );
};

export default InfoCard;
