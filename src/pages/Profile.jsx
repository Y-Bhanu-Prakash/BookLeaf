import React, { useState, useEffect } from "react";
import "./Profile.css"; // Ensure you have a CSS file for styling

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    mobile: "",
    booksTaken: 0,
  });

  useEffect(() => {
    // Retrieve user data from localStorage
    const mail = localStorage.getItem("LoggedMail");
    const data = localStorage.getItem(mail);
    if (data) {
      const parsedData = JSON.parse(data);
      setUserData({
        name: parsedData.name,
        email: parsedData.email,
        mobile: parsedData.mobile,
        booksTaken: parsedData.booksTaken || 0,
      });
    }
  }, []);

  const handleEditClick = () => setIsEditing(true);
  const handleSaveClick = () => {
    // Save the updated data back to localStorage
    localStorage.setItem("userData", JSON.stringify(userData));
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="profile">
      <h2>My Profile</h2>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={userData.name}
        onChange={handleChange}
        readOnly={!isEditing}
      />
      <label>Email:</label>
      <input
        type="text"
        name="email"
        value={userData.email}
        onChange={handleChange}
        readOnly={!isEditing}
      />
      <label>Mobile:</label>
      <input
        type="tel"
        name="mobile"
        value={userData.mobile}
        onChange={handleChange}
        readOnly={!isEditing}
      />
      <p>Books Taken: {userData.booksTaken}</p>
      {isEditing ? (
        <button onClick={handleSaveClick}>Save</button>
      ) : (
        <button onClick={handleEditClick}>Edit</button>
      )}
    </div>
  );
};

export default Profile;
