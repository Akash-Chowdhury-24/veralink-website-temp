// import React, { createContext, useState } from "react";

// // Create Context
// export const AppContext = createContext();

// // Create Provider
// export const AppProvider = ({ children }) => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <AppContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
//       {children}
//     </AppContext.Provider>
//   );
// };


import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// ✅ Fix typo: 'globalContext' instead of 'golablContext'
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Your global states
  const [page, setPage] = useState('');
  const [pageTitle, setPageTitle] = useState('');
  const [headerNormal, setHeaderNormal] = useState('');
  const [headerHighlight, setHeaderHighlight] = useState('');
  const [heroImage, setHeroImage] = useState('');
  const [heroContentImage, setHeroContentImage] = useState('');

  // ✅ Redirect '/' to '/home' on first load
  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/home');
    }
  }, [location, navigate]); // good practice to include dependencies

  return (
    <GlobalContext.Provider
      value={{
        page,
        setPage,
        pageTitle,
        setPageTitle,
        headerNormal,
        setHeaderNormal,
        headerHighlight,
        setHeaderHighlight,
        heroImage,
        setHeroImage,
        heroContentImage,
        setHeroContentImage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};


