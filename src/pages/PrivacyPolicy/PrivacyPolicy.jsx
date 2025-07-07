import React from "react";
// import './ServiceAgreement.css'
// import { FaChevronRight } from 'react-icons/fa';
import "./PrivacyPolicy.css";
function PrivacyPolicy() {
  return (
    <div className="privacy-container">
      <div className="privacy-banner">
        <div className="quote-text">
          <h1>Privacy Policy</h1>
          <br />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "22%",
              color: "#CACACA",
            }}
          >
            {" "}
            Home {">"} <span style={{ color: "#F3BD1A" }}> Privacy Policy</span>
          </div>
        </div>
      </div>
      <img src="/service-agreement.png" alt="" srcset="" />
    </div>
  );
}

export default PrivacyPolicy;
