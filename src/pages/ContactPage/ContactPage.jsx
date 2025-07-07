
// import React from "react";
// import "./ContactPage.css";
// import { FaChevronDown } from "react-icons/fa"; 
// function ContactPage() {
//   return (
//     <div className="contact-container">
//       <div className="contact-banner">
//         <img
//           src="/contact_banner.png" 
//           alt="Contact Banner"
//         />
//       </div>

//       <div className="contact-content">
//         <h1>Contact Us</h1>
//         <div className="contact-main">
//           <div className="contact-form">
//             <h3>Drop us a line!</h3>
//             <form>
//               <input type="text" placeholder="Name" required />
//               <input type="email" placeholder="Email" required />
//               <textarea placeholder="Message" rows="5" required></textarea>
//               <button type="submit">Send</button>
//             </form>
           
//              <p className="captcha-note">
//             This site is protected by reCAPTCHA and the Google{' '}
//             <a href="/privacy-policy">Privacy Policy</a> and{' '}
//             <a href="/terms-conditions">Terms of Service</a> apply.
//           </p>
//           </div>

//           <div className="contact-info">
//             <h4>VeraLink Technology Services</h4>
//             <p>69 Ziadie Avenue, Kingston, Jamaica</p>
//             <p>
//               <a href="tel:+18766060251">+1 (876) 606-0251</a>
//             </p>
//             <p>
//               <a href="tel:+18764705470">+1 (876) 470-5470</a>
//             </p>
//             <p>
//               <a href="mailto:sales@veralinkgroup.com">
//                 sales@veralinkgroup.com
//               </a>
//             </p>
           
//             <div className="hours">
//               <strong>Hours</strong>
//               <br />
//               <span className="hours-line">
//                <p> Open today:</p> <span> 08:00 am – 05:00 pm</span>
//                 <FaChevronDown className="down-arrow" />
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="contact-map-banner">
//         <img
//           src="/contact-us-map.png" 
//           alt="Contact Banner"
//         />
//       </div>
//     </div>
//   );
// }

// export default ContactPage;
import React, { useState } from "react";
import axios from "axios";
import "./ContactPage.css";
import { FaChevronDown } from "react-icons/fa";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/front/contact`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          }
        }
      );
      console.log("Response from API:", res.data);
      setResponseMsg("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // reset
    } catch (error) {
      console.error("API Error:", error);
      setResponseMsg("❌ Failed to send message.");
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-banner">
        <img src="/contact_banner.png" alt="Contact Banner" />
      </div>

      <div className="contact-content">
        <h1>Contact Us</h1>
        <div className="contact-main">
          <div className="contact-form">
            <h3>Drop us a line!</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit">Send</button>
              <p className="response-message" style={{marginTop:'15px'}}>{responseMsg}</p>
            </form>
            <p className="captcha-note">
              This site is protected by reCAPTCHA and the Google{' '}
              <a href="/privacy-policy">Privacy Policy</a> and{' '}
              <a href="/terms-conditions">Terms of Service</a> apply.
            </p>
          </div>

          <div className="contact-info">
            <h4>VeraLink Technology Services</h4>
            <p>69 Ziadie Avenue, Kingston, Jamaica</p>
            <p><a href="tel:+18766060251">+1 (876) 606-0251</a></p>
            <p><a href="tel:+18764705470">+1 (876) 470-5470</a></p>
            <p><a href="mailto:sales@veralinkgroup.com">sales@veralinkgroup.com</a></p>
            <div className="hours">
              <strong>Hours</strong><br />
              <span className="hours-line">
                <p>Open today:</p> <span>08:00 am – 05:00 pm</span>
                <FaChevronDown className="down-arrow" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-map-banner">
        <img src="/contact-us-map.png" alt="Map Banner" />
      </div>
    </div>
  );
}

export default ContactPage;
