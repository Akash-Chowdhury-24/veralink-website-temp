// import React from "react";
// import "./Header.css";

// const Header = () => {
//   return (
//     <header className="header">
//       <h1>My Website Header</h1>
//     </header>
//   );
// };

// export default Header;


// import React, { useContext, useState, useEffect } from 'react';
// import { globalContext } from '../context/AppContext';
// import { useNavigate } from "react-router-dom";
// import '../../src/index.css';

// function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleModal = () => {
//     setIsOpen(!isOpen);
//   }
//   const { notification } = useContext(globalContext);
//   const navigate = useNavigate();
//   const handleLogout = () => {
//     // Perform logout logic here, e.g., clear user data, redirect to login page
//     console.log('logout');
//     navigate('/');
//   };
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       const accountBox = document.querySelector('.account-box');
//       if (accountBox && !accountBox.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }
//     , []);
//   return (
//     <div className=" w-full relative flex flex-row items-center justify-between py-[20px] border-b border-dashed border-[#9696CA] bg-transparent header-container">
//       <h2 className="font-medium text-[24px] leading-[38px] align-middle admin-nam pl-5">Hi Admin</h2>
//       <div className="header-icon-container items-center flex flex-row justify-end gap-x-[12%] mr-[3%]">
//         <div className="cursor-pointer relative w-[35px] flex justify-center items-center rounded-full">
//           <img src="/search-icon.svg" alt="search-icon" />
//         </div>
//         <div className='w-[40px]'>
//           <img src="/bell-icon.svg" alt="bell-icon" />
//           {notification && <span> </span>}
//         </div>
//         <div className='header-avatar' onClick={toggleModal}>
//           <img src="/avatar.svg" alt="header-avatar" />
//         </div>
//       </div>
//       {
//         isOpen && (
//           <div class="account-box absolute right-[40px] top-[70px] bg-white shadow-[0px_4px_14px_0px_#262B4329] rounded-lg p-4 w-[200px] z-50 flex flex-col items-center justify-center gap-3">
//             <button class="edit-profile-btn text-base text-black">Edit Profile</button>
//             <button class="logout-btn text-base text-black" onClick={() => { console.log('logout'); handleLogout(); }}>Logout</button>
//           </div>
//         )
//       }
//     </div>
//   );
// }

// export default Header;


import React, { useContext } from "react";
import "./header.css";
import { GlobalContext } from "../context/GlobalContext";

const Header = () => {
  const {
    page,
    pageTitle,
    headerNormal,
    headerHighlight,
    heroImage, // your background image from context
  } = useContext(GlobalContext);

  // ✅ Determine the background:
  const backgroundImage = page === "home"
    ? 'url("/veralink_home_image.png")'   // your Home hero background
    : `url(${heroImage})`;            // other pages: use heroImage from context

  return (
    <header
      className={`header ${page === "home" ? "home-header" : "inner-header"}`}
      style={{ backgroundImage }}
    >
      {page === "home" ? (
        <div className="home-hero-content">
          <h1>Empowering Your Business with Seamless Technology Solutions</h1>
          <p>Let us take your technology to the next level.</p>
          <button className="cta-button">Get Started</button>
          <p className="phone-number">+1 876 664 0251</p>
        </div>
      ) : (
        <div className="inner-hero-content">
          <h2>{pageTitle}</h2>
          <h1>
            {headerNormal} <span>{headerHighlight}</span>
          </h1>
        </div>
      )}
    </header>
  );
};

export default Header;
