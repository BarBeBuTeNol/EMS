import React from 'react';
import { useNavigate } from 'react-router-dom'; // ใช้ useNavigate จาก react-router-dom
import './New_user.css'; // ตรวจสอบว่าไฟล์ CSS นั้นมีอยู่จริงและสามารถโหลดได้

const New_user = () => {
  const navigate = useNavigate(); // เรียกใช้ useNavigate

  // ฟังก์ชันสำหรับปุ่ม Done
  const handleDoneClick = () => {
    navigate('/add_user_info'); // เส้นทางถูกต้อง
  };

  // ฟังก์ชันสำหรับปุ่ม Cancel
  const handleCancelClick = () => {
    navigate('/main_hr'); // เปลี่ยนไปหน้า "/main_hr"
  };

  return (
    <div className="new-user-container">
      <h1>NEW USER</h1>
      <div className="input-text">
        <input type="text" placeholder="First Name" className="input-field-new-user" />
        <input type="text" placeholder="Last Name" className="input-field-new-user" />
      </div>
      
      {/* เพิ่ม class input-text-center เพื่อให้ช่องเหล่านี้อยู่ตรงกลาง */}
      <div className="input-text-center">
        <input type="text" placeholder="Username" className="input-field-new-user" />
        <input type="password" placeholder="Password" className="input-field-new-user" />
        <input type="tel" placeholder="Phone Number" className="input-field-new-user" />
      </div>
      
      <div className="button-container">
        {/* ใช้ handleCancelClick และ handleDoneClick สำหรับปุ่ม */}
        <button type="button" className="button-cancel" onClick={handleCancelClick}>Cancel</button>
        <button type="button" className="button-done" onClick={handleDoneClick}>Done</button>
      </div>
    </div>
  );
};

export default New_user;
