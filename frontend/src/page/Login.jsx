import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate(); // เรียก useNavigate ตรงๆ ไม่ต้อง destructure

  // ฟังก์ชันสำหรับปุ่ม Done
  const handleLoginClick = () => {
    navigate('/main_hr'); // เปลี่ยนไปหน้า "/main_hr"
  };

  // ฟังก์ชันสำหรับปุ่ม Cancel
  const handleCancelClick = () => {
    navigate('/'); // เปลี่ยนไปหน้า Home (เส้นทาง "/")
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="Username" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <div className="helper-buttons">
          <button type="button" className="helper-btn">Forget</button>
          <button type="button" className="helper-btn">Help</button>
        </div>
        <div className="action-buttons">
          <button 
            type="button" 
            className="cancel-btn" 
            onClick={handleCancelClick} // เรียกฟังก์ชันเมื่อกดปุ่ม Cancel
          >
            Cancel
          </button>
          <button 
            type="button" 
            className="done-btn" 
            onClick={handleLoginClick} // เรียกฟังก์ชันเมื่อกดปุ่ม Done
          >
            Done
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
