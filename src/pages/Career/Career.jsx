// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Career.css'; 

// const jobList = [
//   {
//     id: 1,
//     title: 'UI UX Designer',
//     experience: '3 Years of experience',
//     logo: '/uiux-logo.png', 
//   },
//   {
//     id: 2,
//     title: 'UI UX Designer',
//     experience: '3 Years of experience',
//     logo: '/uiux-logo.png',
//   },
//   {
//     id: 3,
//     title: 'UI UX Designer',
//     experience: '3 Years of experience',
//     logo: '/uiux-logo.png',
//   },
// ];

// function Career() {

//   const navigate = useNavigate();

//   const handleJobClick = (jobId) => {
//     navigate(`/job-details`);
//   };

//   return (
//     <div className="careers-container">
//         <div className="contact-banner">
//         <img
//           src="/contact_banner.png" 
//           alt="Contact Banner"
//         />
//       </div>
//     <div className='carrer-content'>
//       <h2 className="careers-title">Careers</h2>
//       {jobList.map((job) => (
//         <div key={job.id} className="career-card">
//           <img src={job.logo} alt="Company Logo" className="career-logo" />
//           <div className="career-info">
//             <h3 className="career-title">{job.title}</h3>
//             <p className="career-experience">{job.experience}</p>
//           </div>
//           <button
//             className="career-button"
//             onClick={() => handleJobClick(job.id)}
//           >
//             Job Details
//           </button>
//         </div>
//       ))}
//       </div>
//     </div>
    
//   );
// }

// export default Career;



// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './Career.css';

// function Career() {
//   const [jobs, setJobs] = useState([]);
//   const navigate = useNavigate();

//   const handleJobClick = (jobId) => {
//     navigate(`/job-details/${jobId}`);
//   };

//   useEffect(() => {
//     axios
//       .get('https://veralink-api.webprismits.us/api/v1/front/jobs', {
//         headers: {
//           Accept: 'application/json',
//         },
//       })
//       .then((response) => {
//         console.log('Jobs from API:', response.data); // DEBUG
//         setJobs(response.data); // Assumes response.data is an array
//       })
//       .catch((error) => {
//         console.error('Failed to fetch jobs:', error);
//       });
//   }, []);

//   return (
//     <div className="careers-container">
//       <div className="contact-banner">
//         <img
//           src="/contact_banner.png"
//           alt="Contact Banner"
//         />
//       </div>
//       <div className="carrer-content">
//         <h2 className="careers-title">Careers</h2>
//         {Array.isArray(jobs) && jobs.length > 0 ? (
//           jobs.map((job) => (
//             <div key={job.id} className="career-card">
//               <img
//                 src={job.logo || '/uiux-logo.png'}
//                 alt="Company Logo"
//                 className="career-logo"
//               />
//               <div className="career-info">
//                 <h3 className="career-title">{job.title}</h3>
//                 <p className="career-experience">{job.experience}</p>
//               </div>
//               <button className="career-button" onClick={() => handleJobClick(job.id)}>
//                 Job Details
//               </button>
//             </div>
//           ))
//         ) : (
//           <p>Loading jobs...</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Career;


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Career.css';

function Career() {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  const handleJobClick = (jobId) => {
    navigate(`/job-details/${jobId}`);
  };

  useEffect(() => {
    axios
      .get('https://veralink-api.webprismits.us/api/v1/front/jobs', {
        headers: {
          Accept: 'application/json',
        },
      })
      .then((response) => {
        console.log('Jobs from API:', response.data); 
        setJobs(response.data.data); // ✅ Correct: access nested data
      })
      .catch((error) => {
        console.error('Failed to fetch jobs:', error);
      });
  }, []);

  return (
    <div className="careers-container">
      <div className="contact-banner">
        <img
          src="/contact_banner.png"
          alt="Contact Banner"
        />
      </div>
      <div className="carrer-content">
        <h2 className="careers-title">Careers</h2>
        {Array.isArray(jobs) && jobs.length > 0 ? (
          jobs.map((job) => (
            <div key={job.id} className="career-card">
              <img
                src="/uiux-logo.png" // Static logo
                alt="Company Logo"
                className="career-logo"
              />
              <div className="career-info">
                <h3 className="career-title">{job.role_name}</h3>
                <p className="career-experience">{job.years_of_experience} Years of experience</p>
              </div>
              <button className="career-button" onClick={() => handleJobClick(job.id)}>
                Job Details
              </button>
            </div>
          ))
        ) : (
          <p>Loading jobs...</p>
        )}
      </div>
    </div>
  );
}

export default Career;
