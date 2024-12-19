import React from 'react';
import { useNavigate } from 'react-router-dom';

function Button() {
  const navigate = useNavigate(); // เรียก useNavigate ตรงๆ ไม่ต้อง destructure

  const handleLoginClick = () => {
    navigate('/login'); // เปลี่ยนไปหน้า "/login"
  };

  const handleCompanyClick = () => {
    window.location.href = 'https://www.companywebsite.com'; // ลิงก์ไปเว็บไซต์อื่น
  };

  return (
    <div className="button">
      {/* เพิ่ม onClick ให้ปุ่ม */}
      <button type="button" onClick={handleLoginClick}>
        Login
      </button>
      <button type="button" onClick={handleCompanyClick}>
        Company Website
      </button>
    </div>
  );
}

export default Button;
