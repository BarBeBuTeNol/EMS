import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // ตรวจสอบว่าผู้ใช้กรอกข้อมูลครบถ้วนหรือยัง
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username.trim() === '' || password.trim() === '') {
      alert('Please enter both username and password!');
    } else {
      navigate('/main_hr');
    }
  };

  const handleCancelClick = () => {
    navigate('/');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Login</h1>
        <form>
          <input
            id="username"
            type="text"
            placeholder="Username"
            className="input-field"
          />
          <input
            id="password"
            type="password"
            placeholder="Password"
            className="input-field"
          />
          <div className="helper-buttons">
            <button type="button" className="helper-btn">
              Forgot Password
            </button>
            <button type="button" className="helper-btn">
              Help
            </button>
          </div>
          <div className="action-buttons">
            <button
              type="button"
              className="cancel-btn"
              onClick={handleCancelClick}
            >
              Cancel
            </button>
            <button
              type="button"
              className="done-btn"
              onClick={handleLoginClick}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
