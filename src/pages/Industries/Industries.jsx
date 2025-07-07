import React from "react";
import "./Industries.css";
import PartnerSlider from "../../component/PartnerSlider";
function Industries() {
    const industryData = [
  {
    title: "Internet Service Providers",
    image: "/innovative-img1.png",
    description:
      "We have experts who have worked in the ISP space for decades and possess the experience and knowledge to help such entities remove the stress from their day-to-day operations team.",
  },
  {
    title: "Healthcare",
    image: "/innovative-img2.png",
    description:
      "Our advanced network solutions ensure reliable and secure data transfer across healthcare systems, enhancing patient care, improving communication, and maintaining compliance. Let us help you build a connected, efficient, and secure healthcare environment.",
  },
  {
    title: "Financial Institutions",
    image: "/innovative-img3.png",
    description:
      "Our financial IT solutions provide robust security, accurate transaction processing, and enhanced customer experience. We specialize in creating secure, compliant, and scalable infrastructures that align with the demanding needs of the financial sector.",
  },
  {
    title: "Retail",
    image: "/innovative-img4.png",
    description:
      "Our integrated IT solutions empower retailers to enhance customer engagement, streamline operations, and adapt to market trends. From POS systems to secure network deployments and implementation, we provide the tools and support retailers need to succeed.",
  },
  {
    title: "Residential",
    image: "/innovative-img5.png",
    description:
      "Our home technology solutions bring convenience, security, and connectivity to your living space. Whether it's smart home controls, remote surveillance, or personal comfort systems, we offer reliable services that transform your home into a connected haven.",
  },
];

  return (
    <div className="Industries-banner-img">
      <img src="/industries-banner.png" alt="" srcset="" />
      <div className="Industries-main-container">
        <h1>Innovative Solutions for Your Business</h1>
        <div className="industry-section">
          <div className="industry-text">
            <h3>Tailored Solutions for Every Industry</h3>
            <p>
              At VeraLink, we understand that each industry has its unique
              challenges and requirements. That’s why we offer specialized
              technology solutions designed to address the specific needs of
              various sectors. Whether you're in healthcare, banking, retail, or
              any other field, our expert team is here to provide innovative and
              effective solutions that drive success and streamline your
              operations. Explore how our industry-focused services can help you
              achieve your goals and stay ahead in a rapidly evolving digital
              landscape.
            </p>
          </div>
          <div className="industry-video">
            <div className="video-thumbnail">
              <img
                src="/industries-thumbnail.png" // Replace with your actual image path
                alt="Industry Video"
                className="thumbnail-img"
              />
              <div className="play-icon">
                <img src="play-button.png" alt="Play Button" />
              </div>
            </div>
          </div>
        </div>
        <div className="innovation-heading">
            <h1>Innovative Solutions for Your Business</h1>
        </div>
        <div className="industry-grid">
      {industryData.map((item, index) => (
        <div key={index} className="industry-card">
            <h4>{item.title}</h4>
          <img src={item.image} alt={item.title} className="industry-img" />
          
          <p>{item.description}</p>
        </div>
      ))}
    </div>
    <div className="transform-business-container">
      <div className="overlay"></div> {/* For the darkening effect on the left image */}
      <div className="content-section">
        <h2>Ready to Transform Your Business?</h2>
        <button className="get-in-touch-button">Get In Touch</button>
      </div>
      <div className="image-right">
        {/* You can add an image tag here if you have a specific image for the right side,
            otherwise, the background will show through as per the design */}
      </div>
    </div>
     <div className="slider"> 
          <h1>Our Partners</h1>
          <PartnerSlider /></div>
      </div>
      
    </div>
  );
}

export default Industries;
