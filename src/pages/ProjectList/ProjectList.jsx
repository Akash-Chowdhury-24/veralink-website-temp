import React from "react";
import "./ProjectList.css";

const projects = [
  {
    logo: "/project6.png",
    title: "Network Core Redesign and Upgrade",
    duration: "8 Months",
    country: "Jamaica",
    client: "Development Bank of Jamaica Limited",
    name:" Development Bank of jamaica limited",
    description: "Network redesign, implementation of Cisco Firepower Firewall, Juniper switching, Fortinet Wireless and Internet Security Firewall stack",
  },
  {
    logo: "/project2.png",
    title: "ISP Network Core Technology Assessment",
    duration: "6 Months",
    country: "Jamaica",
    client: "Digicel Jamaica",
    name:"Digicel group",
    description: "ISP Core technology assessment across multiple ISPs in the Caribbean region",
  },
  {
    logo: "/project3.png",
    title: "Voice System Upgrade",
    duration: "6 Months",
    country: "Jamaica",
    client: " Forestry department (JM)",
    name:"dfdf",
    description: "Voice system upgrade for enhanced communication infrastructure",
  },
  {
    logo: "/project4.png",
    title: "Firewall Migration Upgrade",
    duration: "5 Months",
    country: "Jamaica",
    client: "Fujitsu/UTC (TT)",
    name:"dfdf",
    description: "Migration of legacy firewall systems to Palo Alto next-gen firewalls",
  },
  {
    logo: "/project5.png",
    title: "ISP Network Design Planning and Consultancy",
    duration: "6 Months",
    country: "Jamaica",
    client: "Mobile Service Provi",
    name:"Rock connect",
    description: "Technology stack assessment, Cisco Networking Core Routing, Design and Switching",
  },
];

const ProjectList = () => {
  return (
    <div>
   <div className="project-banner-img">
      <img src="/industries-banner.png" alt="" srcset="" /> </div>
        <div className="project-wrapper">
      <h3>Expert IT projects</h3>
      {projects.map((item, index) => (
        <div key={index} className="project-card">
          <div className="project-logo">
            <img src={item.logo} alt={item.client} />
          </div>
          <div className="project-details">
            <h4>{item.title}</h4>
            <p><strong>Duration:</strong> {item.duration}</p>
            <p><strong>Country:</strong> {item.country}</p>
            <p><strong>Client Type</strong> {item.client}</p>
            <p><strong>Client Name</strong> {item.name}</p>
            <p><strong>Technologies </strong>{item.description}</p>
          </div>
        </div>
      ))}
      </div>
   
    </div>
  );
};

export default ProjectList;
