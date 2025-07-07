// // PartnerSlider.jsx
// import React from "react";
// import "./PartnerSlider.css";

// const logos = [
//   { src: "/slack.png", alt: "Slack" },
//   { src: "/images/hubspot.png", alt: "HubSpot" },
//   { src: "/images/shopify.png", alt: "Shopify" },
//   { src: "/images/zendesk.png", alt: "Zendesk" },
//   { src: "/images/google-analytics.png", alt: "Google Analytics" },
// ];

// function PartnerSlider() {
//   // Duplicate logos to create infinite loop effect
//   const duplicatedLogos = [...logos, ...logos];

//   return (
//     <div className="partner-slider-wrapper">
//       <h2>Our Partners</h2>
//       <div className="logo-slider">
//         <div className="logo-track">
//           {duplicatedLogos.map((logo, index) => (
//             <div className="logo-slide" key={index}>
//               <img src={logo.src} alt={logo.alt} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PartnerSlider;
// import React, { useEffect, useState } from 'react';
// import './PartnerSlider.css';

// const PartnerSlider = () => {
//   // Sample logo data - replace with your actual logos
//   const logos = [
//     { id: 1, src: "/slack.png", alt: "Client 1" },
//     { id: 2, src: "/hubspot.png", alt: "Client 2" },
//     { id: 3, src: "/google.png", alt: "Client 3" },
//     { id: 4, src: "/zendesk.png", alt: "Client 4" },
//     { id: 5, src: "/shopify.png", alt: "Client 5" },
//     { id: 1, src: "/slack.png", alt: "Client 1" },
//     { id: 2, src: "/hubspot.png", alt: "Client 2" },
//     { id: 3, src: "/google.png", alt: "Client 3" },
//     { id: 4, src: "/zendesk.png", alt: "Client 4" },
//     { id: 5, src: "/shopify.png", alt: "Client 5" },
//     { id: 1, src: "/slack.png", alt: "Client 1" },
//     { id: 2, src: "/hubspot.png", alt: "Client 2" },
//     { id: 3, src: "/google.png", alt: "Client 3" },
//     { id: 4, src: "/zendesk.png", alt: "Client 4" },
//     { id: 5, src: "/shopify.png", alt: "Client 5" },
//     { id: 1, src: "/slack.png", alt: "Client 1" },
//     { id: 2, src: "/hubspot.png", alt: "Client 2" },
//     { id: 3, src: "/google.png", alt: "Client 3" },
//     { id: 4, src: "/zendesk.png", alt: "Client 4" },
//     { id: 5, src: "/shopify.png", alt: "Client 5" },
 
//   ];

//   // Duplicate the logos to create a seamless loop
//   const duplicatedLogos = [...logos, ...logos];
  
//   const [position, setPosition] = useState(0);
//   const speed = 0.5; // pixels per frame
  
//   useEffect(() => {
//     const scrollLogos = () => {
//       setPosition((prevPosition) => {
//         // Reset position once the first set of logos is out of view
//         if (prevPosition <= -logos.length * 150) {
//           return 0;
//         }
//         return prevPosition - speed;
//       });
//     };
    
//     const animationId = requestAnimationFrame(function animate() {
//       scrollLogos();
//       requestAnimationFrame(animate);
//     });
    
//     return () => cancelAnimationFrame(animationId);
//   }, [logos.length]);

//   return (
//     <div className="auto-slider-logo-carousel">
//       <div className="auto-slider-container">
//         <div className="auto-slider-carousel-container">
//           <div 
//             className="auto-slider-logo-slider"
//             style={{ 
//               transform: `translateX(${position}px)`,
//               width: `${duplicatedLogos.length * 150}px`
//             }}
//           >
//             {duplicatedLogos.map((logo, index) => (
//               <div 
//                 key={`${logo.id}-${index}`} 
//                 className="auto-slider-logo-item"
//               >
//                 <img 
//                   src={logo.src} 
//                   alt={logo.alt} 
//                   className="auto-slider-logo-image"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PartnerSlider;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PartnerSlider.css';

const PartnerSlider = () => {
  const [logos, setLogos] = useState([]);
  const [position, setPosition] = useState(0);
  const speed = 0.5; // pixels per frame

  // useEffect(() => {
  //   // Fetch logos from API
  //   axios.get('https://veralink-api.webprismits.us/api/v1/front/partners')
  //     .then(response => {
  //       if (Array.isArray(response.data?.data)) {
  //         setLogos(response.data.data);
  //       } else {
  //         console.error('Unexpected data format:', response.data);
  //       }
  //     })
  //     .catch(error => {
  //       console.error('Error fetching partner logos:', error);
  //     });
  // }, []);
  useEffect(() => {
  axios.get('https://veralink-api.webprismits.us/api/v1/front/partners')
    .then(response => {
      console.log("Fetched partner logos:", response.data); //CONFIRMATION LOG

      if (Array.isArray(response.data?.data)) {
        setLogos(response.data.data);
      } else {
        console.warn(' API response does not contain expected data array:', response.data);
      }
    })
    .catch(error => {
      console.error(' Error fetching partner logos:', error);
    });
}, []);


  // Duplicate the logos for seamless scrolling
  const duplicatedLogos = [...logos, ...logos];

  useEffect(() => {
    const scrollLogos = () => {
      setPosition((prevPosition) => {
        // Reset after one loop
        if (prevPosition <= -logos.length * 150) {
          return 0;
        }
        return prevPosition - speed;
      });
    };

    const animationId = requestAnimationFrame(function animate() {
      scrollLogos();
      requestAnimationFrame(animate);
    });

    return () => cancelAnimationFrame(animationId);
  }, [logos.length]);

  return (
    <div className="auto-slider-logo-carousel">
      <div className="auto-slider-container">
        <div className="auto-slider-carousel-container">
          <div 
            className="auto-slider-logo-slider"
            style={{ 
              transform: `translateX(${position}px)`,
              width: `${duplicatedLogos.length * 150}px`
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div 
                key={`${logo.id}-${index}`} 
                className="auto-slider-logo-item"
              >
                <img
                  src={logo.logo_url} 
                  alt={logo.name || `Partner ${logo.id}`} 
                  className="auto-slider-logo-image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerSlider;
