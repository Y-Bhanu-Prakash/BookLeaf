import React, { createContext, useState } from "react";

// Creating the authentication context
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // State to manage authenticated user data
  const [user, setUser] = useState(null);

  // Function to log in a user
  const login = (userData) => {
    setUser(userData); // Set user information after successful login
    localStorage.setItem("user", JSON.stringify(userData)); // Persist user session
  };

  // Function to log out a user
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user"); // Remove user session
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;