// import React from "react";
// import "./Footer.css";
// const Footer = () => {
//   return (
//     <footer className="footer">
//       <p>© 2025 My Website. All rights reserved.</p>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-socials">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FiFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FiTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FiLinkedin />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FiInstagram />
          </a>
        </div>

        <div className="footer-links">
          <Link to="/contact-page">Contact Us</Link>
          <Link to="/service-agreement">Service Agreement</Link>
          <Link to="/terms-conditions">Terms & Conditions</Link>
          <Link to="/store">Store</Link>
        </div>
      </div>

      <p className="footer-copy">
        © 2025 VeraLink Technology Services | All Rights Reserved | Designed and Developed by Web Prism Corporate LLP
      </p>
    </footer>
  );
};

export default Footer;

