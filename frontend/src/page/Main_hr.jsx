import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Main_hr.css";

const Main_HR = () => {
  const navigate = useNavigate();
  const [showRoleMenu, setShowRoleMenu] = useState(false); // Toggle เมนู Role

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    navigate("/login"); // กลับไปหน้า Login
  };

  return (
    <div className="ems-page">
      {/* Header */}
      <div className="header">
        <div className="header-left">
          <h1>EMS</h1>
          <h2>Employee Management System</h2>
        </div>
        <div className="role-container">
          <div
            className="role-display"
            onClick={() => setShowRoleMenu(!showRoleMenu)}
          >
            HR
          </div>
          {showRoleMenu && (
            <div className="role-menu">
              <button onClick={handleLogout}>Log Out</button>
            </div>
          )}
        </div>
      </div>

      {/* Search Bar */}
      <div className="search-container">
        <input type="text" placeholder="Search ID" className="search-bar" />
      </div>

      {/* Buttons */}
      <div className="buttons">
        <button
          className="btn new-user"
          onClick={() => handleNavigation("/create_user")} // ใช้เส้นทางที่ตรงกับใน App.js
        >
          New User
        </button>
        <button
          className="btn delete-user"
          onClick={() => handleNavigation("/delete-user")}
        >
          Delete User
        </button>
        <button
          className="btn edit-user"
          onClick={() => handleNavigation("/edit-user")}
        >
          Edit User
        </button>
      </div>
    </div>
  );
};

export default Main_HR;
