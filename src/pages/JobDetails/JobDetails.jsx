// import React, { useEffect, useState } from 'react';
// import './JobDetails.css';
// import { FiPaperclip } from 'react-icons/fi'; // Feather Icons
// import { useParams } from 'react-router-dom';


// function JobDetails() {
//   const params = useParams();
//   const id = params.id;
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     resume: null,
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === 'resume') {
//       setFormData({ ...formData, resume: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // TODO: handle form submission
//     console.log(formData);
//     alert('Application submitted!');
//   };

//   return (
//     <div className="job-details-container">
//          <div className="contact-banner">
//         <img
//           src="/contact_banner.png" // replace with your image
//           alt="Contact Banner"
//         />
//       </div>
//       <div className='job-heading'><h1>UI UX Designer- 3 years of experience</h1></div>
//       <div className='job-main-container'>
//       <div className="job-description">
//         <h2>Job Description</h2>
//         <p>
//           Nunc sed a nisl purus. Nibh dis faucibus proin lacus tristique. Sit congue non vitae odio sit erat in. Felis eu ultrices a sed massa. Commodo fringilla sed tempor risus laoreet ultricies ipsum. Habitasse morbi faucibus in iaculis lectus. Nisi enim feugiat enim volutpat. Sem quis viverra viverra odio mauris nunc. 
// Et nunc ut tempus duis nisl sed massa. Ornare varius faucibus nisi vitae vitae cras ornare. Cras facilisis dignissim augue lorem amet adipiscing cursus fames mauris. Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae. Quisque tincidunt metus lectus porta eget blandit euismod sem nunc. Tortor gravida amet amet sapien mauris massa.Tortor varius nam maecenas duis blandit elit sit sit. Ante mauris morbi diam habitant donec.Et nunc ut tempus duis nisl sed massa. Ornare varius faucibus nisi vitae vitae cras ornare. Cras facilisis dignissim augue lorem amet adipiscing cursus fames mauris. Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae. Quisque tincidunt metus lectus porta eget blandit euismod sem nunc. Tortor gravida amet amet sapien mauris massa.Tortor varius nam maecenas duis blandit elit sit sit. Ante mauris morbi diam habitant donec.
//         </p>
//       </div>

//       <div className="apply-now">
//         <h4>Apply Now</h4>
//         <form onSubmit={handleSubmit} className="apply-form">
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//           />
//           <label className="attach-resume">
//           <FiPaperclip style={{width: '20px', height:'20px',marginRight:'px'}}/> Attach Resume 
//             <input
//               type="file"
//               name="resume"
//               accept=".pdf,.doc,.docx"
//               onChange={handleChange}
//             />
//           </label>
//           <button type="submit" className="submit-btn">
//             Submit Application
//           </button>
//           <p className="privacy-note">
//             This site is protected by reCAPTCHA and the Google{' '}
//             <a href="/privacy-policy">Privacy Policy</a> and{' '}
//             <a href="/terms-conditions">Terms of Service</a> apply.
//           </p>
//         </form>
//       </div>
//       </div>
//     </div>
//   );
// }

// export default JobDetails;
// import React, { useEffect, useState } from 'react';
// import './JobDetails.css';
// import { FiPaperclip } from 'react-icons/fi';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// function JobDetails() {
//   const { id } = useParams();
//   const [job, setJob] = useState(null);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     resume: null,
//   });

//   // Fetch job details by ID
//   useEffect(() => {
//     axios
//       .get(`https://veralink-api.webprismits.us/api/v1/front/jobs/${id}`, {
//         headers: {
//           Accept: 'application/json',
//         },
//       })
//       .then((res) => {
//         console.log('Job Detail:', res.data);
//         setJob(res.data.data);
//       })
//       .catch((err) => {
//         console.error('Job fetch error', err);
//       });
//   }, [id]);

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === 'resume') {
//       setFormData({ ...formData, resume: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   // Submit form
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const submission = new FormData();
//     submission.append('job_listing_id', id);
//     submission.append('name', formData.name);
//     submission.append('email', formData.email);
//     submission.append('phone', formData.phone);
//     submission.append('resume', formData.resume);

//     try {
//       const res = await axios.post(
//         'https://veralink-api.webprismits.us/api/v1/front/job-apply',
//         submission,
//         {
//           headers: {
//             Accept: 'application/json',
//           },
//         }
//       );
//       console.log('Application submitted:', res.data);
//       alert('Application submitted successfully!');
//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         resume: null,
//       });
//     } catch (error) {
//       console.error('Submission error:', error);
//       alert('Something went wrong while submitting the application.');
//     }
//   };

//   return (
//     <div className="job-details-container">
//       <h1>Job ID: {id}</h1>

//       <div className="contact-banner">
//         <img src="/contact_banner.png" alt="Contact Banner" />
//       </div>

//       {job ? (
//         <>
//           <div className="job-heading">
//             <h1>{job.role_name} - {job.years_of_experience} Years of experience</h1>
//           </div>

//           <div className="job-main-container">
//             <div className="job-description">
//               <h2>Job Description</h2>
//               <p>{job.job_description}</p>
//             </div>

//             <div className="apply-now">
//               <h4>Apply Now</h4>
//               <form onSubmit={handleSubmit} className="apply-form">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="Phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   required
//                 />

//                 <label className="attach-resume">
//                   <FiPaperclip style={{ width: '20px', height: '20px', marginRight: '5px' }} />
//                   Attach Resume
//                   <input
//                     type="file"
//                     name="resume"
//                     accept=".pdf,.doc,.docx"
//                     onChange={handleChange}
//                     required
//                   />
//                 </label>

//                 <button type="submit" className="submit-btn">
//                   Submit Application
//                 </button>

//                 <p className="privacy-note">
//                   This site is protected by reCAPTCHA and the Google{' '}
//                   <a href="/privacy-policy">Privacy Policy</a> and{' '}
//                   <a href="/terms-conditions">Terms of Service</a> apply.
//                 </p>
//               </form>
//             </div>
//           </div>
//         </>
//       ) : (
//         <p>Loading job details...</p>
//       )}
//     </div>
//   );
// }

// export default JobDetails;
// import React, { useEffect, useState } from 'react';
// import './JobDetails.css';
// import { FiPaperclip } from 'react-icons/fi';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// function JobDetails() {
//   const { id } = useParams();
//   const [job, setJob] = useState(null);

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     resume: null,
//   });

//   // Fetch job details by ID
//   useEffect(() => {
//     axios
//       .get(`https://veralink-api.webprismits.us/api/v1/front/jobs/${id}`, {
//         headers: {
//           Accept: 'application/json',
//         },
//       })
//       .then((res) => {
//         console.log('Job Detail:', res.data);
//         setJob(res.data.data);
//       })
//       .catch((err) => {
//         console.error('Job fetch error', err);
//       });
//   }, [id]);

//   // Handle input and file change
//   const handleChange = (e) => {
//     const { name, value, files } = e.target;

//     if (name === 'resume') {
//       console.log('Selected file:', files[0]);
//       setFormData({ ...formData, resume: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const submission = new FormData();
//     submission.append('job_listing_id', id);
//     submission.append('name', formData.name);
//     submission.append('email', formData.email);
//     submission.append('phone', formData.phone);
//     submission.append('resume', formData.resume);

//     // Log the values for verification
//     for (let [key, value] of submission.entries()) {
//       console.log(`${key}:`, value);
//     }

//     try {
//       const res = await axios.post(
//         'https://veralink-api.webprismits.us/api/v1/front/job-apply',
//         submission,
//         {
//           headers: {
//             Accept: 'application/json',
//             // Do NOT set Content-Type, browser/axios will do it for multipart
//           },
//         }
//       );

//       console.log('Application submitted:', res.data);
//       alert('Application submitted successfully!');

//       // Reset form after submit
//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         resume: null,
//       });

//       // Optionally reset file input
//       document.querySelector('input[type="file"]').value = '';
//     } catch (error) {
//       console.error('Submission error:', error);
//       alert('Something went wrong while submitting.');
//     }
//   };

//   return (
//     <div className="job-details-container">

//       <div className="contact-banner">
//         <img src="/contact_banner.png" alt="Contact Banner" />
//       </div>

//       {job ? (
//         <>
//           <div className="job-heading">
//             <h1>{job.role_name} - {job.years_of_experience} Years of experience</h1>
//           </div>

//           <div className="job-main-container">
//             <div className="job-description">
//               <h2>Job Description</h2>
//               <p>{job.job_description}</p>
//             </div>

//             <div className="apply-now">
//               <h4>Apply Now</h4>
//               <form onSubmit={handleSubmit} className="apply-form">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="Phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   required
//                 />

//                 <label className="attach-resume">
//                   <FiPaperclip style={{ width: '20px', height: '20px', marginRight: '5px' }} />
//                   Attach Resume
//                   <input
//                     type="file"
//                     name="resume"
//                     accept=".pdf,.doc,.docx"
//                     onChange={handleChange}
//                     required
//                   />
//                 </label>

//                 <button type="submit" className="submit-btn">
//                   Submit Application
//                 </button>

//                 <p className="privacy-note">
//                   This site is protected by reCAPTCHA and the Google{' '}
//                   <a href="/privacy-policy">Privacy Policy</a> and{' '}
//                   <a href="/terms-conditions">Terms of Service</a> apply.
//                 </p>
//               </form>
//             </div>
//           </div>
//         </>
//       ) : (
//         <p>Loading job details...</p>
//       )}
//     </div>
//   );
// }

// export default JobDetails;
import React, { useEffect, useState } from 'react';
import './JobDetails.css';
import { FiPaperclip } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [resumeUploading, setResumeUploading] = useState(false);
  const [resumeName, setResumeName] = useState('');

  useEffect(() => {
    axios
      .get(`https://veralink-api.webprismits.us/api/v1/front/jobs/${id}`, {
        headers: { Accept: 'application/json' },
      })
      .then((res) => setJob(res.data.data))
      .catch((err) => console.error('Job fetch error', err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'resume') {
      setResumeUploading(true);
      setTimeout(() => {
        const file = files[0];
        setFormData((prev) => ({ ...prev, resume: file }));
        setResumeName(file.name);
        setResumeUploading(false);
      }, 800);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const submission = new FormData();
    submission.append('job_listing_id', id);
    submission.append('name', formData.name);
    submission.append('email', formData.email);
    submission.append('phone', formData.phone);
    submission.append('resume', formData.resume);

    try {
      const res = await axios.post(
        'https://veralink-api.webprismits.us/api/v1/front/job-apply',
        submission,
        {
          headers: { Accept: 'application/json' },
        }
      );

      console.log('Application submitted:', res.data);
      alert('Application submitted successfully!');
      setSubmitted(true);

      setFormData({
        name: '',
        email: '',
        phone: '',
        resume: null,
      });
      setResumeName('');
      document.querySelector('input[type="file"]').value = '';
    } catch (error) {
      console.error('Submission error:', error);
      alert('Something went wrong while submitting.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="job-details-container">
      <div className="contact-banner">
        <img src="/contact_banner.png" alt="Contact Banner" />
      </div>

      {job ? (
        <>
          <div className="job-heading">
            <h1>
              {job.role_name} - {job.years_of_experience} Years of experience
            </h1>
          </div>

          <div className="job-main-container">
            <div className="job-description">
              <h2>Job Description</h2>
              <p>{job.job_description}</p>
            </div>

            <div className="apply-now">
              <h4>Apply Now</h4>
              <form onSubmit={handleSubmit} className="apply-form">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={submitting || submitted}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={submitting || submitted}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  disabled={submitting || submitted}
                />

                <label className="attach-resume">
                   <FiPaperclip style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                  {resumeUploading ? (
                    <span className="uploading-text">Uploading...</span>
                  ) : resumeName ? (
                    <span className="resume-name">{resumeName}</span>
                  ) : (
                    'Attach Resume'
                  )}
                  <input
                    type="file"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleChange}
                    required
                    disabled={submitting || submitted}
                  />
                </label>

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={submitting || submitted}
                >
                  {submitting
                    ? 'Submitting...'
                    : submitted
                    ? 'Submitted ✅'
                    : 'Submit Application'}
                </button>

                <p className="privacy-note">
                  This site is protected by reCAPTCHA and the Google{' '}
                  <a href="/privacy-policy">Privacy Policy</a> and{' '}
                  <a href="/terms-conditions">Terms of Service</a> apply.
                </p>
              </form>
            </div>
          </div>
        </>
      ) : (
        <p>Loading job details...</p>
      )}
    </div>
  );
}

export default JobDetails;
