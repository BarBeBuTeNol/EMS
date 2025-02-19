import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Button.css'; // นำเข้า CSS ของ Button

function Button() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleCompanyClick = () => {
    window.location.href = 'https://www.companywebsite.com';
  };

  return (
    <div className="button-container">
      <button className="button" onClick={handleLoginClick}>
        Login
      </button>
      <button className="button" onClick={handleCompanyClick}>
        Company Website
      </button>
    </div>
  );
}

export default Button;
