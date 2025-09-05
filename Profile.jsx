import React from "react";

function Profile() {
  const user = JSON.parse(localStorage.getItem("selectedUser")); 
 

  return (
    <>
    
      <h1>User Profile</h1>
      <img src={user.avatar}/>
      <p>First Name: {user.first_name}</p>
      <p>Last Name: {user.last_name}</p>
      <p>Email: {user.email}</p>
    </>
  );
}

export default Profile;
