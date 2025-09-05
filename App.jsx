import React from "react";
import { Routes, Route } from "react-router-dom";
import UserData from "./UserData";
import Profile from "./Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserData />} />        
      <Route path="/profile" element={<Profile />} /> 
    </Routes>
  );
}

export default App;
