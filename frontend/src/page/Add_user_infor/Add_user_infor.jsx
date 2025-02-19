import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Add_user_infor/Add_user_infor.css";

function Add_user_infor() {
  const navigate = useNavigate();
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isSaved, setIsSaved] = useState(false); // ตั้งค่า isSaved เป็น false ตอนเริ่มต้น

  // เพิ่ม useEffect ที่จะลบข้อมูลใน localStorage เมื่อหน้ารีเฟรช
  useEffect(() => {
    localStorage.removeItem("uploadedImage"); // ลบข้อมูลเก่าที่ถูกเก็บใน localStorage เมื่อหน้ารีเฟรช
  }, []);  // useEffect นี้จะทำงานแค่ครั้งเดียวเมื่อเพจโหลดใหม่

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target.result);
        localStorage.setItem("uploadedImage", e.target.result); // บันทึกใน localStorage
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setIsSaved(true); // ตั้งค่า isSaved เป็น true เมื่อกด Save
    // เมื่อกด Save แล้ว จะไม่ไปหน้าถัดไปทันที
  };

  const handleDone = () => {
    if (uploadedImage) {
      navigate("/Em_infor"); // ไปยังหน้าถัดไปหลังจากกด Done
    }
  };

  return (
    <div className="user-page">
      {/* เพิ่ม Side Bar */}
      <div className="sidebar">
        <h2>Menu</h2>
        <ul>
          <li onClick={() => navigate("/main_hr")}>Home</li>
          <li onClick={() => navigate("/add_user_info")}>Add User</li>
          <li onClick={() => navigate("/Em_infor")}>Employee Info</li>
          <li onClick={() => navigate("/Education")}>Education</li>
          <li onClick={() => navigate("/Leave")}>Leave</li>
          <li onClick={() => navigate("/Reports")}>Reports</li>
        </ul>
      </div>

      {/* ส่วน Add User Information */}
      <div id="user-page" className="background">
        <div className="add-user-infor-container">
          <div className="head">ADD Personal Data</div>
          <div className="content">
            <div className="form-layout">
              {/* Form Section */}
              <form className="user-form">
                <div className="input-group">
                  <label>Personal ID:</label>
                  <input
                    type="text"
                    className="input-field-page"
                    placeholder="Enter ID"
                  />
                </div>

                {/* First Name และ Last Name */}
                <div className="input-group double-input">
                  <div className="input-half">
                    <label>First Name:</label>
                    <input
                      type="text"
                      className="input-field-page"
                      placeholder="Enter First Name"
                    />
                  </div>
                  <div className="input-half">
                    <label>Last Name:</label>
                    <input
                      type="text"
                      className="input-field-page"
                      placeholder="Enter Last Name"
                    />
                  </div>
                </div>

                {/* Age และ Date of Birth */}
                <div className="input-group double-input">
                  <div className="input-half">
                    <label>Age:</label>
                    <input
                      type="number"
                      className="input-field-page"
                      placeholder="Enter Age"
                    />
                  </div>
                  <div className="input-half">
                    <label>Date of Birth:</label>
                    <input type="date" className="input-field-page" />
                  </div>
                </div>

                {/* Nationality และ Family */}
                <div className="input-group double-input">
                  <div className="input-half">
                    <label>Nationality:</label>
                    <input
                      type="text"
                      className="input-field-page"
                      placeholder="Enter Nationality"
                    />
                  </div>
                  <div className="input-half">
                    <label>Family:</label>
                    <input
                      type="text"
                      className="input-field-page"
                      placeholder="Enter Family"
                    />
                  </div>
                </div>

                {/* Tax และ Social Security */}
                <div className="input-group double-input">
                  <div className="input-half">
                    <label>Tax:</label>
                    <input
                      type="text"
                      className="input-field-page"
                      placeholder="Enter Tax"
                    />
                  </div>
                  <div className="input-half">
                    <label>Social Security:</label>
                    <input
                      type="text"
                      className="input-field-page"
                      placeholder="Enter Social Security"
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label>Health Checkup:</label>
                  <input
                    type="text"
                    className="input-field-page"
                    placeholder="Enter Health Checkup"
                  />
                </div>
                <div className="input-group">
                  <label>Criminal Record:</label>
                  <input
                    type="text"
                    className="input-field-page"
                    placeholder="Enter Criminal Record"
                  />
                </div>
              </form>

              {/* Image Section */}
              <div className="image-section">
              <div className="image-placeholder">
  {uploadedImage ? (
    <img
      src={uploadedImage}
      alt="Uploaded"
      className="uploaded-image"
      style={{ objectFit: "cover" }}
    />
  ) : (
    <p>Image Preview</p>
  )}
</div>
                <input
                  type="file"
                  accept="image/*"
                  className="upload-input"
                  onChange={handleImageUpload}
                  style={{ display: "none" }}
                />
                <button className="upload-button" onClick={() => document.querySelector(".upload-input").click()}>
                  Upload
                </button>
              </div>

              <div className="extra-buttons">
                <button onClick={() => navigate(-1)} className="back-button">
                  Back
                </button>
                {isSaved ? (
                  <button onClick={() => navigate("/Em_infor")} className="save-done-button">
                    Done
                  </button>
                ) : (
                  <button onClick={handleSave} className="save-done-button">
                    Save
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add_user_infor;
