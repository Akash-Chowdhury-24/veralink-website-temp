// import React from 'react'
// import "./MeetOurTeam.css"
// function MeetOurTeam() {
//   return (
//     <div className='meet-container'>
//         <div className="meet-banner">
//         <img
//           src="/meet-banner-img.png" // replace with your image
//           alt="Contact Banner"
//         />
//       </div>
//         hello

//     </div>
//   )
// }

// export default MeetOurTeam;

// import React from "react";
// import "./MeetOurTeam.css";

// const teamMembers = [
//   {
//     name: "Hi, I’m Richard Hamilton",
//     role: "Co-founder, Chief Executive Officer and Chief Technology Officer of VeraLink Limited.",
//     description: `A certified Cisco CCIE, Richard brings decades of regional and international experience in network infrastructure, enterprise security solutions, and secure digital transformation. His leadership is grounded in technical excellence and a deep understanding of both emerging technologies and market dynamics across the Caribbean and beyond. Richard’s strategic vision and hands-on expertise continue to drive VeraLink’s innovation, resilience, and growth as a trusted technology partner.`,
//     image: "/meet-1.png", // Replace with actual photo URL
//   },
//   {
//     name: "Hi, I’m Dave Reid",
//     role: "Co-Founder and Chief Operations Officer of VeraLink Limited.",
//     description: `A Cisco Certified Internetwork Expert (CCIE), Dave brings a wealth of regional and international experience in network engineering, infrastructure deployment, and operational excellence. His current work oversees premier enterprise environments where he has led the design and execution of secure, high-performance networks. At VeraLink, Dave’s operational leadership and deep technical insight play a critical role in delivering reliable, scalable solutions and ensuring seamless execution across all facets of the business.`,
//     image: "/meet-2.png",
//   },
//   {
//     name: "Hi, Daenia Ashpole",
//     role: "New Team Member",
//     description: `Her dynamic approach to building strategic partnerships has consistently driven innovation and long-term value across industries. At VeraLink, she plays a key role in aligning partner objectives with our mission to deliver forward-thinking technology solutions. Daenia’s insight and leadership make her an invaluable asset as we expand our impact across local and international markets.`,
//     image: "/meet-2.png",
//   },
// ];

// function MeetOurTeam() {
//   return (
//     <div className="team-container">
//       {/* <div className="team-banner">
//         <h2 className="quote">"The goal is not to be the best in the world, but to be the best for the world."<br /><span>– Simon Sinek</span></h2>
//       </div> */}
//       <div className="team-banner">
//   <div className="quote-text">
//     <h1>"The goal is not to be the best in the world, but to be the best for the world."</h1><br />
//     <span>– Simon Sinek</span>
//   </div>
// </div>


//       <h1 className="team-heading">Meet Our Team</h1>

//       {/* <div className="team-cards">
//         {teamMembers.map((member, index) => (
//           <div key={index} className="team-card">
//             <img src={member.image} alt={member.name} />
//             <div className="team-card-text">
//               <h3>{member.name}</h3>
//               <h4>{member.role}</h4>
//               <p>{member.description}</p>
//             </div>
//           </div>
//         ))}
//       </div> */}
//       <div className="team-cards">
//         {teamMembers.map((member, index) => (
//           <div key={index} className="team-card">
//             <img src={member.image} alt={member.name} />
//             <div className="team-card-text">
//               <div className="text-content">
//                 <h3>{member.name}</h3>
//                 <h4>{member.role}</h4>
//                 <p>{member.description}</p>
//               </div>
//             </div>
//             <div className="bottom-stripe"></div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default MeetOurTeam;


import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MeetOurTeam.css";

function MeetOurTeam() {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    axios
      .get("https://veralink-api.webprismits.us/api/v1/front/teams", {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        console.log("Team Data:", response.data);
        setTeamMembers(response.data.data || []); // Adjust based on API response shape
      })
      .catch((error) => {
        console.error("Error fetching team members:", error);
      });
  }, []);

  return (
    <div className="team-container">
      <div className="team-banner">
        <div className="quote-text">
          <h1>
            "The goal is not to be the best in the world, but to be the best
            for the world."
          </h1>
          <br />
          <span>– Simon Sinek</span>
        </div>
      </div>

      <h1 className="team-heading">Meet Our Team</h1>

      <div className="team-cards">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <img
              src={member.image || "/default-profile.png"}
              alt={member.name}
            />
            <div className="team-card-text">
              <div className="text-content">
                <h3>{member.heading}</h3>
                <h4>{member.sub_heading}</h4>
                <p>{member.description}</p>
              </div>
            </div>
            <div className="bottom-stripe"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MeetOurTeam;
