import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Home from "./page/Home";
import Main_HR from "./page/Main_hr";
import New_user from "./page/New_user";
import Add_user_infor from "./page/Add_user_infor";

const App = () => {
  return (
    <Router> {/* เพิ่ม Router ครอบ Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main_hr" element={<Main_HR />} />
        <Route path="/create_user" element={<New_user />} />
        <Route path="/add_user_info" element={<Add_user_infor />} /> {/* เส้นทางถูกต้อง */}
      </Routes>
    </Router>
  );
};

export default App;
