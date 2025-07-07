import React from "react";
import "./HomePage.css";
import Slider from "react-slick";
import PartnerSlider from "../../component/PartnerSlider";
import FAQ from "../../component/FAQ";
import BlogCarousel from "../../component/BlogCarousel";
function HomePage() {
  const servicesFAQs = [
    {
      question: "What is the mission of VeraLink Technology Services?",
      answer:
        "To provide reliable, secure, and innovative IT solutions to help businesses grow.",
    },
    {
      question: "What kind of IT support do you provide?",
      answer:
        "We offer 24/7 remote monitoring, on-site support, and infrastructure management.",
    },
    {
      question: "What kind of IT support do you provide?",
      answer:
        "We offer 24/7 remote monitoring, on-site support, and infrastructure management.",
    },
  ];
  
  return (
    <div>
      <div className="home-header">
        <div className="content">
          <h1>
            Empowering Your Business with <br />
            <span>Seamless Technology Solutions</span>
          </h1>
          <p>Let us take your technology to the next level.</p>
          <button className="btn">Get Started</button>
          <h6 style={{ fontSize: "16px", lineHeight: "32px" }}>
            +1 (876) 606-0251
          </h6>
        </div>
      </div>
      <div className="welcome-veralink">
        <h2>Why Choose VeraLink?</h2>
        <div className="welcome-veralink-para">
          <p>
            We are in the Fourth Industry Revolution (Industry 4.0) where
            technology is changing the physical world as we know it.
            <br />
            VeraLink is an industry leader helping organizations to improve
            efficiency and productivity with the aid of technology.
          </p>
        </div>
        <button className="learn-more-btn">Learn More</button>
      </div>
      <section className="why-choose-section">
        <div className="why-text">
          <h2>Why should you choose veralink?</h2>

          <p>
            <strong>
              VeraLink is a leader in Technology and remains unmatched in
              experience and certifications.
            </strong>
          </p>

          <p>
            Our team of experts uses cutting-edge technology to help our clients
            realize network efficiency and increased productivity. We customize
            our solutions for each client, ensuring that the proposed solution
            addresses the specific need.
          </p>

          <p>
            We are a consultancy company providing world-class services to The
            Enterprise Businesses and ISPs alike. Our difference lies in the
            fact that we understand that we are an extension of our clients’
            businesses and that their customers are our customers.
          </p>

          <p>
            <strong>Solution Oriented</strong>
            <br />
            We will help you to achieve your business objectives
          </p>

          <p>
            <strong>Improved ROI</strong>
            <br />
            We ensure full return on your technology investment
          </p>
        </div>

        <div className="why-image">
          <div className="image-wrapper">
            <img src="/why-choose-section-image.png" alt="Veralink team" />
          </div>
        </div>
      </section>
      <div className="stay-ahead-text">
        <h2>Stay ahead in a rapidly evolving digital landscape</h2>
      </div>
      <section className="industries-section">
        
        <div className="industries-text">
          <h4>Industries</h4>
          <p>
            At VeraLink, we understand that each industry has its unique
            challenges and requirements. That’s why we offer specialized
            technology solutions designed to address the specific needs of
            various sectors. Whether you’re in healthcare, banking, retail, or
            any other field, our expert team is here to provide innovative and
            effective solutions that drive success and streamline your
            operations. Explore how our industry-focused services can help you
            achieve your goals and stay ahead in a rapidly evolving digital
            landscape.
          </p>
        </div>

        <div className="industries-image">
          <img src="/stay-ahead-image.png" alt="Networking technology" />
        </div>
      </section>

      <div className="transform-business-container">
        <div className="overlay"></div>{" "}
        {/* For the darkening effect on the left image */}
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
        <PartnerSlider />
      </div>
      <FAQ faqs={servicesFAQs} />
            {/* <BlogCarousel/> */}
             {/* <section className="blog-section">
        <BlogCarousel />
      </section> */}
    </div>
  );
}

export default HomePage;
