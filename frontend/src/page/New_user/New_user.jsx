import React from 'react';
import { useNavigate } from 'react-router-dom';
import './New_user.css';

const New_user = () => {
  const navigate = useNavigate();

  const handleDoneClick = () => {
    navigate('/add_user_info');
  };

  const handleCancelClick = () => {
    navigate('/main_hr');
  };

  return (
    <div className="background">
      <div className="new-user-container">
        <h1>NEW USER</h1>
        <div className="input-text">
          <input type="text" placeholder="First Name" className="input-field-new-user" />
          <input type="text" placeholder="Last Name" className="input-field-new-user" />
        </div>

        <div className="input-text-center">
          <input type="text" placeholder="Username" className="input-field-new-user" />
          <input type="password" placeholder="Password" className="input-field-new-user" />
          <input type="tel" placeholder="Phone Number" className="input-field-new-user" />
        </div>

        <div className="button-container">
          <button type="button" className="button-cancel" onClick={handleCancelClick}>
            Cancel
          </button>
          <button type="button" className="button-done" onClick={handleDoneClick}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default New_user;
