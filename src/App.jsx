import React from "react";
import Sidebar from "./component/sidebar";
// In your index.js or App.js
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ContactPage from "./pages/ContactPage/ContactPage";
import { Routes, Route } from "react-router-dom";
import CommonLayout from "./pages/CommonLayout/CommonLayout";
import HomePage from "./pages/HomePage/HomePage";
import MeetOurTeam from "./pages/MeetOurTeam/MeetOurTeam";
import AboutPage from "./pages/AboutPage/AboutPage";
import ServiceAgreement from "./pages/ServiceAgreement/ServiceAgreement";
import TermsAndConditions from "./pages/TermsAndCondition/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import Career from "./pages/Career/Career";
import JobDetails from "./pages/JobDetails/JobDetails";
import Testimonals from "./pages/Testimonals/Testimonals";
import TestimonialCarousel from "./pages/TestimonalsCarousel/TestimonialCarousel";
import AuthForm from "./pages/AuthForm/AuthForm";
import EmailVerification from "./pages/EmailVerification/EmailVerification";
import BlogList from "./pages/Insight-Resources/BlogList";
import BlogDetail1 from "./pages/BlogDetail1/BlogDetail1";
import BlogDetail2 from "./pages/BlogDetail2/BlogDetail2";
import BlogDetail3 from "./pages/BlogDetail3/Blog-detail3";
import BlogDetail4 from "./pages/BlogDetail4/BlogDetail4";
import BlogDetail5 from "./pages/BlogDetail5/BlogDetail5";
import Industries from "./pages/Industries/Industries";
import Industries1 from "./pages/Industries1/Industries1";
import ProjectList from "./pages/ProjectList/ProjectList";
import ServicesPage from "./pages/ServicePage/ServicesPage";
import ServicePageManage from "./pages/ServicePageManage/ServicePageManage";
import ServicePageImplement from "./pages/ServicePageImplement/ServicePageImplement";


// import ContactPage from "./pages/ContactPage/ContactPage";
// import MainLayout from "./layouts/MainLayout";
// import HomePage from "./pages/HomePage";
// import AboutPage from "./pages/AboutPage";
// import ContactPage from "./pages/ContactPage";
// import ServicesPage from "./pages/ServicesPage";

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route element={<MainLayout />}>
    //       <Route path="/" element={<HomePage />} />
    //       <Route path="/about" element={<AboutPage />} />
    //       <Route path="/services" element={<ServicesPage />} />
    //       <Route path="/contact" element={<ContactPage />} />
    //     </Route>
    //   </Routes>
    // </Router>
    <div>
      {/* <Sidebar/> */}
      <Routes>
        <Route path="/" element={<CommonLayout />}>
          <Route path="demo" element={<h1>Demo</h1>} />
          <Route path="contact-page" element={<ContactPage/>}/>
          <Route path="home" element={<HomePage/>}/>
          <Route path="meet" element={<MeetOurTeam/>}/>
          <Route path="about" element={<AboutPage/>}/>
          <Route path="service-agreement" element={<ServiceAgreement/>}/>
          <Route path="terms-conditions" element={<TermsAndConditions/>}/>
          <Route path="privacy-policy" element={<PrivacyPolicy/>}/>
          <Route path="career" element={<Career/>}/>
          <Route path="job-details/:id" element={<JobDetails/>}/>
          <Route path="testimonals" element={<Testimonals/>}/>
          <Route path="testimonals-carousel" element={<TestimonialCarousel/>}/>
          <Route path="auth-form" element={<AuthForm/>}/>
          <Route path="email-verification" element={<EmailVerification/>}/>
          <Route path="insights" element={<BlogList/>}/>
          <Route path="blog-detail1" element={<BlogDetail1/>}/>
          <Route path="blog-detail2" element={<BlogDetail2/>}/>
          <Route path="blog-detail3" element={<BlogDetail3/>}/>
          <Route path="blog-detail4" element={<BlogDetail4/>}/>
          <Route path="blog-detail5" element={<BlogDetail5/>}/>
          <Route path="Suport" element={<Industries/>}/>
          <Route path="Industries1" element={<Industries1/>}/>
          <Route path="project" element={<ProjectList/>}/>
          <Route path="service-manage" element={<ServicesPage/>}/>
          <Route path="service-protect" element={<ServicePageManage/>}/>
          <Route path="service-implement" element={<ServicePageImplement/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import CommonLayout from "./layouts/CommonLayout";
// import HomePage from "./pages/HomePage";
// import AboutPage from "./pages/AboutPage";
// import ServicesPage from "./pages/ServicesPage";
// import Sidebar from "./components/Sidebar";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route element={<CommonLayout />}>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/services" element={<ServicesPage />} />
//           <Sidebar/>
//         </Route>
//       </Routes>
//     </Router>

//   );
// }

// export default App;
