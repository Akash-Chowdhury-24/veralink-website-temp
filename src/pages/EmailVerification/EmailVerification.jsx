import React, { useRef, useState } from 'react';
import './EmailVerification.css';

const EmailVerification = () => {
  const inputsRef = useRef([]);
  const [code, setCode] = useState(new Array(6).fill(''));

  const handleChange = (value, index) => {
    if (/^\d$/.test(value) || value === '') {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Move focus to next input
      if (value && index < 5) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && code[index] === '' && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalCode = code.join('');
    console.log('Verification Code:', finalCode);
    // Call API or perform action here
  };

  return (
    <div className="verification-container">
         <div className="contact-banner">
        <img
          src="/contact_banner.png" // replace with your image
          alt="Contact Banner"
        />
      </div>
      <div className='verification-container-main'>
      <h3>Almost there</h3>
      <p>Please enter the 6-digit code sent to your email for verification.</p>

      <form onSubmit={handleSubmit} className="code-input-form">
        {code.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={digit}
            ref={(el) => (inputsRef.current[index] = el)}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="code-input"
          />
        ))}

      </form>
        <button type="submit" className="verify-btn">Verify</button>
</div>
    </div>
  );
};

export default EmailVerification;
