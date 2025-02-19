import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Em_infor/Em_infor.css";

function Em_infor() {
  const navigate = useNavigate();
  const [uploadedImage, setUploadedImage] = useState(
    localStorage.getItem("uploadedImage") || null
  );
  const [isSaved, setIsSaved] = useState(false);
  
  

  // ฟังก์ชันจัดการการกดปุ่ม Save
  const handleSave = () => {
    setIsSaved(true);
  };

  <button onClick={() => navigate(-1)} className="action-button">
    Back
  </button>;

  return (
    <div className="em-infor-background">
      <div className="em-infor-container">
        <div className="em-infor-head">ADD Employee Data</div>
        <div className="em-infor-content">
          <div className="em-infor-form-layout">
            {/* ID และ Personal ID อยู่ในบรรทัดเดียวกัน */}
            <div className="em-infor-input-group em-infor-double-input">
              <div className="em-infor-input-half">
                <label>ID :</label>
                <input
                  type="number"
                  className="em-infor-input-field"
                  placeholder="Enter ID"
                />
              </div>
              <div className="em-infor-input-half">
                <label>Personal ID :</label>
                <input
                  type="text"
                  className="em-infor-input-field"
                  placeholder="Enter Personal ID"
                />
              </div>
            </div>

            {/* Department และ Status อยู่ในบรรทัดเดียวกัน */}
            <div className="em-infor-input-group em-infor-double-input">
              <div className="em-infor-input-half">
                <label>Department :</label>
                <input
                  type="text"
                  className="em-infor-input-field"
                  placeholder="Enter Department"
                />
              </div>
              <div className="em-infor-input-half">
                <label>Status :</label>
                <input
                  type="text"
                  className="em-infor-input-field"
                  placeholder="Status Now"
                />
              </div>
            </div>

            {/* Start Time และ End Time อยู่ในบรรทัดเดียวกัน */}
            <div className="em-infor-input-group em-infor-double-input">
              <div className="em-infor-input-half">
                <label>Start Time :</label>
                <input
                  type="date"
                  className="em-infor-input-field"
                  placeholder="Enter Start Time"
                />
              </div>
              <div className="em-infor-input-half">
                <label>End Time :</label>
                <input
                  type="date"
                  className="em-infor-input-field"
                  placeholder="Enter End Time"
                />
              </div>
            </div>

            {/* Job Position และ Start Date อยู่ในบรรทัดเดียวกัน */}
            <div className="em-infor-input-group em-infor-double-input">
              <div className="em-infor-input-half">
                <label>Job Position :</label>
                <input
                  type="text"
                  className="em-infor-input-field"
                  placeholder="Enter Position"
                />
              </div>
              <div className="em-infor-input-half">
                <label>Start Date :</label>
                <input
                  type="date"
                  className="em-infor-input-field"
                  placeholder="Enter Date"
                />
              </div>
            </div>

            {/* Salary, Benefit ช่องที่เหลือ */}
            <div className="em-infor-input-group">
              <label>Salary :</label>
              <input
                type="number"
                className="em-infor-input-field em-infor-full-width"
                placeholder="Enter Salary (Bath)"
              />
            </div>
            <div className="em-infor-input-group">
              <label>Benefit :</label>
              <input
                type="text"
                className="em-infor-input-field em-infor-full-width"
                placeholder="Enter Benefit"
              />
            </div>

            {/* กรอบรูปภาพ */}
            <div className="em-infor-image-section">
              <div className="em-infor-image-placeholder">
                {uploadedImage ? (
                  <img
                    src={uploadedImage}
                    alt="Uploaded"
                    className="em-infor-uploaded-image"
                  />
                ) : (
                  <p>Image Preview</p>
                )}
              </div>
            </div>

            {/* ปุ่มต่างๆ */}
            <div className="em-infor-extra-buttons">
              <button onClick={() => navigate(-1)} className="back-button">
                {" "}
                {/* เปลี่ยนเป็น back-button */}
                Back
              </button>
              {isSaved ? (
                <button
                  onClick={() => navigate("/education_infor")}
                  className="save-done-button"
                >
                  {" "}
                  {/* เปลี่ยนเป็น save-done-button */}
                  Done
                </button>
              ) : (
                <button onClick={handleSave} className="save-done-button">
                  {" "}
                  {/* เปลี่ยนเป็น save-done-button */}
                  Save
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Em_infor;
