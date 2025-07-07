import React from "react";
import "./ServicePageManage.css";
import PartnerSlider from "../../component/PartnerSlider";
import FAQ from "../../component/FAQ";
function ServicePageManage() {
  const services = [
    {
      title: "Cyber Security Assessment",
      image: "/p1.png",
      description:
        "In a world of constant digital threats, understanding your security landscape is critical. VeraLink offers comprehensive cybersecurity assessments that identify vulnerabilities and provide actionable steps to fortify your network. We help you strengthen defenses that not only meet industry standards but also protect your business from evolving threats. ",
    },
    {
      title: "Data Backup and Recovery",
      image: "/p2.png",
      description:
        " Data loss can be catastrophic for any business. Our data backup and recovery solutions are designed to ensure that your critical information is always secure and easily recoverable. VeraLink specializes in creating reliable backup strategies and recovery plans that minimize downtime and provide peace of mind. ",
    },
    {
      title: "Compliance Alignment",
      image: "/p3.png",
      description:
        "Proactive monitoring and management are essential for minimizing downtime. VeraLink’s remote management services ensure that your IT infrastructure is always running at peak performance, identifying and resolving issues before they impact your operations. ",
    },
    {
      title: "Home Protect",
      image: "/p4.png",
      description:
        "Understanding your network’s strengths and weaknesses is crucial. VeraLink provides detailed network assessments to help you identify potential risks, optimize performance, and ensure your IT environment aligns with your business goals. ",
    },
  ];
  const promoItems = [
    {
      title: "Cybersecurity Assessment",
      image: "/p5.png",
      caption: "Cybersecurity Advanced Scanning & Reporting",
    },
    {
      title: "Cybersecurity Advanced Scanning & Reporting",
      image: "/p6.png",
      caption: "Secure Your Network Today!",
    },
  ];
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
      <div className="project-banner-img">
        <img src="/industries-banner.png" alt="" srcset="" />{" "}
      </div>
      <div className="Service-page-heading">
        <h1>IT Solutions for protection</h1>
      </div>
      <div className="it-section">
        <div className="it-left">
          <h3>Comprehensive IT Solutions for Seamless Protection</h3>
          <p>
            With the continuous increase of cyber security threats and
            complexity of the security exploitation techniques, cyber security
            is no longer just a saying, it is a necessity. Today’s organizations
            are aligning themselves to industry best practices to safeguard
            their businesses. If you are uncertain of your security posture or
            compliance with regulations, the Verlink team of experts are here to
            help you make that journey to your most robust and effective network
            security deployment.
          </p>
        </div>

        <div className="it-right">
          <h4>
            Ready to Optimize the
            <br />
            Management of Your IT Solutions?
          </h4>
          <p>
            Contact us today to schedule a consultation and explore how our
            managed IT services can help your business achieve seamless
            operations, reduce downtime, and stay ahead in today’s competitive
            landscape.
          </p>
          <button className="cta-button1">Schedule a consultation</button>
        </div>
      </div>
      <div className="service-section">
        <h2>Protecting Your Business with Advanced IT Solutions</h2>
        <div className="service-grid">
          {services.map((item, index) => (
            <div key={index} className="service-card">
              <h4>{item.title}</h4>
              <img
                src={item.image}
                alt={item.title}
                className="service-image"
              />
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="promo-grid">
        {promoItems.map((item, index) => (
          <div key={index} className="promo-item">
            <h4>{item.title}</h4>
            <img src={item.image} alt={item.title} />
            <p>{item.caption}</p>
          </div>
        ))}
      </div>
      {/* <div className="managing-heading">
        <h1>Managing Your Business with Advanced IT Solutions</h1>
        <img src="/youtube2.png" alt="" />
      </div> */}
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
    </div>
  );
}

export default ServicePageManage;
