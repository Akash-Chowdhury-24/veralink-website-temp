import React from "react";
import "./ServicesPage.css";
import PartnerSlider from "../../component/PartnerSlider";
import FAQ from "../../component/FAQ";
function ServicesPage() {
  const services = [
  {
    title: "Manage IT Services",
    image: "/service-manage1.png",
    description:
      "Managing IT operations involves more than just maintenance—it’s about ensuring your business remains agile, efficient, and secure. VeraLink offers comprehensive managed services that provide 24/7 monitoring, expert support, and strategic guidance to keep your IT environment running smoothly.",
  },
  {
    title: "Manage VoIP Services",
    image: "/service-manage2.png",
    description:
      "Stay connected with reliable and scalable VoIP solutions. VeraLink’s managed VoIP services offer crystal-clear voice communication, secure data channels, and seamless integration with your existing systems.",
  },
  {
    title: "Remote Monitoring & Management",
    image: "/service-manage3.png",
    description:
      "Proactive monitoring and management are essential for minimizing downtime. VeraLink’s remote management services ensure that your IT infrastructure is always running at peak performance, identifying and resolving issues before they impact your operations.",
  },
  {
    title: "Network Assessment",
    image: "/service-manage4.png",
    description:
      "Understanding your network’s strengths and weaknesses is crucial. VeraLink provides detailed network assessments to help you identify potential risks, optimize performance, and ensure your IT environment aligns with your business goals.",
  }
];
const promoItems = [
  {
    title: "Cloud PBX System",
    image: "/promo2.png",
    caption: "Book Your Consultation Now!",
  },
  {
    title: "Tailored Solutions",
    image: "/promo1.png",
    caption: "Customized Solutions that perfectly fits your needs!",
  },
];
const servicesFAQs = [
  {
    question: "What is the mission of VeraLink Technology Services?",
    answer: "To provide reliable, secure, and innovative IT solutions to help businesses grow.",
  },
  {
    question: "What kind of IT support do you provide?",
    answer: "We offer 24/7 remote monitoring, on-site support, and infrastructure management.",
  },
  {
    question: "What kind of IT support do you provide?",
    answer: "We offer 24/7 remote monitoring, on-site support, and infrastructure management.",
  }
];
  return (
    <div>
      <div className="project-banner-img">
        <img src="/industries-banner.png" alt="" srcset="" />{" "}
      </div>
      <div className="Service-page-heading">
        <h1>Managing your it solutions</h1>
      </div>
      <div className="it-section">
        <div className="it-left">
          <h3>Managing Your Comprehensive IT Solutions</h3>
          <p>
            In today’s fast-paced business environment, the effective use of
            technology is key to staying competitive. Your business needs an
            experienced and knowledgeable technology partner to secure your
            business ambitions. VeraLink’s Managed IT Services provide the
            ultimate solution for businesses seeking to reduce network downtime
            and enhance efficiency.
          </p>
          <p>
            We are experts in managing and optimizing converged IT
            infrastructures. Our managed service offerings cover a broad array
            of IT outsourcing services, including:
          </p>

          <ul>
            <li>
              <strong>Networks</strong>
              <br />
              Ensure reliable, secure, and high-performance network environments
              that support your critical business operations.
            </li>
            <li>
              <strong>IT Infrastructure</strong>
              <br />
              Maintain and optimize your IT infrastructure with proactive
              management and seamless upgrades.
            </li>
            <li>
              <strong>Applications</strong>
              <br />
              Ensure your business applications run smoothly, are up to date,
              and fully supported by our expert team.
            </li>
            <li>
              <strong>Business Processes</strong>
              <br />
              Streamline and automate essential business processes to boost
              productivity and drive growth.
            </li>
          </ul>
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
      <h2>Managing Your Business with Advanced IT Solutions</h2>
      <div className="service-grid">
        {services.map((item, index) => (
          <div key={index} className="service-card">
            <h4>{item.title}</h4>
            <img src={item.image} alt={item.title} className="service-image" />
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
    <div className="managing-heading"><h1>Managing Your Business with Advanced IT Solutions</h1>
    <img src="/youtube2.png" alt="" /></div>
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
          <FAQ faqs={servicesFAQs}/>
    </div>
  );
}

export default ServicesPage;
