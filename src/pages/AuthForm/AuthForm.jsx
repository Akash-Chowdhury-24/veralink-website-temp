import React, { useState } from 'react';
import './AuthForm.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const AuthForm = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const toggleTab = (tab) => {
    setActiveTab(tab);
    setShowPassword(false);
    setRememberMe(false);
  };

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  return (
    <div className="auth-container">
        <div className="contact-banner">
        <img
          src="/contact_banner.png" // replace with your image
          alt="Contact Banner"
        />
      </div >
      <div className='auth-container-main'>
      <div className="tab-header">
        <button
          className={activeTab === 'login' ? 'active' : ''}
          onClick={() => toggleTab('login')}
        >
          Log In
        </button>
        <button
          className={activeTab === 'register' ? 'active' : ''}
          onClick={() => toggleTab('register')}
        >
          Register
        </button>
      </div>

      {activeTab === 'login' ? (
        <form className="auth-form">
          <label>Username <span>*</span></label>
          <input type="text" placeholder="Enter your email" required />

          <label>Password<span>*</span></label>
          <div className="password-field">
            <input type={showPassword ? 'text' : 'password'} placeholder="Enter password" required />
            <span onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="remember-me">
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember">Remember me</label>
          </div>

          <button type="submit" className="submit-btn">Log in</button>
        </form>
      ) : (
        <form className="auth-form">
          <label>Username<span>*</span></label>
          <input type="text" placeholder="Enter username" required />

          <label>Email address<span>*</span></label>
          <input type="email" placeholder="Enter email" required />

          <label>Password<span>*</span></label>
          <div className="password-field">
            <input type={showPassword ? 'text' : 'password'} placeholder="Enter password" required />
            <span onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <p className="privacy-note">
            Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="/privacy-policy">privacy policy</a>.
          </p>

          <button type="submit" className="submit-btn">Register</button>
        </form>
      )}
      </div>
    </div>
  );
};

export default AuthForm;
