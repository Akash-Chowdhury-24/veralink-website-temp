import React from "react";
import "./AboutPage.css";
import ProductSlider from "../../component/ProductSlider";
import PartnerSlider from "../../component/PartnerSlider";
import BlogCarousel from "../../component/BlogCarousel";
function AboutPage() {
  return (
    <div>
      <div className="about-banner">
        <div className="quote-text">
          <h1>
            "The goal is not to be the best in the world, but to be the best for
            the world."
          </h1>
          <br />
          <span>– Simon Sinek</span>
        </div>
      </div>
      <h1 className="about-heading">About VeraLink Technology Services</h1>
      <div className="about-vts-container1">
        <img src="/about-vts-img2.png" alt="" />
        <div className="about-vts-text">
          <h1>Our Mission</h1>
          <br />
          <p>
            To bring the highest quality of technological solutions to the
            marketplace; with our strategic alliances and a team of experts
            dedicated to technology innovation and business process
            optimization.
          </p>
          <br />
          <p>
            Through our diligence, transparency, and exceptional service
            delivery, our reputation as the premier technology solutions
            provider should always precede us.
          </p>
        </div>
      </div>
      <div className="about-vts-container2">
      <div className="about-vts-text1">
        <h1>Our Mission</h1>
        <br />
        <p>
          To bring the highest quality of technological solutions to the
          marketplace; with our strategic alliances and a team of experts
          dedicated to technology innovation and business process optimization.
        </p>
        <br />
        <p>
          Through our diligence, transparency, and exceptional service delivery,
          our reputation as the premier technology solutions provider should
          always precede us.
        </p>
      </div>
        <img src="/about-vts-img1.png" alt="" />
</div>
<section className="what-we-do">
      <h2>What we do</h2>

      <div className="service-block">
        <h4>Consultation and Technology Planning</h4>
        <p>
          Effective consultation involves collaborative discussions between business stakeholders, our experts, and decision-makers to understand the organization’s unique needs, challenges, and goals. This process serves as the foundation for crafting a comprehensive technology plan that aligns with the business objectives.
        </p>
      </div>

      <div className="service-block">
        <h4>Network Assessment and Analysis</h4>
        <p>
          Network assessment and analysis involves a comprehensive examination of existing systems, applications, and infrastructure to identify strengths, weaknesses, and areas for improvement. Proactive assessment helps organizations make informed decisions about upgrades, enhancements, security posture, or the adoption of new technologies.
        </p>
      </div>

      <div className="service-block">
        <h4>Network Design and Development</h4>
        <p>
          Our expertise spans the widest spectrum of network designs, from initial conceptualization to meticulous implementation. With a deep understanding of the evolving technological landscape, we ensure that our solutions align with your objectives and requirements while keeping costs under control.
        </p>
      </div>

      <div className="service-block">
        <h4>Systems Integration, Sales and Support</h4>
        <p>
          In collaboration with industry giants such as Cisco, Aitco, Microsoft, and AWS, we offer an extensive array of systems sales and support services. These strategic partnerships enable us to provide comprehensive assistance throughout your network infrastructure journey.
        </p>
      </div>

      <div className="why-choose">
        <h2>Why Choose VeraLink?</h2>
        <div className="why-choose-para"> 
          <h3>VeraLink is a leader in Technology Services and remains unmatched in experience and certifications.</h3>
        <p>
          VeraLink is a leader in Technology Services and remains unmatched in experience and certifications.
        <br/>
          VeraLink Limited is a company formed by a group of highly experienced industry-recognized leaders. With over thirty years of combined experience, these individuals have built and operated complex data networks across the Caribbean, North America and Europe.
        <br />
          Having established themselves as trailblazers in the industry, they conceptualized VeraLink to bring this knowledge and experience directly to the clients by building solutions and creating mentorship opportunities for the next generation of technology experts.
        </p>
</div>
        <button className="learn-more-btn">Learn More</button>
      </div>
    </section>
      <ProductSlider />
        <div className="slider"> 
          <h1>Our Partners</h1>
          <PartnerSlider /></div>

          {/* <BlogCarousel/> */}
    </div>
  );
}

export default AboutPage;
