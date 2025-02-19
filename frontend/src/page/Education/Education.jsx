import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Education.css";

function Education() {
  const navigate = useNavigate();
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    setIsSaved(true);
  };

  return (
    <div className="education-background">
      <div className="education-container">
        <div className="education-head">ADD Education Data</div>
        <div className="education-content">
          <div className="education-form-layout">
            <div className="education-row">
              <div className="education-input-group">
                <label>ID:</label>
                <input type="number" className="education-input-field" placeholder="Enter ID" />
              </div>
              <div className="education-input-group">
                <label>Personal ID :</label>
                <input type="number" className="education-input-field" placeholder="Enter Personal ID" />
              </div>
            </div>
            <div className="education-input-group">
              <label>Education Level :</label>
              <input type="text" className="education-input-field" placeholder="Enter Education Level" />
            </div>
            <div className="education-input-group">
              <label>University :</label>
              <input type="text" className="education-input-field" placeholder="Enter University Name" />
            </div>
            <div className="education-input-group">
              <label>Program (Major) :</label>
              <input type="text" className="education-input-field" placeholder="Enter Major" />
            </div>
            <div className="education-input-group">
              <label>Previous Experience :</label>
              <input type="text" className="education-input-field" placeholder="Enter Experience" />
            </div>
            <div className="education-input-group">
              <label>Skill :</label>
              <input type="text" className="education-input-field" placeholder="Enter Skills" />
            </div>
            <div className="education-extra-buttons">
              <button onClick={() => navigate(-1)} className="education-back-button">Back</button>
              {isSaved ? (
                <button onClick={() => navigate("/leave")} className="education-save-done-button">Done</button>
              ) : (
                <button onClick={handleSave} className="education-save-done-button">Save</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
