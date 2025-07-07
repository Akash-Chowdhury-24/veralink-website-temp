// ProductSlider.jsx
import React, { useState } from "react";
import "./ProductSlider.css";

const productSlides = [
  {
    image: "/veralink_slider.png", // Replace with your actual path
  },
  {
    image: "/veralink_slider.png",
  },
  {
    image: "/veralink_slider.png",
  },{
    image: "/veralink_slider.png",
  },{
    image: "/veralink_slider.png",
  },{
    image: "/veralink_slider.png",
  },
  // Add more slides as needed
];

function ProductSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % productSlides.length);
  };

  const currentSlide = productSlides[currentIndex];

  return (
    <div className="slider-container">
      <h2>VeraLink's products & services</h2>

      <div className="download-link">
        <a href="/downloads/veralink-brochure.pdf" target="_blank" rel="noreferrer">
          Download PDF <span className="arrow">→</span>
        </a>
      </div>

      {/* <img src="/images/veralink-logo.png" alt="VeraLink Logo" className="logo" /> */}

      <div className="card">
        <img src={currentSlide.image} alt="Product" className="card-image" />
        {/* <div className="card-text">
          <h4>{currentSlide.title}</h4>
          <ul>
            {currentSlide.items.map((item, idx) => (
              <li key={idx}><strong>{item}</strong></li>
            ))}
          </ul>
          <p>{currentSlide.description}</p>
        </div> */}
      </div>

      <div className="slider-footer">
        <span>{currentIndex + 1}/{productSlides.length}</span>
        <button onClick={handleNext} className="next-btn">
        |  Next <span className="arrow">→</span>
        </button>
      </div>
    </div>
  );
}

export default ProductSlider;
