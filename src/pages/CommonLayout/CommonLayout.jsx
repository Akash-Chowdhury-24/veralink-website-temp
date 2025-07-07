import Footer from "../../component/Footer";
import Header from "../../component/Header";
import Sidebar from "../../component/Sidebar";
import "./CommonLayout.css";
import { Outlet } from "react-router-dom";
// optional
// import Footer from "../components/Footer";  // optional
// import { Outlet } from "react-router-dom";

function CommonLayout() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, marginLeft: "220px" }} className="page-container">
        {/* <Header /> */}

        <main className="main-content">
          <Outlet />
        </main>
        <div className="footer-wrap">
          <Footer />
        </div>
      </div>

      {/* <div style={{marginLeft: "15%"}}>   <Outlet/></div> */}
    </div>
  );
}

export default CommonLayout;
