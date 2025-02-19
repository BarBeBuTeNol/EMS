import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Login from "./page/Login/Login";
import Home from "./page/Home/Home";
import Main_HR from "./page/Main_hr/Main_hr";
import New_user from "./page/New_user/New_user";
import Add_user_infor from "./page/Add_user_infor/Add_user_infor";
import Em_infor from "./page/Em_infor/Em_infor";
import Education from "./page/Education/Education";
import SideBar from "./components/Side_Bar/SideBar";

const App = () => {
  const location = useLocation();

  // ตรวจสอบว่าควรแสดง Sidebar หรือไม่ (ยกเว้น /login และ /)
  const shouldShowSidebar = !["/login", "/"].includes(location.pathname);

  return (
    <div className="app-container">
      {shouldShowSidebar && <SideBar />} {/* แสดง Sidebar เมื่อไม่ใช่หน้า Login หรือหน้า Home */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main_hr" element={<Main_HR />} />
        <Route path="/create_user" element={<New_user />} />
        <Route path="/add_user_info" element={<Add_user_infor />} />
        <Route path="/em_infor" element={<Em_infor />} />
        <Route path="/education_infor" element={<Education />} />
        <Route path="/leave" element={<Education />} />
      </Routes>
    </div>
  );
};

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
