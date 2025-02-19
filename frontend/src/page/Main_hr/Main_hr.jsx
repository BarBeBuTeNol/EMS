import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Main_hr/Main_hr.css";
import SideBar from "../../components/Side_Bar/SideBar";

const Main_HR = () => {
  const navigate = useNavigate();
  const [searchID, setSearchID] = useState("");
  const [employeeData, setEmployeeData] = useState(null);

  const handleSearch = () => {
    if (searchID === "12345") {
      setEmployeeData({
        id: "12345",
        name: "John Doe",
        department: "HR",
      });
    } else {
      setEmployeeData(null);
    }
  };

  return (
    <div className="ems-page">
      <SideBar />
      <div className="content">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search ID"
            className="search-bar"
            value={searchID}
            onChange={(e) => setSearchID(e.target.value)}
          />
          <button onClick={handleSearch} className="search-btn">
            Search
          </button>
        </div>
        {employeeData && (
          <div className="employee-info">
            <p>
              <strong>ID:</strong> {employeeData.id}
            </p>
            <p>
              <strong>Name:</strong> {employeeData.name}
            </p>
            <p>
              <strong>Department:</strong> {employeeData.department}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Main_HR;
