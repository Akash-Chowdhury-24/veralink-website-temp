// import React from 'react'
// import './Testimonals.css'
// function Testimonals() {
//   return (
//     <div>Testimonals</div>
//   )
// }

// export default Testimonals

// import React, { useState } from 'react';
// import './Testimonals.css';

// const Testimonals = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     company: '',
//     title: '',
//     feedback: '',
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Submitted Data:', formData);
//     // You can handle form submission logic here
//   };
//   return (
    
//     <div className="testimonial-container">
//         <div className="contact-banner">
//         <img
//           src="/contact_banner.png" // replace with your image
//           alt="Contact Banner"
//         />
//       </div>
//       <div className='testimonal-main-container'>
//       <h1>Testimonials</h1>
//       <form className="testimonial-form" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="company"
//           placeholder="Company Name"
//           value={formData.company}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="title"
//           placeholder="Job Title"
//           value={formData.title}
//           onChange={handleChange}
//         />
//         <textarea
//           name="feedback"
//           placeholder="Feedback"
//           value={formData.feedback}
//           onChange={handleChange}
//           rows="5"
//         />
//         <button type="submit">Submit</button>
//       </form>
//       </div>
//     </div>
//   );
// };

// export default Testimonals;


// import React, { useState } from 'react';
// import './Testimonals.css';
// import axios from 'axios';

// const Testimonals = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     company_name: '',
//     job_title: '',
//     feedback: '',
//   });

//   const [message, setMessage] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage('');

//     try {
//       const response = await axios.post(
//         'https://veralink-api.webprismits.us/api/v1/front/testimonials',
//         formData,
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             Accept: 'application/json',
//           },
//         }
//       );

//       console.log('Submitted Data:', response.data);
//       setMessage('Testimonial submitted successfully!');
//       setFormData({
//         name: '',
//         company_name: '',
//         job_title: '',
//         feedback: '',
//       });
//     } catch (error) {
//       console.error('Submission error:', error);
//       setMessage('Failed to submit testimonial.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="testimonial-container">
//       <div className="contact-banner">
//         <img src="/contact_banner.png" alt="Contact Banner" />
//       </div>
//       <div className="testimonal-main-container">
//         <h1>Testimonials</h1>
//         <form className="testimonial-form" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="text"
//             name="company_name"
//             placeholder="Company Name"
//             value={formData.company_name}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="text"
//             name="job_title"
//             placeholder="Job Title"
//             value={formData.job_title}
//             onChange={handleChange}
//             required
//           />
//           <textarea
//             name="feedback"
//             placeholder="Feedback"
//             value={formData.feedback}
//             onChange={handleChange}
//             rows="5"
//             required
//           />
//           <button type="submit" disabled={loading}>
//             {loading ? 'Submitting...' : 'Submit'}
//           </button>
//           {message && <p className="submission-message">{message}</p>}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Testimonals;



import React, { useState } from 'react';
import './Testimonals.css';
import axios from 'axios';

const Testimonals = () => {
  const [formData, setFormData] = useState({
    name: '',
    company_name: '',
    job_title: '',
    feedback: '',
  });

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setSubmitted(false);
    setMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setSubmitted(false);

    try {
      const response = await axios.post(
        'https://veralink-api.webprismits.us/api/v1/front/testimonials',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        }
      );

      console.log('Submitted Data:', response.data);
      setMessage('Testimonial submitted successfully!');
      setSubmitted(true);
      alert('Submitted successfully! ✅'); // ✅ Native alert
      setFormData({
        name: '',
        company_name: '',
        job_title: '',
        feedback: '',
      });
    } catch (error) {
      console.error('Submission error:', error);
      setMessage('Failed to submit testimonial.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="testimonial-container">
      <div className="contact-banner">
        <img src="/contact_banner.png" alt="Contact Banner" />
      </div>
      <div className="testimonal-main-container">
        <h1>Testimonials</h1>
        <form className="testimonial-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="company_name"
            placeholder="Company Name"
            value={formData.company_name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="job_title"
            placeholder="Job Title"
            value={formData.job_title}
            onChange={handleChange}
            required
          />
          <textarea
            name="feedback"
            placeholder="Feedback"
            value={formData.feedback}
            onChange={handleChange}
            rows="5"
            required
          />
          <button type="submit" disabled={loading || submitted}>
            {loading
              ? 'Submitting...'
              : submitted
              ? 'Submitted '
              : 'Submit'}
          </button>
          {message && <p className="submission-message">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Testimonals;
