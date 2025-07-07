// import React from "react";
// import { Link } from "react-router-dom";
// import "./Sidebar.css";
// import { FiChevronRight, FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";

// const Sidebar = () => {
//   return (
//     <aside className="sidebar">
//       <div className="sidebar-logo">
//         <h2>MyLogo</h2>
//       </div>
//       <nav className="sidebar-nav">
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/about">About <FiChevronRight /></Link></li>
//           <li><Link to="/services">Services <FiChevronRight /></Link></li>
//           <li><Link to="/contact">Contact</Link></li>
//         </ul>
//       </nav>
//       <div className="sidebar-icons">
//         <FiSearch />
//         <FiShoppingCart />
//         <FiUser />
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;


// import { useContext, useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { globalContext } from "../context/context";

// function Sidebar() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const {
//     orderNumber,
//     setOrderNumber,
//     quotionsNumber,
//     setQuotionsNumber,
//     caseNumber,
//     setCaseNumber
//   } = useContext(globalContext);

//   const [selectedButton, setSelectedButton] = useState("");

//   useEffect(() => {
//     const selectedButton = getCurrentSelectedButton();
//     setSelectedButton(selectedButton);
//   }, [location.pathname]);

//   const getCurrentSelectedButton = () => {
//     const path = location.pathname;
//     const routeMapping = [
//       { path: '/dashboard', button: 'dashboard' },
//       { path: '/staff', button: 'staff' },
//       { path: '/products', button: 'products' },
//       { path: '/orders', button: 'orders' },
//       { path: '/quotations', button: 'quotations' },
//       { path: '/customers', button: 'customers' },
//       { path: '/payment-method', button: 'payment-method' },
//       { path: '/cases', button: 'cases' },
//       { path: '/pages', button: 'pages' },
//       { path: '/career', button: 'career' },
//       { path: '/header-and-footer', button: 'header & footer' },
//       { path: '/projects', button: 'projects' },
//       { path: '/blogs', button: 'blogs' },
//       { path: '/teams', button: 'teams' },
//       { path: '/faq', button: 'faq' },
//       { path: '/testimonials', button: 'testimonials' },
//       { path: '/partners', button: 'partners' },
//       { path: '/contact-inquiries', button: 'contact-inquiries' },
//     ];

//     const matchedRoute = routeMapping.find(route => path.startsWith(route.path));
//     return matchedRoute ? matchedRoute.button : null;
//   };

//   const handleButtonClick = (route, buttonName) => {
//     navigate(route);
//   };

//   const getButtonClasses = (buttonName) => {
//     return `flex items-center gap-3 px-[20px] py-[5px] w-full text-left rounded-lg transition 
//       ${selectedButton === buttonName
//         ? 'bg-[#F5BB17] text-[#262B43] hover:bg-[#F5BB17] hover:text-[#262B43]'
//         : 'hover:bg-gray-100 text-gray-600'}`;
//   };

//   const getImgStyle = (buttonName) => {
//     return selectedButton === buttonName
//       ? { filter: "brightness(0) saturate(100%)" }
//       : {};
//   };

//   const renderButton = (path, name, icon, badge = null) => (
//     <div 
//     onClick={() => handleButtonClick(path, name)}
//       className={getButtonClasses(name)}>
//       <img src={icon} alt={`${name} icon`} className="w-5 h-5" style={getImgStyle(name)} />
//       <span className="flex-1 capitalize">{name}</span>
//       {badge !== null && <span className="text-xs bg-[#FF4D49] text-white px-2 py-0.5 rounded-full">{badge}</span>}
    
//     </div>
//   );

//   return (
//     <aside className="w-[320px] bg-[#F8F8F8] shadow-md flex flex-col overflow-auto px-[15px]">
//       <img src="/logo.svg" alt="Logo" className="h-16 mx-auto my-4" />
//       <nav className="flex flex-col gap-1 px-2">

//         {renderButton('/dashboard', 'dashboard', '/dashboard-icon.svg')}
//         {renderButton('/staff', 'staff', '/dashboard-icon.svg')}

//         {/* Ecommerce Section */}
//         <div className="w-full py-[10px] flex flex-row items-center gap-3">
//           <div className="w-[30px] border border-[#262B4366]"></div>
//           <span className="text-sm text-[#262B4366] font-medium">Ecommerce</span>
//           <div className="w-[100px] border border-[#262B4366]"></div>
//         </div>
//         {renderButton('/products', 'products', '/product-icon.svg')}
//         {renderButton('/orders', 'orders', '/order-icon.svg', orderNumber)}
//         {renderButton('/quotations', 'quotations', '/quotations-icon.svg', quotionsNumber)}
//         {renderButton('/customers', 'customers', '/customer-icon.svg')}
//         {renderButton('/payment-method', 'payment-method', '/payment-method-icon.svg')}

//         {/* Support Ticket */}

//         <div className="w-full py-[10px] flex flex-row items-center gap-3">
//           <div className="w-[30px] border border-[#262B4366]"></div>
//           <span className="text-sm text-[#262B4366] font-medium">Support Ticket</span>
//           <div className="w-[70px] border border-[#262B4366]"></div>
//         </div>
//         {renderButton('/cases', 'cases', '/payment-method-icon.svg', caseNumber)}

//         {/* Content Management */}
//         <div className="w-full py-[10px] flex flex-row items-center gap-3">
//           <div className="w-[20px] border border-[#262B4366]"></div>
//           <span className="text-sm text-[#262B4366] font-medium">Content Management</span>
//           <div className="w-[40px] border border-[#262B4366]"></div>
//         </div>
//         {renderButton('/pages', 'pages', '/payment-method-icon.svg')}
//         {renderButton('/career', 'career', '/payment-method-icon.svg')}
//         {renderButton('/header-and-footer', 'header & footer', '/payment-method-icon.svg')}
//         {renderButton('/projects', 'projects', '/payment-method-icon.svg')}
//         {renderButton('/blogs', 'blogs', '/payment-method-icon.svg')}
//         {renderButton('/teams', 'teams', '/payment-method-icon.svg')}
//         {renderButton('/faq', 'faq', '/payment-method-icon.svg')}
//         {renderButton('/testimonials', 'testimonials', '/payment-method-icon.svg')}
//         {renderButton('/partners', 'partners', '/payment-method-icon.svg')}
//         {renderButton('/contact-inquiries', 'contact-inquiries', '/payment-method-icon.svg')}

//       </nav>
//     </aside>
//   );
// }

// export default Sidebar;




// import React from "react";
// import { Link } from "react-router-dom";
// import { FiSearch, FiShoppingCart, FiUser, FiChevronRight } from "react-icons/fi";
// import "./Sidebar.css";

// const Sidebar = () => {
//   return (
//     <aside className="sidebar">
//       <div className="sidebar-logo">
//         {/* Replace with your logo image */}
//         <img src="/veralink_icon.png" alt="VeraLink Logo"  />
//       </div>

//       <nav className="sidebar-nav">
//         <ul>
//           <li><Link to="/" className="active">Home</Link></li>
//           <li><Link to="/about">About Us <FiChevronRight /></Link></li>
//           <li><Link to="/services">Services</Link></li>
//           <li><Link to="/industries">Industries</Link></li>
//           <li><Link to="/career">Career</Link></li>
//           <li><Link to="/insights">Insights and Resources</Link></li>
//           <li><Link to="/store">Store <FiChevronRight /></Link></li>
//           <li><Link to="/contact-page">Contact Us</Link></li>
//         </ul>
//       </nav>

//       <div className="sidebar-bottom-icons">
//         <FiSearch />
//         <FiShoppingCart />
//         <FiUser />
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;


// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import { FiSearch, FiShoppingCart, FiUser, FiChevronRight } from "react-icons/fi";
// import "./Sidebar.css";

// const Sidebar = () => {
//   const location = useLocation(); // ✅ Get current path

//   return (
//     <aside className="sidebar">
//       <div className="sidebar-logo">
//         <img src="/veralink_icon.png" alt="VeraLink Logo" />
//       </div>

//       <nav className="sidebar-nav">
//         <ul>
//           <li>
//             <Link to="/" className={location.pathname === "/" ? "active" : ""}>
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
//               About Us <FiChevronRight />
//             </Link>
//           </li>
//           <li>
//             <Link to="/services" className={location.pathname === "/services" ? "active" : ""}>
//               Services
//             </Link>
//           </li>
//           <li>
//             <Link to="/career" className={location.pathname === "/career" ? "active" : ""}>
//               Career
//             </Link>
//           </li>
//           <li>
//             <Link to="/insights" className={location.pathname === "/insights" ? "active" : ""}>
//               Insights and Resources
//             </Link>
//           </li>
//           <li>
//             <Link to="/store" className={location.pathname === "/store" ? "active" : ""}>
//               Store <FiChevronRight />
//             </Link>
//           </li>
//           <li>
//             <Link to="/Suport" className={location.pathname === "/Suport" ? "active" : ""}>
//               Support
//             </Link>
//           </li>
//           <li>
//             <Link to="/contact-page" className={location.pathname === "/contact-page" ? "active" : ""}>
//               Contact Us
//             </Link>
//           </li>
//         </ul>
//       </nav>

//       <div className="sidebar-bottom-icons">
//         <FiSearch />
//         <FiShoppingCart />
//         <FiUser />
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;

// /original oporer ta 
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiChevronRight,
  FiChevronLeft,
} from "react-icons/fi";
import "./Sidebar.css";

const Sidebar = () => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState("main"); // 'main' or 'services' or about us o hote pare 

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <img src="/veralink_icon.png" alt="VeraLink Logo" />
      </div>

      <nav className="sidebar-nav">
        {activeMenu === "main" && (
          <ul>
            <li>
              <Link to="/" className={location.pathname === "/" ? "active" : ""}>
                Home
              </Link>
            </li>
            
               <li onClick={() => setActiveMenu("about")} className="clickable">
              <Link to="#" className={location.pathname === "/about" ? "active" : ""}>
                About Us <FiChevronRight />
              </Link>
              </li>
            
            <li onClick={() => setActiveMenu("services")} className="clickable">
              <Link to="#" className={location.pathname === "#" ? "active" : ""}>
              Services <FiChevronRight />
              </Link>
            </li>
            <li>
              <Link to="/career" className={location.pathname === "/career" ? "active" : ""}>
                Career
              </Link>
            </li>
            <li>
              <Link to="/insights" className={location.pathname === "/insights" ? "active" : ""}>
                Insights and Resources
              </Link>
            </li>
            <li>
              <Link to="/store" className={location.pathname === "/store" ? "active" : ""}>
                Store <FiChevronRight />
              </Link>
            </li>
            <li>
              <Link to="/Suport" className={location.pathname === "/Suport" ? "active" : ""}>
                Support
              </Link>
            </li>
            <li>
              <Link to="/contact-page" className={location.pathname === "/contact-page" ? "active" : ""}>
                Contact Us
              </Link>
            </li>
          </ul>
        )}

        {activeMenu === "services" && (
          <ul>
            <li onClick={() => setActiveMenu("main")} className="back-menu clickable">
              <FiChevronLeft /> Back to main menu
            </li>
            <li>
              <Link to="/service-manage" className={location.pathname === "/service-manage" ? "active" : ""}>
                Manage
              </Link>
            </li>
            <li>
              <Link to="/service-protect" className={location.pathname === "/service-protect" ? "active" : ""}>
                Protect
              </Link>
            </li>
            <li>
              <Link to="/service-implement" className={location.pathname === "/service-implement" ? "active" : ""}>
                Implement
              </Link>
            </li>
          </ul>
        )}
        {activeMenu === "about" && (
    <ul>
      <li onClick={() => setActiveMenu("main")} className="back-menu clickable">
        <FiChevronLeft /> Back to main menu
      </li>
      <li>
        <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
          Business Profile
        </Link>
      </li>
      <li>
        <Link to="/meet" className={location.pathname === "/meet" ? "active" : ""}>
          Meet Our Team
        </Link>
      </li>
      <li>
        <Link to="/Industries1" className={location.pathname === "/Industries1" ? "active" : ""}>
          Industries
        </Link>
      </li>
      <li>
        <Link to="/project" className={location.pathname === "/project" ? "active" : ""}>
          Our Projects
        </Link>
      </li>
    </ul>
  )}

      </nav>

      <div className="sidebar-bottom-icons">
        <FiSearch />
        <FiShoppingCart />
        <FiUser />
      </div>
    </aside>
  );
};

export default Sidebar;










// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { FiSearch, FiShoppingCart, FiUser, FiChevronRight } from "react-icons/fi";
// import "./Sidebar.css";

// const Sidebar = () => {
//   const location = useLocation();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <>
//       {/* ✅ Hamburger (only visible on mobile) */}
//       <div className="mobile-hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
//         <span className="bar" />
//         <span className="bar" />
//         <span className="bar" />
//       </div>

//       {/* ✅ Desktop Sidebar */}
//       <aside className="sidebar desktop-only">
//         <div className="sidebar-logo">
//           <img src="/veralink_icon.png" alt="VeraLink Logo" />
//         </div>

//         <nav className="sidebar-nav">
//           <ul>
//             <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link></li>
//             <li><Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About Us <FiChevronRight /></Link></li>
//             <li><Link to="/services" className={location.pathname === "/services" ? "active" : ""}>Services</Link></li>
//             <li><Link to="/career" className={location.pathname === "/career" ? "active" : ""}>Career</Link></li>
//             <li><Link to="/insights" className={location.pathname === "/insights" ? "active" : ""}>Insights and Resources</Link></li>
//             <li><Link to="/store" className={location.pathname === "/store" ? "active" : ""}>Store <FiChevronRight /></Link></li>
//             <li><Link to="/Suport" className={location.pathname === "/Suport" ? "active" : ""}>Support</Link></li>
//             <li><Link to="/contact-page" className={location.pathname === "/contact-page" ? "active" : ""}>Contact Us</Link></li>
//           </ul>
//         </nav>

//         <div className="sidebar-bottom-icons">
//           <FiSearch />
//           <FiShoppingCart />
//           <FiUser />
//         </div>
//       </aside>

//       {/* ✅ Mobile Dropdown Menu */}
//       {isMobileMenuOpen && (
//         <div className="mobile-menu">
//           <ul>
//             <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
//             <li><Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link></li>
//             <li><Link to="/services" onClick={() => setIsMobileMenuOpen(false)}>Services</Link></li>
//             <li><Link to="/career" onClick={() => setIsMobileMenuOpen(false)}>Career</Link></li>
//             <li><Link to="/insights" onClick={() => setIsMobileMenuOpen(false)}>Insights</Link></li>
//             <li><Link to="/store" onClick={() => setIsMobileMenuOpen(false)}>Store</Link></li>
//             <li><Link to="/Suport" onClick={() => setIsMobileMenuOpen(false)}>Support</Link></li>
//             <li><Link to="/contact-page" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link></li>
//           </ul>
//         </div>
//       )}
//     </>
//   );
// };

// export default Sidebar;
