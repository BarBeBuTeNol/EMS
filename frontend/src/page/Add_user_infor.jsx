import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Add_user_infor.css';
import Header from '../components/Header';

function Add_user_infor() {
  const navigate = useNavigate();

  return (
    <div className="add-user-infor-container">
      <Header />
      <div className="content">
        <h2>Add New User</h2>
        <form className="user-form">
          <div className="form-row">
            <div className="input-group">
              <label>Personal ID:</label>
              <input type="text" className="input-field" placeholder="Enter ID" />
            </div>
            <div className="input-group">
              <label>First Name:</label>
              <input type="text" className="input-field" placeholder="Enter First Name" />
            </div>
            <div className="input-group">
              <label>Last Name:</label>
              <input type="text" className="input-field" placeholder="Enter Last Name" />
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label>Age:</label>
              <input type="number" className="input-field" placeholder="Enter Age" />
            </div>
            <div className="input-group">
              <label>Date of Birth:</label>
              <input type="date" className="input-field" />
            </div>
            <div className="input-group">
              <label>Email:</label>
              <input type="email" className="input-field" placeholder="Enter Email" />
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label>Address:</label>
              <input type="text" className="input-field" placeholder="Enter Address" />
            </div>
            <div className="input-group">
              <label>Nationality:</label>
              <input type="text" className="input-field" placeholder="Enter Nationality" />
            </div>
            <div className="input-group">
              <label>Family Status:</label>
              <input type="text" className="input-field" placeholder="Enter Family Status" />
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label>Tax ID:</label>
              <input type="text" className="input-field" placeholder="Enter Tax ID" />
            </div>
            <div className="input-group">
              <label>Social Security:</label>
              <input type="text" className="input-field" placeholder="Enter Social Security" />
            </div>
            <div className="input-group">
              <label>Health Checkup:</label>
              <input type="text" className="input-field" placeholder="Enter Health Info" />
            </div>
          </div>

          <div className="form-actions">
            <button className="back-button" onClick={() => navigate(-1)}>Back</button>
            <button type="submit" className="save-button">Save</button>
          </div>
        </form>

        <div className="search-section">
          <input type="text" placeholder="Search ID" className="input-field-search" />
          <button className="search-button">Search</button>
        </div>
      </div>
    </div>
  );
}

export default Add_user_infor;
