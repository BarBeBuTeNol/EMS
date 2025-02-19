import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Side_Bar/SideBar.css";

const SideBar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsExpanded((prevState) => !prevState); // ใช้ prevState เพื่อให้ React สามารถจัดการการอัปเดต state ได้ถูกต้อง
  };

  return (
    <div className={`sidebars ${isExpanded ? "expanded" : "collapsed"}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isExpanded ? "«" : "»"}
      </button>
      <ul className="menu">
        <li><a onClick={() => navigate("/main_hr")}>Home</a></li>
        <li><a onClick={() => navigate("/create_user")}>New User</a></li>
        <li><a onClick={() => navigate("/add_user_info")}>New Employee</a></li>
        <li><a onClick={() => navigate("/home")}>Edit Employee</a></li>
        <li><a onClick={() => navigate("/home")}>Delete Employee</a></li>
        <li><a onClick={() => navigate("/login")}>Log Out</a></li>
      </ul>
    </div>
  );
};

export default SideBar;
