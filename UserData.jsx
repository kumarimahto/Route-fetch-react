import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function UserData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then(res => res.json())
      .then(json => setData(json.data));
  }, []);

  const handleViewProfile = (user) => {
    localStorage.setItem("selectedUser", JSON.stringify(user));
  };

  return (
    <>
      <h1>User Data List</h1>
      {data.map((user, index) => (
        <div key={index}>
          <h3>{user.first_name} {user.last_name}</h3>
          <p>{user.email}</p>
          <Link to="/profile">
            <button onClick={() => handleViewProfile(user)}>View Profile</button>
          </Link>
          <hr/>
        </div>
      ))}
    </>
  );
}

export default UserData;
